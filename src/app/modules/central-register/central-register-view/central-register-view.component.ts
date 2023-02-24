import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaselineSurveyService } from '../../baseline-survey/baseline-survey.service';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { CentralRegisterService } from '../central-register.service';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-central-register-view',
  templateUrl: './central-register-view.component.html',
  styleUrls: ['./central-register-view.component.css'],
})

export class CentralRegisterViewComponent implements OnInit, DoCheck {
  centralViewForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  centralDetails: Array<any> = [];
  gpList: Array<any> = [];
  villageList: Array<any> = [];
  regionBranchHide: boolean;
  villagesOfBranch: Array<any> = [];
  searchFullscreen: boolean;
  p: any;
  page = 1;
  pageSize = 6;
  villageId: any;
  regionId: any;
  branchId: any;
  blockId: any;
  gpId: any;
  localStorageData: any;
  loader: boolean = true;
  registerSearch: any;
  branchEnddateDetailDTO: any;
  timeToTentativeEndDate: any;

  constructor(private centralService: CentralRegisterService, private http: HttpService, private route: Router,
    public validationService: ValidationService, private fb: UntypedFormBuilder, public sidebarService: SidebarService,
    private httpClient: HttpClient, private baselineService: BaselineSurveyService) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.sidebarService.subMenuList.find(item => item.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.
      subFunctionMasterId == 89 || item.subFunctionMasterId == 90 || item.subFunctionMasterId == 91 || item.subFunctionMasterId == 92)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? this.route.navigate(['/central-register/view']) : this.route.navigate(['/error']);

    this.localStorageData = JSON.parse(localStorage.getItem("datas"));
    console.log(this.localStorageData, 'localstorage');
    this.createForm();


    if (this.localStorageData) {
      if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
        let Dto = {
          dataAccessDTO: this.http.dataAccessDTO,
          branchId: this.localStorageData?.branchID ? this.localStorageData?.branchID : this.sidebarService?.branchId
        }
        if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
          this.centralService.villagesOfBranch(Dto).subscribe((res) => {
            if (res.sessionDTO.status == true) {
              this.villagesOfBranch = res.responseObject;
              console.log(this.villagesOfBranch, 'villagesOfBranch12');
            }
          })
          setTimeout(() => {
            this.changeBlock(this.localStorageData?.blockID);
            this.changeGp(this.localStorageData?.gpID);
            this.changeVillage(this.localStorageData?.villageID);
          }, 1000);

        }
      } else {
        this.changeRegion(this.localStorageData.regionID);
        this.changeBranch(this.localStorageData.branchID);
        setTimeout(() => {
          this.changeBlock(this.localStorageData.blockID);
          this.changeGp(this.localStorageData.gpID);
          this.changeVillage(this.localStorageData.villageID);
        }, 1000);
      }
    }

    window.onbeforeunload = function () {
      localStorage.removeItem("datas")
    }

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
        // let user = JSON.parse(localStorage.getItem('user'));
        const password = JSON.parse(localStorage.getItem('cachedData'));
        const bytes = CryptoJS.AES.decrypt(password, 'encryptionCode'); let objs = {
          deviceType: "W",
          loginId: this.sidebarService.loginId,
          password: bytes.toString(CryptoJS.enc.Utf8)
        }
        this.baselineService.login(objs).subscribe((res: any) => {
          console.log(res.responseObject.branchBaselineSurveyEnddateDetailDTO, 'forclosebaselinedata');
          // console.log(user.responseObject.branchBaselineSurveyEnddateDetailDTO, 'branchBaselineSurveyEnddateDetailDTO');
          if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.actualEndDate != null) {
            console.log(true, '1');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToActualEndDate;
          } else if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate != null) {
            console.log(true, '2');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate;
          } else {
            this.timeToTentativeEndDate = '';
          }
        });
        this.regionBranchHide = res.regionBranchHide;
        this.httpClient.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        })
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  createForm() {
    this.centralViewForm = this.fb.group({
      region: [this.localStorageData?.regionID ? this.localStorageData?.regionID : '', Validators.required],
      branch: [this.localStorageData?.branchID ? this.localStorageData?.branchID : '', Validators.required],
      block: [this.localStorageData?.blockID ? this.localStorageData?.blockID : '', Validators.required],
      gp: [this.localStorageData?.gpID ? this.localStorageData?.gpID : '', Validators.required],
      gram: [this.localStorageData?.villageID ? this.localStorageData?.villageID : '', Validators.required],
    });

    if (this.localStorageData != null) {
      this.centralViewForm.markAllAsTouched();
    }
  }

  get f() {
    return this.centralViewForm.controls;
  }

  changeRegion(regionId) {
    this.regionId = regionId;
    console.log(this.regionId);

    let req = {
      dataAccessDTO: this.http.dataAccessDTO,
      regionId: regionId,
    };
    this.centralService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );

    if (!this.localStorageData) {
      this.centralViewForm.controls.branch.setValue('');
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
      this.timeToTentativeEndDate = '';
      if (!this.centralViewForm.value.region) {
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
        this.timeToTentativeEndDate = '';
      }
    } else {
      this.centralViewForm.controls.branch.setValue('');
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
      this.timeToTentativeEndDate = '';
    }

  }

  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId);

    this.branchEnddateDetailDTO = this.branchList.find(bran => bran.branchId == branchId)?.branchBaselineSurveyEnddateDetailDTO;
    console.log(this.branchEnddateDetailDTO, 'branchEnddateDetailDTO');
    if (this.branchEnddateDetailDTO?.actualEndDate != null) {
      console.log(true, '1');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToActualEndDate;
    } else if (this.branchEnddateDetailDTO?.timeToTentativeEndDate != null) {
      console.log(true, '2');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToTentativeEndDate;
    } else {
      this.timeToTentativeEndDate = '';
    }

    let Dto = {
      dataAccessDTO: this.http.dataAccessDTO,
      branchId: branchId
    }

    this.centralService.villagesOfBranch(Dto).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    });

    if (!this.localStorageData) {
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.gpList = [];
      this.centralDetails = [];
      if (!this.centralViewForm.value.branch) {
        this.centralViewForm.controls.block.setValue('');
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
      }
    } else {
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.gpList = [];
      this.centralDetails = [];
      if (!this.centralViewForm.value.branch) {
        this.centralViewForm.controls.block.setValue('');
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
      }

    }

  }

  changeBlock(blockId) {
    this.blockId = blockId;
    console.log(this.blockId);

    this.gpList = this.villagesOfBranch?.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);

    if (!this.localStorageData) {
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.centralDetails = [];
      if (!this.centralViewForm.value.block) {
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.centralDetails = [];
      }
    }

  }

  changeGp(gpId) {
    this.gpId = gpId;
    console.log(this.gpId);

    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList);

    if (!this.localStorageData) {
      this.centralViewForm.controls.gram.setValue('');
      this.centralDetails = [];
      if (!this.centralViewForm.value.gp) {
        this.centralViewForm.controls.gram.setValue('');
        this.centralDetails = [];
      }
    }
  }

  changeVillage(villageId) {
    this.villageId = villageId;
    console.log(this.villageId);
    this.loader = false;
    if (!this.centralViewForm.value.gram) {
      this.loader = true;
    }

    let obj = { dataAccessDTO: this.http.dataAccessDTO, villageId: villageId }
    this.centralService.viewCentralRegisterDetails(obj).subscribe((res) => {
      this.centralDetails = res.responseObject;
      console.log(this.centralDetails);
      this.loader = true;
    });

    if (!this.localStorageData) {
      this.centralDetails = [];
      if (!this.centralViewForm.value.gram) {
        this.centralDetails = [];
      }
    }
  }

  routePWStatus(PWitem) {
    if (PWitem.pregnantStatus == 'Y') {
      console.log(PWitem);
      this.route.navigate(['/pw-register'], {
        queryParams: {
          familyID: PWitem.familyDetailId,
          status: 'viewCentral',
          regionID: this.regionId,
          branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId,
        }
      });
    }
  }

  routeLMStatus(LMitem) {
    if (LMitem.lactatingWomanStatus == 'Y') {
      console.log(LMitem);
      this.route.navigate(['/lmr'], {
        queryParams: {
          familyID: LMitem.familyDetailId,
          status: 'viewCentralLM',
          regionID: this.regionId,
          branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId,
        }
      });
    }
  }

  routePEMStatus(PEMitem) {
    console.log(PEMitem);
    this.route.navigate(['/pem-register/create'], {
      queryParams: {
        familyID: PEMitem.familyDetailId,
        status: 'viewCentralPEM',
        regionID: this.regionId,
        branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
        blockID: this.blockId,
        gpID: this.gpId,
        villageID: this.villageId,
      }
    });
  }

  ngOnDestroy() {
    localStorage.removeItem("datas");
  }

}
