import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
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
  healthForumForm: FormGroup;
  createHFForm: FormGroup;
  editHFEventForm: FormGroup;
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
  viewEventList: Array<any> = [];
  viewForumList: any;
  familyDetails: Array<any> = [];
  searchFullscreen: boolean;
  registerSearch: any;
  dropdownSettings: IDropdownSettings = {};
  areaList: Array<any> = [];
  hourList: Array<any> = [];
  minuteList: Array<any> = [];
  minDate: any;
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
  statusList: Array<any> = [];
  adolescentGilrChildren: Array<any> = [];

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private healthForumService: HealthForumService, private modalService: NgbModal, config: NgbModalConfig,
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
            this.villagesOfBranch = res.responseObject;
          }
        });

        this.changeBranch(this.lowerRankbranchId);
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;

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
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete forum ?')
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

  editHFEvents(editHFEvent, event) {
    console.log(event, 'event');
    this.hourList = [];
    this.minuteList = [];

    this.editHFEventForms();

    this.modalContent = '';
    this.editHFEventModal = this.modalService.open(editHFEvent, {
      windowClass: 'editHFEvent',
    });


    this.hourLists();
    this.minuteLists();

    this.visitorDetails.visitorInfo.push({
      name: '',
      designation: ''
    });

    let HFPrerequisite = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId || this.lowerRankbranchId,
      healthForumMasterId: this.viewForumList.healthForumMasterId
    }

    this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe((res: any) => {
      console.log(res.responseObject);
      this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
      this.eventVillList = res.responseObject.villageList;
      console.log(this.eventDiseaseList, 'eventDiseaseList');
      console.log(this.eventVillList, 'eventVillList');
      this.eventVillList.forEach(x => {
        this.eventVillListID.push(x.villageId);
        console.log(this.eventVillListID, 'eventVillListID');
      })

      let famReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        villageId: [80],
        healthForumMasterId: 25,
      }

      console.log(famReq);
      this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe((res: any) => {
        this.eventFamList = res.responseObject;
        console.log(this.eventFamList, 'eventFamList');
        this.eventFamList.forEach(x => {
          x.familyList = x.familyList?.map(({
            setStatus = '',
            ...rest
          }) => ({
            setStatus,
            ...rest
          }));
          this.setData(x.familyList);
          // x.familyList.forEach(y => {
          //   console.log(y.has2to5yearsoldChildren);
          // });



        })
      })
    });

  }

  setData(familyList) {
    console.log(familyList);

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

  SaveFamilyRecord(fami, famRecord) {
    console.log(fami);
    this.adolescentGilrChildren = []

    this.adolescentGilrChildren.push({ ChildName: 'Ruhi', Age: '5 yrs 2mon 4 day' },
      { ChildName: 'Ruhi2', Age: '5 yrs 2mon 4 day' }, { ChildName: 'Ruhi3', Age: '5 yrs 2mon 4 day' },
      { ChildName: 'Ruhi4', Age: '5 yrs 2mon 4 day' }, { ChildName: 'Ruhi5', Age: '5 yrs 2mon 4 day' },
      { ChildName: 'Ruhi6', Age: '5 yrs 2mon 4 day' }, { ChildName: 'Ruhi7', Age: '5 yrs 2mon 4 day' })

    console.log(this.adolescentGilrChildren);


    this.modalContent = '';
    this.saveFamRecordModal = this.modalService.open(famRecord, {
      windowClass: 'famRecord',
    });

  }

  saveFamRecordModalDismiss() {
    this.saveFamRecordModal.close();
  }

  addMoreVisitor() {
    this.visitorDetails.visitorInfo.push({
      name: '',
      designation: ''
    });

  }

  removeNewVisitor(i) {
    this.visitorDetails.visitorInfo.splice(i, 1);
  }


  editHFEventModalDismiss() {
    this.editHFEventModal.close();
    this.visitorDetails.visitorInfo = []
  }

  editHFEventForms() {
    this.editHFEventForm = this.fb.group({
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
      seasonalDiscussion: ['', Validators.required],
      seasonalDisease: ['', Validators.required],
      gram: ['', Validators.required],
    });
  }

  get e() {
    return this.editHFEventForm.controls;
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }


}




