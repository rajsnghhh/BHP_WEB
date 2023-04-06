import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRecordService } from './daily-activity-record.service';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-daily-activity-record',
  templateUrl: './daily-activity-record.component.html',
  styleUrls: ['./daily-activity-record.component.css']
})
export class DailyActivityRecordComponent implements OnInit {
  darForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  regionBranchHide: boolean;
  villagesOfBranch: Array<any> = [];
  darListByStaffID: Array<any> = [];
  darListByBranchID: Array<any> = [];
  darListByRegionID: Array<any> = [];
  roleAccess: any;
  lowerRankbranchId: any;
  minToDate: any;
  maxToDate: any;
  dateWiseStaffDarDetails: Array<any> = [];
  modalContent: any;
  modalReference: any;
  dateWiseStaffDarDetailsModal: any;
  ssViewModal: any;
  viewDARByRegionBranch: Array<any> = [];
  cumUniqueOnStaffClick: any;
  loader: boolean = false;
  ssDetails: Array<any> = [];
  ssDateOrUniqueShow: any;
  totalFamilyVisitedSum = 0;
  pwCounsellingFamilySum = 0;
  lmCounsellingFamilySum = 0;
  pemCounsellingFamilySum = 0;
  generalFamilyCounselling2to5Sum = 0;
  generalFamilyCounsellingAdolescentSum = 0;
  generalFamilyOtherSum = 0;
  targetFamiliesVisitedWithSSSum = 0;
  generalFamiliesVisitedWithSSSum = 0;
  escortingFamilyToHealthCareCenterSum = 0;
  materialDistributedToFamiliesSum = 0;

  totalFamilyVisitedUnique = 0;
  pwCounsellingFamilyUnique = 0;
  lmCounsellingFamilyUnique = 0;
  lmChildrenCounsellingUnique = 0;
  pemCounsellingFamilyUnique = 0;
  redChildrenCounsellingUnique = 0;
  yellowChildrenCounsellingUnique = 0;
  generalFamilyCounselling2to5Unique = 0;
  generalFamilyCounsellingAdolescentUnique = 0;
  generalFamilyOtherUnique = 0;
  targetFamiliesVisitedWithSSUnique = 0;
  generalFamiliesVisitedWithSSUnique = 0;
  ssFollowUpAnsweredVisitedUnique = 0;
  escortingFamilyToHealthCareCenterUnique = 0;
  materialDistributedToFamiliesUnique = 0;

  constructor(private fb: UntypedFormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private httpService: HttpService, private dailyActRecord: DailyActivityRecordService,
    private toaster: ToastrService, private modalService: NgbModal, config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
    this.roleAccess = roleAccessDTO.responseObject?.RoledetailDTO?.roleShortName
    console.log(this.roleAccess);
    this.darForms();

    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      this.lowerRankbranchId = res.branchId;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;
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
        this.loader = true;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            this.loader = true;
          }
        });

        // let Dato = {
        //   dataAccessDTO: this.httpService.dataAccessDTO,
        //   branchId: res.branchId
        // }

        // this.dailyActRecord.HcoITLListOfBranch(Dato).subscribe((res: any) => {
        //   this.HcoITLList = res.responseObject;
        //   console.log(this.HcoITLList, 'HcoITLList');
        // });
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  darForms() {
    this.darForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      // hco: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });

  }

  get l() {
    return this.darForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionId');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };

    this.dailyActRecord.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res?.responseObject;
    });
    this.darForm.controls.branch.setValue('');
  }

  changeBranch() {
    this.viewDARByRegionBranch = []
  }

  fromDateExpectToDate(e) {
    this.dateWiseStaffDarDetails = [];
    this.darListByStaffID = [];
    this.viewDARByRegionBranch = [];
    this.darForm.controls.toDate.setValue('');
    if (e.target.value == '') {
      this.darForm.controls.toDate.setValue('');
    }
    console.log(e.target.value);
    this.minToDate = e.target.value;
    this.maxToDate = moment(this.addMonths(3, new Date(e.target.value))).format('YYYY-MM-DD');
    console.log(this.maxToDate, ' this.maxToDate');
  }

  addMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
  }

  toDateChange() {
    this.dateWiseStaffDarDetails = [];
    this.darListByStaffID = [];
    this.viewDARByRegionBranch = [];
    if (!this.darForm.value.fromDate) {
      this.showError('Please Select From Date');
      this.darForm.controls.toDate.setValue('');
    }
  }

  fetchReport() {
    let item = this.darForm.value;

    if (this.roleAccess == 'HCO') {
      this.viewDailyRecordByStaffId();
    } else {
      if (item.branch == 'allBranches') {
        this.viewDailyRecordByRegionId();
      }

      if (item.branch != 'allBranches') {
        this.viewDailyRecordByBranchId();
      }
    }

  }

  downloadExcelReport() {
    let item = this.darForm.value;

    if (this.roleAccess == 'HCO') {
      this.recordDownloadExcelByStaffId();
    } else {
      if (item.branch == 'allBranches') {
        this.recordDownloadExcelByRegionId();
      }

      if (item.branch != 'allBranches') {
        this.recordDownloadExcelByBranchId();
      }
    }

  }

  viewDailyRecordByStaffId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      staffMasterId: this.httpService.dataAccessDTO.userId
    }
    this.loader = false;

    console.log(obj);

    this.dailyActRecord.recordViewByStaffId(obj).subscribe((res) => {
      this.darListByStaffID = res.responseObject;
      this.loader = true;
      this.dateWiseStaffDarDetails = res.responseObject[0]?.dateWiseStaffDarDetails;
      console.log(this.darListByStaffID, 'darListByStaffID');
      console.log(this.dateWiseStaffDarDetails, 'this.dateWiseStaffDarDetails');
      if (this.darListByStaffID?.length == 0) {
        this.showError('Sorry, no data is found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });

  }

  recordDownloadExcelByStaffId() {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      staffMasterId: this.httpService.dataAccessDTO.userId
    }
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByStaffId(obj).subscribe((response: any, fileName: string) => {
      this.loader = true;
      // console.log(response.body.byteLength == 0);

      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data is found !');
      } else {
        const blob = new Blob([response.body], { type: response.headers.get('content-type') });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, { type: response.headers.get('content-type') });
        saveAs(file);
      }

    });

  }

  viewDailyRecordByBranchId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
    }
    this.loader = false;
    console.log(obj);

    this.dailyActRecord.recordViewByBranchId(obj).subscribe((res) => {
      this.loader = true;
      this.darListByBranchID = res.responseObject;
      this.viewDARByRegionBranch = res.responseObject
      console.log(this.darListByBranchID, 'darListByBranchID');
      console.log(this.viewDARByRegionBranch, 'viewDARByBranch');
      this.countFunction(this.viewDARByRegionBranch);


      if (this.darListByBranchID?.length == 0) {
        this.showError('Sorry, no data is found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }
    });

  }

  recordDownloadExcelByBranchId() {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
    }

    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByBranchId(obj).subscribe((response: any, fileName: string) => {
      this.loader = true;
      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data is found !');
      } else {
        const blob = new Blob([response.body], { type: response.headers.get('content-type') });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, { type: response.headers.get('content-type') });
        saveAs(file);
      }
    });

  }

  viewDailyRecordByRegionId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      regionMasterId: this.darForm.value.region
    }
    this.loader = false;
    console.log(obj);

    this.dailyActRecord.recordViewByRegionId(obj).subscribe((res) => {
      this.loader = true;
      this.darListByRegionID = res.responseObject;
      this.viewDARByRegionBranch = res.responseObject
      console.log(this.viewDARByRegionBranch, 'viewDARByRegion');
      console.log(this.darListByRegionID);

      if (this.darListByRegionID?.length == 0) {
        this.showError('Sorry, no data is found !');
      }

      if (res.status == false) {
        this.showError(res.message);
      }

    });

  }

  recordDownloadExcelByRegionId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      regionMasterId: this.darForm.value.region
    }
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByRegionId(obj).subscribe((response: any, fileName: string) => {
      this.loader = true;
      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data is found !');
      } else {
        const blob = new Blob([response.body], { type: response.headers.get('content-type') });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, { type: response.headers.get('content-type') });
        saveAs(file);
      }
    });

  }

  disabledFetchReport() {
    let flag = true;
    if (this.roleAccess.includes('HCO')) {
      if (!this.darForm.value.toDate) {
        flag = false;
      }
    } else {
      if (!this.darForm.value.region || !this.darForm.value.branch || !this.darForm.value.toDate) {
        flag = false;
      }
    }

    return flag;
  }

  staffClickDateWiseRecords(item, staffDateWiseRecords) {
    this.dateWiseStaffDarDetails = item.dateWiseStaffDarDetails;
    this.cumUniqueOnStaffClick = item;
    console.log(this.dateWiseStaffDarDetails, '  this.dateWiseStaffDarDetails ');
    console.log(this.cumUniqueOnStaffClick, ' this.cumUniqueOnStaffClick ');

    this.modalContent = '';
    this.dateWiseStaffDarDetailsModal = this.modalService.open(staffDateWiseRecords, {
      windowClass: 'staffDateWiseRecords',
    });

  }

  viewSSName(ssDetail, ssNames) {
    this.ssDateOrUniqueShow = ssDetail;
    console.log(this.ssDateOrUniqueShow, 'this.ssDateOrUniqueShow');

    if (ssDetail.followUpSSDetailsUnique) {
      this.ssDetails = ssDetail.followUpSSDetailsUnique;
      // console.log(1);

    } else {
      this.ssDetails = ssDetail.followUpSSDetails;
      // console.log(2);

    }
    console.log(this.ssDetails);

    this.modalContent = '';
    this.ssViewModal = this.modalService.open(ssNames, {
      windowClass: 'ssNames',
    });

  }

  ssViewModalDismiss() {
    this.ssViewModal.close();
  }

  staffDateWiseRecordsModalDismiss() {
    this.dateWiseStaffDarDetailsModal.close();
  }


  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Record', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Daily-Activity Record', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  totalCount(arr, key) {
    let x = 0;
    arr.filter(i => { x += i[key] })
    return x;
  }

  countFunction(arr) {
    //cumulative
    this.totalFamilyVisitedSum = this.totalCount(arr, 'totalFamilyVisitedSum');
    this.pwCounsellingFamilySum = this.totalCount(arr, 'pwCounsellingFamilySum');
    this.lmCounsellingFamilySum = this.totalCount(arr, 'lmCounsellingFamilySum');
    this.pemCounsellingFamilySum = this.totalCount(arr, 'pemCounsellingFamilySum');
    this.generalFamilyCounselling2to5Sum = this.totalCount(arr, 'generalFamilyCounselling2to5Sum');
    this.generalFamilyCounsellingAdolescentSum = this.totalCount(arr, 'generalFamilyCounsellingAdolescentSum');
    this.generalFamilyOtherSum = this.totalCount(arr, 'generalFamilyOtherSum');
    this.targetFamiliesVisitedWithSSSum = this.totalCount(arr, 'targetFamiliesVisitedWithSSSum');
    this.generalFamiliesVisitedWithSSSum = this.totalCount(arr, 'generalFamiliesVisitedWithSSSum');
    this.escortingFamilyToHealthCareCenterSum = this.totalCount(arr, 'escortingFamilyToHealthCareCenterSum');
    this.materialDistributedToFamiliesSum = this.totalCount(arr, 'materialDistributedToFamiliesSum');

    //unique
    this.totalFamilyVisitedUnique = this.totalCount(arr, 'totalFamilyVisitedUnique');
    this.pwCounsellingFamilyUnique = this.totalCount(arr, 'pwCounsellingFamilyUnique');
    this.lmCounsellingFamilyUnique = this.totalCount(arr, 'lmCounsellingFamilyUnique');
    this.lmChildrenCounsellingUnique = this.totalCount(arr, 'lmChildrenCounsellingUnique');
    this.pemCounsellingFamilyUnique = this.totalCount(arr, 'pemCounsellingFamilyUnique');
    this.redChildrenCounsellingUnique = this.totalCount(arr, 'redChildrenCounsellingUnique');
    this.yellowChildrenCounsellingUnique = this.totalCount(arr, 'yellowChildrenCounsellingUnique');
    this.generalFamilyCounselling2to5Unique = this.totalCount(arr, 'generalFamilyCounselling2to5Unique');
    this.generalFamilyCounsellingAdolescentUnique = this.totalCount(arr, 'generalFamilyCounsellingAdolescentUnique');
    this.generalFamilyOtherUnique = this.totalCount(arr, 'generalFamilyOtherUnique');
    this.targetFamiliesVisitedWithSSUnique = this.totalCount(arr, 'targetFamiliesVisitedWithSSUnique');
    this.generalFamiliesVisitedWithSSUnique = this.totalCount(arr, 'generalFamiliesVisitedWithSSUnique');
    this.ssFollowUpAnsweredVisitedUnique = this.totalCount(arr, 'ssFollowUpAnsweredVisitedUnique');
    this.escortingFamilyToHealthCareCenterUnique = this.totalCount(arr, 'escortingFamilyToHealthCareCenterUnique');
    this.materialDistributedToFamiliesUnique = this.totalCount(arr, 'materialDistributedToFamiliesUnique');


  }

}

