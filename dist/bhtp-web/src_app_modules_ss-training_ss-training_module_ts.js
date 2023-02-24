"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_ss-training_ss-training_module_ts"],{

/***/ 8818:
/*!*******************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsTrainingRoutingModule": () => (/* binding */ SsTrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ss_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ss-training.component */ 91129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _ss_training_component__WEBPACK_IMPORTED_MODULE_0__.SsTrainingComponent
}];
class SsTrainingRoutingModule {}
SsTrainingRoutingModule.ɵfac = function SsTrainingRoutingModule_Factory(t) {
  return new (t || SsTrainingRoutingModule)();
};
SsTrainingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SsTrainingRoutingModule
});
SsTrainingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SsTrainingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91129:
/*!**************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsTrainingComponent": () => (/* binding */ SsTrainingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _ss_training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ss-training.service */ 36191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
















function SsTrainingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_div_8_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](63);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.createSSTrainingEvents(_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Schedule SS Training Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SsTrainingComponent_div_10_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", region_r15.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", region_r15.regionName, " ");
  }
}
function SsTrainingComponent_div_10_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_div_10_div_10_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.l.region.errors.required);
  }
}
function SsTrainingComponent_div_10_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", branch_r17.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", branch_r17.branchName, " ");
  }
}
function SsTrainingComponent_div_10_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_div_10_div_20_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SsTrainingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 10)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_div_10_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SsTrainingComponent_div_10_option_9_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SsTrainingComponent_div_10_div_10_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_div_10_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, SsTrainingComponent_div_10_option_19_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SsTrainingComponent_div_10_div_20_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c0, ctx_r1.l.region.invalid && ctx_r1.l.region.touched, ctx_r1.l.region.valid && (ctx_r1.l.region.dirty || ctx_r1.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](9, _c0, ctx_r1.l.branch.invalid && ctx_r1.l.branch.touched, ctx_r1.l.branch.valid && (ctx_r1.l.branch.dirty || ctx_r1.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.l.branch.errors);
  }
}
function SsTrainingComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filterTraining_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", filterTraining_r22.training_type_master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", filterTraining_r22.training_type_name, " ");
  }
}
function SsTrainingComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_tr_57_td_17_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_tr_57_td_17_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const event_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](63);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.editSSTrainingEvents(event_r23, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_tr_57_td_17_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_tr_57_td_17_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const event_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.deleteSSTrainingEvents(event_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_tr_57_td_17_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_tr_57_td_17_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const event_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r35.approveSSTrainingEvents(event_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_tr_57_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_tr_57_td_17_i_1_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SsTrainingComponent_tr_57_td_17_i_2_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SsTrainingComponent_tr_57_td_17_i_3_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r25.approveMode);
  }
}
function SsTrainingComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_tr_57_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);
      const event_r23 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](61);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.viewParticipantsDetails(_r5, event_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SsTrainingComponent_tr_57_td_17_Template, 4, 3, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](event_r23.training_type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", event_r23.ss_training_event_start_date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", event_r23.ss_training_event_end_date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](event_r23.ssCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](event_r23.ssCompletedTraining);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", event_r23.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.updateMode || ctx_r4.deleteMode || ctx_r4.approveMode);
  }
}
function SsTrainingComponent_ng_template_60_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const eventSS_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r44 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](eventSS_r43.swasthya_sahayika_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](eventSS_r43.branch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](eventSS_r43.village_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", eventSS_r43.user_firstname ? eventSS_r43.user_firstname : "-", " ", eventSS_r43.user_middlename, " ", eventSS_r43.user_lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", eventSS_r43.countAttendance ? eventSS_r43.countAttendance : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](eventSS_r43.status ? eventSS_r43.status : "-");
  }
}
function SsTrainingComponent_ng_template_60_h3_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Event Captured Images : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_60_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53)(1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const attendance_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", attendance_r45.ss_training_attendance_page_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", attendance_r45.ss_training_attendance_page_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Page : ", attendance_r45.ss_training_event_attendance_page_no, "");
  }
}
function SsTrainingComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 2)(3, "div", 53)(4, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Participants Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 53)(7, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_60_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.detailsOfParticipantsModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 56)(10, "div", 19)(11, "div", 20)(12, "div", 21)(13, "table", 22)(14, "thead", 23)(15, "tr")(16, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Staff In Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "tbody", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SsTrainingComponent_ng_template_60_tr_31_Template, 15, 9, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SsTrainingComponent_ng_template_60_h3_32_Template, 2, 0, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, SsTrainingComponent_ng_template_60_div_34_Template, 5, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.eventSSList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.attendanceImage.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.attendanceImage);
  }
}
function SsTrainingComponent_ng_template_62_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Create SS Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Edit SS Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Region Name:\u00A0\u00A0", ctx_r51.regionName ? ctx_r51.regionName : "NA", "");
  }
}
function SsTrainingComponent_ng_template_62_h3_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Branch Name:\u00A0\u00A0", ctx_r52.branchName ? ctx_r52.branchName : "NA", "");
  }
}
function SsTrainingComponent_ng_template_62_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Branch Name:\u00A0\u00A0", ctx_r53.branchName ? ctx_r53.branchName : "NA", "");
  }
}
function SsTrainingComponent_ng_template_62_span_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_62_span_10_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r65.ssTrainingModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_span_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_62_span_11_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r67.ssTrainingModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trainingType_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", trainingType_r69.training_type_master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", trainingType_r69.training_type_name, " ");
  }
}
function SsTrainingComponent_ng_template_62_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Type Of Training selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_62_div_24_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r57.t.trainingType.errors.required);
  }
}
function SsTrainingComponent_ng_template_62_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_62_div_36_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r58.t.fromDate.errors.required);
  }
}
function SsTrainingComponent_ng_template_62_div_50_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trainingtopic_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", trainingtopic_r74.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", trainingtopic_r74.ss_training_event_topic_name, " ");
  }
}
function SsTrainingComponent_ng_template_62_div_50_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Topic of Training selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_62_div_50_div_9_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r73.t.trainingtopic.errors.required);
  }
}
function SsTrainingComponent_ng_template_62_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Topic of Training :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "select", 100)(6, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "-- Select Training Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SsTrainingComponent_ng_template_62_div_50_option_8_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SsTrainingComponent_ng_template_62_div_50_div_9_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c0, ctx_r59.t.trainingtopic.invalid && ctx_r59.t.trainingtopic.touched, ctx_r59.t.trainingtopic.valid && (ctx_r59.t.trainingtopic.dirty || ctx_r59.t.trainingtopic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r59.ssTrainingTopic);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r59.t.trainingtopic.errors);
  }
}
function SsTrainingComponent_ng_template_62_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", branch_r76.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", branch_r76.branchName, " ");
  }
}
function SsTrainingComponent_ng_template_62_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_62_div_64_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r61.t.ssbranch.errors.required);
  }
}
function SsTrainingComponent_ng_template_62_div_65_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Participant selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_div_65_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SsTrainingComponent_ng_template_62_div_65_div_12_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r78.t.participantType.errors.required);
  }
}
function SsTrainingComponent_ng_template_62_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Participant Type:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_div_65_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r80.filterSSList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "-- Select Participant --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "New SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Absent SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SsTrainingComponent_ng_template_62_div_65_div_12_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c0, ctx_r62.t.participantType.invalid && ctx_r62.t.participantType.touched, ctx_r62.t.participantType.valid && (ctx_r62.t.participantType.dirty || ctx_r62.t.participantType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r62.t.participantType.errors);
  }
}
function SsTrainingComponent_ng_template_62_option_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const staff_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", staff_r82.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" ", staff_r82.user_firstname, " ", staff_r82.user_middlename, " ", staff_r82.user_lastname, " - ", staff_r82.role_shortname, " ");
  }
}
function SsTrainingComponent_ng_template_62_tr_95_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_tr_95_input_12_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const ss_r83 = ctx_r88.$implicit;
      const i_r84 = ctx_r88.index;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r87.selectSSForTraining(ss_r83, i_r84, $event.target.checked, ss_r83.swasthya_sahayika_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_tr_95_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_tr_95_input_13_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r92);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const ss_r83 = ctx_r91.$implicit;
      const i_r84 = ctx_r91.index;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r90.selectSSForTraining(ss_r83, i_r84, $event.target.checked, ss_r83.swasthya_sahayika_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SsTrainingComponent_ng_template_62_tr_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SsTrainingComponent_ng_template_62_tr_95_input_12_Template, 1, 0, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SsTrainingComponent_ng_template_62_tr_95_input_13_Template, 1, 0, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ss_r83 = ctx.$implicit;
    const i_r84 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r84 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ss_r83.swasthya_sahayika_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ss_r83.branch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ss_r83.village_name ? ss_r83.village_name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ss_r83.user_firstname ? ss_r83.user_firstname : "-", " ", ss_r83.user_middlename, " ", ss_r83.user_lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ss_r83.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ss_r83.isChecked == false);
  }
}
function SsTrainingComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 2)(3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SsTrainingComponent_ng_template_62_h3_4_Template, 2, 0, "h3", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SsTrainingComponent_ng_template_62_h3_5_Template, 2, 0, "h3", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SsTrainingComponent_ng_template_62_h3_6_Template, 2, 1, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SsTrainingComponent_ng_template_62_h3_7_Template, 2, 1, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SsTrainingComponent_ng_template_62_h3_8_Template, 2, 1, "h3", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SsTrainingComponent_ng_template_62_span_10_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SsTrainingComponent_ng_template_62_span_11_Template, 2, 0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 56)(13, "form", 8)(14, "div", 2)(15, "div", 10)(16, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Type of Training:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_Template_select_change_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r93.changeTrainingType($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "-- Select Training Type --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, SsTrainingComponent_ng_template_62_option_23_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, SsTrainingComponent_ng_template_62_div_24_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 10)(26, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 2)(30, "div", 10)(31, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "From Date:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function SsTrainingComponent_ng_template_62_Template_input_keydown_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r95.restrictTypeOfDate());
    })("change", function SsTrainingComponent_ng_template_62_Template_input_change_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r96.expectToDate($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, SsTrainingComponent_ng_template_62_div_36_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 10)(38, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "To Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 2)(42, "div", 10)(43, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Trainer Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keypress", function SsTrainingComponent_ng_template_62_Template_input_keypress_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r97.validationService.onlyAlphabetsAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 10)(47, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Trainer Designation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keypress", function SsTrainingComponent_ng_template_62_Template_input_keypress_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r98.validationService.onlyAlphabetsAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, SsTrainingComponent_ng_template_62_div_50_Template, 10, 6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "fieldset", 86)(52, "legend", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "ADD SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 2)(55, "div", 10)(56, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Branch:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_Template_select_change_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r99.changessbranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, SsTrainingComponent_ng_template_62_option_63_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, SsTrainingComponent_ng_template_62_div_64_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, SsTrainingComponent_ng_template_62_div_65_Template, 13, 5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 10)(67, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Staff In Charge:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_ng_template_62_Template_select_change_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r100.changestaff($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "-- Filter By Staff --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, SsTrainingComponent_ng_template_62_option_74_Template, 2, 5, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "No User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 20)(78, "div", 21)(79, "table", 22)(80, "thead", 23)(81, "tr")(82, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Staff In Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "tbody", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](95, SsTrainingComponent_ng_template_62_tr_95_Template, 14, 9, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 93)(97, "div", 2)(98, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SsTrainingComponent_ng_template_62_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r101.saveSSTrainingForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx_r8.SSTrainingEditData == null ? null : ctx_r8.SSTrainingEditData.training_event_master_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.SSTrainingEditData == null ? null : ctx_r8.SSTrainingEditData.training_event_master_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r8.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.lowerRoleBranchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r8.createSSTrainingEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](23, _c0, ctx_r8.t.trainingType.invalid && ctx_r8.t.trainingType.touched, ctx_r8.t.trainingType.valid && (ctx_r8.t.trainingType.dirty || ctx_r8.t.trainingType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.ssTrainingType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.t.trainingType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", ctx_r8.setFromDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](26, _c0, ctx_r8.t.fromDate.invalid && ctx_r8.t.fromDate.touched, ctx_r8.t.fromDate.valid && (ctx_r8.t.fromDate.dirty || ctx_r8.t.fromDate.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.t.fromDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", ctx_r8.setToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.createSSTrainingEventForm.value.trainingType == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](29, _c0, ctx_r8.t.ssbranch.invalid && ctx_r8.t.ssbranch.touched, ctx_r8.t.ssbranch.valid && (ctx_r8.t.ssbranch.dirty || ctx_r8.t.ssbranch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.t.ssbranch.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.createSSTrainingEventForm.value.trainingType == 1 || ctx_r8.createSSTrainingEventForm.value.trainingType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.ssList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r8.disabledSaveTrainingForm());
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class SsTrainingComponent {
  constructor(fb, http, sidebarService, toaster, httpService, ssTrainingService, modalService, config, validationService, confirmationDialogService, router) {
    this.fb = fb;
    this.http = http;
    this.sidebarService = sidebarService;
    this.toaster = toaster;
    this.httpService = httpService;
    this.ssTrainingService = ssTrainingService;
    this.modalService = modalService;
    this.validationService = validationService;
    this.confirmationDialogService = confirmationDialogService;
    this.router = router;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.ssEventList = [];
    this.eventSSList = [];
    this.ssList = [];
    this.AllSSList = [];
    this.ssTrainingType = [];
    this.ssTrainingTopic = [];
    this.ssTrainingDataPushPop = [];
    this.allBranchID = [];
    this.checkedSS = [];
    this.page = 1;
    this.pageSize = 6;
    this.staffList = [];
    this.attendanceImage = [];
    this.loader = false;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.createForm();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        this.branchList = res.branchLIST;
        this.branchName = res.branchName;
        console.log(this.branchName, 'this.branchName');
        this.allBranchID.push(this.lowerRoleBranchId);
        console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userId,
            userName: dataAccessDTO.userName
          },
          branchId: this.lowerRoleBranchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            this.loader = true;
          }
        });
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/ss-training']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.approveMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 7)?.subMenuDetailList.find(item => item.subFunctionMasterId == 212 || item.subFunctionMasterId == 213 || item.subFunctionMasterId == 214 || item.subFunctionMasterId == 215)?.accessDetailList.find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;
  }
  createForm() {
    this.viewSSTrainingEventForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      filterStartDate: [''],
      filterEndDate: [''],
      filterTraining: ['']
    });
    this.typeAndTopicTrainingList();
  }
  get l() {
    return this.viewSSTrainingEventForm.controls;
  }
  changeRegion(regionId) {
    this.regionID = regionId;
    console.log(this.regionID);
    this.regionName = this.regionList.find(reg => reg.regionMasterId == this.regionID)?.regionName;
    console.log(this.regionName, 'this.regionName');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: this.regionID
    };
    this.ssTrainingService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      this.branchList.forEach(item => {
        this.allBranchID.push(item.branchId);
        console.log(this.allBranchID);
      });
    });
    this.viewSSTrainingEventForm.controls.branch.setValue('');
    this.viewSSTrainingEventForm.controls.filterStartDate.setValue('');
    this.viewSSTrainingEventForm.controls.filterEndDate.setValue('');
    this.viewSSTrainingEventForm.controls.filterTraining.setValue('');
    this.ssEventList = [];
    if (this.viewSSTrainingEventForm.value.region == '') {
      this.viewSSTrainingEventForm.controls.branch.setValue('');
      this.ssEventList = [];
      this.branchList = [];
    }
  }
  changeBranch(branchId) {
    this.upperRoleBranchId = branchId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.ssTrainingService.branchWiseSSTrainingEventList(req).subscribe(res => {
      this.ssEventList = res.responseObject.branchWiseSsTrainingEventList;
      console.log(this.ssEventList, 'withoutfilterdata');
      if (this.viewSSTrainingEventForm.value.filterTraining) {
        this.ssEventList = this.ssEventList.filter(item => item.training_type_master_id == this.trainingEventID);
        console.log(this.ssEventList, 'filterdata');
      }
      if (this.viewSSTrainingEventForm.value.filterStartDate && this.viewSSTrainingEventForm.value.filterEndDate) {
        this.ssEventList = this.ssEventList.filter(item => item.ss_training_event_start_date >= this.viewSSTrainingEventForm.value.filterStartDate);
        console.log(this.ssEventList, 'ssEventListss_training_event_start_date');
        this.ssEventList = this.ssEventList.filter(item => item.ss_training_event_end_date <= this.viewSSTrainingEventForm.value.filterEndDate);
        console.log(this.ssEventList, 'ssEventListss_training_event_end_date');
      }
    });
    this.branchName = this.branchList.find(item => item.branchId == branchId)?.branchName;
    console.log(this.branchName, ' this.branchName');
  }
  filterListByTrainingType(trainingEventId) {
    this.trainingEventID = trainingEventId;
    this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
  }
  filterDateWiseSSTrainingList() {
    console.log(this.viewSSTrainingEventForm.value.filterStartDate, 'filterStartDate');
    console.log(this.viewSSTrainingEventForm.value.filterEndDate, 'filterEndDate');
    this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
  }
  viewParticipantsDetails(detailsOfParticipants, event) {
    this.eventSSList = event.ssList;
    console.log(this.eventSSList, 'ssList', event);
    this.modalContent = '';
    this.modalReference = this.modalService.open(detailsOfParticipants, {
      windowClass: 'detailsOfParticipants'
    });
    let imageReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: event.training_event_master_id
    };
    console.log(imageReq, 'imageReq');
    this.ssTrainingService.imageOfAEvent(imageReq).subscribe(res => {
      this.attendanceImage = res.responseObject;
      console.log(this.attendanceImage, 'attendanceImage');
    });
  }
  detailsOfParticipantsModalDismiss() {
    this.modalReference?.close();
  }
  typeAndTopicTrainingList() {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.ssTrainingService.ssTrainingTypeAndTopic(req).subscribe(res => {
      this.ssTrainingType = res.responseObject?.ssTrainingType;
      this.ssTrainingTopic = res.responseObject?.ssTrainingTopic;
      console.log(this.ssTrainingType, ' this.ssTrainingType');
      console.log(this.ssTrainingTopic, ' this.ssTrainingTopic');
    });
  }
  createSSTrainingEvents(SSTraining) {
    console.log(this.SSTrainingEditData, 'SSTrainingEditData');
    console.log(this.lowerRoleBranchId, 'lowerRoleBranchId');
    console.log(this.upperRoleBranchId, 'upperRoleBranchId');
    console.log(this.regionID, 'regionID');
    console.log(this.regionName, 'this.regionName');
    // setTimeout(() => {
    this.modalContent = '';
    this.modalReference = this.modalService.open(SSTraining, {
      windowClass: 'SSTraining'
    });
    // }, 1000);
    this.ssTrainingFormModal();
    this.createSSTrainingEventForm.controls['duration'].disable();
    if (!this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
      this.createSSTrainingEventForm.controls['toDate'].disable();
      this.createSSTrainingEventForm.controls['ssbranch'].disable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].disable();
    }
  }
  editSSTrainingEvents(event, SSTraining) {
    this.SSTrainingEditData = event;
    console.log(this.SSTrainingEditData, 'SSTrainingEditData');
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);
    if (event.ss_training_event_start_date > today) {
      this.createSSTrainingEvents(SSTraining);
    } else {
      this.ssTrainingModalDismiss();
      this.showError('Event is not available for edit');
      return;
    }
  }
  ssTrainingFormModal() {
    var data = this.SSTrainingEditData;
    console.log(data, 'data');
    this.createSSTrainingEventForm = this.fb.group({
      trainingType: [data?.training_type_master_id ? data?.training_type_master_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      duration: [''],
      fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      toDate: [''],
      trainername: [data?.trainer_name ? data?.trainer_name : ''],
      trainerdesignation: [data?.trainer_designation ? data?.trainer_designation : ''],
      trainingtopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      ssbranch: [this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      participantType: ['fresh', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      staff: ['']
    });
    this.createSSTrainingEventForm.markAllAsTouched();
    if (data) {
      this.changeTrainingType(data?.training_type_master_id);
      this.createSSTrainingEventForm.controls['toDate'].disable();
      this.createSSTrainingEventForm.controls.fromDate.setValue(data?.ss_training_event_start_date);
      this.expectToDate(data?.ss_training_event_start_date);
      this.createSSTrainingEventForm.controls.trainingtopic.setValue(data?.ss_training_event_topic_master_id);
    }
    this.branchWiseStaffList();
  }
  branchWiseStaffList() {
    let hcoreq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.createSSTrainingEventForm.value.ssbranch
    };
    console.log(hcoreq, 'hcoreq');
    this.ssTrainingService.staffListOfBranch(hcoreq).subscribe(res => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    });
  }
  get t() {
    return this.createSSTrainingEventForm.controls;
  }
  getMinDate() {
    let today = new Date().toISOString().slice(0, 10);
    this.setFromDate = moment__WEBPACK_IMPORTED_MODULE_0__(today).add(1, "days").format("YYYY-MM-DD");
  }
  expectToDate(e) {
    console.log(this.durationValue, 'this.durationValue');
    var mydate = new Date(e);
    if (mydate.getDay() == 0) {
      this.showError('Sunday not allowed');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
      return;
    }
    if (this.createSSTrainingEventForm.value.trainingType == 2) {
      this.setToDate = this.createSSTrainingEventForm.value.fromDate;
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      this.createSSTrainingEventForm.value.toDate = this.setToDate;
      console.log(this.setToDate, 'ifcondition');
    } else {
      e = new Date(e?.replace(/-/g, "/"));
      var endDate,
        noOfDaysToAdd = this.durationValue - 1,
        count = 0;
      while (count < noOfDaysToAdd) {
        endDate = new Date(e.setDate(e.getDate() + 1));
        if (endDate.getDay() != 0) {
          count++;
        }
      }
      this.setToDate = moment__WEBPACK_IMPORTED_MODULE_0__(endDate).format("YYYY-MM-DD");
      this.createSSTrainingEventForm.controls.toDate.setValue(this.setToDate);
      this.createSSTrainingEventForm.value.toDate = this.setToDate;
      console.log(this.setToDate, 'elsecondition');
    }
  }
  changeTrainingType(e) {
    this.getMinDate();
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    this.createSSTrainingEventForm.controls.trainingtopic.setValue('');
    if (e == 1) {
      this.createSSTrainingEventForm.controls.duration.setValue(6);
      this.createSSTrainingEventForm.value.duration = 6;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 2) {
      this.createSSTrainingEventForm.controls.duration.setValue(1);
      this.createSSTrainingEventForm.value.duration = 1;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].enable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 3) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else if (e == 4) {
      this.createSSTrainingEventForm.controls.duration.setValue(2);
      this.createSSTrainingEventForm.value.duration = 2;
      this.durationValue = this.createSSTrainingEventForm.value.duration;
      this.changeparticipantType('fresh', this.staffID);
      this.createSSTrainingEventForm.controls['ssbranch'].enable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].enable();
    } else {
      this.ssList = [];
      this.createSSTrainingEventForm.controls['ssbranch'].disable();
      this.createSSTrainingEventForm.controls['participantType'].disable();
      this.createSSTrainingEventForm.controls['staff'].disable();
    }
    console.log(this.createSSTrainingEventForm.value.duration, 'formdurationvalue');
    console.log(this.durationValue, 'vardurationvalue');
    this.createSSTrainingEventForm.controls.fromDate.setValue('');
    this.createSSTrainingEventForm.controls.toDate.setValue('');
    if (this.createSSTrainingEventForm.value.trainingType) {
      this.createSSTrainingEventForm.controls['fromDate'].enable();
    } else {
      this.createSSTrainingEventForm.controls['fromDate'].disable();
      this.createSSTrainingEventForm.controls.duration.setValue('');
      this.createSSTrainingEventForm.controls.fromDate.setValue('');
      this.createSSTrainingEventForm.controls.toDate.setValue('');
    }
  }
  changeparticipantType(participantType, staffID) {
    console.log(participantType);
    console.log(this.allBranchID, 'this.allBranchIDthis.allBranchID');
    let ssListObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.allBranchID,
      trainingTypeMasterId: this.createSSTrainingEventForm.value.trainingType,
      training_event_master_id: this.SSTrainingEditData?.training_event_master_id ? this.SSTrainingEditData?.training_event_master_id : 0
    };
    this.ssTrainingService.getSSList(ssListObj).subscribe(res => {
      this.AllSSList = res.responseObject;
      this.AllSSList = this.AllSSList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      this.ssList = this.AllSSList;
      console.log(this.ssList, 'this.AllSSList');
      if (this.SSTrainingEditData) {
        this.ssList?.forEach(item => {
          if (this.SSTrainingEditData?.ssList?.find(it => it.swasthya_sahayika_id == item.swasthya_sahayika_id)) {
            item.isChecked = true;
          }
        });
      }
      console.log(this.ssList, 'this.ssList');
      console.log(this.lowerRoleBranchId, "lowerRoleBranchId");
      console.log(this.upperRoleBranchId, "upperRoleBranchId");
      this.ssList = this.ssList?.filter(item => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
      console.log(this.ssList, 'this.specificSSList');
      if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
        if (participantType == 'fresh') {
          this.ssList = this.ssList?.filter(item => item.status == 'fresh');
          console.log(this.ssList, ' freshSSList');
        } else if (participantType == 'absent') {
          this.ssList = this.ssList?.filter(item => item.status != 'fresh');
          console.log(this.ssList, 'absentSSList');
        } else {
          this.ssList = [];
        }
      }
    });
  }
  filterSSList(participantType) {
    this.createSSTrainingEventForm.controls.staff.setValue('');
    this.ssList = this.AllSSList;
    console.log(this.ssList, 'this.ssList');
    console.log(this.upperRoleBranchId, 'this.upperRoleBranchId ');
    console.log(this.lowerRoleBranchId, 'this.lowerRoleBranchId');
    this.ssList = this.ssList.filter(item => item.branch_id == this.upperRoleBranchId ? this.upperRoleBranchId : this.lowerRoleBranchId);
    console.log(this.ssList, 'this.specificSSList');
    if (this.createSSTrainingEventForm.value.trainingType == 1 || this.createSSTrainingEventForm.value.trainingType == 2) {
      if (participantType == 'fresh') {
        this.ssList = this.ssList.filter(item => item.status == 'fresh');
        console.log(this.ssList, ' freshSSList');
      } else if (participantType == 'absent') {
        this.ssList = this.ssList.filter(item => item.status != 'fresh');
        console.log(this.ssList, 'absentSSList');
      } else {
        this.ssList = [];
      }
    }
  }
  changessbranch(e) {
    if (!this.lowerRoleBranchId) {
      this.upperRoleBranchId = e;
    } else {
      this.lowerRoleBranchId = e;
    }
    this.filterSSList('fresh');
    this.createSSTrainingEventForm.controls.participantType.setValue('fresh');
    this.createSSTrainingEventForm.controls.staff.setValue('');
    if (this.checked) {
      this.selectSSForTraining(this.indexWiseSSLIST, this.ssIndex, this.checked);
    }
    this.branchWiseStaffList();
  }
  selectSSForTraining(SSLIST, index, e) {
    this.indexWiseSSLIST = SSLIST;
    console.log(this.indexWiseSSLIST);
    this.ssIndex = index;
    this.checked = e;
    if (this.checked == true) {
      this.AllSSList.find(list => list.swasthya_sahayika_id == this.indexWiseSSLIST?.swasthya_sahayika_id).isChecked = true;
      console.log(this.AllSSList, 'ALLSSLIST');
    } else {
      this.AllSSList.find(list => list.swasthya_sahayika_id == this.indexWiseSSLIST?.swasthya_sahayika_id).isChecked = false;
      console.log(this.AllSSList, 'ALLSSLIST');
    }
  }
  disabledSaveTrainingForm() {
    let flag = true;
    if (!this.createSSTrainingEventForm.value.trainingType || !this.createSSTrainingEventForm.value.fromDate) {
      flag = false;
    }
    if (this.createSSTrainingEventForm.value.trainingType == 3) {
      if (!this.createSSTrainingEventForm.value.trainingtopic) {
        flag = false;
      }
    }
    var check = [];
    check = this.AllSSList?.filter(item => item.isChecked == true);
    if (check?.length == 0) {
      flag = false;
    }
    return flag;
  }
  saveSSTrainingForm() {
    this.ssTrainingDataPushPop = [];
    this.checkedSS = this.AllSSList?.filter(item => item.isChecked == true);
    this.checkedSS.forEach(item => {
      this.checkedSS = item.swasthya_sahayika_id;
      console.log(this.checkedSS, 'checkedSS');
      this.ssTrainingDataPushPop.push(this.checkedSS);
      console.log(this.ssTrainingDataPushPop);
    });
    var ssSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: this.SSTrainingEditData?.training_event_master_id ? this.SSTrainingEditData?.training_event_master_id : 0,
      active_flag: this.SSTrainingEditData ? 'A' : 'UA',
      ss_training_event_type: this.createSSTrainingEventForm?.value.trainingType,
      ss_training_event_topic_master_id: this.createSSTrainingEventForm?.value.trainingtopic ? this.createSSTrainingEventForm?.value.trainingtopic : 0,
      ss_training_event_start_date: this.createSSTrainingEventForm.value.fromDate,
      ss_training_event_end_date: this.setToDate,
      trainer_name: this.validationService.camelize(this.createSSTrainingEventForm.value.trainername.trim()),
      trainer_designation: this.validationService.camelize(this.createSSTrainingEventForm.value.trainerdesignation.trim()),
      branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
      ssList: this.ssTrainingDataPushPop
    };
    console.log(ssSaveObj, 'ssSaveObj');
    this.ssTrainingService.createUpdateDeleteSSTraining(ssSaveObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.ssTrainingModalDismiss();
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  ssTrainingModalDismiss() {
    console.log(this.SSTrainingEditData?.training_event_master_id, 'training_event_master_id');
    var ID = this.SSTrainingEditData?.training_event_master_id;
    if (ID) {
      this.SSTrainingEditData = [];
      ID = 0;
      this.modalReference?.close();
    } else {
      this.modalReference?.close();
      this.ssList = [];
      this.ssTrainingDataPushPop = [];
    }
  }
  deleteSSTrainingEvents(event) {
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);
    if (event.ss_training_event_start_date > today && event.status == 'Unapproved') {
      this.confirmationDialogService.confirm('', 'Are you sure you want to delete ss training record ?').then(() => this.delete(event)).catch(() => '');
    } else {
      this.showError('Event is not available for delete');
      return;
    }
  }
  delete(event) {
    var ssDeleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: event?.training_event_master_id,
      active_flag: 'D',
      ss_training_event_type: event?.training_type_master_id,
      ss_training_event_topic_master_id: event?.ss_training_event_topic_master_id,
      ss_training_event_start_date: event?.ss_training_event_start_date,
      ss_training_event_end_date: event?.ss_training_event_end_date,
      trainer_name: event?.trainer_name,
      trainer_designation: event?.trainer_designation,
      branchId: this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId,
      ssList: event?.ssList
    };
    console.log(ssDeleteObj);
    this.ssTrainingService.createUpdateDeleteSSTraining(ssDeleteObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  approveSSTrainingEvents(event) {
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);
    if (event.ss_training_event_start_date >= today && event.status == 'Unapproved') {
      this.confirmationDialogService.confirm('', 'Are you sure you want to approve ss training record ?').then(() => this.approveSS(event)).catch(() => '');
    } else {
      this.showError('Event is not available for approve');
      return;
    }
  }
  approveSS(event) {
    var ssTrainingObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      training_event_master_id: event.training_event_master_id
    };
    console.log(ssTrainingObj);
    this.ssTrainingService.approveSSTraining(ssTrainingObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.viewSSTrainingEventForm.value.branch ? this.viewSSTrainingEventForm.value.branch : this.lowerRoleBranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  changestaff(staffid) {
    this.staffID = staffid;
    this.changeparticipantTypeBySSName(this.staffID);
  }
  changeparticipantTypeBySSName(staffID) {
    this.ssList = this.AllSSList;
    if (this.createSSTrainingEventForm.value.participantType == 'fresh') {
      this.ssList = this.ssList.filter(v => v.status == 'fresh');
    } else {
      this.ssList = this.ssList.filter(v => v.status != 'fresh');
    }
    if (staffID == 'viewall') {
      this.ssList;
    } else if (staffID == 'nouser') {
      this.ssList = this.ssList.filter(v => v.user_id == null);
    } else {
      this.ssList = this.ssList.filter(v => v.user_id == staffID);
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'SS Training Event', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'SS Training Event', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
}
SsTrainingComponent.ɵfac = function SsTrainingComponent_Factory(t) {
  return new (t || SsTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ss_training_service__WEBPACK_IMPORTED_MODULE_3__.SsTrainingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
};
SsTrainingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SsTrainingComponent,
  selectors: [["app-ss-training"]],
  decls: 64,
  vars: 12,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "filterStartDate"], ["type", "date", "formControlName", "filterStartDate", 1, "form-control", 3, "change"], ["for", "filterEndDate"], ["type", "date", "formControlName", "filterEndDate", 1, "form-control", 3, "change"], ["for", "filterTraining"], ["formControlName", "filterTraining", "id", "filterTraining", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "8%"], [2, "width", "25%"], [2, "width", "20%"], ["style", "width:20%;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfParticipants", ""], ["SSTraining", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "cursor", "pointer", "color", "blue", 3, "click"], ["style", "width: 20%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit SS Training Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete SS Training Event", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve SS Training Event", 3, "click", 4, "ngIf"], ["title", "Edit SS Training Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete SS Training Event", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve SS Training Event", 1, "fas", "fa-check-circle", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], [2, "width", "30%"], [2, "width", "10%"], [2, "text-align", "center"], ["class", "modal-title", "style", "margin-left:20px;", 4, "ngIf"], ["class", "col-md", 4, "ngFor", "ngForOf"], [1, "modal-title", 2, "margin-left", "20px"], ["target", "_blank", 3, "href"], [3, "src"], [2, "margin-left", "100px"], ["class", "modal-title", "id", "modal-basic-title", 4, "ngIf"], ["style", "margin-left: 410px;\n                        margin-top: -49px;", 4, "ngIf"], ["style", "margin-left: 410px;\n                          margin-top: -49px;", 4, "ngIf"], ["style", "margin-left:411px;", 4, "ngIf"], ["style", "float: right;cursor: pointer; font-size: 35px; margin-bottom: 60px;", 3, "click", 4, "ngIf"], ["style", "float: right;cursor: pointer; font-size: 35px; margin-bottom: 22px;", 3, "click", 4, "ngIf"], ["for", "trainingType"], ["formControlName", "trainingType", "id", "trainingType", 1, "form-select", 3, "ngClass", "change"], ["for", "duration"], ["type", "text", "placeholder", "Training Duration", "formControlName", "duration", 1, "form-control"], ["for", "fromDate"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "min"], ["for", "trainername"], ["type", "text", "placeholder", "Trainer Name", "formControlName", "trainername", "maxlength", "45", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["for", "trainerdesignation"], ["type", "text", "placeholder", "Trainer Designation", "formControlName", "trainerdesignation", "maxlength", "45", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["class", "form-group col-md", 4, "ngIf"], [1, "scheduler-border"], ["for", "ssbranch"], ["formControlName", "ssbranch", "id", "ssbranch", 1, "form-select", 2, "width", "99%", 3, "ngClass", "change"], ["for", "staff"], ["formControlName", "staff", "id", "staff", 1, "form-select", 3, "change"], ["value", "viewall"], ["value", "nouser"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [2, "margin-left", "410px", "margin-top", "-49px"], [2, "margin-left", "411px"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "60px", 3, "click"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "22px", 3, "click"], ["for", "trainingtopic"], ["formControlName", "trainingtopic", "id", "trainingtopic", 1, "form-select", 3, "ngClass"], ["for", "participantType"], ["formControlName", "participantType", "id", "participantType", 1, "form-select", 2, "width", "100%", 3, "ngClass", "change"], ["value", "fresh"], ["value", "absent"], ["class", "form-check-input", "type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"]],
  template: function SsTrainingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "SS Training Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SsTrainingComponent_div_8_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SsTrainingComponent_div_10_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 2)(12, "div", 10)(13, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Start Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_Template_input_change_15_listener() {
        return ctx.filterDateWiseSSTrainingList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10)(17, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "End Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_Template_input_change_19_listener() {
        return ctx.filterDateWiseSSTrainingList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Filter By Training Type :");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SsTrainingComponent_Template_select_change_23_listener($event) {
        return ctx.filterListByTrainingType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "-- Type Of Training --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, SsTrainingComponent_option_26_Template, 2, 2, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "table", 22)(31, "thead", 23)(32, "tr")(33, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Type of");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " Training");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "SS Participated");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "SS Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, " Training");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Participants");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, SsTrainingComponent_th_55_Template, 2, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, SsTrainingComponent_tr_57_Template, 18, 8, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "pagination-controls", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SsTrainingComponent_Template_pagination_controls_pageChange_59_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function SsTrainingComponent_Template_pagination_controls_pageBoundsCorrection_59_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, SsTrainingComponent_ng_template_60_Template, 35, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, SsTrainingComponent_ng_template_62_Template, 100, 32, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.viewSSTrainingEventForm.value.branch || ctx.lowerRoleBranchId) && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.viewSSTrainingEventForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.ssTrainingType);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.updateMode || ctx.deleteMode || ctx.approveMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](58, 7, ctx.ssEventList, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c1, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe],
  styles: [".close[_ngcontent-%COMP%] {\r\n  margin-left: 615px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 850px;\r\n  margin-left: -130px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  width: 260px;\r\n  padding: 5px;\r\n  height: 175px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zcy10cmFpbmluZy9zcy10cmFpbmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcclxuICBtYXJnaW4tbGVmdDogNjE1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzQ5OTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mYS1jaGVjay1jaXJjbGU6aG92ZXIge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW4gIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNTQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogODQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 887:
/*!***********************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsTrainingModule": () => (/* binding */ SsTrainingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ss-training-routing.module */ 8818);
/* harmony import */ var _ss_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ss-training.component */ 91129);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class SsTrainingModule {}
SsTrainingModule.ɵfac = function SsTrainingModule_Factory(t) {
  return new (t || SsTrainingModule)();
};
SsTrainingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SsTrainingModule
});
SsTrainingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_0__.SsTrainingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SsTrainingModule, {
    declarations: [_ss_training_component__WEBPACK_IMPORTED_MODULE_1__.SsTrainingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ss_training_routing_module__WEBPACK_IMPORTED_MODULE_0__.SsTrainingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
  });
})();

/***/ }),

/***/ 36191:
/*!************************************************************!*\
  !*** ./src/app/modules/ss-training/ss-training.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsTrainingService": () => (/* binding */ SsTrainingService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class SsTrainingService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  branchWiseSSTrainingEventList(obj) {
    return this.http.post(`${this.baseURL}sstraining/getSSTrainingEventList`, obj);
  }
  ssTrainingTypeAndTopic(obj) {
    return this.http.post(`${this.baseURL}sstraining/getSSTrainingTypeAndTopic`, obj);
  }
  getSSList(obj) {
    return this.http.post(`${this.baseURL}sstraining/getSSList`, obj);
  }
  createUpdateDeleteSSTraining(obj) {
    return this.http.post(`${this.baseURL}sstraining/saveUpdateDeleteSsTrainingEvent`, obj);
  }
  approveSSTraining(obj) {
    return this.http.post(`${this.baseURL}sstraining/approveSSTrainingEvent`, obj);
  }
  staffListOfBranch(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
  }
  imageOfAEvent(obj) {
    return this.http.post(`${this.baseURL}/image/getFile`, obj);
  }
}
SsTrainingService.ɵfac = function SsTrainingService_Factory(t) {
  return new (t || SsTrainingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SsTrainingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SsTrainingService,
  factory: SsTrainingService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_ss-training_ss-training_module_ts.js.map