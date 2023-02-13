import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { EscortRerefRegisterService } from './escort-reref-register.service';

@Component({
  selector: 'app-escort-reref-register',
  templateUrl: './escort-reref-register.component.html',
  styleUrls: ['./escort-reref-register.component.css']
})
export class EscortRerefRegisterComponent implements OnInit {
  viewEscortReferForm: FormGroup;
  viewFamilyForm: FormGroup;
  createEscortReferForm: FormGroup;
  regionBranchHide: boolean;
  regionList: Array<any> = [];
  lowerRoleBranchId: any;
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  villageList: Array<any> = [];
  gpList: Array<any> = [];
  loader: boolean = true;
  modalContent: any;
  createERRegisterModal: any;
  viewBeneficiaryModal: any;
  minDate: any;
  familyList: Array<any> = [];
  villageName: any;
  viewBeneficiaryDetails: Array<any> = [];
  muacPEM: any;
  muacLM: any;
  twotofive: any;
  year: any;
  month: any;
  day: any;
  placeList: Array<any> = [];
  staffList: Array<any> = [];
  reasonList: Array<any> = [];
  reasonListID: Array<any> = [];
  escortview: Array<any> = [];
  p: any;
  onclickBenFamDetails: any;

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private fb: FormBuilder,
    private httpService: HttpService, private escortReferService: EscortRerefRegisterService, private modalService: NgbModal,
    config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.viewEscort_ReferForm();
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userId,
            userName: dataAccessDTO.userName,
          },
          branchId: this.lowerRoleBranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
          }
        });
      }
    });

    // this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);

    // this.createMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    // this.updateMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    // this.deleteMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  viewEscort_ReferForm() {
    this.viewEscortReferForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    })
  }

  get m() {
    return this.viewEscortReferForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.escortReferService.getBranchesOfRegion(req).subscribe((res) => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    this.viewEscortReferForm.controls.branch.setValue('');
    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewEscortReferForm.value.region == '') {
      this.branchList = [];
    }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.escortReferService.getVillagesOfBranch(req).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });

    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.villageList = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.viewEscortReferForm.controls.gram.setValue('');
  }

  changeVillage(villageId) {
    console.log(villageId, 'villageId');

    let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: villageId, visitDate: null };
    this.escortReferService.getEscortReferRegisterview(viewreq).subscribe((res: any) => {
      this.escortview = res.responseObject;
      console.log(this.escortview, 'escortview');
    })
  }

  createEscortRefer(createER) {
    this.modalContent = '';
    this.createERRegisterModal = this.modalService.open(createER, {
      windowClass: 'createER',
    });
    this.viewFamily_Form();
    this.minDate = moment(new Date()).subtract(7, "days").format("YYYY-MM-DD");
  }

  changeDate() {
    let famReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortRefRegDate: this.viewFamilyForm.value.date ? '2022-01-01' : this.viewFamilyForm.value.date,
      villageId: null
    };

    this.loader = false;
    this.escortReferService.getListOfFamiliesOfAVillage(famReq).subscribe((res: any) => {
      this.loader = true;
      console.log(res.responseObject);
      this.villageName = res.responseObject[0]?.villageName;
      this.familyList = res.responseObject[0]?.familyList;
      console.log(this.familyList, ' this.familyList');
      console.log(this.villageName, ' this.villageName');
      var tt = this.familyList.filter(x => x.presentInPregnantWoman == 'Y');
      var tt2 = this.familyList.filter(x => x.below5YearsChildren.length > 0);
      var tt3 = this.familyList.filter(x => x.adolescentGilrChildren.length > 0);
      console.log(tt, 'presentInPregnantWoman');
      console.log(tt2, 'below5YearsChildren');
      console.log(tt3, 'adolescentGilrChildren');

    })

  }

  createERModalDismiss() {
    this.createERRegisterModal.close();
    this.villageName = [];
    this.familyList = [];

  }

  viewFamily_Form() {
    this.viewFamilyForm = this.fb.group({
      date: ['', Validators.required],
    })
  }

  get r() {
    return this.viewFamilyForm.controls;
  }

  viewSelectBenificiary(fami, Benificiary) {
    this.viewBeneficiaryDetails = [];
    this.onclickBenFamDetails = fami;
    console.log(this.onclickBenFamDetails, 'onclickBenFamDetails');
    if (fami.presentInPregnantWoman == 'Y') {
      this.viewBeneficiaryDetails.push({ childName: fami.firstName + fami.middleName + '' + fami.lastName, age: fami.familyAge, sex: 'F', status: 'PW' });
    }

    if (fami.adolescentGilrChildren.length > 0) {
      fami.adolescentGilrChildren.forEach(z => {
        this.viewBeneficiaryDetails.push(z);
        this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
          status = 'AG',
          ...rest
        }) => ({
          status,
          ...rest
        }));
      });
    }

    if (fami.below5YearsChildren.length > 0) {
      fami.below5YearsChildren.forEach(y => {
        var t = [];
        y.age.split(/[year,month,days]+/).forEach(x => {
          t.push(x)
          this.year = t[0];
          this.month = t[1];
          this.day = t[2];
        })
        console.log(this.year, this.month, this.day);

        if (y.latestMuac != null && y.latestMuac < 13.5) {
          this.muacPEM = 'PEM';
        } else {
          this.muacPEM = '';
        }

        if (this.year < 2) {
          this.muacLM = 'LM';
        } else {
          this.muacLM = '';
        }

        if (this.year >= 2 && this.year <= 5) {
          this.twotofive = '2 to 5';
        } else {
          this.twotofive = '';
        }

        this.viewBeneficiaryDetails.push(y);
        this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
          status = this.muacPEM + ' ' + this.muacLM + ' ' + this.twotofive,
          ...rest
        }) => ({
          status,
          ...rest
        }));

      })

    }

    console.log(this.viewBeneficiaryDetails);

    this.modalContent = '';
    this.viewBeneficiaryModal = this.modalService.open(Benificiary, {
      windowClass: 'Benificiary',
    });
    this.createEscortRefer_Form();
    this.getEscortReferRegisterPrerequisites();
  }

  createEscortRefer_Form() {
    this.createEscortReferForm = this.fb.group({
      type: ['', Validators.required],
      staff: ['', Validators.required],
      ss: ['', Validators.required],
      user: ['', Validators.required],
      place: ['', Validators.required],
    })
  }

  getEscortReferRegisterPrerequisites() {
    let prerequisite_req = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: this.viewEscortReferForm.value.gram };
    this.escortReferService.getEscortReferRegisterPrerequisites(prerequisite_req).subscribe((res: any) => {
      console.log(res.responseObject);
      this.reasonList = res.responseObject?.reasonList;
      this.reasonList = this.reasonList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      this.placeList = res.responseObject?.placeList;
      this.staffList = res.responseObject?.staffList;
      console.log(this.reasonList, 'this.reasonList ');
      console.log(this.placeList, ' this.placeList');
      console.log(this.staffList, ' this.staffList');
    })
  }

  get e() {
    return this.createEscortReferForm.controls;
  }

  viewSelectBenificiaryModalDismiss() {
    this.viewBeneficiaryModal.close();
  }

  restrictTypeOfDate() {
    return false;
  }

  selectMultipleReason(e, reason) {
    this.reasonListID = [];
    console.log(e.target.checked, reason);
    if (e.target.checked == true) {
      reason.isChecked = true;
    } else {
      reason.isChecked = false;
    }

    console.log(this.reasonList);
    this.reasonList.filter(x => x.isChecked == true).forEach(y => {
      this.reasonListID.push({ escortReferReasonMapId: 0, reasonId: y.reasonId, active_flag: 'A' })
      console.log(this.reasonListID, ' this.reasonListID');
    });

  }

  saveEscortRefer() {
    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortReferRegisterId: 0,
      familyId: this.onclickBenFamDetails.familyDetailId,
      visitDate: this.viewFamilyForm.value.date,
      isFamilyHerselfBeneficiary: this.onclickBenFamDetails.presentInPregnantWoman == 'Y' ? 'Y' : 'N',
      escortOrReferType: this.createEscortReferForm.value.type == 'escort' ? 'E' : 'R',
      visitingPlaceId: this.createEscortReferForm.value.place,
      escortedReferredByStaff: this.createEscortReferForm.value.staff == true ? 'Y' : 'N',
      escorteeRefereeStaffId: this.createEscortReferForm.value.user,
      escortedReferredBySS: this.createEscortReferForm.value.ss == true ? 'Y' : 'N',
      // escorteeRefereeSsId: 10,
      presentInPregnantWoman: this.onclickBenFamDetails.presentInPregnantWoman,
      presentInLactatingMother: this.onclickBenFamDetails.presentInLactatingMother,
      hasChildPresentInPem: this.onclickBenFamDetails.hasChildPresentInPem,
      has2to5yearsOldChildren: this.onclickBenFamDetails.has2to5yearsoldChildren,
      hasAdolescentGirlChildren: this.onclickBenFamDetails.hasAdolescentGirlChildren,
      active_flag: 'A',
      reasonList: this.reasonListID,
      // childDetailList: [
      //   {
      //     escortReferChildMapId: 0,
      //     childDetailId: 9946,
      //     childName: amrita roy,
      //     dob: 2020 - 11 - 28,
      //     age: 2 year 2 month 2 day,
      //     sex: F,
      //     presentInPem: Y,
      //     latestMuacRegisterId: 148,
      //     latestMuac: 11.5,
      //     latestMuacRegisterTag: ACR,
      //     latestMuacIndicatorName: RED,
      //     active_flag: A
      //   }
      // ]
    }
    console.log(this.viewBeneficiaryDetails);
    
    console.log(this.createEscortReferForm.value.staff, 'staff');
    console.log(this.createEscortReferForm.value.ss, 'ss');



    console.log(saveReq, 'savereq')

  }

}