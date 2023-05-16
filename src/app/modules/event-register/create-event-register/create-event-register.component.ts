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
  onEditfamiliesWithStatusOfVillage: Array<any> = [];
  familiesListID: Array<any> = [];
  ssListID: Array<any> = [];
  ssListOfRegion: Array<any> = [];
  url1: any;
  url2: any;
  url3: any;
  url4: any;
  path1: any = 'No file chosen';
  path2: any = 'No file chosen';
  path3: any = 'No file chosen';
  path4: any = 'No file chosen';
  file1: any;
  file2: any;
  file3: any;
  file4: any;
  searchFullscreen: boolean;
  familySearch: any;
  capturedImagesList: any;

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
  specificEventDetails: any;
  isReadOnly: boolean;
  dialogTitle: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  // @ViewChild('fileUploader1') fileUploader1: ElementRef;

  // @ViewChild('fileUploader2') fileUploader2: ElementRef;

  // @ViewChild('fileUploader3') fileUploader3: ElementRef;

  // @ViewChild('fileUploader4') fileUploader4: ElementRef;

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    // console.log(this.data);
    this.specificEventDetails = this.data?.specificEventDetails;
    this.capturedImagesList = this.data?.specificEventDetails?.imageList;
    console.log(this.capturedImagesList, 'this.capturedImagesList');

    console.log(this.specificEventDetails, 'specificEventDetails');
    if (this.specificEventDetails?.modalType == 'edit') {
      this.dialogTitle = 'Edit Event Register';
    } else if (this.specificEventDetails?.modalType == 'view') {
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


    setTimeout(() => {
      if (this.specificEventDetails?.eventTypeMasterId && this.specificEventDetails?.modalType == 'edit') {
        // console.log(true);

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
        this.createEventRegisterForm.controls['eventDateFrom'].disable();
        this.createEventRegisterForm.controls['eventDateTo'].disable();
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
        this.createEventRegisterForm.controls['rallySeminarPlace'].disable();
        return this.createEventRegisterForm.markAllAsTouched();
      }

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

  }

  get l() {
    return this.createEventRegisterForm.controls;
  }

  changeEventTypes(eventTypeMasterId) {
    if (!this.specificEventDetails?.eventTypeMasterId) {
      this.createEventRegisterForm.controls.issueType.setValue('');
    }

    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    // console.log(this.event_is_special, 'this.event_is_special');

    // console.log(this.data.branchOpenDate);
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


      this.specificEventDetails?.staffList?.forEach(e => {
        this.hcoUserList.find(v => v.user_id == e.staffId).is_checked = true;
        this.hcoUserList.find(v => v.user_id == e.staffId).staffEventMapId = e.staffEventMapId;
        this.staffListID.push({
          staffEventMapId: e.staffEventMapId, staffId: e.staffId,
          active_flag: 'A'
        })
      })
    });


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

    if (this.event_is_special == 'N') {
      let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        // console.log(this.villagesOfBranch, 'villagesOfBranch');
      });

      // this.facilitatorDetails.facilitatorInfo = [];
      // this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];

      // console.log(this.specificEventDetails?.facilitatorList);

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


      this.classList = [];
      if (eventTypeMasterId == 1) {
        this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5')
      } else if (eventTypeMasterId == 2) {
        this.classList.push('6', '7', '8', '9', '10', '11', '12')
      }

      if (this.specificEventDetails) {
        this.url1 = this.specificEventDetails?.imageList[0]?.event_school_register_image_url;
        this.path1 = this.url1
        this.url2 = this.specificEventDetails?.imageList[1]?.event_school_register_image_url;
        this.path2 = this.url2
        this.url3 = this.specificEventDetails?.imageList[2]?.event_school_register_image_url;
        this.path3 = this.url3
        this.url4 = this.specificEventDetails?.imageList[3]?.event_school_register_image_url;
        this.path4 = this.url4
      }

      // this.file1 = this.convertURLToFile(this.url1);
      // // this.path1 = this.convertURLToFile(this.url1).name;
      // this.file2 = this.convertURLToFile(this.url2);
      // // this.path2 = this.convertURLToFile(this.url2).name;
      // this.file3 = this.convertURLToFile(this.url3);
      // // this.path3 = this.convertURLToFile(this.url3).name;
      // this.file4 = this.convertURLToFile(this.url4);
      // // this.path4 = this.convertURLToFile(this.url4).name;
      // console.log(this.file1);



    }

    if (this.event_is_special == 'Y') {
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
    // console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    // console.log(this.gpList, 'gplist');

    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
  }

  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
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

  onSelectFiles(e, url, remove) {
    console.log(e.target.value, url, remove);

    if (remove == '' && e.target.value) {
      if (url == 'url1') {
        this.path1 = e.target.files[0].name;
        this.file1 = e.target.files[0]
        console.log(this.file1);

        console.log(this.path1, 'path1');
      } else if (url == 'url2') {
        this.path2 = e.target.files[0].name
        this.file2 = e.target.files[0]
        console.log(this.path2, 'path2');
      } else if (url == 'url3') {
        this.path3 = e.target.files[0].name
        this.file3 = e.target.files[0]
        console.log(this.path2, 'path3');
      } else if (url == 'url4') {
        this.path4 = e.target.files[0].name
        this.file4 = e.target.files[0]
        console.log(this.path2, 'path4');
      }
    }


    if (remove == 'remove1') {
      // this.fileUploader1.nativeElement.value = null;
      this.path1 = 'No file chosen';
      this.url1 = '';
    } else if (remove == 'remove2') {
      // this.fileUploader2.nativeElement.value = null;
      this.path2 = 'No file chosen';
      this.url2 = '';
    } else if (remove == 'remove3') {
      // this.fileUploader3.nativeElement.value = null;
      this.path3 = 'No file chosen';
      this.url3 = '';
    } else if (remove == 'remove4') {
      // this.fileUploader4.nativeElement.value = null;
      this.path4 = 'No file chosen';
      this.url4 = '';
    }

    if (!e.target.value && url == 'url1') {
      this.url1 = '';
      this.path1 = 'No file chosen';
    } else if (!e.target.value && url == 'url2') {
      this.url2 = '';
      this.path2 = 'No file chosen';
    } else if (!e.target.value && url == 'url3') {
      this.url3 = '';
      this.path3 = 'No file chosen';
    } else if (!e.target.value && url == 'url4') {
      this.url4 = '';
      this.path4 = 'No file chosen';
    }

    if (e.target.files[0].type.match('image/jpeg|image/png|image/jpg')) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        if (url == 'url1') {
          this.url1 = event.target.result;
        } else if (url == 'url2') {
          this.url2 = event.target.result;
        } else if (url == 'url3') {
          this.url3 = event.target.result;
        } else if (url == 'url4') {
          this.url4 = event.target.result;
        }
      }
    } else {
      this.showError('Wrong Format Selected')
      if (url == 'url1') {
        this.path1 = 'No file chosen';
        // this.fileUploader1.nativeElement.value = null;
        this.url1 = '';
      } else if (url == 'url2') {
        this.path2 = 'No file chosen';
        // this.fileUploader2.nativeElement.value = null;
        this.url2 = '';
      } else if (url == 'url3') {
        this.path3 = 'No file chosen';
        // this.fileUploader3.nativeElement.value = null;
        this.url3 = '';
      } else if (url == 'url4') {
        this.path4 = 'No file chosen';
        // this.fileUploader4.nativeElement.value = null;
        this.url4 = '';
      }

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

      if (!this.url1 && !this.url2 && !this.url3 && !this.url4) {
        flag = false;
      }
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

    this.eventService.schoolEventSaveOrUpdate(schoolEventReq).subscribe((res: any) => {
      console.log(res);
      console.log(this.url1);

      if (res.status == true) {
        var formdata = new FormData();
        if (this.url1) { formdata.append("images", this.file1, this.path1) }
        if (this.url2) { formdata.append("images", this.file2, this.path2) }
        if (this.url3) { formdata.append("images", this.file3, this.path3) }
        if (this.url4) { formdata.append("images", this.file4, this.path4) }
        console.log(this.url1);


        formdata.append("status", "C");
        formdata.append("eventMasterId", res.message);
        formdata.append("userId", this.httpService.dataAccessDTO.userId);

        this.eventService.imageSchoolEventSave(formdata).subscribe((res: any) => {
          if (res.status == true) {
            this.showSuccess(res.message);
            this.closeDialog();
          } else {
            this.showError(res.message);
          }
        });

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
  }

  eventDateTo(value) {
    if (this.createEventRegisterForm.value.eventDateFrom && value) {
      this.createEventRegisterForm.controls['rallySeminarDate'].enable();
    } else if (!value) {
      this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
      this.createEventRegisterForm.controls['rallySeminarDate'].disable();
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

  multipleEventsSelect(e) {
    // if (this.createEventRegisterForm.value.rally == true) {
    //   this.createEventRegisterForm.controls.rally.setValue('R')
    // } else if (this.createEventRegisterForm.value.seminar == true) {
    //   this.createEventRegisterForm.controls.seminar.setValue('S')
    // } else if (this.createEventRegisterForm.value.fgd == true) {
    //   this.createEventRegisterForm.controls.fgd.setValue('FGD')
    // }
    console.log(this.createEventRegisterForm.value.rally);
    console.log(this.createEventRegisterForm.value.seminar);
    console.log(this.createEventRegisterForm.value.fgd);

    if (this.createEventRegisterForm.value.eventDateFrom && this.createEventRegisterForm.value.eventDateTo) {
      this.createEventRegisterForm.controls['rallySeminarDate'].enable();
    } else {
      this.createEventRegisterForm.controls['rallySeminarDate'].disable();
    }
  }

  getSimpleListOfVillagesOfABranch() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID }
    this.eventService.getSimpleListOfVillagesOfABranch(req).subscribe((res: any) => {
      this.specialEventVillList = res.responseObject
      // console.log(this.specialEventVillList, 'specialEventVillList');
    });
  }

  getFamiliesWithStatusForAVillage(villageID) {
    // console.log(villageID);
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
        villageId: villageID
      }
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
        console.log(this.onEditfamiliesWithStatusOfVillage);

        //   this.onEditfamiliesWithStatusOfVillage.forEach(x => {
        //     this.familiesWithStatusOfVillage.forEach(y => {

        //    if( y.familyId == x.familyId){

        //     y.is_checked=x.is_checked;
        //     console.log(y);

        //    }
        //   })
        // })

        // if (this.onEditfamiliesWithStatusOfVillage.length > 0) {
        //   this.onEditfamiliesWithStatusOfVillage.forEach(x => {
        //     this.familiesWithStatusOfVillage.forEach(y => {
        //       if (y.familyId == x.familyId) {
        //         y.is_checked = x.is_checked
        //       }
        //     })
        //   })
        // }



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
              // if(x.active_flag=='A')
              x.is_checked = y.is_checked
            })
          })
        }

      })
    }

  }

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
        // console.log(x);

        if (x.familyId == fam.familyId) {
          x.is_checked = fam.is_checked
          console.log(x);

        }
        // console.log(x);

      })
    }

    if (fam.is_checked == true) { this.familiesListID.push(fam) }

    this.familiesListID = this.familiesListID.filter(x => x.is_checked == true);

    // this.familiesListID = this.familiesListID.concat(this.onEditfamiliesWithStatusOfVillage.filter(x => x.is_checked == true))
    this.familiesListID = this.familiesListID.concat(this.onEditfamiliesWithStatusOfVillage)

    this.familiesListID = [...new Map(this.familiesListID.map((m) => [m.familyId, m])).values()];


    this.familiesListID.forEach(x => {
      // console.log(x);
      if (!x.rallySeminarFamilyMapId) {
        x.rallySeminarFamilyMapId = 0,
          x.active_flag = 'A'
      }
      if (x.is_checked == false && x.rallySeminarFamilyMapId != 0) {
        this.onEditfamiliesWithStatusOfVillage.find(y => y.familyId == x.familyId).active_flag = 'D'
        //   this.onEditfamiliesWithStatusOfVillage.find(y => y.familyId == x.familyId).is_checked = false
        //   this.familiesWithStatusOfVillage.find(y => y.familyId == x.familyId).is_checked = false
        //   x.active_flag = 'D'
      } else {
        x.active_flag = 'A'
      }

    })


    // this.familiesListID.forEach(x => {
    //   if (x.rallySeminarFamilyMapId) {
    //     this.staffListID.push({
    //       staffEventMapId: x.staffEventMapId ? x.staffEventMapId : 0, staffId: x.user_id,
    //       active_flag: x.is_checked == false ? 'D' : 'A'
    //     })
    //   } else {
    //     if (x.is_checked == true)
    //       this.staffListID.push({ staffEventMapId: 0, staffId: x.user_id, active_flag: 'A' });
    //   }
    // })

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

  getAllSsOfARegion() {
    let ssReq = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: this.data.regionID }
    this.eventService.getAllSsOfARegion(ssReq).subscribe((res: any) => {
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
    } else if (!x.eventDateFrom && !this.specificEventDetails?.startDate) {
      flag = false
    } else if (!x.eventDateTo && !this.specificEventDetails?.endDate) {
      flag = false
    } else if (this.hcoUserList.filter(x => x.is_checked == true).length == 0) {
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

    if (x.rally != true && x.seminar != true && x.fgd != true) {
      flag = false
    }

    if (x.rally == true || x.seminar == true) {
      if (!x.rallySeminarDate && !this.specificEventDetails?.rallyOrSeminarDetails?.date) {
        flag = false
      } else if (!x.rallySeminarPlace && !this.specificEventDetails?.rallyOrSeminarDetails?.place) {
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
    if (this.familiesListID.filter(x => x.is_checked == true && x.active_flag == 'A').length == 0) {
      this.showError('Please select atleast one active participant');
      return;
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

    let specialEventReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.specificEventDetails?.eventRegisterSpecialId ? this.specificEventDetails?.eventRegisterSpecialId : 0,
      eventTypeMasterId: this.createEventRegisterForm.value.eventType,
      specialEventBranchId: this.data.branchID,
      startDate: this.specificEventDetails?.startDate ? this.specificEventDetails?.startDate : this.createEventRegisterForm.value.eventDateFrom,
      endDate: this.specificEventDetails?.endDate ? this.specificEventDetails?.endDate : this.createEventRegisterForm.value.eventDateTo,
      rally: this.createEventRegisterForm.value.rally == true ? 'Y' : 'N',
      seminar: this.createEventRegisterForm.value.seminar == true ? 'Y' : 'N',
      fgd: this.createEventRegisterForm.value.fgd == true ? 'Y' : 'N',
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      specialGuestList: this.specialGuestDetails.guestsInfo.filter(x => x.name).length == 0 ? [] : this.specialGuestDetails.guestsInfo.filter(x => x.name),
      rallyOrSeminarDetails: {
        eventSpecialRallySeminarMapId: this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId,
        place: this.createEventRegisterForm.value.rallySeminarPlace ?
          this.validationService.camelize(this.createEventRegisterForm.value.rallySeminarPlace?.trim()) :
          this.specificEventDetails?.rallyOrSeminarDetails?.place,
        date: this.createEventRegisterForm.value.rallySeminarDate,
        active_flag: 'A',
        familyList: this.familiesListID,
        ssList: this.createEventRegisterForm.value.ssAttended == 'Y' ? this.ssListID : null
      }
    }

    if (specialEventReq.rally == 'N' && specialEventReq.seminar == 'N') {
      specialEventReq.rallyOrSeminarDetails = null
    }

    if (this.specificEventDetails?.eventRegisterSpecialId) {
      delete specialEventReq.eventTypeMasterId
      delete specialEventReq.specialEventBranchId
      delete specialEventReq.startDate
      delete specialEventReq.endDate
      delete specialEventReq.rallyOrSeminarDetails.date
      delete specialEventReq.rallyOrSeminarDetails.place
      delete specialEventReq.rallyOrSeminarDetails.active_flag
    } else {
      delete specialEventReq.rallyOrSeminarDetails.eventSpecialRallySeminarMapId
    }

    console.log(specialEventReq, 'specialEventReq');

    this.eventService.specialEventSaveOrUpdate(specialEventReq).subscribe((res: any) => {
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
