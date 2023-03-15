import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { CreateSattuRegisterComponent } from './create-sattu-register/create-sattu-register.component';
import { SattuRegisterService } from './sattu-register.service';
import { ViewSattuFamilyComponent } from './view-sattu-family/view-sattu-family.component';

@Component({
  selector: 'app-sattu-register',
  templateUrl: './sattu-register.component.html',
  styleUrls: ['./sattu-register.component.css']
})
export class SattuRegisterComponent {
  selectVillageForm: FormGroup;
  searchFullscreen: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  loader: boolean = true;
  regionBranchHide: boolean;
  regionList: Array<any> = [];
  lowerRoleBranchId: any;
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  villageList: Array<any> = [];
  gpList: Array<any> = [];
  modalContent: any;
  viewSattuRecordModal: any;
  createSattuModal: any;
  sattuSearch: any;
  p: any;
  sattuView: Array<any> = [];
  orientationLength: any;
  regularLength: any;
  irregularLength: any;
  notPreparingLength: any;
  historyRecords: Array<any> = [];
  showFamNo: any;
  showFamName: any;
  showGuardianName: any;
  modalRecord: any;
  modalClose:any;

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private fb: FormBuilder,
    private httpService: HttpService, private sattuService: SattuRegisterService, private modalService: NgbModal,
    config: NgbModalConfig, public validationService: ValidationService, public dialog: MatDialog, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.changeVillage(1);
    this.selectVillage_Form();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
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

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  selectVillage_Form() {
    this.selectVillageForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    })
  }

  get m() {
    return this.selectVillageForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.sattuService.getBranchesOfRegion(req).subscribe((res) => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    this.selectVillageForm.controls.branch.setValue('');
    this.selectVillageForm.controls.block.setValue('');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.selectVillageForm.value.region == '') {
      this.branchList = [];
      // this.escortviewData = [];
    }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.sattuService.getVillagesOfBranch(req).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });

    this.selectVillageForm.controls.block.setValue('');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.selectVillageForm.controls.gram.setValue('');
    // this.escortviewData = [];
  }

  changeVillage(villageId) {
    // this.escortviewData = [];
    console.log(villageId, 'villageId');

    let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: 1, visitDate: null };
    this.loader = false;
    this.sattuService.getSattuview(viewreq).subscribe((res: any) => {
      this.loader = true;
      this.sattuView = res.responseObject;
      this.sattuView.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular'
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')';
        } else {
          x.sattuPreparingFrequency = 'Irregular'
        }
      })
      console.log(this.sattuView, 'sattuView');

      this.orientationLength = this.sattuView.filter(x => x.sattuOrientationDate != null).length;
      console.log(this.orientationLength, 'orientationLength');

      this.regularLength = this.sattuView.filter(x => x.sattuPreparingFrequency == "Regular").length;
      console.log(this.regularLength, 'regularLength');

      this.irregularLength = this.sattuView.filter(x => x.sattuPreparingFrequency == "Irregular").length;
      console.log(this.irregularLength, 'irregularLength');

      this.notPreparingLength = this.sattuView.filter(x => x.sattuNonPreparingReasonId != null).length;
      console.log(this.notPreparingLength, 'notPreparingLength');
    })

  }

  viewFamilyList() {
    const dialogRef = this.dialog.open(ViewSattuFamilyComponent, {
      width: '1100px',
      height: '570px',
      data: this.selectVillageForm.value.gram
    });
  }

  familyWiseSattuRecord(record, sattu) {
    this.modalRecord = record;
    console.log(sattu);
    this.showFamNo = sattu.familyNumber;
    this.showFamName = sattu.familyName;
    this.showGuardianName = sattu.husbandOrGuardianName;

    this.viewSattuRecordModal = this.modalService.open(record, {
      windowClass: 'record',
    });

    this.modalClose = this.viewSattuRecordModal;

    let historyObj = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: sattu.familyDetailId };
    this.sattuService.getSattuRegisterHistoryOfAFamily(historyObj).subscribe((res: any) => {
      this.historyRecords = res.responseObject;
      this.historyRecords.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular'
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')'
        } else {
          x.sattuPreparingFrequency = 'Irregular'
        }
      })
      console.log(this.historyRecords, 'historyRecords');
    })
  }

  sattuRecordModalDismiss() {
    this.viewSattuRecordModal.dismiss();
    console.log(true);
    
  }

  editSattuRecord(history) {
    this.viewSattuRecordModal.dismiss();

    console.log(history);
    this.dialog.open(CreateSattuRegisterComponent, {
      width: '760px',
      height: '260px',
      data: { familyDetails: history, modalRecord: this.modalRecord , modalCls:this.modalClose}
      // visitDate: history.visitDate
    });


  }

}
