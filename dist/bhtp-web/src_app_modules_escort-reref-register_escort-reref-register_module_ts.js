"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_escort-reref-register_escort-reref-register_module_ts"],{

/***/ 15016:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterRoutingModule": () => (/* binding */ EscortRerefRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterComponent
}];
class EscortRerefRegisterRoutingModule {}
EscortRerefRegisterRoutingModule.ɵfac = function EscortRerefRegisterRoutingModule_Factory(t) {
  return new (t || EscortRerefRegisterRoutingModule)();
};
EscortRerefRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterRoutingModule
});
EscortRerefRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EscortRerefRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59123:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterComponent": () => (/* binding */ EscortRerefRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _escort_reref_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escort-reref-register.service */ 36491);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);












function EscortRerefRegisterComponent_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", region_r13.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", region_r13.regionName, " ");
  }
}
function EscortRerefRegisterComponent_div_11_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_11_div_10_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.m.region.errors.required);
  }
}
function EscortRerefRegisterComponent_div_11_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", branch_r15.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", branch_r15.branchName, " ");
  }
}
function EscortRerefRegisterComponent_div_11_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_11_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_11_div_20_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.m.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function EscortRerefRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 11)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_div_11_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EscortRerefRegisterComponent_div_11_option_9_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EscortRerefRegisterComponent_div_11_div_10_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 11)(12, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_div_11_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, EscortRerefRegisterComponent_div_11_option_19_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EscortRerefRegisterComponent_div_11_div_20_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r0.m.region.invalid && ctx_r0.m.region.touched, ctx_r0.m.region.valid && (ctx_r0.m.region.dirty || ctx_r0.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c0, ctx_r0.m.branch.invalid && ctx_r0.m.branch.touched, ctx_r0.m.branch.valid && (ctx_r0.m.branch.dirty || ctx_r0.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.m.branch.errors);
  }
}
function EscortRerefRegisterComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", block_r20.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", block_r20.blockName, " ");
  }
}
function EscortRerefRegisterComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_22_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.m.block.errors.required);
  }
}
function EscortRerefRegisterComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", gp_r22.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", gp_r22.name, " ");
  }
}
function EscortRerefRegisterComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_32_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.m.gp.errors.required);
  }
}
function EscortRerefRegisterComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", vill_r24.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", vill_r24.villageName, " ");
  }
}
function EscortRerefRegisterComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_42_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.m.gram.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_75_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_75_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_75_div_16_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r26.r.date.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create Escort/ Refer Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 42)(6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_75_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.createERModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 45)(9, "form", 9)(10, "div", 46)(11, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function EscortRerefRegisterComponent_ng_template_75_Template_input_keydown_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.restrictTypeOfDate());
    })("change", function EscortRerefRegisterComponent_ng_template_75_Template_input_change_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, EscortRerefRegisterComponent_ng_template_75_div_16_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 49)(18, "table", 50)(19, "thead")(20, "tr")(21, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Name of SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Name of Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 51)(38, "div", 2)(39, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_75_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.saveEscortRefer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.createEscortReferForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx_r8.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, ctx_r8.r.date.invalid && ctx_r8.r.date.touched, ctx_r8.r.date.valid && (ctx_r8.r.date.dirty || ctx_r8.r.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.r.date.errors);
  }
}
class EscortRerefRegisterComponent {
  constructor(sidebarService, http, router, fb, httpService, escortReferService, modalService, config) {
    this.sidebarService = sidebarService;
    this.http = http;
    this.router = router;
    this.fb = fb;
    this.httpService = httpService;
    this.escortReferService = escortReferService;
    this.modalService = modalService;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.gpList = [];
    this.loader = true;
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.viewEscort_ReferForm();
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
    // this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/material-distribution-register']) : this.router.navigate(['/error']);
    // this.createMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    // this.updateMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    // this.deleteMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 226 || item.subFunctionMasterId == 227 || item.subFunctionMasterId == 228 || item.subFunctionMasterId == 229)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  viewEscort_ReferForm() {
    this.viewEscortReferForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get m() {
    return this.viewEscortReferForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        regionId: regionId
      };
      this.escortReferService.getBranchesOfRegion(req).subscribe(res => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }
    this.viewEscortReferForm.controls.branch.setValue('');
    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewEscortReferForm.value.region == '') {
      this.branchList = [];
    }
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.escortReferService.getVillagesOfBranch(req).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });
    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
  }
  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.villageList = [];
  }
  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.viewEscortReferForm.controls.gram.setValue('');
  }
  changeVillage(villageId) {
    this.villageID = villageId;
    console.log(this.villageID, 'changevillage this.villageID');
    // let req = { dataAccessDTO: this.httpService.dataAccessDTO, village_master_id: villageId };
    // this.escortReferService.getMaterialDistributionList(req).subscribe((res: any) => {
    //   this.materialDistributionList = res.responseObject;
    //   console.log(this.materialDistributionList, 'this.materialDistributionList');
    // })
  }

  createEscortRefer(createER) {
    this.createEscort_ReferForm();
    this.modalContent = '';
    this.createERRegisterModal = this.modalService.open(createER, {
      windowClass: 'createER'
    });
    this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).subtract(7, "days").format("YYYY-MM-DD");
  }
  createERModalDismiss() {
    this.createERRegisterModal.close();
  }
  createEscort_ReferForm() {
    this.createEscortReferForm = this.fb.group({
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get r() {
    return this.createEscortReferForm.controls;
  }
  restrictTypeOfDate() {
    return false;
  }
}
EscortRerefRegisterComponent.ɵfac = function EscortRerefRegisterComponent_Factory(t) {
  return new (t || EscortRerefRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_escort_reref_register_service__WEBPACK_IMPORTED_MODULE_3__.EscortRerefRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalConfig));
};
EscortRerefRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EscortRerefRegisterComponent,
  selectors: [["app-escort-reref-register"]],
  decls: 77,
  vars: 21,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Escort/ Refer Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "4%"], [2, "width", "7%"], [2, "width", "25%"], [2, "width", "20%"], [2, "width", "15%"], ["createER", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], [1, "dialog-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body"], [1, "form-group", "col-md-4"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "rcorners1"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]],
  template: function EscortRerefRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Escort/ Refer Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_Template_i_click_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](76);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.createEscortRefer(_r7));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, EscortRerefRegisterComponent_div_11_Template, 21, 12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2)(13, "div", 11)(14, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_18_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EscortRerefRegisterComponent_option_21_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, EscortRerefRegisterComponent_div_22_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11)(24, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_28_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EscortRerefRegisterComponent_option_31_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EscortRerefRegisterComponent_div_32_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11)(34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_38_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, EscortRerefRegisterComponent_option_41_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, EscortRerefRegisterComponent_div_42_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "div", 24)(46, "table", 25)(47, "thead", 26)(48, "tr")(49, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Family No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Beneficiary Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Beneficiary Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Reason");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Place");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Done by- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Staff/ SS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, EscortRerefRegisterComponent_ng_template_75_Template, 41, 7, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.viewEscortReferForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](12, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](18, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n    height: 570px;\r\n    width: 800px;\r\n    margin-left: -140px;\r\n    border: 10px solid white;\r\n  }\r\n\r\n  .dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n    margin-left: -15px;\r\n  }\r\n  \r\n  .dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n  }\r\n\r\n  .rcorners1[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 0 0;\r\n    border-bottom: 0 solid transparent;\r\n    background-color: #fff;\r\n    padding: 17px 30px;\r\n    line-height: 32px;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n    text-transform: capitalize;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    border: 0;\r\n    background: #499;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lc2NvcnQtcmVyZWYtcmVnaXN0ZXIvZXNjb3J0LXJlcmVmLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICAgIGhlaWdodDogNTcwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0MHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmRpYWxvZy10aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbiAgfVxyXG5cclxuICAucmNvcm5lcnMxIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 42493:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterModule": () => (/* binding */ EscortRerefRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register-routing.module */ 15016);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class EscortRerefRegisterModule {}
EscortRerefRegisterModule.ɵfac = function EscortRerefRegisterModule_Factory(t) {
  return new (t || EscortRerefRegisterModule)();
};
EscortRerefRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterModule
});
EscortRerefRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EscortRerefRegisterModule, {
    declarations: [_escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__.EscortRerefRegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
  });
})();

/***/ }),

/***/ 36491:
/*!********************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterService": () => (/* binding */ EscortRerefRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class EscortRerefRegisterService {
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
}
EscortRerefRegisterService.ɵfac = function EscortRerefRegisterService_Factory(t) {
  return new (t || EscortRerefRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EscortRerefRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EscortRerefRegisterService,
  factory: EscortRerefRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_escort-reref-register_escort-reref-register_module_ts.js.map