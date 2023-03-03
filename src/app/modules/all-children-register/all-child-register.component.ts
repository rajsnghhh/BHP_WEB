import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BaselineSurveyService } from '../baseline-survey/baseline-survey.service';
import { HttpService } from '../core/http/http.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewMuaclistComponent } from './view-muaclist/view-muaclist.component';
import { AddChildMuacComponent } from './add-child-muac/add-child-muac.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ValidationService } from '../shared/services/validation.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-child-register',
  templateUrl: './all-child-register.component.html',
  styleUrls: ['./all-child-register.component.css']
})
export class AllChildRegisterComponent implements OnInit {

  childrenBetween6And59Months: Array<any> = [];
  childrenWRTPsdOrBoD: Array<any> = [];
  ineligibleChildren: Array<any> = [];
  villageMasterId: any;
  childDetailId: any;

  locationForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  ssList: Array<any> = [];
  swasthyaSahayika: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  branchId: any;
  regionBranchHide: boolean;
  createMode: boolean;
  branchVillageMapId: any;
  index: number = 0;
  acrSearch: string;
  searchFullscreen: boolean;
  loader: boolean = true;
  page = 1;
  pageSize = 6;

  constructor(private httpService: HttpService, private http: HttpClient, private fb: UntypedFormBuilder, private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService, public dialog: MatDialog, private router: Router,
    public validationService: ValidationService, private toaster: ToastrService,) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit(): void {
    this.createForm();
    // this.getChildrenList();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        })
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 105 || item.subFunctionMasterId == 106 || item.subFunctionMasterId == 107
        || item.subFunctionMasterId == 108)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/acr']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 105)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }

  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(
      (res) => {
        this.branchList = res?.responseObject;
      },
      (error) => {
        this.branchList = null;
      }
    );
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.region == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }

  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    }
    this.loader = false;
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    })
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.branch == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }

  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villageDtoList = [];
    }
  }

  changeVillage(villageId) {
    this.villageMasterId = villageId;
    // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getChildrenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
    }
  }

  createForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
    });
  }

  get f() {
    return this.locationForm.controls;
  }

  getChildrenList(villageMasterId) {
    this.villageMasterId = villageMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }

    this.loader = false;
    this.httpService.getChildrenRegister(req).subscribe((res) => {
      this.childrenBetween6And59Months = res.responseObject?.eligibleChildren?.childrenBetween6And59Months;
      this.childrenWRTPsdOrBoD = res.responseObject?.eligibleChildren?.childrenWRTPsdOrBoD;
      this.ineligibleChildren = res.responseObject?.ineligibleChildren;
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    })
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }

  openCreateChild(childDetails): void {
    const dialogRef = this.dialog.open(AddChildMuacComponent, {
      width: '500px',
      height: '550px',
      data: { editMode: true, childId: childDetails.childDetailId, childDob: childDetails.dob }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
      //this.viewMuaclistComponent.viewMuacChildList();
    });
  }

  openViewChild(childDetails) {
    const dialogRef = this.dialog.open(ViewMuaclistComponent, {
      width: '950px',
      height: '400px',
      data: { childId: childDetails.childDetailId, childDob: childDetails.dob }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
