"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_pem-register_pem-register_module_ts"],{

/***/ 47299:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register-create/pem-register-create.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PemRegisterCreateComponent": () => (/* binding */ PemRegisterCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _pem_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pem-register.service */ 99012);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);














function PemRegisterCreateComponent_form_15_div_1_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r20.regionName, " ");
  }
}
function PemRegisterCreateComponent_form_15_div_1_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_form_15_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_div_10_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.l.region.errors.required);
  }
}
function PemRegisterCreateComponent_form_15_div_1_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r22.branchName, " ");
  }
}
function PemRegisterCreateComponent_form_15_div_1_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_form_15_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_div_20_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function PemRegisterCreateComponent_form_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_div_1_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PemRegisterCreateComponent_form_15_div_1_option_9_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PemRegisterCreateComponent_form_15_div_1_div_10_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 32)(12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_div_1_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PemRegisterCreateComponent_form_15_div_1_option_19_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PemRegisterCreateComponent_form_15_div_1_div_20_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r9.l.region.invalid && ctx_r9.l.region.touched, ctx_r9.l.region.valid && (ctx_r9.l.region.dirty || ctx_r9.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx_r9.l.branch.invalid && ctx_r9.l.branch.touched, ctx_r9.l.branch.valid && (ctx_r9.l.branch.dirty || ctx_r9.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.l.branch.errors);
  }
}
function PemRegisterCreateComponent_form_15_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", block_r27.blockName, " ");
  }
}
function PemRegisterCreateComponent_form_15_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_form_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_12_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.l.block.errors.required);
  }
}
function PemRegisterCreateComponent_form_15_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", gp_r29.name, " ");
  }
}
function PemRegisterCreateComponent_form_15_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_form_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_22_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.l.gp.errors.required);
  }
}
function PemRegisterCreateComponent_form_15_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", vill_r31.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vill_r31.villageName, " ");
  }
}
function PemRegisterCreateComponent_form_15_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_form_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_32_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.l.gram.errors.required);
  }
}
function PemRegisterCreateComponent_form_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_form_15_div_1_Template, 21, 12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1)(3, "div", 32)(4, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PemRegisterCreateComponent_form_15_option_11_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PemRegisterCreateComponent_form_15_div_12_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 32)(14, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.changeGp($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "-- Select GP/ Municipality --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PemRegisterCreateComponent_form_15_option_21_Template, 2, 1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PemRegisterCreateComponent_form_15_div_22_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 32)(24, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Village/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_form_15_Template_select_change_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.changeVillage($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, PemRegisterCreateComponent_form_15_option_31_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, PemRegisterCreateComponent_form_15_div_32_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.regionBranchHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](11, _c0, ctx_r0.l.block.invalid && ctx_r0.l.block.touched, ctx_r0.l.block.valid && (ctx_r0.l.block.dirty || ctx_r0.l.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, ctx_r0.l.gp.invalid && ctx_r0.l.gp.touched, ctx_r0.l.gp.valid && (ctx_r0.l.gp.dirty || ctx_r0.l.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.gpDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](17, _c0, ctx_r0.l.gram.invalid && ctx_r0.l.gram.touched, ctx_r0.l.gram.valid && (ctx_r0.l.gram.dirty || ctx_r0.l.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.villageDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.l.gram.errors);
  }
}
function PemRegisterCreateComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add PEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_tr_46_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23)(1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_tr_46_td_17_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const pem_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.addPemModal(_r5, pem_r37.childId, pem_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PemRegisterCreateComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_tr_46_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const pem_r37 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.openModal(_r3, pem_r37.childId, pem_r37.childAge, pem_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PemRegisterCreateComponent_tr_46_td_17_Template, 2, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pem_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r2.p - 1) * 5 + i_r38 + 1 ? (ctx_r2.p - 1) * 5 + i_r38 + 1 : i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](pem_r37.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", pem_r37.firstName, " ", pem_r37.middleName, " ", pem_r37.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", pem_r37.husbandOrGuardianName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](pem_r37.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](pem_r37.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](pem_r37.latestMuacIndicatorName == "RED" ? "danger" : pem_r37.latestMuacIndicatorName == "GREEN" ? "success" : pem_r37.latestMuacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.createMode);
  }
}
function PemRegisterCreateComponent_ng_template_50_th_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r48 = ctx_r53.$implicit;
      const i_r49 = ctx_r53.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](55);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.editPEMData(item_r48, i_r49, _r7, item_r48.pemCounsellingDataMasterId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r48 = ctx_r56.$implicit;
      const i_r49 = ctx_r56.index;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r55.deletePEMData(item_r48, i_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_50_tr_116_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PemRegisterCreateComponent_ng_template_50_tr_116_i_18_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PemRegisterCreateComponent_ng_template_50_tr_116_i_19_Template, 1, 0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r49 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.pemDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.muacData.muac);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.muacData.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.muacData.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.experiencedDiarrhea);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.supplementaryFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r48.visitingHcareCenter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r47.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r47.deleteMode);
  }
}
function PemRegisterCreateComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 56)(6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_50_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 1)(11, "div", 59)(12, "div", 1)(13, "div", 60)(14, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 60)(17, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 59)(20, "div", 1)(21, "div", 60)(22, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Birth weight of child (In kg): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 60)(25, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 1)(28, "div", 59)(29, "div", 1)(30, "div", 60)(31, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 60)(34, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 59)(37, "div", 1)(38, "div", 60)(39, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Primary immunization completed after 24 months:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 60)(42, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 1)(45, "div", 59)(46, "div", 1)(47, "div", 60)(48, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 60)(51, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 59)(54, "div", 1)(55, "div", 60)(56, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Exclusive breastfeeding followed or not (upto first 12 month):");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 60)(59, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 1)(62, "div", 59)(63, "div", 1)(64, "div", 60)(65, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 18 month):");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 60)(68, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 59)(71, "div", 1)(72, "div", 60)(73, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 60)(76, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 63)(79, "table", 64)(80, "thead")(81, "tr")(82, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Data of");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Record Keeping");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Muac ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, " (In cm)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Height ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, " (In cm)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, " (In kg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Experienced ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Diarrhea");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Supplementary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, " Food Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Visiting Health ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Care center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, PemRegisterCreateComponent_ng_template_50_th_114_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "tbody", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_50_tr_116_Template, 20, 10, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.placeOfDelivery) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.placeOfDelivery : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.birthWeight) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.birthWeight : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto12Completed) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto12Completed : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto24Completed) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.primaryImmunizationUpto24Completed : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto6Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto6Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto12Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto12Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto18Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto18Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto24Complete) ? ctx_r4.childDTO == null ? null : ctx_r4.childDTO.ebfUpto24Complete : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.updateMode || ctx_r4.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.pemRegisterEntry);
  }
}
function PemRegisterCreateComponent_ng_template_52_div_109_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date of record keeping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_52_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_109_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r61.f.pemDate.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_52_div_116_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Height is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_52_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_116_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r62.f.height.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_52_div_123_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Weight is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_52_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_123_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r63.f.weight.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_52_div_130_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " MUAC is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_52_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_52_div_130_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r64.f.muac.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Create PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 56)(6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 70)(9, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1)(12, "div", 71)(13, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 73)(16, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.delivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.delivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 71)(25, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Birth weight of child (In kg):");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.birthWeightVal());
    })("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.validationService.onlyIntegerAndDecimal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 71)(29, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 73)(32, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.immunization12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.immunization12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 71)(41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Primary immunization completed after 24 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 73)(44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r77.immunization24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.immunization24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 71)(53, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 73)(56, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.breastfeeding6($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r80.breastfeeding6($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 71)(65, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 12 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 73)(68, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.breastfeeding12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.breastfeeding12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 71)(77, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Exclusive breastfeeding followed or not (upto first 18 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 73)(80, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r83.breastfeeding18($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.breastfeeding18($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 71)(89, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 73)(92, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.breastfeeding24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r86.breastfeeding24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 1)(103, "div", 71)(104, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Date of record keeping: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function PemRegisterCreateComponent_ng_template_52_Template_input_keydown_108_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r87.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, PemRegisterCreateComponent_ng_template_52_div_109_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 71)(111, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "Height (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_115_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r88.validationService.onlyIntegerAndDecimal($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_115_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.heightKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_52_div_116_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 71)(118, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Weight (In kg): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_122_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r90.validationService.onlyIntegerAndDecimal($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_122_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.weightKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](123, PemRegisterCreateComponent_ng_template_52_div_123_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 71)(125, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "MUAC (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_129_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r92.muacVal());
    })("keypress", function PemRegisterCreateComponent_ng_template_52_Template_input_keypress_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.validationService.onlyIntegerAndDecimal($event));
    })("keydown", function PemRegisterCreateComponent_ng_template_52_Template_input_keydown_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r94.restrictZero($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_52_Template_input_keyup_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r95.muacKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](130, PemRegisterCreateComponent_ng_template_52_div_130_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 71)(134, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "Whether experienced Diarrhea: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 73)(139, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_139_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r96.diarrhe($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_144_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r97.diarrhe($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 71)(148, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "Supplementary food provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](150, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, " or not: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](153, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "div", 73)(155, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_155_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r98.supplementar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.supplementar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 71)(164, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Whether visiting the health care centre: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](167, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "div", 73)(169, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_169_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r100.healthCare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_52_Template_input_change_174_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r101.healthCare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 123)(178, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_button_click_178_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.savePEMRegisterEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](179, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_52_Template_button_click_181_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r103.resetPEMRegisterEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](182, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r6.pemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.immunization12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.immunization12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, ctx_r6.f.pemDate.invalid && ctx_r6.f.pemDate.touched, ctx_r6.f.pemDate.valid && (ctx_r6.f.pemDate.dirty || ctx_r6.f.pemDate.touched)))("min", ctx_r6.childDob)("max", ctx_r6.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.pemDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](17, _c0, ctx_r6.f.height.invalid && ctx_r6.f.height.touched, ctx_r6.f.height.valid && (ctx_r6.f.height.dirty || ctx_r6.f.height.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.height.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](20, _c0, ctx_r6.f.weight.invalid && ctx_r6.f.weight.touched, ctx_r6.f.weight.valid && (ctx_r6.f.weight.dirty || ctx_r6.f.weight.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.weight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](23, _c0, ctx_r6.f.muac.invalid && ctx_r6.f.muac.touched, ctx_r6.f.muac.valid && (ctx_r6.f.muac.dirty || ctx_r6.f.muac.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.muac.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Last Muac Recorded: ", ctx_r6.latestMuac, "");
  }
}
function PemRegisterCreateComponent_ng_template_54_div_109_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date of record keeping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_54_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_109_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r105.e.pemDate.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_54_div_116_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Height is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_54_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_116_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r106.e.height.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_54_div_123_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " weight is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_54_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_123_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r107.e.weight.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_54_div_130_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " MUAC is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PemRegisterCreateComponent_ng_template_54_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PemRegisterCreateComponent_ng_template_54_div_130_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r108.e.muac.errors.required);
  }
}
function PemRegisterCreateComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Edit PEM Counselling Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 56)(6, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r113.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 70)(9, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1)(12, "div", 71)(13, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Place of delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 73)(16, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r115.delivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r116.delivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 71)(25, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Birth weight of child (In kg):");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r117.validationService.onlyIntegerAndDecimal($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r118.birthWeightVal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 71)(29, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Primary immunization completed after 12 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 73)(32, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r119.immunization12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r120.immunization12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 71)(41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Primary immunization completed after 24 months: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 73)(44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r121.immunization24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r122.immunization24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 71)(53, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Exclusive breastfeeding followed or not (at least for first 6 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 73)(56, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r123.breastfeeding6($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r124.breastfeeding6($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 71)(65, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Exclusive breastfeeding followed or not (upto first 12 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 73)(68, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r125.breastfeeding12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r126.breastfeeding12($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 71)(77, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Exclusive breastfeeding followed or not (upto first 18 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 73)(80, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r127.breastfeeding18($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r128.breastfeeding18($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 71)(89, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Exclusive breastfeeding followed or not (upto first 24 month): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 73)(92, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r129.breastfeeding24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_97_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r130.breastfeeding24($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "fieldset", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "legend", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 1)(103, "div", 71)(104, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Date of record keeping: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function PemRegisterCreateComponent_ng_template_54_Template_input_keydown_108_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r131.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, PemRegisterCreateComponent_ng_template_54_div_109_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 71)(111, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "Height (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_115_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r132.validationService.onlyIntegerAndDecimal($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_115_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r133.heightKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, PemRegisterCreateComponent_ng_template_54_div_116_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 71)(118, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Weight (In kg): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_122_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r134.validationService.onlyIntegerAndDecimal($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_122_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r135.weightKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](123, PemRegisterCreateComponent_ng_template_54_div_123_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 71)(125, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "MUAC (In cm): \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_129_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r136.muacVal());
    })("keypress", function PemRegisterCreateComponent_ng_template_54_Template_input_keypress_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r137.validationService.onlyIntegerAndDecimal($event));
    })("keydown", function PemRegisterCreateComponent_ng_template_54_Template_input_keydown_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r138.restrictZero($event));
    })("keyup", function PemRegisterCreateComponent_ng_template_54_Template_input_keyup_129_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r139.muacKeyup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](130, PemRegisterCreateComponent_ng_template_54_div_130_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 71)(132, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Whether experienced Diarrhea: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 73)(137, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_137_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r140.diarrhe($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_142_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r141.diarrhe($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 71)(146, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "Supplementary food provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](148, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, " or not: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 73)(153, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_153_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r142.supplementar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_158_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r143.supplementar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 71)(162, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "Whether visiting the health care centre: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 73)(167, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_167_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r144.healthCare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PemRegisterCreateComponent_ng_template_54_Template_input_change_172_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r145.healthCare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 123)(176, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_button_click_176_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r146.saveEditPEMRegisterEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](177, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PemRegisterCreateComponent_ng_template_54_Template_button_click_179_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r114);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r147.resetEditPEMRegisterEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](180, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r8.editPemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](11, _c0, ctx_r8.e.pemDate.invalid && ctx_r8.e.pemDate.touched, ctx_r8.e.pemDate.valid && (ctx_r8.e.pemDate.dirty || ctx_r8.e.pemDate.touched)))("min", ctx_r8.childDob)("max", ctx_r8.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.e.pemDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, ctx_r8.e.height.invalid && ctx_r8.e.height.touched, ctx_r8.e.height.valid && (ctx_r8.e.height.dirty || ctx_r8.e.height.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.e.height.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](17, _c0, ctx_r8.e.weight.invalid && ctx_r8.e.weight.touched, ctx_r8.e.weight.valid && (ctx_r8.e.weight.dirty || ctx_r8.e.weight.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.e.weight.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](20, _c0, ctx_r8.e.muac.invalid && ctx_r8.e.muac.touched, ctx_r8.e.muac.valid && (ctx_r8.e.muac.dirty || ctx_r8.e.muac.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.e.muac.errors);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class PemRegisterCreateComponent {
  constructor(fb, pemService, http, modalService, toaster, httpService, validationService, sidebarService, config, activatedRoute, router) {
    this.fb = fb;
    this.pemService = pemService;
    this.http = http;
    this.modalService = modalService;
    this.toaster = toaster;
    this.httpService = httpService;
    this.validationService = validationService;
    this.sidebarService = sidebarService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loader = false;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
    this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.setStatus = params['status'];
      this.familyID = params['familyID'];
      this.regionID = params['regionID'];
      this.branchID = params['branchID'];
      this.blockID = params['blockID'];
      this.gpID = params['gpID'];
      this.villageID = params['villageID'];
      console.log(params, 'params');
      console.log(this.familyID, 'familyID');
      console.log(this.regionID, ' this.regionID');
      console.log(this.branchID, ' this.branchID');
      console.log(this.blockID, ' this.blockID ');
      console.log(this.gpID, 'this.gpID');
      console.log(this.villageID, ' this.villageID ');
    });
    let JSONDatas = {
      regionID: this.regionID,
      branchID: this.branchID,
      blockID: this.blockID,
      gpID: this.gpID,
      villageID: this.villageID
    };
    localStorage.setItem("datas", JSON.stringify(JSONDatas));
    if (this.setStatus == 'viewCentralPEM') {
      this.viewPEMList();
    } else {
      this.locForm();
      this.createForm(this.pemDataSave);
      this.sidebarService.checkRoledetailDTO().then(res => {
        if (res.regionBranchHide) {
          this.regionList = res.region;
          this.regionBranchHide = res.regionBranchHide;
        } else {
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
      this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/pem-register/create']) : this.router.navigate(['/error']);
    }
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    console.log(this.createMode);
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 113 || item.subFunctionMasterId == 114 || item.subFunctionMasterId == 115 || item.subFunctionMasterId == 116)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);
  }
  changeRegion(region) {
    let regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.loader = false;
    setTimeout(() => {
      this.pemService.listOfBranchesOfARegion(req).subscribe(res => {
        this.loader = true;
        this.branchList = res?.responseObject;
      }, error => {
        this.loader = true;
        this.branchList = null;
      });
    }, 500);
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }
  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    };
    this.loader = false;
    setTimeout(() => {
      this.pemService.villagesOfBranch(Dto).subscribe(res => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch2');
      });
    }, 500);
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
    }
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    console.log(this.villageDtoList);
    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
      this.villageDtoList = [];
    }
  }
  changeVillage(villageid) {
    this.villageid = villageid;
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageid)?.branchVillageMapId;
    console.log(this.branchVillageMapId, 'this.branchVillageMapId');
    console.log(this.villageid, 'villageid');
    this.viewPEMList();
    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.pemDetails = [];
    }
  }
  locForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  createForm(pemDataSave) {
    var item = pemDataSave;
    this.latestMuac = this.pemDataSave?.latestMuacValue;
    this.firstVisitDate = item?.childBasicStatusDto?.firstVisitDate;
    this.secondVisitDate = item?.childBasicStatusDto?.secondVisitDate;
    this.pemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : ''],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : ''],
      height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.heightRange])],
      weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.weightRange])],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      muac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.muacRange])],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.latestPemCounsellingExperiencedDiarrhea ? item?.latestPemCounsellingExperiencedDiarrhea : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      supplementary: [item?.latestPemCounsellingSupplementaryFood ? item?.latestPemCounsellingSupplementaryFood : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      healthcare: [item?.latestPemCounsellingVisitingHealthCenter ? item?.latestPemCounsellingVisitingHealthCenter : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get f() {
    return this.pemForm.controls;
  }
  get e() {
    return this.editPemForm.controls;
  }
  get l() {
    return this.locationForm.controls;
  }
  showSuccess(message) {
    this.toaster.success(message, 'Pem Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Pem Register', {
      timeOut: 3000
    });
  }
  p(event) {}
  openModal(pemData, childId, childAge, pemDetails) {
    console.log(pemDetails);
    this.childDob = pemDetails.dob;
    this.childAge = childAge;
    this.viewPEMRegisterEntry(childId, pemDetails);
    this.modalContent = '';
    this.modalReference = this.modalService.open(pemData, {
      windowClass: 'pemData'
    });
  }
  addPemModal(addPem, childId, pem) {
    this.checkAge = pem.childAge;
    console.log(pem, 'pemxxxxxxx');
    this.childDob = pem.dob;
    this.pemDataSave = pem;
    this.createForm(this.pemDataSave);
    console.log(this.pemDataSave);
    this.childrenId = childId;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addPem, {
      windowClass: 'pemData'
    });
    let y = this.checkAge?.indexOf("year");
    let year = parseInt(this.checkAge?.slice(0, y - 1));
    let m = this.checkAge?.indexOf("r");
    let m1 = this.checkAge?.indexOf("month");
    let month = parseInt(this.checkAge?.slice(m + 2, m1 - 1));
    if (year == 0 && month >= 6) {
      this.pemForm.controls['immunization12'].disable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].disable();
      this.pemForm.controls['breastfeeding18'].disable();
      this.pemForm.controls['breastfeeding24'].disable();
    }
    if (year == 1 && month < 6) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].disable();
      this.pemForm.controls['breastfeeding24'].disable();
    }
    if (year >= 1 && month >= 6) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].disable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].enable();
      this.pemForm.controls['breastfeeding24'].disable();
    }
    if (year >= 2 && month >= 0) {
      this.pemForm.controls['immunization12'].enable();
      this.pemForm.controls['immunization24'].enable();
      this.pemForm.controls['breastfeeding6'].enable();
      this.pemForm.controls['breastfeeding12'].enable();
      this.pemForm.controls['breastfeeding18'].enable();
      this.pemForm.controls['breastfeeding24'].enable();
    }
  }
  modalDismiss() {
    this.modalReference?.close();
  }
  delivery(e) {
    this.institutionalDelivery = e.target.value;
    console.log(this.institutionalDelivery);
  }
  immunization12(e) {
    this.immunizationDelivery12 = e.target.value;
    console.log(this.immunizationDelivery12);
  }
  immunization24(e) {
    this.immunizationDelivery24 = e.target.value;
    console.log(this.immunizationDelivery24);
  }
  breastfeeding6(e) {
    this.breastFeeding6 = e.target.value;
  }
  breastfeeding12(e) {
    this.breastFeeding12 = e.target.value;
  }
  breastfeeding18(e) {
    this.breastFeeding18 = e.target.value;
  }
  breastfeeding24(e) {
    this.breastFeeding24 = e.target.value;
  }
  diarrhe(e) {
    this.diarrhea = e.target.value;
  }
  supplementar(e) {
    this.supplementary = e.target.value;
  }
  healthCare(e) {
    this.healthcare = e.target.value;
  }
  restrictTypeOfDate() {
    return false;
  }
  viewPEMList() {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: this.villageID ? this.villageID : this.villageid
    };
    this.pemService.viewPemList(obj).subscribe(res => {
      this.pemDetails = res.responseObject;
      console.log(this.pemDetails);
      if (this.setStatus == 'viewCentralPEM') {
        var setData = this.pemDetails.filter(fam => fam.familyDetailId == this.familyID);
        console.log(setData);
        this.pemDetails = setData;
      }
    });
  }
  viewPEMRegisterEntry(childId, pemDetails) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: childId
    };
    this.pemService.viewPemRegisterEntry(obj).subscribe(res => {
      this.pemRegisterEntry = res.responseObject;
      this.childDTO = pemDetails.childBasicStatusDto;
      console.log(this.pemRegisterEntry);
      console.log(this.childDTO);
    });
  }
  resetPEMRegisterEntry() {
    this.createForm(this.pemDataSave);
  }
  savePEMRegisterEntry() {
    let item = this.pemForm.value;
    if (item.pemDate == '') {
      this.showError('Please select date of record keeping');
      return;
    }
    if (item.height == '') {
      this.showError('Please enter height');
      return;
    }
    if (this.pemForm.value.height < 10 || this.pemForm.value.height > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }
    if (item.weight == '') {
      this.showError('Please enter weight');
      return;
    }
    if (this.pemForm.value.weight > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }
    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }
    if (this.pemForm.value.muac > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }
    if (this.pemForm.value.birthweight > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }
    if (item.diarrhea == '') {
      this.showError('Please select experienced Diarrhea or not');
      return;
    }
    if (item.supplementary == '') {
      this.showError('Please select Supplementary food provided or not');
      return;
    }
    if (item.healthcare == '') {
      this.showError('Please select visiting the health care centre or not');
      return;
    }
    this.heightVal();
    this.weightVal();
    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: 0,
        muacCampId: null,
        childId: this.childrenId,
        height: item.height ? Math.trunc(item.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        weight: item.weight ? Math.trunc(item.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
        muac: Math.trunc(item.muac * Math.pow(10, 1)) / Math.pow(10, 1),
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: 0,
        experiencedDiarrhea: item.diarrhea,
        supplementaryFoodProvided: item.supplementary,
        visitingHealthCareCenter: item.healthcare,
        active_flag: "A",
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery ? item.delivery : null,
        birthWeight: item.birthweight ? item.birthweight : null,
        firstVisitDate: this.firstVisitDate,
        secondVisitDate: this.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
        primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
        ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
        ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
        primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
        ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
      }
    };
    console.log(pemBody);
    this.pemService.savePemRegister(pemBody).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeVillage(this.villageid);
      } else {
        this.showError(res.message);
      }
    });
  }
  editPEMData(item, i, editPem, pemCounsellingDataMasterId) {
    var checkAge = this.childAge;
    this.modalDismiss();
    this.modalContent = '';
    this.modalReference = this.modalService.open(editPem, {
      windowClass: 'pemData'
    });
    this.EditForm(item);
    checkAge = this.childAge;
    console.log(item, '***', editPem);
    let y = checkAge?.indexOf("year");
    let year = parseInt(checkAge?.slice(0, y - 1));
    let m = checkAge?.indexOf("r");
    let m1 = checkAge?.indexOf("month");
    let month = parseInt(checkAge?.slice(m + 2, m1 - 1));
    if (year == 0 && month >= 6) {
      this.editPemForm.controls['immunization12'].disable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].disable();
      this.editPemForm.controls['breastfeeding18'].disable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }
    if (year == 1 && month < 6) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].disable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }
    if (year >= 1 && month >= 6) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].disable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].enable();
      this.editPemForm.controls['breastfeeding24'].disable();
    }
    if (year >= 2 && month >= 0) {
      this.editPemForm.controls['immunization12'].enable();
      this.editPemForm.controls['immunization24'].enable();
      this.editPemForm.controls['breastfeeding6'].enable();
      this.editPemForm.controls['breastfeeding12'].enable();
      this.editPemForm.controls['breastfeeding18'].enable();
      this.editPemForm.controls['breastfeeding24'].enable();
    }
  }
  EditForm(item) {
    this.saveEditFormData = item;
    this.editPemForm = this.fb.group({
      delivery: [item?.childBasicStatusDto?.placeOfDelivery ? item?.childBasicStatusDto?.placeOfDelivery : null],
      birthweight: [item?.childBasicStatusDto?.birthWeight ? item?.childBasicStatusDto?.birthWeight : null],
      height: [item?.muacData?.height ? item?.muacData?.height : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.heightRange])],
      weight: [item?.muacData?.weight ? item?.muacData?.weight : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.weightRange])],
      breastfeeding6: [item?.childBasicStatusDto?.ebfUpto6Complete ? item?.childBasicStatusDto?.ebfUpto6Complete : ''],
      breastfeeding12: [item?.childBasicStatusDto?.ebfUpto12Complete ? item?.childBasicStatusDto?.ebfUpto12Complete : ''],
      breastfeeding18: [item?.childBasicStatusDto?.ebfUpto18Complete ? item?.childBasicStatusDto?.ebfUpto18Complete : ''],
      breastfeeding24: [item?.childBasicStatusDto?.ebfUpto24Complete ? item?.childBasicStatusDto?.ebfUpto24Complete : ''],
      pemDate: [item?.pemDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      muac: [item?.muacData?.muac ? item?.muacData?.muac : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.muacRange])],
      immunization12: [item?.childBasicStatusDto?.primaryImmunizationUpto12Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto12Completed : ''],
      immunization24: [item?.childBasicStatusDto?.primaryImmunizationUpto24Completed ? item?.childBasicStatusDto?.primaryImmunizationUpto24Completed : ''],
      diarrhea: [item?.experiencedDiarrhea ? item?.experiencedDiarrhea : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      supplementary: [item?.supplementaryFood ? item?.supplementaryFood : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      healthcare: [item?.visitingHcareCenter ? item?.visitingHcareCenter : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.editPemForm.markAllAsTouched();
  }
  saveEditPEMRegisterEntry() {
    var item = this.editPemForm.value;
    console.log(this.saveEditFormData);
    var set = this.saveEditFormData;
    if (item.pemDate == '') {
      this.showError('Please select date of record keeping');
      return;
    }
    if (item.height == '') {
      this.showError('Please enter height');
      return;
    }
    if (parseInt(this.editPemForm.value.height) < 10 || parseInt(this.editPemForm.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }
    if (item.weight == '') {
      this.showError('Please enter weight');
      return;
    }
    if (this.editPemForm.value.weight > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }
    if (item.muac == '') {
      this.showError('Please enter muac value');
      return;
    }
    if (this.editPemForm.value.muac > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }
    if (this.editPemForm.value.birthweight > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }
    if (this.editPemForm.value.diarrhea == '') {
      this.showError('Please select experienced Diarrhea or not');
      return;
    }
    if (this.editPemForm.value.supplementary == '') {
      this.showError('Please select Supplementary food provided or not');
      return;
    }
    if (this.editPemForm.value.healthcare == '') {
      this.showError('Please select visiting the health care centre or not');
      return;
    }
    this.heightVal();
    this.weightVal();
    let pemBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: set.muacData.muacRegisterId,
        muacCampId: set.muacData.muacCampId,
        childId: set.childId,
        height: item.height ? Math.trunc(item.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        weight: item.weight ? Math.trunc(item.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
        muac: item.muac ? Math.trunc(item.muac * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
        active_flag: 'A'
      },
      pemCounsellingDataDto: {
        pemCounsellingDataMasterId: set.pemCounsellingDataMasterId,
        experiencedDiarrhea: item.diarrhea ? item.diarrhea : '',
        supplementaryFoodProvided: item.supplementary ? item.supplementary : '',
        visitingHealthCareCenter: item.healthcare ? item.healthcare : '',
        active_flag: 'A',
        pemDate: item.pemDate
      },
      childBasicStatusDto: {
        placeOfDelivery: item.delivery ? item.delivery : null,
        birthWeight: item.birthweight ? item.birthweight : null,
        firstVisitDate: set.childBasicStatusDto.firstVisitDate,
        secondVisitDate: set.childBasicStatusDto.secondVisitDate,
        ebfUpto6Complete: item.breastfeeding6 ? item.breastfeeding6 : null,
        primaryImmunizationUpto12Completed: item.immunization12 ? item.immunization12 : null,
        ebfUpto12Complete: item.breastfeeding12 ? item.breastfeeding12 : null,
        ebfUpto18Complete: item.breastfeeding18 ? item.breastfeeding18 : null,
        primaryImmunizationUpto24Completed: item.immunization24 ? item.immunization24 : null,
        ebfUpto24Complete: item.breastfeeding24 ? item.breastfeeding24 : null
      }
    };
    console.log(pemBody);
    this.pemService.savePemRegister(pemBody).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeVillage(this.villageid);
      } else {
        this.showError(res.message);
      }
    });
  }
  /* MUAC range between 1 to 30, validation */
  muacRange(controls) {
    if (controls.value >= 1 && controls.value <= 30) {
      return null;
    }
    return {
      'notInMuacRange': true
    };
  }
  /* weight range between 0 to 25, validation */
  weightRange(controls) {
    if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return {
      'notInWeightRange': true
    };
  }
  /* Birth Weight range between 0 to 9, validation */
  birthWeightRange(controls) {
    if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
      return null;
    }
    return {
      'notInBirthWeightRange': true
    };
  }
  /* Height range between 10 to 180, validation */
  heightRange(controls) {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null || controls.value == '') {
      return null;
    }
    return {
      'notInHeightRange': true
    };
  }
  deletePEMData(item, i) {
    console.log(item);
    if (confirm('Do you want to delete PEMData: ')) {
      let pemBody = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: item.muacData.muacRegisterId,
          muacCampId: item.muacData.muacCampId,
          childId: item.childId,
          height: item.muacData.height,
          weight: item.muacData.weight,
          muac: item.muacData.muac,
          active_flag: 'D'
        },
        pemCounsellingDataDto: {
          pemCounsellingDataMasterId: item.pemCounsellingDataMasterId,
          experiencedDiarrhea: item.experiencedDiarrhea,
          supplementaryFoodProvided: item.supplementaryFood,
          visitingHealthCareCenter: item.visitingHcareCenter,
          active_flag: 'D',
          pemDate: item.pemDate
        },
        childBasicStatusDto: {
          placeOfDelivery: item.childBasicStatusDto.placeOfDelivery,
          birthWeight: item.childBasicStatusDto.birthWeight,
          firstVisitDate: item.childBasicStatusDto.firstVisitDate,
          secondVisitDate: item.childBasicStatusDto.secondVisitDate,
          ebfUpto6Complete: item.childBasicStatusDto.ebfUpto6Complete,
          primaryImmunizationUpto12Completed: item.childBasicStatusDto.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: item.childBasicStatusDto.ebfUpto12Complete,
          ebfUpto18Complete: item.childBasicStatusDto.ebfUpto18Complete,
          primaryImmunizationUpto24Completed: item.childBasicStatusDto.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: item.childBasicStatusDto.ebfUpto24Complete
        }
      };
      console.log(pemBody);
      this.pemService.savePemRegister(pemBody).subscribe(res => {
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.pemRegisterEntry.splice(i, 1);
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  restrictZero(event) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }
  heightVal() {
    console.log(this.pemForm.value.height);
    if (parseInt(this.pemForm.value.height) < 10 || parseInt(this.pemForm.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }
    if (parseInt(this.editPemForm?.value.height) < 10 || parseInt(this.editPemForm?.value.height) > 180) {
      this.showError('Height should be between 10cm to 180cm');
      return;
    }
  }
  weightVal() {
    if (parseInt(this.pemForm.value.weight) > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }
    if (parseInt(this.editPemForm?.value.weight) > 25) {
      this.showError('Weight should be under 25kg');
      return;
    }
  }
  muacVal() {
    if (parseInt(this.pemForm.value.muac) > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }
    if (parseInt(this.editPemForm?.value.muac) > 30) {
      this.showError('Muac should be under 30cm');
      return;
    }
  }
  birthWeightVal() {
    if (parseInt(this.pemForm.value.birthweight) > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }
    if (parseInt(this.editPemForm?.value.birthweight) > 9) {
      this.showError('Birth weight should not be more than 9 kg');
      return;
    }
  }
  heightKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2) : t;
    console.log(t);
  }
  weightKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4) : t;
    console.log(t);
  }
  muacKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2) : t;
    console.log(t);
  }
}
PemRegisterCreateComponent.ɵfac = function PemRegisterCreateComponent_Factory(t) {
  return new (t || PemRegisterCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_pem_register_service__WEBPACK_IMPORTED_MODULE_0__.PemRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
PemRegisterCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PemRegisterCreateComponent,
  selectors: [["app-pem-register-create"]],
  decls: 56,
  vars: 13,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search pem info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-signin", 3, "formGroup", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "8%"], [2, "width", "15%"], [2, "width", "20%"], [2, "width", "10%"], ["style", "width: 10%;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["pemData", ""], ["addPem", ""], ["editPem", ""], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "fa", "fa-circle", "fa-lg"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", "padding", "0px", "width", "10%", 3, "click"], ["title", "Create PEM", 1, "fa", "fa-plus", 3, "click"], [1, "modal-content"], [1, "modal-header", 2, "height", "80px"], [1, "white_box", "QA_section", "mb_30", 2, "height", "100px"], [1, "col-md"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "scheduler-border"], [1, "col"], [1, "form-group", "col-md-6"], ["for", "", 2, "font-weight", "500", "font-size", "1rem"], ["for", ""], ["id", "table_wrapper", 2, "margin", "5px"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], [2, "text-align", "center"], ["class", "fas fa-edit", "title", "Edit PEM", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete PEM", 3, "click", 4, "ngIf"], ["title", "Edit PEM", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete PEM", 1, "fas", "fa-trash", 3, "click"], ["id", "pem", 1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-3"], ["for", "delivery"], [1, "form-check-inline"], ["type", "radio", "name", "delivery", "id", "yes", "value", "Institution", "formControlName", "delivery", 1, "form-check-input", 3, "change"], ["for", "delivery", 1, "form-check-label"], ["type", "radio", "name", "delivery", "id", "no", "value", "Home", "formControlName", "delivery", 1, "form-check-input", 3, "change"], ["for", "birthweight"], ["type", "text", "maxlength", "5", "placeholder", "Birth Weight (In kg)", "formControlName", "birthweight", 1, "form-control", 3, "keyup", "keypress"], ["for", "immunization12"], ["type", "radio", "name", "immunization12", "id", "yes", "value", "Y", "formControlName", "immunization12", 1, "form-check-input", 3, "disabled", "change"], ["for", "immunization12", 1, "form-check-label"], ["type", "radio", "name", "immunization12", "id", "no", "value", "N", "formControlName", "immunization12", 1, "form-check-input", 3, "disabled", "change"], ["for", "immunization24"], ["type", "radio", "name", "immunization24", "id", "yes", "value", "Y", "formControlName", "immunization24", 1, "form-check-input", 3, "change"], ["for", "immunization24", 1, "form-check-label"], ["type", "radio", "name", "immunization24", "id", "no", "value", "N", "formControlName", "immunization24", 1, "form-check-input", 3, "change"], ["for", "breastfeeding6"], ["type", "radio", "name", "breastfeeding6", "id", "yes", "value", "Y", "formControlName", "breastfeeding6", 1, "form-check-input", 3, "change"], ["for", "breastfeeding6", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding6", "id", "No", "value", "N", "formControlName", "breastfeeding6", 1, "form-check-input", 3, "change"], ["for", "breastfeeding12"], ["type", "radio", "name", "breastfeeding12", "id", "yes", "value", "Y", "formControlName", "breastfeeding12", 1, "form-check-input", 3, "change"], ["for", "breastfeeding12", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding12", "id", "No", "value", "N", "formControlName", "breastfeeding12", 1, "form-check-input", 3, "change"], ["for", "breastfeeding18"], ["type", "radio", "name", "breastfeeding18", "id", "yes", "value", "Y", "formControlName", "breastfeeding18", 1, "form-check-input", 3, "change"], ["for", "breastfeeding18", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding18", "id", "No", "value", "N", "formControlName", "breastfeeding18", 1, "form-check-input", 3, "change"], ["for", "breastfeeding24"], ["type", "radio", "name", "breastfeeding24", "id", "yes", "value", "Y", "formControlName", "breastfeeding24", 1, "form-check-input", 3, "change"], ["for", "breastfeeding24", 1, "form-check-label"], ["type", "radio", "name", "breastfeeding24", "id", "No", "value", "N", "formControlName", "breastfeeding24", 1, "form-check-input", 3, "change"], ["for", "pemDate"], ["type", "date", "formControlName", "pemDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height"], ["type", "text", "maxlength", "5", "placeholder", "Height (In cm)", "formControlName", "height", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "weight"], ["type", "text", "maxlength", "7", "placeholder", "weight (In kg)", "formControlName", "weight", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "muac"], ["type", "text", "maxlength", "4", "placeholder", "Muac (In cm)", "formControlName", "muac", 1, "form-control", 3, "ngClass", "keyup", "keypress", "keydown"], ["for", "diarrhea"], ["type", "radio", "name", "diarrhea", "id", "yes", "value", "Y", "formControlName", "diarrhea", 1, "form-check-input", 3, "change"], ["for", "diarrhea", 1, "form-check-label"], ["type", "radio", "name", "diarrhea", "id", "No", "value", "N", "formControlName", "diarrhea", 1, "form-check-input", 3, "change"], ["for", "supplementary"], ["type", "radio", "name", "supplementary", "id", "yes", "value", "Y", "formControlName", "supplementary", 1, "form-check-input", 3, "change"], ["for", "supplementary", 1, "form-check-label"], ["type", "radio", "name", "supplementary", "id", "No", "value", "N", "formControlName", "supplementary", 1, "form-check-input", 3, "change"], ["for", "healthcare"], ["type", "radio", "name", "healthcare", "id", "yes", "value", "Y", "formControlName", "healthcare", 1, "form-check-input", 3, "change"], ["for", "healthcare", 1, "form-check-label"], ["type", "radio", "name", "healthcare", "id", "No", "value", "N", "formControlName", "healthcare", 1, "form-check-input", 3, "change"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], ["type", "text", "maxlength", "5", "placeholder", "Birth Weight (In kg)", "formControlName", "birthweight", 1, "form-control", 3, "keypress", "keyup"], ["type", "radio", "name", "immunization12", "id", "yes", "value", "Y", "formControlName", "immunization12", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "immunization12", "id", "no", "value", "N", "formControlName", "immunization12", 1, "form-check-input", 3, "change"]],
  template: function PemRegisterCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "View PEM Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "form", 9)(11, "div", 10)(12, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PemRegisterCreateComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PemRegisterCreateComponent_form_15_Template, 33, 20, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "table", 18)(20, "thead")(21, "tr")(22, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "SL");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Family No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Mother Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Child Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Age");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Current");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "PEM Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Data Entry");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, PemRegisterCreateComponent_th_44_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, PemRegisterCreateComponent_tr_46_Template, 18, 12, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "pagination-controls", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function PemRegisterCreateComponent_Template_pagination_controls_pageChange_49_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function PemRegisterCreateComponent_Template_pagination_controls_pageBoundsCorrection_49_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, PemRegisterCreateComponent_ng_template_50_Template, 117, 10, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, PemRegisterCreateComponent_ng_template_52_Template, 184, 26, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, PemRegisterCreateComponent_ng_template_54_Template, 182, 23, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.setStatus != "viewCentralPEM");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](47, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](48, 8, ctx.pemDetails, ctx.registerSearch), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c1, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n  height: 620px;\r\n  overflow-x: hidden;\r\n  width: 1140px;\r\n  margin-left: -320px;\r\n  margin-top: -4px;\r\n}\r\n\r\n#pem[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 120px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-plus[_ngcontent-%COMP%]:hover {\r\n  color: rgb(31, 218, 31) !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 0px groove #ddd !important;\r\n  background-color: #ddd;\r\n  width: 0px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 374px;\r\n  height: 63%;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 678px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 525px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 685px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  vertical-align: top;\r\n  border-top: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wZW0tcmVnaXN0ZXIvcGVtLXJlZ2lzdGVyLWNyZWF0ZS9wZW0tcmVnaXN0ZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjIwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4jcGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mYS1wbHVzOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDMxLCAyMTgsIDMxKSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDBweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgd2lkdGg6IDBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMzc0cHg7XHJcbiAgaGVpZ2h0OiA2MyU7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNjc4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNTI1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc0JTtcclxuICBtYXJnaW4tbGVmdDogNjg1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSAuZGFuZ2VyIHtcclxuICBjb2xvcjogI2NkMDIwMjtcclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC53YXJuaW5nIHtcclxuICBjb2xvcjogI2Y3Y2QwMDtcclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 96665:
/*!*********************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PemRegisterRoutingModule": () => (/* binding */ PemRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pem-register-create/pem-register-create.component */ 47299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: 'create',
  component: _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_0__.PemRegisterCreateComponent
}];
class PemRegisterRoutingModule {}
PemRegisterRoutingModule.ɵfac = function PemRegisterRoutingModule_Factory(t) {
  return new (t || PemRegisterRoutingModule)();
};
PemRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PemRegisterRoutingModule
});
PemRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PemRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 86515:
/*!*************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PemRegisterModule": () => (/* binding */ PemRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pem-register-routing.module */ 96665);
/* harmony import */ var _pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pem-register-create/pem-register-create.component */ 47299);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class PemRegisterModule {}
PemRegisterModule.ɵfac = function PemRegisterModule_Factory(t) {
  return new (t || PemRegisterModule)();
};
PemRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PemRegisterModule
});
PemRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.PemRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PemRegisterModule, {
    declarations: [_pem_register_create_pem_register_create_component__WEBPACK_IMPORTED_MODULE_1__.PemRegisterCreateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _pem_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.PemRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
  });
})();

/***/ }),

/***/ 99012:
/*!**************************************************************!*\
  !*** ./src/app/modules/pem-register/pem-register.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PemRegisterService": () => (/* binding */ PemRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class PemRegisterService {
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
  viewPemList(obj) {
    return this.http.post(`${this.baseURL}pem/view`, obj);
  }
  viewPemRegisterEntry(obj) {
    return this.http.post(`${this.baseURL}pem/viewAllPemCounsellingDataOfAChild`, obj);
  }
  savePemRegister(obj) {
    return this.http.post(`${this.baseURL}pem/saveCounsellingData`, obj);
  }
}
PemRegisterService.ɵfac = function PemRegisterService_Factory(t) {
  return new (t || PemRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
PemRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PemRegisterService,
  factory: PemRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_pem-register_pem-register_module_ts.js.map