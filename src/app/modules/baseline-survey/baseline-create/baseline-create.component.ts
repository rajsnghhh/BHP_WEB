
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../../core/http/branch.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BaselineSurveyService } from '../baseline-survey.service';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-baseline-create',
  templateUrl: './baseline-create.component.html',
  styleUrls: ['./baseline-create.component.css']
})
export class BaselineCreateComponent implements OnInit {
  baselineSurvey: FormGroup;
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
  familyField: string;
  haveSanitaryLatrine: string = 'N';
  addSum: number = 0;
  showAge: number = 0;
  ageCheck: number = 0;
  showChildDetails = false;
  childDetails = {
    childInfo: [],
  };
  idCard: any;
  loader: boolean = true;
  @ViewChild('aadhaarId') aadhaarId: ElementRef;
  @ViewChild(LocationComponent) locationComponent: LocationComponent;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private baselineService: BaselineSurveyService,
    private httpService: HttpService, public validationService: ValidationService, private toaster: ToastrService,
    private httpBranch: BranchService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.getMinDate();
    this.createForm();
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
    this.baselineService.getCasteView(obj).subscribe((response: any) => {
      this.casteList = response.responseObject;
      // console.log(this.casteList);
    })

    //API call for getting education details
    this.baselineService.getEducationDetails(obj).subscribe((response: any) => {
      this.educationList = response.responseObject;
      // console.log(this.educationList);
    })

    //API call for getting monthlyIncomeDetails
    this.baselineService.monthlyIncomeDetails(obj).subscribe((response: any) => {
      this.householdIncomeDetails = response.responseObject;
      // console.log(this.householdIncomeDetails);
    })

    //API call for getting religionDetails
    this.baselineService.religionDetails(obj).subscribe((response: any) => {
      this.religionDetails = response.responseObject;
      // console.log(this.religionDetails);
    })

    //API call for getting occupationDetails
    this.baselineService.occupationDetails(obj).subscribe((response: any) => {
      this.occupationDetails = response.responseObject;
      // console.log(this.occupationDetails);
    })

    //API call for getting idCardDetails
    this.baselineService.getIdCardDetails(obj).subscribe((response: any) => {
      this.cardDetails = response.responseObject;
      // console.log(this.cardDetails);
    })

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

  createForm() {
    this.baselineSurvey = this.fb.group({
      family: ['', Validators.required],
      totalFamily: ['', Validators.required],
      households: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      age: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      husbandName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mobile: ['', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      idtype: [''],
      aadhar: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[A-Z]{3}[0-9]{7}")])],
      religion: ['', Validators.required],
      caste: ['', Validators.required],
      education: [''],
      household: [''],
      occupation: [''],
      fmale: ['', Validators.required],
      ffemale: ['', Validators.required],
      fsenior: ['', Validators.required],
      bbMicro: ['', Validators.required],
      pregnancy: ['', Validators.required],
      sanitary: this.haveSanitaryLatrine,
      haveChildren: this.haveChildren,
      child: ['', Validators.required],
      childbelow18: this.childbelow18,
      childbelow5: this.childbelow5,
      institutional: ['', Validators.required],
      breastFeeding: this.breastfeeding,
    });
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
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }]
  }

  childBelow18(e) {
    this.childbelow18 = e.target.value;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }]
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
    window.history.go(-1);
  }

  resetBaselineCreate() {
    this.idTypeField = 0;
    this.familyField = '';
    this.haveSanitaryLatrine = 'N';
    this.haveChildren = 'N';
    this.childbelow18 = '';
    this.childbelow5 = '';
    this.breastfeeding = 'NA';
    this.institutionalDelivery = '';
    this.showChildDetails = false;
    this.createForm();
    this.locationComponent.createForm();
    this.addSum = 0;
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];
  }

  saveMoreBaselineCreate() {
    console.log(this.baselineSurvey.value)
    let item = this.baselineSurvey.value;
    let idValue = '';
    let tfamily;

    item.firstName = this.validationService.firstCaps(
      item.firstName.trim()
    );

    item.middleName = this.validationService.firstCaps(
      item.middleName.trim()
    );

    item.lastName = this.validationService.firstCaps(
      item.lastName.trim()
    );

    item.husbandName = this.validationService.firstCaps(
      item.husbandName.trim()
    );

    this.childDetails.childInfo.forEach(item => {
      if (item.childName == '') {
        this.childDetails.childInfo = [];
      }
    })

    if (item.idtype == 1) {
      idValue = item.aadhar;
    } else if (item.idtype == 2) {
      idValue = item.pan;
    } else if (item.idtype == 3) {
      idValue = item.voter;
    }

    if (this.familyField == 'J') {
      tfamily = item.totalFamily;
    } else if (this.familyField == 'S') {
      tfamily = 1;
    } else {
      tfamily = '';
    }

    if (item.idtype != 1 || item.idtype != 2 || item.idtype != 3) {
      this.idCard = []
    }

    if (item.idtype == 1 || item.idtype == 2 || item.idtype == 3) {
      this.idCard = [
        {
          familyIdentityCardMapId: 0,
          identityCardTypesMasterDTO: {
            identityCardTypesMasterId: item.idtype,
            name: this.cardDetails.filter((x) => x.identityCardTypesMasterId == item.idtype)[0]?.name
          },
          number: idValue
        }
      ]
    }

    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName,
        },
        branchVillageMapId: this.sidebarService.branchVillageMapId,
        familyDetailDTOList: [
          {
            age: item.age,
            bbMicroGroupMembership: item.bbMicro,
            casteTypeMasterDTO: {
              casteTypeDescription: this.casteList.filter((x) => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription,
              casteTypeMasterId: item.caste
            },
            childDetailDTOList: this.childDetails.childInfo,
            childrenBelow18: item.childbelow18 ? item.childbelow18 : 'NA',
            childrenBelow5: item.childbelow5 ? item.childbelow5 : 'NA',
            createdOn: 'string',
            educationalQualificationMasterDTO: {
              educationalQualificationMasterId: item.education ? item.education : 0,
              qualification: this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]?.qualification ?
                this.educationList.filter((x) => x.educationalQualificationMasterId == item.education)[0]?.qualification : ''
            },
            existingChildCount: 0,
            familyDetailId: 0,
            familyDetailRemaingStatusDTO: {
              createdFamilyCount: 0,
              createdFamilyMambersCount: 0,
              totalFamilyCount: 0,
              totalFamilyMambersCount: 0
            },
            familyNumber: "string",
            familyType: item.family,
            firstName: item.firstName,
            haveChild: item.haveChildren,
            haveSanitaryLatrine: item.sanitary,
            householdDetailsId: 0,
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
              religionMasterDescription: this.religionDetails.filter((x) => x.religionMasterId == item.religion)[0]?.religionMasterDescription,
              religionMasterId: item.religion
            },
            status: "A",
            totaFamilyMemberFemales: item.ffemale,
            totaFamilyMemberMales: item.fmale,
            totaFamilyMemberSrcitizen: item.fsenior,
            totalNumberOfChildren: item.child ? item.child : 0
          }
        ],
        familyType: item.family,
        houseHoldNumber: "string",
        householdDetailId: 0,
        numberOfFamily: tfamily,
        status: "A",
        swasthyaSahayikaDTO: {
          name: this.sidebarService.swasthyaSahayikaName ? this.sidebarService.swasthyaSahayikaName : '',
          swasthyaSahayikaId: parseInt(this.sidebarService.swasthyaSahayikaId) ? parseInt(this.sidebarService.swasthyaSahayikaId) : 0
        },
        totalMembers: item.households
      }
    }
    console.log(postBody);

    if (!this.locationComponent.locationForm.value.block) {
      this.showError('Please Select Block');
      return;
    }

    if (!this.locationComponent.locationForm.value.gp) {
      this.showError('Please Select GP');
      return;
    }

    if (!this.locationComponent.locationForm.value.gram) {
      this.showError('Please Select Village');
      return;
    }

    if (!this.baselineSurvey.value.family) {
      this.showError('Please Select Family Type');
      return;
    }

    if (this.familyField === 'J') {
      if (!this.baselineSurvey.value.totalFamily) {
        this.showError('Please Enter Total Number of Family');
        return;
      } else if (this.baselineSurvey.value.totalFamily < 2) {
        this.showError('Joint Family will be minimum two');
        return;
      }
    }

    if (!this.baselineSurvey.value.households) {
      this.showError('Please Enter Total Member of Household (All Family)');
      return;
    }

    if (this.familyField === 'J') {
      if (this.baselineSurvey.value.households) {
        let totalHousehold: number = 0;
        let totalFamily: number = 0;
        let item = this.baselineSurvey.value;

        if (item.totalFamily != '' && item.totalFamily != undefined) {
          totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
          totalHousehold = parseInt(item.households)
        }

        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
          this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
          return;
        }
      }

    }

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

        var regexp = /^([A-Z]){3}([0-9]){7}?$/;
        var x = this.baselineSurvey.value.voter;
        if (!regexp.test(x)) {
          this.showError('Invalid Voter Card No!');
          return;
        }
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
      console.log(this.childDetails.childInfo);
      this.ageCheck = item.dob
      if (this.ageCheck) {
        const convertAge = new Date(this.ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.childDetails.childInfo[index].showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
        console.log(this.childDetails.childInfo[index].showAge);

      }
    })

    if (this.baselineSurvey.value.childbelow18 == 'Y' || this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N' || this.baselineSurvey.value.childbelow5 == 'Y') {
      if (this.childDetails.childInfo.length == 0) {
        this.showError('Please add child details');
        return;
      }
    }

    // if (this.baselineSurvey.value.childbelow18 == 'Y') {
    //   if (this.showAge > 18) {
    //     this.showError('Please add a child below 18 years');
    //     return;
    //   }
    // }

    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      let isvalid = 0;
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 5) {
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
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 5) {
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
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 2) {
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
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 2) {
          isvalid += 1;
        }
      })

      if (isvalid > 0) {
        this.showError('You can not add child below 2 years');
        return;
      }

    }

    if (this.baselineSurvey.value.child < this.childDetails.childInfo.length) {
      this.showError(' Entered child data should not be more than children count');
      return;
    }

    let maleData = this.childDetails.childInfo.filter((x) => x.sex == 'M')
    // console.log(maleData.length);

    let femaleData = this.childDetails.childInfo.filter((x) => x.sex == 'F')
    // console.log(femaleData.length);

    if (this.baselineSurvey.value.fmale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      return;
    }

    if (this.baselineSurvey.value.ffemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      return;
    }

    this.baselineService.saveBaselineSurvey(postBody).subscribe((response: any) => {
      console.log(response);
      if (response.message == "Success") {
        this.showSuccess(response.message);
        this.resetBaselineCreate();
      }
      else {
        this.showError(response.responseObject);
      }

    })

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
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });
  }

  childModalDismiss() {
    this.modalReference?.close();
  }

  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }

  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }

  }

  zeroFemale() {
    if (this.baselineSurvey.value.ffemale.startsWith(0)) {
      this.showError('Female count should not be zero');
      this.baselineSurvey.controls.ffemale.setValue('');
      return;
    }

  }

  zeroAge() {
    if (this.baselineSurvey.value.age.startsWith(0)) {
      this.showError('Age should not be zero');
      this.baselineSurvey.controls.age.setValue('');
      return;
    }

  }

  zeroMembers() {
    if (this.baselineSurvey.value.households.startsWith(0)) {
      this.showError('Members should not be zero');
      this.baselineSurvey.controls.households.setValue('');
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
    this.toaster.success(message, 'Baseline Register Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Baseline Register', {
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

  familyType(id) {
    this.familyField = id;
    this.baselineSurvey.controls.households.setValue('');
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
    let totalHousehold: number = 0;
    let totalMale: number = 0;
    let totalFemale: number = 0;
    let item = this.baselineSurvey.value;

    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households)
    }
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }

    if (totalHousehold < (totalMale + totalFemale) && totalHousehold != (totalMale + totalFemale)) {
      this.baselineSurvey.controls.fmale.setValue('');
      this.baselineSurvey.controls.ffemale.setValue('');
      this.addSum = 0;
      this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female')
    }

  }

  checkFamily() {
    let totalHousehold: number = 0;
    let totalFamily: number = 0;
    let item = this.baselineSurvey.value;

    if (item.totalFamily != '' && item.totalFamily != undefined) {
      totalFamily = parseInt(item.totalFamily);
    }
    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households)
    }

    if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
      this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
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

  familyNo(e) {

    if (e.target.value < 2) {
      this.showError('Joint Family will be minimum two');
    }

  }

  saveChild() {
    let totalChildren: number = 0;

    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }

    if (totalChildren < this.childDetails.childInfo.length) {
      this.showError(' Entered child data should not be more than children count');
      // return;
    } else {
      console.log(this.childDetails);
      this.modalReference.close();
    }

  }

  restrictTypeOfDate() {
    return false;
  }

}

