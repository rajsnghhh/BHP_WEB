"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_district-setup_district-setup_module_ts"],{

/***/ 15386:
/*!*************************************************************************!*\
  !*** ./src/app/modules/district-setup/district-setup-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictSetupRoutingModule": () => (/* binding */ DistrictSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _district_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district-setup.component */ 65031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _district_setup_component__WEBPACK_IMPORTED_MODULE_0__.DistrictSetupComponent
}];
class DistrictSetupRoutingModule {}
DistrictSetupRoutingModule.ɵfac = function DistrictSetupRoutingModule_Factory(t) {
  return new (t || DistrictSetupRoutingModule)();
};
DistrictSetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DistrictSetupRoutingModule
});
DistrictSetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DistrictSetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 65031:
/*!********************************************************************!*\
  !*** ./src/app/modules/district-setup/district-setup.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictSetupComponent": () => (/* binding */ DistrictSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _district_setup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district-setup.service */ 3503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);













function DistrictSetupComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", state_r7.stateMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r7.stateName, "");
  }
}
function DistrictSetupComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DistrictSetupComponent_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f.state.errors.required);
  }
}
function DistrictSetupComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DistrictSetupComponent_div_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.districtModal(_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DistrictSetupComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_tr_33_td_5_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DistrictSetupComponent_tr_33_td_5_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const district_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.districtModal(_r5, district_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_tr_33_td_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DistrictSetupComponent_tr_33_td_5_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const district_r12 = ctx_r21.$implicit;
      const i_r13 = ctx_r21.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.deleteDistrictForm(district_r12, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_tr_33_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DistrictSetupComponent_tr_33_td_5_i_1_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DistrictSetupComponent_tr_33_td_5_i_2_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.deleteMode);
  }
}
function DistrictSetupComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DistrictSetupComponent_tr_33_td_5_Template, 3, 2, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r4.p - 1) * 5 + i_r13 + 1 ? (ctx_r4.p - 1) * 5 + i_r13 + 1 : i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](district_r12.districtName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.updateMode || ctx_r4.deleteMode);
  }
}
function DistrictSetupComponent_ng_template_36_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " District Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_ng_template_36_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DistrictSetupComponent_ng_template_36_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DistrictSetupComponent_ng_template_36_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DistrictSetupComponent_ng_template_36_div_18_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r23.c.district.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r23.c.district.errors.minlength);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function DistrictSetupComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 1)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "State :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 37)(7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DistrictSetupComponent_ng_template_36_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.districtModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 39)(10, "form", 6)(11, "div", 1)(12, "div", 40)(13, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "District:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, DistrictSetupComponent_ng_template_36_div_18_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 43)(20, "div", 1)(21, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DistrictSetupComponent_ng_template_36_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.saveDistrictForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0 ", ctx_r6.stateName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r6.districtCreateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r6.c.district.invalid && ctx_r6.c.district.touched, ctx_r6.c.district.valid && (ctx_r6.c.district.dirty || ctx_r6.c.district.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.c.district.errors);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class DistrictSetupComponent {
  constructor(fb, httpService, districtService, modalService, toaster, confirmationDialogService, validationService, sidebarService, router) {
    this.fb = fb;
    this.httpService = httpService;
    this.districtService = districtService;
    this.modalService = modalService;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.validationService = validationService;
    this.sidebarService = sidebarService;
    this.router = router;
    this.stateList = [];
    this.districtList = [];
    this.page = 1;
    this.pageSize = 6;
  }
  ngOnInit() {
    this.createForm();
    // Api call for viewing state list
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.districtService.getStateList(obj).subscribe(res => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 186 || item.subFunctionMasterId == 187 || item.subFunctionMasterId == 188 || item.subFunctionMasterId == 189)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/district-setup']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 186 || item.subFunctionMasterId == 187 || item.subFunctionMasterId == 188 || item.subFunctionMasterId == 189)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 186 || item.subFunctionMasterId == 187 || item.subFunctionMasterId == 188 || item.subFunctionMasterId == 189)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 186 || item.subFunctionMasterId == 187 || item.subFunctionMasterId == 188 || item.subFunctionMasterId == 189)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  createForm() {
    this.districtForm = this.fb.group({
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get f() {
    return this.districtForm?.controls;
  }
  createModalForm(editDistData) {
    this.districtCreateForm = this.fb.group({
      district: [editDistData?.districtName ? editDistData?.districtName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])]
    });
    if (editDistData?.districtName) {
      this.districtCreateForm.markAllAsTouched();
    }
  }
  get c() {
    return this.districtCreateForm?.controls;
  }
  districtModalDismiss() {
    console.log(this.districtId);
    if (this.districtId) {
      this.districtId = 0;
      this.editDistData = [];
      this.modalReference?.close();
    } else {
      this.modalReference?.close();
    }
  }
  changeState(stateId) {
    this.stateId = stateId;
    console.log(this.stateId);
    this.stateName = this.stateList.find(state => state.stateMasterId == this.stateId)?.stateName;
    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: this.stateId
    };
    this.districtService.getDistrictList(postBody).subscribe(res => {
      this.districtList = res.responseObject;
      console.log(this.districtList);
    });
    if (this.districtForm.value.state == '') {
      this.districtList = [];
    }
  }
  districtModal(createDistrict, district) {
    this.districtId = district?.districtMasterId;
    this.editDistData = district;
    console.log(this.districtId, this.editDistData, 'districtMasterId', 'editDistData');
    console.log(this.stateId, 'stateId create');
    this.modalContent = '';
    this.modalReference = this.modalService.open(createDistrict, {
      windowClass: 'createDistrict'
    });
    this.createModalForm(this.editDistData);
  }
  saveDistrictForm() {
    this.districtCreateForm.value.district = this.validationService.firstCaps(this.districtCreateForm.value.district.trim());
    this.checkDuplicateDistrict();
  }
  checkDuplicateDistrict() {
    var userInputDistrict = this.districtCreateForm.value.district;
    let existingDistrictName;
    existingDistrictName = this.districtList?.find(dist => dist.districtName == userInputDistrict)?.districtName;
    console.log(existingDistrictName);
    if (userInputDistrict == existingDistrictName) {
      this.showError(userInputDistrict + ' ' + 'already exists in the State. Please retry with a different name');
      return;
    }
    if (this.districtCreateForm.valid) {
      let saveObj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        districtDto: {
          districtMasterId: this.districtId ? this.districtId : 0,
          stateId: this.stateId,
          districtCode: this.editDistData?.districtCode ? this.editDistData?.districtCode : null,
          districtName: this.validationService.camelize(this.districtCreateForm.value.district.trim()),
          active_flag: "Y"
        }
      };
      console.log(saveObj);
      this.districtService.saveOrUpdateDistrict(saveObj).subscribe(res => {
        if (res.status == true) {
          this.showSuccess(res.message);
          this.districtModalDismiss();
          this.changeState(this.stateId);
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  deleteDistrictForm(district, i) {
    console.log(district);
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?').then(() => this.delete(district, i)).catch(() => '');
  }
  delete(district, i) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      districtDto: {
        districtMasterId: district.districtMasterId,
        stateId: district.stateId,
        districtCode: district.districtCode ? district.districtCode : null,
        districtName: district.districtName,
        active_flag: 'N'
      }
    };
    console.log(obj);
    this.districtService.saveOrUpdateDistrict(obj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.districtList.splice(i, 1);
        this.changeState(this.stateId);
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Create District', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Create District', {
      timeOut: 3000
    });
  }
}
DistrictSetupComponent.ɵfac = function DistrictSetupComponent_Factory(t) {
  return new (t || DistrictSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_district_setup_service__WEBPACK_IMPORTED_MODULE_1__.DistrictSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
DistrictSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DistrictSetupComponent,
  selectors: [["app-district-setup"]],
  decls: 38,
  vars: 15,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "state"], [1, "text-danger"], ["formControlName", "state", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["createDistrict", ""], [3, "value"], [1, "invalid-feedback"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create District Here", 1, "btn", "btn-primary", 3, "click"], ["style", "padding: 0px;", 4, "ngIf"], [2, "padding", "0px"], ["class", "fas fa-edit", "title", "Edit District", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete District", 3, "click", 4, "ngIf"], ["title", "Edit District", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete District", 1, "fas", "fa-trash", 3, "click"], [1, "modal-header"], [1, "form-group", "col-md-5"], ["for", "branch", 2, "font-weight", "500", "font-size", "1.05rem"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], [1, "form-group", "col-md-12"], ["for", "district"], ["type", "text", "placeholder", "district Name", "formControlName", "district", "maxlength", "20", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "click"]],
  template: function DistrictSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Create District");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "State :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DistrictSetupComponent_Template_select_change_14_listener($event) {
        return ctx.changeState($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "-- Select State --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DistrictSetupComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, DistrictSetupComponent_div_18_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, DistrictSetupComponent_div_20_Template, 3, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "District Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, DistrictSetupComponent_th_31_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, DistrictSetupComponent_tr_33_Template, 6, 3, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "pagination-controls", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function DistrictSetupComponent_Template_pagination_controls_pageChange_35_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function DistrictSetupComponent_Template_pagination_controls_pageBoundsCorrection_35_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, DistrictSetupComponent_ng_template_36_Template, 23, 7, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.districtForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c0, ctx.f.state.invalid && ctx.f.state.touched, ctx.f.state.valid && (ctx.f.state.dirty || ctx.f.state.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.stateList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.state.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.districtForm.value.state && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updateMode || ctx.deleteMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](34, 7, ctx.districtList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c1, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    height: 130px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    margin-right: 1020px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kaXN0cmljdC1zZXR1cC9kaXN0cmljdC1zZXR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAyMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88508:
/*!*****************************************************************!*\
  !*** ./src/app/modules/district-setup/district-setup.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictSetupModule": () => (/* binding */ DistrictSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _district_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district-setup-routing.module */ 15386);
/* harmony import */ var _district_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district-setup.component */ 65031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class DistrictSetupModule {}
DistrictSetupModule.ɵfac = function DistrictSetupModule_Factory(t) {
  return new (t || DistrictSetupModule)();
};
DistrictSetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DistrictSetupModule
});
DistrictSetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _district_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistrictSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DistrictSetupModule, {
    declarations: [_district_setup_component__WEBPACK_IMPORTED_MODULE_1__.DistrictSetupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _district_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistrictSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 3503:
/*!******************************************************************!*\
  !*** ./src/app/modules/district-setup/district-setup.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictSetupService": () => (/* binding */ DistrictSetupService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DistrictSetupService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getStateList(obj) {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj);
  }
  getDistrictList(obj) {
    return this.http.post(`${this.baseURL}district/view`, obj);
  }
  saveOrUpdateDistrict(obj) {
    return this.http.post(`${this.baseURL}district/saveOrUpdate`, obj);
  }
}
DistrictSetupService.ɵfac = function DistrictSetupService_Factory(t) {
  return new (t || DistrictSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DistrictSetupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DistrictSetupService,
  factory: DistrictSetupService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_district-setup_district-setup_module_ts.js.map