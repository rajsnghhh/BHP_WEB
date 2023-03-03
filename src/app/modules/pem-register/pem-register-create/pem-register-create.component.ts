import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { PemRegisterService } from '../pem-register.service';

@Component({
  selector: 'app-pem-register-create',
  templateUrl: './pem-register-create.component.html',
  styleUrls: ['./pem-register-create.component.css']
})

export class PemRegisterCreateComponent implements OnInit, DoCheck {
  pemForm: UntypedFormGroup;
  editPemForm: UntypedFormGroup;
  locationForm: UntypedFormGroup;
  pemDetails: any;
  pemDataSave: any;
  childId: any;
  childrenId: any;
  pemRegisterEntry: any;
  loader: boolean = false;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpDtoList: Array<any> = [];
  villageDtoList: Array<any> = [];
  selectedBlock: String;
  selectedGp: String;
  regionBranchHide: boolean;
  branchVillageMapId: any;
  villageMasterId: any;
  placeOfDelivery: any;
  institutionalDelivery: string;
  immunizationDelivery12: string;
  immunizationDelivery24: string;
  breastFeeding6: string;
  breastFeeding12: string;
  breastFeeding18: string;
  breastFeeding24: string;
  diarrhea: string;
  supplementary: string;
  healthcare: string;
  modalContent: any;
  modalReference: any;
  modalIndex: any;
  latestMuac: number;
  firstVisitDate: any;
  secondVisitDate: any;
  childDTO: any;
  saveEditFormData: any;
  registerSearch: any;
  searchFullscreen: boolean;
  checkAge: any;
  childAge: any;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
  childDob: string;
  setStatus: any;
  familyID: any;
  regionID: any;
  branchID: any;
  blockID: any;
  gpID: any;
  villageID: any;
  villageid: any;

  constructor(private fb: UntypedFormBuilder, private pemService: PemRegisterService, private http: HttpClient,
    private modalService: NgbModal, private toaster: ToastrService, private httpService: HttpService,
    public validationService: ValidationService, private sidebarService: SidebarService, config: NgbModalConfig,
    private activatedRoute: ActivatedRoute, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


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
      console.log(params, 'params');
      console.log(this.familyID, 'familyID');
      console.log(this.regionID, ' this.regionID');
      console.log(this.branchID, ' this.branchID');
      console.log(this.blockID, ' this.blockID ');
      console.log(this.gpID, 'this.gpID');
      console.log(this.villageID, ' this.villageID ');
    });


    let JSONDatas = { regionID: this.regionID, branchID: this.branchID, blockID: this.blockID, gpID: this.gpID, villageID: this.villageID }
    localStorage.setItem("datas", JSON.stringify(JSONDatas));

    if (this.setStatus == 'viewCentralPEM') {
      this.viewPEMList();
    } else {
      this.locForm();
      this.createForm(this.pemDataSave);

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
        .find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList
        .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/pem-register/create']) : this.router.navigate(['/error']);


    }

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    console.log(this.createMode)

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode)

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    console.log(this.deleteMode);
  }

  changeRegion(region) {
    let regionId = this.regionList.find(
      (reg) => reg.regionName == region
    )?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.loader = false;
    setTimeout(() => {
      this.pemService.listOfBranchesOfARegion(req).subscribe(
        (res) => {
          this.loader = true;
          this.branchList = res?.responseObject;
        },
        (error) => {
          this.loader = true;
          this.branchList = null;
        }
      );
    }, 500);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
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
    setTimeout(() => {
      this.pemService.villagesOfBranch(Dto).subscribe((res) => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      })
    }, 500);
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');

    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    console.log(this.villageDtoList);

    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
    }
  }

  changeVillage(villageid) {
    this.villageid = villageid;
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList
      .find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageid)?.branchVillageMapId;
    console.log(this.branchVillageMapId, 'this.branchVillageMapId');
    console.log(this.villageid, 'villageid');

    this.viewPEMList();

    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
    }

  }

  locForm() {
    this.locationForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required],
    });

  }

  createForm(pemDataSave: any) {
    var item = pemDataSave;
    this.latestMuac = this.pemDataSave?.latestMuacValue;
    this.firstVisitDate = item?.childBasicStatusDto?.firstVisitDate;
    this.secondVisitDate = item?.childBasicStatusDto?.secondVisitDate;

    this.pemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : ''],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : ''],
      height: ['', Validators.compose([Validators.required, this.heightRange])],
      weight: ['', Validators.compose([Validators.required, this.weightRange])],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: ['', Validators.required],
      muac: ['', Validators.compose([Validators.required, this.muacRange])],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.latestPemCounsellingExperiencedDiarrhea ? item?.latestPemCounsellingExperiencedDiarrhea : '', Validators.required],
      supplementary: [item?.latestPemCounsellingSupplementaryFood ? item?.latestPemCounsellingSupplementaryFood : '', Validators.required],
      healthcare: [item?.latestPemCounsellingVisitingHealthCenter ? item?.latestPemCounsellingVisitingHealthCenter : '', Validators.required],
    });

  }

  get f() {
    return this.pemForm.controls;
  }

  get e() {
    return this.editPemForm.controls;
  }

  get l() {
    return this.locationForm.controls;
  }

  showSuccess(message) {
    this.toaster.success(message, 'Pem Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Pem Register', {
      timeOut: 3000,
    });
  }

  p(event) { }

  openModal(pemData, childId, childAge, pemDetails) {
    console.log(pemDetails);
    this.childDob = pemDetails.dob;
    this.childAge = childAge;


    this.viewPEMRegisterEntry(childId, pemDetails);
    this.modalContent = '';
    this.modalReference = this.modalService.open(pemData, {
      windowClass: 'pemData',
    });
  }

  addPemModal(addPem, childId, pem) {
    this.checkAge = pem.childAge;
    console.log(pem, 'pemxxxxxxx');
    this.childDob = pem.dob;
    this.pemDataSave = pem;
    this.createForm(this.pemDataSave);
    console.log(this.pemDataSave);
    this.childrenId = childId;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addPem, {
      windowClass: 'pemData',
    });

    let y = this.checkAge?.indexOf("year");
    let year = parseInt(this.checkAge?.slice(0, y - 1));

    let m = this.checkAge?.indexOf("r");
    let m1 = this.checkAge?.indexOf("month");
    let month = parseInt(this.checkAge?.slice(m + 2, m1 - 1));

    if (year == 0 && month >= 6) {
      this.pemForm.controls['immunization12'].disable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].disable();
      this.pemForm.controls['breastfeeding18'].disable();
      this.pemForm.controls['breastfeeding24'].disable();
    }

    if (year == 1 && month < 6) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].disable();
      this.pemForm.controls['breastfeeding24'].disable();
    }

    if (year >= 1 && month >= 6) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].enable();
      this.pemForm.controls['breastfeeding24'].disable();
    }

    if (year >= 2 && month >= 0) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].enable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].enable();
      this.pemForm.controls['breastfeeding24'].enable();
    }

  }

  modalDismiss() {
    this.modalReference?.close();
  }

  delivery(e) {
    this.institutionalDelivery = e.target.value;
    console.log(this.institutionalDelivery);
  }

  immunization12(e) {
    this.immunizationDelivery12 = e.target.value;
    console.log(this.immunizationDelivery12);
  }

  immunization24(e) {
    this.immunizationDelivery24 = e.target.value;
    console.log(this.immunizationDelivery24);
  }

  breastfeeding6(e) {
    this.breastFeeding6 = e.target.value;
  }

  breastfeeding12(e) {
    this.breastFeeding12 = e.target.value;
  }

  breastfeeding18(e) {
    this.breastFeeding18 = e.target.value;
  }

  breastfeeding24(e) {
    this.breastFeeding24 = e.target.value;
  }

  diarrhe(e) {
    this.diarrhea = e.target.value;
  }

  supplementar(e) {
    this.supplementary = e.target.value;
  }

  healthCare(e) {
    this.healthcare = e.target.value;
  }

  restrictTypeOfDate() {
    return false;
  }

  viewPEMList() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: this.villageID ? this.villageID : this.villageid
    }
    this.loader = false;
    this.pemService.viewPemList(obj).subscribe((res) => {
      this.loader = true;
      this.pemDetails = res.responseObject;
      console.log(this.pemDetails);

      if (this.setStatus == 'viewCentralPEM') {
        var setData = this.pemDetails.filter(fam => fam.familyDetailId == this.familyID);
        console.log(setData);
        this.pemDetails = setData;
      }
    })

  }

  viewPEMRegisterEntry(childId, pemDetails) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: childId
    }

    this.pemService.viewPemRegisterEntry(obj).subscribe((res) => {
      this.pemRegisterEntry = res.responseObject;
      this.childDTO = pemDetails.childBasicStatusDto;
      console.log(this.pemRegisterEntry);
      console.log(this.childDTO);
    })

  }

  resetPEMRegisterEntry() {
    this.createForm(this.pemDataSave);
  }

  savePEMRegisterEntry() {
    let item = this.pemForm.value;

    if (item.pemDate == '') {
      this.showError('Please select date of record keeping');
      return;
    }

    if (item.height == '') {
      this.showError('Please enter height');
      return;
    }

    if (this.pemForm.value.height < 10 || this.pemForm.value.height > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }

    if (item.weight == '') {
      this.showError('Please enter weight');
      return;
    }

    if (this.pemForm.value.weight > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }

    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }

    if (this.pemForm.value.muac > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }

    if (this.pemForm.value.birthweight > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }

    if (item.diarrhea == '') {
      this.showError('Please select experienced Diarrhea or not');
      return;
    }

    if (item.supplementary == '') {
      this.showError('Please select Supplementary food provided or not');
      return;
    }

    if (item.healthcare == '') {
      this.showError('Please select visiting the health care centre or not');
      return;
    }


    this.heightVal();
    this.weightVal();

    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: 0,
        muacCampId: null,
        childId: this.childrenId,
        height: item.height ? Math.trunc(item.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        weight: item.weight ? Math.trunc(item.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
        muac: Math.trunc(item.muac * Math.pow(10, 1)) / Math.pow(10, 1),
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: 0,
        experiencedDiarrhea: item.diarrhea,
        supplementaryFoodProvided: item.supplementary,
        visitingHealthCareCenter: item.healthcare,
        active_flag: "A",
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery ? item.delivery : null,
        birthWeight: item.birthweight ? item.birthweight : null,
        firstVisitDate: this.firstVisitDate,
        secondVisitDate: this.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
        primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
        ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
        ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
        primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
        ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
      }
    }

    console.log(pemBody);

    this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeVillage(this.villageid);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  editPEMData(item, i, editPem, pemCounsellingDataMasterId) {
    var checkAge = this.childAge;

    this.modalDismiss();
    this.modalContent = '';
    this.modalReference = this.modalService.open(editPem, {
      windowClass: 'pemData',
    })
    this.EditForm(item);


    checkAge = this.childAge;
    console.log(item, '***', editPem);


    let y = checkAge?.indexOf("year");
    let year = parseInt(checkAge?.slice(0, y - 1));

    let m = checkAge?.indexOf("r");
    let m1 = checkAge?.indexOf("month");
    let month = parseInt(checkAge?.slice(m + 2, m1 - 1));

    if (year == 0 && month >= 6) {
      this.editPemForm.controls['immunization12'].disable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].disable();
      this.editPemForm.controls['breastfeeding18'].disable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }

    if (year == 1 && month < 6) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].disable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }

    if (year >= 1 && month >= 6) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].enable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }

    if (year >= 2 && month >= 0) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].enable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].enable();
      this.editPemForm.controls['breastfeeding24'].enable();
    }

  }

  EditForm(item) {
    this.saveEditFormData = item;

    this.editPemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : null],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : null],
      height: [item?.muacData?.height ? item?.muacData?.height : '', Validators.compose([Validators.required, this.heightRange])],
      weight: [item?.muacData?.weight ? item?.muacData?.weight : '', Validators.compose([Validators.required, this.weightRange])],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: [item?.pemDate, Validators.required],
      muac: [item?.muacData?.muac ? item?.muacData?.muac : '', Validators.compose([Validators.required, this.muacRange])],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.experiencedDiarrhea ? item?.experiencedDiarrhea : '', Validators.required],
      supplementary: [item?.supplementaryFood ? item?.supplementaryFood : '', Validators.required],
      healthcare: [item?.visitingHcareCenter ? item?.visitingHcareCenter : '', Validators.required],
    });

    this.editPemForm.markAllAsTouched();

  }

  saveEditPEMRegisterEntry() {
    var item = this.editPemForm.value;

    console.log(this.saveEditFormData);
    var set = this.saveEditFormData;

    if (item.pemDate == '') {
      this.showError('Please select date of record keeping');
      return;
    }

    if (item.height == '') {
      this.showError('Please enter height');
      return;
    }

    if (parseInt(this.editPemForm.value.height) < 10 || parseInt(this.editPemForm.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }

    if (item.weight == '') {
      this.showError('Please enter weight');
      return;
    }

    if (this.editPemForm.value.weight > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }

    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }

    if (this.editPemForm.value.muac > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }

    if (this.editPemForm.value.birthweight > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }

    if (this.editPemForm.value.diarrhea == '') {
      this.showError('Please select experienced Diarrhea or not');
      return;
    }

    if (this.editPemForm.value.supplementary == '') {
      this.showError('Please select Supplementary food provided or not');
      return;
    }

    if (this.editPemForm.value.healthcare == '') {
      this.showError('Please select visiting the health care centre or not');
      return;
    }

    this.heightVal();
    this.weightVal();


    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: set.muacData.muacRegisterId,
        muacCampId: set.muacData.muacCampId,
        childId: set.childId,
        height: item.height ? Math.trunc(item.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        weight: item.weight ? Math.trunc(item.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
        muac: item.muac ? Math.trunc(item.muac * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: set.pemCounsellingDataMasterId,
        experiencedDiarrhea: item.diarrhea ? item.diarrhea : '',
        supplementaryFoodProvided: item.supplementary ? item.supplementary : '',
        visitingHealthCareCenter: item.healthcare ? item.healthcare : '',
        active_flag: 'A',
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery ? item.delivery : null,
        birthWeight: item.birthweight ? item.birthweight : null,
        firstVisitDate: set.childBasicStatusDto.firstVisitDate,
        secondVisitDate: set.childBasicStatusDto.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
        primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
        ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
        ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
        primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
        ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
      }
    }

    console.log(pemBody);

    this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
      console.log(res);

      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeVillage(this.villageid);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  /* MUAC range between 1 to 30, validation */
  muacRange(controls: AbstractControl): { [key: string]: any } {
    if (controls.value >= 1 && controls.value <= 30) {
      return null;
    }
    return { 'notInMuacRange': true };
  }
  /* weight range between 0 to 25, validation */
  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return { 'notInWeightRange': true };
  }
  /* Birth Weight range between 0 to 9, validation */
  birthWeightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
      return null;
    }
    return { 'notInBirthWeightRange': true };
  }
  /* Height range between 10 to 180, validation */
  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null || controls.value == '') {
      return null;
    }
    return { 'notInHeightRange': true };
  }


  deletePEMData(item, i) {
    console.log(item);

    if (confirm('Do you want to delete PEMData: ')) {
      let pemBody = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: item.muacData.muacRegisterId,
          muacCampId: item.muacData.muacCampId,
          childId: item.childId,
          height: item.muacData.height,
          weight: item.muacData.weight,
          muac: item.muacData.muac,
          active_flag: 'D'
        },
        pemCounsellingDataDto: {
          pemCounsellingDataMasterId: item.pemCounsellingDataMasterId,
          experiencedDiarrhea: item.experiencedDiarrhea,
          supplementaryFoodProvided: item.supplementaryFood,
          visitingHealthCareCenter: item.visitingHcareCenter,
          active_flag: 'D',
          pemDate: item.pemDate
        },
        childBasicStatusDto: {
          placeOfDelivery: item.childBasicStatusDto.placeOfDelivery,
          birthWeight: item.childBasicStatusDto.birthWeight,
          firstVisitDate: item.childBasicStatusDto.firstVisitDate,
          secondVisitDate: item.childBasicStatusDto.secondVisitDate,
          ebfUpto6Complete: item.childBasicStatusDto.ebfUpto6Complete,
          primaryImmunizationUpto12Completed: item.childBasicStatusDto.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: item.childBasicStatusDto.ebfUpto12Complete,
          ebfUpto18Complete: item.childBasicStatusDto.ebfUpto18Complete,
          primaryImmunizationUpto24Completed: item.childBasicStatusDto.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: item.childBasicStatusDto.ebfUpto24Complete
        }
      }

      console.log(pemBody);

      this.pemService.savePemRegister(pemBody).subscribe((res: any) => {
        console.log(res);

        if (res.status == true) {
          this.showSuccess(res.message);
          this.pemRegisterEntry.splice(i, 1);

        }
        else {
          this.showError(res.message);
        }
      })
    }
  }

  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }

  }

  heightVal() {
    console.log(this.pemForm.value.height);


    if (parseInt(this.pemForm.value.height) < 10 || parseInt(this.pemForm.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }

    if (parseInt(this.editPemForm?.value.height) < 10 || parseInt(this.editPemForm?.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }


  }

  weightVal() {

    if (parseInt(this.pemForm.value.weight) > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }

    if (parseInt(this.editPemForm?.value.weight) > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }

  }

  muacVal() {

    if (parseInt(this.pemForm.value.muac) > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }

    if (parseInt(this.editPemForm?.value.muac) > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }

  }

  birthWeightVal() {

    if (parseInt(this.pemForm.value.birthweight) > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }

    if (parseInt(this.editPemForm?.value.birthweight) > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }

  }

  heightKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
    console.log(t);
  }

  weightKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4)) : t;
    console.log(t);
  }

  muacKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
    console.log(t);
  }

}
