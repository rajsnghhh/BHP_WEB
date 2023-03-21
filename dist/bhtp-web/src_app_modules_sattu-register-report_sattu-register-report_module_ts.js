"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_sattu-register-report_sattu-register-report_module_ts"],{

/***/ 17485:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sattu-register-report/sattu-register-report-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterReportRoutingModule": () => (/* binding */ SattuRegisterReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sattu_register_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-register-report.component */ 54998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _sattu_register_report_component__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterReportComponent
}];
class SattuRegisterReportRoutingModule {}
SattuRegisterReportRoutingModule.ɵfac = function SattuRegisterReportRoutingModule_Factory(t) {
  return new (t || SattuRegisterReportRoutingModule)();
};
SattuRegisterReportRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SattuRegisterReportRoutingModule
});
SattuRegisterReportRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SattuRegisterReportRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54998:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/sattu-register-report/sattu-register-report.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterReportComponent": () => (/* binding */ SattuRegisterReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sattu_register_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sattu-register-report.service */ 84657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);











function SattuRegisterReportComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", project_r8.projectMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", project_r8.projectCode, " ");
  }
}
function SattuRegisterReportComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SattuRegisterReportComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SattuRegisterReportComponent_div_25_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.date.errors.required);
  }
}
function SattuRegisterReportComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SattuRegisterReportComponent_div_26_Template_input_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.checkStateOrRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "State Wise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label")(12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SattuRegisterReportComponent_div_26_Template_input_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.checkStateOrRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Region Wise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SattuRegisterReportComponent_div_27_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", state_r17.stateMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", state_r17.stateName, " ");
  }
}
function SattuRegisterReportComponent_div_27_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", district_r18.districtMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", district_r18.districtName, " ");
  }
}
function SattuRegisterReportComponent_div_27_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", block_r19.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", block_r19.blockName, " ");
  }
}
function SattuRegisterReportComponent_div_27_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", gp_r20.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", gp_r20.name, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SattuRegisterReportComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 8)(2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "State :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_div_27_Template_select_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.changeState($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "All State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SattuRegisterReportComponent_div_27_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "District :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_div_27_Template_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.changeDistrict($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "All District");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SattuRegisterReportComponent_div_27_option_14_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Block :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_div_27_Template_select_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "All Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, SattuRegisterReportComponent_div_27_option_21_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8)(23, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "GP/ Municipality :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_div_27_Template_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.changeGP($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "All GP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SattuRegisterReportComponent_div_27_option_28_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx_r3.f.state.invalid && ctx_r3.f.state.touched, ctx_r3.f.state.valid && (ctx_r3.f.state.dirty || ctx_r3.f.state.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c0, ctx_r3.f.district.invalid && ctx_r3.f.district.touched, ctx_r3.f.district.valid && (ctx_r3.f.district.dirty || ctx_r3.f.district.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.stateWiseDistrictList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, ctx_r3.f.block.invalid && ctx_r3.f.block.touched, ctx_r3.f.block.valid && (ctx_r3.f.block.dirty || ctx_r3.f.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.blockList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](17, _c0, ctx_r3.f.gp.invalid && ctx_r3.f.gp.touched, ctx_r3.f.gp.valid && (ctx_r3.f.gp.dirty || ctx_r3.f.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.gpList);
  }
}
function SattuRegisterReportComponent_div_28_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", region_r27.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", region_r27.regionName, " ");
  }
}
function SattuRegisterReportComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Region :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 49)(5, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "All Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SattuRegisterReportComponent_div_28_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, ctx_r4.f.region.invalid && ctx_r4.f.region.touched, ctx_r4.f.region.valid && (ctx_r4.f.region.dirty || ctx_r4.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.regionList);
  }
}
function SattuRegisterReportComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SattuRegisterReportComponent_div_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.generateReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Generate Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SattuRegisterReportComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.noOfFamiliesTrainedForSattuMaking, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.noOfFamiliesPreparingSattuRegularly, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.noOfFamiliesPreparingSattuIrregularly, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.notPreparingSattuDetails.noOfFamilies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.notPreparingSattuDetails.notPreparingSattuForFinancialReasons, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.notPreparingSattuDetails.notPreparingSattuForTimeConstraints, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r30.stats.notPreparingSattuDetails.notPreparingSattuForNoInterest, " ");
  }
}
function SattuRegisterReportComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 58)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 59)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 60)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 60)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 61)(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 62)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td", 60)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 62)(24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.famTrained);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.regularFam);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.irregularFam);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.NPTotalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.financialCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.timeConstraintsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.notInterestedCount);
  }
}
class SattuRegisterReportComponent {
  constructor(fb, httpService, toaster, sidebarService, router, sattuReportService) {
    this.fb = fb;
    this.httpService = httpService;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.router = router;
    this.sattuReportService = sattuReportService;
    this.loader = true;
    this.projectList = [];
    this.projectWiseReport = [];
    this.stateWiseDistrictList = [];
    this.stateList = [];
    this.blockList = [];
    this.gpList = [];
    this.regionList = [];
    this.selectFilter = false;
    this.projectWiseFilter = false;
    this.stateWiseFilter = false;
    this.regionWiseFilter = false;
    this.projectWiseSattuList = [];
    this.stateWiseSattuList = [];
    this.regionWiseSattuList = [];
    this.showSelectionWiseSattuList = [];
    this.totalCountArray = [];
    this.famTrained = 0;
    this.regularFam = 0;
    this.irregularFam = 0;
    this.NPTotalCount = 0;
    this.financialCount = 0;
    this.timeConstraintsCount = 0;
    this.notInterestedCount = 0;
  }
  ngOnInit() {
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 6)?.subMenuDetailList.find(item => item.subFunctionMasterId == 282)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register-report']) : this.router.navigate(['/error']);
    this.setCurrentDate = new Date().toJSON().slice(0, 10);
    this.reportForms();
    let projectreq = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.sattuReportService.getAllProject(projectreq).subscribe(res => {
      this.projectList = res.responseObject.projectList;
    });
    this.reportForm.get('date').patchValue(this.setCurrentDate);
    this.maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format("YYYY-MM-DD");
  }
  reportForms() {
    this.reportForm = this.fb.group({
      project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      stateOrRegion: [''],
      state: [''],
      district: [''],
      block: [''],
      gp: [''],
      region: ['']
    });
  }
  get f() {
    return this.reportForm.controls;
  }
  changeProject(projectId) {
    this.showSelectionWiseSattuList = [];
    if (projectId != '' && projectId != 'all') {
      this.selectFilter = true;
      this.tableHeadName = "";
      this.projectWiseFilter = false;
    } else {
      this.projectWiseFilter = true;
      this.selectFilter = false;
    }
    this.stateWiseFilter = false;
    this.regionWiseFilter = false;
    this.reportForm.controls.state.setValue('');
    this.reportForm.controls.district.setValue('');
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    this.reportForm.controls.region.setValue('');
    this.reportForm.controls.stateOrRegion.setValue('');
  }
  checkStateOrRegion(value) {
    this.showSelectionWiseSattuList = [];
    if (value == 'stateWise') {
      this.stateWiseFilter = true;
      this.regionWiseFilter = false;
      let stateReq = {
        dataAccessDTO: this.httpService.dataAccessDTO
      };
      this.sattuReportService.getListOfAllStates(stateReq).subscribe(res => {
        this.stateList = res.responseObject.stateList;
      });
      this.regionList = [];
      this.reportForm.controls.region.setValue('');
      this.reportForm.controls['district'].disable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
    } else {
      this.stateWiseFilter = false;
      this.regionWiseFilter = true;
      let regionReq = {
        dataAccessDTO: this.httpService.dataAccessDTO
      };
      this.sattuReportService.getListOfRegionsOfUser(regionReq).subscribe(res => {
        this.regionList = res.responseObject;
      });
      this.stateList = [];
      this.reportForm.controls.state.setValue('');
      this.reportForm.controls.district.setValue('');
      this.reportForm.controls.block.setValue('');
      this.reportForm.controls.gp.setValue('');
    }
  }
  changeState(stateId) {
    this.showSelectionWiseSattuList = [];
    let districtBlockReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    };
    this.sattuReportService.getListOfDistrictAndBlock(districtBlockReq).subscribe(res => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
    this.reportForm.controls.district.setValue('');
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.state) {
      this.reportForm.controls['district'].disable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
      this.stateWiseDistrictList = [];
      this.blockList = [];
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
    }
  }
  changeDistrict(value) {
    this.showSelectionWiseSattuList = [];
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
    this.reportForm.controls.block.setValue('');
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.district) {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].disable();
      this.reportForm.controls['gp'].disable();
      this.blockList = [];
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].disable();
    }
  }
  changeBlock(blockId) {
    this.showSelectionWiseSattuList = [];
    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    this.reportForm.controls.gp.setValue('');
    if (!this.reportForm.value.block) {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].disable();
      this.gpList = [];
    } else {
      this.reportForm.controls['district'].enable();
      this.reportForm.controls['block'].enable();
      this.reportForm.controls['gp'].enable();
    }
  }
  changeGP(GPId) {
    this.showSelectionWiseSattuList = [];
  }
  restrictTypeOfDate() {
    return false;
  }
  totalCount(arr, key) {
    let x = 0;
    arr.filter(i => {
      x += i[key];
    });
    return x;
  }
  generateReport() {
    if (!this.reportForm.value.project) {
      this.showError('Please select a project');
      return;
    } else if (!this.reportForm.value.date) {
      this.showError('Please select a date');
      return;
    }
    if (this.projectWiseFilter == true) {
      this.tableHeadName = "Project";
      this.loader = false;
      let projectwiseReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        uptoVisitDate: this.reportForm.value.date
      };
      this.sattuReportService.getSattuRegisterInfoProjectWise(projectwiseReq).subscribe(res => {
        this.loader = true;
        if (res.responseObject?.length == 0) {
          this.showError('No Data Found !');
        }
        this.projectWiseSattuList = res.responseObject;
        console.log(this.projectWiseSattuList, 'projectWiseSattuList');
        this.showSelectionWiseSattuList = this.projectWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showprojectWiseSelection');
        this.countFunction(this.projectWiseSattuList);
      });
    } else if (this.stateWiseFilter == true) {
      // if ((this.roleType != "PM") && (this.locationForm.get('state').value == "" || this.locationForm.get('district').value == "")) {
      //   this.showError("Please Select State & District");
      // } else {
      this.tableHeadName = this.reportForm.get('state').value ? this.reportForm.get('district').value ? this.reportForm.get('block').value ? this.reportForm.get('gp').value ? "Village" : `GP/Municipality` : "Block" : "District" : "State";
      this.loader = false;
      let statewiseReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.reportForm.get('project').value,
        stateMasterId: this.reportForm.get('state').value ? this.reportForm.get('state').value : null,
        districtMasterId: this.reportForm.get('district').value ? this.reportForm.get('district').value : null,
        blockMasterId: this.reportForm.get('block').value ? this.reportForm.get('block').value : null,
        gpMuncipalId: this.reportForm.get('gp').value ? this.reportForm.get('gp').value : null,
        uptoVisitDate: this.reportForm.value.date
      };
      console.log(statewiseReq);
      this.sattuReportService.getSattuRegisterInfoStateWise(statewiseReq).subscribe(res => {
        this.loader = true;
        if (res.responseObject?.length == 0) {
          this.showError('No Data Found !');
        }
        this.stateWiseSattuList = res.responseObject;
        console.log(this.stateWiseSattuList, 'stateWiseSattuList');
        this.showSelectionWiseSattuList = this.stateWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showstateWiseSelection');
        this.countFunction(this.stateWiseSattuList);
      });
    } else if (this.regionWiseFilter = true) {
      // if ((this.roleType != "PM") && (this.reportForm.get('region').value == "")) {
      //   this.showError("Please Select Region");
      // } else {
      this.tableHeadName = this.reportForm.get('region').value ? "Branch" : "Region";
      let regionwiseReq = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        projectMasterId: this.reportForm.get('project').value,
        regionMasterId: this.reportForm.get('region').value ? this.reportForm.get('region').value : null,
        uptoVisitDate: this.reportForm.value.date
      };
      this.loader = false;
      this.sattuReportService.getSattuRegisterInfoRegionWise(regionwiseReq).subscribe(res => {
        this.loader = true;
        if (res.responseObject.length == 0) {
          this.showError('No Data Found !');
        }
        this.regionWiseSattuList = res.responseObject;
        console.log(this.regionWiseSattuList, 'regionWiseSattuList');
        this.showSelectionWiseSattuList = this.regionWiseSattuList;
        console.log(this.showSelectionWiseSattuList, 'showregionWiseSelection');
        this.countFunction(this.regionWiseSattuList);
      });
    }
    // }
  }

  countFunction(arr) {
    arr = arr.map(({
      stats,
      ...object
    }) => ({
      ...object,
      ...stats
    }));
    arr = arr.map(({
      notPreparingSattuDetails,
      ...object
    }) => ({
      ...object,
      ...notPreparingSattuDetails
    }));
    console.log(arr);
    this.famTrained = this.totalCount(arr, 'noOfFamiliesTrainedForSattuMaking');
    this.regularFam = this.totalCount(arr, 'noOfFamiliesPreparingSattuRegularly');
    this.irregularFam = this.totalCount(arr, 'noOfFamiliesPreparingSattuIrregularly');
    this.NPTotalCount = this.totalCount(arr, 'noOfFamilies');
    this.financialCount = this.totalCount(arr, 'notPreparingSattuForFinancialReasons');
    this.timeConstraintsCount = this.totalCount(arr, 'notPreparingSattuForTimeConstraints');
    this.notInterestedCount = this.totalCount(arr, 'notPreparingSattuForNoInterest');
  }
  changeDate(e) {
    if (e == '') {
      this.showSelectionWiseSattuList = [];
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Sattu Register Report', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Sattu Register Report', {
      timeOut: 3000
    });
  }
}
SattuRegisterReportComponent.ɵfac = function SattuRegisterReportComponent_Factory(t) {
  return new (t || SattuRegisterReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sattu_register_report_service__WEBPACK_IMPORTED_MODULE_3__.SattuRegisterReportService));
};
SattuRegisterReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SattuRegisterReportComponent,
  selectors: [["app-sattu-register-report"]],
  decls: 68,
  vars: 20,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [3, "formGroup"], [1, "form-group", "col-md"], ["for", "project"], ["formControlName", "project", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "date"], [1, "text-danger"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "max", "ngClass", "change", "keydown"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "add_button", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["rowspan", "3"], ["rowspan", "3", 2, "width", "200px"], ["rowspan", "3", 2, "width", "100px"], ["colspan", "6"], ["colspan", "8"], ["colspan", "3"], ["colspan", "1"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "invalid-feedback"], ["type", "radio", "value", "stateWise", "formControlName", "stateOrRegion", 3, "click"], ["type", "radio", "value", "regionWise", "formControlName", "stateOrRegion", 3, "click"], ["for", "state"], ["formControlName", "state", 1, "form-select", 3, "ngClass", "change"], ["for", "district"], ["formControlName", "district", 1, "form-select", 3, "ngClass", "change"], ["for", "block"], ["formControlName", "block", 1, "form-select", 3, "ngClass", "change"], ["for", "gp"], ["formControlName", "gp", 1, "form-select", 3, "ngClass", "change"], [1, "form-group", "col-md-4"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass"], [1, "add_button"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-file-text-o"], [2, "font-size", "13px"], [2, "font-size", "12px", "word-wrap", "break-word"], ["colspan", "3", 2, "font-size", "13px"], ["colspan", "1", 2, "font-size", "13px"], ["colspan", "2", 2, "font-size", "13px"], [2, "font-size", "12px", "word-wrap", "break-word", "color", "#666666"], [2, "font-size", "13px", "color", "#666666"], ["colspan", "3", 2, "font-size", "13px", "color", "#666666"], ["colspan", "1", 2, "font-size", "13px", "color", "#666666"], ["colspan", "2", 2, "font-size", "13px", "color", "#666666"]],
  template: function SattuRegisterReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Sattu Register Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Project :");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_Template_select_change_13_listener($event) {
        return ctx.changeProject($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "-- Select Project --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "All Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SattuRegisterReportComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 8)(20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SattuRegisterReportComponent_Template_input_change_24_listener($event) {
        return ctx.changeDate($event.target.value);
      })("keydown", function SattuRegisterReportComponent_Template_input_keydown_24_listener() {
        return ctx.restrictTypeOfDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SattuRegisterReportComponent_div_25_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SattuRegisterReportComponent_div_26_Template, 16, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SattuRegisterReportComponent_div_27_Template, 29, 20, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SattuRegisterReportComponent_div_28_Template, 8, 5, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SattuRegisterReportComponent_div_29_Template, 4, 0, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "table", 24)(34, "thead")(35, "tr")(36, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "SL");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "NO.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "No. of");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Family Trained");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Family Preparing Sattu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Family Not Preparing Sattu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "tr")(53, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Regular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Irregular");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Financial Issue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Time Constraints");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Not Interested");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, SattuRegisterReportComponent_tr_66_Template, 19, 9, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, SattuRegisterReportComponent_tr_67_Template, 26, 7, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.reportForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, ctx.f.project.invalid && ctx.f.project.touched, ctx.f.project.valid && (ctx.f.project.dirty || ctx.f.project.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.projectList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("max", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](17, _c0, ctx.f.date.invalid && ctx.f.date.touched, ctx.f.date.valid && (ctx.f.date.dirty || ctx.f.date.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.date.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.stateWiseFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.regionWiseFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.stateWiseFilter || ctx.regionWiseFilter || ctx.projectWiseFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tableHeadName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.showSelectionWiseSattuList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSelectionWiseSattuList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: ["table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\tborder: 0.5px solid rgb(255, 255, 255);\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 12px 0px;\r\n}\r\n\r\n.add_button[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 60px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci1yZXBvcnQvc2F0dHUtcmVnaXN0ZXItcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdHIgdGgge1xyXG5cdGJvcmRlcjogMC41cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoXHJcbiwgLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMnB4IDBweDtcclxufVxyXG5cclxuLmFkZF9idXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlIHRoZWFkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNjBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 43865:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/sattu-register-report/sattu-register-report.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterReportModule": () => (/* binding */ SattuRegisterReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _sattu_register_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-register-report-routing.module */ 17485);
/* harmony import */ var _sattu_register_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sattu-register-report.component */ 54998);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class SattuRegisterReportModule {}
SattuRegisterReportModule.ɵfac = function SattuRegisterReportModule_Factory(t) {
  return new (t || SattuRegisterReportModule)();
};
SattuRegisterReportModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SattuRegisterReportModule
});
SattuRegisterReportModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _sattu_register_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterReportRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SattuRegisterReportModule, {
    declarations: [_sattu_register_report_component__WEBPACK_IMPORTED_MODULE_1__.SattuRegisterReportComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _sattu_register_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterReportRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 84657:
/*!********************************************************************************!*\
  !*** ./src/app/modules/sattu-register-report/sattu-register-report.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterReportService": () => (/* binding */ SattuRegisterReportService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class SattuRegisterReportService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getAllProject(obj) {
    return this.http.post(`${this.baseURL}report/getAllProject`, obj);
  }
  getListOfAllStates(obj) {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj);
  }
  getListOfRegionsOfUser(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj);
  }
  getListOfDistrictAndBlock(obj) {
    return this.http.post(`${this.baseURL}district/getListOfDistrictAndBlock`, obj);
  }
  getSattuRegisterInfoProjectWise(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoProjectWise`, obj);
  }
  getSattuRegisterInfoStateWise(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoStateWise`, obj);
  }
  getSattuRegisterInfoRegionWise(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoRegionWise`, obj);
  }
}
SattuRegisterReportService.ɵfac = function SattuRegisterReportService_Factory(t) {
  return new (t || SattuRegisterReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SattuRegisterReportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SattuRegisterReportService,
  factory: SattuRegisterReportService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_sattu-register-report_sattu-register-report_module_ts.js.map