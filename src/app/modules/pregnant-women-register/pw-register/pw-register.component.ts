import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { PwStatusComponent } from '../pw-status/pw-status.component';
import { SinglePwListComponent } from '../single-pw-list/single-pw-list.component';

@Component({
  selector: 'app-pw-register',
  templateUrl: './pw-register.component.html',
  styleUrls: ['./pw-register.component.css']
})
export class PwRegisterComponent implements OnInit {

  allPregnantWomenList: Array<any> = [];
  nonPregnantWomenList: Array<any> = [];

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
  editMode: boolean;
  branchVillageMapId: any;
  villageMasterId: any;
  index: number = 0;
  acrSearch: string;
  searchFullscreen: boolean;
  pwSearch: string | number;
  page = 1;
  pageSize = 6;
  loader: boolean = true;
  setStatus: any;
  familyID: any;
  regionID: any;
  branchID: any;
  blockID: any;
  gpID: any;
  villageID: any;
  updateMode: boolean;
  createMode: boolean;

  constructor(private httpService: HttpService, private http: HttpClient, private fb: UntypedFormBuilder, private sidebarService: SidebarService,
    private baselineService: BaselineSurveyService, public dialog: MatDialog, private toaster: ToastrService,
    private activatedRoute: ActivatedRoute, private router: Router, public validationService: ValidationService,) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.setStatus = params['status'];
      this.familyID = params['familyID'];
      this.regionID = params['regionID'];
      this.branchID = params['branchID'];
      this.blockID = params['blockID'];
      this.gpID = params['gpID'];
      this.villageID = params['villageID'];
    });

    let JSONDatas = { regionID: this.regionID, branchID: this.branchID, blockID: this.blockID, gpID: this.gpID, villageID: this.villageID }
    localStorage.setItem("datas", JSON.stringify(JSONDatas));

    if (this.setStatus == 'viewCentral') {
      this.getPregnantWomenList(this.villageID)
    } else {
      this.createForm();

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

        this.updateMode = this.sidebarService.subMenuList
          .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
          .find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList
          .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

        this.createMode = this.sidebarService.subMenuList
          .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
          .find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList
          .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

        this.sidebarService.subMenuList
          .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
          .find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList
          .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/pw-register']) : this.router.navigate(['/error']);
      });
    }
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  p(event) { }
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
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    })
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.branch == '') {

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

      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {

      this.villageDtoList = [];
    }
  }

  changeVillage(villageId) {
    this.villageMasterId = villageId;
    // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)
    //   ?.gpDtoList.find(gp => gp.name == this.selectedGp)
    //   ?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;

    this.getPregnantWomenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {

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

  /* get the all Pregnant Women List */
  getPregnantWomenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    console.log(req);
    this.loader = false;
    this.httpService.getPregnantWomenList(req).subscribe((res) => {
      this.allPregnantWomenList = res.responseObject?.pregnantWomanList;
      this.nonPregnantWomenList = res.responseObject?.nonPregnantWomanList;
      console.log(this.allPregnantWomenList);
      this.loader = true;
      if (this.setStatus == 'viewCentral') {
        var setData = this.allPregnantWomenList.filter(fam => fam.familyDetailId == this.familyID);
        console.log(setData);
        this.allPregnantWomenList = setData;
      }
    }, error => {
      this.showError('Error');
      this.loader = true;
    })
  }

  openPwList(i, pregnantWomenList) {
    const dialogRef = this.dialog.open(SinglePwListComponent, {
      width: '1000px',
      height: '550px',
      data: {
        id: pregnantWomenList.familyDetailId,
        singlePregnantWomenList: pregnantWomenList,
        villageMasterId: this.setStatus == 'viewCentral' ? this.villageID : this.villageMasterId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.setStatus == 'viewCentral') {
        this.getPregnantWomenList(this.villageID);
      } else
        this.getPregnantWomenList(this.villageMasterId);

    });
  }

  openPwStatus(womenList) {
    const dialogRef = this.dialog.open(PwStatusComponent, {
      width: '500px',
      height: '280px',
      data: { nonPregnantWomenList: womenList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.setStatus == 'viewCentral') {
        this.getPregnantWomenList(this.villageID)
      } else
        this.getPregnantWomenList(this.villageMasterId);

    });
  }

  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
}
