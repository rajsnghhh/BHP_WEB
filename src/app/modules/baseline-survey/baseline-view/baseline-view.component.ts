import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { BaselineSurveyService } from '../baseline-survey.service';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-baseline-view',
  templateUrl: './baseline-view.component.html',
  styleUrls: ['./baseline-view.component.css']
})

export class BaselineViewComponent implements OnInit {
  locationForm: UntypedFormGroup;
  baselineDetails: Array<any> = [];
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  familyDetails: any;
  page = 1;
  pageSize = 6;
  familyStatus: any;
  registerSearch: any;
  householdId: any;
  aaa: boolean;
  searchFullscreen: boolean;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  ssList: Array<any> = [];
  swasthyaSahayika: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;
  branchVillageMapId: any;
  modalTitle: string = 'V';
  toggleBool: boolean = true;
  finalDelHH: any;
  moreDetails: any;
  role: any;
  updateMode: boolean;
  deleteMode: boolean;
  createMode: boolean;
  ssNameFilter: Array<any> = [];
  branchEnddateDetailDTO: any;
  timeToTentativeEndDate: any;
  branchID: any;

  constructor(private fb: UntypedFormBuilder, private baselineService: BaselineSurveyService,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    private confirmationDialogService: ConfirmationDialogService, private http: HttpClient, private route: Router, public validationService: ValidationService, public sidebarService: SidebarService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 73 || item.subFunctionMasterId == 74 || item.subFunctionMasterId == 75 || item.subFunctionMasterId == 76)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.route.navigate(['/Baseline-Survey/view']) : this.route.navigate(['/error']);


    this.createForm();
    this.householdFamDetails();

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
        // this.branchID = res.branchId;
        // console.log(this.branchID);
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

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    // console.log(this.updateMode);

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    // console.log(this.deleteMode);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList
      .find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    // console.log(this.createMode);

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
        console.log(this.branchList);

      },
      (error) => {
        this.branchList = null;
      }
    );
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villagesOfBranch = [];
    this.villageDtoList = [];
    this.gpDtoList = [];
    this.timeToTentativeEndDate = '';
    if (this.locationForm.value.region == '') {
      this.showErrorss('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];
      this.locationForm.controls.ssByList.setValue('');
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

    this.sidebarService.donorName = this.branchList?.find(bran => bran.branchId == brnchId)?.donorMasterDto?.donorName;
    console.log(this.sidebarService.donorName);

    // this.sidebarService.branchId = this.branchList?.find(bran => bran.branchId == branchId)?.branchId;
    // this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: brnchId
    }
    this.loader = false;
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    })
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villagesOfBranch = [];
    this.villageDtoList = [];
    this.gpDtoList = [];
    if (this.locationForm.value.branch == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];

    }

  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villageDtoList = [];
    if (this.locationForm.value.block == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    if (this.locationForm.value.gp == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.swasthyaSahayika = [];
    }
  }

  changeVillage(villageId) {
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageId)?.branchVillageMapId;
    this.householdFamDetails(this.branchVillageMapId);
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    if (this.locationForm.value.gram == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.swasthyaSahayika = [];
    }
    this.villageWiseSSList(villageId);

  }

  householdFamDetails(branchVillageMapId = null) {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: branchVillageMapId
    }

    //API call for viewing HouseholdWithFamilyDetails
    this.loader = false;
    setTimeout(() => {
      this.baselineService.baselineViewDetail(obj).subscribe((response: any) => {
        this.loader = true;
        this.baselineDetails = response.responseObject;
        console.log(this.baselineDetails);
      },
        (err) => {
          this.loader = true;
        });
    }, 1000);

  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      ssByList: [''],

    });
  }

  get f() {
    return this.locationForm.controls;
  }

  openModal(viewFamily, familyDetailDTOList, item, title, i) {

    title = this.modalTitle;
    console.log(title);

    console.log(item.householdDetailId, 'ccdd');
    this.householdId = item.householdDetailId;
    this.familyDetails = familyDetailDTOList
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewFamily, {
      windowClass: 'viewFamily',
    });
  }

  familyModal(viewDetails, id) {
    this.modalDismiss();
    this.getMoreDetails(id);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewDetails, {
      windowClass: 'viewDetails',
    });
  }

  getMoreDetails(id) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: id
    }

    //API call for viewing Details of centralRegister
    this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response: any) => {
      this.moreDetails = response.responseObject;
      console.log(this.moreDetails)
    })

  }

  modalDismiss() {
    console.log('true');

    if (this.modalTitle == 'D') {
      this.modalReference.close();
      let currentUrl = this.route.url;
      this.route
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.route.navigate([currentUrl]);
        });
    }

    else {
      this.modalReference.close();
    }

  }

  editHousehold(item) {
    console.log('edit', item);
    this.route.navigate(['/Baseline-Survey/edit'], {
      queryParams: {
        id: item.householdDetailId,
        type: item.familyType,
        tMem: item.totalMembers,
        tFam: item.numberOfFamily,
        hhNo: item.houseHoldNumber,
        bName: item.branchDTO.branchName,
        bId: item.branchDTO.branchId,
        blockName: this.selectedBlock,
        gpName: this.selectedGp,
        vName: this.villageDtoList.find(i => i.branchVillageMapId == item.branchVillageMapId).villageName,
        vId: item.branchVillageMapId,
        ssName: item.swasthyaSahayikaDTO.name,
        ssId: item.swasthyaSahayikaDTO.swasthyaSahayikaId
      }
    });
  }


  deleteHousehold(item, i, familyDetailDTOList, viewFamily, title) {
    this.finalDelHH = item;
    title = 'D';
    this.modalTitle = title;

    this.openModal(familyDetailDTOList, viewFamily, item, title, i);
    console.log(this.modalTitle);

  }

  deleteHH() {
    var item = this.finalDelHH;

    const post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName,
        },
        branchVillageMapId: this.branchVillageMapId,
        familyDetailDTOList: [
          {
            age: item.age,
            bbMicroGroupMembership: item.familyDetailDTOList[0].bbMicroGroupMembership,
            casteTypeMasterDTO: item.familyDetailDTOList[0].casteTypeMasterDTO,
            childDetailDTOList: item.familyDetailDTOList[0].childDetailDTOList ? item.familyDetailDTOList[0].childDetailDTOList : [],
            childrenBelow18: item.familyDetailDTOList[0].childrenBelow18 ? item.familyDetailDTOList[0].childrenBelow18 : 'NA',
            childrenBelow5: item.familyDetailDTOList[0].childrenBelow5 ? item.familyDetailDTOList[0].childrenBelow5 : 'NA',
            createdOn: item.familyDetailDTOList[0].createdOn,
            educationalQualificationMasterDTO: item.familyDetailDTOList[0].educationalQualificationMasterDTO,
            familyDetailId: item.familyDetailDTOList[0].familyDetailId,
            familyDetailRemaingStatusDTO: item.familyDetailDTOList[0].familyDetailRemaingStatusDTO,
            familyNumber: item.familyDetailDTOList[0].familyNumber,
            familyType: item.familyDetailDTOList[0].familyType,
            firstName: item.familyDetailDTOList[0].firstName,
            haveChild: item.familyDetailDTOList[0].haveChild,
            haveSanitaryLatrine: item.familyDetailDTOList[0].haveSanitaryLatrine,
            householdDetailsId: item.familyDetailDTOList[0].householdDetailsId,
            husbandOrGuardianName: item.familyDetailDTOList[0].husbandOrGuardianName,
            identityCardDTOList: item.familyDetailDTOList[0].identityCardDTOList ? item.familyDetailDTOList[0].identityCardDTOList : [],
            institutionalDelivery: item.familyDetailDTOList[0].institutionalDelivery ? 'NA' : 'NA',
            lactetingMother: item.familyDetailDTOList[0].lactetingMother,
            lastName: item.familyDetailDTOList[0].lastName,
            middleName: item.familyDetailDTOList[0].middleName,
            mobileNumber: item.familyDetailDTOList[0].mobileNumber ? item.familyDetailDTOList[0].mobileNumber : '',
            monthlyIncomeMasterDTO: item.familyDetailDTOList[0].monthlyIncomeMasterDTO,
            occupationMasterDTO: item.familyDetailDTOList[0].occupationMasterDTO,
            pregnantWoman: item.familyDetailDTOList[0].pregnantWoman,
            religionMasterDTO: item.familyDetailDTOList[0].religionMasterDTO,
            status: item.familyDetailDTOList[0].status,
            totaFamilyMemberFemales: item.familyDetailDTOList[0].totaFamilyMemberFemales,
            totaFamilyMemberMales: item.familyDetailDTOList[0].totaFamilyMemberMales,
            totaFamilyMemberSrcitizen: item.familyDetailDTOList[0].totaFamilyMemberSrcitizen,
            totalNumberOfChildren: item.familyDetailDTOList[0].totalNumberOfChildren
          }
        ],
        familyType: item.familyType,
        houseHoldNumber: item.houseHoldNumber,
        householdDetailId: item.householdDetailId,
        numberOfFamily: item.numberOfFamily,
        status: "D",
        swasthyaSahayikaDTO: {
          name: "",
          swasthyaSahayikaId: 0
        },
        totalMembers: item.totalMembers
      }
    }

    this.baselineService.saveBaselineSurvey(post).subscribe((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.modalDismiss();
        this.showSuccess(response.message);
        this.householdFamDetails();
      }
      else {
        this.showError(response.message);
      }
    })


  }

  deleteFamily(item, i) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.familyDetailId
    }

    this.baselineService.viewMoreFamilyDetails(postBody).subscribe((response: any) => {
      let delDetails = response.responseObject
      console.log(delDetails);
      this.delFam(delDetails, i);
    })

  }

  editFamily(item) {
    console.log(item, 'item');
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this?.householdId
    }

    this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
      this.modalReference.close();
      this.route.navigate(['/family-info/create'], {
        skipLocationChange: true, queryParams: {
          id: item.householdDetailId,
          famid: item.familyDetailId,
          type: item.familyType,
          cFamilyCount: this.familyStatus?.createdFamilyCount,
          cFamilyMembersCount: this.familyStatus?.createdFamilyMambersCount,
          tFamilyCount: this.familyStatus?.totalFamilyCount,
          tFamilyMembersCount: this.familyStatus?.totalFamilyMambersCount,
          donor: this.sidebarService.donorName
        }
      });
    });
  }

  delFam(delDetails, i) {


    if (this.familyDetails.length == 1) {
      this.showError('Please Delete Household');
      return;
    }

    if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {

      let post = {

        dataAccessDTO: this.httpService.dataAccessDTO,
        familyDetailDTO: {
          age: delDetails.age,
          bbMicroGroupMembership: delDetails.bbMicroGroupMembership,
          casteTypeMasterDTO: {
            casteTypeDescription: delDetails.casteTypeMasterDTO.casteTypeDescription,
            casteTypeMasterId: delDetails.casteTypeMasterDTO.casteTypeMasterId
          },
          childDetailDTOList: delDetails.childDetailDTOList,
          childrenBelow18: delDetails.childrenBelow18,
          childrenBelow5: delDetails.childrenBelow5,
          createdOn: delDetails.createdOn,
          educationalQualificationMasterDTO: {
            educationalQualificationMasterId: delDetails.educationalQualificationMasterDTO.educationalQualificationMasterId,
            qualification: delDetails.educationalQualificationMasterDTO.qualification
          },
          familyDetailId: delDetails.familyDetailId,
          familyDetailRemaingStatusDTO: {
            createdFamilyCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyCount,
            createdFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
            totalFamilyCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyCount,
            totalFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyMambersCount
          },
          familyNumber: delDetails.familyNumber,
          familyType: delDetails.familyType,
          firstName: delDetails.firstName,
          haveChild: delDetails.haveChild,
          haveSanitaryLatrine: delDetails.haveSanitaryLatrine,
          householdDetailsId: delDetails.householdDetailsId,
          husbandOrGuardianName: delDetails.husbandOrGuardianName,
          identityCardDTOList: delDetails.identityCardDTOList,
          institutionalDelivery: delDetails.institutionalDelivery,
          lactetingMother: delDetails.lactetingMother,
          lastName: delDetails.lastName,
          middleName: delDetails.middleName,
          mobileNumber: delDetails.mobileNumber,
          monthlyIncomeMasterDTO: {
            incomeRange: delDetails.monthlyIncomeMasterDTO.incomeRange,
            monthlyIncomeMasterId: delDetails.monthlyIncomeMasterDTO.monthlyIncomeMasterId
          },
          occupationMasterDTO: {
            occupationDescription: delDetails.occupationMasterDTO.occupationDescription,
            occupationMasterId: delDetails.occupationMasterDTO.occupationMasterId
          },
          pregnantWoman: delDetails.pregnantWoman,
          religionMasterDTO: {
            religionMasterDescription: delDetails.religionMasterDTO.religionMasterDescription,
            religionMasterId: delDetails.religionMasterDTO.religionMasterId
          },
          status: "D",
          totaFamilyMemberFemales: delDetails.totaFamilyMemberFemales,
          totaFamilyMemberMales: delDetails.totaFamilyMemberMales,
          totaFamilyMemberSrcitizen: delDetails.totaFamilyMemberSrcitizen,
          totalNumberOfChildren: delDetails.totalNumberOfChildren
        }

      }

      this.baselineService.deleteFamily(post).subscribe((response: any) => {
        console.log(response);
        if (response.status == true) {
          this.showSucces(response.message);
          this.familyDetails.splice(i, 1);
        }
        else {
          this.showErrorr(response.message);
        }

      })
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Household Delete', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Household Delete', {
      timeOut: 3000,
    });
  }

  showSucces(message) {
    this.toaster.success(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

  showErrorr(message) {
    this.toaster.error(message, 'Family Delete', {
      timeOut: 3000,
    });
  }

  p(event) { }

  changeEvent(event) {
    if (event.target.checked) {
      this.toggleBool = false;
      console.log(this.toggleBool);

    }
    else {
      this.toggleBool = true;
      console.log(this.toggleBool);
    }

  }

  gotoFamily(item) {

    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.householdDetailId
    }

    this.baselineService.baselineSurveyStatus(postBody).subscribe((response) => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);

      if (item.familyType == 'J' && this.familyStatus?.totalFamilyMambersCount - this.familyStatus?.createdFamilyMambersCount > 0 &&
        this.familyStatus?.totalFamilyCount - this.familyStatus?.createdFamilyCount > 0) {
        this.confirmationDialogService.confirm('', 'Do you want to add more family against Household No : ' + item.houseHoldNumber + ' ?')
          .then(() => this.route.navigate(['/family-info/create'], {
            queryParams: {
              id: item.householdDetailId,
              type: item.familyType,
              cFamilyCount: this.familyStatus.createdFamilyCount,
              cFamilyMembersCount: this.familyStatus.createdFamilyMambersCount,
              tFamilyCount: this.familyStatus.totalFamilyCount,
              tFamilyMembersCount: this.familyStatus.totalFamilyMambersCount,
              donor: this.sidebarService.donorName
            }
          }))
          .catch(() => '');
      }

      else {
        this.showError('All Family Member or Family Count Is Already Added');
        return;
      }


    })

  }

  villageWiseSSList(villageId) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: parseInt(villageId)
    }

    console.log(req, 'villbyss');
    this.baselineService.VillageWiseSSList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
      console.log(this.swasthyaSahayika, 'this.swasthyaSahayika');
    });
  }


  ssWiseViewList(ssName) {
    console.log(ssName);
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.branchVillageMapId
    }

    //API call for viewing HouseholdWithFamilyDetails
    this.loader = false;
    this.baselineService.baselineViewDetail(obj).subscribe((response: any) => {

      this.baselineDetails = response.responseObject;
      console.log(this.baselineDetails);
      this.callSSfilter(ssName);
      this.loader = true;
    })


  }

  callSSfilter(ssName) {
    this.ssNameFilter = this.baselineDetails.filter((item) => item.swasthyaSahayikaDTO.name == ssName);
    console.log(this.ssNameFilter);

    if (ssName) {
      if (this.ssNameFilter.length == 0) {
        this.showErrorss('No matched data with' + ' ' + ssName);
        this.baselineDetails = this.ssNameFilter;
      } else {
        this.baselineDetails = this.ssNameFilter;
      }

    }

  }

  showErrorss(message) {
    this.toaster.error(message, '', {
      timeOut: 3000,
    });
  }

}
