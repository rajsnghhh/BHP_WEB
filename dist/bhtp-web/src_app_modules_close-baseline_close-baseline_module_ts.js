"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_close-baseline_close-baseline_module_ts"],{

/***/ 29210:
/*!*************************************************************************!*\
  !*** ./src/app/modules/close-baseline/close-baseline-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseBaselineRoutingModule": () => (/* binding */ CloseBaselineRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _close_baseline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-baseline.component */ 23897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _close_baseline_component__WEBPACK_IMPORTED_MODULE_0__.CloseBaselineComponent
}];
class CloseBaselineRoutingModule {}
CloseBaselineRoutingModule.ɵfac = function CloseBaselineRoutingModule_Factory(t) {
  return new (t || CloseBaselineRoutingModule)();
};
CloseBaselineRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CloseBaselineRoutingModule
});
CloseBaselineRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CloseBaselineRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 23897:
/*!********************************************************************!*\
  !*** ./src/app/modules/close-baseline/close-baseline.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseBaselineComponent": () => (/* binding */ CloseBaselineComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _close_baseline_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-baseline.service */ 55884);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);













function CloseBaselineComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", region_r7.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r7.regionName, " ");
  }
}
function CloseBaselineComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CloseBaselineComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CloseBaselineComponent_div_19_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors.required);
  }
}
function CloseBaselineComponent_tr_37_i_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_tr_37_i_11_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.saveActualCloseDate(item_r9, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CloseBaselineComponent_tr_37_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_tr_37_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.saveActualCloseDate(item_r9, _r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CloseBaselineComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_tr_37_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.saveTentativeEndDate(item_r9, _r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CloseBaselineComponent_tr_37_i_11_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CloseBaselineComponent_tr_37_i_12_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.p - 1) * 5 + i_r10 + 1 ? (ctx_r2.p - 1) * 5 + i_r10 + 1 : i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9.branchBaseLineSurveyTentativeEndDate ? item_r9.branchBaseLineSurveyTentativeEndDate : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r9.branchBaseLineSurveyActualEndDate ? item_r9.branchBaseLineSurveyActualEndDate : "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r9.branchBaseLineSurveyActualEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r9.branchBaseLineSurveyActualEndDate);
  }
}
function CloseBaselineComponent_ng_template_40_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tentative End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CloseBaselineComponent_ng_template_40_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CloseBaselineComponent_ng_template_40_div_12_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r21.l.tentativeEndDate.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CloseBaselineComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_ng_template_40_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 39)(5, "form", 7)(6, "div", 40)(7, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Tentative End Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CloseBaselineComponent_ng_template_40_Template_input_keydown_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CloseBaselineComponent_ng_template_40_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 2)(14, "div", 43)(15, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_ng_template_40_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.saveButtonTentativeEndDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r4.l.tentativeEndDate.invalid && ctx_r4.l.tentativeEndDate.touched, ctx_r4.l.tentativeEndDate.valid && (ctx_r4.l.tentativeEndDate.dirty || ctx_r4.l.tentativeEndDate.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.l.tentativeEndDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r4.modalForm.value.tentativeEndDate);
  }
}
function CloseBaselineComponent_ng_template_42_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tentative End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CloseBaselineComponent_ng_template_42_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CloseBaselineComponent_ng_template_42_div_12_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.m.tentativeDate.errors.required);
  }
}
function CloseBaselineComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_ng_template_42_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 39)(5, "form", 7)(6, "div", 40)(7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Tentative End Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CloseBaselineComponent_ng_template_42_Template_input_keydown_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CloseBaselineComponent_ng_template_42_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 2)(14, "div", 43)(15, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CloseBaselineComponent_ng_template_42_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.restartSurvey());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Restart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r6.restartModalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c0, ctx_r6.m.tentativeDate.invalid && ctx_r6.m.tentativeDate.touched, ctx_r6.m.tentativeDate.valid && (ctx_r6.m.tentativeDate.dirty || ctx_r6.m.tentativeDate.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.m.tentativeDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.restartModalForm.value.tentativeDate);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class CloseBaselineComponent {
  constructor(fb, httpService, closeBaselineService, modalService, config, toaster, router, confirmationDialogService, sidebarService) {
    this.fb = fb;
    this.httpService = httpService;
    this.closeBaselineService = closeBaselineService;
    this.modalService = modalService;
    this.toaster = toaster;
    this.router = router;
    this.confirmationDialogService = confirmationDialogService;
    this.sidebarService = sidebarService;
    this.regionList = [];
    this.branchList = [];
    this.loader = true;
    this.page = 1;
    this.pageSize = 6;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.createForm();
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.closeBaselineService.listOfRegionsOfUser(obj).subscribe(res => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
    this.sidebarService.subMenuList.find(functionMasterId => functionMasterId.functionMasterId == 4)?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 207)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/close-baseline']) : this.router.navigate(['/error']);
  }
  createForm() {
    this.closeBaselineForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get f() {
    return this.closeBaselineForm.controls;
  }
  changeRegion(regionID) {
    this.regionId = regionID;
    console.log(this.regionId);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionID
    };
    this.closeBaselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    this.branchList = [];
    if (this.closeBaselineForm.value.region == '') {
      this.branchList = [];
    }
  }
  saveTentativeEndDate(item, tentativeEndDates) {
    if (!item.branchBaseLineSurveyActualEndDate) {
      this.tentativeDetails = item;
      console.log(this.tentativeDetails);
      this.modalForms();
      this.modalContent = '';
      this.modalReference = this.modalService.open(tentativeEndDates, {
        windowClass: 'tentativeEndDates'
      });
    }
  }
  saveButtonTentativeEndDate() {
    console.log(this.tentativeDetails?.branchOpenDate, 'branchOpenDate');
    console.log(this.tentativeDetails?.branchCloseDate, 'branchCloseDate');
    console.log(this.tentativeDetails?.projectMasterDto?.projectStartDate, 'projectStartDate');
    console.log(this.tentativeDetails?.projectMasterDto?.projectEndDate, 'projectEndDate');
    console.log(this.modalForm.value.tentativeEndDate, 'tentativeEndDate');
    if (this.tentativeDetails?.branchOpenDate > this.modalForm.value.tentativeEndDate) {
      this.showError('Tentative end date can be after branch Open date');
      return;
    }
    if (this.tentativeDetails?.branchCloseDate < this.modalForm.value.tentativeEndDate) {
      this.showError('Tentative end date can not be after branch close date');
      return;
    }
    if (this.tentativeDetails?.projectMasterDto?.projectStartDate > this.modalForm.value.tentativeEndDate) {
      this.showError('Tentative end date can be after project Open date');
      return;
    }
    if (this.tentativeDetails?.projectMasterDto?.projectEndDate < this.modalForm.value.tentativeEndDate) {
      this.showError('Tentative end date can not be after project end date');
      return;
    }
    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.tentativeDetails.branchId,
      branchBaseLineSurveyEndDateMasterId: this.tentativeDetails.branchBaseLineSurveyEndDateMasterId ? this.tentativeDetails.branchBaseLineSurveyEndDateMasterId : 0,
      endDate: this.modalForm.value.tentativeEndDate
    };
    console.log(postObj);
    this.closeBaselineService.saveBaseLineSurveyTentativeEndDate(postObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeRegion(this.regionId);
      } else {
        this.showError(res.message);
      }
    });
  }
  restartSurvey() {
    console.log(this.restartModalData, 'restartModalData');
    var data = this.restartModalData;
    console.log(data.branchOpenDate, 'branchOpenDate');
    console.log(data.branchCloseDate, 'branchCloseDate');
    console.log(data.projectMasterDto?.projectStartDate, 'projectStartDate');
    console.log(data.projectMasterDto?.projectEndDate, 'projectEndDate');
    console.log(this.restartModalForm.value.tentativeDate, 'tentativeDate');
    if (data.branchOpenDate > this.restartModalForm.value.tentativeDate) {
      this.showError('Tentative end date can be after branch Open date');
      return;
    }
    if (data.branchCloseDate < this.restartModalForm.value.tentativeDate) {
      this.showError('Tentative end date can not be after branch close date');
      return;
    }
    if (data.projectMasterDto?.projectStartDate > this.restartModalForm.value.tentativeDate) {
      this.showError('Tentative end date can be after project Open date');
      return;
    }
    if (data.projectMasterDto?.projectEndDate < this.restartModalForm.value.tentativeDate) {
      this.showError('Tentative end date can not be after project end date');
      return;
    }
    let postObj2 = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: data.branchId,
      branchBaseLineSurveyEndDateMasterId: data.branchBaseLineSurveyEndDateMasterId,
      endDate: this.restartModalForm.value.tentativeDate
    };
    console.log(postObj2);
    this.closeBaselineService.reopenBaselineSurvey(postObj2).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeRegion(this.regionId);
      }
    });
  }
  saveActualCloseDate(item, restartModalUI) {
    if (item.branchBaseLineSurveyTentativeEndDate) {
      console.log(item);
      if (!item.branchBaseLineSurveyActualEndDate) {
        this.confirmationDialogService.confirm('', 'Are you sure you want to end Survey').then(() => this.end(item)).catch(() => '');
      } else {
        this.confirmationDialogService.confirm('', 'Are you sure you want to restart Survey').then(() => this.restart(item, restartModalUI)).catch(() => '');
      }
    }
  }
  end(item) {
    let postObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: item.branchId,
      branchBaseLineSurveyEndDateMasterId: item.branchBaseLineSurveyEndDateMasterId
    };
    console.log(postObj, 'end');
    this.loader = false;
    this.closeBaselineService.saveActualBaseLineSurveyCloseDate(postObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.loader = true;
        this.changeRegion(this.regionId);
      } else {
        this.showError(res.message);
        this.loader = true;
      }
    });
  }
  restart(item, restartModalUI) {
    console.log(item, 'restart');
    this.restartModalData = item;
    this.restartModal();
    this.modalContent = '';
    this.modalReference = this.modalService.open(restartModalUI, {
      windowClass: 'restartModalUI'
    });
  }
  restartModal() {
    this.restartModalForm = this.fb.group({
      tentativeDate: [this.restartModalData?.branchBaseLineSurveyTentativeEndDate ? this.restartModalData?.branchBaseLineSurveyTentativeEndDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.restartModalForm.markAllAsTouched();
  }
  get m() {
    return this.restartModalForm.controls;
  }
  modalForms() {
    this.modalForm = this.fb.group({
      tentativeEndDate: [this.tentativeDetails?.branchBaseLineSurveyTentativeEndDate ? this.tentativeDetails?.branchBaseLineSurveyTentativeEndDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.modalForm.markAllAsTouched();
  }
  get l() {
    return this.modalForm.controls;
  }
  restrictTypeOfDate() {
    return false;
  }
  modalDismiss() {
    this.tentativeDetails = [];
    this.modalReference.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'Close Baseline Survey', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Close Baseline Survey', {
      timeOut: 3000
    });
  }
  p(event) {}
}
CloseBaselineComponent.ɵfac = function CloseBaselineComponent_Factory(t) {
  return new (t || CloseBaselineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_close_baseline_service__WEBPACK_IMPORTED_MODULE_1__.CloseBaselineService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService));
};
CloseBaselineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CloseBaselineComponent,
  selectors: [["app-close-baseline"]],
  decls: 44,
  vars: 14,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "9%"], [2, "width", "26%"], [2, "width", "22%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["tentativeEndDates", ""], ["restartModalUI", ""], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "width", "28%"], ["title", "Save/ Update Tentative End Date", 1, "fas", "fa-save", 3, "click"], ["class", "fa fa-circle fa-lg", "title", "End Survey", "style", "color: #24d524;", 3, "click", 4, "ngIf"], ["class", "fa fa-circle fa-lg", "title", "Restart Survey", "style", "color: #cd0202;", 3, "click", 4, "ngIf"], ["title", "End Survey", 1, "fa", "fa-circle", "fa-lg", 2, "color", "#24d524", 3, "click"], ["title", "Restart Survey", 1, "fa", "fa-circle", "fa-lg", 2, "color", "#cd0202", 3, "click"], [1, "modal-header"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], [1, "form-group", "col-md"], ["for", "tentativeEndDate"], ["type", "date", "formControlName", "tentativeEndDate", 1, "form-control", 3, "ngClass", "keydown"], [1, "form-group", "col-md-6", 2, "margin-left", "420px"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["for", "tentativeDate"], ["type", "date", "formControlName", "tentativeDate", 1, "form-control", 3, "ngClass", "keydown"]],
  template: function CloseBaselineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Close Baseline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CloseBaselineComponent_Template_select_change_15_listener($event) {
        return ctx.changeRegion($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CloseBaselineComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, CloseBaselineComponent_div_19_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "table", 18)(24, "thead", 19)(25, "tr")(26, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Branch Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Tentative Survey End Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Actual Baseline Survey End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CloseBaselineComponent_tr_37_Template, 13, 6, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "pagination-controls", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function CloseBaselineComponent_Template_pagination_controls_pageChange_39_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function CloseBaselineComponent_Template_pagination_controls_pageBoundsCorrection_39_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CloseBaselineComponent_ng_template_40_Template, 17, 7, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, CloseBaselineComponent_ng_template_42_Template, 17, 7, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.closeBaselineForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](38, 6, ctx.branchList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c1, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe],
  styles: [".close[_ngcontent-%COMP%] {\r\n    margin-left: 450px;\r\n  }\r\n\r\n  .modal-content[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow-x: hidden;\r\n    width: 1000px;\r\n    margin-left: -190px;\r\n    margin-top: -4px;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jbG9zZS1iYXNlbGluZS9jbG9zZS1iYXNlbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 48064:
/*!*****************************************************************!*\
  !*** ./src/app/modules/close-baseline/close-baseline.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseBaselineModule": () => (/* binding */ CloseBaselineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _close_baseline_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-baseline-routing.module */ 29210);
/* harmony import */ var _close_baseline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-baseline.component */ 23897);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class CloseBaselineModule {}
CloseBaselineModule.ɵfac = function CloseBaselineModule_Factory(t) {
  return new (t || CloseBaselineModule)();
};
CloseBaselineModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CloseBaselineModule
});
CloseBaselineModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _close_baseline_routing_module__WEBPACK_IMPORTED_MODULE_0__.CloseBaselineRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CloseBaselineModule, {
    declarations: [_close_baseline_component__WEBPACK_IMPORTED_MODULE_1__.CloseBaselineComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _close_baseline_routing_module__WEBPACK_IMPORTED_MODULE_0__.CloseBaselineRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 55884:
/*!******************************************************************!*\
  !*** ./src/app/modules/close-baseline/close-baseline.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseBaselineService": () => (/* binding */ CloseBaselineService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CloseBaselineService {
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
  saveBaseLineSurveyTentativeEndDate(obj) {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/saveBaseLineSurveyTentativeEndDate`, obj);
  }
  saveActualBaseLineSurveyCloseDate(obj) {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/saveActualBaseLineSurveyCloseDate`, obj);
  }
  reopenBaselineSurvey(obj) {
    return this.http.post(`${this.baseURL}closeBaseLineSurvey/reopenBaselineSurvey`, obj);
  }
}
CloseBaselineService.ɵfac = function CloseBaselineService_Factory(t) {
  return new (t || CloseBaselineService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CloseBaselineService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CloseBaselineService,
  factory: CloseBaselineService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_close-baseline_close-baseline_module_ts.js.map