import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventRegisterService } from '../event-register.service';
import { ValidationService } from '../../shared/services/validation.service';
import { HttpService } from '../../core/http/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-focused-group-discussion',
  templateUrl: './focused-group-discussion.component.html',
  styleUrls: ['./focused-group-discussion.component.css']
})
export class FocusedGroupDiscussionComponent {
  loader: boolean = true;
  FGDForm: FormGroup;
  gpList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  villageList: Array<any> = [];
  ssListOfBranch: Array<any> = [];
  searchFullscreen: boolean;
  familySearch: any;
  familiesWithStatusOfVillage: Array<any> = [];
  showVillageName: any;
  ssListID: Array<any> = [];
  familiesListID: Array<any> = [];
  specialFromDate: any;
  specialTodate: any;
  modalType: any;
  capturedImagesList: Array<any> = [];
  eventName: any;
  eventTypeLists: Array<any> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FocusedGroupDiscussionComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    // data variable containing necessary details for creating FGD 
    console.log(this.data);
    this.eventList()
    this.modalType = this.data?.fgdDetails?.modalType
    this.capturedImagesList = this.data?.fgdDetails?.imageList

    //specialFromDate, specialTodate, currentDate are the variables used for date validation
    this.specialFromDate = this.data?.special?.startDate
    this.specialTodate = this.data?.special?.endDate
    let currentDate = new Date().toJSON().slice(0, 10);
    if (this.specialTodate > currentDate) {
      this.specialTodate = currentDate
    }
    console.log(this.specialFromDate, 'this.specialFromDate ');
    console.log(this.specialTodate, 'this.specialTodate');


    //Branch wise village list
    let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
    this.loader = false;
    this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch);
    });

    this.FGDFormGroup();
  }

  // Event list called here for getting selected event name
  eventList() {
    let eventListReq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.loader = false;
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.loader = true;
      this.eventTypeLists = res.responseObject;
      this.eventName = this.eventTypeLists.find(x => x.eventTypeMasterId == this.data?.special?.eventTypeMasterId)?.eventName;

      console.log(this.eventName);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  //FGD Form with the formcontrols used in creating & updating form
  FGDFormGroup() {
    var x = this.data.fgdDetails;
    var ssAttended;
    if (x?.ssList?.length > 0) {
      ssAttended = 'Y'
      this.getAllSsOfABranch();
    } else {
      ssAttended = 'N'
    }

    this.FGDForm = this.fb.group({
      fgdDate: [x?.dateOfFgd ? x?.dateOfFgd : '', Validators.required],
      block: [x?.blockId ? x?.blockId : '', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      ssAttended: [ssAttended ? ssAttended : '', Validators.required]

    });

    setTimeout(() => {
      if (this.data.fgdDetails) {
        this.changeBlock(x?.blockId)
        this.FGDForm.controls.gp.setValue(x.gpId)
        this.changeGp(x?.gpId);
        this.FGDForm.controls.gram.setValue(x.villageId)
        this.beneficiaryAttendedList(x.villageId)
        this.FGDForm.controls['fgdDate'].disable();
        this.FGDForm.controls['block'].disable();
        this.FGDForm.controls['gp'].disable();
        this.FGDForm.controls['gram'].disable();
        if (this.modalType == 'view') {
          this.FGDForm.controls['ssAttended'].disable()
        }
      }
    }, 200);

    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
    }
    return this.FGDForm.markAllAsTouched();
  }

  get l() {
    return this.FGDForm.controls
  }

  restrictTypeOfDate() {
    return false;
  }

  changeBlock(blockId) {
    console.log(true);

    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;

    this.FGDForm.controls.gp.setValue('');
    this.FGDForm.controls.gram.setValue('');
    this.villageList = [];
    this.familiesWithStatusOfVillage = []
    this.familiesListID = []
  }

  changeGp(gpId) {
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList);

    this.FGDForm.controls.gram.setValue('');
    this.familiesWithStatusOfVillage = []
    this.familiesListID = []
  }


  // blocking & unblocking formcontrols on the basis of FGD date
  dateOfFGD(date) {
    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
      this.FGDForm.controls.block.setValue('');
      this.FGDForm.controls.gp.setValue('');
      this.FGDForm.controls.gram.setValue('');
      this.familiesWithStatusOfVillage = []
      this.familiesListID = []
    } else {
      this.FGDForm.controls['block'].enable();
      this.FGDForm.controls['gp'].enable();
      this.FGDForm.controls['gram'].enable();
    }
  }

  // Select unselect SS from SSlist 
  SSAttendedRally(value) {
    // if value is 'Y' then only ss list called else if available ss list set active_flag = 'D'

    if (value == 'Y') {
      this.getAllSsOfABranch();
    }
    else {
      if (this.data?.fgdDetails?.ssList) {
        this.ssListID.forEach(x => {
          if (x.fgdSsMapId) {
            x.active_flag = 'D'
          }
        })
        this.ssListID = this.ssListID.filter(x => x.active_flag == 'D');

      } else {
        this.ssListID = []
      }
    }
  }

  //Branch wise SS List
  getAllSsOfABranch() {
    this.ssListID = []
    let ssReq = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID }
    this.loader = false;
    this.eventService.getAllSsOfABranchSimpler(ssReq).subscribe((res: any) => {
      this.loader = true;
      this.ssListOfBranch = res.responseObject?.ssDtoList;
      this.ssListOfBranch = this.ssListOfBranch?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));

      if (this.data?.fgdDetails?.ssList) {
        this.data?.fgdDetails?.ssList.forEach(x => {
          this.ssListOfBranch.forEach(y => {
            if (y.ssId == x.ssId) {
              y.is_checked = true
              y.fgdSsMapId = x.fgdSsMapId
            }
          })
          //ssListID Array list variable used for manipulation of selected SS
          this.ssListID.push({ fgdSsMapId: x.fgdSsMapId, ssId: x.ssId, active_flag: 'A' });
        })
      }

      // In details view part, only showing selected ss 
      if (this.data?.fgdDetails?.modalType == 'view') {
        this.ssListOfBranch = this.ssListOfBranch.filter(v => v.is_checked == true);
      }

      console.log(this.ssListOfBranch, 'ssListOfBranch');
    })
  }

  //check uncheck SS
  selectMultipleSS(e, ss) {
    this.ssListID = [];
    console.log(e.target.checked, ss);
    if (e.target.checked == true) {
      ss.is_checked = true;
    }
    else {
      ss.is_checked = false;
    }
    console.log(this.ssListOfBranch, 'ssListOfBranch');

    this.ssListOfBranch.forEach(x => {
      if (x.fgdSsMapId) {
        this.ssListID.push({
          fgdSsMapId: x.fgdSsMapId ? x.fgdSsMapId : 0, ssId: x.ssId,
          active_flag: x.is_checked == false ? 'D' : 'A'
        })
      } else {
        if (x.is_checked == true) {
          this.ssListID.push({ fgdSsMapId: 0, ssId: x.ssId, active_flag: 'A' });
        }
      }

    })

    console.log(this.ssListID);
  }

  // getFamilies list With status of a Village
  beneficiaryAttendedList(villageID) {
    if (villageID == '') { this.familiesListID = [] }
    this.showVillageName = this.villageList.find(x => x.villageMasterId == villageID)?.villageName

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      date: this.FGDForm.value.fgdDate,
      villageId: villageID,
      eventName: this.eventName
    }
    this.loader = false;
    this.eventService.getFamiliesWithStatusForAVillage(req).subscribe((res: any) => {
      this.loader = true;

      if (res?.responseObject?.childList == null && res?.responseObject?.familyList != null) {
        this.familiesWithStatusOfVillage = res?.responseObject?.familyList
      } else if (res?.responseObject?.childList != null && res?.responseObject?.familyList == null) {
        this.familiesWithStatusOfVillage = res?.responseObject?.childList
      } else if (res?.responseObject?.childList != null && res?.responseObject?.familyList != null) {
        this.familiesWithStatusOfVillage = res?.responseObject?.familyList?.concat(res?.responseObject?.childList)
      }
      console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');


      this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage?.map(({
        setStatus = '', is_checked = false, fgdChildMapId = 0, active_flag = "A",
        ...rest
      }) => ({
        setStatus, is_checked, fgdChildMapId, active_flag,
        ...rest
      }));

      //setStatusForAll function for showing status of all families
      this.setStatusForAll(this.familiesWithStatusOfVillage);
      console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');
      console.log(this.data?.fgdDetails?.familyList);

      if (this.data.fgdDetails) {
        this.data.fgdDetails.familyList.forEach(x => {
          this.familiesWithStatusOfVillage.forEach(y => {
            if (y.familyId == x.familyId && y.childId == null) {
              y.is_checked = true;
              y.fgdFamilyMapId = x.fgdFamilyMapId
            }
          })
        })
        this.data.fgdDetails.childList.forEach(x => {
          this.familiesWithStatusOfVillage.forEach(y => {
            if (y.childId == x.childId) {
              y.is_checked = true;
              y.fgdChildMapId = x.fgdChildMapId
            }
          })
        })

      }

      this.familiesListID = this.familiesWithStatusOfVillage
      console.log(this.familiesListID, '11');


      //In view part showing only selected families
      if (this.data?.fgdDetails?.modalType == 'view') {
        this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage.filter(v => v.is_checked == true);
      }

    })

  }


  //Set PW,PEM,LM,2-5YR,Adol Status
  setStatusForAll(familys: any) {
    familys?.forEach(family => {
      if (family?.childId == null) {
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
      } else {
        family.setStatus = "AG"
      }
    });
  }

  //multiple families manipulation
  selectMultipleFamilies(e, fam) {
    // this.familiesListID = [];
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
    }
    else {
      fam.is_checked = false;
    }

    // this.familiesListID.push(fam)


    this.familiesListID.forEach(x => {
      if (x.childId == null) {
        if (!x.fgdFamilyMapId) {
          x.fgdFamilyMapId = 0,
            x.active_flag = 'A'
        }
        if (x.is_checked == false && x.fgdFamilyMapId != 0) {
          x.active_flag = 'D'
        } else {
          x.active_flag = 'A'
        }
      } else {
        if (!x.fgdChildMapId) {
          x.fgdChildMapId = 0,
            x.active_flag = 'A'
        }

        if (x.is_checked == false && x.fgdChildMapId != 0) {
          x.active_flag = 'D'
        } else {
          x.active_flag = 'A'
        }
      }
    })




    // this.familiesWithStatusOfVillage.forEach(x => {
    //   if (x.fgdFamilyMapId) {
    //     this.familiesListID.push(x)
    //     // x.active_flag = x.is_checked == false ? 'D' : 'A'
    //     // this.familiesListID.push({
    //     //   fgdFamilyMapId: x.fgdFamilyMapId ? x.fgdFamilyMapId : 0, familyId: x.familyId, pregnantWoman: x.pregnantWoman,
    //     //   lactatingMother: x.lactatingMother, twoToFive: x.twoToFive, pem: x.pem, adolescentGirl: x.adolescentGirl,
    //     //   active_flag: x.is_checked == false ? 'D' : 'A'
    //     // })
    //   } else {
    //     if (x.is_checked == true)
    //       this.familiesListID.push(x)
    //     // this.familiesListID.push({
    //     //   fgdFamilyMapId: 0, familyId: x.familyId, pregnantWoman: x.pregnantWoman,
    //     //   lactatingMother: x.lactatingMother, twoToFive: x.twoToFive, pem: x.pem, adolescentGirl: x.adolescentGirl, active_flag: 'A'
    //     // });
    //   }
    // })

    console.log(this.familiesListID);
  }

  // save button should be disabled before selecting all necessary fields
  fgdSaveDisabled() {
    let flag = true;

    if (!this.FGDForm.value.fgdDate && !this.data?.fgdDetails?.dateOfFgd) {
      flag = false
    } else if (!this.FGDForm.value.gram && !this.data?.fgdDetails?.villageId) {
      flag = false
    } else if (!this.FGDForm.value.ssAttended) {
      flag = false
    } else if (this.FGDForm.value.ssAttended == 'Y') {
      if (this.ssListID.filter(x => x.active_flag == 'A').length < 1) {
        flag = false
      }
    }

    // console.log(this.familiesListID);
    if (this.familiesListID.filter(y => y.active_flag == 'A' && y.is_checked == true).length < 1) {
      flag = false
    }

    return flag;
  }

  //function for save & update FGD
  saveOrUpdateFGD() {
    let saveORUpdateObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.data?.special?.eventRegisterSpecialId,
      eventSpecialFgdMapId: this.data?.fgdDetails?.eventSpecialFgdMapId ? this.data?.fgdDetails?.eventSpecialFgdMapId : 0,
      villageId: this.data?.fgdDetails?.villageId ? this.data?.fgdDetails?.villageId : this.FGDForm.value.gram,
      dateOfFgd: this.data?.fgdDetails?.dateOfFgd ? this.data?.fgdDetails?.dateOfFgd : this.FGDForm.value.fgdDate,
      active_flag: 'A',
      familyList: this.familiesListID.filter(v => (v.childId == null && v.is_checked == true) || (v.childId == null && v.active_flag == "D")),
      childList: this.familiesListID.filter(v => (v.childId != null && v.is_checked == true) || (v.childId != null && v.active_flag == "D")),
      ssList: this.ssListID
    }

    console.log(saveORUpdateObj, 'saveORUpdateObj');
    this.loader = false;
    this.eventService.saveOrUpdateFgd(saveORUpdateObj).subscribe((res: any) => {
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

  showSuccess(message) {
    this.toaster.success(message, 'FGD', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'FGD', {
      timeOut: 3000,
    });
  }
}