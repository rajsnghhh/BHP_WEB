import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MaterialDistributionRegisterService } from './material-distribution-register.service';

@Component({
  selector: 'app-material-distribution-register',
  templateUrl: './material-distribution-register.component.html',
  styleUrls: ['./material-distribution-register.component.css']
})
export class MaterialDistributionRegisterComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  viewMaterialDistributionForm: UntypedFormGroup;
  createMaterialDistributionForm: UntypedFormGroup;
  filterswasthyaSahayikaForm: UntypedFormGroup;
  regionBranchHide: boolean;
  regionList: Array<any> = [];
  lowerRoleBranchId: any;
  branchList: Array<any> = [];
  villagesOfBranch: Array<any> = [];
  gpList: Array<any> = [];
  villageList: Array<any> = [];
  villageID: any;
  page = 1;
  pageSize = 6;
  p: any;
  modalContent: any;
  modalReference: any;
  eligibleFamilyModal: any;
  distributionDetailsModal: any;
  createMaterialModal: any;
  eligibleFamilyList: Array<any> = [];
  filterFamilyList: Array<any> = [];
  eligibleChildList: Array<any> = [];
  itemList: Array<any> = [];
  subItemList: Array<any> = [];
  subItemMultiItem: Array<any> = [];
  familyDetails: any;
  materialDistributionList: Array<any> = [];
  materialDistributionListFamilyWise: Array<any> = [];
  onDistributionEditData: any;
  editItemID: any;
  viewMode: boolean;
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;
  pwName: any;
  pwStatus: any;
  checked: any;
  showSelectedSI: any = '';
  itemID: any;
  itemName: any;
  OtherItemStatus: any = 'I';
  ssList: Array<any> = [];
  searchFullscreen: boolean;
  registerSearch: any;
  mappedString: any = "";
  mappedStringArray: Array<any> = [];
  eligibleFamilyDetails: any;
  loader: boolean = true;

  constructor(private fb: UntypedFormBuilder, private sidebarService: SidebarService, private http: HttpClient, private httpService: HttpService,
    private materialDistributionService: MaterialDistributionRegisterService, private modalService: NgbModal, config: NgbModalConfig,
    private validationService: ValidationService, private toaster: ToastrService, private confirmationDialogService: ConfirmationDialogService,
    private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    this.view_materialDistributionForm();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then((res: any) => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userId,
            userName: dataAccessDTO.userName,
          },
          branchId: this.lowerRoleBranchId
        }
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res: any) => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
          }
        });
      }
    });

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);

    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  view_materialDistributionForm() {
    this.viewMaterialDistributionForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      block: ['', Validators.required],
      gp: ['', Validators.required],
      gram: ['', Validators.required]
    })
  }

  get m() {
    return this.viewMaterialDistributionForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = { dataAccessDTO: this.httpService.dataAccessDTO, regionId: regionId };
      this.materialDistributionService.getBranchesOfRegion(req).subscribe((res) => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }

    this.viewMaterialDistributionForm.controls.branch.setValue('');
    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewMaterialDistributionForm.value.region == '') {
      this.branchList = [];
    }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    this.materialDistributionService.getVillagesOfBranch(req).subscribe((res) => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });

    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');

    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.villageList = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');

    this.viewMaterialDistributionForm.controls.gram.setValue('');
  }

  changeVillage(villageId) {
    this.villageID = villageId;
    console.log(this.villageID, 'changevillage this.villageID');

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: villageId };
    this.materialDistributionService.getMaterialDistributionList(req).subscribe((res: any) => {
      this.materialDistributionList = res.responseObject;
      console.log(this.materialDistributionList, 'this.materialDistributionList');
    })
  }

  viewdistributionDetails(detailsOfDistribution, mat) {
    this.materialDistributionListFamilyWise = mat.material_distribution_List;
    console.log(mat);
    this.pwName = mat.first_name + mat.middle_name + ' ' + mat.last_name;
    this.pwStatus = 'PW';
    this.modalContent = '';
    this.distributionDetailsModal = this.modalService.open(detailsOfDistribution, {
      windowClass: 'detailsOfParticipants',
    });

    this.mappedStringArray = []
    this.materialDistributionListFamilyWise = this.materialDistributionListFamilyWise?.map(({
      mappedString = '', family_detail_id = mat.family_detail_id,
      ...rest
    }) => ({
      mappedString, family_detail_id,
      ...rest
    }));
    this.materialDistributionListFamilyWise.forEach(item => {
      this.viewItemSIDesign(item.subItems, item.mappedString, item);
    })
  }

  viewItemSIDesign(data, mappedStringData, item) {
    var Arr = []
    Arr = data;

    console.log(Arr, 'TRR');

    var unique = this.findUnique(Arr, d => d.md_item_name)

    var myMap = new Map();

    unique.forEach(d => {
      myMap.set(d.md_item_name, Arr.filter(v => v.md_item_name == d.md_item_name))
    });

    mappedStringData = this.setItemSubItemName(unique, myMap)
    console.log(mappedStringData);
    var data = this.materialDistributionListFamilyWise.find(it => it.material_distribution_register_id == item.material_distribution_register_id)
    data.mappedString = mappedStringData;
    console.log(data);
    console.log(this.materialDistributionListFamilyWise);


  }

  setItemSubItemName(unique, map) {
    this.mappedString = ""
    unique.forEach(key => {
      this.mappedString += key.md_item_name;
      this.mappedString += " ("
      var data = map.get(key.md_item_name);
      data.forEach(ss => {
        this.mappedString += ss.md_sub_item_name + ", "
      })
      this.mappedString = this.mappedString.substring(0, this.mappedString.length - 2)
      this.mappedString += "), "
    })
    this.mappedString = this.mappedString.substring(0, this.mappedString.length - 2)

    return this.mappedString;
  }

  findUnique(arr, predicate) {
    var found = {};
    arr?.forEach(d => {
      found[predicate(d)] = d;
    });
    return Object.keys(found).map(key => found[key]);
  }


  viewDistributionDetailsModalDismiss() {
    this.changeVillage(this.villageID);
    this.distributionDetailsModal?.close();
  }

  viewEligibleFamilyDetails(eligibleFamilyDetails) {
    this.eligibleFamilyDetails = eligibleFamilyDetails;
    console.log(this.eligibleFamilyDetails);

    this.ssList = [];
    console.log(this.villageID, 'this.villageID');
    this.modalContent = '';
    this.eligibleFamilyModal = this.modalService.open(eligibleFamilyDetails, {
      windowClass: 'eligibleFamilyDetails',
    });


    let viewFamObj = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: this.villageID };
    this.loader = false;

    this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe((res: any) => {
      this.eligibleFamilyList = res.responseObject;
      this.filterFamilyList = res.responseObject;
      this.loader = true;
      console.log(this.eligibleFamilyList, 'eligibleFamilyList');
      this.eligibleFamilyList.forEach((item) => {
        if (item.swasthya_sahayika_id != null) {
          this.ssList.push(item.swasthya_sahayika_name);
          this.ssList = this.ssList.filter((item, i, ar) => ar.indexOf(item) === i)
          console.log(this.ssList, 'sslist');
        }
      })
    });

    this.viewSSForm();
  }

  changeSSFilter(ssvalue) {
    if (ssvalue == 'noSS') {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_id == null);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    } else if (ssvalue == 'withSS') {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_id != null);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    } else if (ssvalue == '') {
      this.filterFamilyList = this.eligibleFamilyList;
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    }
    else {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_name == ssvalue);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    }

  }


  eligibleFamilyDetailsModalDismiss() {
    this.eligibleFamilyModal?.close();
  }

  viewSSForm() {
    this.filterswasthyaSahayikaForm = this.fb.group({
      swasthyaSahayika: ['']
    });
  }

  create_materialDistributionForm(onDistributionEditData) {
    console.log(onDistributionEditData, '...create_materialDistributionForm');
    this.createMaterialDistributionForm = this.fb.group({
      enterSubItem: [onDistributionEditData?.other_item_name ? onDistributionEditData?.other_item_name : '']
    });

  }

  get t() {
    return this.createMaterialDistributionForm.controls;
  }

  createMaterialDistribution(materialDistribution, fam_details) {
    console.log(this.onDistributionEditData?.subItems);

    if (this.onDistributionEditData?.material_distribution_register_id) {

      if (this.onDistributionEditData.other_item_name) {
        this.OtherItemStatus = "O"
      } else {
        if (this.OtherItemStatus == "O") {
          this.OtherItemStatus = "I"
        } else {
          this.OtherItemStatus = "O"
        }
      }
    }

    this.familyDetails = fam_details;
    console.log(this.familyDetails, 'this.familyDetails');

    this.create_materialDistributionForm(this.onDistributionEditData);

    this.getItemList();

    console.log(fam_details.family_detail_id, 'family_detail_id');
    setTimeout(() => {
      this.modalContent = '';
      this.createMaterialModal = this.modalService.open(materialDistribution, {
        windowClass: 'materialDistribution',
      });

    }, 200);

    let viewChildObj = { dataAccessDTO: this.httpService.dataAccessDTO, family_detail_id: fam_details.family_detail_id };

    this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe((res: any) => {
      this.eligibleChildList = this.onDistributionEditData?.childList ? this.onDistributionEditData?.childList : res.responseObject;
      console.log(this.eligibleChildList, 'eligibleChildList');
    });

  }

  getItemList() {
    let ItemObj = { dataAccessDTO: this.httpService.dataAccessDTO };

    this.materialDistributionService.getItemSubItemList(ItemObj).subscribe((res: any) => {
      this.itemList = res.responseObject;
      this.itemList.push({ item_id: 'OTHERS', item_name: 'Others' })

      console.log(this.itemList);


      this.itemList.forEach(item => {
        if (item.item_id != "OTHERS") {
          this.subItemList = item.subItemList
          console.log(this.subItemList, 'subItemList');

          this.subItemList = this.subItemList?.map(({
            isChecked = false,
            ...rest
          }) => ({
            isChecked,
            ...rest
          }));
          console.log(this.subItemList, 'subItemList');
          this.onDistributionEditData?.subItems?.forEach(item => {
            this.subItemList?.filter(it => it.sub_item_id == item.md_sub_item_id)?.forEach(item1 => {
              item1.isChecked = true;
            })
          })
          item.subItemList = this.subItemList;
          console.log(item.subItemList, '351');
        }
      })

    });
  }

  changeItemList(itemSubItemList, itemId, i) {
    console.log(itemId);

    this.itemID = i;
    console.log(this.itemList);
    this.itemName = this.itemList.find(item => item.item_id == itemId)?.item_name;
    console.log(this.itemName);

    if (itemId != 'OTHERS') {
      this.modalContent = '';
      this.modalReference = this.modalService.open(itemSubItemList, {
        windowClass: 'itemSubItemList',
      });
    } else {
      if (this.createMaterialDistributionForm.value.enterSubItem) {
        this.OtherItemStatus = "O"
      } else {
        if (this.OtherItemStatus == "O") {
          this.OtherItemStatus = "I"
        } else {
          this.OtherItemStatus = "O"
        }
      }

    }

    this.subItemList = this.itemList.find(item => item.item_id == itemId)?.subItemList;
    console.log(this.subItemList, 'subItemList');

  }

  selectSubItemForMD(subItemList, e, type) {

    if (type == "C") {
      this.checked = e;

      if (this.checked == true) {
        this.showSelectedSI = ""
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = true;
        console.log(this.subItemList, 'subItemList');
      } else {
        this.showSelectedSI = ""
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = false;
        console.log(this.subItemList, 'subItemList');
      }
    } else {
      this.itemList.find(v => v.item_id == e).subItemList = this.subItemList;
      this.checked = e;

      if (this.checked % 2 == 1) {
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = true;
        console.log(this.subItemList, 'subItemList');
        this.itemList[e].subItemList = this.subItemList;
      } else {
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = false;
        console.log(this.subItemList, 'subItemList');
        this.itemList[e].subItemList = this.subItemList;
      }
    }
  }

  saveLocallySubItem() {
    console.log(this.subItemList, 'subItemList');
    this.modalReference.close();
  }

  createMaterialDistributionModalDismiss() {
    var ID = this.onDistributionEditData?.material_distribution_register_id;

    if (ID) {
      this.onDistributionEditData = '';
      ID = 0;
      this.createMaterialModal.close();
      this.editItemID = '';
    }
    else {
      this.createMaterialModal.close();
    }
  }

  disabledSaveMaterialTraining() {
    let flag = false;

    this.itemList.forEach(item => {
      item.subItemList?.forEach(item1 => {
        if (item1.isChecked == true || this.createMaterialDistributionForm.value.enterSubItem) {
          flag = true
        }
      })
    })

    return flag;
  }

  createMaterialDistributionSave() {
    this.subItemMultiItem = [];
    console.log('createMaterialDistributionSave');
    console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
    console.log(this.onDistributionEditData, 'onDistributionEditData');
    console.log(this.itemList, 'wholeitemliost');
    this.itemList.forEach((x) => {
      if (x.item_id != 'OTHERS') {
        var multiSub = []
        multiSub = x.subItemList.filter(it => it.isChecked == true)
        console.log(multiSub, 'inside loop')
        multiSub.forEach((y) => {
          this.subItemMultiItem.push(y.sub_item_id);
          console.log(this.subItemMultiItem, ' this.subItemMultiItem');
        })
      }

    })

    console.log(this.subItemMultiItem, ' finallistsi');
    console.log(this.onDistributionEditData);
    console.log(this.familyDetails.family_detail_id);


    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: this.onDistributionEditData ? this.onDistributionEditData?.material_distribution_register_id : 0,
      active_flag: this.onDistributionEditData ? 'U' : 'C',
      family_detail_id: this.onDistributionEditData ? this.onDistributionEditData?.family_detail_id : this.familyDetails.family_detail_id,
      pregnant_woman: this.onDistributionEditData ? this.onDistributionEditData?.pregnant_woman : this.familyDetails.pregnant_woman,
      subItems: this.subItemMultiItem,
      otherItem: this.createMaterialDistributionForm.value.enterSubItem ? this.createMaterialDistributionForm.value.enterSubItem : null
    };

    console.log(saveReq, 'saveReq');

    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(saveReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.createMaterialDistributionModalDismiss();
        this.eligibleFamilyDetailsModalDismiss();
        this.viewDistributionDetailsModalDismiss();
        this.changeVillage(this.villageID);
      } else {
        this.showError(res.message);
      }

    })

  }

  editMaterialDistributedFamily(materialDistribution, mat) {
    this.onDistributionEditData = mat;
    this.createMaterialDistribution(materialDistribution, mat);
  }

  deleteMaterialDistributedFamily(mat, i) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete distribution record ?')
      .then(() => this.delete(mat, i)
      )
      .catch(() => '');
  }

  delete(mat, i) {
    console.log(mat, 'deleteMaterialDistributedFamily');
    let deleteReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: mat.material_distribution_register_id,
      active_flag: 'D',
      family_detail_id: mat.family_detail_id,
      pregnant_woman: mat.pregnant_woman,
      subItems: mat.subItems,
      otherItem: mat.other_item_map_id
    };

    console.log(deleteReq);

    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(deleteReq).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.materialDistributionListFamilyWise.splice(i, 1);
      } else {
        this.showError(res.message);
      }

    })

  }

  showSuccess(message) {
    this.toaster.success(message, 'Material Distribution Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Material Distribution Register', {
      timeOut: 3000,
    });
  }


}
