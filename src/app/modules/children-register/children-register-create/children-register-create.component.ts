import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { ChildrenRegisterService } from '../children-register.service';
import CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children-register-create',
  templateUrl: './children-register-create.component.html',
  styleUrls: ['./children-register-create.component.css']
})

export class ChildrenRegisterCreateComponent implements OnInit {
  locationForm: UntypedFormGroup;
  today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
  minDate: any;
  modalContent: any
  modalReference: any;
  existingFamilyList: any;
  existingFamilyListZero: any;
  existingFamilyListNonZero: any;
  existingFamilyListAll: any;
  existingFamilyDetails: any;
  existingChildList: any;
  checkChildCount: number;
  familyID: any;
  checkTotalMale: any;
  checkTotalFemale: any;
  showAge: any;
  ide: any;
  maleLen: any;
  femaleLen: any;
  childStatusList: any;
  setChild: any;
  childDetails = {
    childInfo: [],
  };
  childViewExistingChild: any;
  childFamId: any;
  loader: boolean = true;
  page = 1;
  pageSize = 6;
  searchText: any;
  searchFullscreen: boolean;
  childIndexId: any;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;
  role: any;
  updateMode: boolean;
  deleteMode: boolean;
  createMode: boolean;
  branchVillageMapId: any;
  branchEnddateDetailDTO: any;
  timeToTentativeEndDate: any;

  constructor(private fb: UntypedFormBuilder, private childService: ChildrenRegisterService,
    private http: HttpClient, private modalService: NgbModal, public validationService: ValidationService,
    private httpService: HttpService, private toaster: ToastrService, private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService, private router: Router) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.createForm();
    this.getMinDate();

    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });

    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        }
        // let user = JSON.parse(localStorage.getItem('user'));
        const password = JSON.parse(localStorage.getItem('cachedData'));
        const bytes = CryptoJS.AES.decrypt(password, 'encryptionCode');
        let objs = {
          deviceType: "W",
          loginId: this.sidebarService.loginId,
          password: bytes.toString(CryptoJS.enc.Utf8)
        }
        this.baselineService.login(objs).subscribe((res: any) => {
          console.log(res.responseObject.branchBaselineSurveyEnddateDetailDTO, 'forclosebaselinedata');
          // console.log(user.responseObject.branchBaselineSurveyEnddateDetailDTO, 'branchBaselineSurveyEnddateDetailDTO');
          if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.actualEndDate != null) {
            console.log(true, '1');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToActualEndDate;
          } else if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate != null) {
            console.log(true, '2');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate;
          } else {
            this.timeToTentativeEndDate = '';
          }
        });
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        })
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/children-register/create']) : this.router.navigate(['/error']);

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);


    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    console.log(this.createMode);

  }

  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
      },
      (error) => {
        this.branchList = null;
      }
    );
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    this.timeToTentativeEndDate = '';
    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
      this.timeToTentativeEndDate = '';
    }
  }

  changeBranch(brnchId) {
    console.log(brnchId, 'brnchId');
    this.branchEnddateDetailDTO = this.branchList.find(bran => bran.branchId == brnchId)?.branchBaselineSurveyEnddateDetailDTO;
    console.log(this.branchEnddateDetailDTO, 'branchEnddateDetailDTO');
    if (this.branchEnddateDetailDTO?.actualEndDate != null) {
      console.log(true, '1');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToActualEndDate;
    } else if (this.branchEnddateDetailDTO?.timeToTentativeEndDate != null) {
      console.log(true, '2');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToTentativeEndDate;
    } else {
      this.timeToTentativeEndDate = '';
    }
    // this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    // this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: brnchId
    }
    this.loader = false;
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
    })
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }

  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    this.existingFamilyList = [];
    this.locationForm.controls.viewChild.setValue('');
    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }

  changeVillage(villageId, a) {
    this.existingFamilyList = [];
    this.locationForm.controls.viewChild.setValue('');
    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.locationForm.controls.viewChild.setValue('');
      this.existingFamilyList = [];
    }
    else {
      this.locationForm.controls.viewChild.setValue('2');
      this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageId)?.branchVillageMapId;

      console.log(this.branchVillageMapId, 'branchVillageMapId');

      let obj = {
        activeStatus: "A",
        dataAccessDTO: this.httpService.dataAccessDTO,
        id: this.branchVillageMapId
      }
      this.loader = false;
      setTimeout(() => {
        this.childService.viewExistingFamilyLists(obj).subscribe((response: any) => {
          this.loader = true;
          this.existingFamilyListAll = response.responseObject;
          this.existingFamilyListZero = this.existingFamilyListAll?.filter((x) => x.existingChildCount == 0);
          this.existingFamilyListNonZero = this.existingFamilyListAll?.filter((x) => x.existingChildCount != 0);
          console.log(this.existingFamilyList);
          console.log(this.existingFamilyListNonZero);
          console.log(this.existingFamilyListZero);

          this.existingFamilyList?.forEach(item => {
            this.ide = item.familyDetailId
          })

          if (a == 2) {
            this.existingFamilyList = this.existingFamilyListNonZero;
            this.locationForm.markAllAsTouched();
          }

        },
          (err) => {
            this.loader = true;
            this.showError('No Data Found');
          })
      }, 1000);
    }


  }


  childList(e) {
    console.log(e.target.value);

    if (e.target.value == '') {
      this.existingFamilyList = [];
    }

    if (e.target.value == 1 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListAll;
    }

    if (e.target.value == 2 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListNonZero
    }

    if (e.target.value == 3 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListZero
    }

  }

  get f() {
    return this.locationForm.controls;
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
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      viewChild: ['2', Validators.required]
    });
  }

  openModal(viewExistingChild, famid: any) {
    this.childViewExistingChild = viewExistingChild;
    this.childFamId = famid;
    this.getMoreDetails(famid);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewExistingChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  openModals(addNewChild, famid: any) {
    this.getMoreDetails(famid);
    this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addNewChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  openModall(EditChild) {
    // this.getMoreDetails(famid);
    // this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(EditChild, {
      windowClass: 'Child-Create-ModalClass',
    });
  }

  getMoreDetails(famid) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: famid
    }

    //API call for viewing Details of existingFamilyChildDetails
    this.childService.viewExistingFamilyDetails(postBody).subscribe((response: any) => {
      this.existingFamilyDetails = response.responseObject;
      this.existingChildList = response.responseObject.childDetailDTOList;
      this.checkChildCount = response.responseObject.totalNumberOfChildren - response.responseObject.childDetailDTOList.length;
      this.maleLen = response.responseObject.childDetailDTOList.filter((x) => x.sex == 'M');
      // console.log(this.maleLen.length, 'maleLen');

      this.femaleLen = response.responseObject.childDetailDTOList.filter((x) => x.sex == 'F');
      // console.log(this.femaleLen.length, 'femaleLen');

      this.checkTotalMale = response.responseObject.totaFamilyMemberMales - this.maleLen.length;
      this.checkTotalFemale = response.responseObject.totaFamilyMemberFemales - this.femaleLen.length;
      console.log(this.existingFamilyDetails, 'existingFamilyDetails')
      console.log(this.existingChildList, 'existingChildList')

    })
  }

  saveAddChild() {
    this.childDetails.childInfo.forEach(a => {
      a.familyDetailId = this.familyID
      a.childName = this.validationService.camelize(a.childName.trim());
    })

    this.childDetails.childInfo.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
      }
      console.log(this.showAge);
    })

    const postBody = {
      childDetailDTOList: this.childDetails.childInfo,
      dataAccessDTO: this.httpService.dataAccessDTO,
    }

    console.log(postBody);

    if (this.checkChildCount < this.childDetails.childInfo.length) {
      this.showError('You cannot add more child than entered total no. of children');
      return;
    }

    let maleData = this.childDetails.childInfo.filter((x) => x.sex == 'M')
    // console.log(maleData.length);

    let femaleData = this.childDetails.childInfo.filter((x) => x.sex == 'F')
    // console.log(femaleData.length);

    if (this.checkTotalMale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male')
      return;
    }

    if (this.checkTotalFemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female')
      return;
    }

    // for disable add
    if (this.existingFamilyDetails.haveChild == 'N') {
      this.showError('This Family does not have any child');
      return;
    }

    // for disable add
    if (this.existingFamilyDetails.childrenBelow18 == 'N' || this.existingFamilyDetails.childrenBelow18 == 'NA') {
      this.showError('This family does not have any child below 18 years');
      return;
    }

    if (this.existingFamilyDetails.childrenBelow18 == 'Y' && this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge <= 5) {
        this.showError('This family does have any child below 5 years')
        return;
      }
    }

    if (this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge <= 2) {
        this.showError('This family does have any child below 2 years')
        return;
      }
    }

    this.childService.saveChild(postBody).subscribe((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        this.refreshChildData();
        // this.viewExistingChild.dismiss('Cross click')

      } else {
        this.showError(response.message);
      }

    })

  }

  saveEditChild() {
    // console.log(this.childDetails);
    // console.log(this.existingFamilyDetails);
    // console.log(this.setChild);
    this.childDetails.childInfo[0].familyDetailId = this.setChild.familyDetailId;
    this.childDetails.childInfo[0].childDetailId = this.setChild.childDetailId;
    // console.log(this.childDetails);
    let firstCopyOFEFD = JSON.stringify(this.existingFamilyDetails);
    this.childDetails.childInfo.forEach((item, index) => {
      let ageCheck = item.dob
      item.childName = this.validationService.camelize(item.childName.trim());
      if (ageCheck) {
        // today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
      }
      console.log(this.showAge);

      item.age = this.showAge;
      this.existingChildList[this.childIndexId] = item
      // console.log(this.existingChildList, 'newChild');

    })


    this.existingChildList.filter((i) => {
      let ageCheck = i.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
      }
      i.age = this.showAge
      // console.log(this.showAge, 'agemaster');

    })

    if ((this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N')) {
      if (this.existingChildList.filter((v) => v.age <= 2).length < 1) {
        this.showError('Child list must contain atleast one child below 2 years');
        return;
      }
    }

    if ((this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA')) {
      if (this.existingChildList.filter((v) => v.age <= 5 && v.age > 2).length < 1) {
        this.showError('Child list must contain atleast one child below 5 years & more than 2 years');
        return;
      }

      if (this.existingChildList.filter((v) => v.age <= 2).length > 0) {
        this.showError('Child list should not contain any child below 2 years');
        return;
      }
    }

    if ((this.existingFamilyDetails.childrenBelow18 == 'Y' && this.existingFamilyDetails.childrenBelow5 == 'N')) {
      if (this.existingChildList.filter((v) => v.age <= 18 && v.age > 5).length < 1) {
        this.showError('Child list must contain atleast one child below 18 years & more than 5 years');
        return;
      }

      if (this.existingChildList.filter((v) => v.age <= 5).length > 0) {
        this.showError('Child list should not contain any child below 5 years');
        return;
      }
    }



    const postBody = {
      childDetailDTOList: [
        {
          age: this.setChild.age,
          childDetailId: this.setChild.childDetailId,
          childName: this.childDetails.childInfo[0].childName,
          createdOn: this.setChild.createdOn,
          dob: this.childDetails.childInfo[0].dob,
          familyDetailId: this.setChild.familyDetailId,
          sex: this.childDetails.childInfo[0].sex,
          status: this.setChild.status
        }
      ],
      dataAccessDTO: this.httpService.dataAccessDTO,
    }

    if (this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge <= 5) {
        this.showError('This family does have any child below 5 years')
        return;
      }

    }

    if (this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge <= 2) {
        this.showError('This family does have any child below 2 years')
        return;
      }

    }
    let copyOfexistingFamilyDetails: any = this.existingFamilyDetails;

    for (let i = 0; i < copyOfexistingFamilyDetails.childDetailDTOList.length; i++) {
      if (copyOfexistingFamilyDetails.childDetailDTOList[i].childDetailId == this.childDetails.childInfo[0].childDetailId) {
        copyOfexistingFamilyDetails.childDetailDTOList[i] = this.childDetails.childInfo[0];
      }
    }

    // console.log(copyOfexistingFamilyDetails);
    // console.log(this.existingFamilyDetails); console.log("**********", firstCopyOFEFD);

    let femaleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "F");
    let maleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "M");
    let femaleLength = femaleList.length;
    let maleLength = maleList.length;
    // console.log(femaleLength, maleLength);

    if (this.existingFamilyDetails.totaFamilyMemberFemales == femaleLength || this.existingFamilyDetails.totaFamilyMemberFemales < femaleLength) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female')
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      // console.log(this.existingFamilyDetails);
      return;
    }

    if (this.existingFamilyDetails.totaFamilyMemberMales < maleLength) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      return;
    }

    console.log(postBody, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');


    this.childService.saveChild(postBody).subscribe((response: any) => {
      console.log(response, 'response');
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();

        this.getMoreDetails(this.existingFamilyDetails.familyDetailId);
      } else {
        this.showError(response.message);

      }

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Children Info Save', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Children Info Save', {
      timeOut: 2000,
    });
  }

  showSuccesss(message) {
    this.toaster.success(message, 'Children Info Delete', {
      timeOut: 3000,
    });
  }

  showErrors(message) {
    this.toaster.error(message, 'Children Info Delete', {
      timeOut: 2000,
    });
  }

  p(event) { }

  addMoreChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });
  }

  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }

  childModalDismiss() {
    console.log('childModalDismiss');
    this.modalReference.close();
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    }];

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

  deleteChild(items, i) {
    var below18 = 0;
    var below5 = 0;
    var below2 = 0;
    var below188 = 0;
    var forDelete = 0;
    var x = 0;

    this.existingChildList.forEach((item) => {
      let ageCheck = item.dob
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365.25);
      }

      if (this.showAge > 0 && this.showAge <= 2) {
        below2 += 1;
      }  // checking for 0-2 years

      if (this.showAge > 2 && this.showAge <= 5) {
        below5 += 1;
      } // checking for 2-5 years

      if (this.showAge > 5 && this.showAge <= 18) {
        below18 += 1;
      }  // checking for 5-18 years


      if (x == i) {
        if (this.showAge > 0 && this.showAge <= 2) {
          forDelete = 2;
        }
        else if (this.showAge > 2 && this.showAge <= 5) {
          forDelete = 5;
        }
        else if (this.showAge > 5 && this.showAge <= 18) {
          forDelete = 18;
        }
        else {
          forDelete = 188;
        }
      }
      x += 1;
    })

    if (confirm('Do you want to delete : ' + items.childName)) {

      let postBody = {
        childDetailDTOList: [
          {
            age: items.age,
            childDetailId: items.childDetailId,
            childName: items.childName,
            createdOn: items.createdOn,
            dob: items.dob,
            familyDetailId: items.familyDetailId,
            sex: items.sex,
            status: 'D'
          }
        ],
        dataAccessDTO: this.httpService.dataAccessDTO

      }

      // if (this.existingChildList.length == 1) {
      //   this.showError('Child list must contain atleast one child below 18 years');
      //   return;
      // }


      if ((this.existingFamilyDetails.childrenBelow5 == 'N' && this.existingFamilyDetails.childrenBelow18 == 'Y') && forDelete == 18) {
        if (below18 == 1) {
          this.showError('Child list must contain atleast one child below 18 years');
          return;
        }
      }

      if ((this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N') && forDelete == 2) {
        if (below2 == 1) {
          this.showError('Child list must contain atleast one child below 2 years');
          return;
        }
      }

      if ((this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') && forDelete == 5) {
        if (below5 == 1) {
          this.showError('Child list must contain atleast one child below 5 years');
          return;
        }
      }

      this.childService.saveChild(postBody).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSuccesss(response.message);
          this.existingChildList.splice(i, 1);

        } else {
          this.showErrors(response.message);
        }

      });

    }
  }

  editChild(items, i, EditChild) {
    this.childModalDismiss();
    this.openModall(EditChild);
    this.setData(items);
    this.childIndexId = i;
    console.log(this.childIndexId, 'abc');

  }

  setData(data) {
    this.setChild = data;
    console.log(this.setChild, 'checkdata')
    this.childService.editChild(data);
    if (this.setChild) {
      this.childDetails.childInfo.forEach((x) => {
        x.childName = this.setChild.childName;
      });

      this.childDetails.childInfo.forEach((x) => {
        x.dob = this.setChild.dob.substring(0, 10);
      })
      this.childDetails.childInfo.forEach((x) => {
        x.sex = this.setChild.sex;
      })
    }
  }

  viewExistingChildModalDismiss() {
    this.modalReference.close();
    this.refreshChildData();
  }

  refreshChildData() {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.branchVillageMapId
    }
    this.loader = false;
    this.childService.viewExistingFamilyLists(obj).subscribe((response: any) => {
      console.log(response.responseObject, 'response.responseObject');
      this.loader = true;
      this.existingFamilyListAll = response.responseObject;
      this.existingFamilyListZero = this.existingFamilyListAll?.filter((x) => x.existingChildCount == 0);
      this.existingFamilyListNonZero = this.existingFamilyListAll?.filter((x) => x.existingChildCount != 0);
      console.log(this.existingFamilyList);
      console.log(this.existingFamilyListNonZero);
      console.log(this.existingFamilyListZero);

      if (this.locationForm.value.viewChild == 2 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListNonZero;
        this.locationForm.markAllAsTouched();
      }

      if (this.locationForm.value.viewChild == 3 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListZero;
        this.locationForm.markAllAsTouched();
      }

      if (this.locationForm.value.viewChild == 1 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListAll;
        this.locationForm.markAllAsTouched();
      }
    });
  }

}




