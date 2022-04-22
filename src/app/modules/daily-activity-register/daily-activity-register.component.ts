import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { DailyActivityRegisterService } from './daily-activity-register.service';
import { HttpService } from '../core/http/http.service';

@Component({
  selector: 'app-daily-activity-register',
  templateUrl: './daily-activity-register.component.html',
  styleUrls: ['./daily-activity-register.component.css']
})

export class DailyActivityRegisterComponent implements OnInit {
  locationForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchVillageMapId: any;
  villageMasterId: any;
  hcoList: any;
  hcoId: any;
  darList: any;
  darViewFamilyList: any;
  page = 1;
  pageSize = 6;
  p: any;
  role: any;


  constructor(private fb: FormBuilder, public validationService: ValidationService, private sidebarService: SidebarService,
    private dailyActivityService: DailyActivityRegisterService, private toaster: ToastrService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;

    this.locForm();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    setTimeout(() => {
      if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
        this.dailyActivityService.villagesOfBranch(Dto).subscribe((res) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'villagesOfBranch1');
          }
        })
      }
    }, 1000);

    this.regionList = this.sidebarService.listOfRegion;

  }

  changeRegion(region) {
    let regionId = this.regionList.find((reg) => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };

    setTimeout(() => {
      this.dailyActivityService.listOfBranchesOfARegion(req).subscribe((res) => {
        this.branchList = res?.responseObject;
      },
        (error) => {
          this.branchList = null;
        }
      );
    }, 500);
    this.locationForm.controls.branch.setValue('');
    if (this.locationForm.value.region == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      // this.showError('No Data Found');
    }
  }

  changeBranch(branch) {
    this.hcoId = branch;
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }

    this.dailyActivityService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });


    if (this.locationForm.value.branch == '') {
      // this.showError('No Data Found');
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }

  }

  // changeBlock(blockname) {
  //   this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
  //   this.selectedBlock = this.locationForm.get('block').value;
  //   this.locationForm.controls.gp.setValue('');
  //   this.locationForm.controls.gram.setValue('');
  //   if (this.locationForm.value.block == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //     this.villageDtoList = [];
  //     this.gpDtoList = [];
  //   }
  // }
  // changeGp(gpName) {
  //   this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
  //   this.selectedGp = this.locationForm.get('gp').value;
  //   this.locationForm.controls.gram.setValue('');
  //   console.log(this.villageDtoList);

  //   if (this.locationForm.value.gp == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //     this.villageDtoList = [];
  //   }
  // }

  // changeVillage(villagename) {
  //   this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.branchVillageMapId;
  //   this.villageMasterId = this.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId
  //   console.log(this.villageMasterId);

  //   // this.viewPEMList();

  //   if (this.locationForm.value.gram == '') {
  //     this.showError('No Data Found');
  //     // this.pemDetails = [];
  //   }

  // }


  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });

  }

  viewDAREntryList() {

    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      // hcoId: this.hcoId,
      hcoId: this.hcoId ? this.hcoId : this.sidebarService.userId,
      startDate: this.locationForm.value.fromDate,
      endDate: this.locationForm.value.toDate,
      withVisitPurposeMap: false
    }

    console.log(obj);

    this.dailyActivityService.viewingDAREntryList(obj).subscribe((res) => {
      this.darList = res.responseObject;
      console.log(this.darList);

    })

  }


  darViewFamily(item) {
    this.darViewFamilyList = item;
    console.log(this.darViewFamilyList, 'darViewFamily');
  }

  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Daily-Activity Register', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  get l() {
    return this.locationForm.controls;
  }
}
