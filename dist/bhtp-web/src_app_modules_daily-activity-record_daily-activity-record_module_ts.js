(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_daily-activity-record_daily-activity-record_module_ts"],{

/***/ 72524:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRecordRoutingModule": () => (/* binding */ DailyActivityRecordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-activity-record.component */ 58320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRecordComponent
}];
class DailyActivityRecordRoutingModule {}
DailyActivityRecordRoutingModule.ɵfac = function DailyActivityRecordRoutingModule_Factory(t) {
  return new (t || DailyActivityRecordRoutingModule)();
};
DailyActivityRecordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DailyActivityRecordRoutingModule
});
DailyActivityRecordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DailyActivityRecordRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58320:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRecordComponent": () => (/* binding */ DailyActivityRecordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _daily_activity_record_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily-activity-record.service */ 76482);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);













function DailyActivityRecordComponent_div_13_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", region_r14.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r14.regionName, " ");
  }
}
function DailyActivityRecordComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_13_div_10_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.l.region.errors.required);
  }
}
function DailyActivityRecordComponent_div_13_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All Branches");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_13_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", branch_r16.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r16.branchName, " ");
  }
}
function DailyActivityRecordComponent_div_13_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_13_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_13_div_21_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function DailyActivityRecordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 6)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRecordComponent_div_13_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRecordComponent_div_13_option_9_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DailyActivityRecordComponent_div_13_div_10_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRecordComponent_div_13_Template_select_change_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.changeBranch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DailyActivityRecordComponent_div_13_option_19_Template, 2, 0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, DailyActivityRecordComponent_div_13_option_20_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, DailyActivityRecordComponent_div_13_div_21_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](7, _c0, ctx_r0.l.region.invalid && ctx_r0.l.region.touched, ctx_r0.l.region.valid && (ctx_r0.l.region.dirty || ctx_r0.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c0, ctx_r0.l.branch.invalid && ctx_r0.l.branch.touched, ctx_r0.l.branch.valid && (ctx_r0.l.branch.dirty || ctx_r0.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.darForm.value.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.branch.errors);
  }
}
function DailyActivityRecordComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_21_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.l.fromDate.errors.required);
  }
}
function DailyActivityRecordComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "To Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRecordComponent_div_28_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.toDate.errors.required);
  }
}
function DailyActivityRecordComponent_div_33_tr_105_h3_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_div_33_tr_105_h3_31_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.viewSSName(item_r26, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_33_tr_105_h3_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_33_tr_105_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRecordComponent_div_33_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "td", 37)(30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, DailyActivityRecordComponent_div_33_tr_105_h3_31_Template, 2, 0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, DailyActivityRecordComponent_div_33_tr_105_h3_32_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, DailyActivityRecordComponent_div_33_tr_105_div_33_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.totalFamilyVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.pwCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.lmCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.lmChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.pemCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.redChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.yellowChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r26.generalFamilyCounselling2to5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26.generalFamilyCounsellingAdolescent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.generalFamilyOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.targetFamiliesVisitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r26.generalFamiliesVisitedWithSS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.ssFollowUpAnsweredVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r26.followUpSSDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r26.followUpSSDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r26.followUpSSDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26.escortingFamilyToHealthCareCenter, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r26.materialDistributedToFamilies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26.refresherTrainingCompletedOnDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r26.refresherTrainingCompletedBySS, " ");
  }
}
function DailyActivityRecordComponent_div_33_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 52)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 53)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 53)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 53)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 54)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 53)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 54)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 54)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 54)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td", 55)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 54)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 54)(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td", 54)(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 56)(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 53)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "td", 56)(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "td", 55)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "td", 57)(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 55)(56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dar_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r34.totalFamilyVisitedSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r34.pwCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r34.lmCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r34.pemCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r34.generalFamilyCounselling2to5Sum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r34.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r34.generalFamilyOtherSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r34.targetFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r34.generalFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r34.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r34.materialDistributedToFamiliesSum, " ");
  }
}
function DailyActivityRecordComponent_div_33_tr_107_h3_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_div_33_tr_107_h3_45_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const dar_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.viewSSName(dar_r36, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_33_tr_107_h3_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_33_tr_107_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRecordComponent_div_33_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 52)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 53)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 53)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 53)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 54)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 53)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 54)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 54)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 54)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td", 55)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 54)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 54)(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td", 54)(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 56)(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 37)(44, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, DailyActivityRecordComponent_div_33_tr_107_h3_45_Template, 2, 0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, DailyActivityRecordComponent_div_33_tr_107_h3_46_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, DailyActivityRecordComponent_div_33_tr_107_div_47_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "td", 56)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "td", 55)(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "td", 57)(55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "td", 55)(58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dar_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.totalFamilyVisitedUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.pwCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.lmCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.lmChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.pemCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.redChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r36.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r36.generalFamilyCounselling2to5Unique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r36.generalFamilyCounsellingAdolescentUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](dar_r36.generalFamilyOtherUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r36.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r36.generalFamiliesVisitedWithSSUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", dar_r36.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (dar_r36.followUpSSDetailsUnique == null ? null : dar_r36.followUpSSDetailsUnique.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (dar_r36.followUpSSDetailsUnique == null ? null : dar_r36.followUpSSDetailsUnique.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (dar_r36.followUpSSDetailsUnique == null ? null : dar_r36.followUpSSDetailsUnique.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r36.escortingFamilyToHealthCareCenterUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", dar_r36.materialDistributedToFamiliesUnique, "");
  }
}
function DailyActivityRecordComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "table", 35)(4, "thead")(5, "tr")(6, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "(2 to 5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "(Ado. Girl)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Followed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Training ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, DailyActivityRecordComponent_div_33_tr_105_Template, 42, 21, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, DailyActivityRecordComponent_div_33_tr_106_Template, 58, 11, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, DailyActivityRecordComponent_div_33_tr_107_Template, 60, 18, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.dateWiseStaffDarDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.darListByStaffID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.darListByStaffID);
  }
}
function DailyActivityRecordComponent_div_34_tr_109_h3_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_div_34_tr_109_h3_64_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.viewSSName(item_r45, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_34_tr_109_h3_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_div_34_tr_109_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRecordComponent_div_34_tr_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_div_34_tr_109_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);
      const item_r45 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r53.staffClickDateWiseRecords(item_r45, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Unique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td", 37)(60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, DailyActivityRecordComponent_div_34_tr_109_h3_64_Template, 2, 0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, DailyActivityRecordComponent_div_34_tr_109_h3_65_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, DailyActivityRecordComponent_div_34_tr_109_div_66_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.staffName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.totalFamilyVisitedSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.totalFamilyVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.pwCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.pwCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.lmCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.lmCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.lmChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.pemCounsellingFamilySum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.pemCounsellingFamilyUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.redChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyCounselling2to5Sum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyCounselling2to5Unique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyCounsellingAdolescentUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyOtherSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamilyOtherUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.targetFamiliesVisitedWithSSSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamiliesVisitedWithSSSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.generalFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r45.followUpSSDetailsUnique.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r45.followUpSSDetailsUnique == null ? null : item_r45.followUpSSDetailsUnique.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r45.followUpSSDetailsUnique == null ? null : item_r45.followUpSSDetailsUnique.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.escortingFamilyToHealthCareCenterUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.materialDistributedToFamiliesSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r45.materialDistributedToFamiliesUnique, " ");
  }
}
function DailyActivityRecordComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "table", 35)(4, "thead")(5, "tr")(6, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "(2 to 5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "(Ado. Girl)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Followed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, " Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, DailyActivityRecordComponent_div_34_tr_109_Template, 83, 30, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.viewDARByRegionBranch);
  }
}
function DailyActivityRecordComponent_ng_template_35_tr_115_h3_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_ng_template_35_tr_115_h3_31_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const item_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.viewSSName(item_r59, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_35_tr_115_h3_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_35_tr_115_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRecordComponent_ng_template_35_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "td", 37)(30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, DailyActivityRecordComponent_ng_template_35_tr_115_h3_31_Template, 2, 0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, DailyActivityRecordComponent_ng_template_35_tr_115_h3_32_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, DailyActivityRecordComponent_ng_template_35_tr_115_div_33_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r59.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.totalFamilyVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.pwCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.lmCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.lmChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.pemCounsellingFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.redChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.yellowChildrenCounselling);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r59.generalFamilyCounselling2to5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r59.generalFamilyCounsellingAdolescent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.generalFamilyOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.targetFamiliesVisitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r59.generalFamiliesVisitedWithSS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r59.ssFollowUpAnsweredVisited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r59.followUpSSDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r59.followUpSSDetails == null ? null : item_r59.followUpSSDetails.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (item_r59.followUpSSDetails == null ? null : item_r59.followUpSSDetails.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r59.escortingFamilyToHealthCareCenter, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r59.materialDistributedToFamilies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r59.refresherTrainingCompletedOnDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r59.refresherTrainingCompletedBySS, " ");
  }
}
function DailyActivityRecordComponent_ng_template_35_h3_218_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_ng_template_35_h3_218_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.viewSSName(ctx_r67.cumUniqueOnStaffClick, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_35_h3_219_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_35_div_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No SS Mapped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRecordComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Staff Date Wise Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 62)(6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_ng_template_35_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.staffDateWiseRecordsModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 65)(9, "div", 32)(10, "div", 32)(11, "div", 33)(12, "div", 34)(13, "table", 35)(14, "thead")(15, "tr")(16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "PW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "LM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "RED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "YELLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Children");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "(2 to 5yr)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "(Ado. Girl)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "With SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Followed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Escorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Distributed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Families ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, " Refreshers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, DailyActivityRecordComponent_ng_template_35_tr_115_Template, 42, 21, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "tr")(117, "td", 52)(118, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "td", 53)(121, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "td", 53)(124, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "td", 53)(127, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "td", 54)(130, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "td", 53)(133, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "td", 54)(136, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "td", 54)(139, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "td", 54)(142, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "td", 55)(145, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "td", 54)(148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "td", 54)(151, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "td", 54)(154, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "td", 66)(157, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "td", 66)(162, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "td", 55)(165, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "td", 57)(168, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "td", 55)(171, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "tr")(174, "td", 52)(175, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "Unique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "td", 53)(178, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "td", 53)(181, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "td", 53)(184, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "td", 54)(187, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "td", 53)(190, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "td", 54)(193, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](195, "td", 54)(196, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "td", 54)(199, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "td", 55)(202, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "td", 54)(205, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "td", 54)(208, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "td", 54)(211, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](213, "td", 66)(214, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "td", 53)(217, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](218, DailyActivityRecordComponent_ng_template_35_h3_218_Template, 2, 0, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](219, DailyActivityRecordComponent_ng_template_35_h3_219_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](220, DailyActivityRecordComponent_ng_template_35_div_220_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "td", 66)(222, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "td", 55)(225, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](226);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](227, "td", 57)(228, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](229, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "td", 55)(231, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](232, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.dateWiseStaffDarDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.totalFamilyVisitedSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pwCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pemCounsellingFamilySum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounselling2to5Sum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounsellingAdolescentSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.generalFamilyOtherSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.targetFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.generalFamiliesVisitedWithSSSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.escortingFamilyToHealthCareCenterSum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.materialDistributedToFamiliesSum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.totalFamilyVisitedUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pwCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.lmChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.pemCounsellingFamilyUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.redChildrenCounsellingUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.yellowChildrenCounsellingUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounselling2to5Unique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamilyCounsellingAdolescentUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.cumUniqueOnStaffClick.generalFamilyOtherUnique);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.targetFamiliesVisitedWithSSUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.generalFamiliesVisitedWithSSUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.cumUniqueOnStaffClick.ssFollowUpAnsweredVisitedUnique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.cumUniqueOnStaffClick.followUpSSDetailsUnique.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.cumUniqueOnStaffClick.followUpSSDetailsUnique.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.cumUniqueOnStaffClick.followUpSSDetailsUnique.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.escortingFamilyToHealthCareCenterUnique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.cumUniqueOnStaffClick.materialDistributedToFamiliesUnique, "");
  }
}
function DailyActivityRecordComponent_ng_template_37_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_37_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Staff Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRecordComponent_ng_template_37_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r75 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r74.ss_name);
  }
}
function DailyActivityRecordComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DailyActivityRecordComponent_ng_template_37_span_4_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DailyActivityRecordComponent_ng_template_37_span_5_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 62)(8, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_ng_template_37_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.ssViewModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 65)(11, "div", 32)(12, "div", 32)(13, "div", 33)(14, "div", 34)(15, "table", 35)(16, "thead")(17, "tr")(18, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "tbody", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DailyActivityRecordComponent_ng_template_37_tr_23_Template, 5, 2, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.ssDateOrUniqueShow.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.ssDateOrUniqueShow.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.ssDateOrUniqueShow.date ? ctx_r8.ssDateOrUniqueShow.date.split("-").reverse().join("-") : ctx_r8.ssDateOrUniqueShow.staffName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.ssDetails);
  }
}
class DailyActivityRecordComponent {
  constructor(fb, sidebarService, http, httpService, dailyActRecord, toaster, modalService, config) {
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.httpService = httpService;
    this.dailyActRecord = dailyActRecord;
    this.toaster = toaster;
    this.modalService = modalService;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.darListByStaffID = [];
    this.darListByBranchID = [];
    this.darListByRegionID = [];
    this.dateWiseStaffDarDetails = [];
    this.viewDARByRegionBranch = [];
    this.loader = false;
    this.ssDetails = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
    this.roleAccess = roleAccessDTO.responseObject?.RoledetailDTO?.roleShortName;
    console.log(this.roleAccess);
    this.darForms();
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.lowerRankbranchId = res.branchId;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.loader = true;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId
          },
          branchId: this.lowerRankbranchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.loader = true;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            this.loader = true;
          }
        });
        // let Dato = {
        //   dataAccessDTO: this.httpService.dataAccessDTO,
        //   branchId: res.branchId
        // }
        // this.dailyActRecord.HcoITLListOfBranch(Dato).subscribe((res: any) => {
        //   this.HcoITLList = res.responseObject;
        //   console.log(this.HcoITLList, 'HcoITLList');
        // });
      }
    });

    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }
  darForms() {
    this.darForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      // hco: ['', Validators.required],
      fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get l() {
    return this.darForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.dailyActRecord.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    });
    this.darForm.controls.branch.setValue('');
  }
  changeBranch() {
    this.viewDARByRegionBranch = [];
  }
  fromDateExpectToDate(e) {
    this.dateWiseStaffDarDetails = [];
    this.darListByStaffID = [];
    this.viewDARByRegionBranch = [];
    this.darForm.controls.toDate.setValue('');
    if (e.target.value == '') {
      this.darForm.controls.toDate.setValue('');
    }
    console.log(e.target.value);
    this.minToDate = e.target.value;
    this.maxToDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.addMonths(3, new Date(e.target.value))).format('YYYY-MM-DD');
    console.log(this.maxToDate, ' this.maxToDate');
  }
  addMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
  }
  toDateChange() {
    this.dateWiseStaffDarDetails = [];
    this.darListByStaffID = [];
    this.viewDARByRegionBranch = [];
    if (!this.darForm.value.fromDate) {
      this.showError('Please Select From Date');
      this.darForm.controls.toDate.setValue('');
    }
  }
  fetchReport() {
    let item = this.darForm.value;
    if (this.roleAccess == 'HCO') {
      this.viewDailyRecordByStaffId();
    } else {
      if (item.branch == 'allBranches') {
        this.viewDailyRecordByRegionId();
      }
      if (item.branch != 'allBranches') {
        this.viewDailyRecordByBranchId();
      }
    }
  }
  downloadExcelReport() {
    let item = this.darForm.value;
    if (this.roleAccess == 'HCO') {
      this.recordDownloadExcelByStaffId();
    } else {
      if (item.branch == 'allBranches') {
        this.recordDownloadExcelByRegionId();
      }
      if (item.branch != 'allBranches') {
        this.recordDownloadExcelByBranchId();
      }
    }
  }
  viewDailyRecordByStaffId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      staffMasterId: this.httpService.dataAccessDTO.userId
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordViewByStaffId(obj).subscribe(res => {
      this.darListByStaffID = res.responseObject;
      this.loader = true;
      this.dateWiseStaffDarDetails = res.responseObject[0]?.dateWiseStaffDarDetails;
      console.log(this.darListByStaffID, 'darListByStaffID');
      console.log(this.dateWiseStaffDarDetails, 'this.dateWiseStaffDarDetails');
      if (this.darListByStaffID?.length == 0) {
        this.showError('Sorry, no data was found !');
      }
      if (res.status == false) {
        this.showError(res.message);
      }
    });
  }
  recordDownloadExcelByStaffId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      staffMasterId: this.httpService.dataAccessDTO.userId
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByStaffId(obj).subscribe((response, fileName) => {
      this.loader = true;
      // console.log(response.body.byteLength == 0);
      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data was found !');
      } else {
        const blob = new Blob([response.body], {
          type: response.headers.get('content-type')
        });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, {
          type: response.headers.get('content-type')
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(file);
      }
    });
  }
  viewDailyRecordByBranchId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordViewByBranchId(obj).subscribe(res => {
      this.loader = true;
      this.darListByBranchID = res.responseObject;
      this.viewDARByRegionBranch = res.responseObject;
      console.log(this.darListByBranchID, 'darListByBranchID');
      console.log(this.viewDARByRegionBranch, 'viewDARByBranch');
      if (this.darListByBranchID?.length == 0) {
        this.showError('Sorry, no data was found !');
      }
      if (res.status == false) {
        this.showError(res.message);
      }
    });
  }
  recordDownloadExcelByBranchId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      branchMasterId: this.darForm.value.branch ? this.darForm.value.branch : this.lowerRankbranchId
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByBranchId(obj).subscribe((response, fileName) => {
      this.loader = true;
      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data was found !');
      } else {
        const blob = new Blob([response.body], {
          type: response.headers.get('content-type')
        });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, {
          type: response.headers.get('content-type')
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(file);
      }
    });
  }
  viewDailyRecordByRegionId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      regionMasterId: this.darForm.value.region
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordViewByRegionId(obj).subscribe(res => {
      this.loader = true;
      this.darListByRegionID = res.responseObject;
      this.viewDARByRegionBranch = res.responseObject;
      console.log(this.viewDARByRegionBranch, 'viewDARByRegion');
      console.log(this.darListByRegionID);
      if (this.darListByRegionID?.length == 0) {
        this.showError('Sorry, no data was found !');
      }
      if (res.status == false) {
        this.showError(res.message);
      }
    });
  }
  recordDownloadExcelByRegionId() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darFromDate: this.darForm.value.fromDate,
      darToDate: this.darForm.value.toDate,
      regionMasterId: this.darForm.value.region
    };
    this.loader = false;
    console.log(obj);
    this.dailyActRecord.recordDownloadExcelByRegionId(obj).subscribe((response, fileName) => {
      this.loader = true;
      if (response.body.byteLength == 0) {
        this.showError('Sorry, no data was found !');
      } else {
        const blob = new Blob([response.body], {
          type: response.headers.get('content-type')
        });
        fileName = fileName || response.headers.get('content-type').split(';')[1].split('=')[1];
        const file = new File([blob], fileName, {
          type: response.headers.get('content-type')
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(file);
      }
    });
  }
  disabledFetchReport() {
    let flag = true;
    if (this.roleAccess.includes('HCO')) {
      if (!this.darForm.value.toDate) {
        flag = false;
      }
    } else {
      if (!this.darForm.value.region || !this.darForm.value.branch || !this.darForm.value.toDate) {
        flag = false;
      }
    }
    return flag;
  }
  staffClickDateWiseRecords(item, staffDateWiseRecords) {
    this.dateWiseStaffDarDetails = item.dateWiseStaffDarDetails;
    this.cumUniqueOnStaffClick = item;
    console.log(this.dateWiseStaffDarDetails, '  this.dateWiseStaffDarDetails ');
    console.log(this.cumUniqueOnStaffClick, ' this.cumUniqueOnStaffClick ');
    this.modalContent = '';
    this.dateWiseStaffDarDetailsModal = this.modalService.open(staffDateWiseRecords, {
      windowClass: 'staffDateWiseRecords'
    });
  }
  viewSSName(ssDetail, ssNames) {
    this.ssDateOrUniqueShow = ssDetail;
    console.log(this.ssDateOrUniqueShow, 'this.ssDateOrUniqueShow');
    if (ssDetail.followUpSSDetailsUnique) {
      this.ssDetails = ssDetail.followUpSSDetailsUnique;
      // console.log(1);
    } else {
      this.ssDetails = ssDetail.followUpSSDetails;
      // console.log(2);
    }

    console.log(this.ssDetails);
    this.modalContent = '';
    this.ssViewModal = this.modalService.open(ssNames, {
      windowClass: 'ssNames'
    });
  }
  ssViewModalDismiss() {
    this.ssViewModal.close();
  }
  staffDateWiseRecordsModalDismiss() {
    this.dateWiseStaffDarDetailsModal.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Record', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Daily-Activity Record', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
}
DailyActivityRecordComponent.ɵfac = function DailyActivityRecordComponent_Factory(t) {
  return new (t || DailyActivityRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_daily_activity_record_service__WEBPACK_IMPORTED_MODULE_4__.DailyActivityRecordService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalConfig));
};
DailyActivityRecordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DailyActivityRecordComponent,
  selectors: [["app-daily-activity-record"]],
  decls: 39,
  vars: 19,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-group", "col-md"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 2, "float", "right", "margin-right", "8px", "margin-top", "-55px", 3, "disabled", "click"], [1, "fas", "fa-solid", "fa-file-excel"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["for", "fromDate"], [1, "text-danger"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "ngClass", "keydown", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown", "change"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", "margin-right", "-22px", 3, "disabled", "click"], ["class", "white_box_tittle list_header", 4, "ngIf"], ["staffDateWiseRecords", ""], ["ssNames", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["value", "allBranches", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["value", "allBranches"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "font-size", "13px", "width", "16%"], [2, "font-size", "13px", "width", "8%"], [2, "font-size", "13px", "width", "9%"], [2, "font-size", "13px", "width", "11%"], [2, "font-size", "13px", "width", "12%"], [2, "font-size", "13px", "width", "10%"], [2, "font-size", "13px", "width", "13%"], [4, "ngFor", "ngForOf"], [1, "popover__wrapper"], ["class", "popover__title", 3, "click", 4, "ngIf"], ["class", "popover__title", 4, "ngIf"], ["class", "popover__content", 4, "ngIf"], [1, "popover__title", 3, "click"], [1, "popover__title"], [1, "popover__content"], [1, "card-header"], [2, "color", "#666666", "font-size", "13px", "width", "16%"], [2, "color", "#666666", "font-size", "13px", "width", "8%"], [2, "color", "#666666", "font-size", "13px", "width", "9%"], [2, "color", "#666666", "font-size", "13px", "width", "12%"], [2, "color", "#666666", "font-size", "13px", "width", "11%"], [2, "color", "#666666", "font-size", "13px", "width", "13%"], [2, "font-size", "13px", "width", "14%"], [1, "btn-link", 2, "font-size", "13px", "width", "13%", "word-wrap", "break-word", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "color", "#666666", "font-size", "13px", "width", "10%"], [1, "modal-contents"], [2, "width", "8%"], [2, "width", "25%"], [2, "height", "115px"]],
  template: function DailyActivityRecordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Daily Activity Record");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 2)(8, "div", 6)(9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_Template_button_click_9_listener() {
        return ctx.downloadExcelReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Download Excel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DailyActivityRecordComponent_div_13_Template, 22, 13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 2)(15, "div", 6)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "From Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function DailyActivityRecordComponent_Template_input_keydown_20_listener() {
        return ctx.restrictTypeOfDate();
      })("change", function DailyActivityRecordComponent_Template_input_change_20_listener($event) {
        return ctx.fromDateExpectToDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, DailyActivityRecordComponent_div_21_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 6)(23, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "To Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function DailyActivityRecordComponent_Template_input_keydown_27_listener() {
        return ctx.restrictTypeOfDate();
      })("change", function DailyActivityRecordComponent_Template_input_change_27_listener() {
        return ctx.toDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, DailyActivityRecordComponent_div_28_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 2)(30, "div", 6)(31, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRecordComponent_Template_button_click_31_listener() {
        return ctx.fetchReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Fetch Report ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, DailyActivityRecordComponent_div_33_Template, 108, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, DailyActivityRecordComponent_div_34_Template, 110, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, DailyActivityRecordComponent_ng_template_35_Template, 233, 30, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, DailyActivityRecordComponent_ng_template_37_Template, 24, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disabledFetchReport());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.darForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](13, _c0, ctx.l.fromDate.invalid && ctx.l.fromDate.touched, ctx.l.fromDate.valid && (ctx.l.fromDate.dirty || ctx.l.fromDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.l.fromDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](16, _c0, ctx.l.toDate.invalid && ctx.l.toDate.touched, ctx.l.toDate.valid && (ctx.l.toDate.dirty || ctx.l.toDate.touched)))("min", ctx.minToDate)("max", ctx.maxToDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.l.toDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disabledFetchReport());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleAccess == "HCO" && (ctx.dateWiseStaffDarDetails == null ? null : ctx.dateWiseStaffDarDetails.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleAccess != "HCO" && ((ctx.darListByBranchID == null ? null : ctx.darListByBranchID.length) > 0 || (ctx.darListByRegionID == null ? null : ctx.darListByRegionID.length) > 0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 200px;\r\n  overflow: scroll;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1266px;\r\n  margin-left: -360px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n  width: 100%;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0.5px solid rgb(255, 255, 255);\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #499;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYWlseS1hY3Rpdml0eS1yZWNvcmQvZGFpbHktYWN0aXZpdHktcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgd2lkdGg6IDEyNjZweDtcclxuICBtYXJnaW4tbGVmdDogLTM2MHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudHMge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRib2R5IHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcclxufVxyXG5cclxuLnBvcG92ZXJfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzgyOEJCMjtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDVweCAzcHggcmdiYSgxMTcsIDExMSwgMTE3LCAxKTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQgbGkge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMTBweCk7XHJcbiAgdG9wOiAtMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 80356:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRecordModule": () => (/* binding */ DailyActivityRecordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-activity-record-routing.module */ 72524);
/* harmony import */ var _daily_activity_record_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily-activity-record.component */ 58320);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class DailyActivityRecordModule {}
DailyActivityRecordModule.ɵfac = function DailyActivityRecordModule_Factory(t) {
  return new (t || DailyActivityRecordModule)();
};
DailyActivityRecordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DailyActivityRecordModule
});
DailyActivityRecordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRecordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DailyActivityRecordModule, {
    declarations: [_daily_activity_record_component__WEBPACK_IMPORTED_MODULE_1__.DailyActivityRecordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _daily_activity_record_routing_module__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRecordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
  });
})();

/***/ }),

/***/ 76482:
/*!********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-record/daily-activity-record.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRecordService": () => (/* binding */ DailyActivityRecordService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DailyActivityRecordService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  HcoITLListOfBranch(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
  }
  recordViewByStaffId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffId`, obj);
  }
  recordViewByBranchId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchId`, obj);
  }
  recordViewByRegionId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionId`, obj);
  }
  recordDownloadExcelByStaffId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer"
    });
  }
  recordDownloadExcelByBranchId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer"
    });
  }
  recordDownloadExcelByRegionId(obj) {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer"
    });
  }
}
DailyActivityRecordService.ɵfac = function DailyActivityRecordService_Factory(t) {
  return new (t || DailyActivityRecordService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DailyActivityRecordService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DailyActivityRecordService,
  factory: DailyActivityRecordService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 65226:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_daily-activity-record_daily-activity-record_module_ts.js.map