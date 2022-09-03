import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsTrainingService } from './ss-training.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';

@Component({
  selector: 'app-ss-training',
  templateUrl: './ss-training.component.html',
  styleUrls: ['./ss-training.component.css']
})
export class SsTrainingComponent implements OnInit {
  viewSSTrainingEventForm: FormGroup;
  createSSTrainingEventForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  regionBranchHide: boolean;
  modalContent: any;
  modalReference: any;
  setFromDate: any;
  setToDate: any;
  durationValue: any;
  regionName: any;
  regionID: any;
  upperRoleBranchId: any;
  lowerRoleBranchId: any;
  ssEventList: Array<any> = [];
  eventSSList: Array<any> = [];
  ssList: Array<any> = [];
  AllSSList: Array<any> = [];
  ssTrainingType: Array<any> = [];
  ssTrainingTopic: Array<any> = [];
  ssTrainingDataPushPop = [];
  newCheckedArray: Array<any> = [];
  checkedData: any;
  allBranchID: Array<any> = [];
  indexWiseSSLIST: any;
  ssIndex: any;
  checked: any;
  checkedSS: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  afterSaveBranchId: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private sidebarService: SidebarService, private toaster: ToastrService,
    private httpService: HttpService, private ssTrainingService: SsTrainingService, private modalService: NgbModal, config: NgbModalConfig,
    private validationService: ValidationService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.createForm();

    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        this.afterSaveBranchId = res.branchId
        this.branchList = res.branchLIST;

        this.allBranchID.push(this.lowerRoleBranchId);
        console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');

        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: this.lowerRoleBranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.lowerRoleBranchId };

        this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
          this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
          console.log(this.ssEventList);
        });
      }
    });
  }

  createForm() {
    this.viewSSTrainingEventForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
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
      console.log(this.branchList);
    });

    this.viewSSTrainingEventForm.controls.branch.setValue('');
    this.ssEventList = [];
    if (this.viewSSTrainingEventForm.value.region == '') {
      this.viewSSTrainingEventForm.controls.branch.setValue('');
      this.ssEventList = [];
      this.branchList = [];
    }
  }

  changeBranch(branchId) {
    this.upperRoleBranchId = branchId;
    this.afterSaveBranchId = branchId

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };

    this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe((res) => {
      this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
      console.log(this.ssEventList);
    });
  }

  viewParticipantsDetails(detailsOfParticipants, ssList) {
    this.eventSSList = ssList;
    console.log(this.eventSSList, 'ssList');

    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfParticipants, {
      windowClass: 'detailsOfParticipants',
    });
  }

  detailsOfParticipantsModalDismiss() {
    this.modalReference?.close();
  }

  createSSTrainingEvent(SSTraining) {
    console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
    console.log(this.upperRoleBranchId, 'upperRoleBranchId');
    console.log(this.regionID, 'regionID');
    console.log(this.regionName, 'this.regionName');

    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
    this.createSSTrainingEventForm.controls['duration'].disable();
    this.createSSTrainingEventForm.controls['fromDate'].disable();
    this.createSSTrainingEventForm.controls['toDate'].disable();
    this.createSSTrainingEventForm.controls['ssbranch'].disable();
    this.createSSTrainingEventForm.controls['participantType'].disable();

    let req = { dataAccessDTO: this.httpService.dataAccessDTO };

    this.ssTrainingService.ssTrainingTypeAndTopic(req).subscribe((res) => {
      this.ssTrainingType = res.responseObject.ssTrainingType;
      this.ssTrainingTopic = res.responseObject.ssTrainingTopic;
      console.log(this.ssTrainingType, ' this.ssTrainingType');
      console.log(this.ssTrainingTopic, ' this.ssTrainingTopic');
    });

  }

  ssTrainingFormModal() {
    this.createSSTrainingEventForm = this.fb.group({
      trainingType: ['', Validators.required],
      duration: [''],
      fromDate: ['', Validators.required],
      toDate: [''],
      trainername: [''],
      trainerdesignation: [''],
      trainingtopic: ['', Validators.required],
      ssbranch: [this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId, Validators.required],
      participantType: ['fresh', Validators.required]
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
      e = new Date(e.replace(/-/g, "/"));
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
      this.changeparticipantType('fresh');
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
    } else if (e == 2) {
      this.createSSTrainingEventForm.controls.duration.setValue(1);
      this.createSSTrainingEventForm.value.duration = 1;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh');
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
    } else if (e == 3) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh');
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
    } else if (e == 4) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh')
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
    } else {
      this.ssList = [];
      this.createSSTrainingEventForm.controls['ssbranch'].disable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
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

  changeparticipantType(participantType) {
    let ssListObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.allBranchID,
      trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType
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

  filterSSList(participantType, e) {
    this.ssList = this.AllSSList;
    console.log(this.ssList, 'this.ssList');
    console.log(this.upperRoleBranchId, 'this.upperRoleBranchId ');
    console.log(this.lowerRoleBranchId, 'this.lowerRoleBranchId');


    this.ssList = this.ssList.filter((item) => item.branch_id == e);
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
    this.filterSSList('fresh', e);
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    if (this.checked) {
      this.selectSSForTraining(this.indexWiseSSLIST, this.ssIndex, this.checked);
    }
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
    console.log(check?.length);
    if (check?.length == 0) {
      flag = false;
    }
    return flag;
  }

  saveSSTrainingForm() {
    this.ssTrainingDataPushPop = [];
    this.checkedSS = this.AllSSList.filter(item => item.isChecked == true);
    this.checkedSS.forEach((item => {
      this.checkedSS = item.swasthya_sahayika_id;
      console.log(this.checkedSS, 'checkedSS');
      this.ssTrainingDataPushPop.push(this.checkedSS);
      console.log(this.ssTrainingDataPushPop);
    }));

    let ssSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: 0,
      active_flag: 'UA',
      ss_training_event_type: this.createSSTrainingEventForm.value.trainingType,
      ss_training_event_topic_master_id: this.createSSTrainingEventForm.value.trainingtopic ?
        this.createSSTrainingEventForm.value.trainingtopic : 0,
      ss_training_event_start_date: this.createSSTrainingEventForm.value.fromDate,
      ss_training_event_end_date: this.setToDate,
      trainer_name: this.validationService.camelize(this.createSSTrainingEventForm.value.trainername.trim()),
      trainer_designation: this.validationService.camelize(this.createSSTrainingEventForm.value.trainerdesignation.trim()),
      branchId: this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId,
      ssList: this.ssTrainingDataPushPop
    }

    console.log(ssSaveObj, 'ssSaveObj');

    // this.ssTrainingService.createUpdateDeleteSSTraining(ssSaveObj).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.status == true) {
    //     this.showSuccess(res.message);
    //     this.ssTrainingModalDismiss();
    //     this.changeBranch(this.afterSaveBranchId);
    //   } else {
    //     this.showError(res.message);
    //   }

    // })

  }

  ssTrainingModalDismiss() {
    // console.log(this.villageId);

    // if (this.villageId) {
    //   this.editVillData = [];
    //   this.villageId = 0;
    //   this.modalReference?.close();
    // }
    // else {
    this.modalReference?.close();
    this.ssList = [];
    this.allBranchID = [];
    this.ssTrainingDataPushPop = [];
    // this.branchID = '';
    // this.allBranchID = [];
    // console.log(this.AllSSList, '   this.AllSSList');
    // console.log(this.ssList, ' this.ssList', this.branchID, 'this.branchID');


    // }
  }

  editSSTrainingEvents(SSTraining) {
    console.log('editSSTrainingEvents');
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining',
    });
    this.ssTrainingFormModal();
  }

  deleteSSTrainingEvents() {
    console.log('deleteSSTrainingEvents');
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

  restrictTypeOfDate() { return false; }
}
