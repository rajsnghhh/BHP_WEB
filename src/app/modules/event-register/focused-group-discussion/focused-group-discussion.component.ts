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
      ssAttended: ['', Validators.required],
      village: ['', Validators.required],
    });

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
  }

  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList, 'villageList');
    this.FGDForm.controls.gram.setValue('');
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
      // this.ssListOfBranch = this.ssListOfBranch?.map(({
      //   is_checked = false,
      //   ...rest
      // }) => ({
      //   is_checked,
      //   ...rest
      // }));

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

}