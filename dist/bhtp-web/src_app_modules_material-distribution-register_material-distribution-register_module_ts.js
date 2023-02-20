"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_material-distribution-register_material-distribution-register_module_ts"],{

/***/ 13822:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialDistributionRegisterRoutingModule": () => (/* binding */ MaterialDistributionRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-distribution-register.component */ 53385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_0__.MaterialDistributionRegisterComponent
}];
class MaterialDistributionRegisterRoutingModule {}
MaterialDistributionRegisterRoutingModule.ɵfac = function MaterialDistributionRegisterRoutingModule_Factory(t) {
  return new (t || MaterialDistributionRegisterRoutingModule)();
};
MaterialDistributionRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MaterialDistributionRegisterRoutingModule
});
MaterialDistributionRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialDistributionRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 53385:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialDistributionRegisterComponent": () => (/* binding */ MaterialDistributionRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _material_distribution_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-distribution-register.service */ 98173);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_material_distribution_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-distribution-search.pipe */ 64360);
















function MaterialDistributionRegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_div_8_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](76);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.viewEligibleFamilyDetails(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Create Material Distribution Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function MaterialDistributionRegisterComponent_div_10_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", region_r23.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", region_r23.regionName, " ");
  }
}
function MaterialDistributionRegisterComponent_div_10_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_10_div_10_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r20.m.region.errors.required);
  }
}
function MaterialDistributionRegisterComponent_div_10_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", branch_r25.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", branch_r25.branchName, " ");
  }
}
function MaterialDistributionRegisterComponent_div_10_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_10_div_20_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r22.m.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function MaterialDistributionRegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 10)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_10_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_div_10_option_9_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_div_10_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 10)(12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_div_10_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, MaterialDistributionRegisterComponent_div_10_option_19_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, MaterialDistributionRegisterComponent_div_10_div_20_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c0, ctx_r1.m.region.invalid && ctx_r1.m.region.touched, ctx_r1.m.region.valid && (ctx_r1.m.region.dirty || ctx_r1.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](9, _c0, ctx_r1.m.branch.invalid && ctx_r1.m.branch.touched, ctx_r1.m.branch.valid && (ctx_r1.m.branch.dirty || ctx_r1.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.m.branch.errors);
  }
}
function MaterialDistributionRegisterComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", block_r30.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", block_r30.blockName, " ");
  }
}
function MaterialDistributionRegisterComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_21_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.m.block.errors.required);
  }
}
function MaterialDistributionRegisterComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", gp_r32.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", gp_r32.name, " ");
  }
}
function MaterialDistributionRegisterComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_31_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.m.gp.errors.required);
  }
}
function MaterialDistributionRegisterComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", vill_r34.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", vill_r34.villageName, " ");
  }
}
function MaterialDistributionRegisterComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_div_41_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.m.gram.errors.required);
  }
}
function MaterialDistributionRegisterComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_tr_69_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);
      const mat_r36 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.viewdistributionDetails(_r9, mat_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " view");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mat_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mat_r36.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", mat_r36.first_name, "", mat_r36.middle_name, " ", mat_r36.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mat_r36.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mat_r36.distributionCount);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const beneficiary_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](beneficiary_r49.child_name);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r45.pwName);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const beneficiary_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](beneficiary_r51.status);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r47.pwStatus);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const mat_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](78);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.editMaterialDistributedFamily(_r13, mat_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const mat_r42 = ctx_r59.$implicit;
      const i_r43 = ctx_r59.index;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.deleteMaterialDistributedFamily(mat_r42, i_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_1_Template, 1, 0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_i_2_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r48.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r48.deleteMode);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_73_tr_27_tr_6_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MaterialDistributionRegisterComponent_ng_template_73_tr_27_span_7_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_ng_template_73_tr_27_tr_9_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_ng_template_73_tr_27_span_10_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td")(12, "table", 65)(13, "tbody")(14, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, MaterialDistributionRegisterComponent_ng_template_73_tr_27_td_18_Template, 3, 2, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mat_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r43 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mat_r42.distribution_date.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r41.materialDistributionListFamilyWise[i_r43].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mat_r42.pregnant_woman == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r41.materialDistributionListFamilyWise[i_r43].childList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mat_r42.pregnant_woman == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](!mat_r42.mappedString.includes(null) ? mat_r42.mappedString : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Other Item : ", ctx_r41.materialDistributionListFamilyWise[i_r43].other_item_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r41.updateMode || ctx_r41.deleteMode);
  }
}
function MaterialDistributionRegisterComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Distribution Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 58)(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_73_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.viewDistributionDetailsModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 61)(9, "div", 29)(10, "div", 30)(11, "div", 31)(12, "table", 32)(13, "thead", 33)(14, "tr")(15, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Distribution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Beneficiary Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Beneficiary Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, MaterialDistributionRegisterComponent_ng_template_73_th_25_Template, 2, 0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "tbody", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, MaterialDistributionRegisterComponent_ng_template_73_tr_27_Template, 19, 9, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.updateMode || ctx_r10.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r10.materialDistributionListFamilyWise);
  }
}
function MaterialDistributionRegisterComponent_ng_template_75_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ss_r65, " ");
  }
}
function MaterialDistributionRegisterComponent_ng_template_75_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 35)(20, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_75_tr_58_Template_i_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r69);
      const item_r66 = restoredCtx.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](78);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r68.createMaterialDistribution(_r13, item_r66));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r67 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.family_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", item_r66.first_name, " ", item_r66.middle_name, " ", item_r66.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.husband_or_guardian_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r66.swasthya_sahayika_name ? item_r66.swasthya_sahayika_name : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.below2Current ? item_r66.below2Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.below5Current ? item_r66.below5Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.girl14To18Current ? item_r66.girl14To18Current : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r66.pregnant_woman);
  }
}
function MaterialDistributionRegisterComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "form", 8)(3, "div", 2)(4, "div", 72)(5, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Eligible Family List");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 73)(8, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_75_Template_select_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r70.changeSSFilter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "-- View Family List By SS --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Family With SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Family With No SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, MaterialDistributionRegisterComponent_ng_template_75_option_15_Template, 2, 1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 58)(17, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_75_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r71);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r72.eligibleFamilyDetailsModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 61)(20, "div", 30)(21, "div", 31)(22, "table", 32)(23, "thead", 33)(24, "tr")(25, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Husband Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Child Under");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "2 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Child 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "to 5 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "14 to 18 yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Pregnant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Distribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "tbody", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, MaterialDistributionRegisterComponent_ng_template_75_tr_58_Template, 21, 11, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r12.filterswasthyaSahayikaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.ssList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.filterFamilyList);
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r78 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r77.child_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r77.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r77.sex);
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_h4_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No under 5 children or adolescent girl for this family");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_div_28_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("* ", items_r82.sub_item_name, "\u00A0\u00A0\u00A0");
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_div_28_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_77_div_28_tr_6_Template_tr_change_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87);
      const items_r82 = restoredCtx.$implicit;
      const i_r83 = restoredCtx.index;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r86.selectSubItemForMD(items_r82, i_r83, "S"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MaterialDistributionRegisterComponent_ng_template_77_div_28_tr_6_td_1_Template, 2, 1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", items_r82.isChecked == true);
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_77_div_28_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r89);
      const i_r80 = restoredCtx.index;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](80);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r88.changeItemList(_r15, $event.target.value, i_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "table", 91)(5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_77_div_28_tr_6_Template, 2, 1, "tr", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", item_r79.item_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r79.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r79.subItemList);
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_77_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r90.createMaterialDistributionModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 61)(6, "fieldset", 81)(7, "legend", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Beneficiary List");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 82)(10, "div", 31)(11, "table", 32)(12, "thead", 33)(13, "tr")(14, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "tbody", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, MaterialDistributionRegisterComponent_ng_template_77_tr_23_Template, 9, 4, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, MaterialDistributionRegisterComponent_ng_template_77_h4_24_Template, 2, 0, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "fieldset", 81)(26, "legend", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Distribute Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, MaterialDistributionRegisterComponent_ng_template_77_div_28_Template, 7, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, MaterialDistributionRegisterComponent_ng_template_77_div_30_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 86)(32, "div", 2)(33, "div", 87)(34, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_77_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r92.createMaterialDistributionSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r14.eligibleChildList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.eligibleChildList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r14.itemList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r14.createMaterialDistributionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.OtherItemStatus == "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r14.disabledSaveMaterialTraining());
  }
}
function MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_5_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r100);
      const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r98.selectSubItemForMD(items_r94, $event.target.checked, "C"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r103);
      const items_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r101.selectSubItemForMD(items_r94, $event.target.checked, "C"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MaterialDistributionRegisterComponent_ng_template_79_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_5_Template, 1, 0, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MaterialDistributionRegisterComponent_ng_template_79_tr_9_input_6_Template, 1, 0, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const items_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](items_r94.sub_item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", items_r94.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", items_r94.isChecked == false);
  }
}
function MaterialDistributionRegisterComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 96)(1, "div", 57)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 97)(5, "div", 98)(6, "div", 31)(7, "table", 32)(8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MaterialDistributionRegisterComponent_ng_template_79_tr_9_Template, 7, 3, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 86)(11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MaterialDistributionRegisterComponent_ng_template_79_Template_i_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r105);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r104.saveLocallySubItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r16.itemName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r16.subItemList);
  }
}
const _c1 = function (a0, a1, a2, a3) {
  return {
    family_number: a0,
    first_name: a1,
    middle_name: a2,
    lastlast_nameName: a3
  };
};
const _c2 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class MaterialDistributionRegisterComponent {
  constructor(fb, sidebarService, http, httpService, materialDistributionService, modalService, config, validationService, toaster, confirmationDialogService, router) {
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.httpService = httpService;
    this.materialDistributionService = materialDistributionService;
    this.modalService = modalService;
    this.validationService = validationService;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.router = router;
    this.dropdownSettings = {};
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpList = [];
    this.villageList = [];
    this.page = 1;
    this.pageSize = 6;
    this.eligibleFamilyList = [];
    this.filterFamilyList = [];
    this.eligibleChildList = [];
    this.itemList = [];
    this.subItemList = [];
    this.subItemMultiItem = [];
    this.materialDistributionList = [];
    this.materialDistributionListFamilyWise = [];
    this.showSelectedSI = '';
    this.OtherItemStatus = 'I';
    this.ssList = [];
    this.mappedString = "";
    this.mappedStringArray = [];
    this.loader = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.view_materialDistributionForm();
    this.sidebarService.checkRoledetailDTO().then(res => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
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
            console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
          }
        });
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  view_materialDistributionForm() {
    this.viewMaterialDistributionForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
  }
  get m() {
    return this.viewMaterialDistributionForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        regionId: regionId
      };
      this.materialDistributionService.getBranchesOfRegion(req).subscribe(res => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }
    this.viewMaterialDistributionForm.controls.branch.setValue('');
    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewMaterialDistributionForm.value.region == '') {
      this.branchList = [];
    }
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.materialDistributionService.getVillagesOfBranch(req).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });
    this.viewMaterialDistributionForm.controls.block.setValue('');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
  }
  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.viewMaterialDistributionForm.controls.gp.setValue('');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
    this.villageList = [];
  }
  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.viewMaterialDistributionForm.controls.gram.setValue('');
  }
  changeVillage(villageId) {
    this.villageID = villageId;
    console.log(this.villageID, 'changevillage this.villageID');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      village_master_id: villageId
    };
    this.materialDistributionService.getMaterialDistributionList(req).subscribe(res => {
      this.materialDistributionList = res.responseObject;
      console.log(this.materialDistributionList, 'this.materialDistributionList');
    });
  }
  viewdistributionDetails(detailsOfDistribution, mat) {
    this.materialDistributionListFamilyWise = mat.material_distribution_List;
    console.log(mat);
    this.pwName = mat.first_name + mat.middle_name + ' ' + mat.last_name;
    this.pwStatus = 'PW';
    this.modalContent = '';
    this.distributionDetailsModal = this.modalService.open(detailsOfDistribution, {
      windowClass: 'detailsOfParticipants'
    });
    this.mappedStringArray = [];
    this.materialDistributionListFamilyWise = this.materialDistributionListFamilyWise?.map(({
      mappedString = '',
      family_detail_id = mat.family_detail_id,
      ...rest
    }) => ({
      mappedString,
      family_detail_id,
      ...rest
    }));
    this.materialDistributionListFamilyWise.forEach(item => {
      this.viewItemSIDesign(item.subItems, item.mappedString, item);
    });
  }
  viewItemSIDesign(data, mappedStringData, item) {
    var Arr = [];
    Arr = data;
    console.log(Arr, 'TRR');
    var unique = this.findUnique(Arr, d => d.md_item_name);
    var myMap = new Map();
    unique.forEach(d => {
      myMap.set(d.md_item_name, Arr.filter(v => v.md_item_name == d.md_item_name));
    });
    mappedStringData = this.setItemSubItemName(unique, myMap);
    console.log(mappedStringData);
    var data = this.materialDistributionListFamilyWise.find(it => it.material_distribution_register_id == item.material_distribution_register_id);
    data.mappedString = mappedStringData;
    console.log(data);
    console.log(this.materialDistributionListFamilyWise);
  }
  setItemSubItemName(unique, map) {
    this.mappedString = "";
    unique.forEach(key => {
      this.mappedString += key.md_item_name;
      this.mappedString += " (";
      var data = map.get(key.md_item_name);
      data.forEach(ss => {
        this.mappedString += ss.md_sub_item_name + ", ";
      });
      this.mappedString = this.mappedString.substring(0, this.mappedString.length - 2);
      this.mappedString += "), ";
    });
    this.mappedString = this.mappedString.substring(0, this.mappedString.length - 2);
    return this.mappedString;
  }
  findUnique(arr, predicate) {
    var found = {};
    arr?.forEach(d => {
      found[predicate(d)] = d;
    });
    return Object.keys(found).map(key => found[key]);
  }
  viewDistributionDetailsModalDismiss() {
    this.changeVillage(this.villageID);
    this.distributionDetailsModal?.close();
  }
  viewEligibleFamilyDetails(eligibleFamilyDetails) {
    this.eligibleFamilyDetails = eligibleFamilyDetails;
    console.log(this.eligibleFamilyDetails);
    this.ssList = [];
    console.log(this.villageID, 'this.villageID');
    this.modalContent = '';
    this.eligibleFamilyModal = this.modalService.open(eligibleFamilyDetails, {
      windowClass: 'eligibleFamilyDetails'
    });
    let viewFamObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      village_master_id: this.villageID
    };
    this.loader = false;
    this.materialDistributionService.getEligibleFamilyDetails(viewFamObj).subscribe(res => {
      this.eligibleFamilyList = res.responseObject;
      this.filterFamilyList = res.responseObject;
      this.loader = true;
      console.log(this.eligibleFamilyList, 'eligibleFamilyList');
      this.eligibleFamilyList.forEach(item => {
        if (item.swasthya_sahayika_id != null) {
          this.ssList.push(item.swasthya_sahayika_name);
          this.ssList = this.ssList.filter((item, i, ar) => ar.indexOf(item) === i);
          console.log(this.ssList, 'sslist');
        }
      });
    });
    this.viewSSForm();
  }
  changeSSFilter(ssvalue) {
    if (ssvalue == 'noSS') {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_id == null);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    } else if (ssvalue == 'withSS') {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_id != null);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    } else if (ssvalue == '') {
      this.filterFamilyList = this.eligibleFamilyList;
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    } else {
      this.filterFamilyList = this.eligibleFamilyList.filter(item => item.swasthya_sahayika_name == ssvalue);
      console.log(this.eligibleFamilyList, 'this.eligibleFamilyList');
    }
  }
  eligibleFamilyDetailsModalDismiss() {
    this.eligibleFamilyModal?.close();
  }
  viewSSForm() {
    this.filterswasthyaSahayikaForm = this.fb.group({
      swasthyaSahayika: ['']
    });
  }
  create_materialDistributionForm(onDistributionEditData) {
    console.log(onDistributionEditData, '...create_materialDistributionForm');
    this.createMaterialDistributionForm = this.fb.group({
      enterSubItem: [onDistributionEditData?.other_item_name ? onDistributionEditData?.other_item_name : '']
    });
  }
  get t() {
    return this.createMaterialDistributionForm.controls;
  }
  createMaterialDistribution(materialDistribution, fam_details) {
    console.log(this.onDistributionEditData?.subItems);
    if (this.onDistributionEditData?.material_distribution_register_id) {
      if (this.onDistributionEditData.other_item_name) {
        this.OtherItemStatus = "O";
      } else {
        if (this.OtherItemStatus == "O") {
          this.OtherItemStatus = "I";
        } else {
          this.OtherItemStatus = "O";
        }
      }
    }
    this.familyDetails = fam_details;
    console.log(this.familyDetails, 'this.familyDetails');
    this.create_materialDistributionForm(this.onDistributionEditData);
    this.getItemList();
    console.log(fam_details.family_detail_id, 'family_detail_id');
    setTimeout(() => {
      this.modalContent = '';
      this.createMaterialModal = this.modalService.open(materialDistribution, {
        windowClass: 'materialDistribution'
      });
    }, 200);
    let viewChildObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      family_detail_id: fam_details.family_detail_id
    };
    this.materialDistributionService.getFamilyChildDetails(viewChildObj).subscribe(res => {
      this.eligibleChildList = this.onDistributionEditData?.childList ? this.onDistributionEditData?.childList : res.responseObject;
      console.log(this.eligibleChildList, 'eligibleChildList');
    });
  }
  getItemList() {
    let ItemObj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.materialDistributionService.getItemSubItemList(ItemObj).subscribe(res => {
      this.itemList = res.responseObject;
      this.itemList.push({
        item_id: 'OTHERS',
        item_name: 'Others'
      });
      console.log(this.itemList);
      this.itemList.forEach(item => {
        if (item.item_id != "OTHERS") {
          this.subItemList = item.subItemList;
          console.log(this.subItemList, 'subItemList');
          this.subItemList = this.subItemList?.map(({
            isChecked = false,
            ...rest
          }) => ({
            isChecked,
            ...rest
          }));
          console.log(this.subItemList, 'subItemList');
          this.onDistributionEditData?.subItems?.forEach(item => {
            this.subItemList?.filter(it => it.sub_item_id == item.md_sub_item_id)?.forEach(item1 => {
              item1.isChecked = true;
            });
          });
          item.subItemList = this.subItemList;
          console.log(item.subItemList, '351');
        }
      });
    });
  }
  changeItemList(itemSubItemList, itemId, i) {
    console.log(itemId);
    this.itemID = i;
    console.log(this.itemList);
    this.itemName = this.itemList.find(item => item.item_id == itemId)?.item_name;
    console.log(this.itemName);
    if (itemId != 'OTHERS') {
      this.modalContent = '';
      this.modalReference = this.modalService.open(itemSubItemList, {
        windowClass: 'itemSubItemList'
      });
    } else {
      if (this.createMaterialDistributionForm.value.enterSubItem) {
        this.OtherItemStatus = "O";
      } else {
        if (this.OtherItemStatus == "O") {
          this.OtherItemStatus = "I";
        } else {
          this.OtherItemStatus = "O";
        }
      }
    }
    this.subItemList = this.itemList.find(item => item.item_id == itemId)?.subItemList;
    console.log(this.subItemList, 'subItemList');
  }
  selectSubItemForMD(subItemList, e, type) {
    if (type == "C") {
      this.checked = e;
      if (this.checked == true) {
        this.showSelectedSI = "";
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = true;
        console.log(this.subItemList, 'subItemList');
      } else {
        this.showSelectedSI = "";
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = false;
        console.log(this.subItemList, 'subItemList');
      }
    } else {
      this.itemList.find(v => v.item_id == e).subItemList = this.subItemList;
      this.checked = e;
      if (this.checked % 2 == 1) {
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = true;
        console.log(this.subItemList, 'subItemList');
        this.itemList[e].subItemList = this.subItemList;
      } else {
        this.subItemList.find(list => list.sub_item_id == subItemList?.sub_item_id).isChecked = false;
        console.log(this.subItemList, 'subItemList');
        this.itemList[e].subItemList = this.subItemList;
      }
    }
  }
  saveLocallySubItem() {
    console.log(this.subItemList, 'subItemList');
    this.modalReference.close();
  }
  createMaterialDistributionModalDismiss() {
    var ID = this.onDistributionEditData?.material_distribution_register_id;
    if (ID) {
      this.onDistributionEditData = '';
      ID = 0;
      this.createMaterialModal.close();
      this.editItemID = '';
    } else {
      this.createMaterialModal.close();
    }
  }
  disabledSaveMaterialTraining() {
    let flag = false;
    this.itemList.forEach(item => {
      item.subItemList?.forEach(item1 => {
        if (item1.isChecked == true || this.createMaterialDistributionForm.value.enterSubItem) {
          flag = true;
        }
      });
    });
    return flag;
  }
  createMaterialDistributionSave() {
    this.subItemMultiItem = [];
    console.log('createMaterialDistributionSave');
    console.log(this.familyDetails, 'xxxxxxxxxxsavexxx');
    console.log(this.onDistributionEditData, 'onDistributionEditData');
    console.log(this.itemList, 'wholeitemliost');
    this.itemList.forEach(x => {
      if (x.item_id != 'OTHERS') {
        var multiSub = [];
        multiSub = x.subItemList.filter(it => it.isChecked == true);
        console.log(multiSub, 'inside loop');
        multiSub.forEach(y => {
          this.subItemMultiItem.push(y.sub_item_id);
          console.log(this.subItemMultiItem, ' this.subItemMultiItem');
        });
      }
    });
    console.log(this.subItemMultiItem, ' finallistsi');
    console.log(this.onDistributionEditData);
    console.log(this.familyDetails.family_detail_id);
    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: this.onDistributionEditData ? this.onDistributionEditData?.material_distribution_register_id : 0,
      active_flag: this.onDistributionEditData ? 'U' : 'C',
      family_detail_id: this.onDistributionEditData ? this.onDistributionEditData?.family_detail_id : this.familyDetails.family_detail_id,
      pregnant_woman: this.onDistributionEditData ? this.onDistributionEditData?.pregnant_woman : this.familyDetails.pregnant_woman,
      subItems: this.subItemMultiItem,
      otherItem: this.createMaterialDistributionForm.value.enterSubItem ? this.createMaterialDistributionForm.value.enterSubItem : null
    };
    console.log(saveReq, 'saveReq');
    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(saveReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.createMaterialDistributionModalDismiss();
        this.eligibleFamilyDetailsModalDismiss();
        this.viewDistributionDetailsModalDismiss();
        this.changeVillage(this.villageID);
      } else {
        this.showError(res.message);
      }
    });
  }
  editMaterialDistributedFamily(materialDistribution, mat) {
    this.onDistributionEditData = mat;
    this.createMaterialDistribution(materialDistribution, mat);
  }
  deleteMaterialDistributedFamily(mat, i) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete distribution record ?').then(() => this.delete(mat, i)).catch(() => '');
  }
  delete(mat, i) {
    console.log(mat, 'deleteMaterialDistributedFamily');
    let deleteReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      material_distribution_register_id: mat.material_distribution_register_id,
      active_flag: 'D',
      family_detail_id: mat.family_detail_id,
      pregnant_woman: mat.pregnant_woman,
      subItems: mat.subItems,
      otherItem: mat.other_item_map_id
    };
    console.log(deleteReq);
    this.materialDistributionService.saveUpdateDeleteMaterialDistribution(deleteReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.materialDistributionListFamilyWise.splice(i, 1);
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Material Distribution Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Material Distribution Register', {
      timeOut: 3000
    });
  }
}
MaterialDistributionRegisterComponent.ɵfac = function MaterialDistributionRegisterComponent_Factory(t) {
  return new (t || MaterialDistributionRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_material_distribution_register_service__WEBPACK_IMPORTED_MODULE_2__.MaterialDistributionRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
};
MaterialDistributionRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MaterialDistributionRegisterComponent,
  selectors: [["app-material-distribution-register"]],
  decls: 81,
  vars: 38,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search by family no. & head name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "6%"], [2, "width", "10%"], [2, "width", "25%"], [2, "width", "20%"], [2, "width", "15%"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["detailsOfDistribution", ""], ["eligibleFamilyDetails", ""], ["materialDistribution", ""], ["itemSubItemList", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], [1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [2, "cursor", "pointer", "color", "blue", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "5%"], ["style", "width:12%;", 4, "ngIf"], [2, "width", "12%"], [2, "table-layout", "fixed", "width", "260px"], [2, "word-wrap", "break-word"], ["style", "width: 12%;", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Material Distributed Family", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Material Distributed Family", 3, "click", 4, "ngIf"], ["title", "Edit Material Distributed Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Material Distributed Family", 1, "fas", "fa-trash", 3, "click"], [1, "col-md-4"], [1, "form-group", "col-md-4"], ["formControlName", "swasthyaSahayika", "id", "swasthyaSahayika", 1, "form-select", 2, "width", "300px", 3, "change"], ["value", "withSS"], ["value", "noSS"], [2, "float", "right", "cursor", "pointer", "font-size", "35px", "margin-bottom", "20px", 3, "click"], [2, "width", "8%"], [2, "width", "14%"], ["title", "Distribute Material", 1, "fas", "fa-file", 3, "click"], [1, "scheduler-border"], ["id", "beneficiaryScroll", 1, "QA_table"], ["id", "msg", 4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "form-group col-md-12", 4, "ngIf"], [1, "modal-footer"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["id", "msg"], [1, "collapsible", 2, "padding", "10px", "width", "-webkit-fill-available", 3, "value", "click"], [2, "table-layout", "fixed"], ["style", "overflow:hidden; white-space:nowrap; display: inline;", 3, "change", 4, "ngFor", "ngForOf"], [2, "overflow", "hidden", "white-space", "nowrap", "display", "inline", 3, "change"], [1, "form-group", "col-md-12"], ["type", "text", "placeholder", "Enter Other Sub Item", "formControlName", "enterSubItem", 1, "form-control"], [1, "modal-contents"], [1, "modal-body", 2, "height", "210px"], ["id", "subItemScroll", 1, "QA_table"], [1, "fas", "fa-arrow-alt-circle-right", 2, "color", "#499", "font-size", "35px", 3, "click"], [2, "margin-left", "160px"], ["class", "form-check-input", "type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"]],
  template: function MaterialDistributionRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Material Distribution Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MaterialDistributionRegisterComponent_div_8_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MaterialDistributionRegisterComponent_div_10_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 2)(12, "div", 10)(13, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_17_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, MaterialDistributionRegisterComponent_option_20_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MaterialDistributionRegisterComponent_div_21_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 10)(23, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_27_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, MaterialDistributionRegisterComponent_option_30_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, MaterialDistributionRegisterComponent_div_31_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 10)(33, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MaterialDistributionRegisterComponent_Template_select_change_37_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, MaterialDistributionRegisterComponent_option_40_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, MaterialDistributionRegisterComponent_div_41_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 21)(43, "div", 22)(44, "div", 23)(45, "form", 24)(46, "div", 25)(47, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function MaterialDistributionRegisterComponent_Template_input_ngModelChange_47_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 29)(51, "div", 30)(52, "div", 31)(53, "table", 32)(54, "thead", 33)(55, "tr")(56, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Family No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Family Head Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "th", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "No. of time distributed");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Distribution Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "tbody", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, MaterialDistributionRegisterComponent_tr_69_Template, 13, 7, "tr", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "materialDistributionFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "pagination-controls", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageChange_72_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function MaterialDistributionRegisterComponent_Template_pagination_controls_pageBoundsCorrection_72_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, MaterialDistributionRegisterComponent_ng_template_73_Template, 28, 2, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, MaterialDistributionRegisterComponent_ng_template_75_Template, 59, 3, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, MaterialDistributionRegisterComponent_ng_template_77_Template, 36, 6, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, MaterialDistributionRegisterComponent_ng_template_79_Template, 12, 2, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.viewMaterialDistributionForm.value.gram && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.viewMaterialDistributionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](22, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](25, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](28, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](70, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](71, 19, ctx.materialDistributionList, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](31, _c1, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c2, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, _shared_material_distribution_search_pipe__WEBPACK_IMPORTED_MODULE_7__.materialDistributionFilterPipe],
  styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #499;\r\n  font-size: 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow-x: hidden;\r\n  width: 1050px;\r\n  margin-left: -230px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n}\r\n\r\n#msg[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  margin-left: 280px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0 -19px;\r\n  padding: 0 24px;\r\n  max-height: 26vh;\r\n  overflow: auto;\r\n}\r\n\r\n#subItemScroll[_ngcontent-%COMP%] {\r\n  margin: 0 -14px;\r\n  padding: 0 24px;\r\n  max-height: 26vh;\r\n  overflow: auto;\r\n}\r\n\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  width: 100%;\r\n}\r\n\r\n.form-check-input[type=checkbox][_ngcontent-%COMP%] {\r\n  border-radius: 0.25em;\r\n  margin-left: 180px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n  background-color: #686868;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%]:after {\r\n  content: '\\002B';\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYXRlcmlhbC1kaXN0cmlidXRpb24tcmVnaXN0ZXIvbWF0ZXJpYWwtZGlzdHJpYnV0aW9uLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtcGx1cy1jaXJjbGUge1xyXG4gIGNvbG9yOiAjNDk5O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMzBweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnRzIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4jbXNnIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcclxufVxyXG5cclxuLnRhYmxlIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2JlbmVmaWNpYXJ5U2Nyb2xsIHtcclxuICBtYXJnaW46IDAgLTE5cHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI2dmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNzdWJJdGVtU2Nyb2xsIHtcclxuICBtYXJnaW46IDAgLTE0cHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI2dmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0aCwgdGFibGUuZGF0YVRhYmxlIHRib2R5IHRkIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2libGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODY4Njg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29sbGFwc2libGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwMkInO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDU0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDg0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNTQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogODQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 16478:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialDistributionRegisterModule": () => (/* binding */ MaterialDistributionRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-distribution-register-routing.module */ 13822);
/* harmony import */ var _material_distribution_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-distribution-register.component */ 53385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _shared_material_distribution_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material-distribution-search.pipe */ 64360);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










class MaterialDistributionRegisterModule {}
MaterialDistributionRegisterModule.ɵfac = function MaterialDistributionRegisterModule_Factory(t) {
  return new (t || MaterialDistributionRegisterModule)();
};
MaterialDistributionRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MaterialDistributionRegisterModule
});
MaterialDistributionRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaterialDistributionRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__.NgMultiSelectDropDownModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MaterialDistributionRegisterModule, {
    declarations: [_material_distribution_register_component__WEBPACK_IMPORTED_MODULE_1__.MaterialDistributionRegisterComponent, _shared_material_distribution_search_pipe__WEBPACK_IMPORTED_MODULE_3__.materialDistributionFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _material_distribution_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaterialDistributionRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__.NgMultiSelectDropDownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule]
  });
})();

/***/ }),

/***/ 98173:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/material-distribution-register/material-distribution-register.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialDistributionRegisterService": () => (/* binding */ MaterialDistributionRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class MaterialDistributionRegisterService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getBranchesOfRegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  getVillagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
  }
  getEligibleFamilyDetails(obj) {
    return this.http.post(`${this.baseURL}mdregister/getEligibleMdRegisterFamily`, obj);
  }
  getFamilyChildDetails(obj) {
    return this.http.post(`${this.baseURL}mdregister/getFamilyChildDetails`, obj);
  }
  getItemSubItemList(obj) {
    return this.http.post(`${this.baseURL}mdregister/getItemSubItemList`, obj);
  }
  saveUpdateDeleteMaterialDistribution(obj) {
    return this.http.post(`${this.baseURL}mdregister/saveUpdateDeleteMaterialDistribution`, obj);
  }
  getMaterialDistributionList(obj) {
    return this.http.post(`${this.baseURL}mdregister/getMaterialDistributionList`, obj);
  }
}
MaterialDistributionRegisterService.ɵfac = function MaterialDistributionRegisterService_Factory(t) {
  return new (t || MaterialDistributionRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MaterialDistributionRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MaterialDistributionRegisterService,
  factory: MaterialDistributionRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 64360:
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/material-distribution-search.pipe.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "materialDistributionFilterPipe": () => (/* binding */ materialDistributionFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class materialDistributionFilterPipe {
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
materialDistributionFilterPipe.ɵfac = function materialDistributionFilterPipe_Factory(t) {
  return new (t || materialDistributionFilterPipe)();
};
materialDistributionFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "materialDistributionFilter",
  type: materialDistributionFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_material-distribution-register_material-distribution-register_module_ts.js.map