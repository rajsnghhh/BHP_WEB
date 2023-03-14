import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { FamilyInfoService } from '../family-info.service';

@Component({
  selector: 'app-family-info-create',
  templateUrl: './family-info-create.component.html',
  styleUrls: ['./family-info-create.component.css']
})
export class FamilyInfoCreateComponent implements OnInit {

  houseHoldId: any;
  famType: any;
  createdFamilyCount: any;
  createdFamilyMembersCount: any;
  totalFamilyCount: any;
  totalFamilyMembersCount: any;
  donorName: any;
  baselineSurvey: UntypedFormGroup;
  haveChildren: string = 'N';
  childbelow18: string;
  childbelow5: string;
  institutionalDelivery: string;
  breastfeeding: string = 'NA';
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  casteList: any;
  educationList: any;
  householdIncomeDetails: any;
  religionDetails: any;
  occupationDetails: any;
  cardDetails: any;
  today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
  minDate: any;
  idTypeField: number = 0;
  haveSanitaryLatrine: string = 'N';
  addSum: number = 0;
  showAge: number = 0;
  ageCheck: number = 0;
  famData: any;
  moreFamData: any;
  cname: any;
  familyid: any;
  idCard: any;
  cardData: any;
  familyStatus: any;
  childDetails = {
    childInfo: [],
  };
  idCardNumber: any;
  totalmale: any;
  totalfemale: any;
  deleteChild: any;
  finalDelChild: any;
  showChildDetails = false;
  childSetData: any;
  activeChild: any = [];

  @ViewChild('aadhaarId') aadhaarId: ElementRef;

  constructor(private fb: UntypedFormBuilder, private modalService: NgbModal,
    private familyService: FamilyInfoService, private httpService: HttpService, public validationService: ValidationService,
    private toaster: ToastrService, private routes: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      this.famData = params;
      console.log(this.famData, 'famdata');
      console.log(this.famData?.famid, 'familyki id');
    });

    if (this.famData.famid) {
      console.log(this.famData, 'adds');

      let post = {
        activeStatus: "A",
        dataAccessDTO: this.httpService.dataAccessDTO,
        id: this.famData.famid
      }

      this.familyService.viewFamilyDetails(post).subscribe((res) => {
        this.moreFamData = res.responseObject
        console.log(this.moreFamData, 'more');
        this.createForm(this.moreFamData);
        this.familyid = this.moreFamData.familyDetailId

        if (this.moreFamData) {
          this.moreFamData.childDetailDTOList.forEach(e => {
            e.dob = e.dob.substring(0, 10);
          });

          this.childDetails.childInfo = this.moreFamData.childDetailDTOList;

        }
        this.baselineSurvey.markAllAsTouched();
      })
    }

    this.routes.queryParams.subscribe(params => {
      this.houseHoldId = params['id'];
      this.famType = params['type'];
      this.createdFamilyCount = params['cFamilyCount'];
      this.createdFamilyMembersCount = params['cFamilyMembersCount'];
      this.totalFamilyCount = params['tFamilyCount'];
      this.totalFamilyMembersCount = params['tFamilyMembersCount'];
      this.donorName = params['donor'];
    });

    this.getMinDate();
    this.createForm(this.moreFamData);

    this.childDetails.childInfo = [];
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });

    let obj = this.httpService.dataAccessDTO;

    // API call for getting caste
    this.familyService.getCasteView(obj).subscribe((response: any) => {
      this.casteList = response.responseObject;
      // console.log(this.casteList);
    })

    //API call for getting education details
    this.familyService.getEducationDetails(obj).subscribe((response: any) => {
      this.educationList = response.responseObject;
      // console.log(this.educationList);
    })

    //API call for getting monthlyIncomeDetails
    this.familyService.monthlyIncomeDetails(obj).subscribe((response: any) => {
      this.householdIncomeDetails = response.responseObject;
      // console.log(this.householdIncomeDetails);
    })

    //API call for getting religionDetails
    this.familyService.religionDetails(obj).subscribe((response: any) => {
      this.religionDetails = response.responseObject;
      // console.log(this.religionDetails);
    })

    //API call for getting occupationDetails
    this.familyService.occupationDetails(obj).subscribe((response: any) => {
      this.occupationDetails = response.responseObject;
      // console.log(this.occupationDetails);
    })

    //API call for getting idCardDetails
    this.familyService.getIdCardDetails(obj).subscribe((response: any) => {
      this.cardDetails = response.responseObject;
      // console.log(this.cardDetails);
    })
  }

  getMinDate() {
    let date = new Date();
    let toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }

    let month: any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }

    let year = date.getUTCFullYear() - 18;
    this.minDate = year + "-" + month + "-" + toDate;
  }

  createForm(data: any) {
    this.totalmale = data?.totaFamilyMemberMales;
    this.totalfemale = data?.totaFamilyMemberFemales;
    if (data?.haveChild == 'Y') {
      this.haveChildren = 'Y'
    } else {
      this.haveChildren = 'N'
    }

    if (data?.childrenBelow18 == 'Y') {
      this.childbelow18 = 'Y'
      this.showChildDetails = true;
    } else {
      this.childbelow18 = 'N'
    }

    if (data?.childrenBelow5 == 'Y') {
      this.childbelow5 = 'Y'
    } else {
      this.childbelow5 = 'N'
    }


    if (data?.totaFamilyMemberMales == 0) {
      var setMaleCount = "0";
    }

    else {
      setMaleCount = data?.totaFamilyMemberMales;
    }

    if (data?.totaFamilyMemberSrcitizen == 0) {
      var setSeniorCount = "0";
    }

    else {
      setSeniorCount = data?.totaFamilyMemberSrcitizen;
    }

    this.baselineSurvey = this.fb.group({
      firstName: [data?.firstName ? data?.firstName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: [data?.middleName ? data?.middleName : '', Validators.compose([Validators.minLength(3)])],
      lastName: [data?.lastName ? data?.lastName : '', Validators.compose([Validators.minLength(3)])],
      age: [data?.age ? data?.age : '', Validators.compose([Validators.required, Validators.maxLength(2)])],
      husbandName: [data?.husbandOrGuardianName ? data?.husbandOrGuardianName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      mobile: [data?.mobileNumber ? data?.mobileNumber : '', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      idtype: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId ? data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId : ''],
      aadhar: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 1 ? data?.identityCardDTOList[0]?.number : '', Validators.compose([Validators.required, Validators.minLength(12), Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 2 ? data?.identityCardDTOList[0]?.number : '', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 3 ? data?.identityCardDTOList[0]?.number : '', Validators.compose([Validators.required, Validators.pattern("([A-Z]{2}\\/[0-9]{2}\\/[0-9]{3}\\/[0-9]{6})|([A-Z]{3}[0-9]{7})")])],
      religion: [data?.religionMasterDTO?.religionMasterId ? data?.religionMasterDTO?.religionMasterId : '', Validators.required],
      caste: [data?.casteTypeMasterDTO?.casteTypeMasterId ? data?.casteTypeMasterDTO?.casteTypeMasterId : '', Validators.required],
      education: [data?.educationalQualificationMasterDTO?.educationalQualificationMasterId ? data?.educationalQualificationMasterDTO?.educationalQualificationMasterId : ''],
      household: [data?.monthlyIncomeMasterDTO?.monthlyIncomeMasterId ? data?.monthlyIncomeMasterDTO?.monthlyIncomeMasterId : ''],
      occupation: [data?.occupationMasterDTO?.occupationMasterId ? data?.occupationMasterDTO?.occupationMasterId : ''],
      fmale: [setMaleCount, Validators.required],
      ffemale: [data?.totaFamilyMemberFemales ? data?.totaFamilyMemberFemales : '', Validators.required],
      fsenior: [setSeniorCount, Validators.required],
      bbMicro: [data?.bbMicroGroupMembership ? data?.bbMicroGroupMembership : '', Validators.required],
      pregnancy: [data?.pregnantWoman ? data?.pregnantWoman : '', Validators.required],
      sanitary: data?.haveSanitaryLatrine ? data?.haveSanitaryLatrine : this.haveSanitaryLatrine,
      haveChildren: data?.haveChild ? data?.haveChild : this.haveChildren,
      child: [data?.totalNumberOfChildren ? data?.totalNumberOfChildren : '', Validators.required],
      childbelow18: data?.childrenBelow18 ? data?.childrenBelow18 : 'NA',
      childbelow5: data?.childrenBelow5 ? data?.childrenBelow5 : 'NA',
      institutional: [data?.institutionalDelivery ? data?.institutionalDelivery : '', Validators.required],
      breastFeeding: data?.lactetingMother ? data?.lactetingMother : this.breastfeeding
    });
    this.addMF();
    this.IdType(data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId);

  }

  get f() {
    return this.baselineSurvey.controls;
  }

  changesanitary(e) {
    this.haveSanitaryLatrine = e.target.value;
  }

  havesChildren(e) {
    this.haveChildren = e.target.value;
    this.baselineSurvey.controls.child.setValue('');
    this.baselineSurvey.controls.childbelow18.setValue('');
    this.showChildDetails = false;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    if (this.famData.famid > 0) {
      this.childDetails.childInfo.filter((v) => v.status = 'D')
    }
    else {
      this.childDetails.childInfo = [];
    }
  }

  childBelow18(e) {
    this.childbelow18 = e.target.value;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    if (this.famData.famid > 0) {
      this.childDetails.childInfo.filter((v) => v.status = 'D')
    }
    else {
      this.childDetails.childInfo = [];
    }
  }

  childBelow5(e) {
    this.childbelow5 = e.target.value;
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
  }

  institutionallDelivery(e) {
    this.institutionalDelivery = e.target.value;
  }

  breastFeeding(e) {
    this.breastfeeding = e.target.value;
  }

  saveBaselineCreateBack() {
    this.route.navigate(['/Baseline-Survey/view'])
  }

  resetBaselineCreate() {
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.haveChildren = 'N';
    this.childbelow18 = '';
    this.childbelow5 = '';
    this.breastfeeding = 'NA';
    this.institutionalDelivery = '';
    this.showChildDetails = false;
    this.createForm(this.moreFamData);
    this.addSum = 0;
  }

  saveFamilyCreate() {

    let item = this.baselineSurvey.value;
    let idValue = '';

    item.firstName = this.validationService.camelize(this.baselineSurvey.value.firstName.trim());

    item.middleName = this.validationService.camelize(this.baselineSurvey.value.middleName.trim());

    item.lastName = this.validationService.camelize(this.baselineSurvey.value.lastName.trim());

    item.husbandName = this.validationService.camelize(this.baselineSurvey.value.husbandName.trim());

    this.childDetails.childInfo.forEach(item => {
      if (item.childName == '') {
        this.childDetails.childInfo = [];
      }
      item.childName = this.validationService.camelize(item.childName.trim());
    })

    if (item.idtype == 1) {
      idValue = item.aadhar;
    } else if (item.idtype == 2) {
      idValue = item.pan;
    } else if (item.idtype == 3) {
      idValue = item.voter;
    }

    let data = {
      familyDetailRemaingStatusDTO: {
        createdFamilyCount: this.createdFamilyCount,
        createdFamilyMambersCount: this.createdFamilyMembersCount,
        totalFamilyCount: this.totalFamilyCount,
        totalFamilyMambersCount: this.totalFamilyMembersCount
      }
    }

    if (item.idtype != 1 || item.idtype != 2 || item.idtype != 3) {
      this.idCard = []
    }

    if (item.idtype == 1 || item.idtype == 2 || item.idtype == 3) {
      this.idCard = [
        {
          familyIdentityCardMapId: this.moreFamData?.identityCardDTOList[0]?.familyIdentityCardMapId ? this.moreFamData?.identityCardDTOList[0]?.familyIdentityCardMapId : 0,
          identityCardTypesMasterDTO: {
            identityCardTypesMasterId: item.idtype,
            name: this.cardDetails.filter((x) => x.identityCardTypesMasterId == item.idtype)[0]?.name
          },
          number: idValue
        }
      ]
    }

    if (this.finalDelChild != undefined) {
      this.childSetData = this.finalDelChild ? this.finalDelChild : this.moreFamData?.childDetailDTOList;
    }

    else {
      this.childSetData = this.childDetails.childInfo
    }


    let postBody = {

      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailDTO: {
        age: item.age,
        bbMicroGroupMembership: item.bbMicro,
        casteTypeMasterDTO: {
          casteTypeDescription: this.casteList.filter((x) => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription ?
            this.casteList.filter((x) => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription : '',
          casteTypeMasterId: item.caste ? item.caste : 0
        },
        childDetailDTOList: this.childSetData,
        childrenBelow18: item.childbelow18 ? item.childbelow18 : 'NA',
        childrenBelow5: item.childbelow5 ? item.childbelow5 : 'NA',
        createdOn: this.moreFamData?.createdOn ? this.moreFamData?.createdOn : 'string',
        educationalQualificationMasterDTO: {
          educationalQualificationMasterId: item.education ? item.education : 0,
          qualification: this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]?.qualification ?
            this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]?.qualification : ''
        },
        existingChildCount: 0,
        familyDetailId: this.moreFamData?.familyDetailId ? this.moreFamData?.familyDetailId : 0,
        familyDetailRemaingStatusDTO: this.moreFamData?.familyDetailRemaingStatusDTO ? this.moreFamData?.familyDetailRemaingStatusDTO : data.familyDetailRemaingStatusDTO,
        familyNumber: this.moreFamData?.familyNumber ? this.moreFamData?.familyNumber : "string",
        familyType: this.moreFamData?.familyType ? this.moreFamData?.familyType : this.famType,
        firstName: item.firstName,
        haveChild: item.haveChildren,
        haveSanitaryLatrine: item.sanitary,
        householdDetailsId: this.moreFamData?.householdDetailsId ? this.moreFamData?.householdDetailsId : this.houseHoldId,
        husbandOrGuardianName: item.husbandName,
        identityCardDTOList: this.idCard,
        institutionalDelivery: item.institutional ? item.institutional : 'NA',
        lactetingMother: item.breastFeeding,
        lastName: item.lastName,
        middleName: item.middleName,
        mobileNumber: item.mobile,
        monthlyIncomeMasterDTO: {
          incomeRange: this.householdIncomeDetails.filter((x) => x.monthlyIncomeMasterId == item.household)[0]?.incomeRange ?
            this.householdIncomeDetails.filter((x) => x.monthlyIncomeMasterId == item.household)[0]?.incomeRange : '',
          monthlyIncomeMasterId: item.household ? item.household : 0
        },
        occupationMasterDTO: {
          occupationDescription: this.occupationDetails.filter((x) => x.occupationMasterId == item.occupation)[0]?.occupationDescription ?
            this.occupationDetails.filter((x) => x.occupationMasterId == item.occupation)[0]?.occupationDescription : '',
          occupationMasterId: item.occupation ? item.occupation : 0
        },
        pregnantWoman: item.pregnancy,
        religionMasterDTO: {
          religionMasterDescription: this.religionDetails.filter((x) => x.religionMasterId == item.religion)[0]?.religionMasterDescription ?
            this.religionDetails.filter((x) => x.religionMasterId == item.religion)[0]?.religionMasterDescription : '',
          religionMasterId: item.religion ? item.religion : 0
        },
        status: "A",
        totaFamilyMemberFemales: item.ffemale,
        totaFamilyMemberMales: item.fmale,
        totaFamilyMemberSrcitizen: item.fsenior,
        totalNumberOfChildren: item.child ? item.child : 0
      }
    }

    console.log(postBody);

    if (!this.baselineSurvey.value.firstName) {
      this.showError('First Name should not be blank');
      return;
    } else if (this.baselineSurvey.value.firstName.length < 3) {
      this.showError('First Name should be at least 3 char long');
      return;
    }

    if (this.baselineSurvey.value.middleName.length) {
      if (this.baselineSurvey.value.middleName.length < 3) {
        this.showError('Middle Name should be at least 3 char long');
        return;
      }
    }

    if (this.baselineSurvey.value.lastName.length) {
      if (this.baselineSurvey.value.lastName.length < 3) {
        this.showError('Last Name should be at least 3 char long');
        return;
      }
    }

    if (!this.baselineSurvey.value.age) {
      this.showError('Age should not be blank');
      return;
    }

    if (!this.baselineSurvey.value.husbandName) {
      this.showError('Husband Name should not be blank');
      return;
    } else if (this.baselineSurvey.value.husbandName.length < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }

    if (this.baselineSurvey.value.mobile.length) {
      if (this.baselineSurvey.value.mobile.length != 10) {
        this.showError('Mobile Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(
          this.baselineSurvey.value.mobile.substr(0, 1)
        );
        // console.log(startChar);
        if (startChar < 6) {
          this.showError('Mobile Number must start from 6-9');
          return;
        }
      }

    }


    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 1) {
        if (!this.baselineSurvey.value.aadhar) {
          this.showError('Please Enter Aadhaar Card No.');
          return;
        }

        var regexp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
        var x = this.baselineSurvey.value.aadhar;
        if (!regexp.test(x)) {
          this.showError('Invalid Aadhaar Card No!');
          return;
        }
      }

    }

    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 2) {
        if (!this.baselineSurvey.value.pan) {
          this.showError('Please Enter PAN Card No');
          return;
        }
        var regexp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        var x = this.baselineSurvey.value.pan;
        if (!regexp.test(x)) {
          this.showError('Invalid Pan Card No!');
          return;
        }

      }
    }

    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 3) {
        if (!this.baselineSurvey.value.voter) {
          this.showError('Please Enter Voter Card No');
          return;
        }

        if (this.f.voter?.errors?.pattern) {
          this.showError('Invalid Voter Card No!');
          return;
        }
        // var regexp = /^([A-Z]){3}([0-9]){7}?$/;
        // var x = this.baselineSurvey.value.voter;
        // if (!regexp.test(x)) {
        //   this.showError('Invalid Voter Card No!');
        //   return;
        // }
      }
    }


    if (!this.baselineSurvey.value.religion) {
      this.showError('Please select Religion');
      return;
    }

    if (!this.baselineSurvey.value.caste) {
      this.showError('Please select Caste');
      return;
    }

    if (!this.baselineSurvey.value.fmale) {
      this.showError('Please Enter Total Family Member Male');
      return;
    }

    if (!this.baselineSurvey.value.ffemale) {
      this.showError('Please Enter Total Family Member Female');
      return;
    }

    if (!this.baselineSurvey.value.fsenior) {
      this.showError('Please Enter Total Family Member Senior Citizen');
      return;
    }

    if (!this.baselineSurvey.value.bbMicro) {
      this.showError('Please select Micro Group');
      return;
    }

    if (!this.baselineSurvey.value.pregnancy) {
      this.showError('Please select Pregnancy');
      return;
    }

    if (this.baselineSurvey.value.haveChildren == 'Y') {
      if (!this.baselineSurvey.value.child) {
        this.showError('Please enter children count');
        return;
      }
    }

    if (this.baselineSurvey.value.haveChildren == 'Y') {
      if (!this.baselineSurvey.value.childbelow18) {
        this.showError('Please select child below 18 years');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow18 == 'Y') {
      if (!this.baselineSurvey.value.childbelow5) {
        this.showError('Please select child below 5 years');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      if (!this.baselineSurvey.value.institutional) {
        this.showError('Please select institutional delivery');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      if (!this.baselineSurvey.value.breastFeeding) {
        this.showError('Please select breastfeeding');
        return;
      }
    }

    if (this.baselineSurvey.value.haveChildren == 'N') {
      this.baselineSurvey.value.child = 0;
    }

    this.childDetails.childInfo.forEach((item, index) => {
      this.ageCheck = item.dob
      if (this.ageCheck) {
        const convertAge = new Date(this.ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.childDetails.childInfo[index].showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
      }
    })

    this.activeChild = this.childDetails.childInfo.filter((x) => x.status == 'A')
    // console.log(this.activeChild.length);


    if (this.baselineSurvey.value.childbelow18 == 'Y' || this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N' || this.baselineSurvey.value.childbelow5 == 'Y') {
      if (this.activeChild.length == 0) {
        this.showError('Please add child details');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow18 == 'Y') {
      if (this.showAge > 18) {
        this.showError('Please add a child below 18 years');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      let isvalid = 0;
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 5) {
          isvalid += 1;
        }
      })

      if (isvalid == 0) {
        this.showError('Please add a child below 5 years');
        return;
      }

    }

    if (this.baselineSurvey.value.childbelow18 == 'Y' && this.baselineSurvey.value.childbelow5 == 'N') {
      let isvalid = 0;
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 5) {
          isvalid += 1;
        }
      })

      if (isvalid > 0) {
        this.showError('You can not add child below 5 years');
        return;
      }

    }

    if (this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N') {

      let isvalid = 0;
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 2) {
          isvalid += 1;
        }
      })

      if (isvalid == 0) {
        this.showError('Please add a child below 2 years');
        return;
      }
    }

    if (this.baselineSurvey.value.childbelow5 == 'Y' && this.baselineSurvey.value.breastFeeding == 'NA') {
      let isvalid = 0;
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 2) {
          isvalid += 1;
        }
      })

      if (isvalid > 0) {
        this.showError('You can not add child below 2 years');
        return;
      }

    }

    let maleData = this.childDetails.childInfo.filter((x) => x.sex == 'M' && x.status == 'A')

    let femaleData = this.childDetails.childInfo.filter((x) => x.sex == 'F' && x.status == 'A')

    if (this.baselineSurvey.value.fmale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      return;
    }

    if (this.baselineSurvey.value.ffemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      return;
    }

    if (this.famData.famid) {
      this.familyService.saveFamily(postBody).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSuccess(response.message);
          this.route.navigate(['Baseline-Survey/view']);
        }
        else {
          this.showError(response.message);
        }

      })

    }

    else {
      this.familyService.saveFamily(postBody).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSuccess(response.message);
          this.resetBaselineCreate();
        }
        else {
          this.showError(response.message);
        }

      })

    }
  }

  openModal(child) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(child, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  addNewChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: this.familyid ? this.familyid : 0,
      sex: '',
      status: 'A'
    });
  }

  childModalDismiss() {
    this.modalReference?.close();
  }

  removeNewChild(i) {

    if (this.famData.famid > 0) {
      this.childDetails.childInfo[i] = {
        age: 'string',
        childDetailId: this.childDetails.childInfo[i].childDetailId,
        childName: this.childDetails.childInfo[i].childName,
        createdOn: 'string',
        dob: this.childDetails.childInfo[i].dob,
        familyDetailId: this.childDetails.childInfo[i].familyDetailId,
        sex: this.childDetails.childInfo[i].sex,
        status: 'D'
      };

      this.finalDelChild = this.childDetails.childInfo;

      console.log(this.finalDelChild, 'arrayList');

    }

    else {
      this.childDetails.childInfo.splice(i, 1);
    }

    if (this.childDetails.childInfo[i]?.childName == '' || this.childDetails.childInfo[i]?.dob == '' ||
      this.childDetails.childInfo[i]?.sex == '' || this.childDetails.childInfo[i]?.childDetailId == 0) {
      this.childDetails.childInfo.splice(i, 1);
    }

  }

  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }


  zeroAge() {
    if (this.baselineSurvey.value.age.startsWith(0)) {
      this.showError('Age should not be zero');
      this.baselineSurvey.controls.age.setValue('');
      return;
    }

  }

  zeroFemale() {
    if (this.baselineSurvey.value.ffemale.startsWith(0)) {
      this.showError('Female count should not be zero');
      this.baselineSurvey.controls.ffemale.setValue('');
      return;
    }

  }

  familyCountChecking() {
    let totalMale: number = 0;
    let totalFemale: number = 0;
    let totalsenior: number = 0;


    let item = this.baselineSurvey.value;
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }
    if (item.fsenior != '' && item.fsenior != undefined) {
      totalsenior = parseInt(item.fsenior);
    }
    if (totalsenior > (totalMale + totalFemale)) {
      this.baselineSurvey.controls.fsenior.setValue('');
      this.showError('Senior Citizen count can not be greater than the sum of Male & Female')
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Family Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Family Save', {
      timeOut: 3000,
    });
  }

  IdType(IdType) {

    if (IdType == '') {
      this.idTypeField = 0;
    }
    else {
      this.idTypeField = IdType;
    }

    if (this.baselineSurvey.value.idtype == '') {
      this.baselineSurvey.controls.pan.setValue('');
      this.baselineSurvey.controls.voter.setValue('');
      this.baselineSurvey.controls.aadhar.setValue('');
    }

  }

  radioValueCheck(x) {
    this.showChildDetails = (x === 1);
  }

  checkChildDisabled() {
    let flag = true;

    if (this.childDetails.childInfo.length == 0) {
      flag = false;
    }

    this.childDetails.childInfo.forEach((item) => {
      if (!item.childName || !item.dob || !item.sex) {
        flag = false;
      }
    });

    return flag;
  }


  addMF() {
    let item = this.baselineSurvey.value;
    let male = item.fmale == '' ? 0 : parseInt(item.fmale);
    let female = item.ffemale == '' ? 0 : parseInt(item.ffemale);
    this.addSum = male + female;

    this.checkHousehold();
  }

  checkHousehold() {
    if (this.famData.famid > 0) {
      var SumForMaleFemaleCheck = this.totalmale + this.totalfemale
      console.log(SumForMaleFemaleCheck, 'checkData');

      var forEditHouseHoldMemberCount = this.createdFamilyMembersCount - SumForMaleFemaleCheck
      console.log(forEditHouseHoldMemberCount, 'addd');

      let totalHousehold = this.totalFamilyMembersCount - forEditHouseHoldMemberCount;
      let totalMale: number = 0;
      let totalFemale: number = 0;
      let item = this.baselineSurvey.value;

      if (item.fmale != '' && item.fmale != undefined) {
        totalMale = parseInt(item.fmale);
      }
      if (item.ffemale != '' && item.ffemale != undefined) {
        totalFemale = parseInt(item.ffemale);
      }
      console.log(totalHousehold, 'avvf');


      if (totalHousehold < (totalMale + totalFemale) && totalHousehold != (totalMale + totalFemale)) {
        this.baselineSurvey.controls.fmale.setValue('');
        this.baselineSurvey.controls.ffemale.setValue('');
        this.addSum = 0;
        this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
      }
    } else {
      let totalHousehold = this.totalFamilyMembersCount - this.createdFamilyMembersCount;
      console.log(this.addSum, 'addd');
      let totalMale: number = 0;
      let totalFemale: number = 0;
      let item = this.baselineSurvey.value;

      if (item.fmale != '' && item.fmale != undefined) {
        totalMale = parseInt(item.fmale);
      }
      if (item.ffemale != '' && item.ffemale != undefined) {
        totalFemale = parseInt(item.ffemale);
      }
      console.log(totalHousehold, 'avvs');

      if (totalHousehold < (totalMale + totalFemale) && totalHousehold != (totalMale + totalFemale)) {
        this.baselineSurvey.controls.fmale.setValue('');
        this.baselineSurvey.controls.ffemale.setValue('');
        this.addSum = 0;
        this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
      }
    }

  }

  checkChildren() {
    let totalChildren: number = 0;
    let totalMale: number = 0;
    let totalFemale: number = 0;
    let totalSenior: number = 0;

    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }
    if (item.fsenior != '' && item.fsenior != undefined) {
      totalSenior = parseInt(item.fsenior);
    }

    if (totalChildren > ((totalMale + totalFemale) - totalSenior) && totalChildren != ((totalMale + totalFemale) - totalSenior)) {
      this.showError('Children count should be less than or equal to (Male + Female) – (Sr.Citizen)');
      this.baselineSurvey.controls.child.setValue('');
    }


    if (this.baselineSurvey.value.child.startsWith(0)) {
      this.showError('Child count should not be zero');
      this.baselineSurvey.controls.child.setValue('');
      return;
    }
  }


  saveChild() {
    let totalChildren: number = 0;

    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }

    var actLen = [];
    actLen = this.childDetails.childInfo.filter((x) => x.status == 'A');


    if (totalChildren < actLen.length) {
      this.showError(' Entered child data should not be more than children count');
      // return;
    } else {
      console.log(this.childDetails);
      console.log(this.finalDelChild);

      this.modalReference.close();
    }

  }

  aadharcardValidation(event) {
    let data;
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      data = this.aadhaarId.nativeElement.value
        .replace(/[^0-9]/g, '')
        .replace(/\W/gi, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
    } else {
      data = this.aadhaarId.nativeElement.value;
    }
    let q: any = this.aadhaarId.nativeElement;
    q.value = data;
    return data;
  }

  restrictTypeOfDate() {
    return false;
  }

}
