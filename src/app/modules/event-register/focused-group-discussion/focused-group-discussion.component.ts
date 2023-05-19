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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FocusedGroupDiscussionComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, private fb: FormBuilder,
    public validationService: ValidationService, private toaster: ToastrService) {
    dialogRef.disableClose = true;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.FGDFormGroup();
    let villageReg = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID };
    this.loader = false;
    this.eventService.getVillagesOfBranch(villageReg).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
      // console.log(this.villagesOfBranch, 'villagesOfBranch');
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

  FGDFormGroup() {
    this.FGDForm = this.fb.group({
      fgdDate: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
      ssAttended: ['', Validators.required]
    });

    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
    }

  }

  get l() {
    return this.FGDForm.controls
  }

  restrictTypeOfDate() {
    return false;
  }

  changeBlock(blockId) {
    // console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    // console.log(this.gpList, 'gplist');

    this.FGDForm.controls.gp.setValue('');
    this.FGDForm.controls.gram.setValue('');
    this.villageList = [];
    this.familiesWithStatusOfVillage = []
  }

  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList);

    // console.log(this.villageList, 'villageList');
    this.FGDForm.controls.gram.setValue('');
    this.familiesWithStatusOfVillage = []
  }



  dateOfFGD(date) {
    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
      this.FGDForm.controls.block.setValue('');
      this.FGDForm.controls.gp.setValue('');
      this.FGDForm.controls.gram.setValue('');
      this.familiesWithStatusOfVillage = []
    } else {
      this.FGDForm.controls['block'].enable();
      this.FGDForm.controls['gp'].enable();
      this.FGDForm.controls['gram'].enable();
    }
  }

  SSAttendedRally(value) {
    console.log(value);
    if (value == 'Y') {
      this.getAllSsOfABranch();
    } else {
      // this.ssListID = []
    }
  }

  getAllSsOfABranch() {
    let ssReq = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.data.branchID }
    this.eventService.getAllSsOfABranchSimpler(ssReq).subscribe((res: any) => {
      this.ssListOfBranch = res.responseObject?.ssDtoList;
      this.ssListOfBranch = this.ssListOfBranch?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));

      // if (this.specificEventDetails?.rallyOrSeminarDetails) {
      //   this.specificEventDetails?.rallyOrSeminarDetails?.ssList.forEach(x => {
      //     this.ssListOfBranch.find(y => y.swasthya_sahayika_id == x.ssId).is_checked = true
      //     this.ssListOfBranch.find(y => y.swasthya_sahayika_id == x.ssId).rallySeminarSsMapId = x.rallySeminarSsMapId;
      //     this.ssListID.push({ rallySeminarSsMapId: x.rallySeminarSsMapId, ssId: x.ssId, active_flag: 'A' });
      //   })
      // }

      console.log(this.ssListOfBranch, 'ssListOfBranch');
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
    console.log(this.ssListOfBranch, 'ssListOfBranch');

    this.ssListOfBranch.forEach(x => {
      // if (x.rallySeminarSsMapId) {
      //   this.ssListID.push({
      //     rallySeminarSsMapId: x.rallySeminarSsMapId ? x.rallySeminarSsMapId : 0, ssId: x.swasthya_sahayika_id,
      //     active_flag: x.is_checked == false ? 'D' : 'A'
      //   })
      // } else {
      if (x.is_checked == true)
        this.ssListID.push({ fgdSsMapId: 0, ssId: x.ssId, active_flag: 'A' });
      // }
    })

    console.log(this.ssListID);
  }


  beneficiaryAttendedList(villageID) {
    console.log(villageID);
    // if (villageID == '') { this.familiesListID = [] }

    // if (villageID == 'allFamilies') {
    //   if (this.specificEventDetails) {
    //     this.familiesWithStatusOfVillage = this.onEditfamiliesWithStatusOfVillage.filter(x => x.is_checked == true)
    //       .concat(this.familiesListID.filter(x => x.is_checked == true))

    //     this.familiesWithStatusOfVillage = [...new Map(this.familiesWithStatusOfVillage.map((m) => [m.familyId, m])).values()];

    //   } else {
    //     this.familiesWithStatusOfVillage = this.familiesListID.filter(x => x.is_checked == true);

    //   }
    // } else {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      date: this.FGDForm.value.fgdDate,
      villageId: villageID
    }
    this.eventService.getFamiliesWithStatusForAVillage(req).subscribe((res: any) => {
      this.familiesWithStatusOfVillage = res.responseObject;
      console.log(this.villageList);

      this.showVillageName = this.villageList.find(x => x.villageMasterId == villageID)?.villageName
      console.log(this.showVillageName);
      // this.FGDForm.controls.village.setValue(this.showVillageName)
      this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage?.map(({
        setStatus = '', is_checked = false,
        ...rest
      }) => ({
        setStatus, is_checked,
        ...rest
      }));



      this.setStatusForAll(this.familiesWithStatusOfVillage);
      console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');
      // console.log(this.onEditfamiliesWithStatusOfVillage);

    })
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


  selectMultipleFamilies(e, fam) {
    this.familiesListID = [];
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
    }
    else {
      fam.is_checked = false;
    }
    // console.log(this.familiesWithStatusOfVillage);
    this.familiesWithStatusOfVillage.filter(x => x.is_checked == true).forEach(x => {
      this.familiesListID.push({
        fgdFamilyMapId: 0, familyId: x.familyId, pregnantWoman: x.pregnantWoman,
        lactatingMother: x.lactatingMother, twoToFive: x.twoToFive, pem: x.pem, adolescentGirl: x.adolescentGirl, active_flag: 'A'
      });
    })
    // this.familiesWithStatusOfVillage.forEach(x => {
    //   // if (x.rallySeminarSsMapId) {
    //   //   this.ssListID.push({
    //   //     rallySeminarSsMapId: x.rallySeminarSsMapId ? x.rallySeminarSsMapId : 0, ssId: x.swasthya_sahayika_id,
    //   //     active_flag: x.is_checked == false ? 'D' : 'A'
    //   //   })
    //   // } else {
    //   if (x.is_checked == true)
    //     this.familiesListID.push({
    //       fgdFamilyMapId: 0, familyId: x.familyId, pregnantWoman: x.pregnantWoman,
    //       lactatingMother: x.lactatingMother, twoToFive: x.twoToFive, pem: x.pem, adolescentGirl: x.adolescentGirl, active_flag: 'A'
    //     });
    //   // }
    // })

    console.log(this.familiesListID);
  }

  saveOrUpdateFGD() {
    let saveORUpdateObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.data.specialEventID,
      eventSpecialFgdMapId: 0,
      villageId: this.FGDForm.value.gram,
      dateOfFgd: this.FGDForm.value.fgdDate,
      active_flag: 'A',
      familyList: this.familiesListID,
      ssList: this.ssListID
    }

    this.eventService.saveOrUpdateFgd(saveORUpdateObj).subscribe((res: any) => {
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