import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { AddLmChildComponent } from '../add-lm-child/add-lm-child.component';

@Component({
  selector: 'app-lm-view',
  templateUrl: './lm-view.component.html',
  styleUrls: ['./lm-view.component.css'],
  providers: [DatePipe]
})
export class LmViewComponent implements OnInit, DoCheck {

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
  branchVillageMapId: any;
  villageMasterId: any;
  lactatingmotherregister: Array<any> = [];
  searchFullscreen: boolean;
  lmrSearch: string | number;
  loader: boolean = false;
  createUpdateMode: boolean;
  setStatus: any;
  familyID: any;
  regionID: any;
  branchID: any;
  blockID: any;
  gpID: any;
  villageID: any;

  constructor(private httpService: HttpService, private fb: UntypedFormBuilder, private sidebarService: SidebarService, private http: HttpClient,
    private baselineService: BaselineSurveyService, public dialog: MatDialog, public datepipe: DatePipe,
    public validationService: ValidationService, private activatedRoute: ActivatedRoute, private router: Router) { }

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

    if (this.setStatus == 'viewCentralLM') {
      this.getLactatingMotherList(this.villageID);
    } else {

      this.createForm();
      this.getLactatingMotherList();

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

        this.sidebarService.subMenuList
          .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
          .find(item => item.subFunctionMasterId == 121 || item.subFunctionMasterId == 122 || item.subFunctionMasterId == 123 || item.subFunctionMasterId == 124)?.accessDetailList
          .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/lmr']) : this.router.navigate(['/error']);
      });
    }

    this.createUpdateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 121 || item.subFunctionMasterId == 122 || item.subFunctionMasterId == 123 || item.subFunctionMasterId == 124)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }

  /* on change Region dropdown getting Branch list */
  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;
    let req = {
      dataAccessDTO: {
        userId: this.sidebarService?.userId,
        userName: this.sidebarService?.loginId,
      },
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
  /* on change Branch dropdown getting villagesOfBranch list */
  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: {
        userId: this.sidebarService.userId,
        userName: this.sidebarService.loginId,
      },
      branchId: this.sidebarService.branchId
    }
    this.loader = false;
    this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
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
  /* on change Block dropdown getting GP list */
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
  /* on change GP dropdown getting Village list */
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.villageDtoList = [];
    }
  }
  /* on change Village dropdown getting LactatingMother List */
  changeVillage(villageID) {
    this.villageMasterId = villageID;
    // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getLactatingMotherList(this.villageMasterId);
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

  /* get the all Lactating Mother List */
  getLactatingMotherList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    }
    this.loader = false;
    this.httpService.getLactatingMotherRegister(req).subscribe((res) => {
      console.log(res);
      
      this.lactatingmotherregister = res.responseObject?.childrenBetween0And6Months.concat(res.responseObject?.childrenBetween6And12Months
        , res.responseObject?.childrenBetween12And18Months
        , res.responseObject?.childrenBetween18And24Months
        , res.responseObject?.childrenBeyond24Months);
      this.loader = true;
      if (this.setStatus == 'viewCentralLM') {
        var setData = this.lactatingmotherregister.filter(fam => fam.familyDetailId == this.familyID);
        console.log(setData);
        this.lactatingmotherregister = setData;
      }
    }, error => {
      this.loader = true;
    }
    )
  }

  /* only view the particular Lactating Mother info */
  ViewLmChild(lmList) {
    console.log(lmList)
    const dialogRef = this.dialog.open(AddLmChildComponent, {
      width: '1000px',
      height: '550px',
      data: {
        viewMode: true,
        childWiselactatingmotherList: lmList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /* First time it save the data,
    After that it is editable */
  openAddEditLmChild(lmList) {
    console.log(lmList);
    let saveForm: boolean;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: lmList.childDetailId,
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      if (lmList.childBasicStatusDto.placeOfDelivery == null &&
        lmList.childBasicStatusDto.birthWeight == null &&
        lmList.childBasicStatusDto.firstVisitDate == null &&
        lmList.childBasicStatusDto.secondVisitDate == null) {
        saveForm = true;
      } else {
        saveForm = false
      }

      if (res.responseObject.length == 0 && saveForm) {
        const dialogRef = this.dialog.open(AddLmChildComponent, {
          width: '1100px',
          height: '550px',
          data: {
            editMode: false,
            childWiselactatingmotherList: lmList
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          if (this.setStatus == 'viewCentralLM') {
            this.getLactatingMotherList(this.villageID);
          } else {
            this.getLactatingMotherList(this.villageMasterId);
          }
        });
      } else {
        const dialogRef = this.dialog.open(AddLmChildComponent, {
          width: '1100px',
          height: '550px',
          data: {
            editMode: true,
            childWiselactatingmotherList: lmList
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (this.setStatus == 'viewCentralLM') {
            this.getLactatingMotherList(this.villageID);
          } else {
            this.getLactatingMotherList(this.villageMasterId);
          }
        });
      }

    })
  }

}
