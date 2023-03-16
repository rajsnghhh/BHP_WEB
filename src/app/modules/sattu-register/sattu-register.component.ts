import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SattuRecordHistoryComponent } from './sattu-record-history/sattu-record-history.component';
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

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private fb: FormBuilder,
    private httpService: HttpService, private sattuService: SattuRegisterService, private modalService: NgbModal,
    config: NgbModalConfig, public validationService: ValidationService, public dialog: MatDialog, private toaster: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
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
      this.sattuView = [];
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
    this.sattuView = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.villageList = [];
    this.sattuView = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.selectVillageForm.controls.gram.setValue('');
    this.sattuView = [];
  }

  changeVillage(villageId) {
    this.sattuView = [];
    console.log(villageId, 'villageId');

    let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: villageId, visitDate: null };
    this.loader = false;
    this.sattuService.getSattuview(viewreq).subscribe((res: any) => {
      this.loader = true;
      this.sattuView = res.responseObject;
      this.sattuView?.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular'
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')';
        } else {
          x.sattuPreparingFrequency = 'Irregular'
        }
      })
      console.log(this.sattuView, 'sattuView');

      this.orientationLength = this.sattuView?.filter(x => x.sattuOrientationDate != null).length;
      // console.log(this.orientationLength, 'orientationLength');

      this.regularLength = this.sattuView?.filter(x => x.sattuPreparingFrequency == "Regular").length;
      // console.log(this.regularLength, 'regularLength');

      this.irregularLength = this.sattuView?.filter(x => x.sattuPreparingFrequency == "Irregular").length;
      // console.log(this.irregularLength, 'irregularLength');

      this.notPreparingLength = this.sattuView?.filter(x => x.sattuNonPreparingReasonId != null).length;
      // console.log(this.notPreparingLength, 'notPreparingLength');
    })

  }

  viewFamilyList() {
    const dialogRef = this.dialog.open(ViewSattuFamilyComponent, {
      width: '1100px',
      height: '570px',
      data: this.selectVillageForm.value.gram
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeVillage(this.selectVillageForm.value.gram)
    });
  }

  familyWiseSattuRecord(sattu) {
    console.log(sattu);
    this.dialog.open(SattuRecordHistoryComponent, {
      width: '1000px',
      height: '450px',
      data: { history: sattu, villageId: this.selectVillageForm.value.gram }
    });
  }

}
