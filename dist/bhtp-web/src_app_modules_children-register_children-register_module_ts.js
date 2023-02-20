"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_children-register_children-register_module_ts"],{

/***/ 66248:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/children-register/children-register-create/children-register-create.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenRegisterCreateComponent": () => (/* binding */ ChildrenRegisterCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _children_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../children-register.service */ 95761);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/search.pipe */ 99945);

















function ChildrenRegisterCreateComponent_div_13_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r20.regionName, " ");
  }
}
function ChildrenRegisterCreateComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_13_div_10_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.f.region.errors.required);
  }
}
function ChildrenRegisterCreateComponent_div_13_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", branch_r22.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r22.branchName, " ");
  }
}
function ChildrenRegisterCreateComponent_div_13_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_13_div_20_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r19.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function ChildrenRegisterCreateComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 10)(2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChildrenRegisterCreateComponent_div_13_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ChildrenRegisterCreateComponent_div_13_option_9_Template, 2, 1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ChildrenRegisterCreateComponent_div_13_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChildrenRegisterCreateComponent_div_13_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ChildrenRegisterCreateComponent_div_13_option_19_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ChildrenRegisterCreateComponent_div_13_div_20_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, ctx_r0.f.region.invalid && ctx_r0.f.region.touched, ctx_r0.f.region.valid && (ctx_r0.f.region.dirty || ctx_r0.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r0.f.branch.invalid && ctx_r0.f.branch.touched, ctx_r0.f.branch.valid && (ctx_r0.f.branch.dirty || ctx_r0.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.branch.errors);
  }
}
function ChildrenRegisterCreateComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r27.blockName, " ");
  }
}
function ChildrenRegisterCreateComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_24_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
  }
}
function ChildrenRegisterCreateComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r29.name, " ");
  }
}
function ChildrenRegisterCreateComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_34_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
  }
}
function ChildrenRegisterCreateComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r31.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r31.villageName, " ");
  }
}
function ChildrenRegisterCreateComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_44_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
  }
}
function ChildrenRegisterCreateComponent_div_45_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " View Child selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_div_45_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_div_45_div_14_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r33.f.viewChild.errors.required);
  }
}
function ChildrenRegisterCreateComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "View Child List By:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_div_45_Template_select_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.childList($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "-- View Child --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "With Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "All Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "No Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ChildrenRegisterCreateComponent_div_45_div_14_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c0, ctx_r7.f.viewChild.invalid && ctx_r7.f.viewChild.touched, ctx_r7.f.viewChild.valid && (ctx_r7.f.viewChild.dirty || ctx_r7.f.viewChild.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.f.viewChild.errors);
  }
}
function ChildrenRegisterCreateComponent_th_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_tr_82_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_tr_82_td_13_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](89);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.openModals(_r12, item_r37.familyDetailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_tr_82_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const item_r37 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](87);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.openModal(_r10, item_r37.familyDetailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ChildrenRegisterCreateComponent_tr_82_td_13_Template, 2, 0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r9.p - 1) * 5 + i_r38 + 1 ? (ctx_r9.p - 1) * 5 + i_r38 + 1 : i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r37.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r37.firstName, " ", item_r37.middleName, " ", item_r37.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r37.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r37.existingChildCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.createMode);
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const items_r48 = ctx_r54.$implicit;
      const i_r49 = ctx_r54.index;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](91);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r53.editChild(items_r48, i_r49, _r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const items_r48 = ctx_r57.$implicit;
      const i_r49 = ctx_r57.index;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r56.deleteChild(items_r48, i_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_1_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_i_2_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r50.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r50.deleteMode);
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ChildrenRegisterCreateComponent_ng_template_86_tr_24_td_11_Template, 3, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r49 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r48.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r48.dob.substring(0, 10).split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r48.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](items_r48.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r47.updateMode || ctx_r47.deleteMode);
  }
}
function ChildrenRegisterCreateComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "View Existing Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_86_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.viewExistingChildModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 56)(8, "div", 57)(9, "table", 58)(10, "thead")(11, "tr", 59)(12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ChildrenRegisterCreateComponent_ng_template_86_th_22_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "tbody", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ChildrenRegisterCreateComponent_ng_template_86_tr_24_Template, 12, 6, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.updateMode || ctx_r11.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r11.existingChildList);
  }
}
function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r65.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r67.validationService.titleCase($event));
    })("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const i_r64 = restoredCtx.index;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r68.childDetails.childInfo[i_r64].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td")(4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const i_r64 = restoredCtx.index;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r69.childDetails.childInfo[i_r64].dob = $event);
    })("keydown", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_input_keydown_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r70.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td")(6, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const i_r64 = restoredCtx.index;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r71.childDetails.childInfo[i_r64].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td")(16, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);
      const i_r64 = restoredCtx.index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r72.removeNewChild(i_r64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r64 = ctx.index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r62.childDetails.childInfo[i_r64].childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r62.childDetails.childInfo[i_r64].dob)("min", ctx_r62.minDate)("max", ctx_r62.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r62.childDetails.childInfo[i_r64].sex);
  }
}
function ChildrenRegisterCreateComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52)(1, "div", 64)(2, "div", 2)(3, "div", 65)(4, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Add Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 67)(7, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_88_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r73.addMoreChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 69)(9, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_88_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r75.childModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 56)(12, "div", 57)(13, "table", 71)(14, "thead")(15, "tr", 59)(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ChildrenRegisterCreateComponent_ng_template_88_tr_25_Template, 18, 5, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_88_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r76.saveAddChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r13.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r13.checkChildDisabled());
  }
}
function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r81.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r83.validationService.titleCase($event));
    })("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const i_r80 = restoredCtx.index;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r84.childDetails.childInfo[i_r80].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td")(4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const i_r80 = restoredCtx.index;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r85.childDetails.childInfo[i_r80].dob = $event);
    })("keydown", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_input_keydown_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r86.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td")(6, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const i_r80 = restoredCtx.index;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r87.childDetails.childInfo[i_r80].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td")(16, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82);
      const i_r80 = restoredCtx.index;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r88.removeNewChild(i_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r80 = ctx.index;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r78.childDetails.childInfo[i_r80].childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r78.childDetails.childInfo[i_r80].dob)("min", ctx_r78.minDate)("max", ctx_r78.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r78.childDetails.childInfo[i_r80].sex);
  }
}
function ChildrenRegisterCreateComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52)(1, "div", 64)(2, "div", 2)(3, "div", 65)(4, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Edit Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 69)(7, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_90_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r89.childModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 56)(10, "div", 57)(11, "table", 71)(12, "thead")(13, "tr", 59)(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ChildrenRegisterCreateComponent_ng_template_90_tr_23_Template, 18, 5, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ChildrenRegisterCreateComponent_ng_template_90_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r91.saveEditChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r15.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r15.checkChildDisabled());
  }
}
const _c1 = function (a0, a1, a2, a3) {
  return {
    familyNumber: a0,
    firstName: a1,
    middleName: a2,
    lastName: a3
  };
};
const _c2 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class ChildrenRegisterCreateComponent {
  constructor(fb, childService, http, modalService, validationService, httpService, toaster, sidebarService, baselineService, router) {
    this.fb = fb;
    this.childService = childService;
    this.http = http;
    this.modalService = modalService;
    this.validationService = validationService;
    this.httpService = httpService;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.baselineService = baselineService;
    this.router = router;
    this.today = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
    this.childDetails = {
      childInfo: []
    };
    this.loader = true;
    this.page = 1;
    this.pageSize = 6;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.createForm();
    this.getMinDate();
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });
    this.sidebarService.checkRoledetailDTO().then(res => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        };
        // let user = JSON.parse(localStorage.getItem('user'));
        const password = JSON.parse(localStorage.getItem('cachedData'));
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(password, 'encryptionCode');
        let objs = {
          deviceType: "W",
          loginId: this.sidebarService.loginId,
          password: bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8))
        };
        this.baselineService.login(objs).subscribe(res => {
          console.log(res.responseObject.branchBaselineSurveyEnddateDetailDTO, 'forclosebaselinedata');
          // console.log(user.responseObject.branchBaselineSurveyEnddateDetailDTO, 'branchBaselineSurveyEnddateDetailDTO');
          if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.actualEndDate != null) {
            console.log(true, '1');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToActualEndDate;
          } else if (res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate != null) {
            console.log(true, '2');
            this.timeToTentativeEndDate = res.responseObject.branchBaselineSurveyEnddateDetailDTO?.timeToTentativeEndDate;
          } else {
            this.timeToTentativeEndDate = '';
          }
        });
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/children-register/create']) : this.router.navigate(['/error']);
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    console.log(this.updateMode);
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    console.log(this.deleteMode);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 81 || item.subFunctionMasterId == 82 || item.subFunctionMasterId == 83 || item.subFunctionMasterId == 84)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    console.log(this.createMode);
  }
  changeRegion(region) {
    let regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    }, error => {
      this.branchList = null;
    });
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    this.timeToTentativeEndDate = '';
    if (this.locationForm.value.region == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
      this.timeToTentativeEndDate = '';
    }
  }
  changeBranch(brnchId) {
    console.log(brnchId, 'brnchId');
    this.branchEnddateDetailDTO = this.branchList.find(bran => bran.branchId == brnchId)?.branchBaselineSurveyEnddateDetailDTO;
    console.log(this.branchEnddateDetailDTO, 'branchEnddateDetailDTO');
    if (this.branchEnddateDetailDTO?.actualEndDate != null) {
      console.log(true, '1');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToActualEndDate;
    } else if (this.branchEnddateDetailDTO?.timeToTentativeEndDate != null) {
      console.log(true, '2');
      this.timeToTentativeEndDate = this.branchEnddateDetailDTO?.timeToTentativeEndDate;
    } else {
      this.timeToTentativeEndDate = '';
    }
    // this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    // this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: brnchId
    };
    this.baselineService.villagesOfBranch(Dto).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
    });
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    if (this.locationForm.value.branch == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.viewChild.setValue('');
    this.existingFamilyList = [];
    if (this.locationForm.value.block == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    this.existingFamilyList = [];
    this.locationForm.controls.viewChild.setValue('');
    if (this.locationForm.value.gp == '') {
      this.showError('No Data Found');
      this.existingFamilyList = [];
      this.villageDtoList = [];
      this.locationForm.controls.viewChild.setValue('');
    }
  }
  changeVillage(villageId, a) {
    this.existingFamilyList = [];
    this.locationForm.controls.viewChild.setValue('');
    if (this.locationForm.value.gram == '') {
      this.showError('No Data Found');
      this.locationForm.controls.viewChild.setValue('');
      this.existingFamilyList = [];
    } else {
      this.locationForm.controls.viewChild.setValue('2');
      this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageId)?.branchVillageMapId;
      console.log(this.branchVillageMapId, 'branchVillageMapId');
      let obj = {
        activeStatus: "A",
        dataAccessDTO: this.httpService.dataAccessDTO,
        id: this.branchVillageMapId
      };
      this.loader = false;
      setTimeout(() => {
        this.childService.viewExistingFamilyLists(obj).subscribe(response => {
          this.loader = true;
          this.existingFamilyListAll = response.responseObject;
          this.existingFamilyListZero = this.existingFamilyListAll?.filter(x => x.existingChildCount == 0);
          this.existingFamilyListNonZero = this.existingFamilyListAll?.filter(x => x.existingChildCount != 0);
          console.log(this.existingFamilyList);
          console.log(this.existingFamilyListNonZero);
          console.log(this.existingFamilyListZero);
          this.existingFamilyList?.forEach(item => {
            this.ide = item.familyDetailId;
          });
          if (a == 2) {
            this.existingFamilyList = this.existingFamilyListNonZero;
            this.locationForm.markAllAsTouched();
          }
        }, err => {
          this.loader = true;
          this.showError('No Data Found');
        });
      }, 1000);
    }
  }
  childList(e) {
    console.log(e.target.value);
    if (e.target.value == '') {
      this.existingFamilyList = [];
    }
    if (e.target.value == 1 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListAll;
    }
    if (e.target.value == 2 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListNonZero;
    }
    if (e.target.value == 3 && this.locationForm.value.gram != '') {
      this.existingFamilyList = this.existingFamilyListZero;
    }
  }
  get f() {
    return this.locationForm.controls;
  }
  getMinDate() {
    let date = new Date();
    let toDate = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getUTCFullYear() - 18;
    this.minDate = year + "-" + month + "-" + toDate;
  }
  createForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      viewChild: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
  }
  openModal(viewExistingChild, famid) {
    this.childViewExistingChild = viewExistingChild;
    this.childFamId = famid;
    this.getMoreDetails(famid);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewExistingChild, {
      windowClass: 'Child-Create-ModalClass'
    });
  }
  openModals(addNewChild, famid) {
    this.getMoreDetails(famid);
    this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(addNewChild, {
      windowClass: 'Child-Create-ModalClass'
    });
  }
  openModall(EditChild) {
    // this.getMoreDetails(famid);
    // this.familyID = famid;
    this.modalContent = '';
    this.modalReference = this.modalService.open(EditChild, {
      windowClass: 'Child-Create-ModalClass'
    });
  }
  getMoreDetails(famid) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: famid
    };
    //API call for viewing Details of existingFamilyChildDetails
    this.childService.viewExistingFamilyDetails(postBody).subscribe(response => {
      this.existingFamilyDetails = response.responseObject;
      this.existingChildList = response.responseObject.childDetailDTOList;
      this.checkChildCount = response.responseObject.totalNumberOfChildren - response.responseObject.childDetailDTOList.length;
      this.maleLen = response.responseObject.childDetailDTOList.filter(x => x.sex == 'M');
      // console.log(this.maleLen.length, 'maleLen');
      this.femaleLen = response.responseObject.childDetailDTOList.filter(x => x.sex == 'F');
      // console.log(this.femaleLen.length, 'femaleLen');
      this.checkTotalMale = response.responseObject.totaFamilyMemberMales - this.maleLen.length;
      this.checkTotalFemale = response.responseObject.totaFamilyMemberFemales - this.femaleLen.length;
      console.log(this.existingFamilyDetails, 'existingFamilyDetails');
      console.log(this.existingChildList, 'existingChildList');
    });
  }
  saveAddChild() {
    this.childDetails.childInfo.forEach(a => {
      a.familyDetailId = this.familyID;
      a.childName = this.validationService.camelize(a.childName.trim());
    });
    this.childDetails.childInfo.forEach(item => {
      let ageCheck = item.dob;
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
      }
      console.log(this.showAge);
    });
    const postBody = {
      childDetailDTOList: this.childDetails.childInfo,
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    console.log(postBody);
    if (this.checkChildCount < this.childDetails.childInfo.length) {
      this.showError('You cannot add more child than entered total no. of children');
      return;
    }
    let maleData = this.childDetails.childInfo.filter(x => x.sex == 'M');
    // console.log(maleData.length);
    let femaleData = this.childDetails.childInfo.filter(x => x.sex == 'F');
    // console.log(femaleData.length);
    if (this.checkTotalMale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      return;
    }
    if (this.checkTotalFemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      return;
    }
    // for disable add
    if (this.existingFamilyDetails.haveChild == 'N') {
      this.showError('This Family does not have any child');
      return;
    }
    // for disable add
    if (this.existingFamilyDetails.childrenBelow18 == 'N' || this.existingFamilyDetails.childrenBelow18 == 'NA') {
      this.showError('This family does not have any child below 18 years');
      return;
    }
    if (this.existingFamilyDetails.childrenBelow18 == 'Y' && this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge <= 5) {
        this.showError('This family does have any child below 5 years');
        return;
      }
    }
    if (this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge <= 2) {
        this.showError('This family does have any child below 2 years');
        return;
      }
    }
    this.childService.saveChild(postBody).subscribe(response => {
      console.log(response);
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        this.refreshChildData();
        // this.viewExistingChild.dismiss('Cross click')
      } else {
        this.showError(response.message);
      }
    });
  }
  saveEditChild() {
    // console.log(this.childDetails);
    // console.log(this.existingFamilyDetails);
    // console.log(this.setChild);
    this.childDetails.childInfo[0].familyDetailId = this.setChild.familyDetailId;
    this.childDetails.childInfo[0].childDetailId = this.setChild.childDetailId;
    // console.log(this.childDetails);
    let firstCopyOFEFD = JSON.stringify(this.existingFamilyDetails);
    this.childDetails.childInfo.forEach((item, index) => {
      let ageCheck = item.dob;
      item.childName = this.validationService.camelize(item.childName.trim());
      if (ageCheck) {
        // today: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
      }
      console.log(this.showAge);
      item.age = this.showAge;
      this.existingChildList[this.childIndexId] = item;
      // console.log(this.existingChildList, 'newChild');
    });

    this.existingChildList.filter(i => {
      let ageCheck = i.dob;
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
      }
      i.age = this.showAge;
      // console.log(this.showAge, 'agemaster');
    });

    if (this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N') {
      if (this.existingChildList.filter(v => v.age <= 2).length < 1) {
        this.showError('Child list must contain atleast one child below 2 years');
        return;
      }
    }
    if (this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.existingChildList.filter(v => v.age <= 5 && v.age > 2).length < 1) {
        this.showError('Child list must contain atleast one child below 5 years & more than 2 years');
        return;
      }
      if (this.existingChildList.filter(v => v.age <= 2).length > 0) {
        this.showError('Child list should not contain any child below 2 years');
        return;
      }
    }
    if (this.existingFamilyDetails.childrenBelow18 == 'Y' && this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.existingChildList.filter(v => v.age <= 18 && v.age > 5).length < 1) {
        this.showError('Child list must contain atleast one child below 18 years & more than 5 years');
        return;
      }
      if (this.existingChildList.filter(v => v.age <= 5).length > 0) {
        this.showError('Child list should not contain any child below 5 years');
        return;
      }
    }
    const postBody = {
      childDetailDTOList: [{
        age: this.setChild.age,
        childDetailId: this.setChild.childDetailId,
        childName: this.childDetails.childInfo[0].childName,
        createdOn: this.setChild.createdOn,
        dob: this.childDetails.childInfo[0].dob,
        familyDetailId: this.setChild.familyDetailId,
        sex: this.childDetails.childInfo[0].sex,
        status: this.setChild.status
      }],
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    if (this.existingFamilyDetails.childrenBelow5 == 'N') {
      if (this.showAge <= 5) {
        this.showError('This family does have any child below 5 years');
        return;
      }
    }
    if (this.existingFamilyDetails.lactetingMother == 'NA') {
      if (this.showAge <= 2) {
        this.showError('This family does have any child below 2 years');
        return;
      }
    }
    let copyOfexistingFamilyDetails = this.existingFamilyDetails;
    for (let i = 0; i < copyOfexistingFamilyDetails.childDetailDTOList.length; i++) {
      if (copyOfexistingFamilyDetails.childDetailDTOList[i].childDetailId == this.childDetails.childInfo[0].childDetailId) {
        copyOfexistingFamilyDetails.childDetailDTOList[i] = this.childDetails.childInfo[0];
      }
    }
    // console.log(copyOfexistingFamilyDetails);
    // console.log(this.existingFamilyDetails); console.log("**********", firstCopyOFEFD);
    let femaleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "F");
    let maleList = copyOfexistingFamilyDetails.childDetailDTOList.filter(x => x.sex == "M");
    let femaleLength = femaleList.length;
    let maleLength = maleList.length;
    // console.log(femaleLength, maleLength);
    if (this.existingFamilyDetails.totaFamilyMemberFemales == femaleLength || this.existingFamilyDetails.totaFamilyMemberFemales < femaleLength) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      // console.log(this.existingFamilyDetails);
      return;
    }
    if (this.existingFamilyDetails.totaFamilyMemberMales < maleLength) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      this.existingFamilyDetails = JSON.parse(firstCopyOFEFD);
      this.existingChildList = this.existingFamilyDetails.childDetailDTOList;
      return;
    }
    console.log(postBody, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    this.childService.saveChild(postBody).subscribe(response => {
      console.log(response, 'response');
      if (response.status == true) {
        this.showSuccess(response.message);
        this.childModalDismiss();
        this.getMoreDetails(this.existingFamilyDetails.familyDetailId);
      } else {
        this.showError(response.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Children Info Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Children Info Save', {
      timeOut: 2000
    });
  }
  showSuccesss(message) {
    this.toaster.success(message, 'Children Info Delete', {
      timeOut: 3000
    });
  }
  showErrors(message) {
    this.toaster.error(message, 'Children Info Delete', {
      timeOut: 2000
    });
  }
  p(event) {}
  addMoreChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    });
  }
  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }
  childModalDismiss() {
    console.log('childModalDismiss');
    this.modalReference.close();
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: this.familyID,
      sex: '',
      status: 'A'
    }];
  }
  checkChildDisabled() {
    let flag = true;
    if (this.childDetails.childInfo.length == 0) {
      flag = false;
    }
    this.childDetails.childInfo.forEach(item => {
      if (!item.childName || !item.dob || !item.sex) {
        flag = false;
      }
    });
    return flag;
  }
  deleteChild(items, i) {
    var below18 = 0;
    var below5 = 0;
    var below2 = 0;
    var below188 = 0;
    var forDelete = 0;
    var x = 0;
    this.existingChildList.forEach(item => {
      let ageCheck = item.dob;
      if (ageCheck) {
        const convertAge = new Date(ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
      }
      if (this.showAge > 0 && this.showAge <= 2) {
        below2 += 1;
      } // checking for 0-2 years
      if (this.showAge > 2 && this.showAge <= 5) {
        below5 += 1;
      } // checking for 2-5 years
      if (this.showAge > 5 && this.showAge <= 18) {
        below18 += 1;
      } // checking for 5-18 years
      if (x == i) {
        if (this.showAge > 0 && this.showAge <= 2) {
          forDelete = 2;
        } else if (this.showAge > 2 && this.showAge <= 5) {
          forDelete = 5;
        } else if (this.showAge > 5 && this.showAge <= 18) {
          forDelete = 18;
        } else {
          forDelete = 188;
        }
      }
      x += 1;
    });
    if (confirm('Do you want to delete : ' + items.childName)) {
      let postBody = {
        childDetailDTOList: [{
          age: items.age,
          childDetailId: items.childDetailId,
          childName: items.childName,
          createdOn: items.createdOn,
          dob: items.dob,
          familyDetailId: items.familyDetailId,
          sex: items.sex,
          status: 'D'
        }],
        dataAccessDTO: this.httpService.dataAccessDTO
      };
      // if (this.existingChildList.length == 1) {
      //   this.showError('Child list must contain atleast one child below 18 years');
      //   return;
      // }
      if (this.existingFamilyDetails.childrenBelow5 == 'N' && this.existingFamilyDetails.childrenBelow18 == 'Y' && forDelete == 18) {
        if (below18 == 1) {
          this.showError('Child list must contain atleast one child below 18 years');
          return;
        }
      }
      if ((this.existingFamilyDetails.lactetingMother == 'Y' || this.existingFamilyDetails.lactetingMother == 'N') && forDelete == 2) {
        if (below2 == 1) {
          this.showError('Child list must contain atleast one child below 2 years');
          return;
        }
      }
      if (this.existingFamilyDetails.childrenBelow5 == 'Y' && this.existingFamilyDetails.lactetingMother == 'NA' && forDelete == 5) {
        if (below5 == 1) {
          this.showError('Child list must contain atleast one child below 5 years');
          return;
        }
      }
      this.childService.saveChild(postBody).subscribe(response => {
        console.log(response);
        if (response.status == true) {
          this.showSuccesss(response.message);
          this.existingChildList.splice(i, 1);
        } else {
          this.showErrors(response.message);
        }
      });
    }
  }
  editChild(items, i, EditChild) {
    this.childModalDismiss();
    this.openModall(EditChild);
    this.setData(items);
    this.childIndexId = i;
    console.log(this.childIndexId, 'abc');
  }
  setData(data) {
    this.setChild = data;
    console.log(this.setChild, 'checkdata');
    this.childService.editChild(data);
    if (this.setChild) {
      this.childDetails.childInfo.forEach(x => {
        x.childName = this.setChild.childName;
      });
      this.childDetails.childInfo.forEach(x => {
        x.dob = this.setChild.dob.substring(0, 10);
      });
      this.childDetails.childInfo.forEach(x => {
        x.sex = this.setChild.sex;
      });
    }
  }
  viewExistingChildModalDismiss() {
    this.modalReference.close();
    this.refreshChildData();
  }
  refreshChildData() {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.branchVillageMapId
    };
    this.loader = false;
    this.childService.viewExistingFamilyLists(obj).subscribe(response => {
      console.log(response.responseObject, 'response.responseObject');
      this.loader = true;
      this.existingFamilyListAll = response.responseObject;
      this.existingFamilyListZero = this.existingFamilyListAll?.filter(x => x.existingChildCount == 0);
      this.existingFamilyListNonZero = this.existingFamilyListAll?.filter(x => x.existingChildCount != 0);
      console.log(this.existingFamilyList);
      console.log(this.existingFamilyListNonZero);
      console.log(this.existingFamilyListZero);
      if (this.locationForm.value.viewChild == 2 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListNonZero;
        this.locationForm.markAllAsTouched();
      }
      if (this.locationForm.value.viewChild == 3 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListZero;
        this.locationForm.markAllAsTouched();
      }
      if (this.locationForm.value.viewChild == 1 && this.locationForm.value.gram != '') {
        this.existingFamilyList = this.existingFamilyListAll;
        this.locationForm.markAllAsTouched();
      }
    });
  }
}
ChildrenRegisterCreateComponent.ɵfac = function ChildrenRegisterCreateComponent_Factory(t) {
  return new (t || ChildrenRegisterCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_children_register_service__WEBPACK_IMPORTED_MODULE_1__.ChildrenRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_5__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
};
ChildrenRegisterCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ChildrenRegisterCreateComponent,
  selectors: [["app-children-register-create"]],
  decls: 92,
  vars: 40,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "col"], [1, "page-title"], [2, "color", "blue"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search by family no. & name...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["viewExistingChild", ""], ["addNewChild", ""], ["EditChild", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [3, "value"], ["formControlName", "viewChild", "id", "viewChild", 1, "form-select", 3, "ngClass", "click"], ["value", "2"], ["value", "1"], ["value", "3"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", "btn-link", "style", "color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "modal-content"], [1, "modal-header", 2, "height", "90px"], [1, "white_box", "QA_section", "mb_30", 2, "height", "30px", "padding", "20px"], ["title", "Close", 1, "closes", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "overflow-y", "auto", "table-layout", "fixed"], [2, "text-align", "center"], ["class", "fas fa-edit", "title", "Edit Child", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Child", 3, "click", 4, "ngIf"], ["title", "Edit Child", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Child", 1, "fas", "fa-trash", 3, "click"], [1, "modal-header"], [1, "col-md-7"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-md-3"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], ["id", "table_wrapper", 1, "table", "table-striped"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], ["id", "sex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "M"], ["value", "F"], ["value", "O"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"], [1, "clos", 2, "cursor", "pointer", "font-size", "35px", 3, "click"]],
  template: function ChildrenRegisterCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Create Child Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ChildrenRegisterCreateComponent_div_13_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 2)(15, "div", 10)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChildrenRegisterCreateComponent_Template_select_change_20_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ChildrenRegisterCreateComponent_option_23_Template, 2, 1, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ChildrenRegisterCreateComponent_div_24_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 10)(26, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChildrenRegisterCreateComponent_Template_select_change_30_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, ChildrenRegisterCreateComponent_option_33_Template, 2, 1, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ChildrenRegisterCreateComponent_div_34_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 10)(36, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ChildrenRegisterCreateComponent_Template_select_change_40_listener($event) {
        return ctx.changeVillage($event.target.value, 2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ChildrenRegisterCreateComponent_option_43_Template, 2, 2, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ChildrenRegisterCreateComponent_div_44_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, ChildrenRegisterCreateComponent_div_45_Template, 15, 5, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "div", 25)(49, "form", 26)(50, "div", 27)(51, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ChildrenRegisterCreateComponent_Template_input_ngModelChange_51_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 31)(55, "div", 32)(56, "div", 33)(57, "table", 34)(58, "thead")(59, "tr")(60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "SL");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Family ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](66, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Husband");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "Total Child ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, " Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Existing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](78, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Child");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, ChildrenRegisterCreateComponent_th_80_Template, 4, 0, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, ChildrenRegisterCreateComponent_tr_82_Template, 14, 8, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](83, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](84, "grdFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "pagination-controls", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function ChildrenRegisterCreateComponent_Template_pagination_controls_pageChange_85_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function ChildrenRegisterCreateComponent_Template_pagination_controls_pageBoundsCorrection_85_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, ChildrenRegisterCreateComponent_ng_template_86_Template, 25, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, ChildrenRegisterCreateComponent_ng_template_88_Template, 30, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, ChildrenRegisterCreateComponent_ng_template_90_Template, 28, 2, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.timeToTentativeEndDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.locationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](24, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](27, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](30, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.existingFamilyListAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](83, 18, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](84, 21, ctx.existingFamilyList, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](33, _c1, ctx.searchText, ctx.searchText, ctx.searchText, ctx.searchText)), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](38, _c2, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__.GrdFilterPipe],
  styles: [".QA_table[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n  height: 400px;\r\n  width: 1080px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 12px 25px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  width: 800px;\r\n}\r\n\r\n.closes[_ngcontent-%COMP%] {\r\n  margin-left: 522px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-right: 821px;\r\n}\r\n\r\n.clos[_ngcontent-%COMP%] {\r\n  margin-right: 1171px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 25px;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -429px;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jaGlsZHJlbi1yZWdpc3Rlci9jaGlsZHJlbi1yZWdpc3Rlci1jcmVhdGUvY2hpbGRyZW4tcmVnaXN0ZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuUUFfdGFibGUge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSAudGFibGUgdGhlYWQgdGgge1xyXG4gIHBhZGRpbmc6IDEycHggMjVweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmNsb3NlcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUyMnB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIG1hcmdpbi1yaWdodDogODIxcHg7XHJcbn1cclxuXHJcbi5jbG9zIHtcclxuICBtYXJnaW4tcmlnaHQ6IDExNzFweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTQyOXB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NDBweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4NDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc0JTtcclxuICBtYXJnaW4tbGVmdDogODUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 35071:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/children-register/children-register-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenRegisterRoutingModule": () => (/* binding */ ChildrenRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _children_register_create_children_register_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children-register-create/children-register-create.component */ 66248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: 'create',
  component: _children_register_create_children_register_create_component__WEBPACK_IMPORTED_MODULE_0__.ChildrenRegisterCreateComponent
}];
class ChildrenRegisterRoutingModule {}
ChildrenRegisterRoutingModule.ɵfac = function ChildrenRegisterRoutingModule_Factory(t) {
  return new (t || ChildrenRegisterRoutingModule)();
};
ChildrenRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChildrenRegisterRoutingModule
});
ChildrenRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChildrenRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 79821:
/*!***********************************************************************!*\
  !*** ./src/app/modules/children-register/children-register.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenRegisterModule": () => (/* binding */ ChildrenRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _children_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children-register-routing.module */ 35071);
/* harmony import */ var _children_register_create_children_register_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children-register-create/children-register-create.component */ 66248);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/search.pipe */ 99945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









class ChildrenRegisterModule {}
ChildrenRegisterModule.ɵfac = function ChildrenRegisterModule_Factory(t) {
  return new (t || ChildrenRegisterModule)();
};
ChildrenRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ChildrenRegisterModule
});
ChildrenRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _children_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChildrenRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChildrenRegisterModule, {
    declarations: [_children_register_create_children_register_create_component__WEBPACK_IMPORTED_MODULE_1__.ChildrenRegisterCreateComponent, _shared_search_pipe__WEBPACK_IMPORTED_MODULE_5__.GrdFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _children_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChildrenRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule]
  });
})();

/***/ }),

/***/ 95761:
/*!************************************************************************!*\
  !*** ./src/app/modules/children-register/children-register.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenRegisterService": () => (/* binding */ ChildrenRegisterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class ChildrenRegisterService {
  constructor(http) {
    this.http = http;
    this.sendData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.editChildData = this.sendData.asObservable();
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  viewExistingFamilyLists(obj) {
    return this.http.post(`${this.baseURL}baselinesurvey/view`, obj);
  }
  viewExistingFamilyDetails(obj) {
    return this.http.post(`${this.baseURL}familydetail/view`, obj);
  }
  saveChild(obj) {
    return this.http.post(`${this.baseURL}childdetail/saveOrUpdate`, obj);
  }
  childStatus(obj) {
    return this.http.post(`${this.baseURL}familydetail/childstatus`, obj);
  }
  editChild(value) {
    this.sendData.next(value);
  }
}
ChildrenRegisterService.ɵfac = function ChildrenRegisterService_Factory(t) {
  return new (t || ChildrenRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ChildrenRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ChildrenRegisterService,
  factory: ChildrenRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99945:
/*!***********************************************!*\
  !*** ./src/app/modules/shared/search.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrdFilterPipe": () => (/* binding */ GrdFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GrdFilterPipe {
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
GrdFilterPipe.ɵfac = function GrdFilterPipe_Factory(t) {
  return new (t || GrdFilterPipe)();
};
GrdFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "grdFilter",
  type: GrdFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_children-register_children-register_module_ts.js.map