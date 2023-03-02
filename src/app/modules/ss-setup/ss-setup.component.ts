import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { SsService } from './ss.service';

@Component({
  selector: 'app-ss-setup',
  templateUrl: './ss-setup.component.html',
  styleUrls: ['./ss-setup.component.css']
})
export class SsSetupComponent implements OnInit {
  ssForm: UntypedFormGroup;
  ssCreateForm: UntypedFormGroup;
  approveSSForm: UntypedFormGroup;
  replaceSSForm: UntypedFormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  staffWiseSSLists: Array<any> = [];
  staffIdWiseList: Array<any> = [];
  page = 1;
  pageSize = 6;
  p: any;
  ssList: Array<any> = [];
  modalContent: any;
  modalReference: any;
  appModal: any;
  replaceModal: any;
  branchId: any;
  blockList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpList: Array<any> = [];
  villList: Array<any> = [];
  staffList: Array<any> = [];
  editssData: any;
  // isDisabled: boolean = false;
  searchText: any;
  searchFullscreen: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  approveMode: boolean;
  replaceMode: boolean;
  role: any;
  regionBranchHide: boolean;
  branchID: any;
  approvalItem: any;
  loader: boolean = false;
  ssDropdown: Array<any> = [];
  replaceData: any

  constructor(private fb: UntypedFormBuilder, private httpService: HttpService, private sidebarService: SidebarService,
    private ssService: SsService, private toaster: ToastrService, private modalService: NgbModal, private http: HttpClient,
    private validationService: ValidationService, config: NgbModalConfig, private confirmationDialogService: ConfirmationDialogService, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);
    this.createForm();

    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      this.branchID = res.branchId;

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
          branchId: res.branchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          this.loader = true;
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });

        this.ssLists();
        this.staffLists();
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/ss-setup']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;

    this.approveMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;

    this.replaceMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 177 || item.subFunctionMasterId == 178 || item.subFunctionMasterId == 179 || item.subFunctionMasterId == 180)?.accessDetailList
      .find(accessType => accessType.accessType == 'replace')?.accessType ? true : false;

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }

  ssModalDismiss() {
    if (this.editssData?.ssId) {
      this.editssData = []
      this.modalReference?.close();
    }
    else {
      this.modalReference?.close();
    }

  }

  createForm() {
    this.ssForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      staffWiseList: ['1', Validators.required]
    });
  }

  get f() {
    return this.ssForm.controls;
  }

  createSSForm() {
    this.ssCreateForm = this.fb.group({
      ssName: [this.editssData?.ssName ? this.editssData?.ssName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      husbandName: [this.editssData?.ssHusbandOrGuardianName ? this.editssData?.ssHusbandOrGuardianName : '', Validators.compose([Validators.required, Validators.minLength(3)])],
      contactNo: [this.editssData?.ssContactNo ? this.editssData?.ssContactNo : '', Validators.compose([Validators.minLength(10), Validators.pattern("[6789][0-9]{9}")])],
      address: [this.editssData?.ssAddress ? this.editssData?.ssAddress : '', Validators.required],
      block: [this.editssData?.blockDto?.blockId ? this.editssData?.blockDto?.blockId : '', Validators.required],
      gp: [this.editssData?.gpDto?.gpId ? this.editssData?.gpDto?.gpId : '', Validators.required],
      gram: [this.editssData?.villageDto?.villageId ? this.editssData?.villageDto?.villageId : '', Validators.required],
      staff: [this.editssData?.userDto?.userId ? this.editssData?.userDto?.userId : '', Validators.required]
    });

    if (this.editssData?.ssId) {
      this.ssCreateForm.markAllAsTouched();
      this.ssCreateForm.controls['staff'].disable();
    }
  }

  get c() {
    return this.ssCreateForm?.controls;
  }

  changeRegion(regionId) {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
    this.ssService.listOfBranchesOfARegion(obj).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList);
    });

    this.ssForm.controls.branch.setValue('');
    this.staffWiseSSLists = [];

    if (this.ssForm.value.region == '') {
      this.branchList = [];
      this.staffWiseSSLists = [];
      this.ssForm.controls.branch.setValue('');
    }
  }

  ssLists() {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId ? this.branchId : this.branchID };
    this.ssService.listOfswasthyasahayika(obj).subscribe((res) => {
      this.ssList = res.responseObject?.ssDtoList;
      console.log(this.ssList);

      if (this.ssForm.value.staffWiseList == 1) {
        this.staffWiseSSLists = this.ssList;
        this.ssForm.markAllAsTouched();
      }

      // this.ssList.forEach(x => {
      //   this.ssDropdown.push({ ssName: x.ssName, ssId: x.ssId });
      //   console.log(this.ssDropdown);

      // })
    });

  }

  staffLists() {
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId ? this.branchId : this.branchID }

    this.ssService.staffListOfBranch(obj).subscribe((res) => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    })
  }

  changeBranch(branchId, a) {

    this.branchId = branchId;
    this.staffLists();
    this.ssLists();
    this.ssForm?.controls.staffWiseList.setValue('1');
    this.staffWiseSSLists = [];
    if (this.ssForm.value.branch == '') {
      this.staffWiseSSLists = [];
    }

  }

  createSwasthyaSahayika(createSS) {
    console.log(this.editssData?.ssId, 'this.editssData?.ssIdcreate');
    console.log('branchId', this.branchId);


    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId ? this.branchId : this.branchID }

    this.ssService.blockGPVillOfBranch(obj).subscribe((res) => {
      this.blockList = res.responseObject;
      console.log(this.blockList, 'blockList');
      this.changeBlock(this.editssData?.blockDto?.blockId);
      this.changeGP(this.editssData?.gpDto?.gpId);
    })
    this.loader = false;

    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(createSS, {
        windowClass: 'createMuac',
      });
      this.loader = true;
      this.createSSForm();
    }, 1000);

    let obj2 = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId ? this.branchId : this.branchID }

    this.staffLists();

  }

  changeBlock(blockId) {
    console.log(blockId);
    this.gpList = this.blockList.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.ssCreateForm?.controls.gp.setValue('');
    this.ssCreateForm?.controls.gram.setValue('');

    if (this.ssCreateForm?.value.block == '') {
      this.ssCreateForm?.controls.gp.setValue('');
      this.ssCreateForm?.controls.gram.setValue('');
    }
  }

  changeGP(gpId) {
    console.log(gpId);
    this.villList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villList, 'vill list');
    this.ssCreateForm?.controls.gram.setValue('');
    if (this.ssCreateForm?.value.block == '') { this.ssCreateForm?.controls.gram.setValue(''); }
  }

  saveSSForm() {

    this.ssCreateForm.value.ssName = this.validationService.firstCaps(
      this.ssCreateForm.value.ssName.trim()
    );

    this.ssCreateForm.value.husbandName = this.validationService.firstCaps(
      this.ssCreateForm.value.husbandName.trim()
    );

    if (!this.ssCreateForm.value.ssName) {
      this.showError('Please Enter Swasthya Sahayika Name');
      return;
    } else if (this.ssCreateForm.value.ssName < 3) {
      this.showError('Swasthya Sahayika Name should be at least 3 char long');
      return;
    }

    if (!this.ssCreateForm.value.husbandName) {
      this.showError('Please Enter Husband Name');
      return;
    } else if (this.ssCreateForm.value.husbandName < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }

    if (this.ssCreateForm.value.contactNo?.length) {
      if (this.ssCreateForm.value.contactNo?.length != 10) {
        this.showError('Contact Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(
          this.ssCreateForm.value.contactNo.substr(0, 1)
        );
        if (startChar < 6) {
          this.showError('Contact Number must start from 6-9');
          return;
        }
      }

    }

    if (!this.ssCreateForm.value.address) {
      this.showError('Please Enter Address');
      return;
    }

    if (!this.ssCreateForm.value.block) {
      this.showError('Please Select Block');
      return;
    }

    if (!this.ssCreateForm.value.gp) {
      this.showError('Please Select GP');
      return;
    }

    if (!this.ssCreateForm.value.gram) {
      this.showError('Please Select Village');
      return;
    }

    if (!this.editssData?.ssId) {
      if (!this.ssCreateForm.value.staff) {
        this.showError('Please Select Staff In Charge');
        return;
      }
    }

    console.log(this.editssData);

    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoOrHcoIOrTLId: this.editssData?.ssId ? this.editssData.userDto.userId : this.ssCreateForm.value.staff,
      swasthyaSahayikaDTO: {
        swasthyaSahayikaMasterId: this.editssData?.ssId ? this.editssData?.ssId : 0,
        name: this.validationService.camelize(this.ssCreateForm.value.ssName.trim()),
        husbandOrGuardianName: this.validationService.camelize(this.ssCreateForm.value.husbandName.trim()),
        contactNumber: this.ssCreateForm.value.contactNo ? this.ssCreateForm.value.contactNo : null,
        address: this.ssCreateForm.value.address,
        blockMasterId: this.ssCreateForm.value.block,
        gpMunicipalMasterId: this.ssCreateForm.value.gp,
        villageMasterId: this.ssCreateForm.value.gram,
        status: "A"
      }

    }
    console.log(postBody);
    this.ssService.ssSaveUpdate(postBody).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssModalDismiss();

        this.ssLists();
        this.ssForm?.controls.staffWiseList.setValue('1');
      }
      else {
        this.showError(res.message);
      }
    })

  }

  editSSForm(item, createSS) {

    console.log(this.editssData?.ssId, 'this.editssData?.ssIdedit');

    this.editssData = item;
    console.log(this.editssData);
    this.createSwasthyaSahayika(createSS);

  }
  deleteSSForm(item, i) {
    console.log(item);

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?')
      .then(() => this.delete(item, i)
      )

      .catch(() => '');

  }

  delete(item, i) {
    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoOrHcoIOrTLId: item.userDto.userId,
      swasthyaSahayikaDTO: {
        swasthyaSahayikaMasterId: item.ssId,
        name: item.ssName,
        husbandOrGuardianName: item.ssHusbandOrGuardianName,
        contactNumber: item.ssContactNo,
        address: item.ssAddress,
        blockMasterId: item.blockDto.blockId,
        gpMunicipalMasterId: item.gpDto.gpId,
        villageMasterId: item.villageDto.villageId,
        status: "D"
      }

    }
    console.log(postBody);
    this.ssService.ssSaveUpdate(postBody).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssList.splice(i, 1);
        this.ssLists();
      }
      else {
        this.showError(res.message);
      }
    })
  }


  showSuccess(message) {
    this.toaster.success(message, 'Swasthya Sahayika', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Swasthya Sahayika', {
      timeOut: 3000,
    });
  }

  staffWiseSSList(e) {
    console.log(e);
    if (e == 'NA') {
      this.staffIdWiseList = this.ssList?.filter(item => item.userDto === null);
      this.staffWiseSSLists = this.staffIdWiseList;
      console.log(this.staffIdWiseList);
    } else if (e == 1) {
      this.staffWiseSSLists = this.ssList;
    } else {
      this.staffIdWiseList = this.ssList?.filter(item => item.userDto?.userId == e);
      this.staffWiseSSLists = this.staffIdWiseList;
      console.log(this.staffIdWiseList);
    }

  }

  approveSS(item, approve) {
    if (item.status == 'A') {
      this.showError('Already Approved');
      return;
    } else {
      this.approvalItem = item;
      // console.log( this.approvalItem.numberOfBasicTrainingDaysAttended);
      
      if (item.numberOfBasicTrainingDaysAttended >= 4) {
        this.appApi(item);
      } else {
        this.appForm();
        this.modalContent = '';
        this.appModal = this.modalService.open(approve, {
          windowClass: 'approve',
        });
      }
    }

  }

  appApi(item) {
    let app_req = {
      dataAccessDTO: this.httpService.dataAccessDTO, swasthyaSahayikaMasterId: item.ssId,
      approvalComment: this.approveSSForm?.value?.comment ? this.approveSSForm?.value?.comment.trim() : null
    }
    console.log(app_req);

    this.ssService.ssApprove(app_req).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        if (this.approveSSForm?.value?.comment) {
          this.approveSSModalDismiss();
        }
        this.ssLists();
      }
      else {
        this.showError(res.message);
      }
    })
  }

  saveApprove() {
    this.appApi(this.approvalItem);
  }

  approveSSModalDismiss() {
    this.appModal.close();
  }

  appForm() {
    this.approveSSForm = this.fb.group({
      comment: ['', Validators.required]
    })
  }

  get r() {
    return this.approveSSForm.controls;
  }

  disabledSave() {
    let flag = true;
    if (!this.approveSSForm.value.comment) {
      flag = false;
    }

    if (this.approveSSForm.value.comment.trim().length === 0) {
      flag = false;
    }

    return flag;
  }

  replaceSS(item, replace) {
    this.ssDropdown = [];
    this.replaceData = item;
    console.log(item);
    this.replace_ssForm();
    this.modalContent = '';
    this.replaceModal = this.modalService.open(replace, {
      windowClass: 'replace',
    });

    this.ssList.filter(x => x.ssId != item.ssId).forEach(x => {
      this.ssDropdown.push({ ssName: x.ssName, ssId: x.ssId });
      // console.log(this.ssDropdown);
    })

    if (this.replaceData?.freshReplacementDetails?.replacing_which_ss) {
      this.replaceSSForm.controls['ss'].disable();
    }
    if (this.replaceData?.freshReplacementDetails?.comment) {
      this.replaceSSForm.controls['comment'].disable();
    }
  }

  replace_ssForm() {
    this.replaceSSForm = this.fb.group({
      fresh: [''],
      ss: [this.replaceData?.freshReplacementDetails?.replacing_which_ss ? this.replaceData?.freshReplacementDetails?.replacing_which_ss : '', Validators.required],
      comment: [this.replaceData?.freshReplacementDetails?.comment ? this.replaceData?.freshReplacementDetails?.comment : '', Validators.required]
    })
  }

  get s() {
    return this.replaceSSForm.controls
  }

  replaceSSModalDismiss() {
    this.replaceModal.close();
  }

  disabledReplaceSave() {
    let flag = true;

    if (this.replaceData?.freshReplacementDetails?.replacing_which_ss) {
      if (this.replaceSSForm.value.fresh != true) {
        flag = false;
      }
    } else {
      if (!this.replaceSSForm.value.ss) {
        flag = false;
      }

      if (!this.replaceSSForm.value.comment) {
        flag = false;
      }
    }

    return flag;
  }

  saveReplace() {
    console.log(this.replaceData?.freshReplacementDetails?.ss_type)
    console.log(this.replaceSSForm.value.fresh == true);
    if (this.replaceSSForm.value.fresh == true) {
      var replace_req = {
        dataAccessDTO: this.httpService.dataAccessDTO, swasthyaSahayikaMasterId: this.replaceData.ssId,
        markingType: this.replaceData?.freshReplacementDetails?.ss_type == 'F' ? 'R' : 'F', replacingSsId: null,
        comment: null
      }
    } else {
      replace_req = {
        dataAccessDTO: this.httpService.dataAccessDTO, swasthyaSahayikaMasterId: this.replaceData.ssId,
        markingType: this.replaceData?.freshReplacementDetails?.ss_type == 'F' ? 'R' : 'F', replacingSsId: this.replaceSSForm.value.ss,
        comment: this.replaceSSForm?.value?.comment ? this.replaceSSForm?.value?.comment.trim() : null
      }
    }

    console.log(replace_req);

    this.ssService.markSsAsFreshOrReplacement(replace_req).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.replaceSSModalDismiss();
        this.ssLists();
      }
      else {
        this.showError(res.message);
      }
    })
  }
}
