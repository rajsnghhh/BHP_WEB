import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../core/http/http.service';
import { EventRegisterService } from './event-register.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { CreateEventRegisterComponent } from './create-event-register/create-event-register.component';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { FgdViewComponent } from './fgd-view/fgd-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent {
  searchFullscreen: boolean;
  regionBranchHide: boolean;
  eventRegisterForm: FormGroup;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  lowerRankRegionId: any;
  lowerRankbranchId: any; // HCO, HCOI/ TL
  branchOpenDate: any;
  index: number = 0;
  SchoolEventsOfBranch: Array<any> = [];
  specificSchoolEventDetails: any;
  specificSpecialEventDetails: any;
  SpecialEventsOfBranch: Array<any> = [];
  p: any;
  p2: any;
  viewMode: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  registerSearch: any;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private toaster: ToastrService, public validationService: ValidationService, private httpService: HttpService,
    private eventService: EventRegisterService, private router: Router,
    public dialog: MatDialog, private confirmationDialogService: ConfirmationDialogService) {
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.eventRegisterForms();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      this.lowerRankbranchId = res.branchId;
      this.lowerRankRegionId = res.regionID;
      this.branchOpenDate = !this.lowerRankbranchId ? null : res.branchLIST[0]?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate')
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
          branchId: this.lowerRankbranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.loader = true;
            this.villagesOfBranch = res.responseObject;
          }
        });

        this.changeBranch(this.lowerRankbranchId);
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;

    // Access for CRUD operation 
    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/event-register']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  // Form created for region & branch access
  eventRegisterForms() {
    this.eventRegisterForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  get l() {
    return this.eventRegisterForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.loader = false;
      this.eventService.getBranchesOfRegion(req).subscribe((res) => {
        this.loader = true;
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    this.eventRegisterForm.controls.branch.setValue('');
    this.SchoolEventsOfBranch = [];
    if (this.eventRegisterForm.value.region == '') {
      this.branchList = [];
      this.SchoolEventsOfBranch = [];
    }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    if (!this.lowerRankbranchId) {
      this.branchOpenDate = this.branchList.find(x => x.branchId == branchId)?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate');
    }

    // API called for get event list of school & special
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.loader = false;
    this.eventService.viewAllEventsOfABranch(req).subscribe((res) => {
      this.loader = true;
      this.SchoolEventsOfBranch = res.responseObject?.schoolEvents;
      this.SchoolEventsOfBranch.forEach(x => {
        if (x.eventName.includes('Primary')) {
          x.eventName = 'Primary School Goers'
        } else {
          x.eventName = 'For Adolescent Girls'
        }
      })
      console.log(this.SchoolEventsOfBranch, 'SchoolEventsOfBranch');
      this.SpecialEventsOfBranch = res.responseObject?.specialEvents;
      console.log(this.SpecialEventsOfBranch, 'SpecialEventsOfBranch');
    });

    this.SchoolEventsOfBranch = [];
  }

  //view specific school event details 
  viewSchoolEvent(school) {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSchoolId: school.eventRegisterSchoolId };
    this.loader = false;
    this.eventService.viewSpecificSchoolEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.specificSchoolEventDetails = res.responseObject;
      this.specificSchoolEventDetails.modalType = "view";
      this.createEventRegister(this.specificSchoolEventDetails);
    });
  }

  //view specific special event details 
  viewSpecialEvent(special) {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: special.eventRegisterSpecialId };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.specificSpecialEventDetails = res.responseObject;
      this.specificSpecialEventDetails.modalType = "view";
      this.createEventRegister(this.specificSpecialEventDetails);
    });
  }

  //Modal for creating school & special event register
  createEventRegister(specificEventDetails) {

    const dialogRef = this.dialog.open(CreateEventRegisterComponent, {
      width: '1100px',
      height: '570px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId,
        branchOpenDate: this.branchOpenDate,
        specificEventDetails: specificEventDetails,
        regionID: this.eventRegisterForm.value.region || this.lowerRankRegionId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

  //Updating school event register
  editSchoolEvent(school) {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSchoolId: school.eventRegisterSchoolId };
    this.loader = false;
    this.eventService.viewSpecificSchoolEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.specificSchoolEventDetails = res.responseObject;
      this.specificSchoolEventDetails.modalType = "edit";
      this.createEventRegister(this.specificSchoolEventDetails);
    });

  }

  //Updating special event register
  editSpecialEvent(special) {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: special.eventRegisterSpecialId };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.specificSpecialEventDetails = res.responseObject;
      this.specificSpecialEventDetails.modalType = "edit";
      this.createEventRegister(this.specificSpecialEventDetails);
    });
  }

  //Deleting school event register confirmation
  deleteSchoolEvent(school) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
      .then(() => this.schoolDelete(school)
      )
      .catch(() => '');
  }

  //Deleting school event register
  schoolDelete(school) {
    let schoolDelReq = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSchoolId: school.eventRegisterSchoolId, active_flag: 'D' }
    this.loader = false;
    this.eventService.schoolEventSaveOrUpdate(schoolDelReq).subscribe((res: any) => {
      this.loader = true;
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })
  }

  //Deleting special event register confirmation
  deleteSpecialEvent(special) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
      .then(() => this.specialDelete(special)
      )
      .catch(() => '');
  }

  //Deleting special event register 
  specialDelete(special) {
    let schoolDelReq = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: special.eventRegisterSpecialId, active_flag: 'D' }
    this.loader = false;
    this.eventService.specialEventSaveOrUpdate(schoolDelReq).subscribe((res: any) => {
      this.loader = true;
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })

  }

  fgdViewModalMessage() {
    this.showErrors('FGD is not accessible')
  }

  showSuccess(message) {
    this.toaster.success(message, 'Event Deleted', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Event Deleted', {
      timeOut: 3000,
    });
  }

  showErrors(message) {
    this.toaster.error(message, '', {
      timeOut: 3000,
    });
  }

  // FGD modal for viweing created FGD lists 
  fgdViewModal(special) {
    const dialogRef = this.dialog.open(FgdViewComponent, {
      width: '800px',
      height: '380px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId, branchOpenDate: this.branchOpenDate,
        special: special
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }

}

