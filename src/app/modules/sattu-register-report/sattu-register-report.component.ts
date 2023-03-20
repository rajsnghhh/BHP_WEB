import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SattuRegisterReportService } from './sattu-register-report.service';

@Component({
  selector: 'app-sattu-register-report',
  templateUrl: './sattu-register-report.component.html',
  styleUrls: ['./sattu-register-report.component.css']
})
export class SattuRegisterReportComponent {
  loader: boolean = true;
  reportForm: FormGroup;
  tableHeadName: any;
  projectList: Array<any> = [];
  projectWiseReport: Array<any> = [];
  stateWiseDistrictList: Array<any> = [];
  stateList: Array<any> = [];
  blockList: Array<any> = [];
  gpList: Array<any> = [];
  regionList: Array<any> = [];
  selectFilter: boolean = false;
  projectWiseFilter: boolean = false;
  stateWiseFilter: boolean = false;
  regionWiseFilter: boolean = false;
  setCurrentDate: any;
  projectWiseSattuList: Array<any> = [];
  stateWiseSattuList: Array<any> = [];
  regionWiseSattuList: Array<any> = [];
  showSelectionWiseSattuList: Array<any> = [];
  totalCountArray: Array<any> = [];;
  maxDate: any;
  famTrained = 0;
  regularFam = 0;
  irregularFam = 0;
  NPTotalCount = 0;
  financialCount = 0;
  timeConstraintsCount = 0;
  notInterestedCount = 0;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private sidebarService: SidebarService, private router: Router,
    private sattuReportService: SattuRegisterReportService) { }

  ngOnInit(): void {
    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 6)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 282)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register-report']) : this.router.navigate(['/error']);

    this.setCurrentDate = new Date().toJSON().slice(0, 10);
    this.reportForms();
    let projectreq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.sattuReportService.getAllProject(projectreq).subscribe((res: any) => {
      this.projectList = res.responseObject.projectList;
    });

    this.reportForm.get('date').patchValue(this.setCurrentDate);
    this.maxDate = moment(new Date()).format("YYYY-MM-DD");
  }

  reportForms() {
    this.reportForm = this.fb.group({
      project: ['', Validators.required],
      date: ['', Validators.required],
      stateOrRegion: [''],
      state: [''],
      district: [''],
      block: [''],
      gp: [''],
      region: ['']
    });
  }

  get f() {
    return this.reportForm.controls;
  }

  changeProject(projectId) {
    this.showSelectionWiseSattuList = [];
    if (projectId != '' && projectId != 'all') {
      this.selectFilter = true;
      this.tableHeadName = "";
      this.projectWiseFilter = false;
    } else {
      this.projectWiseFilter = true;
      this.selectFilter = false;
    }
    this.stateWiseFilter = false;
    this.regionWiseFilter = false;
    this.reportForm.controls.state.setValue('');
    this.reportForm.controls.district.setValue('');
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    this.reportForm.controls.region.setValue('');
    this.reportForm.controls.stateOrRegion.setValue('');
  }

  checkStateOrRegion(value) {
    this.showSelectionWiseSattuList = [];
    if (value == 'stateWise') {
      this.stateWiseFilter = true;
      this.regionWiseFilter = false;

      let stateReq = { dataAccessDTO: this.httpService.dataAccessDTO };
      this.sattuReportService.getListOfAllStates(stateReq).subscribe((res: any) => {
        this.stateList = res.responseObject.stateList;
      });
      this.regionList = [];
      this.reportForm.controls.region.setValue('');
      this.reportForm.controls['district'].disable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
    } else {
      this.stateWiseFilter = false;
      this.regionWiseFilter = true;
      let regionReq = { dataAccessDTO: this.httpService.dataAccessDTO };
      this.sattuReportService.getListOfRegionsOfUser(regionReq).subscribe((res: any) => {
        this.regionList = res.responseObject;
      });
      this.stateList = [];
      this.reportForm.controls.state.setValue('');
      this.reportForm.controls.district.setValue('');
      this.reportForm.controls.block.setValue('');
      this.reportForm.controls.gp.setValue('');
    }
  }

  changeState(stateId) {
    this.showSelectionWiseSattuList = [];
    let districtBlockReq = { dataAccessDTO: this.httpService.dataAccessDTO, stateId: stateId };
    this.sattuReportService.getListOfDistrictAndBlock(districtBlockReq).subscribe((res: any) => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
    this.reportForm.controls.district.setValue('');
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.state) {
      this.reportForm.controls['district'].disable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
      this.stateWiseDistrictList = [];
      this.blockList = [];
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
    }
  }

  changeDistrict(value) {
    this.showSelectionWiseSattuList = [];
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.district) {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
      this.blockList = [];
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].disable();
    }
  }

  changeBlock(blockId) {
    this.showSelectionWiseSattuList = [];
    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.block) {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].disable();
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].enable();
    }
  }

  changeGP(GPId) {
    this.showSelectionWiseSattuList = [];
  }

  restrictTypeOfDate() {
    return false;
  }

  totalCount(arr, key) {
    let x = 0;
    arr.filter(i => { x += i[key] })
    return x;
  }

  generateReport() {
    if (!this.reportForm.value.project) {
      this.showError('Please select a project');
      return;
    } else if (!this.reportForm.value.date) {
      this.showError('Please select a date');
      return;
    }
    if (this.projectWiseFilter == true) {
      this.tableHeadName = "Project";
      this.loader = false;
      let projectwiseReq = { dataAccessDTO: this.httpService.dataAccessDTO, uptoVisitDate: this.reportForm.value.date };
      this.sattuReportService.getSattuRegisterInfoProjectWise(projectwiseReq).subscribe((res: any) => {
        this.loader = true;
        if (res.responseObject?.length == 0) {
          this.showError('No Data Found !')
        }
        this.projectWiseSattuList = res.responseObject;
        console.log(this.projectWiseSattuList, 'projectWiseSattuList');
        this.showSelectionWiseSattuList = this.projectWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showprojectWiseSelection');
        this.countFunction(this.projectWiseSattuList);
      });
    }

    else if (this.stateWiseFilter == true) {
      // if ((this.roleType != "PM") && (this.locationForm.get('state').value == "" || this.locationForm.get('district').value == "")) {
      //   this.showError("Please Select State & District");
      // } else {
      this.tableHeadName = this.reportForm.get('state').value ? this.reportForm.get('district').value
        ? this.reportForm.get('block').value
          ? this.reportForm.get('gp').value
            ? "Village" : `GP/Municipality` : "Block" : "District" : "State"

      this.loader = false;
      let statewiseReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.reportForm.get('project').value,
        stateMasterId: this.reportForm.get('state').value ? this.reportForm.get('state').value : null,
        districtMasterId: this.reportForm.get('district').value ? this.reportForm.get('district').value : null,
        blockMasterId: this.reportForm.get('block').value ? this.reportForm.get('block').value : null,
        gpMuncipalId: this.reportForm.get('gp').value ? this.reportForm.get('gp').value : null,
        uptoVisitDate: this.reportForm.value.date
      };
      console.log(statewiseReq);

      this.sattuReportService.getSattuRegisterInfoStateWise(statewiseReq).subscribe((res: any) => {
        this.loader = true;
        if (res.responseObject?.length == 0) {
          this.showError('No Data Found !')
        }
        this.stateWiseSattuList = res.responseObject;
        console.log(this.stateWiseSattuList, 'stateWiseSattuList');
        this.showSelectionWiseSattuList = this.stateWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showstateWiseSelection');
        this.countFunction(this.stateWiseSattuList);
      });

    }

    else if (this.regionWiseFilter = true) {
      // if ((this.roleType != "PM") && (this.reportForm.get('region').value == "")) {
      //   this.showError("Please Select Region");
      // } else {
      this.tableHeadName = this.reportForm.get('region').value ? "Branch" : "Region"

      let regionwiseReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.reportForm.get('project').value,
        regionMasterId: this.reportForm.get('region').value ? this.reportForm.get('region').value : null,
        uptoVisitDate: this.reportForm.value.date
      };
      this.loader = false;
      this.sattuReportService.getSattuRegisterInfoRegionWise(regionwiseReq).subscribe((res: any) => {
        this.loader = true;
        if (res.responseObject.length == 0) {
          this.showError('No Data Found !')
        }
        this.regionWiseSattuList = res.responseObject;
        console.log(this.regionWiseSattuList, 'regionWiseSattuList');
        this.showSelectionWiseSattuList = this.regionWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showregionWiseSelection');
        this.countFunction(this.regionWiseSattuList);
      });
    }
    // }
  }

  countFunction(arr) {
    arr = arr.map(({ stats, ...object }) => ({ ...object, ...stats }));
    arr = arr.map(({ notPreparingSattuDetails, ...object }) => ({ ...object, ...notPreparingSattuDetails }));
    console.log(arr);

    this.famTrained = this.totalCount(arr, 'noOfFamiliesTrainedForSattuMaking');
    this.regularFam = this.totalCount(arr, 'noOfFamiliesPreparingSattuRegularly');
    this.irregularFam = this.totalCount(arr, 'noOfFamiliesPreparingSattuIrregularly');
    this.NPTotalCount = this.totalCount(arr, 'noOfFamilies');
    this.financialCount = this.totalCount(arr, 'notPreparingSattuForFinancialReasons');
    this.timeConstraintsCount = this.totalCount(arr, 'notPreparingSattuForTimeConstraints');
    this.notInterestedCount = this.totalCount(arr, 'notPreparingSattuForNoInterest');
  }

  changeDate(e) {
    if (e == '') {
      this.showSelectionWiseSattuList = []
    }

  }

  showSuccess(message) {
    this.toaster.success(message, 'Sattu Register Report', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Sattu Register Report', {
      timeOut: 3000,
    });
  }

}
