"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_admin-user_admin-user_module_ts"],{

/***/ 66111:
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-user/admin-user-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserRoutingModule": () => (/* binding */ AdminUserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_table_view_user_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-table-view/user-table.component */ 56120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _user_table_view_user_table_component__WEBPACK_IMPORTED_MODULE_0__.UserTableComponent
}];
class AdminUserRoutingModule {}
AdminUserRoutingModule.ɵfac = function AdminUserRoutingModule_Factory(t) {
  return new (t || AdminUserRoutingModule)();
};
AdminUserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AdminUserRoutingModule
});
AdminUserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminUserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 663:
/*!*********************************************************!*\
  !*** ./src/app/modules/admin-user/admin-user.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserModule": () => (/* binding */ AdminUserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-routing.module */ 66111);
/* harmony import */ var _user_create_user_create_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create/user-create-form.component */ 88696);
/* harmony import */ var _user_table_view_user_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-table-view/user-table.component */ 56120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);












class AdminUserModule {}
AdminUserModule.ɵfac = function AdminUserModule_Factory(t) {
  return new (t || AdminUserModule)();
};
AdminUserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AdminUserModule
});
AdminUserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminUserModule, {
    declarations: [_user_table_view_user_table_component__WEBPACK_IMPORTED_MODULE_2__.UserTableComponent, _user_create_user_create_form_component__WEBPACK_IMPORTED_MODULE_1__.UserCreateFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _admin_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUserRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule]
  });
})();

/***/ }),

/***/ 88696:
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin-user/user-create/user-create-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreateFormComponent": () => (/* binding */ UserCreateFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);













function UserCreateFormComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", role_r14.roleShortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", role_r14.roleShortName, " ");
  }
}
function UserCreateFormComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Role is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_18_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.userRole.errors.required);
  }
}
function UserCreateFormComponent_div_19_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Region selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_19_div_6_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.multiRegion.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function UserCreateFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select Multiple Region\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ng-multiselect-dropdown", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelectAll", function UserCreateFormComponent_div_19_Template_ng_multiselect_dropdown_onSelectAll_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.onSelectAll($event));
    })("onSelect", function UserCreateFormComponent_div_19_Template_ng_multiselect_dropdown_onSelect_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.onItemSelect($event));
    })("onDeSelect", function UserCreateFormComponent_div_19_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.onDeSelect($event));
    })("onDeSelectAll", function UserCreateFormComponent_div_19_Template_ng_multiselect_dropdown_onDeSelectAll_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.onDeSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UserCreateFormComponent_div_19_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", "Select Multiple Region")("settings", ctx_r2.dropdownSettings)("data", ctx_r2.regionList)("disabled", ctx_r2.disableMultiRegion)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, ctx_r2.f.multiRegion.invalid && ctx_r2.f.multiRegion.touched, ctx_r2.f.multiRegion.valid && (ctx_r2.f.multiRegion.dirty || ctx_r2.f.multiRegion.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.multiRegion.errors);
  }
}
function UserCreateFormComponent_div_20_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", region_r25.regionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", region_r25.regionName, " ");
  }
}
function UserCreateFormComponent_div_20_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Region selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_20_div_9_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.f.region.errors.required);
  }
}
function UserCreateFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserCreateFormComponent_div_20_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UserCreateFormComponent_div_20_option_8_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UserCreateFormComponent_div_20_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, ctx_r3.f.region.invalid && ctx_r3.f.region.touched, ctx_r3.f.region.valid && (ctx_r3.f.region.dirty || ctx_r3.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.region.errors);
  }
}
function UserCreateFormComponent_div_21_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", branch_r31.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", branch_r31.branchName, " ");
  }
}
function UserCreateFormComponent_div_21_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Branch selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_21_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_21_div_9_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.f.branch.errors.required);
  }
}
function UserCreateFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserCreateFormComponent_div_21_Template_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UserCreateFormComponent_div_21_option_8_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UserCreateFormComponent_div_21_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, ctx_r4.f.branch.invalid && ctx_r4.f.branch.touched, ctx_r4.f.branch.valid && (ctx_r4.f.branch.dirty || ctx_r4.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.branch.errors);
  }
}
function UserCreateFormComponent_div_22_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const baseBranch_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", baseBranch_r37.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", baseBranch_r37.branchName, " ");
  }
}
function UserCreateFormComponent_div_22_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Branch selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_22_div_7_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.f.branch.errors.required);
  }
}
function UserCreateFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Base Branch :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserCreateFormComponent_div_22_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.changeBaseBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UserCreateFormComponent_div_22_option_6_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UserCreateFormComponent_div_22_div_7_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c0, ctx_r5.f.baseBranch.invalid && ctx_r5.f.baseBranch.touched, ctx_r5.f.baseBranch.valid && (ctx_r5.f.baseBranch.dirty || ctx_r5.f.baseBranch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.branch.errors);
  }
}
function UserCreateFormComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_31_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserCreateFormComponent_div_31_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.firstName.errors.minlength);
  }
}
function UserCreateFormComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_36_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.middleName.errors.minlength);
  }
}
function UserCreateFormComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_41_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.lastName.errors.minlength);
  }
}
function UserCreateFormComponent_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Login ID / Employee ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_54_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.loginId.errors.required);
  }
}
function UserCreateFormComponent_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Primary Mobile No is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_61_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_61_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_61_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserCreateFormComponent_div_61_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserCreateFormComponent_div_61_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.primaryMobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.primaryMobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.primaryMobile.errors.pattern);
  }
}
function UserCreateFormComponent_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_66_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_66_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserCreateFormComponent_div_66_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.secondaryMobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.secondaryMobile.errors.pattern);
  }
}
function UserCreateFormComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_75_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_75_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UserCreateFormComponent_div_75_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.primaryEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.primaryEmail.errors.email);
  }
}
function UserCreateFormComponent_div_80_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UserCreateFormComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UserCreateFormComponent_div_80_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.secondaryEmail.errors.email);
  }
}
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class UserCreateFormComponent {
  // baseBranchList: Array<any> = [];
  constructor(dialogRef, dialog, data, toaster, fb, validationService, modalService, httpService, http, baselineService) {
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.data = data;
    this.toaster = toaster;
    this.fb = fb;
    this.validationService = validationService;
    this.modalService = modalService;
    this.httpService = httpService;
    this.http = http;
    this.baselineService = baselineService;
    this.regionList = [];
    this.branchList = [];
    this.roleList = [];
    this.dropdownSettings = {};
    this.region = [];
    this.branch = [];
    // branchVillageMapId: any;
    this.regionMultiId = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data, 'Edit');
    this.createForm();
    this.regionList = this.data.regionList;
    console.log(this.regionList);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRoles`, Dto).subscribe(res => {
      this.roleList = res.responseObject;
    });
    if (this.data.createMode) {
      this.userForm.reset();
      this.userForm.get('userRole').enable();
      this.disableMultiRegion = false;
      this.userForm.get('region').enable();
      this.userForm.get('branch').enable();
      this.userForm.get('baseBranch').enable();
    } else {
      if (this.data.userData.activeHouseholdCount == 0 && this.data.userData.activeSsCount == 0) {
        this.userForm.get('userRole').enable();
        this.disableMultiRegion = false;
        this.userForm.get('region').enable();
        this.userForm.get('branch').enable();
        this.userForm.get('baseBranch').enable();
      } else {
        this.userForm.get('userRole').disable();
        this.disableMultiRegion = true;
        this.userForm.get('region').disable();
        this.userForm.get('branch').disable();
        this.userForm.get('baseBranch').disable();
      }
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        userId: this.data.userData.userId
      };
      this.http.post(`${this.httpService.baseURL}user/getUserDetails`, Dto).subscribe(res => {
        // this.branchVillageMapId = res.responseObject.branchList[0].branchName;
        // this.branchList = this.data.branchList;
        this.changeRole(this.data.userData.roleShortName);
        let value = res.responseObject.regionList.filter(item => item.regionMasterId);
        value.forEach(e => {
          let data = e.regionMasterId.toString();
          this.regionMultiId.push(data);
        });
        if (res.responseObject.roleShortName.indexOf('HCO') == -1 && res.responseObject.roleShortName.indexOf('AC') == -1) {
          this.getBaseBranch(this.regionMultiId);
        } else {
          this.changeRegion(res.responseObject.regionList[0]?.regionName);
        }
        // this.changeBranch(res.responseObject.branchList[0]?.branchName);
        this.userForm.patchValue({
          userRole: res.responseObject.roleShortName,
          multiRegion: res.responseObject?.regionList,
          region: res.responseObject.regionList[0]?.regionName,
          branch: res.responseObject.branchList[0]?.branchId,
          baseBranch: res.responseObject?.currentBranchId,
          firstName: res.responseObject.userFirstName,
          middleName: res.responseObject.userMiddleName,
          lastName: res.responseObject.userLastName,
          loginId: res.responseObject.loginId.slice(2),
          primaryMobile: res.responseObject.mobileNumber,
          secondaryMobile: res.responseObject.mobileNumberSecondary,
          primaryEmail: res.responseObject.email.trim(),
          secondaryEmail: res?.responseObject?.emailSecondary?.trim()
        });
        this.userForm.get('baseBranch').patchValue(res.responseObject?.currentBranchId);
        // console.log(res.responseObject.branchList[0]?.branchName)
      });
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'regionMasterId',
      textField: 'regionName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      itemsShowLimit: 3
    };
  }
  createForm() {
    this.userForm = this.fb.group({
      userRole: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      multiRegion: [''],
      region: [null],
      branch: [null],
      baseBranch: [null],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      loginId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      primaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[6789][0-9]{9}")])],
      secondaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      secondaryEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]
    });
  }
  get f() {
    return this.userForm.controls;
  }
  changeRole(value) {
    this.roleMasterId = this.roleList.find(role => role.roleShortName == value)?.roleMasterId;
    if (value?.indexOf('HCO') != -1) {
      this.selectMultiRegion = false;
      this.selectSingleRegion = true;
      this.selectSingleBranch = true;
      this.selectBaseBranch = false;
      this.userForm.get('region').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
      this.userForm.get('branch').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
      this.userForm.get('multiRegion').clearAsyncValidators();
      this.userForm.controls.region.setValue(null);
      this.userForm.controls.branch.setValue(null);
    } else if (value == 'AC') {
      this.selectMultiRegion = false;
      this.selectSingleRegion = true;
      this.selectSingleBranch = false;
      this.selectBaseBranch = true;
      this.userForm.get('region').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
      this.userForm.get('branch').clearAsyncValidators();
      this.userForm.get('multiRegion').clearAsyncValidators();
      this.userForm.controls.region.setValue(null);
    } else {
      this.selectMultiRegion = true;
      this.selectSingleRegion = false;
      this.selectSingleBranch = false;
      this.selectBaseBranch = true;
      this.userForm.get('multiRegion').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
      this.userForm.get('branch').clearAsyncValidators();
      this.userForm.get('region').clearAsyncValidators();
      this.userForm.controls.baseBranch.setValue(null);
    }
    // this.userForm.controls.region.setValue(null);
    // this.userForm.controls.branch.setValue(null);
    // this.userForm.controls.baseBranch.setValue(null);
    this.branchList = [];
  }
  onDeSelect(i) {
    this.regionMultiId = [];
    let value = this.userForm.value.multiRegion.filter(item => item.regionMasterId);
    value.forEach(e => {
      let data = e.regionMasterId.toString();
      this.regionMultiId.push(data);
    });
    this.getBaseBranch(this.regionMultiId);
  }
  onItemSelect(i) {
    this.regionMultiId = [];
    let value = this.userForm.value.multiRegion.filter(item => item.regionMasterId);
    value.forEach(e => {
      let data = e.regionMasterId.toString();
      this.regionMultiId.push(data);
    });
    this.getBaseBranch(this.regionMultiId);
  }
  onSelectAll(i) {
    this.regionMultiId = [];
    i.forEach(e => {
      let data = e.regionMasterId.toString();
      this.regionMultiId.push(data);
    });
    this.getBaseBranch(this.regionMultiId);
  }
  onDeSelectAll(i) {
    this.branchList = [];
  }
  getBaseBranch(regionMultiId) {
    console.log(this.regionMultiId);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionMultiId
    };
    if (this.regionMultiId.length != 0) {
      this.http.post(`${this.httpService.baseURL}branch/getListOfBranchesOfMultiRegion`, Dto).subscribe(res => {
        this.branchList = res?.responseObject;
      });
    }
  }
  changeRegion(region) {
    this.regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    this.region = [{
      'regionMasterId': this.regionId
    }];
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: this.regionId
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    }, error => {
      this.branchList = null;
    });
    if (this.userForm.value.region == '') {
      this.branchList = [];
    }
  }
  changeBranch(value) {
    this.currentBranchId = value;
    this.branch = [{
      'branchId': this.currentBranchId
    }];
  }
  changeBaseBranch(value) {
    this.currentBranchId = value;
  }
  onSave() {
    console.log(this.userForm);
    if (this.userForm.value.multiRegion != null) {
      this.userForm.value.multiRegion.forEach(x => delete x.regionName);
    }
    // this.changeBranch(this.userForm.value.branch);
    this.userForm.markAllAsTouched();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.data.createMode ? 0 : this.data.userData.userId,
      userFirstName: this.userForm.value.firstName ? this.validationService.camelize(this.userForm.value.firstName.trim()) : null,
      userMiddleName: this.userForm.value.middleName ? this.validationService.camelize(this.userForm.value.middleName.trim()) : null,
      userLastName: this.userForm.value.lastName ? this.validationService.camelize(this.userForm.value.lastName.trim()) : null,
      loginId: 'BK' + this.userForm.value.loginId,
      email: this.userForm.value.primaryEmail,
      emailSecondary: this.userForm.value.secondaryEmail,
      mobileNumber: this.userForm.value.primaryMobile,
      mobileNumberSecondary: this.userForm.value.secondaryMobile,
      currentBranchId: this.data.createMode == true ? this.userForm.value.branch || this.userForm.value.baseBranch : this.data.userData.activeHouseholdCount != 0 || this.data.userData.activeSsCount != 0 ? this.data.userData.currentBranchId : this.userForm.value.branch || this.userForm.value.baseBranch,
      roleShortName: this.data.createMode == true ? this.userForm.value.userRole : this.data.userData.activeHouseholdCount != 0 || this.data.userData.activeSsCount != 0 ? this.data.userData.roleShortName : this.userForm.value.userRole,
      roleMasterId: this.roleList.find(role => role.roleShortName == (this.data.createMode == true ? this.userForm.value.userRole : this.data.userData.activeHouseholdCount != 0 || this.data.userData.activeSsCount != 0 ? this.data.userData.roleShortName : this.userForm.value.userRole))?.roleMasterId,
      branchList: this.userForm.value.userRole?.indexOf('HCO') != -1 ? this.branch : null,
      regionList: this.userForm.value.userRole?.indexOf('HCO') != -1 || this.userForm.value.userRole?.indexOf('AC') != -1 ? this.region : this.userForm.value.multiRegion
    };
    console.log(Dto);
    if (this.userForm.valid) {
      this.http.post(`${this.httpService.baseURL}user/saveOrUpdate`, Dto).subscribe(res => {
        if (res.status) {
          this.showSuccess('Success');
          this.dialogRef.close();
        } else {
          this.showError('Error');
        }
      });
    } else {
      this.showError('User Form is not valid ');
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'New User Created', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
UserCreateFormComponent.ɵfac = function UserCreateFormComponent_Factory(t) {
  return new (t || UserCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__.BaselineSurveyService));
};
UserCreateFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UserCreateFormComponent,
  selectors: [["app-user-create-form"]],
  decls: 84,
  vars: 50,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-4"], ["for", "userRole"], [1, "text-danger"], ["formControlName", "userRole", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "firstName"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", "maxlength", "20", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "middleName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Middle Name", "formControlName", "middleName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "lastName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "loginId"], [1, "loginId", 2, "display", "grid", "grid-template-columns", "0.1fr 1fr"], ["type", "text", "formControlName", "loginId", "placeholder", "Enter Username", 1, "form-control", 2, "display", "block", 3, "maxlength", "ngClass", "keypress"], ["for", "primaryMobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "primaryMobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "secondaryMobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "secondaryMobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "primaryEmail"], ["type", "email", "placeholder", "Enter Email", "formControlName", "primaryEmail", 1, "form-control", 3, "ngClass"], ["for", "secondaryEmail"], ["type", "email", "placeholder", "Enter Email", "formControlName", "secondaryEmail", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "multiRegion"], ["formControlName", "multiRegion", 3, "placeholder", "settings", "data", "disabled", "ngClass", "onSelectAll", "onSelect", "onDeSelect", "onDeSelectAll"], ["for", "region"], ["formControlName", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", 1, "form-select", 3, "ngClass", "change"], ["for", "baseBranch"], ["formControlName", "baseBranch", 1, "form-select", 3, "ngClass", "change"]],
  template: function UserCreateFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create User");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserCreateFormComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Role:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserCreateFormComponent_Template_select_change_14_listener($event) {
        return ctx.changeRole($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "-- Select Role --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UserCreateFormComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UserCreateFormComponent_div_18_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UserCreateFormComponent_div_19_Template, 7, 9, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, UserCreateFormComponent_div_20_Template, 10, 7, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UserCreateFormComponent_div_21_Template, 10, 7, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, UserCreateFormComponent_div_22_Template, 8, 7, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6)(25, "div", 15)(26, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "First Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_30_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, UserCreateFormComponent_div_31_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15)(33, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Middle Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_35_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, UserCreateFormComponent_div_36_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15)(38, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Last Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_40_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, UserCreateFormComponent_div_41_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 6)(44, "div", 15)(45, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Login ID / Employee ID:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23)(50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " BK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_52_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, UserCreateFormComponent_div_54_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15)(56, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Primary Mobile No:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_60_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, UserCreateFormComponent_div_61_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 15)(63, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Secondary Mobile No:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function UserCreateFormComponent_Template_input_keypress_65_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, UserCreateFormComponent_div_66_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 6)(69, "div", 15)(70, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Primary Email:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, UserCreateFormComponent_div_75_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 15)(77, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Secondary Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, UserCreateFormComponent_div_80_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserCreateFormComponent_Template_button_click_82_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](26, _c0, ctx.f.userRole.invalid && ctx.f.userRole.touched, ctx.f.userRole.valid && (ctx.f.userRole.dirty || ctx.f.userRole.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.roleList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.userRole.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectMultiRegion);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectSingleRegion);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectSingleBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectBaseBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](29, _c0, ctx.f.firstName.invalid && ctx.f.firstName.touched, ctx.f.firstName.valid && (ctx.f.firstName.dirty || ctx.f.firstName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, ctx.f.middleName.invalid && ctx.f.middleName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.middleName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c1, ctx.f.lastName.invalid && ctx.f.lastName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 6)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](36, _c0, ctx.f.loginId.invalid && ctx.f.loginId.touched, ctx.f.loginId.valid && (ctx.f.loginId.dirty || ctx.f.loginId.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.loginId.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](39, _c0, ctx.f.primaryMobile.invalid && ctx.f.primaryMobile.touched, ctx.f.primaryMobile.valid && (ctx.f.primaryMobile.dirty || ctx.f.primaryMobile.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.primaryMobile.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c1, ctx.f.secondaryMobile.invalid && ctx.f.secondaryMobile.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.secondaryMobile.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](44, _c0, ctx.f.primaryEmail.invalid && ctx.f.primaryEmail.touched, ctx.f.primaryEmail.valid && (ctx.f.primaryEmail.dirty || ctx.f.primaryEmail.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.primaryEmail.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](47, _c0, ctx.f.secondaryEmail.invalid && ctx.f.secondaryEmail.touched, ctx.f.secondaryEmail.valid && (ctx.f.secondaryEmail.dirty || ctx.f.secondaryEmail.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.secondaryEmail.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.MultiSelectComponent],
  styles: [".dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 22px 17px;\r\n}\r\n\r\n.dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 700px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 345px;\r\n}\r\n.btn-link[_ngcontent-%COMP%] {\r\n  text-decoration: inherit;\r\n  display: inline-block;\r\n  margin-left: 50%;\r\n  transform: translate(-50%, 50%);\r\n}\r\n\r\n.loginId[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: 1px 0px 4px 0px;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid black;\r\n  border-top: 1px solid black;\r\n  border-left: 1px solid black;\r\n  padding: 6px 7px 0px 7px;\r\n  border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.loginId[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid black;\r\n  border-top: 1px solid black;\r\n  border-right: 1px solid black;\r\n  margin: 1px 7px 4px -1px;\r\n  border-radius: 0px 5px 5px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi11c2VyL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLDhCQUE4QjtBQUNoQyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIycHggMTdweDtcclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0NXB4O1xyXG59XHJcbi5idG4tbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbn1cclxuXHJcbi5sb2dpbklkID4gcCB7XHJcbiAgbWFyZ2luOiAxcHggMHB4IDRweCAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDZweCA3cHggMHB4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbklkIGlucHV0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMXB4IDdweCA0cHggLTFweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 56120:
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin-user/user-table-view/user-table.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTableComponent": () => (/* binding */ UserTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _user_create_user_create_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-create/user-create-form.component */ 88696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);














function UserTableComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.openCreateUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function UserTableComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r8.regionName, " ");
  }
}
function UserTableComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Region selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserTableComponent_div_21_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f.region.errors.required);
  }
}
function UserTableComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r10.branchName, " ");
  }
}
function UserTableComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Branch selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserTableComponent_div_31_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.f.branch.errors.required);
  }
}
function UserTableComponent_tr_51_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_tr_51_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.openEditUser(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_tr_51_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_tr_51_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.deleteUser(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_tr_51_i_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_tr_51_i_18_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.deactivateUser(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_tr_51_i_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_tr_51_i_19_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.activateUser(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserTableComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, UserTableComponent_tr_51_i_12_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserTableComponent_tr_51_Template_span_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const i_r13 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.resetPasswords(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 30)(15, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UserTableComponent_tr_51_i_17_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, UserTableComponent_tr_51_i_18_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UserTableComponent_tr_51_i_19_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", item_r12.userFirstName, " ", item_r12.userMiddleName, " ", item_r12.userLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r12.loginId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r12.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r12.roleShortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.updateAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.deleteAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r12.userActiveFlag == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r12.userActiveFlag == "N");
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class UserTableComponent {
  constructor(dialog, fb, httpService, http, baselineService, toaster, confirmationDialogService, sidebarService, router) {
    this.dialog = dialog;
    this.fb = fb;
    this.httpService = httpService;
    this.http = http;
    this.baselineService = baselineService;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.sidebarService = sidebarService;
    this.router = router;
    this.regionList = [];
    this.branchList = [];
    this.userList = [];
    this.loader = true;
  }
  ngOnInit() {
    this.createForm();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRegions`, Dto).subscribe(res => {
      this.regionList = res.responseObject;
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(item => item.subFunctionMasterId == 1 || item.subFunctionMasterId == 2 || item.subFunctionMasterId == 3 || item.subFunctionMasterId == 4)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/user']) : this.router.navigate(['/error']);
    this.createAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 1)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  openCreateUser() {
    const dialogRef = this.dialog.open(_user_create_user_create_form_component__WEBPACK_IMPORTED_MODULE_0__.UserCreateFormComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: true,
        regionList: this.regionList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUserList(this.branchId, this.regionId);
    });
  }
  openEditUser(i) {
    const dialogRef = this.dialog.open(_user_create_user_create_form_component__WEBPACK_IMPORTED_MODULE_0__.UserCreateFormComponent, {
      width: '1000px',
      height: '550px',
      data: {
        createMode: false,
        regionList: this.regionList,
        branchList: this.branchList,
        userData: this.userList[i]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUserList(this.branchId, this.regionId);
    });
  }
  createForm() {
    this.userForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get f() {
    return this.userForm.controls;
  }
  changeRegion(region) {
    this.regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: this.regionId
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    }, error => {
      this.branchList = null;
    });
    if (this.userForm.value.region == '') {
      this.branchList = [];
    }
  }
  changeBranch(value) {
    this.branchId = this.branchList?.find(branch => branch.branchName == value)?.branchId;
    this.getUserList(this.branchId, this.regionId);
  }
  getUserList(branchId, regionId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId,
      regionMasterId: regionId
    };
    this.loader = false;
    if (branchId != undefined || regionId != undefined) {
      this.http.post(`${this.httpService.baseURL}user/getListOfAllBranchAndRegionWiseUsers`, Dto).subscribe(res => {
        this.userList = res.responseObject?.branchWiseUserList.concat(res.responseObject?.regionWiseUserList);
        console.log(this.userList);
        this.loader = true;
      }, error => {
        this.showError('Error');
        this.loader = true;
      });
    } else {
      this.loader = true;
    }
  }
  resetPasswords(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId
    };
    this.confirmationDialogService.confirm('', 'Do you want to reset password ?').then(() => {
      this.http.post(`${this.httpService.baseURL}user/resteUserLoginPassword`, Dto).subscribe(res => {
        this.resetPwSuccess('Success');
      });
    }).catch(() => '');
  }
  deleteUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId
    };
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}user/deleteUser`, Dto).subscribe(res => {
        if (this.userList[i].activeHouseholdCount == 0 && this.userList[i].activeSsCount == 0) {
          this.showSuccess('Success');
          this.getUserList(this.branchId, this.regionId);
        } else {
          this.showError('User mapped with Household / SS');
        }
      });
    }).catch(() => '');
  }
  deactivateUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId
    };
    this.http.post(`${this.httpService.baseURL}user/deactivateUser`, Dto).subscribe(res => {
      this.getUserList(this.branchId, this.regionId);
    });
  }
  activateUser(i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      userId: this.userList[i].userId
    };
    this.http.post(`${this.httpService.baseURL}user/activateUser`, Dto).subscribe(res => {
      this.getUserList(this.branchId, this.regionId);
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'User Deleted', {
      timeOut: 3000
    });
  }
  resetPwSuccess(message) {
    this.toaster.success(message, 'Password Reset Successs', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
UserTableComponent.ɵfac = function UserTableComponent_Factory(t) {
  return new (t || UserTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
UserTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UserTableComponent,
  selectors: [["app-user-table"]],
  decls: 52,
  vars: 16,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "add_button", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [1, "add_button"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-address-card-o"], [1, "invalid-feedback"], [4, "ngIf"], [2, "padding", "0px 0px 0px 32px"], ["class", "fas fa-edit", "title", "Edit User", 3, "click", 4, "ngIf"], ["title", "Reset Password", 1, "fa-passwd-reset", "fa-stack", 3, "click"], [1, "fa", "fa-undo", "fa-stack-2x"], [1, "fa", "fa-lock", "fa-stack-1x"], ["class", "fas fa-trash", "title", "Delete User", 3, "click", 4, "ngIf"], ["class", "fa fa-unlock fa-lg", "title", "Want to deactivate ?", 3, "click", 4, "ngIf"], ["class", "fa fa-lock fa-lg activate", "title", "Want to activate ?", 3, "click", 4, "ngIf"], ["title", "Edit User", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete User", 1, "fas", "fa-trash", 3, "click"], ["title", "Want to deactivate ?", 1, "fa", "fa-unlock", "fa-lg", 3, "click"], ["title", "Want to activate ?", 1, "fa", "fa-lock", "fa-lg", "activate", 3, "click"]],
  template: function UserTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, UserTableComponent_div_8_Template, 4, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 8)(11, "div", 2)(12, "div", 9)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserTableComponent_Template_select_change_17_listener($event) {
        return ctx.changeRegion($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, UserTableComponent_option_20_Template, 2, 1, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UserTableComponent_div_21_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 9)(23, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Branch :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserTableComponent_Template_select_change_27_listener($event) {
        return ctx.changeBranch($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "-- Select Branch --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UserTableComponent_option_30_Template, 2, 1, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UserTableComponent_div_31_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "table", 21)(36, "thead")(37, "tr")(38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Login Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Mobile No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, UserTableComponent_tr_51_Template, 20, 11, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.createAccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.userForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](13, _c0, ctx.f.branch.invalid && ctx.f.branch.touched, ctx.f.branch.valid && (ctx.f.branch.dirty || ctx.f.branch.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.branch.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.userList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".fa-passwd-reset[_ngcontent-%COMP%]    > .fa-lock[_ngcontent-%COMP%]  {\r\n    font-size: 0.85rem;\r\n  }\r\n\r\n.fa-passwd-reset[_ngcontent-%COMP%]:hover{\r\n    color: #70caf7 !important;\r\n    cursor: pointer;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.fa-unlock[_ngcontent-%COMP%]:hover{\r\n  color: #337676 !important;\r\n  cursor: pointer;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.activate[_ngcontent-%COMP%]:hover{\r\n  color: #337676 !important;\r\n  cursor: pointer;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.add_button[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi11c2VyL3VzZXItdGFibGUtdmlldy91c2VyLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXBhc3N3ZC1yZXNldCA+IC5mYS1sb2NrICB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG5cclxuLmZhLXBhc3N3ZC1yZXNldDpob3ZlcntcclxuICAgIGNvbG9yOiAjNzBjYWY3ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uZmEtdW5sb2NrOmhvdmVye1xyXG4gIGNvbG9yOiAjMzM3Njc2ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5hY3RpdmF0ZTpob3ZlcntcclxuICBjb2xvcjogIzMzNzY3NiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4uYWRkX2J1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin-user_admin-user_module_ts.js.map