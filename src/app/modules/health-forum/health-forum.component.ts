import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { HealthForumAngularMatModalComponent } from './health-forum-angular-mat-modal/health-forum-angular-mat-modal.component';
import { HealthForumService } from './health-forum.service';

@Component({
  selector: 'app-health-forum',
  templateUrl: './health-forum.component.html',
  styleUrls: ['./health-forum.component.css']
})
export class HealthForumComponent implements OnInit {
  healthForumForm: UntypedFormGroup;
  createHFForm: UntypedFormGroup;
  createEditHFEventForm: UntypedFormGroup;
  rescheduleHFForm: UntypedFormGroup;
  regionBranchHide: boolean;
  lowerRankbranchId: any;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  viewHealthForumsOfBranch: Array<any> = [];
  modalContent: any;
  viewHFEventModal: any;
  saveFamRecordModal: any;
  viewFamilyDetailModal: any;
  createHFModal: any;
  editHFEventModal: any;
  rescheduleHFModal: any;
  viewEventList: Array<any> = [];
  viewForumList: any;
  familyDetails: Array<any> = [];
  searchFullscreen: boolean;
  registerSearch: any;
  eventSearch: any;
  dropdownSettings: IDropdownSettings = {};
  areaList: Array<any> = [];
  hourList: Array<any> = [];
  minuteList: Array<any> = [];
  minDate: any;
  setDate: any;
  branchId: any;
  staffList: Array<any> = [];
  SSList: Array<any> = [];
  topicList: Array<any> = [];
  villageList: Array<any> = [];
  editHFDetails: any = {};
  editHFDetailsTime: Array<any> = [];
  loader: boolean = false;
  page = 1;
  pageSize = 6;
  p: any;
  visitorDetails = {
    visitorInfo: [],
  };
  index: number = 0;
  eventVillList: Array<any> = [];
  eventVillListID: Array<any> = [];
  eventDiseaseList: Array<any> = [];
  eventFamList: Array<any> = [];
  setFamList: Array<any> = [];
  statusList: Array<any> = [];
  HForumEventPrerequisite: any;
  diseaseListID: Array<any> = [];
  adolGirlListDisable: Array<any> = [];
  familyListData: Array<any> = [];
  year: any;
  month: any;
  day: any;
  editHF_eventDetails: any = {};
  familyHeadPresentLenChk: Array<any> = [];
  editStartHour: any;
  editStartMin: any;
  editEndHour: any;
  editEndMin: any;
  moreEventDetails: any;
  rescheduleData: any;
  viewMode: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  approveMode: boolean;
  rescheduleMode: boolean;
  rescheduleApprovalMode: boolean;
  eventViewMode: boolean;
  eventCreateMode: boolean;
  eventUpdateMode: boolean;
  eventDeleteMode: boolean;


  constructor(private fb: UntypedFormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private healthForumService: HealthForumService, private modalService: NgbModal, config: NgbModalConfig, private router: Router,
    private toaster: ToastrService, public validationService: ValidationService, public dialog: MatDialog, private confirmationDialogService: ConfirmationDialogService,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.healthForumForms();
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.lowerRankbranchId = res.branchId;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;
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

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/health-forum']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    this.approveMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;

    this.rescheduleMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'reschedule')?.accessType ? true : false;

    this.rescheduleApprovalMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'reschedule approval')?.accessType ? true : false;

    this.eventViewMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'event view')?.accessType ? true : false;

    this.eventCreateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'event create')?.accessType ? true : false;

    this.eventUpdateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'event update')?.accessType ? true : false;

    this.eventDeleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList
      .find(accessType => accessType.accessType == 'event delete')?.accessType ? true : false;

  }

  healthForumForms() {
    this.healthForumForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  get l() {
    return this.healthForumForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionId');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };

    this.healthForumService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res?.responseObject;
      console.log(this.branchList, 'this.branchList');
    });
    this.healthForumForm.controls.branch.setValue('');
    this.viewHealthForumsOfBranch = [];
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    this.branchId = branchId;
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.loader = false;
    this.healthForumService.viewHealthForumsOfABranch(req).subscribe((res) => {
      this.viewHealthForumsOfBranch = res?.responseObject;
      this.loader = true;
      console.log(this.viewHealthForumsOfBranch, 'this.viewHealthForumsOfBranch');
    });
    this.viewHealthForumsOfBranch = [];
  }

  viewHFEventDetails(HFeventDetails, health) {
    this.viewForumList = health;
    console.log(this.viewForumList, 'viewForumList');
    this.viewEventList = health.eventList;
    console.log(this.viewEventList, 'viewEventList');

    this.modalContent = '';
    this.viewHFEventModal = this.modalService.open(HFeventDetails, {
      windowClass: 'HFeventDetails',
    });

  }

  viewHFEventModalDismiss() {
    this.viewHFEventModal.close();

  }

  viewFamilyAttendedDetails(ViewFamilyDetails, event) {
    console.log(event);
    if (event.forumEventFamilyPresent == 0) {
      this.showError('No family is available');
      return;
    } else {
      let obj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: event.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      }

      this.healthForumService.viewHealthForumsOfAEvent(obj).subscribe((res: any) => {
        console.log(res.responseObject);
        this.familyDetails = res.responseObject?.villageWiseFamilyList;
        console.log(this.familyDetails, 'this.familyDetails');
      });

      this.modalContent = '';
      this.viewFamilyDetailModal = this.modalService.open(ViewFamilyDetails, {
        windowClass: 'ViewFamilyDetails',
      });
    }

  }

  viewFamilyModalDismiss() {
    this.viewFamilyDetailModal.close();
  }

  hourLists() {
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        this.hourList.push({ hourName: '0' + i, hourValue: '0' + i });
      } else {
        this.hourList.push({ hourName: i, hourValue: i });
      }
      // console.log(this.hourList);
    }
  }

  minuteLists() {
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        this.minuteList.push({ minuteName: '0' + i, minuteValue: '0' + i });
      } else {
        this.minuteList.push({ minuteName: i, minuteValue: i });
      }
      // console.log(this.minuteList);
    }
  }

  getAllStaffAndTheirSSOfABranch() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId };

    this.healthForumService.getAllStaffAndTheirSSOfABranch(req).subscribe((res: any) => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    });

  }

  createHealthForum(createHF) {
    console.log(this.editHFDetails, 'editHFDetails');
    this.hourList = [];
    this.minuteList = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'villageMasterId',
      textField: 'villageName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.createHFForms();

    if (this.editHFDetails.healthForumMasterId) {
      setTimeout(() => {
        this.modalContent = '';
        this.createHFModal = this.modalService.open(createHF, {
          windowClass: 'createHF',
        });
        this.loader = true;
      }, 1500);
    } else {
      this.modalContent = '';
      this.createHFModal = this.modalService.open(createHF, {
        windowClass: 'createHF',
      });
    }

    let dateString = new Date();
    this.minDate = moment(dateString).add(1, "days").format("YYYY-MM-DD");

    this.hourLists();
    this.minuteLists();
    this.getAllStaffAndTheirSSOfABranch();
  }

  changeDate() {
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }

    // if (this.createHFForm.value.staffName) {
    //   this.getTopicListAndAreasOfStaffAndOrSS();
    // }
    if (this.editHFDetails?.scheduleDetails?.date != this.createHFForm.value.date) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
  }

  changeStaff(staffId) {
    console.log(staffId, 'staffId');

    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
      this.createHFForm.controls.ssName.setValue('');
    }

    if (this.editHFDetails?.staffDetails?.staffId != this.createHFForm.value.staffName) {
      this.createHFForm.controls.ssName.setValue('');
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }



    // if ( this.createHFForm.value.areaList) {
    //   console.log(this.areaList.forEach(x => { x }));
    // }

    // if (this.editHFDetails?.staffDetails.staffId && this.createHFForm.value.staffName && ) {
    //   // this.createHFForm.controls.ssName.setValue('');
    //   this.createHFForm.controls.areaList.setValue('');
    //   // this.createHFForm.controls.topic.setValue('');
    // }

    this.SSList = this.staffList.find(item => item.staffId == staffId)?.ssList;
    console.log(this.SSList, 'ssList');
    this.getTopicListAndAreasOfStaffAndOrSS();
    // this.getTopicListAndAreasOfStaffAndOrSS();

    // from 270 line already commented before today
    // if (this.createHFForm.value.areaList) {
    //   if (this.editHFDetails?.staffDetails?.staffId == this.createHFForm.value.staffName &&
    //     this.editHFDetails?.ssDetails?.ssId == this.createHFForm.value.ssName &&
    //     this.editHFDetails?.scheduleDetails?.date == this.createHFForm.value.date) {

    //   }
    // if (this.editHFDetails?.healthForumMasterId) {
    //   this.createHFForm.controls.areaList.setValue('');
    // }
    // }
  }

  changeSS(ssId) {
    console.log(ssId, 'ssId');
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }

    if (this.editHFDetails?.ssDetails?.ssId != this.createHFForm.value.ssName) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }


    // Commented Before Today
    // if (this.createHFForm.value.areaList) {
    //   if (!this.editHFDetails?.healthForumMasterId) {
    //     this.createHFForm.controls.areaList.setValue('');
    //   }
    // }
  }

  getTopicListAndAreasOfStaffAndOrSS() {
    this.areaList = [];


    if (!this.createHFForm.value.ssName) {
      this.createHFForm.controls.ssName.setValue('');
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO, healthForumDate: this.createHFForm?.value.date,
      staffMasterId: this.createHFForm?.value.staffName, ssId: this.createHFForm?.value.ssName ? this.createHFForm?.value.ssName : ''
    };

    this.healthForumService.getTopicListAndAreasOfStaffAndOrSS(req).subscribe((res: any) => {
      console.log(res.responseObject);
      this.topicList = res.responseObject?.allTopics;
      console.log(this.topicList, ' this.topicList');
      this.areaList = res.responseObject?.villageDetails;
      this.areaList = this.areaList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));

      console.log(this.areaList, 'areaList');
    });

  }

  onItemSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach((x) => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }

  onItemDeSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach((x) => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }

  onSelectAll() {
    this.areaList.forEach((x) => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }

  onItemDeSelectAll() {
    this.areaList.forEach((x) => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }

  createHFForms() {
    this.editHFDetailsTime = [];
    if (this.editHFDetails?.healthForumMasterId) {
      var text = this.editHFDetails?.scheduleDetails?.time;
      text.trim().replace(" ", ":").trim().split(":").forEach(e => {
        if (e.length < 2) {
          this.editHFDetailsTime.push("0" + e);
        } else {
          this.editHFDetailsTime.push(e);
        }
        console.log(this.editHFDetailsTime);

      })
      console.log(this.editHFDetails.villageList);
      this.editHFDetails.villageList = this.editHFDetails.villageList.map(({
        villageId: villageMasterId,
        ...rest
      }) => ({
        villageMasterId,
        ...rest
      }));
      console.log(this.editHFDetails.villageList);

      setTimeout(() => {
        this.editHFDetails.villageList.forEach(e => {
          this.areaList.find(v => v.villageMasterId == e.villageMasterId).isChecked = true;
        })
      }, 1000);

      // if (this.editHFDetails?.staffDetails.staffId == this.createHFForm.value.staffName &&
      //   this.editHFDetails?.ssDetails.ssId == this.createHFForm.value.ssName &&
      //   this.editHFDetails?.scheduleDetails.date == this.createHFForm.value.date) {

      //   this.editHFDetails.villageList.forEach(e => {
      //     this.areaList.find(v => v.villageMasterId == e.villageId).isChecked = true;
      //   })
      //   this.areaList?.filter(e => e.isChecked).forEach(er => {
      //     this.editVill.push({ villageName: er.villageName, villageMasterId: er.villageMasterId });
      //     console.log(this.editVill);
      //   })
      //   console.log(this.areaList, 'areaList');
      //   console.log(this.editVill);
      // }
      // console.log(this.editHFDetails.villageList);

      this.createHFForm = this.fb.group({
        date: [this.editHFDetails.scheduleDetails.date, Validators.required],
        staffName: [this.editHFDetails.staffDetails.staffId, Validators.required],
        ssName: [this.editHFDetails.ssDetails.ssId ? this.editHFDetails.ssDetails.ssId : ''],
        areaList: [this.editHFDetails.villageList ? this.editHFDetails.villageList : '', Validators.required],
        hour: [this.editHFDetailsTime[0], Validators.required],
        minute: [this.editHFDetailsTime[1], Validators.required],
        meridiem: [this.editHFDetailsTime[2], Validators.required],
        topic: [this.editHFDetails.topicDetails.topicId, Validators.required],
        event: [this.editHFDetails.noOfEventProposed, Validators.required],
      });
      // console.log(this.editHFDetails.topicDetails.topicId);
      this.createHFForm.markAllAsTouched();
      // this.getAllStaffAndTheirSSOfABranch();
      setTimeout(() => {
        this.changeStaff(this.editHFDetails.staffDetails.staffId);
      }, 500);

    } else {
      this.createHFForm = this.fb.group({
        date: ['', Validators.required],
        staffName: ['', Validators.required],
        ssName: [''],
        areaList: ['', Validators.required],
        hour: ['', Validators.required],
        minute: ['', Validators.required],
        meridiem: ['', Validators.required],
        topic: ['', Validators.required],
        event: ['', Validators.required],
      });
    }

  }

  saveIsDisabled() {
    let flag = true;
    if (!this.createHFForm.value.date) {
      flag = false;
    } else if (!this.createHFForm.value.staffName) {
      flag = false;
    } else if (!this.createHFForm.value.areaList) {
      flag = false;
    } else if (!this.createHFForm.value.topic) {
      flag = false;
    } else if (!this.createHFForm.value.event) {
      flag = false;
    } else if (!this.createHFForm.value.hour) {
      flag = false;
    } else if (!this.createHFForm.value.minute) {
      flag = false;
    } else if (!this.createHFForm.value.meridiem) {
      flag = false;
    }
    return flag;
  }

  HfSaveOrUpdate() {
    console.log(this.editHFDetails, 'editHFDetails');
    console.log(this.areaList);

    var tt = []
    this.villageList = this.areaList.filter(list => list.isChecked == true);
    this.villageList.forEach(x => {
      tt.push({
        villageMasterId: x.villageMasterId
      });
    });
    console.log(this.villageList, 'this.villageList');

    // if (this.editHFDetails?.healthForumMasterId) {
    //   console.log(this.editHFDetails.villageList);

    //   this.areaList.forEach(i => {
    //     this.villageList = this.editHFDetails.villageList.filter(list => list.villageId == i.villageMasterId)
    //     if (this.villageList.length > 0) {
    //       if (i.isChecked) {
    //         this.villageList.forEach(x => {
    //           tt.push({
    //             healthForumVillageMapId: x.healthForumVillageMapId,
    //             active_flag: "A",
    //             villageMasterId: x.villageId
    //           });
    //         });
    //       } else {
    //         this.villageList.forEach(x => {
    //           tt.push({
    //             healthForumVillageMapId: x.healthForumVillageMapId,
    //             active_flag: "D",
    //             villageMasterId: x.villageId
    //           });
    //         });
    //       }
    //     } else {
    //       if (i.isChecked) {
    //         tt.push({
    //           healthForumVillageMapId: 0,
    //           active_flag: "A",
    //           villageMasterId: i.villageMasterId
    //         });
    //       }
    //     }
    //   })

    // } else {
    //   this.villageList = this.areaList.filter(list => list.isChecked == true);
    //   this.villageList.forEach(x => {
    //     tt.push({
    //       healthForumVillageMapId: x.healthForumVillageMapId,
    //       active_flag: x.active_flag,
    //       villageMasterId: x.villageMasterId
    //     });
    //   });
    //   console.log(this.villageList, 'this.villageList');
    // }

    let saveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: this.editHFDetails?.healthForumMasterId ? this.editHFDetails?.healthForumMasterId : 0,
      branchId: this.healthForumForm.value.branch ? this.healthForumForm.value.branch : this.lowerRankbranchId,
      staffId: this.createHFForm.value.staffName,
      ssId: this.createHFForm.value.ssName ? this.createHFForm.value.ssName : null,
      topicId: this.createHFForm.value.topic,
      date: this.createHFForm.value.date,
      scheduleStartHour: this.createHFForm.value.hour,
      scheduleStartMinute: this.createHFForm.value.minute,
      amOrPm: this.createHFForm.value.meridiem,
      noOfEventProposed: this.createHFForm.value.event,
      active_flag: 'A',
      villageList: tt
    }

    console.log(saveObj, 'savObj');

    if (saveObj.villageList.length == 0) {
      this.showError('Area selection is required');
      return;
    }

    this.healthForumService.HFSaveOrUpdate(saveObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
        this.createHFModalDismiss();
      } else {
        this.showError(res.message);
      }
    })

  }

  editHealthForum(createHF, health: {}) {
    this.editHFDetails = health;
    this.loader = false;
    this.createHealthForum(createHF)
  }

  get c() {
    return this.createHFForm.controls;
  }

  createHFModalDismiss() {
    var ID = this.editHFDetails?.healthForumMasterId;

    if (ID) {
      this.editHFDetails = '';
      ID = 0;
      this.createHFModal.close();
      // this.editVill = []
    }
    else {
      this.createHFModal.close();
      // this.editVill = []
    }
  }

  deleteHealthForum(health) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this forum ?')
      .then(() => this.delete(health)
      )
      .catch(() => '');
  }

  delete(health) {
    let delObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: health.healthForumMasterId,
      branchId: this.healthForumForm.value.branch,
      staffId: health.staffDetails.staffId,
      ssId: health.ssDetails.ssId,
      topicId: health.topicDetails.topicId,
      date: health.scheduleDetails.date,
      // scheduleStartHour: this.createHFForm.value.hour,
      // scheduleStartMinute: this.createHFForm.value.minute,
      // amOrPm: this.createHFForm.value.meridiem,
      noOfEventProposed: health.noOfEventProposed,
      active_flag: 'D',
      villageList: health.villageList
    }

    console.log(delObj, 'delObj');

    this.healthForumService.HFSaveOrUpdate(delObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })

  }

  approveHealthForum(health) {
    console.log(health);
    if (health.approvalStatus == 'A') {
      this.showError('Forum is already approved')
      return;
    } else {
      let appObj = { dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: health.healthForumMasterId, isApproved: false }
      this.healthForumService.HFApprove(appObj).subscribe((res: any) => {
        console.log(res);
        if (res.status == true) {
          this.showSuccess('Approved Successfully');
          this.changeBranch(this.branchId || this.lowerRankbranchId);
        } else {
          this.showError(res.message);
        }
      })
    }

  }



  showSuccess(message) {
    this.toaster.success(message, 'Health Forum', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Health Forum', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  openDialog(health) {
    this.dialog.open(HealthForumAngularMatModalComponent, {
      width: '400px',
      height: '250px',
      data: { villLists: health }
    });
  }

  createHFEvents(createEditHFEvent) {
    this.hourList = [];
    this.minuteList = [];
    this.hourLists();
    this.minuteLists();
    this.visitorDetails.visitorInfo.push({
      visitorName: '',
      visitorDesignation: '',
      health_forum_event_visitor_map_id: 0,
      active_flag: 'A'
    });

    let HFPrerequisite = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId || this.lowerRankbranchId,
      healthForumMasterId: this.viewForumList.healthForumMasterId
    }

    this.loader = false;
    this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe((res: any) => {
      this.loader = true;
      this.HForumEventPrerequisite = res.responseObject;

      // if (this.HForumEventPrerequisite.ssName != null) {
      //   this.createEditHFEventForm.controls.ssPresent.setValue('');
      // } else {
      //   let yesDisabled = (document.getElementById("yess") as HTMLInputElement);
      //   yesDisabled.disabled = true;
      //   this.createEditHFEventForm.controls.ssPresent.setValue('N');
      //   this.createEditHFEventForm.controls.staffPresent.setValue('Y');
      //   this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
      // }
      console.log(this.HForumEventPrerequisite, 'HForumEventPrerequisite');
      this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
      this.eventDiseaseList = this.eventDiseaseList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      // console.log(this.eventDiseaseList);

      this.eventVillList = res.responseObject.villageList;
      console.log(this.eventDiseaseList, 'eventDiseaseList');
      // console.log(this.eventVillList, 'eventVillList');
      this.eventVillListID = [];
      this.eventVillList.forEach(x => {
        this.eventVillListID.push(x.villageId);
        // console.log(this.eventVillListID, 'eventVillListID');
      })

      let famReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        villageId: this.eventVillListID,
        healthForumMasterId: this.viewForumList.healthForumMasterId,
      }

      this.loader = false;
      this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe((res: any) => {
        this.eventFamList = res.responseObject;
        this.setFamList = res.responseObject;


        this.loader = true;

        // console.log(this.eventVillList, 'eventVillList22');
        console.log(this.eventFamList, 'eventFamList');
        this.eventFamList?.forEach((x) => {

          // console.log(x);

          x.familyList = x.familyList?.map(({
            setStatus = '',
            radioCheck = 'NA',
            villageId = '',
            adolGirl = [],
            health_forum_event_family_map_id = 0,
            ...rest
          }) => ({
            setStatus, radioCheck, villageId, adolGirl, health_forum_event_family_map_id,
            ...rest
          }));
          this.setData(x.familyList);

        })

        this.eventFamList = [];
        this.eventVillList.forEach(item => {
          this.eventFamList.push(res.responseObject?.find(items => items.villageId == item.villageId)?.familyList ?
            res.responseObject?.find(items => items.villageId == item.villageId)?.familyList : [])

        });
        // console.log(this.eventFamList);

        this.eventFamList.forEach((item) => {
          item.forEach(items => {
            items.adolescentGilrChildren = items.adolescentGilrChildren?.map(({
              isChecked = false,
              health_forum_event_child_map_id = 0,
              ...rest
            }) => ({
              isChecked, health_forum_event_child_map_id,
              ...rest
            }));

            // console.log(items.adolescentGilrChildren);

          })

        })

      })

    });

    if (this.editHF_eventDetails?.healthForumEventId) {
      setTimeout(() => {
        this.createEditHFEventForms(this.editHF_eventDetails);

        this.modalContent = '';
        this.editHFEventModal = this.modalService.open(createEditHFEvent, {
          windowClass: 'createEditHFEvent',
        });
      }, 1500);

    }

    if (!this.editHF_eventDetails?.healthForumEventId && this.viewForumList.approvalStatus == 'A') {
      this.createEditHFEventForms(this.editHF_eventDetails);

      this.modalContent = '';
      this.editHFEventModal = this.modalService.open(createEditHFEvent, {
        windowClass: 'createEditHFEvent',
      });
    } else if (!this.editHF_eventDetails?.healthForumEventId && this.viewForumList.approvalStatus != 'A') {
      this.showError('Health Forum is not approved');
      return;
    }


    // if (this.viewForumList.approvalStatus == 'A') {
    //   // console.log(this.editHF_eventDetails, 'editHF_eventDetails');



    //   setTimeout(() => {
    //     this.createEditHFEventForms(this.editHF_eventDetails);

    //     this.modalContent = '';
    //     this.editHFEventModal = this.modalService.open(createEditHFEvent, {
    //       windowClass: 'createEditHFEvent',
    //     });
    //   }, 1500);





    //   // this.visitorDetails.visitorInfo = this.visitorDetails.visitorInfo.map(({
    //   //   health_forum_event_visitor_map_id = 0,
    //   //   active_flag = 'A',
    //   //   ...rest
    //   // }) => ({
    //   //   health_forum_event_visitor_map_id, active_flag,
    //   //   ...rest
    //   // }));
    //   // console.log(this.visitorDetails.visitorInfo);

    // } else {


    // }

  }

  editHFEvents(createEditHFEvent, event) {
    this.editHF_eventDetails = event;
    // console.log(this.editHF_eventDetails, 'this.editHF_eventDetails');

    this.createHFEvents(createEditHFEvent);
  }

  setData(familyList) {
    // console.log(familyList);

    familyList.forEach(x => {
      this.statusList = [];
      this.statusList.push({ status: x.has2to5yearsoldChildren, set: "2-5 yr" },
        { status: x.hasAdolescentGirlChildren, set: "14-18 yr" }, { status: x.hasChildPresentInPem, set: "PEM" },
        { status: x.presentInLactatingMother, set: "LM" }, { status: x.presentInPregnantWoman, set: "PW" })
      // console.log(this.statusList);
      var mainString = "";
      this.statusList.forEach(x => {
        if (x.status == "Y") {
          mainString += x.set;
          mainString += ", "
        }
      })
      if (mainString.length < 1) {
        // console.log(mainString);
        x.setStatus = "-"
      } else {
        x.setStatus = mainString.substring(0, mainString.length - 2);
        // console.log(x.setStatus);
      }
    })

  }

  saveFamRecordModalDismiss() {
    this.saveFamRecordModal.close();
  }

  addMoreVisitor() {
    this.visitorDetails.visitorInfo.push({
      visitorName: '',
      visitorDesignation: '',
      health_forum_event_visitor_map_id: 0,
      active_flag: 'A'
    });

  }

  removeNewVisitor(i) {
    if (this.moreEventDetails) {
      if (this.moreEventDetails.visitorDetailsList.length != 0) {
        if (this.visitorDetails.visitorInfo[i].health_forum_event_visitor_map_id != 0) {
          this.visitorDetails.visitorInfo[i].active_flag = "D";
        } else {
          this.visitorDetails.visitorInfo.splice(i, 1);
        }
      } else {
        this.visitorDetails.visitorInfo.splice(i, 1);
      }
    } else {
      this.visitorDetails.visitorInfo.splice(i, 1);
    }

    console.log(this.visitorDetails.visitorInfo);
  }


  editHFEventModalDismiss() {
    this.familyHeadPresentLenChk = []

    // this.editHFEventModal.close();
    // this.visitorDetails.visitorInfo = []
    // this.eventFamList.forEach(x => {
    //   x.forEach(y => {
    //     if (y.radioCheck != 'NA')
    //       this.familyHeadPresentLenChk.push(y.radioCheck = 'NA');
    //     console.log(this.familyHeadPresentLenChk);

    //   })
    // })

    var ID = this.editHF_eventDetails?.healthForumEventId;

    if (ID) {
      this.editHF_eventDetails = '';
      ID = 0;
      this.editHFEventModal.close();
      this.visitorDetails.visitorInfo = [];
      this.editStartHour = '';
      this.editStartMin = '';
      this.editEndHour = '';
      this.editEndMin = '';
      this.moreEventDetails = ''
    }
    else {
      this.editHFEventModal.close();
      this.visitorDetails.visitorInfo = []
    }
  }

  createEditHFEventForms(editHF_eventDetails) {
    if (this.editHF_eventDetails?.healthForumEventId) {
      // this.editStartHour = this.editHF_eventDetails?.startHour;
      // this.editStartHour = this.editStartHour.toString();
      // this.editStartMin = this.editHF_eventDetails?.startMinute;
      // this.editStartMin = this.editStartMin.toString();
      // this.editEndHour = this.editHF_eventDetails?.endHour;
      // this.editEndHour = this.editEndHour.toString();
      // this.editEndMin = this.editHF_eventDetails?.endMinute;
      // this.editEndMin = this.editEndMin.toString();

      // if (this.editStartHour.length < 2) {
      //   this.editStartHour = '0' + this.editStartHour;
      //   console.log(this.editStartHour, 'this.editStartHour');
      // } else {
      //   this.editStartHour = this.editHF_eventDetails?.startHour
      // }

      // if (this.editStartMin.length < 2) {
      //   this.editStartMin = '0' + this.editStartMin;
      //   console.log(this.editStartMin, 'this.editStartMin');
      // } else {
      //   this.editStartMin = this.editHF_eventDetails?.startMinute
      // }

      // if (this.editEndHour.length < 2) {
      //   this.editEndHour = '0' + this.editEndHour;
      //   console.log(this.editEndHour, 'this.editEndHour');
      // } else {
      //   this.editEndHour = this.editHF_eventDetails?.endHour
      // }

      // if (this.editEndMin.length < 2) {
      //   this.editEndMin = '0' + this.editEndMin;
      //   console.log(this.editEndMin, 'this.editEndMin');
      // } else {
      //   this.editEndMin = this.editHF_eventDetails?.endMinute
      // }

      let moreEventDetailsobj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: this.editHF_eventDetails.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      }


      this.healthForumService.viewHealthForumsOfAEvent(moreEventDetailsobj).subscribe((res: any) => {
        this.moreEventDetails = res.responseObject;
        // console.log(this.moreEventDetails, 'this.moreEventDetails');
        this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
      });

    } else {
      this.createEditHFEventForm = this.fb.group({
        startHour: ['', Validators.required],
        startMin: ['', Validators.required],
        startMeridiem: ['', Validators.required],
        endHour: ['', Validators.required],
        endMin: ['', Validators.required],
        endMeridiem: ['', Validators.required],
        staffPresent: ['', Validators.required],
        ssPresent: ['', Validators.required],
        eventConduction: ['', Validators.required],
        lastMonTopic: ['', Validators.required],
        thisMonTopic: ['', Validators.required],
        seasonalDiscussion: ['', Validators.required]
      });

      this.createEditHFEventForm.markAllAsTouched();
    }


  }

  unselectFamily(fami, int) {
    fami.radioCheck = 'NA';
    fami.adolescentGilrChildren.forEach(z => {
      z.active_flag = "D";
    })
    fami.adolGirl = [];
    fami.adolescentGilrChildren.filter(x => x.active_flag == "D").forEach((z) => {
      var t = [];
      z.age.split(/[year,month,days]+/).forEach(x => {
        t.push(x)
        this.year = t[0];
        this.month = t[1];
        this.day = t[2];
      })
      console.log(this.year, this.month, this.day);
      fami.adolGirl.push({
        health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'D',
        latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
        latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
      });
    })
    console.log(fami);


  }

  setmoreEventDetails(data, editHF_eventDetails) {
    console.log(data, 'moreEventDetails');
    console.log(editHF_eventDetails, 'editHF_eventDetails');
    // console.log(data.seasonalDiseaseDiscussedList);
    // console.log(data.visitorDetailsList);
    // console.log(this.visitorDetails.visitorInfo);

    console.log(data.villageWiseFamilyList, 'data.villageWiseFamilyList');
    setTimeout(() => {
      console.log(this.eventFamList, 'eventFamList2222');
      this.familyHeadPresentLenChk = [];
      data.villageWiseFamilyList.forEach(x => {
        x.familyList.forEach(t => {
          this.eventFamList.forEach(y => {
            y.forEach(e => {
              e.villageId = x.villageId
              if (e.familyDetailId == t.familyId) {
                e.health_forum_event_family_map_id = t.health_forum_event_family_map_id
              }
            })
            y.filter(z => z.familyDetailId == t.familyId).forEach(m => {
              y.health_forum_event_family_map_id = x.health_forum_event_family_map_id
              m.radioCheck = t.family_head_present;
              this.familyHeadPresentLenChk.push(m);
              console.log(this.familyHeadPresentLenChk, ' this.familyHeadPresentLenChk');

              t.childrenList.forEach(er => {
                m.adolescentGilrChildren.filter(v => v.childDetailId == er.childId).forEach(rr => {
                  rr.isChecked = true;
                  rr.age = er.ageYears + " year " + er.ageMonths + " month " + er.ageDays + " day "
                  rr.health_forum_event_child_map_id = er.health_forum_event_child_map_id
                })
              })
              setTimeout(() => {
                m.adolGirl = []
                m.adolescentGilrChildren.filter(x => x.isChecked).forEach((z) => {
                  var t = [];
                  z.age.split(/[year,month,days]+/).forEach(x => {
                    t.push(x)
                    this.year = t[0];
                    this.month = t[1];
                    this.day = t[2];
                  })
                  console.log(this.year, this.month, this.day);
                  m.adolGirl.push({
                    health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'A',
                    latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
                    latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
                  });
                })
              }, 500);
            })
          })
        })


      })
    }, 1000);

    this.visitorDetails.visitorInfo = [];
    data.visitorDetailsList.forEach(x => {
      this.visitorDetails.visitorInfo.push({
        visitorDesignation: x.visitorDesignation, visitorName: x.visitorName,
        health_forum_event_visitor_map_id: x.health_forum_event_visitor_map_id, active_flag: 'A'
      });
    })

    this.diseaseListID = []
    data.seasonalDiseaseDiscussedList.forEach(x => {
      this.eventDiseaseList.filter(v => v.diseaseId == x.diseaseId).forEach(z => {
        z.isChecked = true;
        this.diseaseListID.push({ health_forum_event_season_diseases_map_id: x.health_forum_event_season_diseases_map_id, diseaseId: z.diseaseId, active_flag: 'A' });
        console.log(this.diseaseListID);

      })
    })
    console.log(this.eventDiseaseList, 'eventDiseaseList');



    this.editStartHour = this.editHF_eventDetails?.startHour;
    this.editStartHour = this.editStartHour.toString();
    this.editStartMin = this.editHF_eventDetails?.startMinute;
    this.editStartMin = this.editStartMin.toString();
    this.editEndHour = this.editHF_eventDetails?.endHour;
    this.editEndHour = this.editEndHour.toString();
    this.editEndMin = this.editHF_eventDetails?.endMinute;
    this.editEndMin = this.editEndMin.toString();

    if (this.editStartHour.length < 2) {
      this.editStartHour = '0' + this.editStartHour;
      // console.log(this.editStartHour, 'this.editStartHour');
    } else {
      this.editStartHour = this.editHF_eventDetails?.startHour
    }

    if (this.editStartMin.length < 2) {
      this.editStartMin = '0' + this.editStartMin;
      // console.log(this.editStartMin, 'this.editStartMin');
    } else {
      this.editStartMin = this.editHF_eventDetails?.startMinute
    }

    if (this.editEndHour.length < 2) {
      this.editEndHour = '0' + this.editEndHour;
      // console.log(this.editEndHour, 'this.editEndHour');
    } else {
      this.editEndHour = this.editHF_eventDetails?.endHour
    }

    if (this.editEndMin.length < 2) {
      this.editEndMin = '0' + this.editEndMin;
      // console.log(this.editEndMin, 'this.editEndMin');
    } else {
      this.editEndMin = this.editHF_eventDetails?.endMinute
    }



    this.createEditHFEventForm = this.fb.group({
      startHour: [this.editStartHour ? this.editStartHour : '', Validators.required],
      startMin: [this.editStartMin ? this.editStartMin : '', Validators.required],
      startMeridiem: [editHF_eventDetails.startAmOrPm ? editHF_eventDetails.startAmOrPm : '', Validators.required],
      endHour: [this.editEndHour ? this.editEndHour : '', Validators.required],
      endMin: [this.editEndMin ? this.editEndMin : '', Validators.required],
      endMeridiem: [editHF_eventDetails.endAmOrPm ? editHF_eventDetails.endAmOrPm : '', Validators.required],
      staffPresent: [data?.wasStaffPresent ? data?.wasStaffPresent : '', Validators.required],
      ssPresent: [data?.wasSsPresent ? data?.wasSsPresent : '', Validators.required],
      eventConduction: [data?.conductedByStaffOrSS ? data?.conductedByStaffOrSS : '', Validators.required],
      lastMonTopic: [data?.recapLastMonthTopic ? data?.recapLastMonthTopic : '', Validators.required],
      thisMonTopic: [data?.discussionOnThisMonthTopic ? data?.discussionOnThisMonthTopic : '', Validators.required],
      seasonalDiscussion: [data?.discussionOnAnySeasonalDisease ? data?.discussionOnAnySeasonalDisease : '', Validators.required]
    });

    this.createEditHFEventForm.markAllAsTouched();


  }

  selectMultipleDisease(e, disease) {
    this.diseaseListID = [];
    console.log(e.target.checked, disease);
    if (e.target.checked == true) {
      disease.isChecked = true;
    } else {
      disease.isChecked = false;
    }

    console.log(this.moreEventDetails);


    if (!this.moreEventDetails) {
      this.eventDiseaseList.forEach(x => {
        if (x.isChecked == true) {
          console.log(x.diseaseId);
          this.diseaseListID.push({ health_forum_event_season_diseases_map_id: 0, diseaseId: x.diseaseId, active_flag: 'A' });
          console.log(this.diseaseListID);
        }
      })
    } else {
      this.eventDiseaseList.forEach(e => {
        if (this.moreEventDetails.seasonalDiseaseDiscussedList.length != 0) {
          if (this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).length == 0) {
            if (e.isChecked == true) {
              console.log(e.diseaseId);
              this.diseaseListID.push({ health_forum_event_season_diseases_map_id: 0, diseaseId: e.diseaseId, active_flag: 'A' });
              console.log(this.diseaseListID);
            }
          } else {
            this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).forEach(r => {
              if (e.isChecked == true) {
                this.diseaseListID.push({ health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id, diseaseId: r.diseaseId, active_flag: 'A' });
              } else {
                this.diseaseListID.push({ health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id, diseaseId: r.diseaseId, active_flag: 'D' });
              }
            })
          }
        } else {
          if (e.isChecked == true) {
            console.log(e.diseaseId);
            this.diseaseListID.push({ health_forum_event_season_diseases_map_id: 0, diseaseId: e.diseaseId, active_flag: 'A' });
            console.log(this.diseaseListID);
          }
        }
      })
    }

    console.log(this.eventDiseaseList);
    console.log(this.diseaseListID);

  }

  selectAdolescent(e, adolescent, fami) {
    console.log(fami);
    if (e.target.checked == true) {
      adolescent.isChecked = true;
      console.log(adolescent);
    } else {
      adolescent.isChecked = false;
      console.log(adolescent);
    }

    console.log(this.eventFamList);
    fami.adolGirl = [];

    fami.adolescentGilrChildren.filter(x => x.isChecked).forEach((z) => {
      var t = [];
      z.age.split(/[year,month,days]+/).forEach(x => {
        t.push(x)
        this.year = t[0];
        this.month = t[1];
        this.day = t[2];
      })
      console.log(this.year, this.month, this.day);
      fami.adolGirl.push({
        health_forum_event_child_map_id: z.health_forum_event_child_map_id, childId: z.childDetailId, active_flag: 'A',
        latestMuac: z.latestMuac, ageYears: this.year.trim(), ageMonths: this.month.trim(), ageDays: this.day.trim(),
        latestMuacRegisterId: z.latestMuacRegisterId, present_status: z.presentInPem
      });
    })
    console.log(fami);

  }

  changefamilyHeadPresent(e, family, vill) {

    // console.log(vill.villageId);
    console.log(family);
    family.radioCheck = e.target.value;
    family.villageId = vill.villageId;
    this.familyHeadPresentLenChk = [];
    this.eventFamList.forEach(x => {
      x.forEach(y => {
        if (y.radioCheck != 'NA')
          this.familyHeadPresentLenChk.push(y);
        console.log(this.familyHeadPresentLenChk);

      })
    })

  }


  viewFilterByFamilyList(e) {
    console.log(e);

    if (e == 'selectedFam') {
      var notSel = []
      this.setFamList.forEach(x => {
        console.log(x);
        notSel.push(x.familyList.filter(x => x.radioCheck != 'NA'))
      })
      this.eventFamList = notSel
      console.log(this.eventFamList);
    } else if (e == 'unselectedFam') {
      var notSel = []
      this.setFamList.forEach(x => {
        console.log(x);

        notSel.push(x.familyList.filter(x => x.radioCheck == 'NA'))

      })
      this.eventFamList = notSel
      console.log(this.eventFamList);
    } else {
      var notSel = []
      this.setFamList.forEach(x => {
        console.log(x);

        notSel.push(x.familyList)

      })
      this.eventFamList = notSel
      console.log(this.eventFamList);
    }


  }

  staffPresentorNot(e) {
    console.log(e);
    if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('SS');
    } else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.showError('Staff or SS both should not be NO');
      this.createEditHFEventForm.controls.eventConduction.setValue('');
      this.createEditHFEventForm.controls.staffPresent.setValue('');
      this.createEditHFEventForm.controls.ssPresent.setValue('');
    }
  }

  ssPresentorNot(e) {
    console.log(e);
    if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.createEditHFEventForm.controls.eventConduction.setValue('STAFF');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('SS');
    } else if (this.createEditHFEventForm.value.staffPresent == 'Y' && this.createEditHFEventForm.value.ssPresent == 'Y') {
      this.createEditHFEventForm.controls.eventConduction.setValue('');
    } else if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.showError('Staff or SS both should not be NO');
      this.createEditHFEventForm.controls.eventConduction.setValue('');
      this.createEditHFEventForm.controls.staffPresent.setValue('');
      this.createEditHFEventForm.controls.ssPresent.setValue('');
    }

  }

  saveEditHFEvent() {
    this.familyListData = [];
    console.log(this.eventFamList);

    var arr = []
    var i = 0
    this.eventFamList.forEach(item => {
      item.forEach(x => {
        arr.push(x)
        if (x.radioCheck != 'NA') {
          if (x.adolescentGilrChildren.length > 0) {
            if (x.adolGirl.length == 0) {
              i++
              if (i == 1) {
                this.showError('Minimum one adolescent selection is required as family head is present');
                return;
              } else {
                return;
              }
            } else {
              this.familyListData.push({
                health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
                presentInPregnantWoman: x.presentInPregnantWoman,
                presentInLactatingMother: x.presentInLactatingMother,
                hasChildPresentInPem: x.hasChildPresentInPem,
                has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                family_head_present: x.radioCheck,
                adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
                active_flag: 'A',
                childrenList: x.adolGirl
              })
            }
          } else {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
              presentInPregnantWoman: x.presentInPregnantWoman,
              presentInLactatingMother: x.presentInLactatingMother,
              hasChildPresentInPem: x.hasChildPresentInPem,
              has2to5yearsOldChildren: x.has2to5yearsoldChildren,
              hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
              family_head_present: x.radioCheck,
              adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
              active_flag: 'A',
              childrenList: x.adolGirl
            })
          }
        } else {
          if (x.health_forum_event_family_map_id != 0) {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id, familyId: x.familyDetailId, villageId: x.villageId,
              presentInPregnantWoman: x.presentInPregnantWoman,
              presentInLactatingMother: x.presentInLactatingMother,
              hasChildPresentInPem: x.hasChildPresentInPem,
              has2to5yearsOldChildren: x.has2to5yearsoldChildren,
              hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
              family_head_present: x.radioCheck,
              adolescent_girl_attended: x.adolGirl.length > 0 ? 'Y' : 'N',
              active_flag: x.health_forum_event_family_map_id == 0 ? 'A' : 'D',
              childrenList: x.adolGirl
            })
          }
        }
      })
    })




    setTimeout(() => {
      var ch = []
      var tt = []
      arr.filter(er => er.radioCheck != "NA").forEach(x => {
        if (x.adolescentGilrChildren.length != 0) {
          if (x.adolGirl.length == 0) {
            ch.push({ isChecked: false })
          } else {
            tt.push(x.adolGirl)
            ch.push({ isChecked: true })
          }
        }
      })


      if (ch.length == tt.length) {
        this.saveEvent()
      }
    }, 200);
  }


  saveEvent() {
    // console.log(this.moreEventDetails, 'pkkaset');

    // this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
    var tt = []
    this.visitorDetails.visitorInfo.forEach(x => {
      if (x.visitorName == "") {
        tt.push();
      } else {
        tt.push(x);
      }

    })

    if (this.moreEventDetails.seasonalDiseaseDiscussedList) {
      if (this.createEditHFEventForm.value.seasonalDiscussion == 'N') {
        this.diseaseListID.forEach(f => {
          this.moreEventDetails.seasonalDiseaseDiscussedList.filter(x => x.diseaseId == f.diseaseId).forEach(z => {
            f.active_flag = 'D';
          })
        })

      }
    }

    console.log(tt);

    let savEditReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumEventId: this.moreEventDetails?.healthForumEventId ? this.moreEventDetails?.healthForumEventId : 0,
      active_flag: 'A',
      healthForumMasterId: this.viewForumList.healthForumMasterId,
      startTimeHour: this.createEditHFEventForm.value.startHour,
      startTimeMinute: this.createEditHFEventForm.value.startMin,
      startTimeAmORPm: this.createEditHFEventForm.value.startMeridiem,
      endTimeHour: this.createEditHFEventForm.value.endHour,
      endTimeMinute: this.createEditHFEventForm.value.endMin,
      endTimeAmOrPm: this.createEditHFEventForm.value.endMeridiem,
      wasStaffPresent: this.createEditHFEventForm.value.staffPresent,
      staffId: this.HForumEventPrerequisite.staffId,
      wasSsPresent: this.createEditHFEventForm.value.ssPresent,
      ssId: this.HForumEventPrerequisite.ssId,
      conductedByStaffOrSS: this.createEditHFEventForm.value.eventConduction,
      recapLastMonthTopic: this.createEditHFEventForm.value.lastMonTopic,
      discussionOnThisMonthTopic: this.createEditHFEventForm.value.thisMonTopic,
      discussionOnAnySeasonalDisease: this.createEditHFEventForm.value.seasonalDiscussion,
      seasonalDiseaseDiscussedList: this.diseaseListID,
      visitorDetailsList: tt.length == 0 ? [] : this.visitorDetails.visitorInfo,
      familyList: this.familyListData

    }

    if (savEditReq.familyList.filter(x => x.active_flag == 'A').length == 0) {
      this.showError('Please select at least one family');
      return;
    }




    console.log(savEditReq, 'savEditReq');
    this.healthForumService.saveOrUpdateHealthForumEvent(savEditReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.editHFEventModalDismiss();
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })
  }


  saveEditHFEventDisabled() {
    // console.log(this.familyHeadPresentLenChk);

    let flag = true;
    if (this.familyHeadPresentLenChk.length < 1) {
      flag = false;
    }

    if (!this.createEditHFEventForm.value.startHour) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.startMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.startMeridiem) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endHour) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMeridiem) {
      flag = false;
    } else if (this.createEditHFEventForm.value.staffPresent != 'Y' && this.createEditHFEventForm.value.ssPresent != 'Y') {
      flag = false;
    } else if (!this.createEditHFEventForm.value.eventConduction) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.lastMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.thisMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.seasonalDiscussion) {
      flag = false;
    } else if (this.createEditHFEventForm.value.seasonalDiscussion == 'Y') {
      if (this.diseaseListID.filter(x => x.active_flag == 'A').length < 1) {
        flag = false;
      }
    }



    return flag;
  }

  get e() {
    return this.createEditHFEventForm.controls;
  }

  changeseasonalDiscussion() {
    this.diseaseListID = [];
    var arr = []
    if (this.editHF_eventDetails?.healthForumEventId) {
      console.log('id');
      this.moreEventDetails.seasonalDiseaseDiscussedList.forEach(a => {
        this.eventDiseaseList.filter(y => y.diseaseId == a.diseaseId).forEach(z => {
          arr.push({health_forum_event_season_diseases_map_id: a.health_forum_event_season_diseases_map_id, diseaseId: z.diseaseId, active_flag: 'A' });
          console.log(z);
        })

      })
      // this.eventDiseaseList.forEach(x => {
      //   console.log(x);
      //   console.log(this.moreEventDetails.seasonalDiseaseDiscussedList);

      //   console.log(this.moreEventDetails.seasonalDiseaseDiscussedList.filter(y => y.diseaseId == x.diseaseId));

      //   // .forEach(z =>{
      //   // arr.push(z);
      //   // console.log(z);
      //   // })
      // })
    }
    console.log(this.eventDiseaseList);
    this.eventDiseaseList.forEach(x => {
      if (x.isChecked == true) {
        console.log(x.isChecked = false);
      }
    })
    console.log(this.eventDiseaseList);
    setTimeout(() => {
      console.log(arr);

      this.diseaseListID = arr;
      console.log(this.diseaseListID);
    }, 500);

  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

  deleteHFEvent(event, i) {

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?')
      .then(() => this.delete_event(event, i)
      )
      .catch(() => '');
    console.log(event);
  }

  delete_event(event, i) {
    let delReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumEventId: event.healthForumEventId,
      active_flag: 'D',
      healthForumMasterId: this.viewForumList.healthForumMasterId,
      startTimeHour: event.startHour,
      startTimeMinute: event.startMinute,
      startTimeAmORPm: event.startAmOrPm,
      endTimeHour: event.endHour,
      endTimeMinute: event.endMinute,
      endTimeAmOrPm: event.endAmOrPm,
      // wasStaffPresent: event.staffPresent,
      // staffId: this.HForumEventPrerequisite.staffId,
      // wasSsPresent: this.createEditHFEventForm.value.ssPresent,
      // ssId: this.HForumEventPrerequisite.ssId,
      // conductedByStaffOrSS: this.createEditHFEventForm.value.eventConduction,
      // recapLastMonthTopic: this.createEditHFEventForm.value.lastMonTopic,
      // discussionOnThisMonthTopic: this.createEditHFEventForm.value.thisMonTopic,
      // discussionOnAnySeasonalDisease: this.createEditHFEventForm.value.seasonalDiscussion,
      // seasonalDiseaseDiscussedList: event.seasonalDiseaseDiscussedList,
      // visitorDetailsList: tt.length == 0 ? [] : this.visitorDetails.visitorInfo,
      // familyList: this.familyListData

    }

    console.log(delReq, 'delReq');
    this.healthForumService.saveOrUpdateHealthForumEvent(delReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.viewEventList.splice(i, 1);
        // this.editHFEventModalDismiss();
        // this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    })
  }

  rescheduleHealthForum(rescheduleHF, health) {
    this.rescheduleData = health;
    console.log(this.rescheduleData);
    if (this.rescheduleData.eventList.length < 2) {
      this.setDate = moment().format("YYYY-MM-DD");
      this.modalContent = '';
      this.rescheduleHFModal = this.modalService.open(rescheduleHF, {
        windowClass: 'rescheduleHF',
      });
      this.rescheduleHFForms();
    } else {
      this.showError('HF cannot be rescheduled');
      return;
    }

  }

  rescheduleHFModalDismiss() {
    this.rescheduleHFModal.close();
  }

  rescheduleHFForms() {
    this.rescheduleHFForm = this.fb.group({
      date: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  get r() {
    return this.rescheduleHFForm.controls;
  }

  rescheduleSave() {
    let flag = true;
    if (!this.rescheduleHFForm.value.date) {
      flag = false;
    } else if (!this.rescheduleHFForm.value.comment) {
      flag = false;
    }

    return flag;

  }

  saveRescheduled() {
    console.log(this.rescheduleData.scheduleDetails.time);
    var text = this.rescheduleData.scheduleDetails.time;
    var tt = [];
    text.trim().replace(" ", ":").trim().split(":").forEach(e => {
      if (e.length < 2) {
        tt.push("0" + e);
      } else {
        tt.push(e);
      }
      console.log(tt);

    })
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: this.rescheduleData.healthForumMasterId,
      date: this.rescheduleHFForm.value.date,
      scheduleStartHour: tt[0],
      scheduleStartMinute: tt[1],
      amOrPm: tt[2],
      comment: this.rescheduleHFForm.value.comment
    };

    this.healthForumService.rescheduleHealthForum(req).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.rescheduleHFModal.close();
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }

    });

  }

  approveARescheduleHealthForum(health) {
    console.log(health);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO, healthForumMasterId: health.healthForumMasterId
    }

    this.healthForumService.approveARescheduleHealthForum(req).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
      } else {
        this.showError(res.message);
      }

    });
  }


}










