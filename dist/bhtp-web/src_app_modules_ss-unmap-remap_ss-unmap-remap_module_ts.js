"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_ss-unmap-remap_ss-unmap-remap_module_ts"],{

/***/ 83711:
/*!*************************************************************************!*\
  !*** ./src/app/modules/ss-unmap-remap/ss-unmap-remap-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsUnmapRemapRoutingModule": () => (/* binding */ SsUnmapRemapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ss_unmap_remap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ss-unmap-remap.component */ 5363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _ss_unmap_remap_component__WEBPACK_IMPORTED_MODULE_0__.SsUnmapRemapComponent
}];
class SsUnmapRemapRoutingModule {}
SsUnmapRemapRoutingModule.ɵfac = function SsUnmapRemapRoutingModule_Factory(t) {
  return new (t || SsUnmapRemapRoutingModule)();
};
SsUnmapRemapRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SsUnmapRemapRoutingModule
});
SsUnmapRemapRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SsUnmapRemapRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5363:
/*!********************************************************************!*\
  !*** ./src/app/modules/ss-unmap-remap/ss-unmap-remap.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsUnmapRemapComponent": () => (/* binding */ SsUnmapRemapComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ss_unmap_remap_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ss-unmap-remap.service */ 20311);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);












function SsUnmapRemapComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", region_r10.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", region_r10.regionName, " ");
  }
}
function SsUnmapRemapComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SsUnmapRemapComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SsUnmapRemapComponent_div_19_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors.required);
  }
}
function SsUnmapRemapComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", branch_r12.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", branch_r12.branchName, " ");
  }
}
function SsUnmapRemapComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SsUnmapRemapComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SsUnmapRemapComponent_div_29_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.branch.errors.required);
  }
}
function SsUnmapRemapComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hcouser_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", hcouser_r14.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", hcouser_r14.user_firstname, " ", hcouser_r14.user_middlename, " ", hcouser_r14.user_lastname, " - ", hcouser_r14.role_shortname, " ");
  }
}
function SsUnmapRemapComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Role selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SsUnmapRemapComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SsUnmapRemapComponent_div_39_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.hcouser.errors.required);
  }
}
function SsUnmapRemapComponent_div_40_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ss_r17.swasthyaSahayikaName, " ");
  }
}
function SsUnmapRemapComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Filter By SS Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_div_40_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.ssWiseViewList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "-- View All List --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SsUnmapRemapComponent_div_40_option_6_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "List With No SS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.ssLists);
  }
}
function SsUnmapRemapComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_tr_60_Template_input_change_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.unmapRemapSS($event, item_r20.houseHoldDetailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r7.p - 1) * 5 + i_r21 + 1 ? (ctx_r7.p - 1) * 5 + i_r21 + 1 : i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.houseHoldNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.swasthyaSahayikaName ? item_r20.swasthyaSahayikaName : "-");
  }
}
function SsUnmapRemapComponent_ng_template_68_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ss_r26.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ss_r26.swasthyaSahayikaName, " ");
  }
}
function SsUnmapRemapComponent_ng_template_68_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SS selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SsUnmapRemapComponent_ng_template_68_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SsUnmapRemapComponent_ng_template_68_div_15_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r25.s.ss.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SsUnmapRemapComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SsUnmapRemapComponent_ng_template_68_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 39)(5, "form", 7)(6, "div", 8)(7, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Swasthya Sahayika :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_ng_template_68_Template_select_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.changess($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "-- Select SS--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SsUnmapRemapComponent_ng_template_68_option_14_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SsUnmapRemapComponent_ng_template_68_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 42)(17, "div", 2)(18, "div", 27)(19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SsUnmapRemapComponent_ng_template_68_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.saveRemapSSFromModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Remap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r9.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, ctx_r9.s.ss.invalid && ctx_r9.s.ss.touched, ctx_r9.s.ss.valid && (ctx_r9.s.ss.dirty || ctx_r9.s.ss.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.ssLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.s.ss.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r9.modalForm.value.ss);
  }
}
class SsUnmapRemapComponent {
  constructor(fb, ssUnmapRemapService, httpService, toaster, confirmationDialogService, modalService, sidebarService, router) {
    this.fb = fb;
    this.ssUnmapRemapService = ssUnmapRemapService;
    this.httpService = httpService;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.modalService = modalService;
    this.sidebarService = sidebarService;
    this.router = router;
    this.regionList = [];
    this.branchList = [];
    this.userList = [];
    this.userMappedHHList = [];
    this.ssLists = [];
    this.page = 1;
    this.pageSize = 5;
    this.mapUnmapDto = {
      dataAccessDTO: {},
      ssHhMapRemapDtoList: []
    };
    this.loader = true;
  }
  ngOnInit() {
    this.createForm();
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.ssUnmapRemapService.listOfRegionsOfUser(obj).subscribe(res => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
    this.sidebarService.subMenuList.find(functionMasterId => functionMasterId.functionMasterId == 3)?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 203)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/ss-unmap-remap']) : this.router.navigate(['/error']);
  }
  createForm() {
    this.ssUnmapRemapForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      hcouser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      ssByList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get f() {
    return this.ssUnmapRemapForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.ssUnmapRemapService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    this.ssUnmapRemapForm.controls.branch.setValue('');
    this.ssUnmapRemapForm.controls.hcouser.setValue('');
    this.userMappedHHList = [];
    if (this.ssUnmapRemapForm.value.region == '') {
      this.ssUnmapRemapForm.controls.branch.setValue('');
      this.ssUnmapRemapForm.controls.hcouser.setValue('');
      this.userMappedHHList = [];
    }
  }
  changeBranch(branchId) {
    console.log(branchId);
    this.branchId = branchId;
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.ssUnmapRemapService.hcoListOfBranch(obj).subscribe(res => {
      this.userList = res.responseObject;
      console.log(this.userList, 'this.userList');
    });
    this.ssUnmapRemapForm.controls.hcouser.setValue('');
    this.userMappedHHList = [];
    if (this.ssUnmapRemapForm.value.branch == '') {
      this.ssUnmapRemapForm.controls.hcouser.setValue('');
      this.userMappedHHList = [];
    }
  }
  changeHco(hcouserId) {
    this.getActiveSS(hcouserId);
    this.hcouserId = hcouserId;
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcouserId
    };
    this.loader = false;
    this.ssUnmapRemapService.viewUsersMappedHhAndSsDetails(obj).subscribe(res => {
      this.userMappedHHList = res.responseObject;
      console.log(this.userMappedHHList, 'this.userMappedHHList');
      this.loader = true;
    });
    this.userMappedHHList = [];
    this.mapUnmapDto.ssHhMapRemapDtoList = [];
    this.ssUnmapRemapForm.controls.ssByList.setValue('');
    if (this.ssUnmapRemapForm.value.branch == '') {
      this.userMappedHHList = [];
      this.mapUnmapDto.ssHhMapRemapDtoList = [];
    }
  }
  unmapRemapSS(e, hhId) {
    this.checkboxData = e.target.checked;
    if (this.checkboxData) {
      this.mapUnmapDto.dataAccessDTO = this.httpService.dataAccessDTO, this.mapUnmapDto.ssHhMapRemapDtoList.push({
        houseHoldDetailId: hhId,
        remapSwasthyaSahayikaId: null
      });
      console.log(this.checkboxData);
    } else {
      var i = this.mapUnmapDto.ssHhMapRemapDtoList.findIndex(list => list.houseHoldDetailId == hhId);
      this.mapUnmapDto.ssHhMapRemapDtoList.splice(i, 1);
    }
    console.log(this.mapUnmapDto, 'mapUnmapDto.ssHhMapRemapDtoList');
  }
  saveunmapSS() {
    this.confirmationDialogService.confirm('', 'Are you sure you want to Unmap selected Household from SS').then(() => this.unmapSS()).catch(() => '');
  }
  unmapSS() {
    console.log(this.mapUnmapDto);
    this.ssUnmapRemapService.unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(this.mapUnmapDto).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeHco(this.hcouserId);
      }
    });
  }
  saveRemapSS(ssList) {
    this.createModalForm();
    this.modalContent = '';
    this.modalReference = this.modalService.open(ssList, {
      windowClass: 'ssList'
    });
  }
  changess(ssId) {
    this.ssId = ssId;
    console.log(this.ssId);
  }
  saveRemapSSFromModal() {
    var ssId = this.mapUnmapDto.ssHhMapRemapDtoList;
    ssId.filter(xyz => {
      xyz.remapSwasthyaSahayikaId = this.ssId;
    });
    console.log(ssId);
    this.mapUnmapDto.dataAccessDTO = this.httpService.dataAccessDTO, this.mapUnmapDto.ssHhMapRemapDtoList = ssId;
    console.log(this.mapUnmapDto);
    this.ssUnmapRemapService.unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(this.mapUnmapDto).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcouserId);
      }
    });
  }
  createModalForm() {
    this.modalForm = this.fb.group({
      ss: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get s() {
    return this.modalForm.controls;
  }
  modalDismiss() {
    this.modalReference.close();
  }
  getActiveSS(hcouserId) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: hcouserId
    };
    this.ssUnmapRemapService.getActiveSsListOfAnUser(obj).subscribe(res => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');
    });
  }
  ssWiseViewList(swasthyaSahayikaName) {
    console.log(swasthyaSahayikaName);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.hcouserId
    };
    this.loader = false;
    this.ssUnmapRemapService.viewUsersMappedHhAndSsDetails(obj).subscribe(res => {
      this.userMappedHHList = res.responseObject;
      console.log(this.userMappedHHList, 'this.userMappedHHList');
      this.callSSfilter(swasthyaSahayikaName);
      this.loader = true;
    });
  }
  callSSfilter(swasthyaSahayikaName) {
    if (swasthyaSahayikaName == 'SS') {
      this.ssNameFilter = this.userMappedHHList?.filter(item => item.swasthyaSahayikaName === null);
      console.log(this.ssNameFilter, 'this.nossNameFilter');
    } else {
      this.ssNameFilter = this.userMappedHHList?.filter(item => item.swasthyaSahayikaName == swasthyaSahayikaName);
      console.log(this.ssNameFilter, 'this.ssNameFilter');
    }
    if (swasthyaSahayikaName) {
      if (this.ssNameFilter?.length == 0) {
        this.showErrorss('No matched data with' + ' ' + swasthyaSahayikaName);
        this.userMappedHHList = this.ssNameFilter;
      } else {
        this.userMappedHHList = this.ssNameFilter;
      }
    }
  }
  showErrorss(message) {
    this.toaster.error(message, '', {
      timeOut: 3000
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Unmap/ Remap SS - Household', {
      timeOut: 5000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Unmap/ Remap SS - Household', {
      timeOut: 5000
    });
  }
}
SsUnmapRemapComponent.ɵfac = function SsUnmapRemapComponent_Factory(t) {
  return new (t || SsUnmapRemapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ss_unmap_remap_service__WEBPACK_IMPORTED_MODULE_0__.SsUnmapRemapService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
SsUnmapRemapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SsUnmapRemapComponent,
  selectors: [["app-ss-unmap-remap"]],
  decls: 70,
  vars: 24,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], ["for", "hcouser"], ["formControlName", "hcouser", "id", "hcouser", 1, "form-select", 3, "ngClass", "change"], ["class", "form-group col-md", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "9%"], [4, "ngFor", "ngForOf"], [1, "form-group", "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["ssList", ""], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "ssByList", "id", "ssByList", 1, "form-select", 3, "change"], ["value", "SS"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], [1, "modal-header"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["for", "ss"], ["formControlName", "ss", "id", "ss", 1, "form-select", 3, "ngClass", "change"], [1, "modal-footer"]],
  template: function SsUnmapRemapComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Unmap/ Remap SS - Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_Template_select_change_15_listener($event) {
        return ctx.changeRegion($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SsUnmapRemapComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SsUnmapRemapComponent_div_19_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8)(21, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Branch :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_Template_select_change_25_listener($event) {
        return ctx.changeBranch($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "-- Select Branch --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SsUnmapRemapComponent_option_28_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SsUnmapRemapComponent_div_29_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 8)(31, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "HCO/ HCOI /TL :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SsUnmapRemapComponent_Template_select_change_35_listener($event) {
        return ctx.changeHco($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "-- Select Role --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, SsUnmapRemapComponent_option_38_Template, 2, 5, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, SsUnmapRemapComponent_div_39_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, SsUnmapRemapComponent_div_40_Template, 9, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "div", 21)(43, "div", 22)(44, "table", 23)(45, "thead", 24)(46, "tr")(47, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Household No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Village of Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "SS Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Unmap/ Remap");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, SsUnmapRemapComponent_tr_60_Template, 13, 5, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 2)(62, "div", 27)(63, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SsUnmapRemapComponent_Template_button_click_63_listener() {
        return ctx.saveunmapSS();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Unmap");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SsUnmapRemapComponent_Template_button_click_66_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.saveRemapSS(_r8));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Remap");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, SsUnmapRemapComponent_ng_template_68_Template, 21, 8, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.ssUnmapRemapForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](18, _c0, ctx.f.branch.invalid && ctx.f.branch.touched, ctx.f.branch.valid && (ctx.f.branch.dirty || ctx.f.branch.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.branch.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c0, ctx.f.hcouser.invalid && ctx.f.hcouser.touched, ctx.f.hcouser.valid && (ctx.f.hcouser.dirty || ctx.f.hcouser.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.hcouser.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ssUnmapRemapForm.value.hcouser);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userMappedHHList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.mapUnmapDto.ssHhMapRemapDtoList.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.mapUnmapDto.ssHhMapRemapDtoList.length == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
  styles: ["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 200px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    \r\n    height: 8px;\r\n    background: transparent;\r\n    \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    \r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n    height: 230px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    margin-left: 440px;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    color: #7e7172;\r\n    font-size: 15px;\r\n    color: #828bb2;\r\n    font-weight: 400;\r\n    border-bottom: 1px solid rgba(130, 139, 178, 0.1);\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zcy11bm1hcC1yZW1hcC9zcy11bm1hcC1yZW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBLGdEQUFnRDtBQUNoRDtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxudGFibGUgdGhlYWQsIHRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gY29sb3VyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDQwcHg7XHJcbn1cclxuXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSB0aCwgLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IHRkIHtcclxuICAgIGNvbG9yOiAjN2U3MTcyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM4MjhiYjI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTMwLCAxMzksIDE3OCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 26034:
/*!*****************************************************************!*\
  !*** ./src/app/modules/ss-unmap-remap/ss-unmap-remap.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsUnmapRemapModule": () => (/* binding */ SsUnmapRemapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ss_unmap_remap_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ss-unmap-remap-routing.module */ 83711);
/* harmony import */ var _ss_unmap_remap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ss-unmap-remap.component */ 5363);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class SsUnmapRemapModule {}
SsUnmapRemapModule.ɵfac = function SsUnmapRemapModule_Factory(t) {
  return new (t || SsUnmapRemapModule)();
};
SsUnmapRemapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SsUnmapRemapModule
});
SsUnmapRemapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ss_unmap_remap_routing_module__WEBPACK_IMPORTED_MODULE_0__.SsUnmapRemapRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SsUnmapRemapModule, {
    declarations: [_ss_unmap_remap_component__WEBPACK_IMPORTED_MODULE_1__.SsUnmapRemapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ss_unmap_remap_routing_module__WEBPACK_IMPORTED_MODULE_0__.SsUnmapRemapRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule]
  });
})();

/***/ }),

/***/ 20311:
/*!******************************************************************!*\
  !*** ./src/app/modules/ss-unmap-remap/ss-unmap-remap.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SsUnmapRemapService": () => (/* binding */ SsUnmapRemapService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class SsUnmapRemapService {
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
  viewUsersMappedHhAndSsDetails(obj) {
    return this.http.post(`${this.baseURL}remap/viewUsersMappedHhAndSsDetails`, obj);
  }
  unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser(obj) {
    return this.http.post(`${this.baseURL}remap/unmapAndOrRemapSsFromOneOrMoreHouseholdsOfUser`, obj);
  }
  getActiveSsListOfAnUser(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getActiveSsListOfAnUser`, obj);
  }
}
SsUnmapRemapService.ɵfac = function SsUnmapRemapService_Factory(t) {
  return new (t || SsUnmapRemapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SsUnmapRemapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SsUnmapRemapService,
  factory: SsUnmapRemapService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_ss-unmap-remap_ss-unmap-remap_module_ts.js.map