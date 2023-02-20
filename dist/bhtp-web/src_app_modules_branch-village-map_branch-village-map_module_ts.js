"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_branch-village-map_branch-village-map_module_ts"],{

/***/ 43750:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/branch-village-map/branch-village-map-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchVillageMapRoutingModule": () => (/* binding */ BranchVillageMapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _branch_village_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-village-map.component */ 40259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _branch_village_map_component__WEBPACK_IMPORTED_MODULE_0__.BranchVillageMapComponent
}];
class BranchVillageMapRoutingModule {}
BranchVillageMapRoutingModule.ɵfac = function BranchVillageMapRoutingModule_Factory(t) {
  return new (t || BranchVillageMapRoutingModule)();
};
BranchVillageMapRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: BranchVillageMapRoutingModule
});
BranchVillageMapRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BranchVillageMapRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 40259:
/*!****************************************************************************!*\
  !*** ./src/app/modules/branch-village-map/branch-village-map.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchVillageMapComponent": () => (/* binding */ BranchVillageMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _branch_village_map_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-village-map.service */ 84404);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);













function BranchVillageMapComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchVillageMapComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.mapVillage(_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Map Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_div_10_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
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
function BranchVillageMapComponent_div_10_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_div_10_div_10_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.f.region.errors.required);
  }
}
function BranchVillageMapComponent_div_10_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
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
function BranchVillageMapComponent_div_10_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_div_10_div_20_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function BranchVillageMapComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 6)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_div_10_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BranchVillageMapComponent_div_10_option_9_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BranchVillageMapComponent_div_10_div_10_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6)(12, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_div_10_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, BranchVillageMapComponent_div_10_option_19_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, BranchVillageMapComponent_div_10_div_20_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r1.f.region.invalid && ctx_r1.f.region.touched, ctx_r1.f.region.valid && (ctx_r1.f.region.dirty || ctx_r1.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c0, ctx_r1.f.branch.invalid && ctx_r1.f.branch.touched, ctx_r1.f.branch.valid && (ctx_r1.f.branch.dirty || ctx_r1.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.branch.errors);
  }
}
function BranchVillageMapComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Un-Map Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_tr_29_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_tr_29_td_11_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const unmap_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.unMapVillCheck($event, unmap_r20.villageId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BranchVillageMapComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BranchVillageMapComponent_tr_29_td_11_Template, 2, 0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unmap_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r3.p - 1) * 5 + i_r21 + 1 ? (ctx_r3.p - 1) * 5 + i_r21 + 1 : i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unmap_r20.districtDto.districtName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unmap_r20.blockDto.blockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unmap_r20.gpDto.gpName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unmap_r20.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.createMode);
  }
}
function BranchVillageMapComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchVillageMapComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.saveunmapVill());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.checkUnmapDataPushPop.villageIdList.length == 0);
  }
}
function BranchVillageMapComponent_ng_template_34_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", state_r39.stateMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", state_r39.stateName, "");
  }
}
function BranchVillageMapComponent_ng_template_34_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " State selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_ng_template_34_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_ng_template_34_div_26_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.v.state.errors.required);
  }
}
function BranchVillageMapComponent_ng_template_34_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", district_r42.districtMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", district_r42.districtName, "");
  }
}
function BranchVillageMapComponent_ng_template_34_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " District selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_ng_template_34_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_ng_template_34_div_36_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r31.v.district.errors.required);
  }
}
function BranchVillageMapComponent_ng_template_34_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", block_r45.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", block_r45.blockName, " ");
  }
}
function BranchVillageMapComponent_ng_template_34_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Block selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_ng_template_34_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_ng_template_34_div_46_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r33.v.block.errors.required);
  }
}
function BranchVillageMapComponent_ng_template_34_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", gp_r48.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", gp_r48.name, " ");
  }
}
function BranchVillageMapComponent_ng_template_34_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BranchVillageMapComponent_ng_template_34_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BranchVillageMapComponent_ng_template_34_div_56_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r35.v.gp.errors.required);
  }
}
function BranchVillageMapComponent_ng_template_34_th_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Map Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_th_73_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.selectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", true)("disabled", !ctx_r36.allDisabledCheck());
  }
}
function BranchVillageMapComponent_ng_template_34_th_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Map Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_th_74_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.selectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", false)("disabled", !ctx_r37.allDisabledCheck());
  }
}
function BranchVillageMapComponent_ng_template_34_tr_76_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_tr_76_td_11_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r60);
      const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.mapVillCheck($event, i_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", true);
  }
}
function BranchVillageMapComponent_ng_template_34_tr_76_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td")(1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_tr_76_td_12_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63);
      const i_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r61.mapVillCheck($event, i_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", false);
  }
}
function BranchVillageMapComponent_ng_template_34_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BranchVillageMapComponent_ng_template_34_tr_76_td_11_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BranchVillageMapComponent_ng_template_34_tr_76_td_12_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const map_r54 = ctx.$implicit;
    const i_r55 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r38.p - 1) * 5 + i_r55 + 1 ? (ctx_r38.p - 1) * 5 + i_r55 + 1 : i_r55 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](map_r54.districtDetailsDto.districtName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](map_r54.blockDetailsDto.blockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](map_r54.gpDetailsDto.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](map_r54.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", map_r54.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", map_r54.isChecked == false);
  }
}
function BranchVillageMapComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 1)(3, "div", 38)(4, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Branch :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 38)(8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "District :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 41)(12, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchVillageMapComponent_ng_template_34_Template_span_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r64.branchVillModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 43)(15, "form", 8)(16, "div", 1)(17, "div", 6)(18, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "State :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_Template_select_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.changeState($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, BranchVillageMapComponent_ng_template_34_option_25_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, BranchVillageMapComponent_ng_template_34_div_26_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 6)(28, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "District :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_Template_select_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r67.changeDistrict($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, BranchVillageMapComponent_ng_template_34_option_35_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, BranchVillageMapComponent_ng_template_34_div_36_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 6)(38, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_Template_select_change_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, BranchVillageMapComponent_ng_template_34_option_45_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, BranchVillageMapComponent_ng_template_34_div_46_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 6)(48, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BranchVillageMapComponent_ng_template_34_Template_select_change_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r69.changeGp($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, BranchVillageMapComponent_ng_template_34_option_55_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, BranchVillageMapComponent_ng_template_34_div_56_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 10)(58, "div", 11)(59, "div", 12)(60, "table", 52)(61, "thead", 53)(62, "tr")(63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "District");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "GP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, BranchVillageMapComponent_ng_template_34_th_73_Template, 5, 2, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, BranchVillageMapComponent_ng_template_34_th_74_Template, 5, 2, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, BranchVillageMapComponent_ng_template_34_tr_76_Template, 13, 7, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 1)(78, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchVillageMapComponent_ng_template_34_Template_button_click_78_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r70.saveMapVills());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0 ", ctx_r6.branchName ? ctx_r6.branchName : ctx_r6.branchNAme, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0 ", ctx_r6.districtName ? ctx_r6.districtName : ctx_r6.districtNAme, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r6.mapVillForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c0, ctx_r6.v.state.invalid && ctx_r6.v.state.touched, ctx_r6.v.state.valid && (ctx_r6.v.state.dirty || ctx_r6.v.state.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.v.state.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](22, _c0, ctx_r6.v.district.invalid && ctx_r6.v.district.touched, ctx_r6.v.district.valid && (ctx_r6.v.district.dirty || ctx_r6.v.district.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.districtList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.v.district.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](25, _c0, ctx_r6.v.block.invalid && ctx_r6.v.block.touched, ctx_r6.v.block.valid && (ctx_r6.v.block.dirty || ctx_r6.v.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.blockList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.v.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c0, ctx_r6.v.gp.invalid && ctx_r6.v.gp.touched, ctx_r6.v.gp.valid && (ctx_r6.v.gp.dirty || ctx_r6.v.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.gpList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.v.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.checkedAllData == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.checkedAllData == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.newArrayOfObj);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r6.disabledMap());
  }
}
class BranchVillageMapComponent {
  constructor(fb, branchVillMapService, httpService, modalService, toaster, confirmationDialogService, sidebarService, http, validationService, router, config) {
    this.fb = fb;
    this.branchVillMapService = branchVillMapService;
    this.httpService = httpService;
    this.modalService = modalService;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.sidebarService = sidebarService;
    this.http = http;
    this.validationService = validationService;
    this.router = router;
    this.regionList = [];
    this.branchList = [];
    this.mappedVillageList = [];
    this.stateList = [];
    this.districtList = [];
    this.blockList = [];
    this.gpList = [];
    this.unmappedVillageList = [];
    this.page = 1;
    this.pageSize = 6;
    this.checkMapDataPushPop = {
      dataAccessDTO: {},
      branchId: '',
      villageIdList: []
    };
    this.checkUnmapDataPushPop = {
      dataAccessDTO: {},
      branchId: '',
      villageIdList: []
    };
    this.newArrayOfObj = [];
    this.checkedAllData = false;
    this.villagesOfBranch = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.role = this.sidebarService.RoleDTOName;
    console.log(this.role);
    this.createForm();
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.branchID = res.branchId;
      this.branchNAme = res.branchName;
      this.districtNAme = res.districtName;
      console.log(res, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
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
        let Dtos = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          branchId: res.branchId
        };
        this.branchVillMapService.flatListVillagesOfBranch(Dtos).subscribe(res => {
          this.mappedVillageList = res.responseObject;
          console.log(this.mappedVillageList, 'mappedVillageList');
        });
      }
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 57 || item.subFunctionMasterId == 58 || item.subFunctionMasterId == 59 || item.subFunctionMasterId == 60)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/branch-villageMap']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 57)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }
  changeRegion(regionId) {
    console.log(regionId);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.branchVillMapService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    this.branchVillageForm.controls.branch.setValue('');
    this.mappedVillageList = [];
    this.checkUnmapDataPushPop.villageIdList = [];
    if (this.branchVillageForm.value.region == '') {
      this.branchVillageForm.controls.branch.setValue('');
      this.mappedVillageList = [];
      this.checkUnmapDataPushPop.villageIdList = [];
    }
  }
  changeBranch(branchId) {
    this.branchId = branchId;
    this.branchName = this.branchList.find(item => item.branchId == this.branchId)?.branchName;
    console.log(this.branchName);
    var district = this.branchList?.find(item => item.branchId == this.branchId)?.districtMasterDto;
    this.districtName = district?.districtName;
    this.districtId = district?.districtMasterId;
    console.log(this.districtName, this.districtId);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.branchVillMapService.flatListVillagesOfBranch(Dto).subscribe(res => {
      this.mappedVillageList = res.responseObject;
      console.log(this.mappedVillageList, 'mappedVillageList');
    });
    this.mappedVillageList = [];
    this.checkUnmapDataPushPop.villageIdList = [];
    if (this.branchVillageForm.value.branch == '') {
      this.mappedVillageList = [];
      this.checkUnmapDataPushPop.villageIdList = [];
    }
  }
  createForm() {
    this.branchVillageForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get f() {
    return this.branchVillageForm.controls;
  }
  mapVillForms(mapVill) {
    this.mapVillForm = this.fb.group({
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  mapVillage(mapVill) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(mapVill, {
      windowClass: 'mapVill'
    });
    this.mapVillForms(mapVill);
    // Api call for viewing state list
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.branchVillMapService.getStateList(obj).subscribe(res => {
      this.stateList = res.responseObject.stateList;
      console.log(this.stateList);
    });
  }
  changeState(stateId) {
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    };
    this.branchVillMapService.getDistrictAndBlockList(obj).subscribe(res => {
      this.districtList = res.responseObject.stateWiseDistrictList;
      console.log(this.districtList);
    });
    this.mapVillForm.controls.district.setValue('');
    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults');
    if (input != null) {
      input.checked = false;
    }
    if (this.mapVillForm.value.state == '') {
      this.mapVillForm.controls.district.setValue('');
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }
  changeDistrict(districtId) {
    console.log(districtId);
    this.blockList = this.districtList.find(block => block.districtMasterId == districtId)?.blockList;
    console.log(this.blockList);
    this.mapVillForm.controls.block.setValue('');
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults');
    if (input != null) {
      input.checked = false;
    }
    if (this.mapVillForm.value.district == '') {
      this.mapVillForm.controls.block.setValue('');
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }
  changeBlock(blockId) {
    console.log(blockId);
    this.gpList = this.blockList.find(gp => gp.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
    this.mapVillForm.controls.gp.setValue('');
    this.newArrayOfObj = [];
    this.checkMapDataPushPop.villageIdList = [];
    const input = document.getElementById('flexCheckDefaults');
    if (input != null) {
      input.checked = false;
    }
    if (this.mapVillForm.value.block == '') {
      this.mapVillForm.controls.gp.setValue('');
      this.newArrayOfObj = [];
      this.checkMapDataPushPop.villageIdList = [];
    }
  }
  changeGp(GPID) {
    console.log(GPID);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      gpMunicipalId: GPID
    };
    this.branchVillMapService.getUnmappedVillagesOfGP(obj).subscribe(res => {
      this.unmappedVillageList = res.responseObject;
      this.newArrayOfObj = this.unmappedVillageList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      console.log(this.unmappedVillageList);
      console.log(this.newArrayOfObj, 'newArrayOfObj');
    });
    this.newArrayOfObj = [];
    this.checkedAllData = false;
    this.checkMapDataPushPop.villageIdList = [];
    if (this.mapVillForm.value.gp == '') {
      this.newArrayOfObj = [];
      this.checkedAllData = false;
      this.checkMapDataPushPop.villageIdList = [];
    }
  }
  get v() {
    return this.mapVillForm.controls;
  }
  branchVillModalDismiss() {
    this.modalReference?.close();
    this.newArrayOfObj = [];
  }
  mapVillCheck(e, i) {
    this.checkedAllData = false;
    var checkboxData = e.target.checked;
    this.checkMapDataPushPop.villageIdList = [];
    if (checkboxData) {
      this.newArrayOfObj[i].isChecked = true;
      var data = this.newArrayOfObj.filter(it => it.isChecked == true);
      if (data.length != this.newArrayOfObj.length) {
        this.checkedAllData = false;
      } else {
        this.checkedAllData = true;
      }
      console.log(this.newArrayOfObj, 'Checked');
    } else {
      this.newArrayOfObj[i].isChecked = false;
      var data = this.newArrayOfObj.filter(it => it.isChecked == true);
      if (data.length != this.newArrayOfObj.length) {
        this.checkedAllData = false;
      } else {
        this.checkedAllData = true;
      }
      console.log(this.newArrayOfObj, 'unchecked');
    }
  }
  selectAll(e) {
    this.checkMapDataPushPop.villageIdList = [];
    this.checkedAllData = false;
    if (e.target.checked == true) {
      this.checkedAllData = true;
      this.newArrayOfObj?.forEach(it => {
        it.isChecked = true;
        console.log(this.newArrayOfObj, 'checked');
      });
    } else {
      this.checkedAllData = false;
      this.newArrayOfObj?.forEach(it => {
        it.isChecked = false;
        console.log(this.newArrayOfObj, 'unchecked');
      });
    }
  }
  disabledMap() {
    let flag = true;
    var data = this.newArrayOfObj?.filter(it => it.isChecked == true);
    if (data?.length == 0) {
      flag = false;
    } else if (!this.newArrayOfObj) {
      flag = false;
    }
    return flag;
  }
  allDisabledCheck() {
    let flag = true;
    if (!this.mapVillForm.value.gp) {
      flag = false;
    } else if (!this.newArrayOfObj) {
      flag = false;
    }
    return flag;
  }
  saveMapVills() {
    console.log('savevillmap');
    if (this.mapVillForm.value.district != this.districtId) {
      this.confirmationDialogService.confirm('', 'You are mapping villages of a different district with the' + ' ' + this.branchName + ' ' + '.').then(() => this.map()).catch(() => '');
    } else {
      this.confirmationDialogService.confirm('', 'Are you sure you want to map selected villages to the' + ' ' + this.branchName + ' ' + '?').then(() => this.map()).catch(() => '');
    }
    console.log(this.mapVillForm.value.district, 'this.mapVillForm.value.district');
    console.log(this.districtId, 'this.districtId');
  }
  map() {
    var data = this.newArrayOfObj.filter(it => it.isChecked == true);
    data.forEach(it => {
      this.checkMapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO, this.checkMapDataPushPop.branchId = this.branchId ? this.branchId : this.branchID, this.checkMapDataPushPop.villageIdList.push({
        villageId: it.villageMasterId
      });
      console.log(this.checkMapDataPushPop, 'finaldata for mapping');
    });
    this.branchVillMapService.mapVillagesToABranch(this.checkMapDataPushPop).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.branchVillModalDismiss();
        this.changeBranch(this.branchId ? this.branchId : this.branchID);
      } else {
        this.showError(res.message);
      }
    });
  }
  unMapVillCheck(e, villId) {
    var checkboxData = e.target.checked;
    if (checkboxData) {
      this.checkUnmapDataPushPop.dataAccessDTO = this.httpService.dataAccessDTO, this.checkUnmapDataPushPop.villageIdList.push({
        villageId: villId
      });
    } else {
      var i = this.checkUnmapDataPushPop.villageIdList.findIndex(list => list.villageId == villId);
      this.checkUnmapDataPushPop.villageIdList.splice(i, 1);
    }
    console.log(this.checkUnmapDataPushPop, 'checkUnmapDataPushPop');
  }
  saveunmapVill() {
    this.confirmationDialogService.confirm('', 'Are you sure you want to unmap selected villages from the' + ' ' + this.branchName + ' ' + '?').then(() => this.unmap()).catch(() => '');
  }
  unmap() {
    this.branchVillMapService.unmapVillagesFromABranch(this.checkUnmapDataPushPop).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId ? this.branchId : this.branchID);
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Branch-Village Map', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Branch-Village Map', {
      timeOut: 3000
    });
  }
}
BranchVillageMapComponent.ɵfac = function BranchVillageMapComponent_Factory(t) {
  return new (t || BranchVillageMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_branch_village_map_service__WEBPACK_IMPORTED_MODULE_0__.BranchVillageMapService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalConfig));
};
BranchVillageMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BranchVillageMapComponent,
  selectors: [["app-branch-village-map"]],
  decls: 36,
  vars: 6,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-group", "col-md"], ["class", "btn btn-primary", "style", "float: right;", 3, "click", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "8%"], [2, "width", "18%"], [2, "width", "25%"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "form-group", "col-md-6"], ["type", "button", "class", " btn btn-primary bttn", 3, "disabled", "click", 4, "ngIf"], ["mapVill", ""], [1, "btn", "btn-primary", 2, "float", "right", 3, "click"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], ["type", "checkbox", "value", "", "id", "flexCheckDefaul", 1, "form-check-input", 3, "change"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], [1, "modal-content"], [1, "modal-header"], [1, "form-group", "col-md-5"], ["for", "branch", 2, "font-weight", "500", "font-size", "1.05rem"], ["for", "", 2, "font-weight", "500", "font-size", "1.05rem"], [1, "col-md-2"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["for", "state"], ["formControlName", "state", 1, "form-select", 3, "ngClass", "change"], ["for", "district"], ["formControlName", "district", 1, "form-select", 3, "ngClass", "change"], ["for", "block"], ["formControlName", "block", 1, "form-select", 3, "ngClass", "change"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed", "text-align", "center"], ["id", "header_fixed"], ["type", "button", 1, "btn", "btn-primary", "bttn", 2, "width", "10%", "margin-left", "650px", 3, "disabled", "click"], ["type", "checkbox", "value", "", "id", "flexCheckDefaults", 1, "form-check-input", 2, "margin-left", "15px", 3, "checked", "disabled", "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "checked", "change"]],
  template: function BranchVillageMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Branch-Village Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BranchVillageMapComponent_button_8_Template, 2, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BranchVillageMapComponent_div_10_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "table", 13)(15, "thead", 14)(16, "tr")(17, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "District");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Block");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "GP");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Village");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, BranchVillageMapComponent_th_27_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, BranchVillageMapComponent_tr_29_Template, 12, 6, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 1)(32, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, BranchVillageMapComponent_button_33_Template, 2, 1, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, BranchVillageMapComponent_ng_template_34_Template, 80, 31, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.branchID || ctx.branchId) && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.branchVillageForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.mappedVillageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.branchID || ctx.branchId) && ctx.createMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 520px;\r\n  \r\n  width: 750px;\r\n  margin-left: -90px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-right: 780px\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 200px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0.75rem;\r\n  border-top: 1px solid #dee2e6;\r\n  border-bottom-right-radius: calc(0.3rem - 1px);\r\n  border-bottom-left-radius: calc(0.3rem - 1px);\r\n  margin-top: -140px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9icmFuY2gtdmlsbGFnZS1tYXAvYnJhbmNoLXZpbGxhZ2UtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsOENBQThDO0VBQzlDLDZDQUE2QztFQUM3QyxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOTBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDc4MHB4XHJcbn1cclxuXHJcbiNoZWFkZXJfZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG50YWJsZSB0Ym9keSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxudGFibGUgdGhlYWQsIHRib2R5IHRyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxuICBtYXJnaW4tdG9wOiAtMTQwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 45703:
/*!*************************************************************************!*\
  !*** ./src/app/modules/branch-village-map/branch-village-map.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchVillageMapModule": () => (/* binding */ BranchVillageMapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _branch_village_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-village-map-routing.module */ 43750);
/* harmony import */ var _branch_village_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-village-map.component */ 40259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class BranchVillageMapModule {}
BranchVillageMapModule.ɵfac = function BranchVillageMapModule_Factory(t) {
  return new (t || BranchVillageMapModule)();
};
BranchVillageMapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BranchVillageMapModule
});
BranchVillageMapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _branch_village_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.BranchVillageMapRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BranchVillageMapModule, {
    declarations: [_branch_village_map_component__WEBPACK_IMPORTED_MODULE_1__.BranchVillageMapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _branch_village_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.BranchVillageMapRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 84404:
/*!**************************************************************************!*\
  !*** ./src/app/modules/branch-village-map/branch-village-map.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchVillageMapService": () => (/* binding */ BranchVillageMapService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class BranchVillageMapService {
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
  flatListVillagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getFlatListOfVillagesOfABranch`, obj);
  }
  getStateList(obj) {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj);
  }
  getDistrictAndBlockList(obj) {
    return this.http.post(`${this.baseURL}district/getListOfDistrictAndBlock`, obj);
  }
  getUnmappedVillagesOfGP(obj) {
    return this.http.post(`${this.baseURL}branchVillageMap/getUnmappedVillagesOfAGp`, obj);
  }
  mapVillagesToABranch(obj) {
    return this.http.post(`${this.baseURL}branchVillageMap/mapVillagesToABranch`, obj);
  }
  unmapVillagesFromABranch(obj) {
    return this.http.post(`${this.baseURL}branchVillageMap/unmapVillages`, obj);
  }
}
BranchVillageMapService.ɵfac = function BranchVillageMapService_Factory(t) {
  return new (t || BranchVillageMapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BranchVillageMapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BranchVillageMapService,
  factory: BranchVillageMapService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_branch-village-map_branch-village-map_module_ts.js.map