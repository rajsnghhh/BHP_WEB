import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsTrainingService } from './ss-training.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ss-training',
  templateUrl: './ss-training.component.html',
  styleUrls: ['./ss-training.component.css']
})
export class SsTrainingComponent implements OnInit {
  viewSSTrainingEventForm: UntypedFormGroup;
  createSSTrainingEventForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  regionBranchHide: boolean;
  modalContent: any;
  modalReference: any;
  setFromDate: any;
  setToDate: any;
  durationValue: any;
  regionID: any;
  regionName: any;
  branchName: any;
  upperRoleBranchId: any;
  lowerRoleBranchId: any;
  ssEventList: Array<any> = [];
  eventSSList: Array<any> = [];
  ssList: Array<any> = [];
  AllSSList: Array<any> = [];
  ssTrainingType: Array<any> = [];
  ssTrainingTopic: Array<any> = [];
  ssTrainingDataPushPop = [];
  allBranchID: Array<any> = [];
  indexWiseSSLIST: any;
  ssIndex: any;
  checked: any;
  checkedSS: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  SSTrainingEditData: any;
  staffList: Array<any> = [];
  staffID: any;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  approveMode: boolean;
  searchFullscreen: boolean;
  attendanceImage: Array<any> = [];
  trainingEventID: any;
  loader: boolean = false;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient, private sidebarService: SidebarService, private toaster: ToastrService,
    private httpService: HttpService, private ssTrainingService: SsTrainingService, private modalService: NgbModal, config: NgbModalConfig,
    private validationService: ValidationService, private confirmationDialogService: ConfirmationDialogService, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.createForm();

    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;

        this.regionBranchHide = res.regionBranchHide;

      } else {
        this.lowerRoleBranchId = res.branchId;
        this.branchList = res.branchLIST;
        this.branchName = res.branchName;
        console.log(this.branchName, 'this.branchName');

        this.allBranchID.push(this.lowerRoleBranchId);
        console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');

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
            this.loader = true;
          }
        });

        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/ss-training']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    this.approveMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList
      .find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;
  }

  createForm() {
    this.viewSSTrainingEventForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      filterStartDate: [''],
      filterEndDate: [''],
      filterTraining: ['']
    });
    this.typeAndTopicTrainingList();
  }

  get l() {
    return this.viewSSTrainingEventForm.controls;
  }

  changeRegion(regionId) {
    this.regionID = regionId; console.log(this.regionID);

    this.regionName = this.regionList.find((reg) => reg.regionMasterId == this.regionID)?.regionName;
    console.log(this.regionName, 'this.regionName');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: this.regionID };

    this.ssTrainingService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      this.branchList.forEach((item) => {
        this.allBranchID.push(item.branchId)
        console.log(this.allBranchID);
      });
    });

    this.viewSSTrainingEventForm.controls.branch.setValue('');
    this.viewSSTrainingEventForm.controls.filterStartDate.setValue('');
    this.viewSSTrainingEventForm.controls.filterEndDate.setValue('');
    this.viewSSTrainingEventForm.controls.filterTraining.setValue('');
    this.ssEventList = [];
    if (this.viewSSTrainingEventForm.value.region == '') {
      this.viewSSTrainingEventForm.controls.branch.setValue('');
      this.ssEventList = [];
      this.branchList = [];
    }
  }

  changeBranch(branchId) {
    this.upperRoleBranchId = branchId;
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };

    this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
      this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
      console.log(this.ssEventList, 'withoutfilterdata');
      if (this.viewSSTrainingEventForm.value.filterTraining) {
        this.ssEventList = this.ssEventList.filter((item) => item.training_type_master_id == this.trainingEventID)
        console.log(this.ssEventList, 'filterdata');
      }

      if (this.viewSSTrainingEventForm.value.filterStartDate && this.viewSSTrainingEventForm.value.filterEndDate) {
        this.ssEventList = this.ssEventList.filter(item => item.ss_training_event_start_date >= this.viewSSTrainingEventForm.value.filterStartDate);
        console.log(this.ssEventList, 'ssEventListss_training_event_start_date');
        this.ssEventList = this.ssEventList.filter(item => item.ss_training_event_end_date <= this.viewSSTrainingEventForm.value.filterEndDate);
        console.log(this.ssEventList, 'ssEventListss_training_event_end_date');
      }
    });

    this.branchName = this.branchList.find((item) => item.branchId == branchId)?.branchName
    console.log(this.branchName, ' this.branchName');
  }

  filterListByTrainingType(trainingEventId) {
    this.trainingEventID = trainingEventId;
    this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
  }

  filterDateWiseSSTrainingList() {
    console.log(this.viewSSTrainingEventForm.value.filterStartDate, 'filterStartDate');
    console.log(this.viewSSTrainingEventForm.value.filterEndDate, 'filterEndDate');
    this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
  }

  viewParticipantsDetails(detailsOfParticipants, event) {
    this.eventSSList = event.ssList;
    console.log(this.eventSSList, 'ssList', event);

    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfParticipants, {
      windowClass: 'detailsOfParticipants',
    });

    let imageReq = { dataAccessDTO: this.httpService.dataAccessDTO, training_event_master_id: event.training_event_master_id };
    console.log(imageReq, 'imageReq');

    this.ssTrainingService.imageOfAEvent(imageReq).subscribe((res) => {
      this.attendanceImage = res.responseObject;
      console.log(this.attendanceImage, 'attendanceImage');
    });
  }

  detailsOfParticipantsModalDismiss() {
    this.modalReference?.close();
  }

  typeAndTopicTrainingList() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO };

    this.ssTrainingService.ssTrainingTypeAndTopic(req).subscribe((res) => {
      this.ssTrainingType = res.responseObject?.ssTrainingType;
      this.ssTrainingTopic = res.responseObject?.ssTrainingTopic;
      console.log(this.ssTrainingType, ' this.ssTrainingType');
      console.log(this.ssTrainingTopic, ' this.ssTrainingTopic');
    });
  }

  createSSTrainingEvents(SSTraining) {
    console.log(this.SSTrainingEditData, 'SSTrainingEditData');
    console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
    console.log(this.upperRoleBranchId, 'upperRoleBranchId');
    console.log(this.regionID, 'regionID');
    console.log(this.regionName, 'this.regionName');
    // setTimeout(() => {
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    // }, 1000);
    this.ssTrainingFormModal();
    this.createSSTrainingEventForm.controls['duration'].disable();
    if (!this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
      this.createSSTrainingEventForm.controls['toDate'].disable();
      this.createSSTrainingEventForm.controls['ssbranch'].disable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].disable();
    }

  }

  editSSTrainingEvents(event, SSTraining) {
    this.SSTrainingEditData = event;
    console.log(this.SSTrainingEditData, 'SSTrainingEditData');
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);

    if (event.ss_training_event_start_date > today) {
      this.createSSTrainingEvents(SSTraining);
    } else {
      this.ssTrainingModalDismiss();
      this.showError('Event is not available for edit');
      return;
    }

  }

  ssTrainingFormModal() {
    var data = this.SSTrainingEditData;
    console.log(data, 'data');

    this.createSSTrainingEventForm = this.fb.group({
      trainingType: [data?.training_type_master_id ? data?.training_type_master_id : '', Validators.required],
      duration: [''],
      fromDate: ['', Validators.required],
      toDate: [''],
      trainername: [data?.trainer_name ? data?.trainer_name : ''],
      trainerdesignation: [data?.trainer_designation ? data?.trainer_designation : ''],
      trainingtopic: ['', Validators.required],
      ssbranch: [this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId, Validators.required],
      participantType: ['fresh', Validators.required],
      staff: ['']
    });
    this.createSSTrainingEventForm.markAllAsTouched();

    if (data) {
      this.changeTrainingType(data?.training_type_master_id);
      this.createSSTrainingEventForm.controls['toDate'].disable();
      this.createSSTrainingEventForm.controls.fromDate.setValue(data?.ss_training_event_start_date);
      this.expectToDate(data?.ss_training_event_start_date);
      this.createSSTrainingEventForm.controls.trainingtopic.setValue(data?.ss_training_event_topic_master_id);
    }
    this.branchWiseStaffList();
  }

  branchWiseStaffList() {

    let hcoreq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.createSSTrainingEventForm.value.ssbranch
    }
    console.log(hcoreq, 'hcoreq');

    this.ssTrainingService.staffListOfBranch(hcoreq).subscribe((res: any) => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    });
  }

  get t() {
    return this.createSSTrainingEventForm.controls;
  }

  getMinDate() {
    let today = new Date().toISOString().slice(0, 10);
    this.setFromDate = moment(today).add(1, "days").format("YYYY-MM-DD");
  }

  expectToDate(e) {
    console.log(this.durationValue, 'this.durationValue');
    var mydate = new Date(e);
    if (mydate.getDay() == 0) {
      this.showError('Sunday not allowed');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
      return;
    }

    if (this.createSSTrainingEventForm.value.trainingType == 2) {
      this.setToDate = this.createSSTrainingEventForm.value.fromDate;
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      this.createSSTrainingEventForm.value.toDate = this.setToDate;
      console.log(this.setToDate, 'ifcondition');
    } else {
      e = new Date(e?.replace(/-/g, "/"));
      var endDate: any, noOfDaysToAdd = (this.durationValue - 1), count = 0;
      while (count < noOfDaysToAdd) {
        endDate = new Date(e.setDate(e.getDate() + 1));
        if (endDate.getDay() != 0) {
          count++;
        }
      }
      this.setToDate = moment(endDate).format("YYYY-MM-DD");
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      this.createSSTrainingEventForm.value.toDate = this.setToDate;
      console.log(this.setToDate, 'elsecondition');
    }
  }

  changeTrainingType(e) {

    this.getMinDate();
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    this.createSSTrainingEventForm.controls.trainingtopic.setValue('');

    if (e == 1) {
      this.createSSTrainingEventForm.controls.duration.setValue(6);
      this.createSSTrainingEventForm.value.duration = 6;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 2) {
      this.createSSTrainingEventForm.controls.duration.setValue(1);
      this.createSSTrainingEventForm.value.duration = 1;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 3) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 4) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID)
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else {
      this.ssList = [];
      this.createSSTrainingEventForm.controls['ssbranch'].disable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].disable();
    }

    console.log(this.createSSTrainingEventForm.value.duration, 'formdurationvalue');
    console.log(this.durationValue, 'vardurationvalue');
    this.createSSTrainingEventForm.controls.fromDate.setValue('');
    this.createSSTrainingEventForm.controls.toDate.setValue('');
    if (this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].enable();
    } else {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
      this.createSSTrainingEventForm.controls.duration.setValue('');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
    }

  }

  changeparticipantType(participantType, staffID) {
    console.log(participantType);
    console.log(this.allBranchID, 'this.allBranchIDthis.allBranchID');

    let ssListObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.allBranchID,
      trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType,
      training_event_master_id: this.SSTrainingEditData?.training_event_master_id ? this.SSTrainingEditData?.training_event_master_id : 0,
    }

    this.ssTrainingService.getSSList(ssListObj).subscribe((res: any) => {
      this.AllSSList = res.responseObject;
      this.AllSSList = this.AllSSList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      this.ssList = this.AllSSList;
      console.log(this.ssList, 'this.AllSSList');

      if (this.SSTrainingEditData) {
        this.ssList?.forEach((item) => {
          if (this.SSTrainingEditData?.ssList?.find(it => it.swasthya_sahayika_id == item.swasthya_sahayika_id)) {
            item.isChecked = true
          }
        });
      }

      console.log(this.ssList, 'this.ssList');
      console.log(this.lowerRoleBranchId, "lowerRoleBranchId");
      console.log(this.upperRoleBranchId, "upperRoleBranchId");


      this.ssList = this.ssList?.filter((item) => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
      console.log(this.ssList, 'this.specificSSList');

      if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
        if (participantType == 'fresh') {
          this.ssList = this.ssList?.filter((item) => item.status == 'fresh');
          console.log(this.ssList, ' freshSSList');
        } else if (participantType == 'absent') {
          this.ssList = this.ssList?.filter((item) => item.status != 'fresh');
          console.log(this.ssList, 'absentSSList');
        }
        else {
          this.ssList = [];
        }
      }

    });

  }

  filterSSList(participantType) {
    this.createSSTrainingEventForm.controls.staff.setValue('');
    this.ssList = this.AllSSList;
    console.log(this.ssList, 'this.ssList');
    console.log(this.upperRoleBranchId, 'this.upperRoleBranchId ');
    console.log(this.lowerRoleBranchId, 'this.lowerRoleBranchId');


    this.ssList = this.ssList.filter((item) => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
    console.log(this.ssList, 'this.specificSSList');

    if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
      if (participantType == 'fresh') {
        this.ssList = this.ssList.filter((item) => item.status == 'fresh');
        console.log(this.ssList, ' freshSSList');
      } else if (participantType == 'absent') {
        this.ssList = this.ssList.filter((item) => item.status != 'fresh');
        console.log(this.ssList, 'absentSSList');
      }
      else {
        this.ssList = [];
      }

    }
  }

  changessbranch(e) {
    if (!this.lowerRoleBranchId) {
      this.upperRoleBranchId = e;
    } else {
      this.lowerRoleBranchId = e;
    }
    this.filterSSList('fresh');
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    this.createSSTrainingEventForm.controls.staff.setValue('');
    if (this.checked) {
      this.selectSSForTraining(this.indexWiseSSLIST, this.ssIndex, this.checked);
    }

    this.branchWiseStaffList();
  }

  selectSSForTraining(SSLIST, index, e) {
    this.indexWiseSSLIST = SSLIST;
    console.log(this.indexWiseSSLIST);

    this.ssIndex = index;
    this.checked = e;

    if (this.checked == true) {
      this.AllSSList.find(list => list.swasthya_sahayika_id == this.indexWiseSSLIST?.swasthya_sahayika_id).isChecked = true;
      console.log(this.AllSSList, 'ALLSSLIST');
    } else {
      this.AllSSList.find(list => list.swasthya_sahayika_id == this.indexWiseSSLIST?.swasthya_sahayika_id).isChecked = false;
      console.log(this.AllSSList, 'ALLSSLIST');
    }

  }

  disabledSaveTrainingForm() {
    let flag = true;
    if (!this.createSSTrainingEventForm.value.trainingType || !this.createSSTrainingEventForm.value.fromDate) {
      flag = false;
    }
    if (this.createSSTrainingEventForm.value.trainingType == 3) {
      if (!this.createSSTrainingEventForm.value.trainingtopic) {
        flag = false;
      }
    }

    var check = [];
    check = this.AllSSList?.filter(item => item.isChecked == true);
    if (check?.length == 0) {
      flag = false;
    }
    return flag;
  }

  saveSSTrainingForm() {

    this.ssTrainingDataPushPop = [];
    this.checkedSS = this.AllSSList?.filter(item => item.isChecked == true);
    this.checkedSS.forEach((item => {
      this.checkedSS = item.swasthya_sahayika_id;
      console.log(this.checkedSS, 'checkedSS');
      this.ssTrainingDataPushPop.push(this.checkedSS);
      console.log(this.ssTrainingDataPushPop);
    }));

    var ssSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: this.SSTrainingEditData?.training_event_master_id ? this.SSTrainingEditData?.training_event_master_id : 0,
      active_flag: this.SSTrainingEditData ? 'A' : 'UA',
      ss_training_event_type: this.createSSTrainingEventForm?.value.trainingType,
      ss_training_event_topic_master_id: this.createSSTrainingEventForm?.value.trainingtopic ?
        this.createSSTrainingEventForm?.value.trainingtopic : 0,
      ss_training_event_start_date: this.createSSTrainingEventForm.value.fromDate,
      ss_training_event_end_date: this.setToDate,
      trainer_name: this.validationService.camelize(this.createSSTrainingEventForm.value.trainername.trim()),
      trainer_designation: this.validationService.camelize(this.createSSTrainingEventForm.value.trainerdesignation.trim()),
      branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
      ssList: this.ssTrainingDataPushPop
    }

    console.log(ssSaveObj, 'ssSaveObj');

    this.ssTrainingService.createUpdateDeleteSSTraining(ssSaveObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssTrainingModalDismiss();
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }

    })

  }

  ssTrainingModalDismiss() {
    console.log(this.SSTrainingEditData?.training_event_master_id, 'training_event_master_id');
    var ID = this.SSTrainingEditData?.training_event_master_id;

    if (ID) {
      this.SSTrainingEditData = [];
      ID = 0;
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
      this.ssList = [];
      this.ssTrainingDataPushPop = [];
    }
  }

  deleteSSTrainingEvents(event) {
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);

    if ((event.ss_training_event_start_date > today) && event.status == 'Unapproved') {
      this.confirmationDialogService.confirm('', 'Are you sure you want to delete ss training record ?')
        .then(() => this.delete(event)
        )
        .catch(() => '');
    } else {
      this.showError('Event is not available for delete');
      return;
    }
  }

  delete(event) {
    var ssDeleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: event?.training_event_master_id,
      active_flag: 'D',
      ss_training_event_type: event?.training_type_master_id,
      ss_training_event_topic_master_id: event?.ss_training_event_topic_master_id,
      ss_training_event_start_date: event?.ss_training_event_start_date,
      ss_training_event_end_date: event?.ss_training_event_end_date,
      trainer_name: event?.trainer_name,
      trainer_designation: event?.trainer_designation,
      branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
      ssList: event?.ssList
    }

    console.log(ssDeleteObj);

    this.ssTrainingService.createUpdateDeleteSSTraining(ssDeleteObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }

    })

  }

  approveSSTrainingEvents(event) {
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);

    if ((event.ss_training_event_start_date >= today) && event.status == 'Unapproved') {
      this.confirmationDialogService.confirm('', 'Are you sure you want to approve ss training record ?')
        .then(() => this.approveSS(event)
        )
        .catch(() => '');
    } else {
      this.showError('Event is not available for approve');
      return;
    }

  }

  approveSS(event) {
    var ssTrainingObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: event.training_event_master_id
    }

    console.log(ssTrainingObj);
    this.ssTrainingService.approveSSTraining(ssTrainingObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }

    });
  }

  changestaff(staffid) {
    this.staffID = staffid;
    this.changeparticipantTypeBySSName(this.staffID)
  }

  changeparticipantTypeBySSName(staffID) {
    this.ssList = this.AllSSList;
    if (this.createSSTrainingEventForm.value.participantType == 'fresh') {
      this.ssList = this.ssList.filter(v => v.status == 'fresh')
    } else {
      this.ssList = this.ssList.filter(v => v.status != 'fresh')
    }

    if (staffID == 'viewall') {
      this.ssList;
    } else if (staffID == 'nouser') {
      this.ssList = this.ssList.filter(v => v.user_id == null);
    } else {
      this.ssList = this.ssList.filter(v => v.user_id == staffID);
    }
  }

  showSuccess(message) {
    this.toaster.success(message, 'SS Training Event', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'SS Training Event', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() { return false }
}
