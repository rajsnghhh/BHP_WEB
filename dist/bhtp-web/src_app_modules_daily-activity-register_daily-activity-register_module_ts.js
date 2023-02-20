"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_daily-activity-register_daily-activity-register_module_ts"],{

/***/ 478:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRegisterRoutingModule": () => (/* binding */ DailyActivityRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-activity-register.component */ 39532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRegisterComponent
}];
class DailyActivityRegisterRoutingModule {}
DailyActivityRegisterRoutingModule.ɵfac = function DailyActivityRegisterRoutingModule_Factory(t) {
  return new (t || DailyActivityRegisterRoutingModule)();
};
DailyActivityRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DailyActivityRegisterRoutingModule
});
DailyActivityRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DailyActivityRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 39532:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRegisterComponent": () => (/* binding */ DailyActivityRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _daily_activity_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-activity-register.service */ 12883);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);














function DailyActivityRegisterComponent_div_7_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
  }
}
function DailyActivityRegisterComponent_div_7_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_7_div_10_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.l.region.errors.required);
  }
}
function DailyActivityRegisterComponent_div_7_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
  }
}
function DailyActivityRegisterComponent_div_7_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_7_div_20_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function DailyActivityRegisterComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 8)(2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_7_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRegisterComponent_div_7_option_9_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DailyActivityRegisterComponent_div_7_div_10_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8)(12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_7_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DailyActivityRegisterComponent_div_7_option_19_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, DailyActivityRegisterComponent_div_7_div_20_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r0.l.region.invalid && ctx_r0.l.region.touched, ctx_r0.l.region.valid && (ctx_r0.l.region.dirty || ctx_r0.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx_r0.l.branch.invalid && ctx_r0.l.branch.touched, ctx_r0.l.branch.valid && (ctx_r0.l.branch.dirty || ctx_r0.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.branch.errors);
  }
}
function DailyActivityRegisterComponent_div_9_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hco_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", hco_r21.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", hco_r21.user_firstname, " ", hco_r21.user_middlename, " ", hco_r21.user_lastname, " - ", hco_r21.role_shortname, " ");
  }
}
function DailyActivityRegisterComponent_div_9_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Role selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_9_div_9_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r20.l.hco.errors.required);
  }
}
function DailyActivityRegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "HCO/ HCOI/ TL :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_div_9_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.changeHco($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "-- Select Role --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DailyActivityRegisterComponent_div_9_option_8_Template, 2, 5, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRegisterComponent_div_9_div_9_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, ctx_r1.l.hco.invalid && ctx_r1.l.hco.touched, ctx_r1.l.hco.valid && (ctx_r1.l.hco.dirty || ctx_r1.l.hco.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.hcoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.l.hco.errors);
  }
}
function DailyActivityRegisterComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "From Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_16_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.fromDate.errors.required);
  }
}
function DailyActivityRegisterComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "To Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_23_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.l.toDate.errors.required);
  }
}
function DailyActivityRegisterComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_tr_41_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.darViewFamily(item_r27.darViewFamilyDTOList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "More Info...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r4.p - 1) * 5 + i_r28 + 1 ? (ctx_r4.p - 1) * 5 + i_r28 + 1 : i_r28 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r27.darDate);
  }
}
function DailyActivityRegisterComponent_div_42_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "td", 41);
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "td", 41);
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_19_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_div_42_tr_38_td_19_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.editDARModal(_r6, item_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_19_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_div_42_tr_38_td_19_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const item_r33 = ctx_r46.$implicit;
      const i_r34 = ctx_r46.index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r45.deleteDAR(item_r33, i_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_div_42_tr_38_td_19_i_1_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DailyActivityRegisterComponent_div_42_tr_38_td_19_i_2_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r39.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r39.deleteMode);
  }
}
function DailyActivityRegisterComponent_div_42_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRegisterComponent_div_42_tr_38_td_9_Template, 1, 0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DailyActivityRegisterComponent_div_42_tr_38_td_10_Template, 2, 0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DailyActivityRegisterComponent_div_42_tr_38_td_11_Template, 1, 0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DailyActivityRegisterComponent_div_42_tr_38_td_12_Template, 2, 0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_div_42_tr_38_Template_td_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.viewDARModal(_r6, item_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DailyActivityRegisterComponent_div_42_tr_38_td_19_Template, 3, 2, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r32.p - 1) * 5 + i_r34 + 1 ? (ctx_r32.p - 1) * 5 + i_r34 + 1 : i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r33.villageName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", item_r33.firstName, " ", item_r33.middleName, " ", item_r33.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate8"](" ", item_r33.hasChildPresentInPem == "Y" && item_r33.presentInLactatingMother == "Y" && item_r33.presentInPregnantWoman == "Y" ? "PEM, LM, PW" : "", " ", item_r33.hasChildPresentInPem == "Y" && item_r33.presentInLactatingMother == "Y" && item_r33.presentInPregnantWoman.includes("N") ? "PEM, LM" : "", " ", item_r33.hasChildPresentInPem == "Y" && item_r33.presentInLactatingMother.includes("N") && item_r33.presentInPregnantWoman.includes("N") ? "PEM" : "", " ", item_r33.hasChildPresentInPem.includes("N") && item_r33.presentInLactatingMother.includes("N") && item_r33.presentInPregnantWoman.includes("N") ? "" : "", " ", item_r33.hasChildPresentInPem.includes("N") && item_r33.presentInLactatingMother == "Y" && item_r33.presentInPregnantWoman == "Y" ? "LM, PW" : "", " ", item_r33.hasChildPresentInPem.includes("N") && item_r33.presentInLactatingMother.includes("N") && item_r33.presentInPregnantWoman == "Y" ? "PW" : "", " ", item_r33.hasChildPresentInPem.includes("N") && item_r33.presentInLactatingMother == "Y" && item_r33.presentInPregnantWoman.includes("N") ? "LM" : "", " ", item_r33.hasChildPresentInPem == "Y" && item_r33.presentInLactatingMother.includes("N") && item_r33.presentInPregnantWoman == "Y" ? "PEM, PW" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r33.hasAdolescentGirlChildren != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r33.hasAdolescentGirlChildren == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r33.has2to5yearsOldChildren != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r33.has2to5yearsOldChildren == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r33.visitedWithSS);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r33.ssName ? item_r33.ssName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r32.updateMode || ctx_r32.deleteMode);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
function DailyActivityRegisterComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 21)(3, "table", 18)(4, "thead", 37)(5, "tr")(6, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Name of");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Beneficiary Visited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Type of");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "beneficiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Adolescent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Child B/W");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "2y to 5 y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Alone /");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "With SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Name of SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, DailyActivityRegisterComponent_div_42_th_36_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, DailyActivityRegisterComponent_div_42_tr_38_Template, 20, 20, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "pagination-controls", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function DailyActivityRegisterComponent_div_42_Template_pagination_controls_pageChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.p = $event);
    })("pageBoundsCorrection", function DailyActivityRegisterComponent_div_42_Template_pagination_controls_pageBoundsCorrection_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.updateMode || ctx_r5.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](39, 2, ctx_r5.darViewFamilyList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, ctx_r5.p)));
  }
}
function DailyActivityRegisterComponent_ng_template_43_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edit DAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_ng_template_43_h2_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "View DAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_58_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_58_td_13_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.changeChildbox($event, item_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_58_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_58_td_14_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71);
      const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.changeChildbox($event, item_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_58_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_58_td_15_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r74);
      const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.changeChildbox($event, item_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r64.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_58_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_58_td_16_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.changeChildbox($event, item_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r65.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DailyActivityRegisterComponent_ng_template_43_tr_58_td_13_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DailyActivityRegisterComponent_ng_template_43_tr_58_td_14_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DailyActivityRegisterComponent_ng_template_43_tr_58_td_15_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DailyActivityRegisterComponent_ng_template_43_tr_58_td_16_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r61 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r60.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r60.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r60.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r60.dob.substring(0, 10).split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](item_r60.latestMuacIndicatorName == "RED" ? "danger" : item_r60.latestMuacIndicatorName == "GREEN" ? "success" : item_r60.latestMuacIndicatorName == "YELLOW" ? "warning" : "grey");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r60.active_flag == "A" && ctx_r56.mode == "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r60.active_flag == "D" && ctx_r56.mode == "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r60.active_flag == "A" && ctx_r56.mode == "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r60.active_flag == "D" && ctx_r56.mode == "V");
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_59_div_15_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ss_r80.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ss_r80.swasthyaSahayikaName, " ");
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_59_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Name of SS :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_59_div_15_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.changeSahika($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "-- Select SS --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DailyActivityRegisterComponent_ng_template_43_div_59_div_15_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r78.swasthyaSahayika);
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 73)(2, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Visited With SS\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 75)(7, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_59_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r83.changess($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_59_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.changess($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DailyActivityRegisterComponent_ng_template_43_div_59_div_15_Template, 7, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r57.changeSS == "Y");
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_60_div_15_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ss_r88.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ss_r88.swasthyaSahayikaName, " ");
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_60_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Name of SS :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_60_div_15_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.changeSahika($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "-- Select SS --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DailyActivityRegisterComponent_ng_template_43_div_60_div_15_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r86.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r86.swasthyaSahayika);
  }
}
function DailyActivityRegisterComponent_ng_template_43_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 73)(2, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Visited With SS\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 75)(7, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_60_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.changess($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_div_60_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.changess($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DailyActivityRegisterComponent_ng_template_43_div_60_div_15_Template, 7, 2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r58.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r58.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.changeSS == "Y");
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Followed up SS Name : ", ctx_r99.followUpSSName, "");
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No SS mapped with this HH for follow up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_7_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r121);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r119.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_8_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r124);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r122.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r102.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_9_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r127);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r125.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_10_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r130);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r128.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r104.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_11_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r133);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r131.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_12_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r136);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r134.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r106.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_13_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r139);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r137.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_14_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r142);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r140.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r108.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_15_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r145);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r143.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_16_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r148);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r146.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r110.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_17_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r151);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r149.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_18_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r154);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r152.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r112.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r159);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r157.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r155.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r162);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r160.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_1_Template, 1, 1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_input_2_Template, 1, 0, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r113.followUpSSId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r113.followUpSSId != null);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r167);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r165.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r163.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r170);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r168.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_1_Template, 1, 1, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_input_2_Template, 1, 0, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r114.followUpSSId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r114.followUpSSId != null);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_21_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r173);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r171.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_22_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r176);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r174.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_23_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r179);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r177.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r117.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_24_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r182);
      const items_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r180.changeVisitbox($event, items_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r118.isDisabled);
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 84)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_span_5_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_span_6_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_7_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_8_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_9_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_10_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_11_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_12_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_13_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_14_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_15_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_16_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_17_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_18_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_19_Template, 3, 2, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_20_Template, 3, 2, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_21_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_22_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_23_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_td_24_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r97 = ctx.$implicit;
    const item_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", items_r97.subPurposeMasterName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r94.mainPurposeMasterName.includes("For General Member") && ctx_r96.followUpSSId != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r94.mainPurposeMasterName.includes("For General Member") && ctx_r96.followUpSSId == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInLactatingMother == "Y" && item_r94.mainPurposeMasterName.includes("Lactating Mother"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInLactatingMother == "N" && item_r94.mainPurposeMasterName.includes("Lactating Mother"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInLactatingMother == "Y" && item_r94.mainPurposeMasterName.includes("Lactating Mother"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInLactatingMother == "N" && item_r94.mainPurposeMasterName.includes("Lactating Mother"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInPregnantWoman == "Y" && item_r94.mainPurposeMasterName.includes("Pregnant Woman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInPregnantWoman == "N" && item_r94.mainPurposeMasterName.includes("Pregnant Woman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInPregnantWoman == "Y" && item_r94.mainPurposeMasterName.includes("Pregnant Woman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.presentInPregnantWoman == "N" && item_r94.mainPurposeMasterName.includes("Pregnant Woman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.hasChildPresentInPem == "Y" && item_r94.mainPurposeMasterName.includes("PEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && ctx_r96.editListCheck.hasChildPresentInPem == "N" && item_r94.mainPurposeMasterName.includes("PEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.hasChildPresentInPem == "Y" && item_r94.mainPurposeMasterName.includes("PEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && ctx_r96.editListCheck.hasChildPresentInPem == "N" && item_r94.mainPurposeMasterName.includes("PEM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && item_r94.mainPurposeMasterName.includes("For General Member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && item_r94.mainPurposeMasterName.includes("For General Member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "E" && item_r94.mainPurposeMasterName.includes("For All"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "E" && item_r94.mainPurposeMasterName.includes("For All"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "Y" && ctx_r96.mode == "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", items_r97.answer == "N" && ctx_r96.mode == "V");
  }
}
function DailyActivityRegisterComponent_ng_template_43_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 66)(5, "tbody", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DailyActivityRegisterComponent_ng_template_43_tr_67_tr_6_Template, 25, 21, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r94 = ctx.$implicit;
    const i_r95 = ctx.index;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r94.mainPurposeMasterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r59.visitData[i_r95].subPurposes);
  }
}
function DailyActivityRegisterComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DailyActivityRegisterComponent_ng_template_43_h2_4_Template, 2, 0, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DailyActivityRegisterComponent_ng_template_43_h2_5_Template, 2, 0, "h2", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 55)(7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_ng_template_43_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r185);
      const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r184.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 59)(10, "div", 1)(11, "div", 60)(12, "div", 1)(13, "div", 61)(14, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Family No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 61)(17, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 60)(20, "div", 1)(21, "div", 61)(22, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 61)(25, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 60)(28, "div", 1)(29, "div", 61)(30, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Husband/ Guardian's Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 61)(33, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "form", 5)(36, "fieldset", 64)(37, "legend", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Child Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 65)(40, "table", 66)(41, "thead")(42, "tr")(43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Current Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tbody", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, DailyActivityRegisterComponent_ng_template_43_tr_58_Template, 17, 12, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, DailyActivityRegisterComponent_ng_template_43_div_59_Template, 16, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, DailyActivityRegisterComponent_ng_template_43_div_60_Template, 16, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "fieldset", 64)(62, "legend", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Specify Visit Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 65)(65, "table", 68)(66, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, DailyActivityRegisterComponent_ng_template_43_tr_67_Template, 7, 2, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 1)(69, "div", 2)(70, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyActivityRegisterComponent_ng_template_43_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r185);
      const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r186.saveEditDAR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.mode == "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.mode == "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.editListCheck.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", ctx_r7.editListCheck.firstName, " ", ctx_r7.editListCheck.middleName, " ", ctx_r7.editListCheck.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.editListCheck.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r7.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.darViewChildList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r7.roleAccess == null ? null : ctx_r7.roleAccess.includes("HCO")) != -1 || (ctx_r7.roleAccess == null ? null : ctx_r7.roleAccess.includes("TL")) != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r7.roleAccess == null ? null : ctx_r7.roleAccess.includes("HCO")) == -1 || (ctx_r7.roleAccess == null ? null : ctx_r7.roleAccess.includes("TL")) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.visitData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.mode == "V");
  }
}
class DailyActivityRegisterComponent {
  constructor(fb, validationService, http, sidebarService, dailyActivityService, toaster, httpService, modalService, confirmationDialogService, router, config) {
    this.fb = fb;
    this.validationService = validationService;
    this.http = http;
    this.sidebarService = sidebarService;
    this.dailyActivityService = dailyActivityService;
    this.toaster = toaster;
    this.httpService = httpService;
    this.modalService = modalService;
    this.confirmationDialogService = confirmationDialogService;
    this.router = router;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
    this.darList = [];
    this.darViewFamilyList = [];
    this.darViewChildList = [];
    this.page = 1;
    this.pageSize = 6;
    this.swasthyaSahayika = [];
    this.visitData = [];
    this.childbox = [];
    this.isDisabled = false;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    let roleAccessDTO = JSON.parse(localStorage.getItem('user'));
    this.roleAccess = roleAccessDTO.responseObject?.RoledetailDTO?.roleShortName;
    console.log(this.roleAccess);
    this.locForm();
    this.sidebarService.checkRoledetailDTO().then(res => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userName,
            userName: dataAccessDTO.userId
          },
          branchId: res.branchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });
        let Dato = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          branchId: res.branchId
        };
        this.dailyActivityService.hcoListOfBranch(Dato).subscribe(res => {
          this.hcoList = res.responseObject;
          console.log(this.hcoList, 'hcoList');
        });
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/daily-activity-register']) : this.router.navigate(['/error']);
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 137 || item.subFunctionMasterId == 138 || item.subFunctionMasterId == 139 || item.subFunctionMasterId == 140)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }
  changeRegion(region) {
    let regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    setTimeout(() => {
      this.dailyActivityService.listOfBranchesOfARegion(req).subscribe(res => {
        this.branchList = res?.responseObject;
      }, error => {
        this.branchList = null;
      });
    }, 1000);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.hco.setValue('');
    this.locationForm.controls.fromDate.setValue('');
    this.locationForm.controls.toDate.setValue('');
    this.darList = [];
    this.darViewFamilyList = [];
    this.branchList = [];
    this.hcoList = [];
    if (this.locationForm.value.region == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.branchList = [];
      this.hcoList = [];
      this.showError('No Data Found');
    }
  }
  changeHco(id) {
    this.hcoId = id;
    this.locationForm.controls.fromDate.setValue('');
    this.locationForm.controls.toDate.setValue('');
    this.darList = [];
    this.darViewFamilyList = [];
    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.showError('No Data Found');
    }
  }
  changeBranch(branch) {
    console.log(branch);
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    };
    this.dailyActivityService.hcoListOfBranch(Dto).subscribe(res => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });
    if (branch) {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }
    if (this.locationForm.value.branch == '') {
      this.locationForm.controls.hco.setValue('');
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
      this.hcoList = [];
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.showError('No Data Found');
    }
    if (this.locationForm.value.hco == '') {
      this.locationForm.controls.fromDate.setValue('');
      this.locationForm.controls.toDate.setValue('');
      this.darList = [];
      this.darViewFamilyList = [];
    }
  }
  changeSahika(ss) {
    this.sidebarService.swasthyaSahayikaId = ss;
    this.sidebarService.swasthyaSahayikaName = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)?.swasthyaSahayikaName;
  }
  locForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      hco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  fromDateChange() {
    if (this.locationForm.value.fromDate && this.locationForm.value.toDate) {
      this.locationForm.controls.toDate.setValue('');
    }
    this.darList = [];
    this.darViewFamilyList = [];
  }
  toDateChange() {
    this.darList = [];
    this.darViewFamilyList = [];
  }
  viewDAREntryList() {
    if (this.regionBranchHide) {
      if (!this.locationForm.value.hco) {
        this.showError('Please Select Role');
        return;
      }
    }
    this.viewingDAREntryList();
  }
  viewingDAREntryList() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      hcoId: this.hcoId ? this.hcoId : this.sidebarService.userId,
      startDate: this.locationForm.value.fromDate,
      endDate: this.locationForm.value.toDate,
      withVisitPurposeMap: false
    };
    console.log(obj);
    this.dailyActivityService.viewingDAREntryList(obj).subscribe(res => {
      this.darList = res.responseObject;
      console.log(this.darList);
      if (this.darList.length == 0) {
        this.showError('No data found !');
      }
      if (res.status == false) {
        this.showError(res.message);
      }
    });
  }
  darViewFamily(item) {
    this.darViewFamilyList = item;
    console.log(this.darViewChildList, 'this.darViewChildList');
    console.log(this.darViewFamilyList, 'darViewFamily');
  }
  modalDismiss() {
    this.modalReference.close();
  }
  changeChildbox(e, item) {
    console.log(e.target.checked, item);
    if (e.target.checked == true) {
      item.active_flag = 'A';
    } else {
      item.active_flag = 'D';
    }
  }
  changeVisitbox(e, items) {
    console.log(items);
    if (e.target.checked) {
      items.answer = 'Y';
    } else {
      items.answer = 'N';
    }
    console.log(e.target.checked, items);
  }
  changess(e) {
    this.changeSS = e;
    console.log(this.changeSS);
  }
  editDARModal(editDAR, item) {
    console.log(item, 'a');
    this.mode = 'E';
    console.log(editDAR);
    this.editListCheck = item;
    this.followUpSSName = item.followUpSSName;
    this.followUpSSId = item.followUpSSId;
    this.darViewChildList = this.editListCheck.darChildList;
    console.log(this.darViewChildList, '  this.darViewChildList   this.darViewChildList ');
    this.editForms();
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    };
    console.log(req);
    this.dailyActivityService.ssVillageWiseList(req).subscribe(res => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR'
      });
    }, 500);
    let post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    };
    this.dailyActivityService.visitPurposeData(post).subscribe(res => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });
  }
  viewDARModal(editDAR, item) {
    console.log(item);
    this.followUpSSName = item.followUpSSName;
    this.followUpSSId = item.followUpSSId;
    this.mode = 'V';
    this.editListCheck = item;
    this.darViewChildList = this.editListCheck.darChildList;
    this.editForms();
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: this.editListCheck.villageId,
      userId: this.sidebarService.userId
    };
    console.log(req);
    this.dailyActivityService.ssVillageWiseList(req).subscribe(res => {
      this.swasthyaSahayika = res.responseObject;
    });
    setTimeout(() => {
      this.modalContent = '';
      this.modalReference = this.modalService.open(editDAR, {
        windowClass: 'editDAR'
      });
    }, 500);
    let post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      dailyActivityRegisterMasterId: this.editListCheck.dailyActivityRegisterMasterId
    };
    this.dailyActivityService.visitPurposeData(post).subscribe(res => {
      this.visitData = res.responseObject;
      console.log(this.visitData, 'visitData');
    });
    this.editForm.disable();
  }
  editForms() {
    this.editForm = this.fb.group({
      ss: [this.editListCheck.visitedWithSS ? this.editListCheck.visitedWithSS : this.changeSS],
      sahayika: [this.editListCheck.ssId ? this.editListCheck.ssId : '']
    });
    if (this.editListCheck.visitedWithSS == 'Y') {
      this.changeSS = 'Y';
    }
    if (this.editListCheck.visitedWithSS == 'N') {
      this.changeSS = 'N';
    }
  }
  deleteDAR(item, i) {
    console.log('deleteDAR');
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete ?').then(() => this.delete(item, i)).catch(() => '');
  }
  delete(item, i) {
    console.log(item);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: item.visitedWithSS,
      ssId: item.ssId,
      childList: item.darChildList,
      has2to5yearsoldChildren: item.has2to5yearsOldChildren,
      hasAdolescentGirlChildren: item.hasAdolescentGirlChildren,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "D",
      visitPurposeData: this.visitData,
      presentInPregnantWoman: item.presentInPregnantWoman,
      presentInLactatingMother: item.presentInLactatingMother,
      hasChildPresentInPem: item.hasChildPresentInPem
    };
    console.log(obj);
    this.dailyActivityService.saveEditDAR(obj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.darViewFamilyList.splice(i, 1);
        if (this.darViewFamilyList.length == 0) {
          this.viewingDAREntryList();
        }
      } else {
        this.showError(res.message);
      }
    });
  }
  saveEditDAR() {
    console.log(this.editListCheck);
    var item = this.editListCheck;
    var chng;
    if (this.changeSS) {
      chng = this.changeSS;
    } else {
      chng = item.visitedWithSS;
    }
    // var ssid;
    // if (this.changeSS == 'Y') {
    //   ssid = this.sidebarService.swasthyaSahayikaId;
    // }
    const newArrayOfObj = item.darChildList.map(({
      childId: childDetailId,
      ...rest
    }) => ({
      childDetailId,
      ...rest
    }));
    console.log(newArrayOfObj);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      darMasterId: item.dailyActivityRegisterMasterId,
      familyId: item.familyId,
      visitDate: item.darVisitDate,
      visitedWithSS: chng,
      ssId: this.editForm.value.sahayika ? this.editForm.value.sahayika : this.sidebarService.swasthyaSahayikaId,
      childList: newArrayOfObj,
      has2to5yearsoldChildren: item.has2to5yearsOldChildren,
      hasAdolescentGirlChildren: item.hasAdolescentGirlChildren,
      latitude: item.latitude,
      longitude: item.longitude,
      active_flag: "A",
      visitPurposeData: this.visitData,
      presentInPregnantWoman: item.presentInPregnantWoman,
      presentInLactatingMother: item.presentInLactatingMother,
      hasChildPresentInPem: item.hasChildPresentInPem
    };
    console.log(obj);
    if (obj.visitedWithSS == 'Y') {
      if (!obj.ssId) {
        this.showError('Please select name of ss ');
        return;
      }
    }
    if (this.changeSS == 'N') {
      obj.ssId = null;
    }
    this.dailyActivityService.saveEditDAR(obj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.toDateChange();
        this.viewDAREntryList();
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Daily-Activity Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Daily-Activity Register', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  get l() {
    return this.locationForm.controls;
  }
}
DailyActivityRegisterComponent.ɵfac = function DailyActivityRegisterComponent_Factory(t) {
  return new (t || DailyActivityRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_daily_activity_register_service__WEBPACK_IMPORTED_MODULE_2__.DailyActivityRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalConfig));
};
DailyActivityRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DailyActivityRegisterComponent,
  selectors: [["app-daily-activity-register"]],
  decls: 45,
  vars: 15,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["class", "form-group col-md", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "fromDate"], [1, "text-danger"], ["type", "date", "formControlName", "fromDate", 1, "form-control", 3, "ngClass", "keydown", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "toDate"], ["type", "date", "formControlName", "toDate", 1, "form-control", 3, "ngClass", "keydown", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer", 2, "margin-bottom", "-45px"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header_fixed"], ["id", "beneficiaryScroll", 1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], [4, "ngFor", "ngForOf"], ["class", "white_box_tittle list_header", 4, "ngIf"], ["editDAR", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "hco"], ["formControlName", "hco", "id", "hco", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["id", "header-fixed"], [2, "width", "3%"], [2, "width", "10%"], [2, "width", "20%"], [2, "width", "8%"], [2, "width", "6%"], [2, "width", "15%"], [2, "width", "5%"], ["style", "width: 10%;", 4, "ngIf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["style", "width: 8%;", 4, "ngIf"], ["style", " width: 8%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit DAR", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete DAR", 3, "click", 4, "ngIf"], ["title", "Edit DAR", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete DAR", 1, "fas", "fa-trash", 3, "click"], [1, "modal-content"], [1, "modal-header", 2, "height", "80px"], [1, "col-md"], [1, "white_box", "QA_section", "mb_30", 2, "height", "100px"], ["class", "page-title", 4, "ngIf"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", "margin-bottom", "25px", "float", "right", 3, "click"], [1, "modal-body"], [1, "col"], [1, "form-group", "col-md-6"], ["for", "", 2, "font-weight", "500", "font-size", "1.05rem"], ["for", ""], [1, "scheduler-border"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], ["id", "table_wrapper", 1, "table"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], [1, "fa", "fa-circle", "fa-lg"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], [1, "form-group", "col-md-2"], ["for", "ss"], [1, "form-check-inline"], ["name", "ss", "type", "radio", "id", "yes", "value", "Y", "formControlName", "ss", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "ss", 1, "form-check-input", 3, "change"], ["class", "form-group col-md-4", 4, "ngIf"], [1, "form-group", "col-md-4"], ["for", "sahayika"], ["formControlName", "sahayika", "id", "swasthyaSahayika", 1, "form-select", 3, "change"], [2, "text-align", "start"], [2, "padding", "1px", "margin-left", "60px"], [1, "fas", "fa-caret-right"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"]],
  template: function DailyActivityRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Daily Activity Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DailyActivityRegisterComponent_div_7_Template, 21, 12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DailyActivityRegisterComponent_div_9_Template, 10, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "From Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function DailyActivityRegisterComponent_Template_input_keydown_15_listener() {
        return ctx.restrictTypeOfDate();
      })("change", function DailyActivityRegisterComponent_Template_input_change_15_listener() {
        return ctx.fromDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DailyActivityRegisterComponent_div_16_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "To Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function DailyActivityRegisterComponent_Template_input_keydown_22_listener() {
        return ctx.restrictTypeOfDate();
      })("change", function DailyActivityRegisterComponent_Template_input_change_22_listener() {
        return ctx.viewDAREntryList();
      })("change", function DailyActivityRegisterComponent_Template_input_change_22_listener() {
        return ctx.toDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DailyActivityRegisterComponent_div_23_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "table", 18)(28, "thead", 19)(29, "tr")(30, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 15)(37, "div", 20)(38, "div", 21)(39, "table", 18)(40, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, DailyActivityRegisterComponent_tr_41_Template, 7, 2, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, DailyActivityRegisterComponent_div_42_Template, 41, 7, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, DailyActivityRegisterComponent_ng_template_43_Template, 72, 13, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.locationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleAccess != "HCO");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx.l.fromDate.invalid && ctx.l.fromDate.touched, ctx.l.fromDate.valid && (ctx.l.fromDate.dirty || ctx.l.fromDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.l.fromDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](12, _c0, ctx.l.toDate.invalid && ctx.l.toDate.touched, ctx.l.toDate.valid && (ctx.l.toDate.dirty || ctx.l.toDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.l.toDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.darList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.darViewFamilyList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  overflow-x: hidden;\r\n  width: 1000px;\r\n  margin-left: -190px;\r\n  margin-top: -4px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 160px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .grey[_ngcontent-%COMP%] {\r\n  color: #828bb2;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 20vh;\r\n  overflow: auto;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 2px;\r\n  height: 5px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYWlseS1hY3Rpdml0eS1yZWdpc3Rlci9kYWlseS1hY3Rpdml0eS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztHQU1HO0FBQ0g7Ozs7Ozs7Ozs7O0dBV0ciLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTE5MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciB0Ym9keSAuZGFuZ2VyIHtcclxuICBjb2xvcjogI2NkMDIwMjtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgdGJvZHkgLnN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjRkNTI0O1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciB0Ym9keSAud2FybmluZyB7XHJcbiAgY29sb3I6ICNmN2NkMDA7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIHRib2R5IC5ncmV5IHtcclxuICBjb2xvcjogIzgyOGJiMjtcclxufVxyXG5cclxuI2JlbmVmaWNpYXJ5U2Nyb2xsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXgtaGVpZ2h0OiAyMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jaGVhZGVyX2ZpeGVkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuLyogLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5kYW5nZXIge1xyXG4gIGNvbG9yOiAjY2QwMjAyO1xyXG59XHJcblxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLnN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjRkNTI0O1xyXG59ICovXHJcbi8qIFxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLmRhbmdlciAuZmEtY2hlY2s6aG92ZXIge1xyXG4gIGNvbG9yOiAjY2QwMjAyICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSAuc3VjY2VzcyAuZmEtY2hlY2s6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjRkNTI0ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn0gKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 49209:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRegisterModule": () => (/* binding */ DailyActivityRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-activity-register-routing.module */ 478);
/* harmony import */ var _daily_activity_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily-activity-register.component */ 39532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class DailyActivityRegisterModule {}
DailyActivityRegisterModule.ɵfac = function DailyActivityRegisterModule_Factory(t) {
  return new (t || DailyActivityRegisterModule)();
};
DailyActivityRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DailyActivityRegisterModule
});
DailyActivityRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DailyActivityRegisterModule, {
    declarations: [_daily_activity_register_component__WEBPACK_IMPORTED_MODULE_1__.DailyActivityRegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _daily_activity_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.DailyActivityRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
  });
})();

/***/ }),

/***/ 12883:
/*!************************************************************************************!*\
  !*** ./src/app/modules/daily-activity-register/daily-activity-register.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyActivityRegisterService": () => (/* binding */ DailyActivityRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DailyActivityRegisterService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  villagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  hcoListOfBranch(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj);
  }
  viewingDAREntryList(obj) {
    return this.http.post(`${this.baseURL}dailyActivity/viewDailyActivityRegister`, obj);
  }
  ssVillageWiseList(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/villageWiseList`, obj);
  }
  visitPurposeData(obj) {
    return this.http.post(`${this.baseURL}dailyActivity/viewDailyActivityRegisterVisitPurposeMap`, obj);
  }
  saveEditDAR(obj) {
    return this.http.post(`${this.baseURL}dailyActivity/saveOrUpdate`, obj);
  }
}
DailyActivityRegisterService.ɵfac = function DailyActivityRegisterService_Factory(t) {
  return new (t || DailyActivityRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DailyActivityRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DailyActivityRegisterService,
  factory: DailyActivityRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_daily-activity-register_daily-activity-register_module_ts.js.map