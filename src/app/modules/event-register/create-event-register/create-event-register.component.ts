import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventRegisterService } from '../event-register.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

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
  staffListID: Array<any> = [];

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
  specificSchoolEventDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    // console.log(this.data);
    this.specificSchoolEventDetails = this.data.specificSchoolEventDetails;
    console.log(this.specificSchoolEventDetails);

    this.createEventForm();

    let eventListReq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.eventTypeLists = res.responseObject;
      // console.log(this.eventTypeLists, 'eventTypeLists');
    });
  }

  createEventForm() {
    this.createEventRegisterForm = this.fb.group({
      eventType: [this.specificSchoolEventDetails?.eventTypeMasterId ? this.specificSchoolEventDetails?.eventTypeMasterId : '', Validators.required],
      schoolName: [this.specificSchoolEventDetails?.schoolName ? this.specificSchoolEventDetails?.schoolName : '', Validators.required],
      schoolType: [this.specificSchoolEventDetails?.schoolType ? this.specificSchoolEventDetails?.schoolType : '', Validators.required],
      block: [this.specificSchoolEventDetails?.blockId ? this.specificSchoolEventDetails?.blockId : '', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      eventDate: [this.specificSchoolEventDetails?.eventDate ? this.specificSchoolEventDetails?.eventDate : '', Validators.required],
      issueType: [this.specificSchoolEventDetails?.issueId ? this.specificSchoolEventDetails?.issueId : '', Validators.required]
    });



    setTimeout(() => {
      if (this.specificSchoolEventDetails?.eventTypeMasterId) {
        // console.log(true);

        this.changeEventTypes(this.specificSchoolEventDetails?.eventTypeMasterId);
        setTimeout(() => {
          this.changeBlock(this.specificSchoolEventDetails?.blockId);
          if (this.specificSchoolEventDetails?.gpId) {
            this.createEventRegisterForm.controls.gp.setValue(this.specificSchoolEventDetails?.gpId)
          }
          this.changeGp(this.specificSchoolEventDetails?.gpId)
          if (this.specificSchoolEventDetails?.schoolPlaceVillageId) {
            this.createEventRegisterForm.controls.gram.setValue(this.specificSchoolEventDetails?.schoolPlaceVillageId)
          }
        }, 100);
        this.createEventRegisterForm.controls['eventType'].disable();
        this.createEventRegisterForm.controls['eventDate'].disable();
        return this.createEventRegisterForm.markAllAsTouched();
      }
    }, 500);

  }

  get l() {
    return this.createEventRegisterForm.controls;
  }

  changeEventTypes(eventTypeMasterId) {
    // console.log(true, eventTypeMasterId);
    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    // console.log(this.event_is_special, 'this.event_is_special');
    if (this.event_is_special == 'N') {
      let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        // console.log(this.villagesOfBranch, 'villagesOfBranch');
      });

      this.minToDate = moment(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
      this.maxToDate = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);

      let hcoUserReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getAllStaffOfABrancsRegion(hcoUserReg).subscribe((res) => {
        this.loader = true;
        this.hcoUserList = res.responseObject.fullStaffList;
        this.hcoUserList = this.hcoUserList?.map(({
          is_checked = false,
          ...rest
        }) => ({
          is_checked,
          ...rest
        }));


        this.specificSchoolEventDetails?.staffList?.forEach(e => {
          this.hcoUserList.find(v => v.user_id == e.staffId).is_checked = true;
          this.hcoUserList.find(v => v.user_id == e.staffId).staffEventMapId = e.staffEventMapId;
        })
      });


      let getEventPreRequisiteReg = { dataAccessDTO: this.httpService.dataAccessDTO, event_type_master_id: null };
      this.loader = false;
      this.eventService.getEventPreRequisite(getEventPreRequisiteReg).subscribe((res) => {
        this.loader = true;
        // console.log(res.responseObject.issueList);
        this.issuesList = res.responseObject.issueList.filter(x => x.eventTypeMasterId == eventTypeMasterId);
        // console.log(this.issuesList, 'issuesList');
        this.designationList = res.responseObject.designationList;
        // console.log(this.designationList, 'designationList')
      });

      this.facilitatorDetails.facilitatorInfo = [];
      this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];

      // console.log(this.schoolDetails?.facilitatorList);
      // console.log(this.facilitatorDetails.facilitatorInfo);

      if (this.specificSchoolEventDetails?.facilitatorList) {
        this.facilitatorDetails.facilitatorInfo = this.specificSchoolEventDetails?.facilitatorList
      }
      else {
        this.facilitatorDetails.facilitatorInfo.push({
          facilitatorStakeholderMapId: 0,
          name: '',
          designationId: '',
          active_flag: 'A'
        });
      }

      if (this.specificSchoolEventDetails?.stakeHolderList?.length > 0) {
        this.stakeHolderDetails.stakeHolderInfo = this.specificSchoolEventDetails?.stakeHolderList
      } else {
        this.stakeHolderDetails.stakeHolderInfo.push({
          facilitatorStakeholderMapId: 0,
          name: '',
          designationId: '',
          active_flag: 'A'
        });
      }

      if (this.specificSchoolEventDetails?.attendeeList) {
        this.attendeeDetails.attendeeInfo = this.specificSchoolEventDetails?.attendeeList;
      } else {
        this.attendeeDetails.attendeeInfo.push({
          eventSchoolAttendeeMapId: 0,
          name: '',
          className: '',
          sex: '',
          active_flag: 'A'
        });
      }


      this.classList = [];
      if (eventTypeMasterId == 1) {
        this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5')
      } else if (eventTypeMasterId == 2) {
        this.classList.push('6', '7', '8', '9', '10', '11', '12')
      }

      // console.log(this.classList);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeBlock(blockId) {
    // console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    // console.log(this.gpList, 'gplist');

    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList, 'villageList');
    this.createEventRegisterForm.controls.gram.setValue('');
    // this.escortviewData = [];
  }

  restrictTypeOfDate() {
    return false;
  }

  selectMultipleStaff(e, user) {
    this.staffListID = [];
    console.log(e.target.checked, user);
    if (e.target.checked == true) {
      user.is_checked = true;
    } else {
      user.is_checked = false;
    }
    console.log(this.hcoUserList);

    this.hcoUserList.forEach(x => {
      if (x.staffEventMapId) {
        this.staffListID.push({
          staffEventMapId: x.staffEventMapId ? x.staffEventMapId : 0, staffId: x.user_id,
          active_flag: x.is_checked == false ? 'D' : 'A'
        })
      } else {
        if (x.is_checked == true)
          this.staffListID.push({ staffEventMapId: 0, staffId: x.user_id, active_flag: 'A' });
      }
    })

    console.log(this.staffListID);
  }

  addMoreFacilitator() {
    this.facilitatorDetails.facilitatorInfo.push({
      facilitatorStakeholderMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.facilitatorDetails.facilitatorInfo);

  }

  removeFacilitator(i) {
    var faci = this.facilitatorDetails.facilitatorInfo;
    if (this.specificSchoolEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].facilitatorStakeholderMapId != 0) {
          faci[i].active_flag = "D";
        } else {
          faci.splice(i, 1);
        }
      } else {
        faci.splice(i, 1);
      }
    } else {
      faci.splice(i, 1);
    }

    // if (this.specificSchoolEventDetails?.eventTypeMasterId) {
    //   this.facilitatorDetails.facilitatorInfo[i].active_flag = "D"
    // } else {
    //   this.facilitatorDetails.facilitatorInfo.splice(i, 1);
    // }

  }

  addMoreStakeHolder() {
    this.stakeHolderDetails.stakeHolderInfo.push({
      facilitatorStakeholderMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
  }

  removeStackHolder(i) {
    this.stakeHolderDetails.stakeHolderInfo.splice(i, 1);
  }

  addMoreAttendeeDetails() {
    this.attendeeDetails.attendeeInfo.push({
      eventSchoolAttendeeMapId: 0,
      name: '',
      className: '',
      sex: '',
      active_flag: 'A'
    });
  }

  removeAttendeeDetails(i) {
    this.attendeeDetails.attendeeInfo.splice(i, 1);
  }

  disableSave() {
    let flag = true;
    let x = this.createEventRegisterForm.value;

    if (!x.eventType && !this.specificSchoolEventDetails?.eventTypeMasterId) {
      flag = false
    }

    if ((x.eventType == 1 || this.specificSchoolEventDetails?.eventTypeMasterId == 1) ||
      (x.eventType == 2 || this.specificSchoolEventDetails?.eventTypeMasterId == 2)) {
      if (!x.schoolName) {
        flag = false
      } else if (this.createEventRegisterForm.value.schoolName.trim().length < 3) {
        flag = false
      } else if (!x.schoolType) {
        flag = false
      } else if (!x.gram) {
        flag = false
      } else if (!x.eventDate && !this.specificSchoolEventDetails?.eventDate) {
        flag = false
      } else if (!x.issueType) {
        flag = false
      }

      if (this.hcoUserList.filter(x => x.is_checked == true).length == 0) {
        flag = false
      }

      this.facilitatorDetails.facilitatorInfo.forEach(y => {
        if (y.name) {
          if (!y.designationId) {
            flag = false;
          }
        } else if (y.designationId) {
          if (!y.name) {
            flag = false;
          }
        }
      })

      if (this.facilitatorDetails.facilitatorInfo.filter(x => x.name).length == 0) {
        flag = false
      }

      this.attendeeDetails.attendeeInfo.forEach(y => {
        if (y.name) {
          if (!y.className) {
            flag = false;
          } else if (!y.sex) {
            flag = false;
          }
        } else if (y.className) {
          if (!y.name) {
            flag = false;
          } else if (!y.sex) {
            flag = false;
          }
        } else if (y.sex) {
          if (!y.name) {
            flag = false;
          } else if (!y.className) {
            flag = false;
          }
        }
      })

      if (this.attendeeDetails.attendeeInfo.filter(x => x.name).length == 0) {
        flag = false;
      }

      // console.log(this.facilitatorDetails.facilitatorInfo);
      // console.log(this.facilitatorDetails.facilitatorInfo.filter(x => x.name).length);
    }
    return flag;

  }

  submitForm() {
    console.log(this.facilitatorDetails.facilitatorInfo);
    console.log(this.stakeHolderDetails.stakeHolderInfo);
    console.log(this.attendeeDetails.attendeeInfo);
    this.facilitatorDetails.facilitatorInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })

    this.stakeHolderDetails.stakeHolderInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })

    this.attendeeDetails.attendeeInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })

    let schoolEventReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSchoolId: 0,
      eventTypeMasterId: this.createEventRegisterForm.value.eventType,
      schoolPlaceBranchId: this.data.branchID,
      schoolPlaceVillageId: this.createEventRegisterForm.value.gram,
      schoolName: this.validationService.camelize(this.createEventRegisterForm.value.schoolName.trim()),
      schoolType: this.createEventRegisterForm.value.schoolType,
      eventDate: this.createEventRegisterForm.value.eventDate,
      issueId: this.createEventRegisterForm.value.issueType,
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo,
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo,
      attendeeList: this.attendeeDetails.attendeeInfo,
    }


    console.log(schoolEventReq, 'schoolEventReq');


    this.eventService.schoolEventSaveOrUpdate(schoolEventReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.closeDialog();
      } else {
        this.showError(res.message);
      }
    })
  }

  showSuccess(message) {
    this.toaster.success(message, 'Event Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Event Register', {
      timeOut: 3000,
    });
  }
}
