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
  lowerRankbranchId: any;
  branchOpenDate: any;
  index: number = 0;
  SchoolEventsOfBranch: Array<any> = [];
  specificSchoolEventDetails: any;
  specificSpecialEventDetails: any;
  SpecialEventsOfBranch: Array<any> = [];
  p: any;
  p2: any;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private toaster: ToastrService, public validationService: ValidationService, private httpService: HttpService,
    private eventService: EventRegisterService, public dialog: MatDialog, private confirmationDialogService: ConfirmationDialogService) {
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
  }

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
      this.eventService.getBranchesOfRegion(req).subscribe((res) => {
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
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.loader = false;
    this.eventService.viewAllEventsOfABranch(req).subscribe((res) => {
      this.loader = true;
      this.SchoolEventsOfBranch = res.responseObject.schoolEvents;
      console.log(this.SchoolEventsOfBranch, 'SchoolEventsOfBranch');
      this.SpecialEventsOfBranch = res.responseObject.specialEvents;
      console.log(this.SpecialEventsOfBranch, 'SpecialEventsOfBranch');
    });

    this.SchoolEventsOfBranch = [];
  }

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

  createEventRegister(specificEventDetails) {
    // console.log(specificEventDetails, 'specificEventDetails');

    const dialogRef = this.dialog.open(CreateEventRegisterComponent, {
      width: '1100px',
      height: '570px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId, branchOpenDate: this.branchOpenDate,
        specificEventDetails: specificEventDetails, regionID: this.eventRegisterForm.value.region || this.lowerRankRegionId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

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

  deleteSchoolEvent(school) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
      .then(() => this.schoolDelete(school)
      )
      .catch(() => '');
  }

  schoolDelete(school) {
    let schoolDelReq = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSchoolId: school.eventRegisterSchoolId, active_flag: 'D' }
    this.eventService.schoolEventSaveOrUpdate(schoolDelReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })
  }

  deleteSpecialEvent(special) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
      .then(() => this.specialDelete(special)
      )
      .catch(() => '');
  }

  specialDelete(special) {
    let schoolDelReq = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: special.eventRegisterSpecialId, active_flag: 'D' }
    this.eventService.specialEventSaveOrUpdate(schoolDelReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })
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

}

