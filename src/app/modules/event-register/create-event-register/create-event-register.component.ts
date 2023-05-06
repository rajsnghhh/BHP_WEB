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
  toDateMin: any;
  toDateMax: any;
  hcoUserList: Array<any> = [];
  issuesList: Array<any> = [];
  designationList: Array<any> = [];
  staffListID: Array<any> = [];
  specialEventVillList: Array<any> = [];
  familiesWithStatusOfVillage: Array<any> = [];
  familiesListID: Array<any> = [];

  facilitatorDetails = {
    facilitatorInfo: []
  }

  stakeHolderDetails = {
    stakeHolderInfo: []
  }

  attendeeDetails = {
    attendeeInfo: []
  }


  specialGuestDetails = {
    guestsInfo: []
  }

  classList: Array<any> = [];
  specificSchoolEventDetails: any;
  isReadOnly: boolean;
  dialogTitle: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    // console.log(this.data);
    this.specificSchoolEventDetails = this.data.specificSchoolEventDetails;
    console.log(this.specificSchoolEventDetails);
    if (this.specificSchoolEventDetails?.modalType == 'edit') {
      this.dialogTitle = 'Edit Event Register';
    } else if (this.specificSchoolEventDetails?.modalType == 'view') {
      this.dialogTitle = 'View Event Register';
    } else {
      this.dialogTitle = 'Create Event Register';
    }

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
      issueType: [this.specificSchoolEventDetails?.issueId ? this.specificSchoolEventDetails?.issueId : '', Validators.required],

      eventDateFrom: ['', Validators.required],
      eventDateTo: ['', Validators.required],
      rallySeminarDate: ['', Validators.required],
      rallySeminarPlace: ['', Validators.required],
      village: ['', Validators.required]

    });


    setTimeout(() => {
      if (this.specificSchoolEventDetails?.eventTypeMasterId && this.specificSchoolEventDetails?.modalType == 'edit') {
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

      else if (this.specificSchoolEventDetails?.eventTypeMasterId && this.specificSchoolEventDetails?.modalType == 'view') {
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
        this.createEventRegisterForm.disable();
        this.isReadOnly = true;
      }


    }, 500);

    if (this.createEventRegisterForm.value.eventDateFrom) {
      this.createEventRegisterForm.controls['eventDateTo'].enable();
    } else {
      this.createEventRegisterForm.controls['eventDateTo'].disable();
    }


  }

  get l() {
    return this.createEventRegisterForm.controls;
  }

  changeEventTypes(eventTypeMasterId) {
    if (!this.specificSchoolEventDetails?.eventTypeMasterId) {
      this.createEventRegisterForm.controls.issueType.setValue('');
    }

    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    console.log(this.event_is_special, 'this.event_is_special');

    console.log(this.data.branchOpenDate);
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
        this.staffListID.push({
          staffEventMapId: e.staffEventMapId, staffId: e.staffId,
          active_flag: 'A'
        })
      })
    });


    if (this.specificSchoolEventDetails?.facilitatorList?.length > 0) {
      this.specificSchoolEventDetails?.facilitatorList.forEach(x => {
        this.facilitatorDetails.facilitatorInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        })
        console.log(this.facilitatorDetails.facilitatorInfo);

      });
    } else {
      this.facilitatorDetails.facilitatorInfo = []
      this.facilitatorDetails.facilitatorInfo.push({
        facilitatorStakeholderMapId: 0,
        name: '',
        designationId: '',
        active_flag: 'A'
      });
    }

    if (this.specificSchoolEventDetails?.stakeHolderList?.length > 0) {
      this.specificSchoolEventDetails?.stakeHolderList.forEach(x => {
        this.stakeHolderDetails.stakeHolderInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        })
        console.log(this.stakeHolderDetails.stakeHolderInfo);

      })
    } else {
      this.stakeHolderDetails.stakeHolderInfo = []
      this.stakeHolderDetails.stakeHolderInfo.push({
        facilitatorStakeholderMapId: 0,
        name: '',
        designationId: '',
        active_flag: 'A'
      });
    }

    if (this.event_is_special == 'N') {
      let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        // console.log(this.villagesOfBranch, 'villagesOfBranch');
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

      // this.facilitatorDetails.facilitatorInfo = [];
      // this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];

      // console.log(this.specificSchoolEventDetails?.facilitatorList);

      if (this.specificSchoolEventDetails?.attendeeList) {
        this.specificSchoolEventDetails?.attendeeList.forEach(x => {
          this.attendeeDetails.attendeeInfo.push({
            eventSchoolAttendeeMapId: x.eventSchoolAttendeeMapId,
            name: x.name,
            className: x.className,
            sex: x.sex,
            active_flag: 'A'
          })
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        })
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

    if (this.event_is_special == 'Y') {
      this.specialGuestDetails.guestsInfo = []
      this.specialGuestDetails.guestsInfo.push({
        specialGuestMapId: 0,
        name: '',
        designationId: '',
        active_flag: 'A'
      });

      this.getSimpleListOfVillagesOfABranch();
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
  }

  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList, 'villageList');
    this.createEventRegisterForm.controls.gram.setValue('');
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
    console.log(this.facilitatorDetails.facilitatorInfo);

    var faci = this.facilitatorDetails.facilitatorInfo;
    if (this.specificSchoolEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].facilitatorStakeholderMapId != 0) {
          faci[i].active_flag = "D";
        } else {
          faci.splice(i, 1);
          console.log(this.facilitatorDetails.facilitatorInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.facilitatorDetails.facilitatorInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.facilitatorDetails.facilitatorInfo);
    }

  }

  addMoreStakeHolder() {
    this.stakeHolderDetails.stakeHolderInfo.push({
      facilitatorStakeholderMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.stakeHolderDetails.stakeHolderInfo);

  }

  removeStackHolder(i) {
    var faci = this.stakeHolderDetails.stakeHolderInfo;
    if (this.specificSchoolEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].facilitatorStakeholderMapId != 0) {
          faci[i].active_flag = "D";
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        } else {
          faci.splice(i, 1);
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.stakeHolderDetails.stakeHolderInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.stakeHolderDetails.stakeHolderInfo);
    }
  }

  addMoreAttendeeDetails() {
    this.attendeeDetails.attendeeInfo.push({
      eventSchoolAttendeeMapId: 0,
      name: '',
      className: '',
      sex: '',
      active_flag: 'A'
    });
    console.log(this.attendeeDetails.attendeeInfo);
  }

  removeAttendeeDetails(i) {
    var faci = this.attendeeDetails.attendeeInfo;
    if (this.specificSchoolEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].eventSchoolAttendeeMapId != 0) {
          faci[i].active_flag = "D";
          console.log(this.attendeeDetails.attendeeInfo);
        } else {
          faci.splice(i, 1);
          console.log(this.attendeeDetails.attendeeInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.attendeeDetails.attendeeInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.attendeeDetails.attendeeInfo);
    }
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

      if (this.facilitatorDetails.facilitatorInfo.filter(x => x.active_flag == 'A' && x.name).length == 0) {
        flag = false
      }

      this.stakeHolderDetails.stakeHolderInfo.forEach(y => {
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

      if (this.attendeeDetails.attendeeInfo.filter(x => x.active_flag == 'A' && x.name).length == 0) {
        flag = false;
      }
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
      eventRegisterSchoolId: this.specificSchoolEventDetails?.eventRegisterSchoolId ? this.specificSchoolEventDetails?.eventRegisterSchoolId : 0,
      eventTypeMasterId: this.specificSchoolEventDetails?.eventTypeMasterId ? this.specificSchoolEventDetails?.eventTypeMasterId : this.createEventRegisterForm.value.eventType,
      schoolPlaceBranchId: this.data.branchID,
      schoolPlaceVillageId: this.createEventRegisterForm.value.gram,
      schoolName: this.validationService.camelize(this.createEventRegisterForm.value.schoolName.trim()),
      schoolType: this.createEventRegisterForm.value.schoolType,
      eventDate: this.specificSchoolEventDetails?.eventDate ? this.specificSchoolEventDetails?.eventDate : this.createEventRegisterForm.value.eventDate,
      issueId: this.createEventRegisterForm.value.issueType,
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      attendeeList: this.attendeeDetails.attendeeInfo.filter(x => x.name),
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

  //Special events functionalities
  setEventDateTo(value) {
    if (value) {
      this.toDateMin = moment(value).add(0, 'days').format('YYYY-MM-DD');
      this.createEventRegisterForm.controls['eventDateTo'].enable();
      this.createEventRegisterForm.controls.eventDateTo.setValue('')
    } else {
      this.createEventRegisterForm.controls['eventDateTo'].disable();
      this.createEventRegisterForm.controls.eventDateTo.setValue('')
    }

  }

  addMoreSpecialGuests() {
    this.specialGuestDetails.guestsInfo.push({
      specialGuestMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.specialGuestDetails.guestsInfo);

  }

  removeSpecialGuests(i) {
    this.specialGuestDetails.guestsInfo.splice(i, 1);
  }

  getSimpleListOfVillagesOfABranch() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID }
    this.eventService.getSimpleListOfVillagesOfABranch(req).subscribe((res: any) => {
      this.specialEventVillList = res.responseObject
      console.log(this.specialEventVillList, 'specialEventVillList');
    });
  }

  getFamiliesWithStatusForAVillage(villageID) {
    console.log(villageID);
    var showVillageName = this.specialEventVillList.find(x => x.villageId == villageID)?.villageName
    if (villageID == '') { this.familiesListID = [] }

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, date: this.createEventRegisterForm.value.rallySeminarDate, villageId: villageID }
    this.eventService.getFamiliesWithStatusForAVillage(req).subscribe((res: any) => {
      this.familiesWithStatusOfVillage = res.responseObject;
      // console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');

      this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage?.map(({
        setStatus = '', is_checked = false, villageName = showVillageName,
        ...rest
      }) => ({
        setStatus, is_checked, villageName,
        ...rest
      }));

      this.setStatusForAll(this.familiesWithStatusOfVillage);
      console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');

      if (this.familiesListID?.length > 0) {
        console.log(this.familiesListID);

        this.familiesListID?.forEach(y => {
          this.familiesWithStatusOfVillage?.filter(x => x.familyId == y.familyId).forEach(x => {
            x.is_checked = true
          })
        })
      }

      if (villageID == 'allFamilies') {
        this.familiesWithStatusOfVillage = this.familiesListID.filter(x => x.is_checked == true);
      }

    })
  }

  selectMultipleFamilies(e, fam) {
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
      // this.familiesListID.push(fam)
    }
    else {
      fam.is_checked = false;
      // this.familiesListID.forEach(x => {
      //   if(x.familyId == fam.familyId)  this.familiesListID.splice(fam,1)
      // })
    }

    this.familiesListID.forEach(x => {
      if (x.familyId == fam.familyId) {
        x.is_checked = fam.is_checked
      }
    })

    if (fam.is_checked == true) { this.familiesListID.push(fam) }
    this.familiesListID = this.familiesListID.filter(x => x.is_checked == true);
    console.log(this.familiesListID);
  }

  //Set PW,PEM,LM,2-5YR,Adol Status
  setStatusForAll(familys: any) {
    familys?.forEach(family => {
      if (family.lactatingMother == "Y" &&
        family.pregnantWoman == "Y" &&
        family.pem == "Y" &&
        family.twoToFive == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "PEM, LM, PW, 2to5, AG"
      } else if (family.lactatingMother == "Y" &&
        family.pregnantWoman?.includes("N") &&
        family.pem?.includes("N") &&
        family.adolescentGirl?.includes("N") &&
        family.twoToFive?.includes("N")
      ) {
        family.setStatus = "LM"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman == "Y" &&
        family.pem?.includes("N") &&
        family.adolescentGirl?.includes("N") &&
        family.twoToFive?.includes("N")
      ) {
        family.setStatus = "PW"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.pem == "Y" &&
        family.adolescentGirl?.includes("N") &&
        family.twoToFive?.includes("N")
      ) {
        family.setStatus = "PEM"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.twoToFive == "Y" &&
        family.adolescentGirl?.includes("N") &&
        family.pem?.includes("N")
      ) {
        family.setStatus = "2to5"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.adolescentGirl == "Y" &&
        family.twoToFive?.includes("N") &&
        family.pem?.includes("N")
      ) {
        family.setStatus = "AG"
      } else if (family.lactatingMother == "Y" &&
        family.pregnantWoman == "Y" &&
        family.pem?.includes("N") &&
        family.twoToFive?.includes("N") &&
        family.adolescentGirl?.includes("N")
      ) {
        family.setStatus = "LM, PW"
      } else if (family.lactatingMother == "Y" &&
        family.pregnantWoman?.includes("N") &&
        family.pem == "Y" &&
        family.twoToFive?.includes("N") &&
        family.adolescentGirl?.includes("N")
      ) {
        family.setStatus = "LM, PEM"
      } else if (family.lactatingMother == "Y" &&
        family.pregnantWoman?.includes("N") &&
        family.twoToFive == "Y" &&
        family.pem?.includes("N") &&
        family.adolescentGirl?.includes("N")
      ) {
        family.setStatus = "LM, 2to5"
      } else if (family.lactatingMother == "Y" &&
        family.pregnantWoman?.includes("N") &&
        family.adolescentGirl == "Y" &&
        family.twoToFive?.includes("N") &&
        family.pem?.includes("N") &&
        family.adolescentGirl?.includes("N")
      ) {
        family.setStatus = "LM, AG"
      } else if (family.lactatingMother?.includes("N") &&
        family.twoToFive?.includes("N") &&
        family.adolescentGirl?.includes("N") &&
        family.pregnantWoman == "Y" &&
        family.pem == "Y"
      ) {
        family.setStatus = "PW, PEM"
      } else if (family.lactatingMother?.includes("N") &&
        family.pem?.includes("N") &&
        family.adolescentGirl?.includes("N") &&
        family.pregnantWoman == "Y" &&
        family.twoToFive == "Y"
      ) {
        family.setStatus = "PW, 2to5"
      } else if (family.lactatingMother?.includes("N") &&
        family.pem?.includes("N") &&
        family.twoToFive?.includes("N") &&
        family.pregnantWoman == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "PW, AG"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.adolescentGirl?.includes("N") &&
        family.pem == "Y" &&
        family.twoToFive == "Y"
      ) {
        family.setStatus = "PEM, 2to5"
      }
      else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.twoToFive?.includes("N") &&
        family.pem == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "PEM, AG"
      }
      else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.twoToFive == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "2to5, AG"
      } else if (family.lactatingMother?.includes("N") &&
        family.pem == "Y" &&
        family.pregnantWoman == "Y" &&
        family.twoToFive == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "PEM, PW, 2to5, AG"
      } else if (family.pem?.includes("N") &&
        family.lactatingMother == "Y" &&
        family.pregnantWoman == "Y" &&
        family.twoToFive == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "LM, PW, 2to5, AG"
      } else if (family.pregnantWoman?.includes("N") &&
        family.lactatingMother == "Y" &&
        family.pem == "Y" &&
        family.twoToFive == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "LM, PEM, 2to5, AG"
      } else if (family.twoToFive?.includes("N") &&
        family.lactatingMother == "Y" &&
        family.pem == "Y" &&
        family.pregnantWoman == "Y" &&
        family.adolescentGirl == "Y"
      ) {
        family.setStatus = "LM, PEM, PW, AG"
      }
      else if (family.adolescentGirl?.includes("N") &&
        family.lactatingMother == "Y" &&
        family.pem == "Y" &&
        family.pregnantWoman == "Y" &&
        family.twoToFive == "Y"
      ) {
        family.setStatus = "LM, PEM, PW, 2to5"
      } else if (family.lactatingMother?.includes("N") &&
        family.pregnantWoman?.includes("N") &&
        family.pem?.includes("N") &&
        family.twoToFive?.includes("N") &&
        family.adolescentGirl?.includes("N")
      ) {
        family.setStatus = "--"
      } else {
        family.setStatus = "--"
      }
    });
  }

}
