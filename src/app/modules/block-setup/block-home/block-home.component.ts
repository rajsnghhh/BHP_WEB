import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { BlockSetupFormComponent } from '../block-setup-form/block-setup-form.component';

@Component({
  selector: 'app-block-home',
  templateUrl: './block-home.component.html',
  styleUrls: ['./block-home.component.css']
})
export class BlockHomeComponent implements OnInit {
  stateSelectForm: FormGroup;
  stateList: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  districtWiseBlockList: Array<any> = [];
  stateId: any;
  districtId: any;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private http: HttpClient, private baselineService: BaselineSurveyService, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.createForm();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
    }
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe((res: any) => {
      this.stateList = res.responseObject.stateList;
    });
  }

  openCreateBlock() {
    const dialogRef = this.dialog.open(BlockSetupFormComponent, {
      width: '500px',
      height: '350px',
      data: { editMode: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBlockList(this.districtId);
    });
  }

  openEditBlock(blockDetails) {
    console.log(blockDetails)
    const dialogRef = this.dialog.open(BlockSetupFormComponent, {
      width: '530px',
      height: '350px',
      data: { editMode: true, blockInfo: blockDetails }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBlockList(this.districtId);
    });
  }

  createForm() {
    this.stateSelectForm = this.fb.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }

  changeState(value) {
    this.stateId = value;
    console.log(this.stateId)
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: this.stateId
    }
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
    this.stateSelectForm.controls.district.setValue('');
    if (!this.stateSelectForm.value.state) {
      this.districtWiseBlockList = [];
      this.stateWiseDistrictList = [];
    }
  }

  changeDistrict(value) {
    this.districtId = value
    this.getBlockList(this.districtId);
    if (!this.stateSelectForm.value.district) {
      this.districtWiseBlockList = [];
    }
  }

  getBlockList(districtId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      districtMasterId: districtId
    }
    this.http.post(`${this.httpService.baseURL}block/getListOfAllBlock`, Dto).subscribe((res: any) => {
      this.districtWiseBlockList = res.responseObject?.blockList;
    });
  }

  onDelete(blockDetails) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      blockMasterId: blockDetails.blockMasterId
    }
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}block/deleteBlock`, Dto).subscribe((res: any) => {
        if (res.status) {
          this.showSuccess(res.message);
          this.getBlockList(this.districtId);
        } else {
          this.showError(res.message)
        }
      })
    }).catch(() => '');
  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
