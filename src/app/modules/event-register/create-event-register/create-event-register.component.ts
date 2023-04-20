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
      eventTypes: ['', Validators.required],
      schoolName: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      schoolType: ['', Validators.required],
      eventDate: ['', Validators.required]

    });
  }

  get l() {
    return this.createEventRegisterForm.controls;
  }

  changeEventTypes(is_special) {
    this.event_is_special = is_special;
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

}
