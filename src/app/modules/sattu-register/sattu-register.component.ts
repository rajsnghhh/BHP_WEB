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
  prequisiteDetails: Array<any> = [];
  villageList: Array<any> = [];
  gpList: Array<any> = [];
  modalContent: any;
  viewFamilyListModal: any;
  createSattuModal: any;
  sattuSearch: any;
  p: any;
  sattuView: Array<any> = [];

  constructor(private sidebarService: SidebarService, private http: HttpClient, private router: Router, private fb: FormBuilder,
    private httpService: HttpService, private sattuService: SattuRegisterService, private modalService: NgbModal,
    config: NgbModalConfig, public validationService: ValidationService, public dialog: MatDialog, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,) {
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

    // this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register']) : this.router.navigate(['/error']);

    // this.createMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    // this.updateMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    // this.deleteMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
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
    // this.selectVillageForm.controls.filterDate.setValue('')
    console.log(villageId, 'villageId');

    let viewreq = { dataAccessDTO: this.httpService.dataAccessDTO, villageId: villageId, visitDate: null };
    this.loader = false;
    this.sattuService.getSattuview(viewreq).subscribe((res: any) => {
      this.loader = true;
      this.sattuView = res.responseObject;
      //   this.sattuView?.forEach((x) => {
      //     x.familyList = x.familyList?.map(({
      //       visitDate = x.visitDate,
      //       ...rest
      //     }) => ({
      //       visitDate,
      //       ...rest
      //     }));
      //   })
      console.log(this.sattuView, 'sattuView');
      //   this.escortview?.forEach(y => {
      //     console.log(y);
      //     y.familyList.forEach(z => {
      //       this.escortviewData.push(z)
      //     })
      //     console.log(this.escortviewData, 'escortviewData');

    })

    //   this.escortviewData.forEach(x => {
    //     if (x.escortOrReferType == 'R') {
    //       x.escortOrReferType = 'Refer'
    //     } else {
    //       x.escortOrReferType = 'Escort'
    //     }
    //   });

    //   this.escortviewFilterData = this.escortviewData
    //   console.log(this.escortviewData, 'escortviewData');
    // })

  }

  viewFamilyList() {
    // this.escortSearch = '';
    // this.viewFamilyListModal = this.modalService.open(viewFam, {
    //   windowClass: 'viewFam',
    // });
    // this.viewFamily_Form();

    const dialogRef = this.dialog.open(ViewSattuFamilyComponent, {
      width: '1100px',
      height: '570px',
      data: this.selectVillageForm.value.gram
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });


  }

  // viewFamModalDismiss() {
  //   this.viewFamilyListModal.close();
  //   // this.escortSearch = '';
  //   // this.villageName = [];
  //   // this.familyList = [];
  // }





  getSattuRegisterPrerequisites() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe((res) => {
      this.prequisiteDetails = res.responseObject;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });
  }



  // createSattu_Form() {
  //   this.createSattuForm = this.fb.group({
  //     orientation: ['', Validators.required],
  //   })
  // }

  // createSattuModalDismiss() {
  //   this.createSattuModal.close();
  //   // var ID = this.editEscortDetails?.escortReferRegisterId;

  //   // if (ID) {
  //   //   this.editEscortDetails = '';
  //   //   ID = 0;
  //   //   this.viewBeneficiaryModal.close();
  //   // }
  //   // else {
  //   //   this.viewBeneficiaryModal.close();
  //   //   this.viewBeneficiaryDetails = [];
  //   //   this.onclickBenFamDetails = [];
  //   // }
  // }


}
