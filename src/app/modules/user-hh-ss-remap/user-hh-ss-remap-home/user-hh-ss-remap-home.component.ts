import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-user-hh-ss-remap-home',
  templateUrl: './user-hh-ss-remap-home.component.html',
  styleUrls: ['./user-hh-ss-remap-home.component.css']
})
export class UserHhSsRemapHomeComponent implements OnInit {
  locationForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  fromUserList: Array<any> = [];
  toUserList: Array<any> = [];
  noUserPresent: boolean = false;
  branchId: any;
  loader: boolean = true;

  constructor(private httpService: HttpService, private http: HttpClient, private fb: UntypedFormBuilder,
    private sidebarService: SidebarService, private confirmationDialogService: ConfirmationDialogService,
    private baselineService: BaselineSurveyService, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 185 || item.subFunctionMasterId == 189)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? this.router.navigate(['/user-hh-ss-remap']) : this.router.navigate(['/error']);
  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      fromUser: ['', Validators.required],
      toUser: ['', Validators.required],
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  changeRegion(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: value,
    };
    this.baselineService.listOfBranchesOfARegion(Dto).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
      },
      (error) => {
        this.branchList = null;
      }
    );
  }

  changeBranch(value) {
    this.branchId = value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    }
    if (this.branchId != '') {
      this.http.post(`${this.httpService.baseURL}branch/getListOfAllHcoITL`, Dto).subscribe((res: any) => {
        this.fromUserList = res?.responseObject;
        this.noUserPresent = (this.fromUserList.length == 0) ? true : false;
      });
    }
    this.locationForm.controls.fromUser.patchValue('');
    this.locationForm.controls.toUser.patchValue('');
    if (!this.locationForm.value.branch) {
      this.fromUserList = [];
      this.toUserList = [];
    }
  }

  changeFromUser(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    }
    if (this.branchId != '') {
      this.http.post(`${this.httpService.baseURL}branch/getListOfActiveHcoITL`, Dto).subscribe((res: any) => {
        this.toUserList = res?.responseObject.filter(item => item.user_id != value);
      });
    }
    this.locationForm.controls.toUser.patchValue('');
  }

  changeToUser(value) {

  }

  remapUser() {
    console.log(this.locationForm.value.fromUser, this.locationForm.value.toUser)
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      fromUserId: this.locationForm.value.fromUser,
      toUserId: this.locationForm.value.toUser
    }


    this.confirmationDialogService.confirm('', `Do you want to remap?`).then(() => {
      this.loader = false;
      if (this.locationForm.value.fromUser != '' && this.locationForm.value.toUser != '') {
        this.http.post(`${this.httpService.baseURL}remap/remapAllHhAndSsOfOneUserToAnother`, Dto).subscribe((res: any) => {
          if (res.status) {
            this.showSuccess(res.message);
            this.loader = true;
            this.locationForm.controls.region.patchValue('');
            this.locationForm.controls.branch.patchValue('');
            this.locationForm.controls.fromUser.patchValue('');
            this.locationForm.controls.toUser.patchValue('');
          } else {
            this.showError('Error');
            this.loader = true;
          }
        })
      }
    }).catch(() => '');

  }

  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 5000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
