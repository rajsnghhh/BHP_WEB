"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_remap-user-hh_remap-user-hh_module_ts"],{

/***/ 88038:
/*!***********************************************************************!*\
  !*** ./src/app/modules/remap-user-hh/remap-user-hh-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserHhRoutingModule": () => (/* binding */ RemapUserHhRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _remap_user_hh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remap-user-hh.component */ 43476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _remap_user_hh_component__WEBPACK_IMPORTED_MODULE_0__.RemapUserHhComponent
}];
class RemapUserHhRoutingModule {}
RemapUserHhRoutingModule.ɵfac = function RemapUserHhRoutingModule_Factory(t) {
  return new (t || RemapUserHhRoutingModule)();
};
RemapUserHhRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RemapUserHhRoutingModule
});
RemapUserHhRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RemapUserHhRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 43476:
/*!******************************************************************!*\
  !*** ./src/app/modules/remap-user-hh/remap-user-hh.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserHhComponent": () => (/* binding */ RemapUserHhComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _remap_user_hh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remap-user-hh.service */ 69595);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);











function RemapUserHhComponent_option_18_Template(rf, ctx) {
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
function RemapUserHhComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserHhComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserHhComponent_div_19_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors.required);
  }
}
function RemapUserHhComponent_option_28_Template(rf, ctx) {
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
function RemapUserHhComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserHhComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserHhComponent_div_29_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.branch.errors.required);
  }
}
function RemapUserHhComponent_option_38_Template(rf, ctx) {
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
function RemapUserHhComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Role selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserHhComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserHhComponent_div_39_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.hco.errors.required);
  }
}
function RemapUserHhComponent_div_40_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ss_r17.swasthyaSahayikaName, " ");
  }
}
function RemapUserHhComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Filter By SS Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_div_40_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.ssWiseViewList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "-- View All List --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RemapUserHhComponent_div_40_option_6_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "List With No SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.ssLists);
  }
}
function RemapUserHhComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_tr_60_Template_input_change_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.clickCheckbox($event, item_r20.houseHoldDetailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r7.p - 1) * 5 + i_r21 + 1 ? (ctx_r7.p - 1) * 5 + i_r21 + 1 : i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r20.houseHoldNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r20.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r20.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r20.swasthyaSahayikaName ? item_r20.swasthyaSahayikaName : "-");
  }
}
function RemapUserHhComponent_ng_template_66_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hcouser_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", hcouser_r27.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", hcouser_r27.user_firstname, " ", hcouser_r27.user_middlename, " ", hcouser_r27.user_lastname, " - ", hcouser_r27.role_shortname, " ");
  }
}
function RemapUserHhComponent_ng_template_66_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "User selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RemapUserHhComponent_ng_template_66_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RemapUserHhComponent_ng_template_66_div_15_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r25.s.hcouser.errors.required);
  }
}
function RemapUserHhComponent_ng_template_66_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ss_r29.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ss_r29.swasthyaSahayikaName, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function RemapUserHhComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemapUserHhComponent_ng_template_66_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42)(5, "form", 7)(6, "div", 8)(7, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "HCO/ HCOI/ TL :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_ng_template_66_Template_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.changeHcouser($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "-- Select Role --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RemapUserHhComponent_ng_template_66_option_14_Template, 2, 5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RemapUserHhComponent_ng_template_66_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Swasthya Sahayika :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "select", 46)(20, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "-- Select SS--");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RemapUserHhComponent_ng_template_66_option_22_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 47)(24, "div", 2)(25, "div", 27)(26, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemapUserHhComponent_ng_template_66_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.saveRemapUserHHFromModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Remap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c0, ctx_r9.s.hcouser.invalid && ctx_r9.s.hcouser.touched, ctx_r9.s.hcouser.valid && (ctx_r9.s.hcouser.dirty || ctx_r9.s.hcouser.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.hcoModalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.s.hcouser.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.ssLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r9.modalForm.value.hcouser);
  }
}
class RemapUserHhComponent {
  constructor(fb, httpService, remapUserHHService, toaster, modalService, router, sidebarService) {
    this.fb = fb;
    this.httpService = httpService;
    this.remapUserHHService = remapUserHHService;
    this.toaster = toaster;
    this.modalService = modalService;
    this.router = router;
    this.sidebarService = sidebarService;
    this.regionList = [];
    this.branchList = [];
    this.hcoList = [];
    this.hcoModalList = [];
    this.hcoHHList = [];
    this.loader = true;
    this.ssLists = [];
    this.remapDto = {
      dataAccessDTO: {},
      selectedUserId: '',
      userHhUnmapRemapDtoList: []
    };
  }
  ngOnInit() {
    this.createForm();
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.remapUserHHService.listOfRegionsOfUser(obj).subscribe(res => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
    this.sidebarService.subMenuList.find(functionMasterId => functionMasterId.functionMasterId == 3)?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 205)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/remap-user-hh']) : this.router.navigate(['/error']);
  }
  createForm() {
    this.remapUserHhForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      hco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      ssByList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  get f() {
    return this.remapUserHhForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.remapUserHHService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    this.remapUserHhForm.controls.branch.setValue('');
    this.remapUserHhForm.controls.hco.setValue('');
    this.hcoHHList = [];
    this.hcoList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.region == '') {
      this.remapUserHhForm.controls.branch.setValue('');
      this.remapUserHhForm.controls.hco.setValue('');
      this.hcoHHList = [];
      this.hcoList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }
  }
  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId, 'branchId');
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.remapUserHHService.hcoListOfBranch(Dto).subscribe(res => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });
    this.remapUserHhForm.controls.hco.setValue('');
    this.hcoHHList = [];
    this.hcoList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.branch == '') {
      this.remapUserHhForm.controls.hco.setValue('');
      this.hcoList = [];
      this.hcoHHList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }
  }
  changeHco(hcoUserId) {
    this.changeHcouser(hcoUserId);
    this.hcoUserId = hcoUserId;
    console.log(this.hcoUserId);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcoUserId
    };
    this.loader = false;
    this.remapUserHHService.viewUsersMappedHHDetails(Dto).subscribe(res => {
      this.hcoHHList = res.responseObject;
      console.log(this.hcoHHList);
      if (this.hcoHHList == null) {
        this.showError('No Data Found');
      }
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });
    this.hcoHHList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.hco == '') {
      this.hcoHHList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }
  }
  clickCheckbox(e, hhId) {
    this.checkboxData = e.target.checked;
    console.log(this.checkboxData, 'this.checkboxData ', hhId);
    if (this.checkboxData) {
      this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO, this.remapDto.selectedUserId = this.hcoUserId, this.remapDto.userHhUnmapRemapDtoList.push({
        householdDetailId: hhId,
        remapUserId: null,
        remapSwasthyaSahayikaId: null
      });
      console.log(this.checkboxData);
    } else {
      var i = this.remapDto.userHhUnmapRemapDtoList.findIndex(list => list.householdDetailId == hhId);
      this.remapDto.userHhUnmapRemapDtoList.splice(i, 1);
    }
    console.log(this.remapDto, 'remapDto.userHhUnmapRemapDtoList');
  }
  remapUserHHModal(remapuser) {
    console.log(this.branchId, 'modalbranchId');
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.remapUserHHService.hcoListOfBranch(Dto).subscribe(res => {
      this.hcoModalList = res.responseObject;
      console.log(this.hcoModalList, 'hcoModalList');
    });
    this.modalContent = '';
    this.modalReference = this.modalService.open(remapuser, {
      windowClass: 'remapuser'
    });
    this.remapModalForm();
  }
  changeHcouser(hcouserId) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: hcouserId
    };
    this.remapUserHHService.getActiveSsListOfAnUser(obj).subscribe(res => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');
    });
  }
  saveRemapUserHHFromModal() {
    var remapUser = this.remapDto.userHhUnmapRemapDtoList;
    remapUser.filter(xyz => {
      xyz.remapUserId = this.modalForm.value.hcouser ? this.modalForm.value.hcouser : null;
    });
    console.log(remapUser);
    this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO, this.remapDto.userHhUnmapRemapDtoList = remapUser;
    console.log(this.remapDto);
    var ssId = this.remapDto.userHhUnmapRemapDtoList;
    ssId.filter(xyz => {
      xyz.remapSwasthyaSahayikaId = this.modalForm.value.ss ? this.modalForm.value.ss : null;
    });
    console.log(ssId);
    this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO, this.remapDto.userHhUnmapRemapDtoList = ssId;
    console.log(this.remapDto, 'finalremapdto');
    if (this.remapUserHhForm.value.hco == this.modalForm.value.hcouser) {
      this.showError('Selected User & remapping user should not be same');
      return;
    }
    this.remapUserHHService.remapUserHH(this.remapDto).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcoUserId);
      } else {
        this.showError(res.message);
      }
    });
  }
  remapModalForm() {
    this.modalForm = this.fb.group({
      hcouser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      ss: ['']
    });
  }
  get s() {
    return this.modalForm.controls;
  }
  modalDismiss() {
    this.modalReference.close();
  }
  ssWiseViewList(swasthyaSahayikaName) {
    console.log(swasthyaSahayikaName);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcoUserId
    };
    this.loader = false;
    this.remapUserHHService.viewUsersMappedHHDetails(Dto).subscribe(res => {
      this.hcoHHList = res.responseObject;
      console.log(this.hcoHHList);
      this.callSSfilter(swasthyaSahayikaName);
      this.loader = true;
    });
  }
  callSSfilter(swasthyaSahayikaName) {
    if (swasthyaSahayikaName == 'SS') {
      this.ssNameFilter = this.hcoHHList?.filter(item => item.swasthyaSahayikaName === null);
      console.log(this.ssNameFilter, 'this.nossNameFilter');
    } else {
      this.ssNameFilter = this.hcoHHList?.filter(item => item.swasthyaSahayikaName == swasthyaSahayikaName);
      console.log(this.ssNameFilter, 'this.ssNameFilter');
    }
    if (swasthyaSahayikaName) {
      if (this.ssNameFilter?.length == 0) {
        this.showErrorss('No matched data with' + ' ' + swasthyaSahayikaName);
        this.hcoHHList = this.ssNameFilter;
      } else {
        this.hcoHHList = this.ssNameFilter;
      }
    }
  }
  showErrorss(message) {
    this.toaster.error(message, '', {
      timeOut: 3000
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Remap-User-HH', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Remap-User-HH', {
      timeOut: 3000
    });
  }
}
RemapUserHhComponent.ɵfac = function RemapUserHhComponent_Factory(t) {
  return new (t || RemapUserHhComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_remap_user_hh_service__WEBPACK_IMPORTED_MODULE_1__.RemapUserHhService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService));
};
RemapUserHhComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RemapUserHhComponent,
  selectors: [["app-remap-user-hh"]],
  decls: 68,
  vars: 23,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["for", "hco"], ["formControlName", "hco", "id", "hco", 1, "form-select", 3, "ngClass", "change"], ["class", "form-group col-md", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["remapuser", ""], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "ssByList", "id", "ssByList", 1, "form-select", 3, "change"], ["value", "SS"], [2, "width", "9%"], [2, "width", "23%"], [2, "width", "17%"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], [1, "modal-header"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["for", "hcouser"], ["formControlName", "hcouser", "id", "hcouser", 1, "form-select", 3, "ngClass", "change"], ["for", "ss"], ["formControlName", "ss", "id", "ss", 1, "form-select"], [1, "modal-footer"]],
  template: function RemapUserHhComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Remap Household-User");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_Template_select_change_15_listener($event) {
        return ctx.changeRegion($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RemapUserHhComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RemapUserHhComponent_div_19_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Branch :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_Template_select_change_25_listener($event) {
        return ctx.changeBranch($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "-- Select Branch --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RemapUserHhComponent_option_28_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RemapUserHhComponent_div_29_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 8)(31, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "HCO/ HCOI/ TL :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemapUserHhComponent_Template_select_change_35_listener($event) {
        return ctx.changeHco($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "-- Select Role --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, RemapUserHhComponent_option_38_Template, 2, 5, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, RemapUserHhComponent_div_39_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RemapUserHhComponent_div_40_Template, 9, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20)(42, "div", 21)(43, "div", 22)(44, "table", 23)(45, "thead", 24)(46, "tr")(47, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Household No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Village of Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "SS Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Remap");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, RemapUserHhComponent_tr_60_Template, 13, 5, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 2)(62, "div", 27)(63, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemapUserHhComponent_Template_button_click_63_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](67);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.remapUserHHModal(_r8));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Remap");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, RemapUserHhComponent_ng_template_66_Template, 28, 9, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.remapUserHhForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx.f.branch.invalid && ctx.f.branch.touched, ctx.f.branch.valid && (ctx.f.branch.dirty || ctx.f.branch.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.branch.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c0, ctx.f.hco.invalid && ctx.f.hco.touched, ctx.f.hco.valid && (ctx.f.hco.dirty || ctx.f.hco.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hcoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.hco.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.remapUserHhForm.value.hco);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hcoHHList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.remapDto.userHhUnmapRemapDtoList.length == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent],
  styles: ["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 200px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    \r\n    height: 8px;\r\n    background: transparent;\r\n    \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    \r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n    height: 230px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    margin-left: 440px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZW1hcC11c2VyLWhoL3JlbWFwLXVzZXItaGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB0Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCwgdGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIE9wdGlvbmFsOiBzaG93IHBvc2l0aW9uIGluZGljYXRvciBpbiBjb2xvdXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ0MHB4O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 23109:
/*!***************************************************************!*\
  !*** ./src/app/modules/remap-user-hh/remap-user-hh.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserHhModule": () => (/* binding */ RemapUserHhModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _remap_user_hh_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remap-user-hh-routing.module */ 88038);
/* harmony import */ var _remap_user_hh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remap-user-hh.component */ 43476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class RemapUserHhModule {}
RemapUserHhModule.ɵfac = function RemapUserHhModule_Factory(t) {
  return new (t || RemapUserHhModule)();
};
RemapUserHhModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RemapUserHhModule
});
RemapUserHhModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _remap_user_hh_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemapUserHhRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RemapUserHhModule, {
    declarations: [_remap_user_hh_component__WEBPACK_IMPORTED_MODULE_1__.RemapUserHhComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _remap_user_hh_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemapUserHhRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
  });
})();

/***/ }),

/***/ 69595:
/*!****************************************************************!*\
  !*** ./src/app/modules/remap-user-hh/remap-user-hh.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemapUserHhService": () => (/* binding */ RemapUserHhService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class RemapUserHhService {
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
  viewUsersMappedHHDetails(obj) {
    return this.http.post(`${this.baseURL}remap/viewUsersMappedHhAndSsDetails`, obj);
  }
  getActiveSsListOfAnUser(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getActiveSsListOfAnUser`, obj);
  }
  remapUserHH(obj) {
    return this.http.post(`${this.baseURL}remap/unmapAndRemapUserFromOneOrMoreHouseholds`, obj);
  }
}
RemapUserHhService.ɵfac = function RemapUserHhService_Factory(t) {
  return new (t || RemapUserHhService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RemapUserHhService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RemapUserHhService,
  factory: RemapUserHhService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_remap-user-hh_remap-user-hh_module_ts.js.map