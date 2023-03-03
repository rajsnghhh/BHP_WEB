import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRegisterService } from './daily-activity-register.service';
import { HttpService } from '../core/http/http.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-activity-register',
  templateUrl: './daily-activity-register.component.html',
  styleUrls: ['./daily-activity-register.component.css']
})

export class DailyActivityRegisterComponent implements OnInit {
  locationForm: UntypedFormGroup;
  editForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchVillageMapId: any;
  villageMasterId: any;
  hcoList: any;
  hcoId: any;
  darList: Array<any> = [];
  darViewFamilyList: Array<any> = [];
  darViewChildList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  childCheckbox: any;
  visitCheckbox: any;
  changeSS: any;
  swasthyaSahayika: Array<any> = [];
  visitData: Array<any> = [];
  editListCheck: any;
  childbox: Array<any> = [];
  isDisabled: boolean = false;
  mode: any;
  updateMode: boolean;
  deleteMode: boolean;
  regionBranchHide: boolean;
  roleAccess: any;
  followUpSSName: any;
  followUpSSId: any;
  loader: boolean = true;

  constructor(private fb: UntypedFormBuilder, public validationService: ValidationService, private http: HttpClient, private sidebarService: SidebarService,
    private dailyActivityService: DailyActivityRegisterService, private toaster: ToastrService, private httpService: HttpService,
    private modalService: NgbModal, private confirmationDialogService: ConfirmationDialogService, private router: Router, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
    this.roleAccess = roleAccessDTO.responseObject?.RoledetailDTO?.roleShortName
    console.log(this.roleAccess);

    this.locForm();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: res.branchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        let Dato = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          branchId: res.branchId
        }

        this.dailyActivityService.hcoListOfBranch(Dato).subscribe((res: any) => {
          this.hcoList = res.responseObject;
          console.log(this.hcoList, 'hcoList');
        });
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/daily-activity-register']) : this.router.navigate(['/error']);

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  changeRegion(region) {
    let regionId = this.regionList.find((reg) => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };

    setTimeout(() => {
      this.dailyActivityService.listOfBranchesOfARegion(req).subscribe((res) => {
        this.branchList = res?.responseObject;
      },
        (error) => {
          this.branchList = null;
        }
      );
    }, 1000);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.hco.setValue('');
    this.locationForm.controls.fromDate.setValue('');
    this.locationForm.controls.toDate.setValue('');
    this.darList = [];
    this.darViewFamilyList = [];
    this.branchList = [];
    this.hcoList = [];
    if (this.locationForm.value.region == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.branchList = [];
      this.hcoList = [];
      this.showError('No Data Found');
    }
  }

  changeHco(id) {
    this.hcoId = id;

    this.locationForm.controls.fromDate.setValue('');
    this.locationForm.controls.toDate.setValue('');
    this.darList = [];
    this.darViewFamilyList = [];
    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.showError('No Data Found');
    }
  }

  changeBranch(branch) {

    console.log(branch);

    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    this.dailyActivityService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });


    if (branch) {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

    if (this.locationForm.value.branch == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.hcoList = [];
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.showError('No Data Found');
    }

    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

  }

  changeSahika(ss) {
    this.sidebarService.swasthyaSahayikaId = ss;
    this.sidebarService.swasthyaSahayikaName = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)?.swasthyaSahayikaName
  }

  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  fromDateChange() {
    if (this.locationForm.value.fromDate && this.locationForm.value.toDate) {
      this.locationForm.controls.toDate.setValue('');
    }
    this.darList = [];
    this.darViewFamilyList = [];
  }

  toDateChange() {
    this.darList = [];
    this.darViewFamilyList = [];
  }

  viewDAREntryList() {

    if (this.regionBranchHide) {
      if (!this.locationForm.value.hco) {
        this.showError('Please Select Role');
        return;
      }
    }

    this.viewingDAREntryList();


  }

  viewingDAREntryList() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoId: this.hcoId ? this.hcoId : this.sidebarService.userId,
      startDate: this.locationForm.value.fromDate,
      endDate: this.locationForm.value.toDate,
      withVisitPurposeMap: false
    }

    console.log(obj);
    this.loader = false;
    this.dailyActivityService.viewingDAREntryList(obj).subscribe((res) => {
      this.loader = true;
      this.darList = res.responseObject;
      console.log(this.darList);
      if (this.darList.length == 0) {
        this.showError('No data found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });
  }

  darViewFamily(item) {

    this.darViewFamilyList = item;

    console.log(this.darViewChildList, 'this.darViewChildList');

    console.log(this.darViewFamilyList, 'darViewFamily');

  }

  modalDismiss() {
    this.modalReference.close();
  }

  changeChildbox(e, item) {
    console.log(e.target.checked, item);
    if (e.target.checked == true) {
      item.active_flag = 'A'
    } else {
      item.active_flag = 'D'
    }
  }

  changeVisitbox(e, items) {
    console.log(items);

    if (e.target.checked) {
      items.answer = 'Y';
    } else {
      items.answer = 'N';
    }
    console.log(e.target.checked, items);
  }


  changess(e) {
    this.changeSS = e;
    console.log(this.changeSS);
  }

  editDARModal(editDAR, item) {
    console.log(item, 'a');
    this.mode = 'E';
    console.log(editDAR);

    this.editListCheck = item;
    this.followUpSSName = item.followUpSSName;
    this.followUpSSId = item.followUpSSId;
    this.darViewChildList = this.editListCheck.darChildList;
    console.log(this.darViewChildList, '  this.darViewChildList   this.darViewChildList ');


    this.editForms();
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    }

    console.log(req);


    this.dailyActivityService.ssVillageWiseList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR',
      });
    }, 500)

    let post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    }

    this.dailyActivityService.visitPurposeData(post).subscribe((res) => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });

  }


  viewDARModal(editDAR, item) {
    console.log(item);
    this.followUpSSName = item.followUpSSName;
    this.followUpSSId = item.followUpSSId;

    this.mode = 'V';

    this.editListCheck = item;
    this.darViewChildList = this.editListCheck.darChildList;
    this.editForms();

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    }

    console.log(req);


    this.dailyActivityService.ssVillageWiseList(req).subscribe((res) => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR',
      });
    }, 500)

    let post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    }

    this.dailyActivityService.visitPurposeData(post).subscribe((res) => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });

    this.editForm.disable();

  }


  editForms() {
    this.editForm = this.fb.group({
      ss: [this.editListCheck.visitedWithSS ? this.editListCheck.visitedWithSS : this.changeSS],
      sahayika: [this.editListCheck.ssId ? this.editListCheck.ssId : '']
    });

    if (this.editListCheck.visitedWithSS == 'Y') {
      this.changeSS = 'Y';
    }

    if (this.editListCheck.visitedWithSS == 'N') {
      this.changeSS = 'N';
    }

  }

  deleteDAR(item, i) {
    console.log('deleteDAR');

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(item, i)
      )

      .catch(() => '');
  }

  delete(item, i) {
    console.log(item);

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: item.visitedWithSS,
      ssId: item.ssId,
      childList: item.darChildList,
      has2to5yearsoldChildren: item.has2to5yearsOldChildren,
      hasAdolescentGirlChildren: item.hasAdolescentGirlChildren,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "D",
      visitPurposeData: this.visitData,
      presentInPregnantWoman: item.presentInPregnantWoman,
      presentInLactatingMother: item.presentInLactatingMother,
      hasChildPresentInPem: item.hasChildPresentInPem
    }

    console.log(obj);

    this.dailyActivityService.saveEditDAR(obj).subscribe((res) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.darViewFamilyList.splice(i, 1);
        if (this.darViewFamilyList.length == 0) {
          this.viewingDAREntryList();
        }
      } else {
        this.showError(res.message)
      }

    });

  }

  saveEditDAR() {
    console.log(this.editListCheck);
    var item = this.editListCheck;

    var chng;
    if (this.changeSS) {
      chng = this.changeSS
    } else {
      chng = item.visitedWithSS
    }



    // var ssid;
    // if (this.changeSS == 'Y') {
    //   ssid = this.sidebarService.swasthyaSahayikaId;
    // }

    const newArrayOfObj = item.darChildList.map(({
      childId: childDetailId,
      ...rest
    }) => ({
      childDetailId,
      ...rest
    }));

    console.log(newArrayOfObj);

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: chng,
      ssId: this.editForm.value.sahayika ? this.editForm.value.sahayika : this.sidebarService.swasthyaSahayikaId,
      childList: newArrayOfObj,
      has2to5yearsoldChildren: item.has2to5yearsOldChildren,
      hasAdolescentGirlChildren: item.hasAdolescentGirlChildren,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "A",
      visitPurposeData: this.visitData,
      presentInPregnantWoman: item.presentInPregnantWoman,
      presentInLactatingMother: item.presentInLactatingMother,
      hasChildPresentInPem: item.hasChildPresentInPem
    }


    console.log(obj);
    if (obj.visitedWithSS == 'Y') {
      if (!obj.ssId) {
        this.showError('Please select name of ss ');
        return;
      }
    }

    if (this.changeSS == 'N') {
      obj.ssId = null;
    }

    this.dailyActivityService.saveEditDAR(obj).subscribe((res) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.toDateChange();
        this.viewDAREntryList();
      } else {
        this.showError(res.message);
      }

    });

  }

  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  get l() {
    return this.locationForm.controls;
  }
}
