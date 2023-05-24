import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventRegisterService } from '../event-register.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { designationList, issueList, specialEventVillList, Response, hcoUserList } from '../event_interface';

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
  hcoUserList: hcoUserList[];
  issuesList: issueList[];
  designationList: designationList[];
  staffListID: Array<any> = [];
  specialEventVillList: specialEventVillList[];
  familiesWithStatusOfVillage: Array<any> = [];
  onEditfamiliesWithStatusOfVillage: Array<any> = [];
  familiesListID: Array<any> = [];
  ssListID: Array<any> = [];
  ssListOfRegion: Array<any> = [];
  searchFullscreen: boolean;
  familySearch: any;
  capturedImagesList: any;
  eventName: any;
  facilitatorDetails = { facilitatorInfo: [] }
  stakeHolderDetails = { stakeHolderInfo: [] }
  attendeeDetails = { attendeeInfo: [] }
  specialGuestDetails = { guestsInfo: [] }

  classList: Array<any> = [];
  specificEventDetails: any;
  isReadOnly: boolean;
  dialogTitle: any;
  fgdMaxDate: any;
  rallyMaxMinDate: any;
  fgdMinDate: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    //data variable is containing all necessary details for creating events
    this.specificEventDetails = this.data?.specificEventDetails;
    this.capturedImagesList = this.data?.specificEventDetails?.imageList;

    console.log(this.specificEventDetails, 'specificEventDetails');
    //dialogTitle variable contains modal naming convention according to create, update & view
    if (this.specificEventDetails?.modalType == 'edit') {
      this.dialogTitle = 'Edit Event Register';
    } else if (this.specificEventDetails?.modalType == 'view') {
      this.dialogTitle = 'View Event Register';
    } else {
      this.dialogTitle = 'Create Event Register';
    }

    this.createEventForm();

    //eventTypeLists containing school & special events name
    let eventListReq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.loader = false;
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.loader = true;
      this.eventTypeLists = res.responseObject;
      // console.log(this.eventTypeLists, 'eventTypeLists');
    });
  }

  createEventForm() {

    let ssAttend;
    if (this.specificEventDetails) {
      ssAttend = this.specificEventDetails?.rallyOrSeminarDetails?.ssList?.length > 0 ? 'Y' : 'N'
    } else {
      ssAttend = ''
    }
    this.createEventRegisterForm = this.fb.group({
      //school event formcontrols
      eventType: [this.specificEventDetails?.eventTypeMasterId ? this.specificEventDetails?.eventTypeMasterId : '', Validators.required],
      schoolName: [this.specificEventDetails?.schoolName ? this.specificEventDetails?.schoolName : '', Validators.required],
      schoolType: [this.specificEventDetails?.schoolType ? this.specificEventDetails?.schoolType : '', Validators.required],
      block: [this.specificEventDetails?.blockId ? this.specificEventDetails?.blockId : '', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      eventDate: [this.specificEventDetails?.eventDate ? this.specificEventDetails?.eventDate : '', Validators.required],
      issueType: [this.specificEventDetails?.issueId ? this.specificEventDetails?.issueId : '', Validators.required],

      //special event formcontrols
      eventDateFrom: [this.specificEventDetails?.startDate ? this.specificEventDetails?.startDate : '', Validators.required],
      eventDateTo: [this.specificEventDetails?.endDate ? this.specificEventDetails?.endDate : '', Validators.required],
      rallySeminarDate: [this.specificEventDetails?.rallyOrSeminarDetails ? this.specificEventDetails?.rallyOrSeminarDetails.date : '', Validators.required],
      rallySeminarPlace: [this.specificEventDetails?.rallyOrSeminarDetails ? this.specificEventDetails?.rallyOrSeminarDetails.place : '', Validators.required],
      village: ['', Validators.required],
      ssAttended: [ssAttend, Validators.required],
      rally: [this.specificEventDetails?.rally == 'Y' ? true : '', Validators.required],
      seminar: [this.specificEventDetails?.seminar == 'Y' ? true : '', Validators.required],
      fgd: [this.specificEventDetails?.fgd == 'Y' ? true : '', Validators.required]

    });

    // data setting in form during updating event
    setTimeout(() => {
      if (this.specificEventDetails?.eventTypeMasterId && this.specificEventDetails?.modalType == 'edit') {

        /*Fgd Max and Min Date*/
        if (this.specificEventDetails?.fgdDetails?.length > 0) {
          this.createEventRegisterForm.controls['fgd'].disable();
          var fgd = this.specificEventDetails?.fgdDetails
          this.rallyMaxMinDate = this.specificEventDetails?.rallyOrSeminarDetails?.date
          if (this.rallyMaxMinDate == null) {
            this.fgdMinDate = fgd[0]?.dateOfFgd.toString()
            this.fgdMaxDate = fgd[fgd.length - 1]?.dateOfFgd.toString()
          } else {
            this.fgdMinDate = fgd[0]?.dateOfFgd.toString()
            this.fgdMaxDate = fgd[fgd.length - 1]?.dateOfFgd.toString()
            if (this.rallyMaxMinDate.toString() < this.fgdMinDate.toString())
              this.fgdMinDate = this.rallyMaxMinDate
            if (this.rallyMaxMinDate.toString() > this.fgdMaxDate.toString())
              this.fgdMaxDate = this.rallyMaxMinDate
          }

        } else {
          this.rallyMaxMinDate = this.specificEventDetails?.rallyOrSeminarDetails?.date
          this.fgdMaxDate = this.rallyMaxMinDate
          this.fgdMinDate = this.rallyMaxMinDate
        }

        setTimeout(() => {
          this.minToDate = moment(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
          this.maxToDate = moment(this.fgdMinDate).add(0, 'days').format('YYYY-MM-DD');
          this.toDateMin = moment(this.fgdMaxDate).add(0, 'days').format('YYYY-MM-DD');
          console.log(this.minToDate, this.maxToDate, this.toDateMin);

        }, 1000);

        this.changeEventTypes(this.specificEventDetails?.eventTypeMasterId);
        setTimeout(() => {
          this.changeBlock(this.specificEventDetails?.blockId);
          if (this.specificEventDetails?.gpId) {
            this.createEventRegisterForm.controls.gp.setValue(this.specificEventDetails?.gpId)
          }
          this.changeGp(this.specificEventDetails?.gpId)
          if (this.specificEventDetails?.schoolPlaceVillageId) {
            this.createEventRegisterForm.controls.gram.setValue(this.specificEventDetails?.schoolPlaceVillageId)
          }
        }, 100);
        this.createEventRegisterForm.controls['eventType'].disable();
        this.createEventRegisterForm.controls['eventDate'].disable();
        console.log(this.createEventRegisterForm.value.rally);
        console.log(this.createEventRegisterForm.value.seminar)
        if (this.specificEventDetails?.rally == 'Y' || this.specificEventDetails?.seminar == 'Y') {
          this.createEventRegisterForm.controls['rallySeminarDate'].disable();
        } else {
          this.createEventRegisterForm.controls['rallySeminarDate'].enable();
        }

        return this.createEventRegisterForm.markAllAsTouched();
      }


      // view specific event details
      else if (this.specificEventDetails?.eventTypeMasterId && this.specificEventDetails?.modalType == 'view') {
        this.changeEventTypes(this.specificEventDetails?.eventTypeMasterId);
        setTimeout(() => {
          this.changeBlock(this.specificEventDetails?.blockId);
          if (this.specificEventDetails?.gpId) {
            this.createEventRegisterForm.controls.gp.setValue(this.specificEventDetails?.gpId)
          }
          this.changeGp(this.specificEventDetails?.gpId)
          if (this.specificEventDetails?.schoolPlaceVillageId) {
            this.createEventRegisterForm.controls.gram.setValue(this.specificEventDetails?.schoolPlaceVillageId)
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

    if ((this.createEventRegisterForm.value.eventDateFrom || this.specificEventDetails?.startDate) &&
      (this.createEventRegisterForm.value.eventDateTo || this.specificEventDetails?.endDate)) {
      this.createEventRegisterForm.controls['rallySeminarDate'].enable();
    } else {
      this.createEventRegisterForm.controls['rallySeminarDate'].disable();
    }

  }

  get l() {
    return this.createEventRegisterForm.controls;
  }


  changeEventTypes(eventTypeMasterId) {
    if (!this.specificEventDetails?.eventTypeMasterId) {
      this.createEventRegisterForm.controls.issueType.setValue('');
    }
    this.eventName = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.eventName;

    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;

    this.minToDate = moment(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
    this.maxToDate = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);

    //hcoUserList variable containing staffs of a branch
    let hcoUserReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
    this.loader = false;
    this.eventService.getAllStaffOfABrancsRegion(hcoUserReg).subscribe((res: Response) => {
      this.loader = true;
      this.hcoUserList = res.responseObject.fullStaffList;
      this.hcoUserList = this.hcoUserList?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));

      console.log(this.hcoUserList);

      // In update checking selected stafflist 
      this.specificEventDetails?.staffList?.forEach(e => {
        this.hcoUserList.find(v => v.user_id == e.staffId).is_checked = true;

        this.hcoUserList.find(v => v.user_id == e.staffId).staffEventMapId = e.staffEventMapId;
        this.staffListID.push({
          staffEventMapId: e.staffEventMapId, staffId: e.staffId,
          active_flag: 'A'
        })
      })

      // In specific view showing only selected user
      if (this.specificEventDetails?.modalType == 'view') {
        this.hcoUserList = this.hcoUserList.filter(v => v.is_checked == true);
      }

    });

    //facilitatorDetails.facilitatorInfo manipulation
    if (this.specificEventDetails?.facilitatorList?.length > 0) {
      this.specificEventDetails?.facilitatorList.forEach(x => {
        this.facilitatorDetails.facilitatorInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        })
        // console.log(this.facilitatorDetails.facilitatorInfo);

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

    //stakeHolderDetails.stakeHolderInfo manipulation
    if (this.specificEventDetails?.stakeHolderList?.length > 0) {
      this.specificEventDetails?.stakeHolderList.forEach(x => {
        this.stakeHolderDetails.stakeHolderInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        })
        // console.log(this.stakeHolderDetails.stakeHolderInfo);

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

    //prerequisite details API called for getting issuesList & designationList
    let getEventPreRequisiteReg = { dataAccessDTO: this.httpService.dataAccessDTO, event_type_master_id: null };
    this.loader = false;
    this.eventService.getEventPreRequisite(getEventPreRequisiteReg).subscribe((res: Response) => {
      this.loader = true;
      // console.log(res.responseObject.issueList);
      this.issuesList = res.responseObject.issueList.filter(x => x.eventTypeMasterId == eventTypeMasterId);
      // console.log(this.issuesList, 'issuesList');
      this.designationList = res.responseObject.designationList;
      console.log(res, 'designationList')
    });

    // event_is_special == 'N' refers to school event
    if (this.event_is_special == 'N') {
      let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        // console.log(this.villagesOfBranch, 'villagesOfBranch');
      });

      this.attendeeDetails.attendeeInfo = [];

      // attendeeDetails.attendeeInfo manipulation
      if (this.specificEventDetails?.attendeeList) {
        this.specificEventDetails?.attendeeList.forEach(x => {
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

      // class list for primary & adolescent school goers
      this.classList = [];
      if (eventTypeMasterId == 1) {
        this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5')
      } else if (eventTypeMasterId == 2) {
        this.classList.push('8', '9', '10', '11', '12')
      }

    }

    // event_is_special == 'Y' refers to special event
    if (this.event_is_special == 'Y') {
      // specialGuestDetails.guestsInfo manipulation
      if (this.specificEventDetails?.specialGuestList?.length > 0) {
        this.specificEventDetails?.specialGuestList.forEach(x => {
          this.specialGuestDetails.guestsInfo.push({
            specialGuestMapId: x.specialGuestMapId,
            name: x.name,
            designationId: x.designationId,
            active_flag: 'A'
          })
          // console.log(this.stakeHolderDetails.stakeHolderInfo);

        })
      } else {
        this.specialGuestDetails.guestsInfo = [];
        this.specialGuestDetails.guestsInfo.push({
          specialGuestMapId: 0,
          name: '',
          designationId: '',
          active_flag: 'A'
        });
      }


      if (this.specificEventDetails?.rallyOrSeminarDetails) {
        this.specificEventDetails?.rallyOrSeminarDetails.date ? this.createEventRegisterForm.controls['village'].setValue('allFamilies') : ''
        this.getSimpleListOfVillagesOfABranch();
        this.onEditfamiliesWithStatusOfVillage = this.specificEventDetails?.rallyOrSeminarDetails.familyList?.map(({
          is_checked = true, active_flag = 'A',
          ...rest
        }) => ({
          is_checked, active_flag,
          ...rest
        }));
        this.setStatusForAll(this.onEditfamiliesWithStatusOfVillage);
        this.familiesWithStatusOfVillage = this.onEditfamiliesWithStatusOfVillage;
        this.familiesListID = this.onEditfamiliesWithStatusOfVillage;
        console.log(this.specificEventDetails?.rallyOrSeminarDetails.familyList);

        console.log(this.familiesWithStatusOfVillage, 'this.familiesWithStatusOfVillage');
      }

      if (!this.createEventRegisterForm.value.rallySeminarDate) {
        this.createEventRegisterForm.controls['village'].disable();
      } else {
        this.createEventRegisterForm.controls['village'].enable();
      }

      if (this.specificEventDetails?.rallyOrSeminarDetails?.ssList?.length > 0) {
        this.getAllSsOfARegion();
      }


    }
  }

  //change Rally date manipulation
  changeDateOfRally(value) {
    this.createEventRegisterForm.controls['village'].setValue('');
    this.familiesWithStatusOfVillage = [];
    this.specialEventVillList = [];
    this.familiesListID = [];
    if (value) {
      this.createEventRegisterForm.controls['village'].enable();
      this.getSimpleListOfVillagesOfABranch();
    } else {
      this.createEventRegisterForm.controls['village'].disable();
      this.familiesWithStatusOfVillage = [];
      this.specialEventVillList = [];
      this.familiesListID = [];
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeBlock(blockId) {
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
  }

  changeGp(gpId) {
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    this.createEventRegisterForm.controls.gram.setValue('');
  }

  restrictTypeOfDate() {
    return false;
  }

  //select multiple staff manipulation
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
    if (this.specificEventDetails?.eventTypeMasterId) {
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
    if (this.specificEventDetails?.eventTypeMasterId) {
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
    if (this.specificEventDetails?.eventTypeMasterId) {
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

  disableSchoolEvent() {

    let flag = true;
    let x = this.createEventRegisterForm.value;

    if (!x.eventType && !this.specificEventDetails?.eventTypeMasterId) {
      flag = false
    }

    if ((x.eventType == 1 || this.specificEventDetails?.eventTypeMasterId == 1) ||
      (x.eventType == 2 || this.specificEventDetails?.eventTypeMasterId == 2)) {
      if (!x.schoolName) {
        flag = false
      } else if (this.createEventRegisterForm.value.schoolName.trim().length < 3) {
        flag = false
      } else if (!x.schoolType) {
        flag = false
      } else if (!x.gram) {
        flag = false
      } else if (!x.eventDate && !this.specificEventDetails?.eventDate) {
        flag = false
      } else if (!x.issueType) {
        flag = false
      }

      if (this.hcoUserList?.filter(x => x.is_checked == true).length == 0) {
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

      // if (!this.url1 && !this.url2 && !this.url3 && !this.url4) {
      //   flag = false;
      // }
    }
    return flag;
  }

  saveUpdateSchoolEvent() {
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
      eventRegisterSchoolId: this.specificEventDetails?.eventRegisterSchoolId ? this.specificEventDetails?.eventRegisterSchoolId : 0,
      eventTypeMasterId: this.specificEventDetails?.eventTypeMasterId ? this.specificEventDetails?.eventTypeMasterId : this.createEventRegisterForm.value.eventType,
      schoolPlaceBranchId: this.data.branchID,
      schoolPlaceVillageId: this.createEventRegisterForm.value.gram,
      schoolName: this.validationService.camelize(this.createEventRegisterForm.value.schoolName.trim()),
      schoolType: this.createEventRegisterForm.value.schoolType,
      eventDate: this.specificEventDetails?.eventDate ? this.specificEventDetails?.eventDate : this.createEventRegisterForm.value.eventDate,
      issueId: this.createEventRegisterForm.value.issueType,
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      attendeeList: this.attendeeDetails.attendeeInfo.filter(x => x.name),
    }

    console.log(schoolEventReq, 'schoolEventReq');
    this.loader = false;
    this.eventService.schoolEventSaveOrUpdate(schoolEventReq).subscribe((res: any) => {
      console.log(res);
      this.loader = true;
      if (res.status == true) {
        this.showSuccess('Success');
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


  //Special event functionalities begins from here...
  setEventDateTo(value) {
    console.log(this.fgdMinDate, 'fgdMinDate');
    console.log(this.fgdMaxDate, 'fgdMaxDate');

    console.log(this.rallyMaxMinDate, 'rallyMaxMinDate');

    if (!this.fgdMaxDate) {
      if (value) {
        this.toDateMin = moment(value).add(0, 'days').format('YYYY-MM-DD');
        this.createEventRegisterForm.controls['eventDateTo'].enable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      } else if (value && this.createEventRegisterForm.value.eventDateTo) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else {
        this.createEventRegisterForm.controls['eventDateTo'].disable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('')
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    } else {
      if (value) {
        this.createEventRegisterForm.controls['eventDateTo'].enable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      } else if (value && this.createEventRegisterForm.value.eventDateTo) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else {
        this.createEventRegisterForm.controls.eventDateTo.setValue('')
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    }

    if (!this.specificEventDetails) {
      this.createEventRegisterForm.controls['rallySeminarDate'].setValue('')
    }


  }

  eventDateTo(value) {
    if (!this.fgdMaxDate) {
      if (this.createEventRegisterForm.value.eventDateFrom && value) {
        this.specificEventDetails?.rallyOrSeminarDetails ? this.createEventRegisterForm.controls['rallySeminarDate'].disable()
          : this.createEventRegisterForm.controls['rallySeminarDate'].enable();
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
      } else if (!value) {
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    }

    else {
      if (this.createEventRegisterForm.value.eventDateFrom && value) {
        this.specificEventDetails?.rallyOrSeminarDetails ? this.createEventRegisterForm.controls['rallySeminarDate'].disable()
          : this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else if (!value) {
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
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
    var specialGuests = this.specialGuestDetails.guestsInfo;
    if (this.specificEventDetails?.eventTypeMasterId) {
      if (specialGuests.length != 0) {
        if (specialGuests[i].specialGuestMapId != 0) {
          specialGuests[i].active_flag = "D";
          console.log(this.specialGuestDetails.guestsInfo);
        } else {
          specialGuests.splice(i, 1);
          console.log(this.specialGuestDetails.guestsInfo);
        }
      } else {
        specialGuests.splice(i, 1);
        console.log(this.specialGuestDetails.guestsInfo);
      }
    } else {
      specialGuests.splice(i, 1);
      console.log(this.specialGuestDetails.guestsInfo);
    }
  }

  // specialEventVillList contains branch wise village list
  getSimpleListOfVillagesOfABranch() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID }
    this.loader = false;
    this.eventService.getSimpleListOfVillagesOfABranch(req).subscribe((res: any) => {
      this.loader = true;
      this.specialEventVillList = res.responseObject;

      // console.log(this.specialEventVillList, 'specialEventVillList');
    });
  }

  // familiesWithStatusOfVillage contains village wise family list
  getFamiliesWithStatusForAVillage(villageID) {
    var showVillageName = this.specialEventVillList.find(x => x.villageId == villageID)?.villageName
    if (villageID == '') { this.familiesListID = [] }

    if (villageID == 'allFamilies') {
      if (this.specificEventDetails) {
        this.familiesWithStatusOfVillage = this.onEditfamiliesWithStatusOfVillage.filter(x => x.is_checked == true)
          .concat(this.familiesListID.filter(x => x.is_checked == true))

        this.familiesWithStatusOfVillage = [...new Map(this.familiesWithStatusOfVillage.map((m) => [m.familyId, m])).values()];

      } else {
        this.familiesWithStatusOfVillage = this.familiesListID.filter(x => x.is_checked == true);

      }
    } else {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        date: this.createEventRegisterForm.value.rallySeminarDate ? this.createEventRegisterForm.value.rallySeminarDate
          : this.specificEventDetails?.rallyOrSeminarDetails?.date,
        villageId: villageID,
        eventName: this.eventName
      }
      this.loader = false;
      this.eventService.getFamiliesWithStatusForAVillage(req).subscribe((res: any) => {
        this.loader = true;
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
        console.log(this.onEditfamiliesWithStatusOfVillage);


        this.specificEventDetails?.rallyOrSeminarDetails?.familyList?.forEach(x => {
          this.familiesWithStatusOfVillage?.forEach(y => {
            if (y.familyId == x.familyId) {
              y.is_checked = true;
              y.rallySeminarFamilyMapId = x.rallySeminarFamilyMapId
            }

          })

        })

        if (this.familiesListID?.length > 0) {
          console.log(this.familiesListID);

          this.familiesListID?.forEach(y => {
            this.familiesWithStatusOfVillage?.filter(x => x.familyId == y.familyId).forEach(x => {
              x.is_checked = y.is_checked
            })
          })
        }

      })
    }

  }

  //select multiple families manipulation
  selectMultipleFamilies(e, fam) {
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
    }
    else {
      fam.is_checked = false;
    }
    console.log(this.familiesWithStatusOfVillage);

    this.familiesListID?.forEach(x => {
      if (x.familyId == fam.familyId) {
        x.is_checked = fam.is_checked
      }
    })

    if (this.specificEventDetails?.rallyOrSeminarDetails) {
      this.onEditfamiliesWithStatusOfVillage?.forEach(x => {

        if (x.familyId == fam.familyId) {
          x.is_checked = fam.is_checked
        }

      })
    }

    if (fam.is_checked == true) { this.familiesListID.push(fam) }
    this.familiesListID = this.familiesListID.filter(x => x.is_checked == true);
    this.familiesListID = this.familiesListID.concat(this.onEditfamiliesWithStatusOfVillage)
    this.familiesListID = [...new Map(this.familiesListID.map((m) => [m.familyId, m])).values()];//used to remove duplicate families


    this.familiesListID.forEach(x => {
      if (!x.rallySeminarFamilyMapId) {
        x.rallySeminarFamilyMapId = 0,
          x.active_flag = 'A'
      }
      if (x.is_checked == false && x.rallySeminarFamilyMapId != 0) {
        this.onEditfamiliesWithStatusOfVillage.find(y => y.familyId == x.familyId).active_flag = 'D'
      } else {
        x.active_flag = 'A'
      }
    })

    console.log(this.familiesListID, 'familiesListID');

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


  SSAttendedRally(value) {
    console.log(value);
    if (value == 'Y') {
      this.getAllSsOfARegion();
    } else {
      this.ssListID = []
    }
  }

  //ssListOfRegion contains region wise ss list
  getAllSsOfARegion() {
    let ssReq = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: this.data.regionID }
    this.loader = false;
    this.eventService.getAllSsOfARegion(ssReq).subscribe((res: any) => {
      this.loader = true;
      this.ssListOfRegion = res.responseObject;
      this.ssListOfRegion = this.ssListOfRegion?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));

      if (this.specificEventDetails?.rallyOrSeminarDetails) {
        this.specificEventDetails?.rallyOrSeminarDetails?.ssList.forEach(x => {
          this.ssListOfRegion.find(y => y.swasthya_sahayika_id == x.ssId).is_checked = true
          this.ssListOfRegion.find(y => y.swasthya_sahayika_id == x.ssId).rallySeminarSsMapId = x.rallySeminarSsMapId;
          this.ssListID.push({ rallySeminarSsMapId: x.rallySeminarSsMapId, ssId: x.ssId, active_flag: 'A' });
        })
      }

      if (this.specificEventDetails?.modalType == 'view') {
        this.ssListOfRegion = this.ssListOfRegion.filter(v => v.is_checked == true);
      }
      // console.log(this.ssListOfRegion, 'this.ssListOfRegion');
    })
  }

  selectMultipleSS(e, ss) {
    this.ssListID = [];
    console.log(e.target.checked, ss);
    if (e.target.checked == true) {
      ss.is_checked = true;
    }
    else {
      ss.is_checked = false;
    }
    console.log(this.ssListOfRegion, 'ssListOfRegion');

    this.ssListOfRegion.forEach(x => {
      if (x.rallySeminarSsMapId) {
        this.ssListID.push({
          rallySeminarSsMapId: x.rallySeminarSsMapId ? x.rallySeminarSsMapId : 0, ssId: x.swasthya_sahayika_id,
          active_flag: x.is_checked == false ? 'D' : 'A'
        })
      } else {
        if (x.is_checked == true)
          this.ssListID.push({ rallySeminarSsMapId: 0, ssId: x.swasthya_sahayika_id, active_flag: 'A' });
      }
    })

    console.log(this.ssListID);
  }

  disableSpecialEvent() {
    let flag = true;
    let x = this.createEventRegisterForm.value;
    if (!x.eventType && !this.specificEventDetails?.eventTypeMasterId) {
      flag = false
    } else if (!x.eventDateFrom) {
      flag = false
    } else if (!x.eventDateTo) {
      flag = false
    } else if (this.hcoUserList?.filter(x => x.is_checked == true).length == 0) {
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

    this.specialGuestDetails.guestsInfo.forEach(y => {
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

    if (this.specificEventDetails) {
      if (this.specificEventDetails?.rally == 'N' && this.specificEventDetails?.seminar == 'N' && this.specificEventDetails?.fgd == 'N') {
        flag = false
      }
    } else {
      if (x.rally != true && x.seminar != true && x.fgd != true) {
        flag = false
      }
    }



    if (x.rally == true || x.seminar == true) {
      if (!x.rallySeminarDate && !this.specificEventDetails?.rallyOrSeminarDetails?.date) {
        flag = false
      } else if (!x.rallySeminarPlace) {
        flag = false
      } else if (!x.ssAttended) {
        flag = false
      } else if (x.ssAttended == 'Y') {
        if (this.ssListID.filter(x => x.active_flag == 'A').length == 0) {
          flag = false
        }
      } else if (!x.village) {
        flag = false
      }
    }

    return flag;
  }

  saveUpdateSpecialEvent() {
    console.log(this.familiesListID);

    if (this.createEventRegisterForm.value.rally == true || this.createEventRegisterForm.value.seminar == true) {
      if (this.familiesListID.filter(x => x.is_checked == true && x.active_flag == 'A').length == 0) {
        this.showError('Please select atleast one active participant');
        return;
      }
    }


    this.facilitatorDetails.facilitatorInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })

    this.stakeHolderDetails.stakeHolderInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })

    this.specialGuestDetails.guestsInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim())
    })
    // this.specificEventDetails?.fgd 
    // this.createEventRegisterForm.controls.fgd.setValue(this.specificEventDetails?.fgd)
    console.log(this.createEventRegisterForm.value.fgd);
    console.log(this.createEventRegisterForm.value.rally);
    console.log(this.createEventRegisterForm.value.seminar);
    var fgd;

    if (this.specificEventDetails) {
      if (this.specificEventDetails?.fgdDetails?.length == 0) {
        fgd = this.createEventRegisterForm.value.fgd == true ? 'Y' : 'N'
      } else {
        fgd = this.specificEventDetails?.fgd
      }

    } else {
      if (this.createEventRegisterForm.value.fgd == true) {
        fgd = 'Y'
      } else {
        fgd = 'N'
      }
    }

    let specialEventReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.specificEventDetails?.eventRegisterSpecialId ? this.specificEventDetails?.eventRegisterSpecialId : 0,
      eventTypeMasterId: this.createEventRegisterForm.value.eventType,
      specialEventBranchId: this.data.branchID,
      startDate: this.createEventRegisterForm.value.eventDateFrom,
      endDate: this.createEventRegisterForm.value.eventDateTo,
      rally: this.createEventRegisterForm.value.rally == true ? 'Y' : 'N',
      seminar: this.createEventRegisterForm.value.seminar == true ? 'Y' : 'N',
      fgd: fgd,
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      specialGuestList: this.specialGuestDetails.guestsInfo.filter(x => x.name).length == 0 ? [] : this.specialGuestDetails.guestsInfo.filter(x => x.name),
      rallyOrSeminarDetails: {
        eventSpecialRallySeminarMapId: this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId ?
          this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId : 0,
        place: this.validationService.camelize(this.createEventRegisterForm.value.rallySeminarPlace?.trim()),
        date: this.createEventRegisterForm.value.rallySeminarDate ? this.createEventRegisterForm.value.rallySeminarDate :
          this.specificEventDetails?.rallyOrSeminarDetails?.date,
        active_flag: 'A',
        familyList: this.familiesListID,
        ssList: this.createEventRegisterForm.value.ssAttended == 'Y' ? this.ssListID : null
      }
    }


    if (this.specificEventDetails?.rallyOrSeminarDetails) {
      if (specialEventReq.rally == 'N' && specialEventReq.seminar == 'N') {
        specialEventReq.rallyOrSeminarDetails.eventSpecialRallySeminarMapId = this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId
        specialEventReq.rallyOrSeminarDetails.active_flag = 'D'
      }
    } else {
      if (specialEventReq.rally == 'N' && specialEventReq.seminar == 'N') {
        specialEventReq.rallyOrSeminarDetails = null
      }
    }

    if (this.specificEventDetails?.eventRegisterSpecialId) {
      delete specialEventReq.eventTypeMasterId
    }

    console.log(specialEventReq, 'specialEventReq');
    this.loader = false;
    this.eventService.specialEventSaveOrUpdate(specialEventReq).subscribe((res: any) => {
      this.loader = true;
      console.log(res);
      if (res.status == true) {
        this.showSuccess('success');
        this.closeDialog();
      } else {
        this.showError(res.message);
      }
    })
  }


}
