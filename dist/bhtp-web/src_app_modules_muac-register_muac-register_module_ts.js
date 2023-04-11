"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_muac-register_muac-register_module_ts"],{

/***/ 11887:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/muac-register/muac-register-create/muac-register-create.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuacRegisterCreateComponent": () => (/* binding */ MuacRegisterCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _muac_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../muac-register.service */ 10800);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_sidebar_muac_children_view_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/muac-children-view-search.pipe */ 16602);














function MuacRegisterCreateComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.createModal(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add Muac Camp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.addMuacDisabled());
  }
}
function MuacRegisterCreateComponent_div_9_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", region_r15.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r15.regionName, " ");
  }
}
function MuacRegisterCreateComponent_div_9_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MuacRegisterCreateComponent_div_9_div_10_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.l.region.errors.required);
  }
}
function MuacRegisterCreateComponent_div_9_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", branch_r17.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r17.branchName, " ");
  }
}
function MuacRegisterCreateComponent_div_9_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_div_9_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MuacRegisterCreateComponent_div_9_div_20_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function MuacRegisterCreateComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MuacRegisterCreateComponent_div_9_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MuacRegisterCreateComponent_div_9_option_9_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MuacRegisterCreateComponent_div_9_div_10_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 19)(12, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MuacRegisterCreateComponent_div_9_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MuacRegisterCreateComponent_div_9_option_19_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, MuacRegisterCreateComponent_div_9_div_20_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r1.l.region.invalid && ctx_r1.l.region.touched, ctx_r1.l.region.valid && (ctx_r1.l.region.dirty || ctx_r1.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx_r1.l.branch.invalid && ctx_r1.l.branch.touched, ctx_r1.l.branch.valid && (ctx_r1.l.branch.dirty || ctx_r1.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.l.branch.errors);
  }
}
function MuacRegisterCreateComponent_tr_27_i_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_tr_27_i_11_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.editModal(_r5, item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_tr_27_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_tr_27_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r22 = ctx_r32.$implicit;
      const i_r23 = ctx_r32.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.deleteMuac(item_r22, i_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_tr_27_i_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_tr_27_i_13_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.muacCampLockOrUnlock(item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_tr_27_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_tr_27_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.muacCampLockOrUnlock(item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MuacRegisterCreateComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_tr_27_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const item_r22 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.ViewChildDataEntry(_r7, item_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MuacRegisterCreateComponent_tr_27_i_11_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MuacRegisterCreateComponent_tr_27_i_12_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, MuacRegisterCreateComponent_tr_27_i_13_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MuacRegisterCreateComponent_tr_27_i_14_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r22.campNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r22.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r22.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r22.isLocked == "U" && ctx_r2.camplockMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r22.isLocked == "L" && ctx_r2.camplockMode);
  }
}
function MuacRegisterCreateComponent_ng_template_28_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td")(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MuacRegisterCreateComponent_ng_template_28_tr_18_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.muacDetails.muacInfo[i_r45].startDate = $event);
    })("keydown", function MuacRegisterCreateComponent_ng_template_28_tr_18_Template_input_keydown_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.restrictTypeOfDate());
    })("change", function MuacRegisterCreateComponent_ng_template_28_tr_18_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.expectEndDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MuacRegisterCreateComponent_ng_template_28_tr_18_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.muacDetails.muacInfo[i_r45].endDate = $event);
    })("keydown", function MuacRegisterCreateComponent_ng_template_28_tr_18_Template_input_keydown_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r45 = ctx.index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r43.muacDetails.muacInfo[i_r45].startDate)("min", ctx_r43.minDate)("max", ctx_r43.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r43.muacDetails.muacInfo[i_r45].endDate)("min", ctx_r43.selStartDate)("max", ctx_r43.maxDate)("disabled", !ctx_r43.muacDetails.muacInfo[i_r45].startDate);
  }
}
function MuacRegisterCreateComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Create Muac");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 42)(6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_ng_template_28_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.muacModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 45)(9, "div", 46)(10, "table", 47)(11, "thead")(12, "tr", 48)(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MuacRegisterCreateComponent_ng_template_28_tr_18_Template, 5, 7, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 50)(20, "div", 18)(21, "div", 51)(22, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_ng_template_28_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r54.saveMuac());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.muacDetails.muacInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r4.checkMuacDisabled());
  }
}
function MuacRegisterCreateComponent_ng_template_30_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td")(2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MuacRegisterCreateComponent_ng_template_30_tr_18_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const i_r58 = restoredCtx.index;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r59.muacDetails.muacInfo[i_r58].startDate = $event);
    })("keydown", function MuacRegisterCreateComponent_ng_template_30_tr_18_Template_input_keydown_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r61.restrictTypeOfDate());
    })("change", function MuacRegisterCreateComponent_ng_template_30_tr_18_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r62.expectEndDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MuacRegisterCreateComponent_ng_template_30_tr_18_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const i_r58 = restoredCtx.index;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.muacDetails.muacInfo[i_r58].endDate = $event);
    })("keydown", function MuacRegisterCreateComponent_ng_template_30_tr_18_Template_input_keydown_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r58 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r56.muacDetails.muacInfo[i_r58].startDate)("min", ctx_r56.editMinDate)("max", ctx_r56.editMaxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r56.muacDetails.muacInfo[i_r58].endDate)("min", ctx_r56.selStartDate)("max", ctx_r56.editMaxDate);
  }
}
function MuacRegisterCreateComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Edit Muac");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 42)(6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_ng_template_30_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.muacModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 45)(9, "div", 46)(10, "table", 47)(11, "thead")(12, "tr", 48)(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MuacRegisterCreateComponent_ng_template_30_tr_18_Template, 5, 6, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 50)(20, "div", 18)(21, "div", 51)(22, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_ng_template_30_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.saveEditMuac());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.muacDetails.muacInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.checkMuacDisabled());
  }
}
function MuacRegisterCreateComponent_ng_template_32_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", vill_r70.villageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vill_r70.villageName, " ");
  }
}
function MuacRegisterCreateComponent_ng_template_32_table_74_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const i_r73 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r73 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r72.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", item_r72.firstName, " ", item_r72.middleName, " ", item_r72.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r72.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r72.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r72.childDob.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r72.muacDetails == null ? null : item_r72.muacDetails.muacRecordDate.split("-").reverse().join("-")) ? item_r72.muacDetails == null ? null : item_r72.muacDetails.muacRecordDate.split("-").reverse().join("-") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r72.muacDetails == null ? null : item_r72.muacDetails.height) ? item_r72.muacDetails == null ? null : item_r72.muacDetails.height : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r72.muacDetails == null ? null : item_r72.muacDetails.weight) ? item_r72.muacDetails == null ? null : item_r72.muacDetails.weight : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r72.muacDetails == null ? null : item_r72.muacDetails.muac) ? item_r72.muacDetails == null ? null : item_r72.muacDetails.muac : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]((item_r72.muacDetails == null ? null : item_r72.muacDetails.muacIndicatorName) == "RED" ? "danger" : (item_r72.muacDetails == null ? null : item_r72.muacDetails.muacIndicatorName) == "GREEN" ? "success" : (item_r72.muacDetails == null ? null : item_r72.muacDetails.muacIndicatorName) == "YELLOW" ? "warning" : null);
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    familyNumber: a0,
    firstName: a1,
    middleName: a2,
    lastName: a3,
    husbandOrGuardianName: a4
  };
};
function MuacRegisterCreateComponent_ng_template_32_table_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 81)(1, "thead", 82)(2, "tr", 48)(3, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Mother Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Gurdian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "MUAC Record Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "MUAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, MuacRegisterCreateComponent_ng_template_32_table_74_tr_26_Template, 23, 15, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "muacChildrenViewFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 1, ctx_r69.filterChildList, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction5"](4, _c1, ctx_r69.registerSearch, ctx_r69.registerSearch, ctx_r69.registerSearch, ctx_r69.registerSearch, ctx_r69.registerSearch)));
  }
}
function MuacRegisterCreateComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 41)(2, "form", 7)(3, "div", 18)(4, "div", 57)(5, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MuacRegisterCreateComponent_ng_template_32_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.changeVillage($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, MuacRegisterCreateComponent_ng_template_32_option_8_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 59)(10, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MuacRegisterCreateComponent_ng_template_32_Template_select_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.filterByRecord($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "-- Select Child MUAC Filter --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "MUAC Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "MUAC Data Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 19)(18, "div", 63)(19, "div", 64)(20, "div", 65)(21, "form", 66)(22, "div", 67)(23, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MuacRegisterCreateComponent_ng_template_32_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r77.registerSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 42)(27, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MuacRegisterCreateComponent_ng_template_32_Template_span_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.modalReference.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 45)(30, "div", 18)(31, "div", 72)(32, "strong", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Children Count :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 74)(38, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br")(47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "br")(62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "br")(72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, MuacRegisterCreateComponent_ng_template_32_table_74_Template, 28, 10, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r8.viewChildrenListMuacForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.villageList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r8.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r8.registerSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", ctx_r8.villageName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Target : ", ctx_r8.targetChildrenCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Achieved : ", ctx_r8.achievementChildrenCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Not Achieved : ", ctx_r8.targetChildrenCount - ctx_r8.achievementChildrenCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r8.totalRedChildrenCount, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.severeChildrenCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.totalYellowChildrenCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.totalGreenChildrenCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Male : ", ctx_r8.totalMaleChildrenCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Female : ", ctx_r8.totalFemaleChildrenCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Other : ", ctx_r8.totalOtherChildrenCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.viewChildrenListMuacForm.value.gram);
  }
}
class MuacRegisterCreateComponent {
  constructor(httpService, muacService, modalService, toaster, fb, config, sidebarService, http, router) {
    this.httpService = httpService;
    this.muacService = muacService;
    this.modalService = modalService;
    this.toaster = toaster;
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.router = router;
    this.muacCampList = [];
    this.muacDetails = {
      muacInfo: []
    };
    this.loader = true;
    this.villagesOfBranch = [];
    this.regionList = [];
    this.branchList = [];
    this.villageWiseMuacData = [];
    this.villageList = [];
    this.childrenList = [];
    this.filterChildList = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    console.log(this.sidebarService.userId);
    this.locForm();
    this.muacDetails.muacInfo.push({
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: this.sidebarService.userId,
      createdDateTime: new Date().toISOString().slice(0, 10)
    });
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.hcoBranchId = res.branchId;
        this.changeBranch(res.branchId);
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 97 || item.subFunctionMasterId == 98 || item.subFunctionMasterId == 99 || item.subFunctionMasterId == 100)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/muac-register/create']) : this.router.navigate(['/error']);
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 97 || item.subFunctionMasterId == 98 || item.subFunctionMasterId == 99 || item.subFunctionMasterId == 100)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 97 || item.subFunctionMasterId == 98 || item.subFunctionMasterId == 99 || item.subFunctionMasterId == 100)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 97 || item.subFunctionMasterId == 98 || item.subFunctionMasterId == 99 || item.subFunctionMasterId == 100)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.camplockMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 97 || item.subFunctionMasterId == 98 || item.subFunctionMasterId == 99 || item.subFunctionMasterId == 100)?.accessDetailList.find(accessType => accessType.accessType == 'camp lock')?.accessType ? true : false;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.muacService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    }, error => {
      this.branchList = null;
    });
    this.locationForm.controls.branch.setValue('');
    this.muacCampList = [];
    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.muacCampList = [];
    }
  }
  changeBranch(branchId) {
    this.branchId = branchId;
    let obj = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: branchId
    };
    this.loader = false;
    //API call for viewing muacList
    setTimeout(() => {
      this.muacService.muacCampList(obj).subscribe(response => {
        this.loader = true;
        this.muacList = response.responseObject;
        this.muacCampList = response.responseObject?.muaccampDetailList;
        if (this.muacCampList?.length == 0) {
          this.showError('No Data Found');
        }
        console.log(this.muacCampList);
        this.getMinDate(this.muacList);
      }, err => {
        this.loader = true;
      });
    }, 1000);
    if (!branchId) {
      if (this.locationForm.value.branch == '') {
        this.showError('No Data Found');
        this.muacCampList = [];
        this.muacAdd = true;
      }
    }
  }
  createModal(createMuac) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(createMuac, {
      windowClass: 'createMuac'
    });
  }
  locForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get l() {
    return this.locationForm.controls;
  }
  editModal(editMuac, item) {
    this.muacEditInfo = item;
    console.log(this.muacEditInfo, 'muacEditInfo');
    this.muacDetails.muacInfo[0].startDate = item.startDate;
    this.muacDetails.muacInfo[0].endDate = item.endDate;
    this.modalContent = '';
    this.modalReference = this.modalService.open(editMuac, {
      windowClass: 'editMuac'
    });
    var index = this.MuacList.muaccampDetailList.findIndex(function (items) {
      return items.muacCampId === item.muacCampId;
    });
    console.log(index, 'index');
    if (index == 0) {
      if (this.MuacList.muaccampDetailList.length == 1) {
        console.log('branchOpenDate', this.muacList?.branchOpenDate);
        console.log('branchCloseDate', this.muacList?.branchCloseDate);
        console.log('projectStartDate', this.muacList?.projectStartDate);
        console.log('projectEndDate', this.muacList?.projectEndDate);
        var projectStartDate = this.muacList?.projectStartDate;
        var branchOpenDate = this.muacList?.branchOpenDate;
        if (projectStartDate < branchOpenDate) {
          console.log("projectStartDate is lesser than branchOpenDate");
          this.setStartDate = branchOpenDate;
          console.log(this.setStartDate, 'setStartDate');
        } else if (projectStartDate > branchOpenDate) {
          console.log("projectStartDate is greater than branchOpenDate");
          this.setStartDate = projectStartDate;
          console.log(this.setStartDate, 'setStartDate');
        } else {
          console.log("both are equal");
          this.setStartDate = projectStartDate;
          console.log(this.setStartDate, 'setStartDate');
        }
        var dateString = this.setStartDate;
        var minDateToSet = moment__WEBPACK_IMPORTED_MODULE_0__(dateString).add(1, "days").format("YYYY-MM-DD");
        this.editMinDate = minDateToSet;
        var secondindexstartdate = this.MuacList.projectEndDate;
        console.log(secondindexstartdate, 'secondindex12');
        this.editMaxDate = moment__WEBPACK_IMPORTED_MODULE_0__(secondindexstartdate).subtract(1, "days").format("YYYY-MM-DD");
      } else {
        this.editMinDate = this.MuacList.projectStartDate;
        var secondindexstartdate = this.MuacList.muaccampDetailList[index + 1];
        console.log(secondindexstartdate.startDate, 'secondinde23x');
        this.editMaxDate = moment__WEBPACK_IMPORTED_MODULE_0__(secondindexstartdate.startDate).subtract(1, "days").format("YYYY-MM-DD");
      }
    } else if (index == this.MuacList.muaccampDetailList.length - 1) {
      this.editMaxDate = this.MuacList.projectEndDate;
      var secondlastindexstartdate = this.MuacList.muaccampDetailList.filter((items, index) => index == this.MuacList.muaccampDetailList.length - 2);
      console.log(secondlastindexstartdate[0]?.endDate, 'secondindex');
      this.editMinDate = moment__WEBPACK_IMPORTED_MODULE_0__(secondlastindexstartdate[0]?.endDate).add(1, "days").format("YYYY-MM-DD");
    } else {
      var afterindex = this.MuacList.muaccampDetailList.filter((items, indexs) => indexs == index + 1);
      this.editMaxDate = moment__WEBPACK_IMPORTED_MODULE_0__(afterindex[0]?.startDate).subtract(1, "days").format("YYYY-MM-DD");
      var beforeindex = this.MuacList.muaccampDetailList.filter((items, indexs) => indexs == index - 1);
      this.editMinDate = moment__WEBPACK_IMPORTED_MODULE_0__(beforeindex[0]?.endDate).add(1, "days").format("YYYY-MM-DD");
    }
  }
  saveEditMuac() {
    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      projectMasterId: this.muacList.projectMasterId,
      projectName: this.muacList.projectName,
      projectStartDate: this.muacList.projectStartDate,
      projectEndDate: this.muacList.projectEndDate,
      branchName: this.muacList.branchName,
      branchOpenDate: this.muacList.branchOpenDate,
      branchCloseDate: this.muacList.branchCloseDate,
      muacCampDTOList: [{
        muacCampId: this.muacEditInfo.muacCampId,
        startDate: this.muacDetails.muacInfo[0].startDate,
        endDate: this.muacDetails.muacInfo[0].endDate,
        userId: this.sidebarService.userId,
        createdDateTime: new Date().toISOString().slice(0, 10)
      }]
    };
    console.log(postBody);
    if (this.muacDetails.muacInfo[0].startDate > this.muacDetails.muacInfo[0].endDate || this.muacDetails.muacInfo[0].startDate == this.muacDetails.muacInfo[0].endDate) {
      this.showError('End date should be after the start date');
      return;
    }
    // API call for Edit muac
    this.muacService.saveMuac(postBody).subscribe(response => {
      this.muacSave = response;
      console.log(this.muacSave);
      if (response.status === true) {
        this.showSuccess(response.message);
        this.muacModalDismiss();
        this.changeBranch(this.branchId);
      } else {
        this.showError(response.message);
      }
    });
  }
  muacModalDismiss() {
    this.modalReference.close();
    this.muacDetails.muacInfo = [{
      muacCampId: 0,
      startDate: '',
      endDate: '',
      userId: this.sidebarService.userId,
      createdDateTime: new Date().toISOString().slice(0, 10)
    }];
  }
  checkMuacDisabled() {
    let flag = true;
    if (this.muacDetails.muacInfo.length == 0) {
      flag = false;
    }
    this.muacDetails.muacInfo.forEach(item => {
      if (!item.startDate || !item.endDate) {
        flag = false;
      }
    });
    return flag;
  }
  addMuacDisabled() {
    let flag = true;
    if (this.locationForm.value.branch == '') {
      flag = false;
    }
    if (this.branchId) {
      flag = true;
    }
    return flag;
  }
  saveMuac() {
    let postBody = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      projectMasterId: this.muacList.projectMasterId,
      projectName: this.muacList.projectName,
      projectStartDate: this.muacList.projectStartDate,
      projectEndDate: this.muacList.projectEndDate,
      branchName: this.muacList.branchName,
      branchOpenDate: this.muacList.branchOpenDate,
      branchCloseDate: this.muacList.branchCloseDate,
      muacCampDTOList: this.muacDetails.muacInfo
    };
    console.log(postBody);
    if (this.muacDetails.muacInfo[0].startDate > this.muacDetails.muacInfo[0].endDate) {
      this.showError('End date should be after the start date');
      return;
    }
    // API call for save muac
    this.muacService.saveMuac(postBody).subscribe(response => {
      this.muacSave = response;
      console.log(this.muacSave);
      if (response.status === true) {
        this.showSuccess(response.message);
        this.muacModalDismiss();
        this.changeBranch(this.branchId);
      } else {
        this.showError(response.message);
      }
    });
  }
  getMinDate(muacList) {
    this.MuacList = muacList;
    if (muacList.muaccampDetailList.length == 0) {
      console.log('branchOpenDate', muacList?.branchOpenDate);
      console.log('branchCloseDate', muacList?.branchCloseDate);
      console.log('projectStartDate', muacList?.projectStartDate);
      console.log('projectEndDate', muacList?.projectEndDate);
      var projectStartDate = muacList?.projectStartDate;
      var branchOpenDate = muacList?.branchOpenDate;
      if (projectStartDate < branchOpenDate) {
        console.log("projectStartDate is lesser than branchOpenDate");
        this.setStartDate = branchOpenDate;
        console.log(this.setStartDate, 'setStartDate');
      } else if (projectStartDate > branchOpenDate) {
        console.log("projectStartDate is greater than branchOpenDate");
        this.setStartDate = projectStartDate;
        console.log(this.setStartDate, 'setStartDate');
      } else {
        console.log("both are equal");
        this.setStartDate = projectStartDate;
        console.log(this.setStartDate, 'setStartDate');
      }
      var dateString = this.setStartDate;
      var minDateToSet = moment__WEBPACK_IMPORTED_MODULE_0__(dateString).add(1, "days").format("YYYY-MM-DD");
      this.minDate = minDateToSet;
      var projectEndDate = muacList?.projectEndDate;
      var branchCloseDate = muacList?.branchCloseDate;
      if (projectEndDate < branchCloseDate) {
        console.log("projectEndDate is lesser than branchCloseDate");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      } else if (projectEndDate > branchCloseDate) {
        console.log("projectEndDate is greater than branchCloseDate");
        this.setEndDate = branchCloseDate;
        console.log(this.setEndDate, 'setEndDate');
      } else {
        console.log("both are equal");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }
      this.maxDate = this.setEndDate;
    } else {
      let lastMuacDate = muacList?.muaccampDetailList;
      const muacEndDate = lastMuacDate[lastMuacDate.length - 1];
      const muacEndDateSet = muacEndDate?.endDate;
      console.log(muacEndDateSet);
      const muacDate = moment__WEBPACK_IMPORTED_MODULE_0__(muacEndDateSet).add(1, "days").format("YYYY-MM-DD");
      this.minDate = muacDate;
      var projectEndDate = muacList?.projectEndDate;
      var branchCloseDate = muacList?.branchCloseDate;
      if (projectEndDate < branchCloseDate) {
        console.log("projectEndDate is lesser than branchCloseDate");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      } else if (projectEndDate > branchCloseDate) {
        console.log("projectEndDate is greater than branchCloseDate");
        this.setEndDate = branchCloseDate;
        console.log(this.setEndDate, 'setEndDate');
      } else {
        console.log("both are equal");
        this.setEndDate = projectEndDate;
        console.log(this.setEndDate, 'setEndDate');
      }
      this.maxDate = this.setEndDate;
    }
  }
  addDays(numOfDays, date = new Date()) {
    date.setDate(date.getDate() + numOfDays);
    return date;
  }
  expectEndDate(e) {
    // var dtStartDate = new Date(e.target.value);
    // this.month = dtStartDate.getMonth() + 1;
    // this.day = dtStartDate.getDate() + 1;
    // this.year = dtStartDate.getFullYear();
    if (this.month < 10) this.month = '0' + this.month.toString();
    if (this.day < 10) this.day = '0' + this.day.toString();
    // var maxDate = this.year + '-' + this.month + '-' + this.day;
    this.selStartDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.addDays(1, new Date(e.target.value))).format('YYYY-MM-DD');
    console.log(this.selStartDate, 'selstartdate');
  }
  deleteMuac(item, i) {
    console.log(item);
    const post = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId,
      muacCampId: item.muacCampId,
      status: 'D',
      userId: this.sidebarService.userId,
      createdDateTime: item.startDate
    };
    console.log(post);
    if (i === this.muacList.muaccampDetailList.length - 1) {
      if (confirm('Do you want to delete muac camp :' + item.campNumber)) {
        this.muacService.deleteMuac(post).subscribe(response => {
          if (response.status === true) {
            this.muacList.muaccampDetailList.splice(i, 1);
            this.showSuccess(response.message);
          } else {
            this.showError(response.message);
          }
        });
      }
    } else {
      this.showError('Always delete last one');
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'MUAC Camp', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'MUAC Camp', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  ViewChildDataEntry(viewChild, item) {
    this.loader = false;
    this.villageList = [];
    console.log(item.muacCampId);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacCampId: item.muacCampId,
      branchId: this.branchId ? this.branchId : this.hcoBranchId
    };
    console.log(obj);
    this.muacService.viewChildrenListOfMuacCamp(obj).subscribe(res => {
      this.loader = true;
      console.log(res.responseObject, 'viewChildrenListOfMuacCamp');
      this.muacCampStatus = res.responseObject?.muacCampStats;
      this.targetChildrenCount = this.muacCampStatus?.targetChildrenCount;
      this.achievementChildrenCount = this.muacCampStatus?.achievementChildrenCount;
      this.totalRedChildrenCount = this.muacCampStatus?.totalRedChildrenCount;
      this.severeChildrenCount = this.muacCampStatus?.severeChildrenCount;
      this.totalYellowChildrenCount = this.muacCampStatus?.totalYellowChildrenCount;
      this.totalGreenChildrenCount = this.muacCampStatus?.totalGreenChildrenCount;
      this.totalMaleChildrenCount = this.muacCampStatus?.totalMaleChildrenCount;
      this.totalFemaleChildrenCount = this.muacCampStatus?.totalFemaleChildrenCount;
      this.totalOtherChildrenCount = this.muacCampStatus?.totalOtherChildrenCount;
      console.log(this.muacCampStatus, 'muacCampStatus');
      this.villageWiseMuacData = res.responseObject?.villageWiseMuacData;
      console.log(this.villageWiseMuacData, 'villageWiseMuacData');
      this.villageWiseMuacData.forEach(item => {
        this.villageList.push({
          villageName: item.villageName,
          villageId: item.villageId
        });
        console.log(this.villageList, 'villageList');
        // program to sort array by village name
        function compareName(a, b) {
          // converting to uppercase to have case-insensitive comparison
          const name1 = a.villageName.toUpperCase();
          const name2 = b.villageName.toUpperCase();
          let comparison = 0;
          if (name1 > name2) {
            comparison = 1;
          } else if (name1 < name2) {
            comparison = -1;
          }
          return comparison;
        }
        console.log(this.villageList.sort(compareName));
      });
    });
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewChild, {
      windowClass: 'viewChild'
    });
    this.viewChildrenListMuacForms();
    this.villageName = 'All Village';
  }
  viewChildrenListMuacForms() {
    this.viewChildrenListMuacForm = this.fb.group({
      gram: [''],
      record: ['']
    });
  }
  get c() {
    return this.viewChildrenListMuacForm.controls;
  }
  changeVillage(villageId) {
    this.viewChildrenListMuacForm.controls.record.setValue('');
    console.log(villageId);
    if (!this.viewChildrenListMuacForm.value.gram) {
      this.villageName = 'All Village';
    } else {
      this.villageName = this.villageList.find(item => item.villageId == villageId)?.villageName;
      console.log(this.villageName, 'this.villageName');
    }
    this.childrenList = this.villageWiseMuacData.find(item => item.villageId == villageId)?.childrenList;
    this.filterChildList = this.villageWiseMuacData.find(item => item.villageId == villageId)?.childrenList;
    console.log(this.childrenList, ' this.childrenList');
    this.villageStats = this.villageWiseMuacData.find(item => item.villageId == villageId)?.villageStats;
    if (this.viewChildrenListMuacForm.value.gram) {
      this.targetChildrenCount = this.villageStats?.targetChildrenCount;
      this.achievementChildrenCount = this.villageStats?.achievementChildrenCount;
      this.totalRedChildrenCount = this.villageStats?.totalRedChildrenCount;
      this.severeChildrenCount = this.villageStats?.severeChildrenCount;
      this.totalYellowChildrenCount = this.villageStats?.totalYellowChildrenCount;
      this.totalGreenChildrenCount = this.villageStats?.totalGreenChildrenCount;
      this.totalMaleChildrenCount = this.villageStats?.totalMaleChildrenCount;
      this.totalFemaleChildrenCount = this.villageStats?.totalFemaleChildrenCount;
      this.totalOtherChildrenCount = this.villageStats?.totalOtherChildrenCount;
    } else {
      this.targetChildrenCount = this.muacCampStatus?.targetChildrenCount;
      this.achievementChildrenCount = this.muacCampStatus?.achievementChildrenCount;
      this.totalRedChildrenCount = this.muacCampStatus?.totalRedChildrenCount;
      this.severeChildrenCount = this.muacCampStatus?.severeChildrenCount;
      this.totalYellowChildrenCount = this.muacCampStatus?.totalYellowChildrenCount;
      this.totalGreenChildrenCount = this.muacCampStatus?.totalGreenChildrenCount;
      this.totalMaleChildrenCount = this.muacCampStatus?.totalMaleChildrenCount;
      this.totalFemaleChildrenCount = this.muacCampStatus?.totalFemaleChildrenCount;
      this.totalOtherChildrenCount = this.muacCampStatus?.totalOtherChildrenCount;
    }
    console.log(this.villageStats, ' this.villageStats');
  }
  filterByRecord(value) {
    console.log(value);
    if (value == 'taken') {
      this.filterChildList = this.childrenList.filter(item => item.muacDetails != null);
    } else if (value == 'nottaken') {
      this.filterChildList = this.childrenList.filter(item => item.muacDetails == null);
    } else {
      this.filterChildList = this.childrenList;
    }
  }
  muacCampLockOrUnlock(item) {
    console.log(item);
    let lockUnlockObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacCampId: item.muacCampId,
      lockFlag: item.isLocked == 'U' ? 'L' : 'U'
    };
    this.muacService.muacCampLockOrUnlock(lockUnlockObj).subscribe(res => {
      if (res.status === true) {
        this.loader = false;
        this.changeBranch(this.branchId);
        setTimeout(() => {
          this.muacLockSuccess(res.message);
          this.loader = true;
        }, 500);
      } else {
        this.muacLockError(res.message);
      }
    });
  }
  muacLockSuccess(message) {
    this.toaster.success(message, 'MUAC Lock/ Unlock', {
      timeOut: 1500
    });
  }
  muacLockError(message) {
    this.toaster.error(message, 'MUAC Lock/ Unlock', {
      timeOut: 1500
    });
  }
}
MuacRegisterCreateComponent.ɵfac = function MuacRegisterCreateComponent_Factory(t) {
  return new (t || MuacRegisterCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_muac_register_service__WEBPACK_IMPORTED_MODULE_2__.MuacRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
MuacRegisterCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MuacRegisterCreateComponent,
  selectors: [["app-muac-register-create"]],
  decls: 34,
  vars: 5,
  consts: [[3, "hidden"], [1, "container"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [2, "float", "right"], [1, "add_button"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [4, "ngFor", "ngForOf"], ["createMuac", ""], ["editMuac", ""], ["viewChild", ""], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "row"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["title", "View Child Data Entry", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["class", "fas fa-edit", "title", "Edit Muac", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Muac", 3, "click", 4, "ngIf"], ["class", "fa fa-unlock fa-lg", "title", "Want to lock MUAC ?", 3, "click", 4, "ngIf"], ["class", "fa fa-lock fa-lg activate", "title", "Want to unlock MUAC ?", 3, "click", 4, "ngIf"], ["title", "Edit Muac", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Muac", 1, "fas", "fa-trash", 3, "click"], ["title", "Want to lock MUAC ?", 1, "fa", "fa-unlock", "fa-lg", 3, "click"], ["title", "Want to unlock MUAC ?", 1, "fa", "fa-lock", "fa-lg", "activate", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown", "change"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "disabled", "ngModelChange", "keydown"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], [1, "modal-contents"], [1, "form-group", "col-md", 2, "margin-left", "215px", "margin-top", "25px"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "change"], [1, "form-group", "col-md", 2, "margin-right", "-65px", "width", "368px", "margin-left", "-15px", "margin-top", "25px"], ["formControlName", "record", "id", "record", 1, "form-select", 3, "change"], ["value", "taken"], ["value", "nottaken"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search fam no., mother & guardian name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-22px", 3, "click"], [1, "col-md-2"], [2, "font-size", "large"], [1, "col-md-10"], ["type", "button", 1, "btn", "btn-secondary", 2, "width", "300px"], [1, "fa", "fa-circle", "fa-lg", 2, "color", "#cd0202"], [1, "fa", "fa-exclamation-triangle", 2, "color", "#ff5c5c"], ["title", "End Survey", 1, "fa", "fa-circle", "fa-lg", 2, "color", "#f7cd00"], [1, "fa", "fa-circle", "fa-lg", 2, "color", "#24d524"], ["class", "table table-striped childtable", "id", "table_wrapper", 4, "ngIf"], ["id", "table_wrapper", 1, "table", "table-striped", "childtable"], ["id", "header-fixed"], [2, "width", "3%"], [2, "width", "16%"], [2, "width", "14%"], [1, "fa", "fa-circle", "fa-lg"]],
  template: function MuacRegisterCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Muac Camp Creation");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MuacRegisterCreateComponent_button_7_Template, 2, 1, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MuacRegisterCreateComponent_div_9_Template, 21, 12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "table", 12)(14, "thead")(15, "tr")(16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Camp Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, MuacRegisterCreateComponent_tr_27_Template, 15, 8, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, MuacRegisterCreateComponent_ng_template_28_Template, 24, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MuacRegisterCreateComponent_ng_template_30_Template, 24, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, MuacRegisterCreateComponent_ng_template_32_Template, 75, 16, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.locationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.muacCampList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_sidebar_muac_children_view_search_pipe__WEBPACK_IMPORTED_MODULE_5__.muacChildrenViewFilterPipe],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  width: 600px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 550px;\r\n  width: 1280px;\r\n  margin-left: -390px;\r\n  background: white;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 280px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 -14px;\r\n  padding: 0 24px;\r\n  max-height: 44vh;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0.75rem;\r\n  border-top: 0px solid #dee2e6;\r\n  border-bottom-right-radius: calc(0.3rem - 1px);\r\n  border-bottom-left-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  width: 118%;\r\n  border-radius: 5px;\r\n  padding-left: 40px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-right: 140px;\r\n  margin-bottom: 6px;\r\n  margin-left: 50px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n  right: 13px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-top: 20px;\r\n  margin-left: 40px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n}\r\n\r\n.childtable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  vertical-align: top;\r\n  border-top: 0 !important;\r\n}\r\n\r\n.fa-unlock[_ngcontent-%COMP%]:hover{\r\n  color: #337676 !important;\r\n  cursor: pointer;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.activate[_ngcontent-%COMP%]:hover{\r\n  color: #337676 !important;\r\n  cursor: pointer;\r\n  font-size: 1.7em;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tdWFjLXJlZ2lzdGVyL211YWMtcmVnaXN0ZXItY3JlYXRlL211YWMtcmVnaXN0ZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsOENBQThDO0VBQzlDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudHMge1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW4tbGVmdDogLTM5MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY29sb3I6ICM3MGNhZjcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLmRhbmdlciB7XHJcbiAgY29sb3I6ICNjZDAyMDI7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLndhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjdjZDAwO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwIC0xNHB4O1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBtYXgtaGVpZ2h0OiA0NHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDExOCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uOjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2hpbGR0YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtdW5sb2NrOmhvdmVye1xyXG4gIGNvbG9yOiAjMzM3Njc2ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5hY3RpdmF0ZTpob3ZlcntcclxuICBjb2xvcjogIzMzNzY3NiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16252:
/*!***********************************************************************!*\
  !*** ./src/app/modules/muac-register/muac-register-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuacRegisterRoutingModule": () => (/* binding */ MuacRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _muac_register_create_muac_register_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muac-register-create/muac-register-create.component */ 11887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: 'create',
  component: _muac_register_create_muac_register_create_component__WEBPACK_IMPORTED_MODULE_0__.MuacRegisterCreateComponent
}];
class MuacRegisterRoutingModule {}
MuacRegisterRoutingModule.ɵfac = function MuacRegisterRoutingModule_Factory(t) {
  return new (t || MuacRegisterRoutingModule)();
};
MuacRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MuacRegisterRoutingModule
});
MuacRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MuacRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 80661:
/*!***************************************************************!*\
  !*** ./src/app/modules/muac-register/muac-register.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuacRegisterModule": () => (/* binding */ MuacRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _muac_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muac-register-routing.module */ 16252);
/* harmony import */ var _muac_register_create_muac_register_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muac-register-create/muac-register-create.component */ 11887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_sidebar_muac_children_view_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sidebar/muac-children-view-search.pipe */ 16602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








class MuacRegisterModule {}
MuacRegisterModule.ɵfac = function MuacRegisterModule_Factory(t) {
  return new (t || MuacRegisterModule)();
};
MuacRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MuacRegisterModule
});
MuacRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _muac_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.MuacRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MuacRegisterModule, {
    declarations: [_muac_register_create_muac_register_create_component__WEBPACK_IMPORTED_MODULE_1__.MuacRegisterCreateComponent, _shared_sidebar_muac_children_view_search_pipe__WEBPACK_IMPORTED_MODULE_4__.muacChildrenViewFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _muac_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.MuacRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule]
  });
})();

/***/ }),

/***/ 16602:
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/muac-children-view-search.pipe.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "muacChildrenViewFilterPipe": () => (/* binding */ muacChildrenViewFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class muacChildrenViewFilterPipe {
  transform(items, filter, defaultFilter) {
    if (!filter) {
      return items;
    }
    if (!Array.isArray(items)) {
      return items;
    }
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      if (defaultFilter) {
        return items.filter(item => filterKeys.reduce((x, keyName) => x && new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "", true));
      } else {
        return items.filter(item => {
          return filterKeys.some(keyName => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}
muacChildrenViewFilterPipe.ɵfac = function muacChildrenViewFilterPipe_Factory(t) {
  return new (t || muacChildrenViewFilterPipe)();
};
muacChildrenViewFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "muacChildrenViewFilter",
  type: muacChildrenViewFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_muac-register_muac-register_module_ts.js.map