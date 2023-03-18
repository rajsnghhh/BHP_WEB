import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private sidebarService: SidebarService,
    private sattuReportService: SattuRegisterReportService) { }

  ngOnInit(): void {
    this.setCurrentDate = new Date().toJSON().slice(0, 10);
    this.reportForms();
    let projectreq = { dataAccessDTO: this.httpService.dataAccessDTO };
    this.sattuReportService.getAllProject(projectreq).subscribe((res: any) => {
      this.projectList = res.responseObject.projectList;
    });

    this.reportForm.get('date').patchValue(this.setCurrentDate);

  }

  reportForms() {
    console.log(this.setCurrentDate);

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

  changeDate(date) {
    console.log(date);

    // this.tableHeadName = "Project";
    // let projectWiseReportreq = { dataAccessDTO: this.httpService.dataAccessDTO, uptoVisitDate: this.reportForm.value.date };

    // this.sattuReportService.getSattuRegisterInfoProjectWise(projectWiseReportreq).subscribe((res: any) => {
    //   this.projectWiseReport = res.responseObject;
    //   console.log(this.projectWiseReport, 'projectWiseReport');

    // })
  }

  restrictTypeOfDate() {
    return false;
  }

  generateReport() {
    if (this.projectWiseFilter == true) {
      this.tableHeadName = "Project";
      this.loader = false;
      let projectwiseReq = { dataAccessDTO: this.httpService.dataAccessDTO, uptoVisitDate: this.reportForm.value.date };
      this.sattuReportService.getSattuRegisterInfoProjectWise(projectwiseReq).subscribe((res: any) => {
        this.loader = true;
        this.projectWiseSattuList = res.responseObject;
        console.log(this.projectWiseSattuList, 'projectWiseSattuList');
      });
    }

    else if (this.stateWiseFilter == true) {
      // if ((this.roleType != "PM") && (this.locationForm.get('state').value == "" || this.locationForm.get('district').value == "")) {
      //   this.showError("Please Select State & District");
      // } else {
      this.tableHeadName = this.reportForm.get('state').value ? this.reportForm.get('district').value
        ? this.reportForm.get('block').value
          ? this.reportForm.get('gp').value
            ? "Village" : `GP/Muni` : "Block" : "District" : "State"

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
        this.stateWiseSattuList = res.responseObject;
        console.log(this.stateWiseSattuList, 'stateWiseSattuList');
      });

    }
    // else if (this.regionWiseFilter = true) {
    //   if ((this.roleType != "PM") && (this.reportForm.get('region').value == "")) {
    //     this.showError("Please Select Region");
    //   } else {
    //     this.tableHeadName = this.reportForm.get('region').value ? "Branch" : "Region"
    //     let Dto1 = {
    //       dataAccessDTO: this.httpService.dataAccessDTO,
    //       projectMasterId: this.locationForm.get('project').value,
    //       regionMasterId: this.locationForm.get('region').value ? this.locationForm.get('region').value : ""
    //     }
    //     console.log(Dto1, 'regionWise')
    //     this.loader = false;
    //     this.http.post(`${this.httpService.baseURL}report/getBeneficiaryInfoRegionWise`, Dto1).subscribe((res: any) => {
    //       this.projectWiseBeneficiaryList = res.responseObject.projectWiseBeneficiaryList;
    //       console.log(this.projectWiseBeneficiaryList, ' this.projectWiseBeneficiaryList');
    //       this.totalPemCurrent = this.totalCount(this.projectWiseBeneficiaryList, 'pemCurrent');
    //       this.totalpemCumulative = this.totalCount(this.projectWiseBeneficiaryList, 'pemCumulative');
    //       this.lmCurrent = this.totalCount(this.projectWiseBeneficiaryList, 'lmCurrent');
    //       this.lmCumulative = this.totalCount(this.projectWiseBeneficiaryList, 'lmCumulative');
    //       this.pwCurrent = this.totalCount(this.projectWiseBeneficiaryList, 'pwCurrent');
    //       this.pwCumulative = this.totalCount(this.projectWiseBeneficiaryList, 'pwCumulative');
    //       this.totalFamilyCount = this.totalCount(this.projectWiseBeneficiaryList, 'totalFamilyCount');
    //       this.below5Current = this.totalCount(this.projectWiseBeneficiaryList, 'below5Current');
    //       this.below5Cumulative = this.totalCount(this.projectWiseBeneficiaryList, 'below5Cumulative');
    //       this.below2Current = this.totalCount(this.projectWiseBeneficiaryList, 'below2Current');
    //       this.below2Cumulative = this.totalCount(this.projectWiseBeneficiaryList, 'below2Cumulative');
    //       this.childPemCurrent = this.totalCount(this.projectWiseBeneficiaryList, 'childPemCurrent');
    //       this.childPemCumulative = this.totalCount(this.projectWiseBeneficiaryList, 'childPemCumulative');
    //       this.girl14To18Current = this.totalCount(this.projectWiseBeneficiaryList, 'girl14To18Current');
    //       this.girl14To18Cumulative = this.totalCount(this.projectWiseBeneficiaryList, 'girl14To18Cumulative');

    //       this.loader = true;
    //     }, error => {
    //       this.loader = true;
    //     });
    //   }
    // }
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
