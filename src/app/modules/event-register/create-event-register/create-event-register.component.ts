import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventRegisterService } from '../event-register.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-event-register',
  templateUrl: './create-event-register.component.html',
  styleUrls: ['./create-event-register.component.css']
})
export class CreateEventRegisterComponent {
  loader: boolean = true;
  createEventRegisterForm: FormGroup;
  eventTypeLists: Array<any> = [];
  event_is_special: any;
  villagesOfBranch: Array<any> = [];
  villageList: Array<any> = [];
  gpList: Array<any> = [];
  minToDate: any;
  maxToDate: any;
  hcoUserList: Array<any> = [];
  issuesList: Array<any> = [];
  designationList: Array<any> = [];
  facilitatorDetails = {
    facilitatorInfo: []
  }

  stakeHolderDetails = {
    stakeHolderInfo: []
  }

  attendeeDetails = {
    attendeeInfo: []
  }

  classList: Array<any> = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.createEventForm();

    let eventListReq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.eventTypeLists = res.responseObject;
      console.log(this.eventTypeLists, 'eventTypeLists');
    });
  }

  createEventForm() {
    this.createEventRegisterForm = this.fb.group({
      eventType: ['', Validators.required],
      schoolName: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      schoolType: ['', Validators.required],
      eventDate: ['', Validators.required],
      designation: ['', Validators.required],
      issueType: ['', Validators.required]

    });
  }

  get l() {
    return this.createEventRegisterForm.controls;
  }

  changeEventTypes(eventTypeMasterId) {
    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    console.log(this.event_is_special, 'this.event_is_special');
    if (this.event_is_special == 'N') {
      let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch');
      });

      this.minToDate = moment(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
      this.maxToDate = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);

      let hcoUserReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getAllStaffOfABrancsRegion(hcoUserReg).subscribe((res) => {
        this.loader = true;
        this.hcoUserList = res.responseObject.fullStaffList;
        console.log(this.hcoUserList, 'hcoUserList');
      });


      let getEventPreRequisiteReg = { dataAccessDTO: this.httpService.dataAccessDTO, event_type_master_id: null };
      this.loader = false;
      this.eventService.getEventPreRequisite(getEventPreRequisiteReg).subscribe((res) => {
        this.loader = true;
        console.log(res.responseObject.issueList);
        this.issuesList = res.responseObject.issueList.filter(x => x.eventTypeMasterId == eventTypeMasterId);
        console.log(this.issuesList, 'issuesList');
        this.designationList = res.responseObject.designationList;
        console.log(this.designationList, 'designationList')
      });

      this.facilitatorDetails.facilitatorInfo = [];
      this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];
      this.facilitatorDetails.facilitatorInfo.push({
        Name: '',
        Designation: ''
      });

      this.stakeHolderDetails.stakeHolderInfo.push({
        Name: '',
        Designation: ''
      });

      this.attendeeDetails.attendeeInfo.push({
        Name: '',
        Class: '',
        Sex: ''
      });

      this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12')
      console.log(this.classList);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.createEventRegisterForm.controls.gram.setValue('');
    // this.escortviewData = [];
  }

  restrictTypeOfDate() {
    return false;
  }

  addMoreFacilitator() {
    this.facilitatorDetails.facilitatorInfo.push({
      Name: '',
      Designation: ''
    });
  }

  removeFacilitator(i) {
    this.facilitatorDetails.facilitatorInfo.splice(i, 1);
  }

  addMoreStakeHolder() {
    this.stakeHolderDetails.stakeHolderInfo.push({
      Name: '',
      Designation: ''
    });
  }

  removeStackHolder(i) {
    this.stakeHolderDetails.stakeHolderInfo.splice(i, 1);
  }

  addMoreAttendeeDetails() {
    this.attendeeDetails.attendeeInfo.push({
      Name: '',
      Class: '',
      Sex: ''
    });
  }

  removeAttendeeDetails(i) {
    this.attendeeDetails.attendeeInfo.splice(i, 1);
  }
}
