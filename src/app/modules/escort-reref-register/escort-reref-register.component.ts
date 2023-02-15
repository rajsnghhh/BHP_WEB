import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { EscortReferRegisterMatModalComponent } from './escort-refer-register-mat-modal/escort-refer-register-mat-modal.component';
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
  beneficiaryDetails: Array<any> = [];
  muacPEM: any;
  muacLM: any;
  twotofive: any;
  adolStatus: any;
  year: any;
  month: any;
  day: any;
  placeList: Array<any> = [];
  staffList: Array<any> = [];
  reasonList: Array<any> = [];
  beneficiaryListID: Array<any> = [];
  reasonListID: Array<any> = [];
  escortview: Array<any> = [];
  escortviewData: Array<any> = [];
  p: any;
  onclickBenFamDetails: any;
  editEscortDetails: any;

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private fb: FormBuilder,
    private httpService: HttpService, private escortReferService: EscortRerefRegisterService, private modalService: NgbModal,
    config: NgbModalConfig, private toaster: ToastrService, public dialog: MatDialog,) {
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

    // let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: 1, visitDate: null };
    // this.escortReferService.getEscortReferRegisterview(viewreq).subscribe((res: any) => {
    //   this.escortview = res.responseObject;
    //   this.escortview.forEach((x) => {
    //     x.familyList = x.familyList?.map(({
    //       visitDate = x.visitDate, isIndex = 0,
    //       ...rest
    //     }) => ({
    //       visitDate, isIndex,
    //       ...rest
    //     }));
    //   })
    //   console.log(this.escortview, 'escortview');
    //   this.escortview.forEach(y => {
    //     console.log(y);
    //     y.familyList.forEach(z => {
    //       console.log(z);
    //       this.escortviewData.push(z)
    //     })
    //     console.log(this.escortviewData, 'escortviewData');
    //   })

    //   this.escortviewData.forEach((i, index) => {
    //     i.isIndex = index;
    //   });
    //   console.log(this.escortviewData, 'escortviewData');
    // })
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
    this.escortviewData = []
    console.log(villageId, 'villageId');

    let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: villageId, visitDate: null };
    this.escortReferService.getEscortReferRegisterview(viewreq).subscribe((res: any) => {
      this.escortview = res.responseObject;
      this.escortview.forEach((x) => {
        x.familyList = x.familyList?.map(({
          visitDate = x.visitDate, isIndex = 0,
          ...rest
        }) => ({
          visitDate, isIndex,
          ...rest
        }));
      })
      console.log(this.escortview, 'escortview');
      this.escortview.forEach(y => {
        console.log(y);
        y.familyList.forEach(z => {
          console.log(z);
          this.escortviewData.push(z)
        })
        console.log(this.escortviewData, 'escortviewData');
      })

      this.escortviewData.forEach((i, index) => {
        i.isIndex = index;
      });
      console.log(this.escortviewData, 'escortviewData');
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
      escortRefRegDate: this.viewFamilyForm.value.date,
      /*  this.viewFamilyForm.value.date ? '2022-01-01' : this.viewFamilyForm.value.date */
      villageId: this.viewEscortReferForm.value.gram
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

  viewSelectBenificiary(Benificiary, fami) {
    console.log(this.editEscortDetails, 'editEscortDetails');
    this.createEscortRefer_Form();
    this.getEscortReferRegisterPrerequisites();
    if (this.editEscortDetails?.escortReferRegisterId) {
      setTimeout(() => {
        this.modalContent = '';
        this.viewBeneficiaryModal = this.modalService.open(Benificiary, {
          windowClass: 'Benificiary',
        });
      }, 500);


    } else {
      this.viewBeneficiaryDetails = [];
      this.onclickBenFamDetails = fami;
      console.log(this.onclickBenFamDetails, 'onclickBenFamDetails');
      if (fami.presentInPregnantWoman == 'Y') {
        this.viewBeneficiaryDetails.push({ childName: fami.firstName + fami.middleName + '' + fami.lastName, age: fami.familyAge, sex: 'F', status: 'PW', is_checked: false });
      }

      if (fami.adolescentGilrChildren.length > 0) {
        fami.adolescentGilrChildren.forEach(z => {
          this.viewBeneficiaryDetails.push(z);
          this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
            status = 'AG', is_checked = false,
            ...rest
          }) => ({
            status, is_checked,
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

          if (y.presentInPem == 'Y') {
            this.muacPEM = 'PEM';
          } else {
            this.muacPEM = '';
          }

          if (this.year < 2) {
            this.muacLM = 'LM';
          } else {
            this.muacLM = '';
          }

          if (this.year >= 2 && this.year < 5) {
            this.twotofive = '2 to 5';
          } else {
            this.twotofive = '';
          }

          this.viewBeneficiaryDetails.push(y);
          this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
            status = this.muacPEM + ' ' + this.muacLM + ' ' + this.twotofive, is_checked = false,
            ...rest
          }) => ({
            status, is_checked,
            ...rest
          }));

        })

      }

      console.log(this.viewBeneficiaryDetails);

      this.modalContent = '';
      this.viewBeneficiaryModal = this.modalService.open(Benificiary, {
        windowClass: 'Benificiary',
      });

    }

  }

  editEscort(Benificiary, escort) {
    this.editEscortDetails = escort;
    this.viewSelectBenificiary(Benificiary, escort);
  }

  createEscortRefer_Form() {
    // console.log(this.editEscortDetails, 'editEscortDetails');
    if (this.editEscortDetails?.escortOrReferType == "R") {
      var type = 'refer'
    } else {
      type = 'escort'
    }

    this.createEscortReferForm = this.fb.group({
      type: [type ? type : '', Validators.required],
      staff: [this.editEscortDetails?.escortedReferredByStaff == 'Y' ? true : '', Validators.required],
      ss: [this.editEscortDetails?.escortedReferredBySS == 'Y' ? true : '', Validators.required],
      user: [this.editEscortDetails?.escorteeRefereeStaffId ? this.editEscortDetails?.escorteeRefereeStaffId : '', Validators.required],
      place: [this.editEscortDetails?.visitingPlaceId ? this.editEscortDetails?.visitingPlaceId : '', Validators.required],
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
      console.log(this.editEscortDetails.reasonList);
      this.editEscortDetails.reasonList.forEach(x => {
        this.reasonList.filter(v => v.reasonId == x.reasonId).forEach(z => {
          z.isChecked = true
        })
      })
    })

  }

  get e() {
    return this.createEscortReferForm.controls;
  }

  viewSelectBenificiaryModalDismiss() {
    var ID = this.editEscortDetails?.escortReferRegisterId;

    if (ID) {
      this.editEscortDetails = '';
      ID = 0;
      this.viewBeneficiaryModal.close();
    }
    else {
      this.viewBeneficiaryModal.close();
      this.viewBeneficiaryDetails = []
    }
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

  selectMultipleBeneficiary(e, ben) {
    this.beneficiaryListID = [];
    console.log(e.target.checked, ben);
    if (e.target.checked == true) {
      ben.is_checked = true;
    } else {
      ben.is_checked = false;
    }

    console.log(this.viewBeneficiaryDetails);

    this.viewBeneficiaryDetails.filter(x => x.status != 'PW').forEach(y => {
      this.beneficiaryListID.push({
        escortReferChildMapId: 0, childDetailId: y.childDetailId, childName: y.childName, dob: y.dob, age: y.age, sex: y.sex, presentInPem: y.presentInPem,
        latestMuacRegisterId: y.latestMuacRegisterId, latestMuac: y.latestMuac, latestMuacRegisterTag: y.latestMuacRegisterTag,
        latestMuacIndicatorName: y.latestMuacIndicatorName, active_flag: y.is_checked == true ? 'A' : 'NC',
      })
      console.log(this.beneficiaryListID, 'beneficiaryListID');
    });
  }

  saveEscortRefer() {
    console.log(this.viewBeneficiaryDetails.filter(x => x.is_checked == true && x.status == 'PW')?.[0]);
    console.log(this.viewBeneficiaryDetails);
    console.log(this.beneficiaryListID);

    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortReferRegisterId: 0,
      familyId: this.onclickBenFamDetails.familyDetailId,
      visitDate: this.viewFamilyForm.value.date,
      isFamilyHerselfBeneficiary: this.viewBeneficiaryDetails.filter(x => x.is_checked == true && x.status == 'PW')?.[0]?.is_checked == true ? 'Y' : 'N',
      escortOrReferType: this.createEscortReferForm.value.type == 'escort' ? 'E' : 'R',
      visitingPlaceId: this.createEscortReferForm.value.place,
      escortedReferredByStaff: this.createEscortReferForm.value.staff == true ? 'Y' : 'N',
      escorteeRefereeStaffId: this.createEscortReferForm.value.user,
      escortedReferredBySS: this.createEscortReferForm.value.ss == true ? 'Y' : 'N',
      escorteeRefereeSsId: this.onclickBenFamDetails.followUpSSId,
      presentInPregnantWoman: this.onclickBenFamDetails.presentInPregnantWoman,
      presentInLactatingMother: this.onclickBenFamDetails.presentInLactatingMother,
      hasChildPresentInPem: this.onclickBenFamDetails.hasChildPresentInPem,
      has2to5yearsOldChildren: this.onclickBenFamDetails.has2to5yearsoldChildren,
      hasAdolescentGirlChildren: this.onclickBenFamDetails.hasAdolescentGirlChildren,
      active_flag: 'A',
      reasonList: this.reasonListID,
      childDetailList: this.beneficiaryListID
    }
    console.log(saveReq, 'savereq');

    this.escortReferService.getEscortReferRegistersaveOrUpdate(saveReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.viewSelectBenificiaryModalDismiss();
        this.changeVillage(this.viewEscortReferForm.value.gram)
      } else {
        this.showError(res.message);
      }

    })

  }

  openDialog(escort) {
    console.log(escort);
    this.beneficiaryDetails = [];
    if (escort.isFamilyHerselfBeneficiary == 'Y') {
      this.beneficiaryDetails.push({ childName: escort.familyName, age: escort.familyAge, sex: 'F', status: 'PW' });
    }

    if (escort.childDetailList.length > 0) {
      escort.childDetailList.filter(x => x.active_flag != 'NC').forEach(y => {
        var t = [];
        y.age.split(/[year,month,days]+/).forEach(x => {
          t.push(x)
          this.year = t[0];
          this.month = t[1];
          this.day = t[2];
        })
        console.log(this.year, this.month, this.day);

        if (y.presentInPem == 'Y') {
          this.muacPEM = 'PEM';
        } else {
          this.muacPEM = '';
        }

        if (this.year < 2) {
          this.muacLM = 'LM';
        } else {
          this.muacLM = '';
        }

        if (this.year >= 2 && this.year < 5) {
          this.twotofive = '2 to 5';
        } else {
          this.twotofive = '';
        }

        if (this.year >= 14 && this.year < 18) {
          this.adolStatus = 'AG';
        } else {
          this.adolStatus = '';
        }

        this.beneficiaryDetails.push(y);
        this.beneficiaryDetails = this.beneficiaryDetails?.map(({
          status = this.muacPEM + ' ' + this.muacLM + ' ' + this.twotofive + ' ' + this.adolStatus,
          ...rest
        }) => ({
          status,
          ...rest
        }));

      })

    }

    console.log(this.beneficiaryDetails, 'beneficiaryDetails');

    this.dialog.open(EscortReferRegisterMatModalComponent, {
      width: '700px',
      height: '250px',
      data: { ben: this.beneficiaryDetails, famNo: escort.familyNumber }
    });
  }

  showSuccess(message) {
    this.toaster.success(message, 'Escort-Reref Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Escort-Reref Register', {
      timeOut: 3000,
    });
  }


}