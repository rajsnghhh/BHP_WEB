import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../core/http/http.service';
import { EventRegisterService } from './event-register.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventRegisterComponent } from './create-event-register/create-event-register.component';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent {
  searchFullscreen: boolean;
  regionBranchHide: boolean;
  eventRegisterForm: FormGroup;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  lowerRankbranchId: any;
  branchOpenDate: any;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private toaster: ToastrService, public validationService: ValidationService, private httpService: HttpService,
    private eventService: EventRegisterService, public dialog: MatDialog) {
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.eventRegisterForms();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      this.lowerRankbranchId = res.branchId;
      this.branchOpenDate = !this.lowerRankbranchId ? null : res.branchLIST[0]?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate')
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId,
          },
          branchId: this.lowerRankbranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.loader = true;
            this.villagesOfBranch = res.responseObject;
          }
        });

        this.changeBranch(this.lowerRankbranchId);
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  eventRegisterForms() {
    this.eventRegisterForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }

  get l() {
    return this.eventRegisterForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.eventService.getBranchesOfRegion(req).subscribe((res) => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    // this.viewEscortReferForm.controls.branch.setValue('');
    // this.viewEscortReferForm.controls.block.setValue('');
    // this.viewEscortReferForm.controls.gp.setValue('');
    // this.viewEscortReferForm.controls.gram.setValue('');
    // this.gpList = [];
    // this.villageList = [];
    // this.villagesOfBranch = [];
    // if (this.viewEscortReferForm.value.region == '') {
    //   this.branchList = [];
    //   this.escortviewData = [];
    // }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    if (!this.lowerRankbranchId) {
      this.branchOpenDate = this.branchList.find(x => x.branchId == branchId)?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate');
    }
    // let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    // this.loader = false;
    // this.eventService.getVillagesOfBranch(req).subscribe((res) => {
    //   this.loader = true;
    //   this.villagesOfBranch = res.responseObject;
    //   console.log(this.villagesOfBranch, 'villagesOfBranch');
    // });

    // this.viewEscortReferForm.controls.block.setValue('');
    // this.viewEscortReferForm.controls.gp.setValue('');
    // this.viewEscortReferForm.controls.gram.setValue('');
    // this.gpList = [];
    // this.villageList = [];
    // this.escortviewData = [];
  }

  createEventRegister() {
    const dialogRef = this.dialog.open(CreateEventRegisterComponent, {
      width: '1100px',
      height: '570px',
      data: { branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId, branchOpenDate: this.branchOpenDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }

}

