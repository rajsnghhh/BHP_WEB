"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_remap-user-ss_remap-user-ss_module_ts"],{

/***/ 69397:
/*!***********************************************************************!*\
  !*** ./src/app/modules/remap-user-ss/remap-user-ss-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserSsRoutingModule": () => (/* binding */ RemapUserSsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _remap_user_ss_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remap-user-ss.component */ 82542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _remap_user_ss_component__WEBPACK_IMPORTED_MODULE_0__.RemapUserSsComponent
}];
class RemapUserSsRoutingModule {}
RemapUserSsRoutingModule.ɵfac = function RemapUserSsRoutingModule_Factory(t) {
  return new (t || RemapUserSsRoutingModule)();
};
RemapUserSsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RemapUserSsRoutingModule
});
RemapUserSsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RemapUserSsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 82542:
/*!******************************************************************!*\
  !*** ./src/app/modules/remap-user-ss/remap-user-ss.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserSsComponent": () => (/* binding */ RemapUserSsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _remap_user_ss_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remap-user-ss.service */ 17684);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);











function RemapUserSsComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", region_r10.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", region_r10.regionName, " ");
  }
}
function RemapUserSsComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserSsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserSsComponent_div_19_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors.required);
  }
}
function RemapUserSsComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", branch_r12.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", branch_r12.branchName, " ");
  }
}
function RemapUserSsComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserSsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserSsComponent_div_29_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.branch.errors.required);
  }
}
function RemapUserSsComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hco_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", hco_r14.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", hco_r14.user_firstname, " ", hco_r14.user_middlename, " ", hco_r14.user_lastname, " - ", hco_r14.role_shortname, " ");
  }
}
function RemapUserSsComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserSsComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Role selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserSsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserSsComponent_div_40_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.hco.errors.required);
  }
}
function RemapUserSsComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserSsComponent_tr_58_Template_input_change_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const item_r16 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](60);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.remapUserSS($event, item_r16.swasthyaSahayikaId, _r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r7.p - 1) * 5 + i_r17 + 1 ? (ctx_r7.p - 1) * 5 + i_r17 + 1 : i_r17 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.swasthyaSahayikaName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r16.swasthyaSahayikaHusbandOrGuardianName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.swasthyaSahayikaAddress);
  }
}
function RemapUserSsComponent_ng_template_59_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hcouser_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", hcouser_r22.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", hcouser_r22.user_firstname, " ", hcouser_r22.user_middlename, " ", hcouser_r22.user_lastname, " - ", hcouser_r22.role_shortname, " ");
  }
}
function RemapUserSsComponent_ng_template_59_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "User selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserSsComponent_ng_template_59_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserSsComponent_ng_template_59_div_15_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.s.hcouser.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function RemapUserSsComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemapUserSsComponent_ng_template_59_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 39)(5, "form", 7)(6, "div", 8)(7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "HCO/ HCOI/ TL :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 41)(12, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "-- Select Role --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RemapUserSsComponent_ng_template_59_option_14_Template, 2, 5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RemapUserSsComponent_ng_template_59_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "NOTE: All household mapped with this SS will be unmapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2)(20, "div", 43)(21, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemapUserSsComponent_ng_template_59_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.saveRemapUserSSFromModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Remap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, ctx_r9.s.hcouser.invalid && ctx_r9.s.hcouser.touched, ctx_r9.s.hcouser.valid && (ctx_r9.s.hcouser.dirty || ctx_r9.s.hcouser.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.hcoModalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.s.hcouser.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r9.modalForm.value.hcouser);
  }
}
class RemapUserSsComponent {
  constructor(fb, httpService, remapUserSSService, toaster, modalService, router, sidebarService, config) {
    this.fb = fb;
    this.httpService = httpService;
    this.remapUserSSService = remapUserSSService;
    this.toaster = toaster;
    this.modalService = modalService;
    this.router = router;
    this.sidebarService = sidebarService;
    this.regionList = [];
    this.branchList = [];
    this.hcoList = [];
    this.loader = true;
    this.hcoSSList = [];
    this.hcoModalList = [];
    this.remapSSDto = {
      dataAccessDTO: {},
      ssId: '',
      remapUserId: null
    };
    this.ssLists = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.createForm();
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.remapUserSSService.listOfRegionsOfUser(obj).subscribe(res => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
    this.sidebarService.subMenuList.find(functionMasterId => functionMasterId.functionMasterId == 3)?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 206)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/remap-user-ss']) : this.router.navigate(['/error']);
  }
  createForm() {
    this.remapUserSSForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      hco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  get f() {
    return this.remapUserSSForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.remapUserSSService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    this.remapUserSSForm.controls.branch.setValue('');
    this.remapUserSSForm.controls.hco.setValue('');
    this.hcoSSList = [];
    this.hcoList = [];
    if (this.remapUserSSForm.value.region == '') {
      this.remapUserSSForm.controls.branch.setValue('');
      this.remapUserSSForm.controls.hco.setValue('');
      this.hcoSSList = [];
      this.hcoList = [];
    }
  }
  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId, 'branchId');
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.remapUserSSService.hcoListOfBranch(Dto).subscribe(res => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });
    this.remapUserSSForm.controls.hco.setValue('');
    this.hcoSSList = [];
    this.hcoList = [];
    if (this.remapUserSSForm.value.branch == '') {
      this.remapUserSSForm.controls.hco.setValue('');
      this.hcoList = [];
      this.hcoSSList = [];
    }
  }
  changeHco(hcoUserId) {
    this.hcoUserId = hcoUserId;
    console.log(this.hcoUserId);
    if (hcoUserId == 'NA') {
      let obj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.branchId
      };
      this.loader = false;
      console.log(obj);
      this.remapUserSSService.getListOfUnmappedSSOfABranch(obj).subscribe(res => {
        this.hcoSSList = res.responseObject;
        console.log(this.hcoSSList);
        this.loader = true;
      });
    } else {
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        userId: this.hcoUserId
      };
      this.loader = false;
      this.remapUserSSService.getActiveSsListOfAnUser(Dto).subscribe(res => {
        this.hcoSSList = res.responseObject;
        console.log(this.hcoSSList);
        if (this.hcoSSList == null) {
          this.showError('No Data Found');
        }
        this.loader = true;
      }, error => {
        this.showError('Error');
        this.loader = true;
      });
    }
    this.hcoSSList = [];
    if (this.remapUserSSForm.value.hco == '') {
      this.hcoSSList = [];
    }
  }
  remapUserSS(e, ssID, remapSS) {
    this.checkboxData = e.target.checked;
    this.remapModalForm();
    console.log(this.checkboxData, 'this.checkboxData ', ssID);
    if (this.checkboxData) {
      this.modalContent = '';
      this.modalReference = this.modalService.open(remapSS, {
        windowClass: 'remapSS'
      });
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.branchId
      };
      this.remapUserSSService.hcoListOfBranch(Dto).subscribe(res => {
        this.hcoModalList = res.responseObject;
        console.log(this.hcoModalList, 'hcoModalList');
      });
      this.remapSSDto.dataAccessDTO = this.httpService.dataAccessDTO, this.remapSSDto.ssId = ssID;
      console.log(this.checkboxData);
    } else {
      this.remapSSDto.ssId = null;
    }
    console.log(this.remapSSDto, 'remapSSDto');
  }
  remapModalForm() {
    this.modalForm = this.fb.group({
      hcouser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  get s() {
    return this.modalForm.controls;
  }
  saveRemapUserSSFromModal() {
    this.remapSSDto.remapUserId = parseInt(this.modalForm.value.hcouser);
    console.log(this.remapSSDto, 'final  this.remapSSDto');
    console.log(this.hcoUserId, ' this.hcoUserId ');
    if (this.hcoUserId == this.modalForm.value.hcouser) {
      this.showError('SS Cannot be remapped with same user');
      return;
    }
    this.remapUserSSService.remapSsWithUser(this.remapSSDto).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcoUserId);
      }
      ;
    });
  }
  modalDismiss() {
    this.modalReference.close();
    this.remapSSDto.remapUserId = null;
    var uncheck = document.getElementsByClassName("form-check-input");
    for (var i = 0; i < uncheck.length; i++) {
      if (uncheck[i].checked == true) {
        uncheck[i].checked = false;
        console.log(uncheck[i].checked);
      }
    }
  }
  getActiveSS(hcoUserId) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: hcoUserId
    };
    this.remapUserSSService.getActiveSsListOfAnUser(obj).subscribe(res => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Remap-User-SS', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Remap-User-SS', {
      timeOut: 3000
    });
  }
}
RemapUserSsComponent.ɵfac = function RemapUserSsComponent_Factory(t) {
  return new (t || RemapUserSsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_remap_user_ss_service__WEBPACK_IMPORTED_MODULE_1__.RemapUserSsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalConfig));
};
RemapUserSsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RemapUserSsComponent,
  selectors: [["app-remap-user-ss"]],
  decls: 61,
  vars: 22,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["for", "hco"], ["formControlName", "hco", "id", "hco", 1, "form-select", 3, "ngClass", "change"], ["value", "NA", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "9%"], [2, "width", "26%"], [2, "width", "22%"], [4, "ngFor", "ngForOf"], ["remapSS", ""], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["value", "NA"], [2, "width", "28%"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], [1, "modal-header"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["for", "hcouser"], ["formControlName", "hcouser", "id", "hcouser", 1, "form-select", 3, "ngClass"], [2, "color", "#dc3545"], [1, "form-group", "col-md-6", 2, "margin-left", "420px"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"]],
  template: function RemapUserSsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Remap SS-User");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserSsComponent_Template_select_change_15_listener($event) {
        return ctx.changeRegion($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RemapUserSsComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RemapUserSsComponent_div_19_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Branch :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserSsComponent_Template_select_change_25_listener($event) {
        return ctx.changeBranch($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "-- Select Branch --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RemapUserSsComponent_option_28_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RemapUserSsComponent_div_29_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8)(31, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "HCO/ HCOI/ TL :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserSsComponent_Template_select_change_35_listener($event) {
        return ctx.changeHco($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "-- Select Role --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, RemapUserSsComponent_option_38_Template, 2, 5, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, RemapUserSsComponent_option_39_Template, 2, 0, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RemapUserSsComponent_div_40_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20)(42, "div", 21)(43, "div", 22)(44, "table", 23)(45, "thead", 24)(46, "tr")(47, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "SS Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "SS Husband/ Guardian's Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "SS Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Remap");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, RemapUserSsComponent_tr_58_Template, 11, 4, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, RemapUserSsComponent_ng_template_59_Template, 23, 8, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.remapUserSSForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](13, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c0, ctx.f.branch.invalid && ctx.f.branch.touched, ctx.f.branch.valid && (ctx.f.branch.dirty || ctx.f.branch.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.branch.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](19, _c0, ctx.f.hco.invalid && ctx.f.hco.touched, ctx.f.hco.valid && (ctx.f.hco.dirty || ctx.f.hco.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hcoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.remapUserSSForm.value.branch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.hco.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hcoSSList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent],
  styles: ["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 200px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    \r\n    height: 8px;\r\n    background: transparent;\r\n    \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    \r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n    height: 120px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    margin-left: 440px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZW1hcC11c2VyLXNzL3JlbWFwLXVzZXItc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQSxnREFBZ0Q7QUFDaEQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxudGFibGUgdGhlYWQsIHRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gY29sb3VyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NDBweDtcclxufSBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2520:
/*!***************************************************************!*\
  !*** ./src/app/modules/remap-user-ss/remap-user-ss.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserSsModule": () => (/* binding */ RemapUserSsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _remap_user_ss_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remap-user-ss-routing.module */ 69397);
/* harmony import */ var _remap_user_ss_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remap-user-ss.component */ 82542);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class RemapUserSsModule {}
RemapUserSsModule.ɵfac = function RemapUserSsModule_Factory(t) {
  return new (t || RemapUserSsModule)();
};
RemapUserSsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RemapUserSsModule
});
RemapUserSsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _remap_user_ss_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemapUserSsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RemapUserSsModule, {
    declarations: [_remap_user_ss_component__WEBPACK_IMPORTED_MODULE_1__.RemapUserSsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _remap_user_ss_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemapUserSsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
  });
})();

/***/ }),

/***/ 17684:
/*!****************************************************************!*\
  !*** ./src/app/modules/remap-user-ss/remap-user-ss.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserSsService": () => (/* binding */ RemapUserSsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class RemapUserSsService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  listOfRegionsOfUser(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj);
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  hcoListOfBranch(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
  }
  getActiveSsListOfAnUser(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getActiveSsListOfAnUser`, obj);
  }
  remapSsWithUser(obj) {
    return this.http.post(`${this.baseURL}remap/remapSsWithUser`, obj);
  }
  getListOfUnmappedSSOfABranch(obj) {
    return this.http.post(`${this.baseURL}remap/getListOfUnmappedSSOfAVillage`, obj);
  }
}
RemapUserSsService.ɵfac = function RemapUserSsService_Factory(t) {
  return new (t || RemapUserSsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RemapUserSsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RemapUserSsService,
  factory: RemapUserSsService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_remap-user-ss_remap-user-ss_module_ts.js.map