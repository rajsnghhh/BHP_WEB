"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_baseline-survey_baseline-survey_module_ts"],{

/***/ 76345:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-create/baseline-create.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineCreateComponent": () => (/* binding */ BaselineCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../location/location.component */ 35832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseline-survey.service */ 66200);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);














const _c0 = ["aadhaarId"];
function BaselineCreateComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Family selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_31_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.f.family.errors.required);
  }
}
function BaselineCreateComponent_div_32_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total Number of Family is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_32_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_32_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r36.f.totalFamily.errors.required);
  }
}
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function BaselineCreateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total Family:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_32_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.validationService.onlyInteger($event));
    })("keydown", function BaselineCreateComponent_div_32_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.restrictZero($event));
    })("keyup", function BaselineCreateComponent_div_32_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.familyNo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_32_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r1.f.totalFamily.invalid && ctx_r1.f.totalFamily.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f.totalFamily.errors);
  }
}
function BaselineCreateComponent_div_33_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_33_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_33_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r42.f.households.errors.required);
  }
}
const _c2 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function BaselineCreateComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_33_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r44.validationService.onlyInteger($event));
    })("keydown", function BaselineCreateComponent_div_33_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.restrictZero($event));
    })("keyup", function BaselineCreateComponent_div_33_Template_input_keyup_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r47.zeroMembers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_33_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c2, ctx_r2.f.households.invalid && ctx_r2.f.households.touched, ctx_r2.f.households.valid && (ctx_r2.f.households.dirty || ctx_r2.f.households.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f.households.errors);
  }
}
function BaselineCreateComponent_div_34_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_34_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.f.households.errors.required);
  }
}
function BaselineCreateComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_34_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.validationService.onlyInteger($event));
    })("keydown", function BaselineCreateComponent_div_34_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.restrictZero($event));
    })("keyup", function BaselineCreateComponent_div_34_Template_input_keyup_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r53.checkFamily());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_34_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r3.f.households.invalid && ctx_r3.f.households.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.f.households.errors);
  }
}
function BaselineCreateComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_45_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_45_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.f.firstName.errors.minlength);
  }
}
function BaselineCreateComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_50_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.f.middleName.errors.minlength);
  }
}
function BaselineCreateComponent_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_55_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.lastName.errors.minlength);
  }
}
function BaselineCreateComponent_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_62_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.f.age.errors.required);
  }
}
function BaselineCreateComponent_div_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Husband/Guardian\u2019s Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_70_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_70_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_70_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.f.husbandName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.f.husbandName.errors.minlength);
  }
}
function BaselineCreateComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_75_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_75_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_75_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.f.mobile.errors.pattern);
  }
}
function BaselineCreateComponent_option_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r63.identityCardTypesMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r63.name, " ");
  }
}
function BaselineCreateComponent_div_83_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " AADHAAR CARD Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_83_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " AADHAAR CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_83_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_83_div_7_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_83_div_7_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r66.f.aadhar.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r66.f.aadhar.errors.minlength || ctx_r66.f.aadhar.errors.pattern);
  }
}
function BaselineCreateComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "AADHAAR CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function BaselineCreateComponent_div_83_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.aadharcardValidation($event));
    })("keypress", function BaselineCreateComponent_div_83_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.validationService.onlyIntegerAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BaselineCreateComponent_div_83_div_7_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c2, ctx_r11.f.aadhar.invalid && ctx_r11.f.aadhar.touched, ctx_r11.f.aadhar.valid && (ctx_r11.f.aadhar.dirty || ctx_r11.f.aadhar.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.f.aadhar.errors);
  }
}
function BaselineCreateComponent_div_84_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PAN Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_84_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " PAN Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_84_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_84_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_84_div_6_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r72.f.pan.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r72.f.pan.errors.minlength || ctx_r72.f.pan.errors.pattern);
  }
}
function BaselineCreateComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "PAN CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_84_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.validationService.charnum($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_84_div_6_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c2, ctx_r12.f.pan.invalid && ctx_r12.f.pan.touched, ctx_r12.f.pan.valid && (ctx_r12.f.pan.dirty || ctx_r12.f.pan.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.f.pan.errors);
  }
}
function BaselineCreateComponent_div_85_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " VOTER CARD Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_85_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " VOTER CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_85_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_85_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BaselineCreateComponent_div_85_div_6_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r77.f.voter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r77.f.voter.errors.pattern);
  }
}
function BaselineCreateComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " VOTER CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_85_div_6_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c2, ctx_r13.f.voter.invalid && ctx_r13.f.voter.touched, ctx_r13.f.voter.valid && (ctx_r13.f.voter.dirty || ctx_r13.f.voter.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.f.voter.errors);
  }
}
function BaselineCreateComponent_option_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r80.religionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r80.religionMasterDescription, " ");
  }
}
function BaselineCreateComponent_div_96_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Religion is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_96_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.f.religion.errors.required);
  }
}
function BaselineCreateComponent_option_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r83.casteTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r83.casteTypeDescription, " ");
  }
}
function BaselineCreateComponent_div_106_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Caste is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_106_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.f.caste.errors.required);
  }
}
function BaselineCreateComponent_option_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r86.educationalQualificationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r86.qualification, " ");
  }
}
function BaselineCreateComponent_option_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r88.monthlyIncomeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r88.incomeRange, " ");
  }
}
function BaselineCreateComponent_option_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r90.occupationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r90.occupationDescription, " ");
  }
}
function BaselineCreateComponent_div_135_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Male is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_135_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r21.f.fmale.errors.required);
  }
}
function BaselineCreateComponent_div_142_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Female is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_142_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r22.f.ffemale.errors.required);
  }
}
function BaselineCreateComponent_div_151_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Senior Citizen is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_151_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r23.f.fsenior.errors.required);
  }
}
function BaselineCreateComponent_label_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Bandhan Bank Micro Group :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BaselineCreateComponent_label_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Micro Group :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BaselineCreateComponent_div_163_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Micro Group is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_163_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.f.bbMicro.errors.required);
  }
}
function BaselineCreateComponent_div_178_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pregnancy selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_178_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.f.pregnancy.errors.required);
  }
}
function BaselineCreateComponent_div_208_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Children count is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BaselineCreateComponent_div_208_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BaselineCreateComponent_div_208_div_6_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r97.f.child.errors.required);
  }
}
function BaselineCreateComponent_div_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " How many children do you have?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_div_208_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.validationService.onlyInteger($event));
    })("keydown", function BaselineCreateComponent_div_208_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r101.restrictZero($event));
    })("keyup", function BaselineCreateComponent_div_208_Template_input_keyup_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r100);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.checkChildren());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BaselineCreateComponent_div_208_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c2, ctx_r28.f.child.invalid && ctx_r28.f.child.touched, ctx_r28.f.child.valid && (ctx_r28.f.child.dirty || ctx_r28.f.child.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.f.child.errors);
  }
}
function BaselineCreateComponent_div_209_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Do you have any child below 18 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 61)(6, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_209_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r103.childBelow18($event));
    })("click", function BaselineCreateComponent_div_209_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r105.radioValueCheck(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_209_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r106.childBelow18($event));
    })("click", function BaselineCreateComponent_div_209_Template_input_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r107.radioValueCheck(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r29.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", !ctx_r29.showChildDetails);
  }
}
function BaselineCreateComponent_div_210_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Do you have children below 5 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 61)(6, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_210_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r109);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r108.childBelow5($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_210_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r109);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r110.childBelow5($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r30.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", !ctx_r30.showChildDetails);
  }
}
function BaselineCreateComponent_div_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "In the case of the last delivery, where did it has been taken place?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 61)(6, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_211_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r112);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r111.institutionallDelivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_211_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r112);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r113.institutionallDelivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function BaselineCreateComponent_div_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Are you breastfeeding your child aged below 2 years till now?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 61)(6, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_213_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r114.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_213_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r115);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r116.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 61)(15, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_div_213_Template_input_change_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r115);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r117.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " \u00A0\u00A0N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function BaselineCreateComponent_ng_template_224_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_ng_template_224_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r122.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function BaselineCreateComponent_ng_template_224_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r124.validationService.titleCase($event));
    })("ngModelChange", function BaselineCreateComponent_ng_template_224_tr_25_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const i_r121 = restoredCtx.index;
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r125.childDetails.childInfo[i_r121].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function BaselineCreateComponent_ng_template_224_tr_25_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const i_r121 = restoredCtx.index;
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r126.childDetails.childInfo[i_r121].dob = $event);
    })("keydown", function BaselineCreateComponent_ng_template_224_tr_25_Template_input_keydown_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r127.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function BaselineCreateComponent_ng_template_224_tr_25_Template_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const i_r121 = restoredCtx.index;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r128.childDetails.childInfo[i_r121].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td")(16, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_224_tr_25_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r123);
      const i_r121 = restoredCtx.index;
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r129.removeNewChild(i_r121));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r121 = ctx.index;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].dob)("min", ctx_r119.minDate)("max", ctx_r119.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r119.childDetails.childInfo[i_r121].sex);
  }
}
function BaselineCreateComponent_ng_template_224_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "div", 2)(3, "div", 109)(4, "h4", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Child Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 111)(7, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_224_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r131);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r130.addNewChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 113)(9, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_224_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r131);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r132.childModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 115)(12, "div", 116)(13, "table", 117)(14, "thead")(15, "tr", 118)(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, BaselineCreateComponent_ng_template_224_tr_25_Template, 18, 5, "tr", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_ng_template_224_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r131);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r133.saveChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r34.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r34.checkChildDisabled());
  }
}
class BaselineCreateComponent {
  constructor(fb, modalService, baselineService, httpService, validationService, toaster, sidebarService, router) {
    this.fb = fb;
    this.modalService = modalService;
    this.baselineService = baselineService;
    this.httpService = httpService;
    this.validationService = validationService;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.router = router;
    this.haveChildren = 'N';
    this.breastfeeding = 'NA';
    this.today = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.addSum = 0;
    this.showAge = 0;
    this.ageCheck = 0;
    this.showChildDetails = false;
    this.childDetails = {
      childInfo: []
    };
    this.loader = true;
  }
  ngDoCheck() {
    this.timeToTentativeEndDate = this.baselineService.timeToTentativeEndDate;
  }
  ngOnInit() {
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 65 || item.subFunctionMasterId == 66 || item.subFunctionMasterId == 67 || item.subFunctionMasterId == 68)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? this.router.navigate(['/Baseline-Survey/create']) : this.router.navigate(['/error']);
    this.getMinDate();
    this.createForm();
    this.childDetails.childInfo = [];
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });
    let obj = this.httpService.dataAccessDTO;
    // API call for getting caste
    this.baselineService.getCasteView(obj).subscribe(response => {
      this.casteList = response.responseObject;
      // console.log(this.casteList);
    });
    //API call for getting education details
    this.baselineService.getEducationDetails(obj).subscribe(response => {
      this.educationList = response.responseObject;
      // console.log(this.educationList);
    });
    //API call for getting monthlyIncomeDetails
    this.baselineService.monthlyIncomeDetails(obj).subscribe(response => {
      this.householdIncomeDetails = response.responseObject;
      // console.log(this.householdIncomeDetails);
    });
    //API call for getting religionDetails
    this.baselineService.religionDetails(obj).subscribe(response => {
      this.religionDetails = response.responseObject;
      // console.log(this.religionDetails);
    });
    //API call for getting occupationDetails
    this.baselineService.occupationDetails(obj).subscribe(response => {
      this.occupationDetails = response.responseObject;
      // console.log(this.occupationDetails);
    });
    //API call for getting idCardDetails
    this.baselineService.getIdCardDetails(obj).subscribe(response => {
      this.cardDetails = response.responseObject;
      // console.log(this.cardDetails);
    });
  }

  aadharcardValidation(event) {
    let data;
    if (event.keyCode !== 8 && event.keyCode !== 46) {
      data = this.aadhaarId.nativeElement.value.replace(/[^0-9]/g, '').replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    } else {
      data = this.aadhaarId.nativeElement.value;
    }
    let q = this.aadhaarId.nativeElement;
    q.value = data;
    return data;
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
    this.baselineSurvey = this.fb.group({
      family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      totalFamily: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      households: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])],
      middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])],
      age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)])],
      husbandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3)])],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[6789][0-9]{9}")])],
      idtype: [''],
      aadhar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("([A-Z]{2}\\/[0-9]{2}\\/[0-9]{3}\\/[0-9]{6})|([A-Z]{3}[0-9]{7})")])],
      religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      caste: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      education: [''],
      household: [''],
      occupation: [''],
      fmale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      ffemale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      fsenior: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      bbMicro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      pregnancy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      sanitary: this.haveSanitaryLatrine,
      haveChildren: this.haveChildren,
      child: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      childbelow18: this.childbelow18,
      childbelow5: this.childbelow5,
      institutional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      breastFeeding: this.breastfeeding
    });
  }
  get f() {
    return this.baselineSurvey.controls;
  }
  changesanitary(e) {
    this.haveSanitaryLatrine = e.target.value;
  }
  havesChildren(e) {
    this.haveChildren = e.target.value;
    this.baselineSurvey.controls.child.setValue('');
    this.baselineSurvey.controls.childbelow18.setValue('');
    this.showChildDetails = false;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];
  }
  childBelow18(e) {
    this.childbelow18 = e.target.value;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];
  }
  childBelow5(e) {
    this.childbelow5 = e.target.value;
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
  }
  institutionallDelivery(e) {
    this.institutionalDelivery = e.target.value;
  }
  breastFeeding(e) {
    this.breastfeeding = e.target.value;
  }
  saveBaselineCreateBack() {
    window.history.go(-1);
  }
  resetBaselineCreate() {
    this.idTypeField = 0;
    this.familyField = '';
    this.haveSanitaryLatrine = 'N';
    this.haveChildren = 'N';
    this.childbelow18 = '';
    this.childbelow5 = '';
    this.breastfeeding = 'NA';
    this.institutionalDelivery = '';
    this.showChildDetails = false;
    this.createForm();
    this.locationComponent.createForm();
    this.addSum = 0;
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];
  }
  saveMoreBaselineCreate() {
    console.log(this.baselineSurvey.value);
    let item = this.baselineSurvey.value;
    let idValue = '';
    let tfamily;
    item.firstName = this.validationService.camelize(this.baselineSurvey.value.firstName.trim());
    item.middleName = this.validationService.camelize(this.baselineSurvey.value.middleName.trim());
    item.lastName = this.validationService.camelize(this.baselineSurvey.value.lastName.trim());
    item.husbandName = this.validationService.camelize(this.baselineSurvey.value.husbandName.trim());
    this.childDetails.childInfo.forEach(item => {
      if (item.childName == '') {
        this.childDetails.childInfo = [];
      }
      item.childName = this.validationService.camelize(item.childName.trim());
    });
    if (item.idtype == 1) {
      idValue = item.aadhar;
    } else if (item.idtype == 2) {
      idValue = item.pan;
    } else if (item.idtype == 3) {
      idValue = item.voter;
    }
    if (this.familyField == 'J') {
      tfamily = item.totalFamily;
    } else if (this.familyField == 'S') {
      tfamily = 1;
    } else {
      tfamily = '';
    }
    if (item.idtype != 1 || item.idtype != 2 || item.idtype != 3) {
      this.idCard = [];
    }
    if (item.idtype == 1 || item.idtype == 2 || item.idtype == 3) {
      this.idCard = [{
        familyIdentityCardMapId: 0,
        identityCardTypesMasterDTO: {
          identityCardTypesMasterId: item.idtype,
          name: this.cardDetails.filter(x => x.identityCardTypesMasterId == item.idtype)[0]?.name
        },
        number: idValue
      }];
    }
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName
        },
        branchVillageMapId: this.sidebarService.branchVillageMapId,
        familyDetailDTOList: [{
          age: item.age,
          bbMicroGroupMembership: item.bbMicro,
          casteTypeMasterDTO: {
            casteTypeDescription: this.casteList.filter(x => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription,
            casteTypeMasterId: item.caste
          },
          childDetailDTOList: this.childDetails.childInfo,
          childrenBelow18: item.childbelow18 ? item.childbelow18 : 'NA',
          childrenBelow5: item.childbelow5 ? item.childbelow5 : 'NA',
          createdOn: 'string',
          educationalQualificationMasterDTO: {
            educationalQualificationMasterId: item.education ? item.education : 0,
            qualification: this.educationList.filter(x => x.educationalQualificationMasterId == item.education)[0]?.qualification ? this.educationList.filter(x => x.educationalQualificationMasterId == item.education)[0]?.qualification : ''
          },
          existingChildCount: 0,
          familyDetailId: 0,
          familyDetailRemaingStatusDTO: {
            createdFamilyCount: 0,
            createdFamilyMambersCount: 0,
            totalFamilyCount: 0,
            totalFamilyMambersCount: 0
          },
          familyNumber: "string",
          familyType: item.family,
          firstName: item.firstName,
          haveChild: item.haveChildren,
          haveSanitaryLatrine: item.sanitary,
          householdDetailsId: 0,
          husbandOrGuardianName: item.husbandName,
          identityCardDTOList: this.idCard,
          institutionalDelivery: item.institutional ? item.institutional : 'NA',
          lactetingMother: item.breastFeeding,
          lastName: item.lastName,
          middleName: item.middleName,
          mobileNumber: item.mobile,
          monthlyIncomeMasterDTO: {
            incomeRange: this.householdIncomeDetails.filter(x => x.monthlyIncomeMasterId == item.household)[0]?.incomeRange ? this.householdIncomeDetails.filter(x => x.monthlyIncomeMasterId == item.household)[0]?.incomeRange : '',
            monthlyIncomeMasterId: item.household ? item.household : 0
          },
          occupationMasterDTO: {
            occupationDescription: this.occupationDetails.filter(x => x.occupationMasterId == item.occupation)[0]?.occupationDescription ? this.occupationDetails.filter(x => x.occupationMasterId == item.occupation)[0]?.occupationDescription : '',
            occupationMasterId: item.occupation ? item.occupation : 0
          },
          pregnantWoman: item.pregnancy,
          religionMasterDTO: {
            religionMasterDescription: this.religionDetails.filter(x => x.religionMasterId == item.religion)[0]?.religionMasterDescription,
            religionMasterId: item.religion
          },
          status: "A",
          totaFamilyMemberFemales: item.ffemale,
          totaFamilyMemberMales: item.fmale,
          totaFamilyMemberSrcitizen: item.fsenior,
          totalNumberOfChildren: item.child ? item.child : 0
        }],
        familyType: item.family,
        houseHoldNumber: "string",
        householdDetailId: 0,
        numberOfFamily: tfamily,
        status: "A",
        swasthyaSahayikaDTO: {
          name: this.sidebarService.swasthyaSahayikaName ? this.sidebarService.swasthyaSahayikaName : '',
          swasthyaSahayikaId: parseInt(this.sidebarService.swasthyaSahayikaId) ? parseInt(this.sidebarService.swasthyaSahayikaId) : 0
        },
        totalMembers: item.households
      }
    };
    console.log(postBody);
    if (!this.locationComponent.locationForm.value.block) {
      this.showError('Please Select Block');
      return;
    }
    if (!this.locationComponent.locationForm.value.gp) {
      this.showError('Please Select GP');
      return;
    }
    if (!this.locationComponent.locationForm.value.gram) {
      this.showError('Please Select Village');
      return;
    }
    if (!this.baselineSurvey.value.family) {
      this.showError('Please Select Family Type');
      return;
    }
    if (this.familyField === 'J') {
      if (!this.baselineSurvey.value.totalFamily) {
        this.showError('Please Enter Total Number of Family');
        return;
      } else if (this.baselineSurvey.value.totalFamily < 2) {
        this.showError('Joint Family will be minimum two');
        return;
      }
    }
    if (!this.baselineSurvey.value.households) {
      this.showError('Please Enter Total Member of Household (All Family)');
      return;
    }
    if (this.familyField === 'J') {
      if (this.baselineSurvey.value.households) {
        let totalHousehold = 0;
        let totalFamily = 0;
        let item = this.baselineSurvey.value;
        if (item.totalFamily != '' && item.totalFamily != undefined) {
          totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
          totalHousehold = parseInt(item.households);
        }
        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
          this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
          return;
        }
      }
    }
    if (!this.baselineSurvey.value.firstName) {
      this.showError('First Name should not be blank');
      return;
    } else if (this.baselineSurvey.value.firstName.length < 3) {
      this.showError('First Name should be at least 3 char long');
      return;
    }
    if (this.baselineSurvey.value.middleName.length) {
      if (this.baselineSurvey.value.middleName.length < 3) {
        this.showError('Middle Name should be at least 3 char long');
        return;
      }
    }
    if (this.baselineSurvey.value.lastName.length) {
      if (this.baselineSurvey.value.lastName.length < 3) {
        this.showError('Last Name should be at least 3 char long');
        return;
      }
    }
    if (!this.baselineSurvey.value.age) {
      this.showError('Age should not be blank');
      return;
    }
    if (!this.baselineSurvey.value.husbandName) {
      this.showError('Husband Name should not be blank');
      return;
    } else if (this.baselineSurvey.value.husbandName.length < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }
    if (this.baselineSurvey.value.mobile.length) {
      if (this.baselineSurvey.value.mobile.length != 10) {
        this.showError('Mobile Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(this.baselineSurvey.value.mobile.substr(0, 1));
        // console.log(startChar);
        if (startChar < 6) {
          this.showError('Mobile Number must start from 6-9');
          return;
        }
      }
    }
    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 1) {
        if (!this.baselineSurvey.value.aadhar) {
          this.showError('Please Enter Aadhaar Card No.');
          return;
        }
        var regexp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
        var x = this.baselineSurvey.value.aadhar;
        if (!regexp.test(x)) {
          this.showError('Invalid Aadhaar Card No!');
          return;
        }
      }
    }
    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 2) {
        if (!this.baselineSurvey.value.pan) {
          this.showError('Please Enter PAN Card No');
          return;
        }
        var regexp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        var x = this.baselineSurvey.value.pan;
        if (!regexp.test(x)) {
          this.showError('Invalid Pan Card No!');
          return;
        }
      }
    }
    if (this.baselineSurvey.value.idtype) {
      if (this.idTypeField == 3) {
        if (!this.baselineSurvey.value.voter) {
          this.showError('Please Enter Voter Card No');
          return;
        }
        if (this.f.voter?.errors?.pattern) {
          this.showError('Invalid Voter Card No!');
          return;
        }
        // var regexp = /^([A-Z]){3}([0-9]){7}?$/;
        //     var x = this.baselineSurvey.value.voter;
        //     if (!regexp.test(x)) {
        //       this.showError('Invalid Voter Card No!');
        //       return;
        //     }
      }
    }

    if (!this.baselineSurvey.value.religion) {
      this.showError('Please select Religion');
      return;
    }
    if (!this.baselineSurvey.value.caste) {
      this.showError('Please select Caste');
      return;
    }
    if (!this.baselineSurvey.value.fmale) {
      this.showError('Please Enter Total Family Member Male');
      return;
    }
    if (!this.baselineSurvey.value.ffemale) {
      this.showError('Please Enter Total Family Member Female');
      return;
    }
    if (!this.baselineSurvey.value.fsenior) {
      this.showError('Please Enter Total Family Member Senior Citizen');
      return;
    }
    if (!this.baselineSurvey.value.bbMicro) {
      this.showError('Please select Micro Group');
      return;
    }
    if (!this.baselineSurvey.value.pregnancy) {
      this.showError('Please select Pregnancy');
      return;
    }
    if (this.baselineSurvey.value.haveChildren == 'Y') {
      if (!this.baselineSurvey.value.child) {
        this.showError('Please enter children count');
        return;
      }
    }
    if (this.baselineSurvey.value.haveChildren == 'Y') {
      if (!this.baselineSurvey.value.childbelow18) {
        this.showError('Please select child below 18 years');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow18 == 'Y') {
      if (!this.baselineSurvey.value.childbelow5) {
        this.showError('Please select child below 5 years');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      if (!this.baselineSurvey.value.institutional) {
        this.showError('Please select institutional delivery');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      if (!this.baselineSurvey.value.breastFeeding) {
        this.showError('Please select breastfeeding');
        return;
      }
    }
    if (this.baselineSurvey.value.haveChildren == 'N') {
      this.baselineSurvey.value.child = 0;
    }
    this.childDetails.childInfo.forEach((item, index) => {
      console.log(this.childDetails.childInfo);
      this.ageCheck = item.dob;
      if (this.ageCheck) {
        const convertAge = new Date(this.ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.childDetails.childInfo[index].showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
        console.log(this.childDetails.childInfo[index].showAge);
      }
    });
    if (this.baselineSurvey.value.childbelow18 == 'Y' || this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N' || this.baselineSurvey.value.childbelow5 == 'Y') {
      if (this.childDetails.childInfo.length == 0) {
        this.showError('Please add child details');
        return;
      }
    }
    // if (this.baselineSurvey.value.childbelow18 == 'Y') {
    //   if (this.showAge > 18) {
    //     this.showError('Please add a child below 18 years');
    //     return;
    //   }
    // }
    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      let isvalid = 0;
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 5) {
          isvalid += 1;
        }
      });
      if (isvalid == 0) {
        this.showError('Please add a child below 5 years');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow18 == 'Y' && this.baselineSurvey.value.childbelow5 == 'N') {
      let isvalid = 0;
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 5) {
          isvalid += 1;
        }
      });
      if (isvalid > 0) {
        this.showError('You can not add child below 5 years');
        return;
      }
    }
    if (this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N') {
      let isvalid = 0;
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 2) {
          isvalid += 1;
        }
      });
      if (isvalid == 0) {
        this.showError('Please add a child below 2 years');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow5 == 'Y' && this.baselineSurvey.value.breastFeeding == 'NA') {
      let isvalid = 0;
      this.childDetails.childInfo.forEach((item, index) => {
        if (this.childDetails.childInfo[index].showAge <= 2) {
          isvalid += 1;
        }
      });
      if (isvalid > 0) {
        this.showError('You can not add child below 2 years');
        return;
      }
    }
    if (this.baselineSurvey.value.child < this.childDetails.childInfo.length) {
      this.showError(' Entered child data should not be more than children count');
      return;
    }
    let maleData = this.childDetails.childInfo.filter(x => x.sex == 'M');
    // console.log(maleData.length);
    let femaleData = this.childDetails.childInfo.filter(x => x.sex == 'F');
    // console.log(femaleData.length);
    if (this.baselineSurvey.value.fmale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      return;
    }
    if (this.baselineSurvey.value.ffemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      return;
    }
    this.baselineService.saveBaselineSurvey(postBody).subscribe(response => {
      console.log(response);
      if (response.message == "Success") {
        this.showSuccess(response.message);
        this.resetBaselineCreate();
      } else {
        this.showError(response.message);
      }
    });
  }
  openModal(child) {
    this.modalContent = '';
    this.modalReference = this.modalService.open(child, {
      windowClass: 'Child-Create-ModalClass'
    });
  }
  addNewChild() {
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      createdOn: 'string',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });
  }
  childModalDismiss() {
    this.modalReference?.close();
  }
  removeNewChild(i) {
    this.childDetails.childInfo.splice(i, 1);
  }
  restrictZero(event) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }
  zeroFemale() {
    if (this.baselineSurvey.value.ffemale.startsWith(0)) {
      this.showError('Female count should not be zero');
      this.baselineSurvey.controls.ffemale.setValue('');
      return;
    }
  }
  zeroAge() {
    if (this.baselineSurvey.value.age.startsWith(0)) {
      this.showError('Age should not be zero');
      this.baselineSurvey.controls.age.setValue('');
      return;
    }
  }
  zeroMembers() {
    if (this.baselineSurvey.value.households.startsWith(0)) {
      this.showError('Members should not be zero');
      this.baselineSurvey.controls.households.setValue('');
      return;
    }
  }
  familyCountChecking() {
    let totalMale = 0;
    let totalFemale = 0;
    let totalsenior = 0;
    let item = this.baselineSurvey.value;
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }
    if (item.fsenior != '' && item.fsenior != undefined) {
      totalsenior = parseInt(item.fsenior);
    }
    if (totalsenior > totalMale + totalFemale) {
      this.baselineSurvey.controls.fsenior.setValue('');
      this.showError('Senior Citizen count can not be greater than the sum of Male & Female');
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Baseline Register Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Baseline Register', {
      timeOut: 3000
    });
  }
  IdType(IdType) {
    if (IdType == '') {
      this.idTypeField = 0;
    } else {
      this.idTypeField = IdType;
    }
    if (this.baselineSurvey.value.idtype == '') {
      this.baselineSurvey.controls.pan.setValue('');
      this.baselineSurvey.controls.voter.setValue('');
      this.baselineSurvey.controls.aadhar.setValue('');
    }
  }
  familyType(id) {
    this.familyField = id;
    this.baselineSurvey.controls.households.setValue('');
  }
  radioValueCheck(x) {
    this.showChildDetails = x === 1;
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
  addMF() {
    let item = this.baselineSurvey.value;
    let male = item.fmale == '' ? 0 : parseInt(item.fmale);
    let female = item.ffemale == '' ? 0 : parseInt(item.ffemale);
    this.addSum = male + female;
    this.checkHousehold();
  }
  checkHousehold() {
    let totalHousehold = 0;
    let totalMale = 0;
    let totalFemale = 0;
    let item = this.baselineSurvey.value;
    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households);
    }
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }
    if (totalHousehold < totalMale + totalFemale && totalHousehold != totalMale + totalFemale) {
      this.baselineSurvey.controls.fmale.setValue('');
      this.baselineSurvey.controls.ffemale.setValue('');
      this.addSum = 0;
      this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
    }
  }
  checkFamily() {
    let totalHousehold = 0;
    let totalFamily = 0;
    let item = this.baselineSurvey.value;
    if (item.totalFamily != '' && item.totalFamily != undefined) {
      totalFamily = parseInt(item.totalFamily);
    }
    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households);
    }
    if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
      this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
    }
  }
  checkChildren() {
    let totalChildren = 0;
    let totalMale = 0;
    let totalFemale = 0;
    let totalSenior = 0;
    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }
    if (item.fmale != '' && item.fmale != undefined) {
      totalMale = parseInt(item.fmale);
    }
    if (item.ffemale != '' && item.ffemale != undefined) {
      totalFemale = parseInt(item.ffemale);
    }
    if (item.fsenior != '' && item.fsenior != undefined) {
      totalSenior = parseInt(item.fsenior);
    }
    if (totalChildren > totalMale + totalFemale - totalSenior && totalChildren != totalMale + totalFemale - totalSenior) {
      this.showError('Children count should be less than or equal to (Male + Female) – (Sr.Citizen)');
      this.baselineSurvey.controls.child.setValue('');
    }
    if (this.baselineSurvey.value.child.startsWith(0)) {
      this.showError('Child count should not be zero');
      this.baselineSurvey.controls.child.setValue('');
      return;
    }
  }
  familyNo(e) {
    if (e.target.value < 2) {
      this.showError('Joint Family will be minimum two');
    }
  }
  saveChild() {
    let totalChildren = 0;
    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }
    if (totalChildren < this.childDetails.childInfo.length) {
      this.showError(' Entered child data should not be more than children count');
      // return;
    } else {
      console.log(this.childDetails);
      this.modalReference.close();
    }
  }
  restrictTypeOfDate() {
    return false;
  }
  ngOnDestroy() {
    this.baselineService.timeToTentativeEndDate = '';
  }
}
BaselineCreateComponent.ɵfac = function BaselineCreateComponent_Factory(t) {
  return new (t || BaselineCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_1__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
BaselineCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: BaselineCreateComponent,
  selectors: [["app-baseline-create"]],
  viewQuery: function BaselineCreateComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_location_location_component__WEBPACK_IMPORTED_MODULE_0__.LocationComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.aadhaarId = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.locationComponent = _t.first);
    }
  },
  decls: 226,
  vars: 91,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "col"], [1, "page-title"], [2, "color", "blue"], [1, "form-signin", 3, "formGroup"], [1, "scheduler-border"], [1, "form-group", "col-md-6"], ["for", "family"], [1, "text-danger"], ["formControlName", "family", "id", "family", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["value", "S"], ["value", "J"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "firstName"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", "maxlength", "20", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "middleName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Middle Name", "formControlName", "middleName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "lastName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "age"], ["type", "", "maxlength", "2", "placeholder", "Enter Age", "formControlName", "age", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], [1, "form-group", "col-md-3"], ["for", "husbandName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Husband Name", "formControlName", "husbandName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "mobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "mobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "idtype"], ["formControlName", "idtype", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], ["for", "religion"], ["formControlName", "religion", "id", "religion", 1, "form-select", 3, "ngClass"], ["for", "caste"], ["formControlName", "caste", "id", "caste", 1, "form-select", 3, "ngClass"], ["for", "education"], ["formControlName", "education", "id", "education", 1, "form-select"], ["for", "household"], ["formControlName", "household", "id", "household", 1, "form-select"], ["for", "occupation"], ["formControlName", "occupation", "id", "occupation", 1, "form-select"], ["for", "fmale"], ["type", "text", "maxlength", "2", "placeholder", "Child, Adult, and Senior", "formControlName", "fmale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change"], ["for", "ffemale"], ["type", "text", "placeholder", "Child, Adult, and Senior", "maxlength", "2", "formControlName", "ffemale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change", "keydown"], ["for", "fsenior"], ["type", "text", "maxlength", "2", "placeholder", "Enter Total Senior Citizen", "formControlName", "fsenior", 1, "form-control", 3, "ngClass", "keypress", "change", "keyup"], ["for", "bbMicro", 4, "ngIf"], ["formControlName", "bbMicro", "id", "bbMicro", 1, "form-select", 3, "ngClass"], ["value", "Y"], ["value", "N"], ["for", "pregnancy"], ["formControlName", "pregnancy", "id", "pregnancy", 1, "form-select", 3, "ngClass"], ["value", "NA"], ["for", "sanitary"], [1, "form-check-inline"], ["name", "sanitary", "type", "radio", "id", "yes", "value", "Y", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "haveChildren"], ["name", "haveChildren", "type", "radio", "id", "yes", "value", "Y", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["for", "", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], ["child", ""], [1, "invalid-feedback"], [4, "ngIf"], ["for", "totalFamily"], ["type", "text", "maxlength", "2", "placeholder", "Total Number of Family", "formControlName", "totalFamily", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], ["for", "households"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], [3, "value"], ["for", "aadhar"], ["type", "text", "maxlength", "14", "placeholder", "Like 2104 0533 7065", "formControlName", "aadhar", 1, "form-control", 3, "ngClass", "keyup", "keypress"], ["aadhaarId", ""], ["for", "pan"], ["type", "text", "maxlength", "10", "placeholder", "Like BBHPM5672K", "formControlName", "pan", 1, "form-control", 3, "ngClass", "keypress"], ["for", "voter"], ["type", "text", "maxlength", "16", "placeholder", "NDF1758462", "formControlName", "voter", 1, "form-control", 3, "ngClass"], ["for", "bbMicro"], ["for", "child"], ["type", "text", "placeholder", "Children in your family ", "formControlName", "child", "maxlength", "2", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], ["for", "childbelow18"], ["name", "childbelow18", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["for", "childbelow5"], ["name", "childbelow5", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["for", "institutional"], ["type", "radio", "name", "institutional", "id", "yes", "value", "I", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "institutional", 1, "form-check-label"], ["type", "radio", "name", "institutional", "id", "no", "value", "H", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "breastFeeding"], ["type", "radio", "name", "breastFeeding", "id", "yes", "value", "Y", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["for", "breastFeeding", 1, "form-check-label"], ["type", "radio", "name", "breastFeeding", "id", "no", "value", "N", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "breastFeeding", "id", "na", "value", "NA", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], [1, "modal-content"], [1, "modal-header"], [1, "col-md-7"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-md-3"], ["title", "Add Child", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "col-md-2"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], ["id", "sex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "M"], ["value", "F"], ["value", "O"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"]],
  template: function BaselineCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Create Baseline Survey");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "form", 8)(13, "fieldset", 9)(14, "legend", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "HH Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "app-location");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 2)(19, "div", 10)(20, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Family Type:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_select_change_24_listener($event) {
        return ctx.familyType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "-- Select Family Type --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Single Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Joint Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, BaselineCreateComponent_div_31_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, BaselineCreateComponent_div_32_Template, 7, 4, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, BaselineCreateComponent_div_33_Template, 7, 5, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, BaselineCreateComponent_div_34_Template, 7, 4, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "fieldset", 9)(36, "legend", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Family Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 2)(39, "div", 19)(40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "First Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_44_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, BaselineCreateComponent_div_45_Template, 3, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 19)(47, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Middle Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_49_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, BaselineCreateComponent_div_50_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 19)(52, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Last Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_54_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, BaselineCreateComponent_div_55_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 19)(57, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Age:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_61_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keydown", function BaselineCreateComponent_Template_input_keydown_61_listener($event) {
        return ctx.restrictZero($event);
      })("keyup", function BaselineCreateComponent_Template_input_keyup_61_listener() {
        return ctx.zeroAge();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, BaselineCreateComponent_div_62_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 2)(64, "div", 28)(65, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Husband/Guardian\u2019s:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_69_listener($event) {
        return ctx.validationService.onlyAlphabetsAndSpace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, BaselineCreateComponent_div_70_Template, 3, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 28)(72, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Mobile No:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_74_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, BaselineCreateComponent_div_75_Template, 3, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 19)(77, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "ID Type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "select", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_select_change_79_listener($event) {
        return ctx.IdType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, BaselineCreateComponent_option_82_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, BaselineCreateComponent_div_83_Template, 8, 5, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, BaselineCreateComponent_div_84_Template, 7, 5, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, BaselineCreateComponent_div_85_Template, 7, 5, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 2)(87, "div", 19)(88, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Religion :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "select", 38)(93, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "-- Select Religion --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, BaselineCreateComponent_option_95_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, BaselineCreateComponent_div_96_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 19)(98, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Caste :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "select", 40)(103, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "-- Select Caste --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, BaselineCreateComponent_option_105_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, BaselineCreateComponent_div_106_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 19)(108, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Education Level:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "select", 42)(111, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "-- Select Education --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, BaselineCreateComponent_option_113_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 19)(115, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Monthly Family Income: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "select", 44)(118, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "-- Select Income --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](120, BaselineCreateComponent_option_120_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 2)(122, "div", 19)(123, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Occupation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "select", 46)(126, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, BaselineCreateComponent_option_128_Template, 2, 2, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 19)(130, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, " Total Male Family Member:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_134_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keyup", function BaselineCreateComponent_Template_input_keyup_134_listener() {
        return ctx.addMF();
      })("change", function BaselineCreateComponent_Template_input_change_134_listener() {
        return ctx.checkChildren();
      })("keyup", function BaselineCreateComponent_Template_input_keyup_134_listener() {
        return ctx.familyCountChecking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, BaselineCreateComponent_div_135_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 19)(137, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, " Total Female Family Member:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_141_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keyup", function BaselineCreateComponent_Template_input_keyup_141_listener() {
        return ctx.addMF();
      })("change", function BaselineCreateComponent_Template_input_change_141_listener() {
        return ctx.checkChildren();
      })("keyup", function BaselineCreateComponent_Template_input_keyup_141_listener() {
        return ctx.familyCountChecking();
      })("keyup", function BaselineCreateComponent_Template_input_keyup_141_listener() {
        return ctx.checkHousehold();
      })("keydown", function BaselineCreateComponent_Template_input_keydown_141_listener($event) {
        return ctx.restrictZero($event);
      })("keyup", function BaselineCreateComponent_Template_input_keyup_141_listener() {
        return ctx.zeroFemale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](142, BaselineCreateComponent_div_142_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 19)(146, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, " Total Senior Citizen :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function BaselineCreateComponent_Template_input_keypress_150_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("change", function BaselineCreateComponent_Template_input_change_150_listener() {
        return ctx.checkChildren();
      })("keyup", function BaselineCreateComponent_Template_input_keyup_150_listener() {
        return ctx.familyCountChecking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, BaselineCreateComponent_div_151_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 2)(153, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, BaselineCreateComponent_label_154_Template, 4, 0, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](155, BaselineCreateComponent_label_155_Template, 4, 0, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "select", 54)(157, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158, "-- Micro Group --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "Non-Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](163, BaselineCreateComponent_div_163_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 19)(165, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Are you pregnant now? :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "select", 58)(170, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "-- Select Pregnancy --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "N/A");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](178, BaselineCreateComponent_div_178_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "div", 19)(180, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, " Do you have sanitary latrine at your house premise?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "div", 61)(185, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_185_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_190_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](192, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "div", 19)(194, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, " Do you have any child in your family?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "div", 61)(199, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_199_listener($event) {
        return ctx.havesChildren($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BaselineCreateComponent_Template_input_change_204_listener($event) {
        return ctx.havesChildren($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](206, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](208, BaselineCreateComponent_div_208_Template, 7, 5, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](209, BaselineCreateComponent_div_209_Template, 14, 2, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](210, BaselineCreateComponent_div_210_Template, 14, 2, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](211, BaselineCreateComponent_div_211_Template, 14, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](213, BaselineCreateComponent_div_213_Template, 18, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "div", 10)(215, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_215_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r134);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](225);
        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.openModal(_r33));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, " Child Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "div", 69)(218, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_218_listener() {
        return ctx.saveMoreBaselineCreate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](219, "i", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "button", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BaselineCreateComponent_Template_button_click_221_listener() {
        return ctx.resetBaselineCreate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](222, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](224, BaselineCreateComponent_ng_template_224_Template, 30, 2, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.timeToTentativeEndDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.baselineSurvey);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](52, _c2, ctx.f.family.invalid && ctx.f.family.touched, ctx.f.family.valid && (ctx.f.family.dirty || ctx.f.family.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.family.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.familyField == "S");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](55, _c2, ctx.f.firstName.invalid && ctx.f.firstName.touched, ctx.f.firstName.valid && (ctx.f.firstName.dirty || ctx.f.firstName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](58, _c1, ctx.f.middleName.invalid && ctx.f.middleName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.middleName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](60, _c1, ctx.f.lastName.invalid && ctx.f.lastName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](62, _c2, ctx.f.age.invalid && ctx.f.age.touched, ctx.f.age.valid && (ctx.f.age.dirty || ctx.f.age.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.age.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](65, _c2, ctx.f.husbandName.invalid && ctx.f.husbandName.touched, ctx.f.husbandName.valid && (ctx.f.husbandName.dirty || ctx.f.husbandName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.husbandName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](68, _c1, ctx.f.mobile.invalid && ctx.f.mobile.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.mobile.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cardDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.idTypeField == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.idTypeField == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.idTypeField == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](70, _c2, ctx.f.religion.invalid && ctx.f.religion.touched, ctx.f.religion.valid && (ctx.f.religion.dirty || ctx.f.religion.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.religionDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.religion.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](73, _c2, ctx.f.caste.invalid && ctx.f.caste.touched, ctx.f.caste.valid && (ctx.f.caste.dirty || ctx.f.caste.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.casteList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.caste.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.educationList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.householdIncomeDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.occupationDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](76, _c2, ctx.f.fmale.invalid && ctx.f.fmale.touched, ctx.f.fmale.valid && (ctx.f.fmale.dirty || ctx.f.fmale.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.fmale.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](79, _c2, ctx.f.ffemale.invalid && ctx.f.ffemale.touched, ctx.f.ffemale.valid && (ctx.f.ffemale.dirty || ctx.f.ffemale.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.ffemale.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Male + Female : ", ctx.addSum, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](82, _c2, ctx.f.fsenior.invalid && ctx.f.fsenior.touched, ctx.f.fsenior.valid && (ctx.f.fsenior.dirty || ctx.f.fsenior.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.fsenior.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sidebarService.donorName == null ? null : ctx.sidebarService.donorName.includes("Bandhan"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.sidebarService.donorName == null ? null : ctx.sidebarService.donorName.includes("Bandhan")));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](85, _c2, ctx.f.bbMicro.invalid && ctx.f.bbMicro.touched, ctx.f.bbMicro.valid && (ctx.f.bbMicro.dirty || ctx.f.bbMicro.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.bbMicro.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](88, _c2, ctx.f.pregnancy.invalid && ctx.f.pregnancy.touched, ctx.f.pregnancy.valid && (ctx.f.pregnancy.dirty || ctx.f.pregnancy.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.pregnancy.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.childbelow18 === "Y" && ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.showChildDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _location_location_component__WEBPACK_IMPORTED_MODULE_0__.LocationComponent],
  styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -170px;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 290px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: auto;\r\n  width: 750px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9iYXNlbGluZS1zdXJ2ZXkvYmFzZWxpbmUtY3JlYXRlL2Jhc2VsaW5lLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTE3MHB4O1xyXG59XHJcblxyXG4uZmEtbWludXMtY2lyY2xlIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAyOTBweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aWR0aDogNzUwcHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 79876:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-edit/baseline-edit.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineEditComponent": () => (/* binding */ BaselineEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseline-survey.service */ 66200);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










function BaselineEditComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", block_r11.blockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", block_r11.blockName, " ");
  }
}
function BaselineEditComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_26_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.block.errors.required);
  }
}
function BaselineEditComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", gp_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", gp_r13.name, " ");
  }
}
function BaselineEditComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_36_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.f.gp.errors.required);
  }
}
function BaselineEditComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", vill_r15.branchVillageMapId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", vill_r15.villageName, " ");
  }
}
function BaselineEditComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_46_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.gram.errors.required);
  }
}
function BaselineEditComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ss_r17.swasthyaSahayikaId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ss_r17.swasthyaSahayikaName, " ");
  }
}
function BaselineEditComponent_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Selection of family is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_67_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.f.family.errors.required);
  }
}
function BaselineEditComponent_div_68_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total Number of Family is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_68_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_68_div_6_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.f.totalFamily.errors.required);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function BaselineEditComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Total Family:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_68_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.validationService.onlyInteger($event));
    })("keydown", function BaselineEditComponent_div_68_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.restrictZero($event));
    })("keyup", function BaselineEditComponent_div_68_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.familyNo($event));
    })("ngModelChange", function BaselineEditComponent_div_68_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.totalFamili = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BaselineEditComponent_div_68_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r8.totalFamili)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r8.f.totalFamily.invalid && ctx_r8.f.totalFamily.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.f.totalFamily.errors);
  }
}
function BaselineEditComponent_div_69_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_69_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_69_div_6_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r26.f.households.errors.required);
  }
}
const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function BaselineEditComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_69_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.validationService.onlyInteger($event));
    })("keydown", function BaselineEditComponent_div_69_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.restrictZero($event));
    })("ngModelChange", function BaselineEditComponent_div_69_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.totalMembers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BaselineEditComponent_div_69_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r9.totalMembers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c1, ctx_r9.f.households.invalid && ctx_r9.f.households.touched, ctx_r9.f.households.valid && (ctx_r9.f.households.dirty || ctx_r9.f.households.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.f.households.errors);
  }
}
function BaselineEditComponent_div_70_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total Member of Household is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BaselineEditComponent_div_70_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BaselineEditComponent_div_70_div_6_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r32.f.households.errors.required);
  }
}
function BaselineEditComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Total Member Household:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function BaselineEditComponent_div_70_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.validationService.onlyInteger($event));
    })("keydown", function BaselineEditComponent_div_70_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.restrictZero($event));
    })("keyup", function BaselineEditComponent_div_70_Template_input_keyup_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.checkFamily());
    })("ngModelChange", function BaselineEditComponent_div_70_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.totalMembers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BaselineEditComponent_div_70_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r10.totalMembers)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r10.f.households.invalid && ctx_r10.f.households.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.f.households.errors);
  }
}
class BaselineEditComponent {
  constructor(routes, fb, toaster, validationService, httpService, baselineService, sidebarService) {
    this.routes = routes;
    this.fb = fb;
    this.toaster = toaster;
    this.validationService = validationService;
    this.httpService = httpService;
    this.baselineService = baselineService;
    this.sidebarService = sidebarService;
    this.gpDtoList = [];
    this.villageDtoList = [];
  }
  ngOnInit() {
    this.routes.queryParams.subscribe(params => {
      console.log(params);
      this.houseHoldId = params['id'];
      this.branch = params['bName'];
      this.branchId = params['bId'];
      this.blockName = params['blockName'];
      this.gpName = params['gpName'];
      this.village = params['vName'];
      this.branchVillageMapId = params['vId'];
      this.ss = params['ssName'];
      this.swasthyaSahayikaId = params['ssId'];
      this.famType = params['type'];
      this.totalMembers = params['tMem'];
      this.totalFamili = params['tFam'];
      this.householdNumber = params['hhNo'];
      this.familyType(this.famType);
    });
    this.createForm();
    this.baselineSurvey.get('branch').disable();
    this.getBlockList();
    setTimeout(() => {
      let villId = this.villagesOfBranch?.find(i => i.villageName == this.village)?.villageMasterId;
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        villageId: villId,
        userId: this.sidebarService.userId
      };
      this.baselineService.ssVillageWiseList(req).subscribe(res => {
        console.log(res);
        this.swasthyaSahayika = res.responseObject;
      }, error => {
        this.swasthyaSahayika = null;
      });
    }, 500);
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.houseHoldId
    };
    this.baselineService.baselineSurveyStatus(postBody).subscribe(response => {
      console.log(response);
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
    });
    if (this.baselineSurvey.value.swasthyaSahayika == null) {
      this.swasthyaSahayikaId = null;
    }
  }
  getBlockList() {
    let dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    console.log(dto);
    this.baselineService.villagesOfBranch(dto).subscribe(res => {
      console.log(res);
      this.villagesOfBranch = res?.responseObject;
      this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == this.blockName)?.gpDtoList;
      this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.blockName)?.gpDtoList.find(gp => gp.name == this.gpName)?.villageDtoList;
    });
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.baselineSurvey.get('block').value;
    this.baselineSurvey.controls.gp.setValue('');
    this.baselineSurvey.controls.gram.setValue('');
    this.baselineSurvey.controls.swasthyaSahayika.setValue('');
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.baselineSurvey.get('gp').value;
    this.baselineSurvey.controls.gram.setValue('');
    this.baselineSurvey.controls.swasthyaSahayika.setValue('');
  }
  changeVillage(villageMasterId) {
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageMasterId)?.branchVillageMapId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: villageMasterId,
      userId: this.sidebarService.userId
    };
    setTimeout(() => {
      this.baselineService.ssVillageWiseList(req).subscribe(res => {
        console.log(res);
        this.swasthyaSahayika = res.responseObject;
      }, error => {
        this.swasthyaSahayika = null;
      });
    }, 500);
    this.baselineSurvey.controls.swasthyaSahayika.setValue('');
  }
  changeSS(ss) {
    this.ss = this.swasthyaSahayika.find(i => i.swasthyaSahayikaId == ss)?.swasthyaSahayikaName;
    this.swasthyaSahayikaId = ss;
  }
  createForm() {
    this.baselineSurvey = this.fb.group({
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      swasthyaSahayika: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      totalFamily: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      households: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  get f() {
    return this.baselineSurvey.controls;
  }
  familyType(id) {
    this.familyField = id;
    // this.baselineSurvey.controls.households.setValue('');
  }

  restrictZero(event) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }
  familyNo(e) {
    if (e.target.value < 2) {
      this.showError('Joint Family will be minimum two');
    }
  }
  checkFamily() {
    let totalHousehold = 0;
    let totalFamily = 0;
    let item = this.baselineSurvey.value;
    if (item.totalFamily != '' && item.totalFamily != undefined) {
      totalFamily = parseInt(item.totalFamily);
    }
    if (item.households != '' && item.households != undefined) {
      totalHousehold = parseInt(item.households);
    }
    if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
      this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Household Info Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Household Info Save', {
      timeOut: 3000
    });
  }
  backEditHousehold() {
    window.history.go(-1);
  }
  saveEditHousehold() {
    if (this.familyField == 'J') {
      this.tFamily = this.totalFamili;
    } else if (this.familyField == 'S') {
      this.tFamily = 1;
    }
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName
        },
        branchVillageMapId: this.branchVillageMapId,
        familyDetailDTOList: [],
        familyType: this.famType,
        houseHoldNumber: this.householdNumber,
        householdDetailId: this.houseHoldId,
        numberOfFamily: this.tFamily,
        status: "A",
        swasthyaSahayikaDTO: {
          name: this.ss ? this.ss : '',
          swasthyaSahayikaId: this.swasthyaSahayikaId ? this.swasthyaSahayikaId : 0
        },
        totalMembers: this.totalMembers
      }
    };
    console.log(postBody);
    if (!this.baselineSurvey.value.family) {
      this.showError('Please Select Family Type');
      return;
    }
    if (this.familyField === 'J') {
      if (!this.baselineSurvey.value.totalFamily) {
        this.showError('Please Enter Total Number of Family');
        return;
      } else if (this.baselineSurvey.value.totalFamily < 2) {
        this.showError('Joint Family will be minimum two');
        return;
      }
    }
    if (!this.baselineSurvey.value.households) {
      this.showError('Please Enter Total Member of Household (All Family)');
      return;
    }
    if (this.familyField === 'J') {
      if (this.baselineSurvey.value.households) {
        let totalHousehold = 0;
        let totalFamily = 0;
        let item = this.baselineSurvey.value;
        if (item.totalFamily != '' && item.totalFamily != undefined) {
          totalFamily = parseInt(item.totalFamily);
        }
        if (item.households != '' && item.households != undefined) {
          totalHousehold = parseInt(item.households);
        }
        if (totalHousehold < totalFamily && totalHousehold != totalFamily) {
          this.showError('Total Member of Household (All family) must be greater than or equal to Total Family');
          return;
        }
      }
    }
    if (this.totalMembers < this.familyStatus.createdFamilyMambersCount) {
      this.showError('Total Members should not be less than the created Members');
      return;
    }
    if (this.totalFamili < this.familyStatus.createdFamilyCount) {
      this.showError('Total Family should not be less than the created Family');
      return;
    }
    if (this.familyStatus.createdFamilyCount > 1 && this.famType == 'S') {
      this.showError('Family type should not be single');
      return;
    }
    this.baselineService.saveBaselineSurvey(postBody).subscribe(response => {
      console.log(response);
      if (response.status == true) {
        this.showSuccess(response.message);
        this.backEditHousehold();
      } else {
        this.showError(response.message);
      }
    });
  }
}
BaselineEditComponent.ɵfac = function BaselineEditComponent_Factory(t) {
  return new (t || BaselineEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_2__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService));
};
BaselineEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BaselineEditComponent,
  selectors: [["app-baseline-edit"]],
  decls: 78,
  vars: 35,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "scheduler-border"], [1, "form-group", "col-md"], ["for", "branch"], [1, "text-danger"], ["type", "text", "formControlName", "branch", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "block"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value"], ["for", "swasthyaSahayika"], ["formControlName", "swasthyaSahayika", "id", "swasthyaSahayika", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], [1, "form-group", "col-md-6"], ["for", "family"], ["formControlName", "family", "id", "family", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "S"], ["value", "J"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-arrow-left", "m-1"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-group", "col-md-3"], ["for", "totalFamily"], ["type", "text", "maxlength", "2", "placeholder", "Total Number of Family", "formControlName", "totalFamily", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "keyup", "ngModelChange"], ["for", "households"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "ngModelChange"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All family", "formControlName", "households", 1, "form-control", 3, "ngModel", "ngClass", "keypress", "keydown", "keyup", "ngModelChange"]],
  template: function BaselineEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit Household Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 5)(7, "fieldset", 6)(8, "legend", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "HH Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1)(11, "div", 7)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Branch :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.branch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_22_listener($event) {
        return ctx.blockName = $event;
      })("change", function BaselineEditComponent_Template_select_change_22_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, BaselineEditComponent_option_25_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, BaselineEditComponent_div_26_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7)(28, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_32_listener($event) {
        return ctx.gpName = $event;
      })("change", function BaselineEditComponent_Template_select_change_32_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, BaselineEditComponent_option_35_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, BaselineEditComponent_div_36_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 7)(38, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Village/ GS/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.branchVillageMapId = $event;
      })("change", function BaselineEditComponent_Template_select_change_42_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, BaselineEditComponent_option_45_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, BaselineEditComponent_div_46_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 7)(48, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Name of SS :");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_50_listener($event) {
        return ctx.swasthyaSahayikaId = $event;
      })("change", function BaselineEditComponent_Template_select_change_50_listener($event) {
        return ctx.changeSS($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "-- Select SS --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, BaselineEditComponent_option_53_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 1)(55, "div", 23)(56, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Family Type:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BaselineEditComponent_Template_select_ngModelChange_60_listener($event) {
        return ctx.famType = $event;
      })("change", function BaselineEditComponent_Template_select_change_60_listener($event) {
        return ctx.familyType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "-- Select Family Type --");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Single Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Joint Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, BaselineEditComponent_div_67_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, BaselineEditComponent_div_68_Template, 7, 5, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, BaselineEditComponent_div_69_Template, 7, 6, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, BaselineEditComponent_div_70_Template, 7, 5, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 29)(72, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BaselineEditComponent_Template_button_click_72_listener() {
        return ctx.saveEditHousehold();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BaselineEditComponent_Template_button_click_75_listener() {
        return ctx.backEditHousehold();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.baselineSurvey);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.branch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.blockName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c1, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.gpName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c1, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.branchVillageMapId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](29, _c1, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.swasthyaSahayikaId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.swasthyaSahayika);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.famType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](32, _c1, ctx.f.family.invalid && ctx.f.family.touched, ctx.f.family.valid && (ctx.f.family.dirty || ctx.f.family.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.family.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.familyField == "S");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.familyField == "J");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["fieldset.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: 0 0 1.5em 0 !important;\r\n  }\r\n  \r\n  legend.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    background-color: gray;\r\n    width: 150px;\r\n    color: #ddd;\r\n    font-size: 1.2em !important;\r\n    font-weight: bold !important;\r\n    font-family: ui-sans-serif;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9iYXNlbGluZS1zdXJ2ZXkvYmFzZWxpbmUtZWRpdC9iYXNlbGluZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2Qyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwwQkFBMEI7RUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBmaWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 72646:
/*!***************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineSurveyRoutingModule": () => (/* binding */ BaselineSurveyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseline-create/baseline-create.component */ 76345);
/* harmony import */ var _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseline-edit/baseline-edit.component */ 79876);
/* harmony import */ var _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline-view/baseline-view.component */ 33809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: 'create',
  component: _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_0__.BaselineCreateComponent
}, {
  path: 'view',
  component: _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_2__.BaselineViewComponent
}, {
  path: 'edit',
  component: _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_1__.BaselineEditComponent
}];
class BaselineSurveyRoutingModule {}
BaselineSurveyRoutingModule.ɵfac = function BaselineSurveyRoutingModule_Factory(t) {
  return new (t || BaselineSurveyRoutingModule)();
};
BaselineSurveyRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BaselineSurveyRoutingModule
});
BaselineSurveyRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BaselineSurveyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7037:
/*!*******************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-survey.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineSurveyModule": () => (/* binding */ BaselineSurveyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseline-survey-routing.module */ 72646);
/* harmony import */ var _baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseline-create/baseline-create.component */ 76345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline-view/baseline-view.component */ 33809);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseline-edit/baseline-edit.component */ 79876);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _location_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location/location.module */ 46425);
/* harmony import */ var _shared_baseline_view_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/baseline-view-search.pipe */ 75934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);













class BaselineSurveyModule {}
BaselineSurveyModule.ɵfac = function BaselineSurveyModule_Factory(t) {
  return new (t || BaselineSurveyModule)();
};
BaselineSurveyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: BaselineSurveyModule
});
BaselineSurveyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaselineSurveyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule.withConfig({
    warnOnNgModelWithFormControl: 'never'
  }), _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, _location_location_module__WEBPACK_IMPORTED_MODULE_7__.LocationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BaselineSurveyModule, {
    declarations: [_baseline_create_baseline_create_component__WEBPACK_IMPORTED_MODULE_1__.BaselineCreateComponent, _baseline_view_baseline_view_component__WEBPACK_IMPORTED_MODULE_2__.BaselineViewComponent, _baseline_edit_baseline_edit_component__WEBPACK_IMPORTED_MODULE_4__.BaselineEditComponent, _shared_baseline_view_search_pipe__WEBPACK_IMPORTED_MODULE_8__.baselineFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _baseline_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaselineSurveyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, _location_location_module__WEBPACK_IMPORTED_MODULE_7__.LocationModule]
  });
})();

/***/ }),

/***/ 33809:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/baseline-survey/baseline-view/baseline-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineViewComponent": () => (/* binding */ BaselineViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _baseline_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseline-survey.service */ 66200);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_baseline_view_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/baseline-view-search.pipe */ 75934);

















function BaselineViewComponent_div_13_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r19.regionName, " ");
  }
}
function BaselineViewComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_div_13_div_10_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.f.region.errors.required);
  }
}
function BaselineViewComponent_div_13_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", branch_r21.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r21.branchName, " ");
  }
}
function BaselineViewComponent_div_13_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_div_13_div_20_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function BaselineViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 10)(2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_div_13_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, BaselineViewComponent_div_13_option_9_Template, 2, 1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, BaselineViewComponent_div_13_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_div_13_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, BaselineViewComponent_div_13_option_19_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, BaselineViewComponent_div_13_div_20_Template, 2, 1, "div", 16);
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
function BaselineViewComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r26.blockName, " ");
  }
}
function BaselineViewComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_div_24_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
  }
}
function BaselineViewComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r28.name, " ");
  }
}
function BaselineViewComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_div_34_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
  }
}
function BaselineViewComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r30.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r30.villageName, " ");
  }
}
function BaselineViewComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_div_44_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
  }
}
function BaselineViewComponent_div_45_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ss_r33.swasthyaSahayikaName, " ");
  }
}
function BaselineViewComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Filter By SS List:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_div_45_Template_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.ssWiseViewList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "-- View All List --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, BaselineViewComponent_div_45_option_6_Template, 2, 1, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r7.swasthyaSahayika);
  }
}
function BaselineViewComponent_th_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_tr_91_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_tr_91_td_15_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.gotoFamily(item_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_tr_91_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_tr_91_td_17_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_tr_91_td_17_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const item_r36 = ctx_r47.$implicit;
      const i_r37 = ctx_r47.index;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.editHousehold(item_r36, i_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_tr_91_td_17_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_tr_91_td_17_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const item_r36 = ctx_r50.$implicit;
      const i_r37 = ctx_r50.index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](96);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.deleteHousehold(item_r36, i_r37, _r11, item_r36.familyDetailDTOList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_tr_91_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_tr_91_td_17_i_1_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BaselineViewComponent_tr_91_td_17_i_2_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r40.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r40.deleteMode);
  }
}
function BaselineViewComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_tr_91_Template_td_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53);
      const item_r36 = restoredCtx.$implicit;
      const i_r37 = restoredCtx.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](96);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.openModal(_r11, item_r36.familyDetailDTOList, item_r36, i_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BaselineViewComponent_tr_91_td_15_Template, 2, 0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BaselineViewComponent_tr_91_td_16_Template, 2, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, BaselineViewComponent_tr_91_td_17_Template, 3, 2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r10.p - 1) * 5 + i_r37 + 1 ? (ctx_r10.p - 1) * 5 + i_r37 + 1 : i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r36.houseHoldNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.familyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.numberOfFamily);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.totalMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r36.swasthyaSahayikaDTO.name ? item_r36.swasthyaSahayikaDTO.name : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r36.familyType == "J" && ctx_r10.createMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r36.familyType == "S" && ctx_r10.createMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.modalTitle == "V" && ctx_r10.createMode);
  }
}
function BaselineViewComponent_ng_template_95_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_ng_template_95_tr_41_td_17_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_95_tr_41_td_17_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const item_r60 = ctx_r66.$implicit;
      const i_r61 = ctx_r66.index;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r65.editFamily(item_r60, i_r61, ctx_r65.items));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_ng_template_95_tr_41_td_17_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_95_tr_41_td_17_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const item_r60 = ctx_r69.$implicit;
      const i_r61 = ctx_r69.index;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r68.deleteFamily(item_r60, i_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BaselineViewComponent_ng_template_95_tr_41_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BaselineViewComponent_ng_template_95_tr_41_td_17_i_1_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, BaselineViewComponent_ng_template_95_tr_41_td_17_i_2_Template, 1, 0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r62.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r62.deleteMode);
  }
}
function BaselineViewComponent_ng_template_95_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_95_tr_41_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r72);
      const item_r60 = restoredCtx.$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](98);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r71.familyModal(_r13, item_r60.familyDetailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, BaselineViewComponent_ng_template_95_tr_41_td_17_Template, 3, 2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r61 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r60.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r60.firstName, " ", item_r60.middleName, " ", item_r60.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r60.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r60.totaFamilyMemberFemales + item_r60.totaFamilyMemberMales);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r60.totalNumberOfChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r60.existingChildCount ? item_r60.existingChildCount : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r56.modalTitle == "V" && ctx_r56.createMode);
  }
}
function BaselineViewComponent_ng_template_95_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 66)(1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_ng_template_95_div_42_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r73.changeEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00A0 Select this checkbox for deleting Household ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "! Important : All family in this household will be deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function BaselineViewComponent_ng_template_95_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_95_div_43_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r75.deleteHH());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Delete Household");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function BaselineViewComponent_ng_template_95_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Delete Household");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function BaselineViewComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_95_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r77.modalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 57)(8, "table", 58)(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Husband");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Member Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Total Child ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Child Below 18 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "yr. entered");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, BaselineViewComponent_ng_template_95_th_39_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "tbody", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, BaselineViewComponent_ng_template_95_tr_41_Template, 18, 10, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, BaselineViewComponent_ng_template_95_div_42_Template, 7, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, BaselineViewComponent_ng_template_95_div_43_Template, 4, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, BaselineViewComponent_ng_template_95_div_44_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.modalTitle == "V" && ctx_r12.createMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r12.familyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.modalTitle == "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.modalTitle == "D" && ctx_r12.toggleBool == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.modalTitle == "D" && ctx_r12.toggleBool == true);
  }
}
function BaselineViewComponent_ng_template_97_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 77)(1, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "BB Micro Group:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function BaselineViewComponent_ng_template_97_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 77)(1, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Micro Group:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function BaselineViewComponent_ng_template_97_tr_241_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const i_r84 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r84 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r83.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r83.dob.substring(0, 10).split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r83.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r83.age);
  }
}
function BaselineViewComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 73)(1, "div", 54)(2, "div", 55)(3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Family Details View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BaselineViewComponent_ng_template_97_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r86);
      const modal_r79 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r79.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 75)(8, "fieldset", 76)(9, "legend", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "HH Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 2)(12, "div", 5)(13, "div", 2)(14, "div", 77)(15, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Family No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 77)(18, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 5)(21, "div", 2)(22, "div", 77)(23, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Family Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 77)(26, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 2)(29, "div", 5)(30, "div", 2)(31, "div", 77)(32, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 77)(35, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 5)(38, "div", 2)(39, "div", 77)(40, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 77)(43, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 2)(46, "div", 5)(47, "div", 2)(48, "div", 77)(49, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Husband Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 77)(52, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 5)(55, "div", 2)(56, "div", 77)(57, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Mobile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 77)(60, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 2)(63, "div", 5)(64, "div", 2)(65, "div", 77)(66, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "ID Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 77)(69, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 5)(72, "div", 2)(73, "div", 77)(74, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "ID Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 77)(77, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 2)(80, "div", 5)(81, "div", 2)(82, "div", 77)(83, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Religion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 77)(86, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "div", 5)(89, "div", 2)(90, "div", 77)(91, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "Caste:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 77)(94, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 2)(97, "div", 5)(98, "div", 2)(99, "div", 77)(100, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "Occupation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 77)(103, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 5)(106, "div", 2)(107, "div", 77)(108, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Income:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 77)(111, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "div", 2)(114, "div", 80)(115, "div", 2)(116, "div", 77)(117, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "Education:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 77)(120, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "div", 2)(123, "div", 5)(124, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, BaselineViewComponent_ng_template_97_div_125_Template, 3, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, BaselineViewComponent_ng_template_97_div_126_Template, 3, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 77)(128, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 5)(131, "div", 2)(132, "div", 77)(133, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, "Sanitary Latrine: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 77)(136, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "div", 2)(139, "div", 5)(140, "div", 2)(141, "div", 77)(142, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "Pregnant Woman:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 77)(145, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 5)(148, "div", 2)(149, "div", 77)(150, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151, "Have Children: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "div", 77)(153, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 2)(156, "div", 5)(157, "div", 2)(158, "div", 77)(159, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](160, "Child below 5 yrs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "div", 77)(162, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "div", 5)(165, "div", 2)(166, "div", 77)(167, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168, "Child below 18 yrs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div", 77)(170, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "div", 2)(173, "div", 5)(174, "div", 2)(175, "div", 77)(176, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "Institutional Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 77)(179, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "div", 5)(182, "div", 2)(183, "div", 77)(184, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "Lacteting Mother:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "div", 77)(187, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "div", 2)(190, "div", 5)(191, "div", 2)(192, "div", 77)(193, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, "Total Family Member (Male): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 77)(196, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "div", 5)(199, "div", 2)(200, "div", 77)(201, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](202, "Total Family Member (Female): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "div", 77)(204, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "div", 2)(207, "div", 5)(208, "div", 2)(209, "div", 77)(210, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, "Total Family Member (Senior Citizen): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "div", 77)(213, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "div", 5)(216, "div", 2)(217, "div", 77)(218, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219, "Total No. of children:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "div", 77)(221, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "fieldset", 76)(224, "legend", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](225, "Child Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "div", 57)(227, "table", 82)(228, "thead")(229, "tr")(230, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](231, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](233, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](234, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](235, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](236, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](237, "sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](238, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](239, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](240, "tbody", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](241, BaselineViewComponent_ng_template_97_tr_241_Template, 11, 5, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.familyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.firstName, " ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.middleName, " ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.identityCardDTOList[0] == null ? null : ctx_r14.moreDetails.identityCardDTOList[0].identityCardTypesMasterDTO == null ? null : ctx_r14.moreDetails.identityCardDTOList[0].identityCardTypesMasterDTO.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.identityCardDTOList[0] == null ? null : ctx_r14.moreDetails.identityCardDTOList[0].number);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.religionMasterDTO.religionMasterDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.casteTypeMasterDTO.casteTypeDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.occupationMasterDTO.occupationDescription, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.monthlyIncomeMasterDTO.incomeRange, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.educationalQualificationMasterDTO.qualification, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.sidebarService.donorName == null ? null : ctx_r14.sidebarService.donorName.includes("Bandhan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r14.sidebarService.donorName == null ? null : ctx_r14.sidebarService.donorName.includes("Bandhan")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.bbMicroGroupMembership, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.haveSanitaryLatrine, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.pregnantWoman, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.haveChild, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.childrenBelow5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.childrenBelow18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.institutionalDelivery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.lactetingMother, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.totaFamilyMemberMales, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.totaFamilyMemberFemales, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.totaFamilyMemberSrcitizen, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.totalNumberOfChildren, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r14.moreDetails == null ? null : ctx_r14.moreDetails.childDetailDTOList);
  }
}
const _c1 = function (a0) {
  return {
    houseHoldNumber: a0
  };
};
const _c2 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class BaselineViewComponent {
  constructor(fb, baselineService, modalService, toaster, httpService, confirmationDialogService, http, route, validationService, sidebarService) {
    this.fb = fb;
    this.baselineService = baselineService;
    this.modalService = modalService;
    this.toaster = toaster;
    this.httpService = httpService;
    this.confirmationDialogService = confirmationDialogService;
    this.http = http;
    this.route = route;
    this.validationService = validationService;
    this.sidebarService = sidebarService;
    this.baselineDetails = [];
    this.page = 1;
    this.pageSize = 6;
    this.loader = false;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
    this.ssList = [];
    this.swasthyaSahayika = [];
    this.modalTitle = 'V';
    this.toggleBool = true;
    this.ssNameFilter = [];
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 73 || item.subFunctionMasterId == 74 || item.subFunctionMasterId == 75 || item.subFunctionMasterId == 76)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.route.navigate(['/Baseline-Survey/view']) : this.route.navigate(['/error']);
    this.createForm();
    this.householdFamDetails();
    this.sidebarService.checkRoledetailDTO().then(res => {
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        let Dto = {
          dataAccessDTO: res.dataAccessDTO,
          branchId: res.branchId
        };
        // this.branchID = res.branchId;
        // console.log(this.branchID);
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
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    // console.log(this.updateMode);
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    // console.log(this.deleteMode);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Household Info')?.subMenuDetailList.find(subFunctionShortName => subFunctionShortName.subFunctionShortName == 'Household Info')?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    // console.log(this.createMode);
  }

  changeRegion(region) {
    let regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
      console.log(this.branchList);
    }, error => {
      this.branchList = null;
    });
    this.locationForm.controls.branch.setValue('');
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villagesOfBranch = [];
    this.villageDtoList = [];
    this.gpDtoList = [];
    this.timeToTentativeEndDate = '';
    if (this.locationForm.value.region == '') {
      this.showErrorss('No Data Found');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];
      this.locationForm.controls.ssByList.setValue('');
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
    this.sidebarService.donorName = this.branchList?.find(bran => bran.branchId == brnchId)?.donorMasterDto?.donorName;
    console.log(this.sidebarService.donorName);
    // this.sidebarService.branchId = this.branchList?.find(bran => bran.branchId == branchId)?.branchId;
    // this.sidebarService.branchName = this.locationForm.get('branch').value
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: brnchId
    };
    this.baselineService.villagesOfBranch(Dto).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    });
    this.locationForm.controls.block.setValue('');
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villagesOfBranch = [];
    this.villageDtoList = [];
    this.gpDtoList = [];
    if (this.locationForm.value.branch == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.villagesOfBranch = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];
    }
  }
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    this.villageDtoList = [];
    if (this.locationForm.value.block == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.gpDtoList = [];
      this.swasthyaSahayika = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    if (this.locationForm.value.gp == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.villageDtoList = [];
      this.swasthyaSahayika = [];
    }
  }
  changeVillage(villageId) {
    this.branchVillageMapId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageMasterId == villageId)?.branchVillageMapId;
    this.householdFamDetails(this.branchVillageMapId);
    this.locationForm.controls.ssByList.setValue('');
    this.baselineDetails = [];
    this.swasthyaSahayika = [];
    if (this.locationForm.value.gram == '') {
      this.showErrorss('No Data Found');
      this.locationForm.controls.ssByList.setValue('');
      this.baselineDetails = [];
      this.swasthyaSahayika = [];
    }
    this.villageWiseSSList(villageId);
  }
  householdFamDetails(branchVillageMapId = null) {
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: branchVillageMapId
    };
    //API call for viewing HouseholdWithFamilyDetails
    this.loader = false;
    setTimeout(() => {
      this.baselineService.baselineViewDetail(obj).subscribe(response => {
        this.loader = true;
        this.baselineDetails = response.responseObject;
        console.log(this.baselineDetails);
      }, err => {
        this.loader = true;
      });
    }, 1000);
  }
  createForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      ssByList: ['']
    });
  }
  get f() {
    return this.locationForm.controls;
  }
  openModal(viewFamily, familyDetailDTOList, item, title, i) {
    title = this.modalTitle;
    console.log(title);
    console.log(item.householdDetailId, 'ccdd');
    this.householdId = item.householdDetailId;
    this.familyDetails = familyDetailDTOList;
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewFamily, {
      windowClass: 'viewFamily'
    });
  }
  familyModal(viewDetails, id) {
    this.modalDismiss();
    this.getMoreDetails(id);
    this.modalContent = '';
    this.modalReference = this.modalService.open(viewDetails, {
      windowClass: 'viewDetails'
    });
  }
  getMoreDetails(id) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: id
    };
    //API call for viewing Details of centralRegister
    this.baselineService.viewMoreFamilyDetails(postBody).subscribe(response => {
      this.moreDetails = response.responseObject;
      console.log(this.moreDetails);
    });
  }
  modalDismiss() {
    console.log('true');
    if (this.modalTitle == 'D') {
      this.modalReference.close();
      let currentUrl = this.route.url;
      this.route.navigateByUrl('/', {
        skipLocationChange: true
      }).then(() => {
        this.route.navigate([currentUrl]);
      });
    } else {
      this.modalReference.close();
    }
  }
  editHousehold(item) {
    console.log('edit', item);
    this.route.navigate(['/Baseline-Survey/edit'], {
      queryParams: {
        id: item.householdDetailId,
        type: item.familyType,
        tMem: item.totalMembers,
        tFam: item.numberOfFamily,
        hhNo: item.houseHoldNumber,
        bName: item.branchDTO.branchName,
        bId: item.branchDTO.branchId,
        blockName: this.selectedBlock,
        gpName: this.selectedGp,
        vName: this.villageDtoList.find(i => i.branchVillageMapId == item.branchVillageMapId).villageName,
        vId: item.branchVillageMapId,
        ssName: item.swasthyaSahayikaDTO.name,
        ssId: item.swasthyaSahayikaDTO.swasthyaSahayikaId
      }
    });
  }
  deleteHousehold(item, i, familyDetailDTOList, viewFamily, title) {
    this.finalDelHH = item;
    title = 'D';
    this.modalTitle = title;
    this.openModal(familyDetailDTOList, viewFamily, item, title, i);
    console.log(this.modalTitle);
  }
  deleteHH() {
    var item = this.finalDelHH;
    const post = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: this.sidebarService.branchId,
          branchName: this.sidebarService.branchName
        },
        branchVillageMapId: this.branchVillageMapId,
        familyDetailDTOList: [{
          age: item.age,
          bbMicroGroupMembership: item.familyDetailDTOList[0].bbMicroGroupMembership,
          casteTypeMasterDTO: item.familyDetailDTOList[0].casteTypeMasterDTO,
          childDetailDTOList: item.familyDetailDTOList[0].childDetailDTOList ? item.familyDetailDTOList[0].childDetailDTOList : [],
          childrenBelow18: item.familyDetailDTOList[0].childrenBelow18 ? item.familyDetailDTOList[0].childrenBelow18 : 'NA',
          childrenBelow5: item.familyDetailDTOList[0].childrenBelow5 ? item.familyDetailDTOList[0].childrenBelow5 : 'NA',
          createdOn: item.familyDetailDTOList[0].createdOn,
          educationalQualificationMasterDTO: item.familyDetailDTOList[0].educationalQualificationMasterDTO,
          familyDetailId: item.familyDetailDTOList[0].familyDetailId,
          familyDetailRemaingStatusDTO: item.familyDetailDTOList[0].familyDetailRemaingStatusDTO,
          familyNumber: item.familyDetailDTOList[0].familyNumber,
          familyType: item.familyDetailDTOList[0].familyType,
          firstName: item.familyDetailDTOList[0].firstName,
          haveChild: item.familyDetailDTOList[0].haveChild,
          haveSanitaryLatrine: item.familyDetailDTOList[0].haveSanitaryLatrine,
          householdDetailsId: item.familyDetailDTOList[0].householdDetailsId,
          husbandOrGuardianName: item.familyDetailDTOList[0].husbandOrGuardianName,
          identityCardDTOList: item.familyDetailDTOList[0].identityCardDTOList ? item.familyDetailDTOList[0].identityCardDTOList : [],
          institutionalDelivery: item.familyDetailDTOList[0].institutionalDelivery ? 'NA' : 'NA',
          lactetingMother: item.familyDetailDTOList[0].lactetingMother,
          lastName: item.familyDetailDTOList[0].lastName,
          middleName: item.familyDetailDTOList[0].middleName,
          mobileNumber: item.familyDetailDTOList[0].mobileNumber ? item.familyDetailDTOList[0].mobileNumber : '',
          monthlyIncomeMasterDTO: item.familyDetailDTOList[0].monthlyIncomeMasterDTO,
          occupationMasterDTO: item.familyDetailDTOList[0].occupationMasterDTO,
          pregnantWoman: item.familyDetailDTOList[0].pregnantWoman,
          religionMasterDTO: item.familyDetailDTOList[0].religionMasterDTO,
          status: item.familyDetailDTOList[0].status,
          totaFamilyMemberFemales: item.familyDetailDTOList[0].totaFamilyMemberFemales,
          totaFamilyMemberMales: item.familyDetailDTOList[0].totaFamilyMemberMales,
          totaFamilyMemberSrcitizen: item.familyDetailDTOList[0].totaFamilyMemberSrcitizen,
          totalNumberOfChildren: item.familyDetailDTOList[0].totalNumberOfChildren
        }],
        familyType: item.familyType,
        houseHoldNumber: item.houseHoldNumber,
        householdDetailId: item.householdDetailId,
        numberOfFamily: item.numberOfFamily,
        status: "D",
        swasthyaSahayikaDTO: {
          name: "",
          swasthyaSahayikaId: 0
        },
        totalMembers: item.totalMembers
      }
    };
    this.baselineService.saveBaselineSurvey(post).subscribe(response => {
      console.log(response);
      if (response.status == true) {
        this.modalDismiss();
        this.showSuccess(response.message);
        this.householdFamDetails();
      } else {
        this.showError(response.message);
      }
    });
  }
  deleteFamily(item, i) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.familyDetailId
    };
    this.baselineService.viewMoreFamilyDetails(postBody).subscribe(response => {
      let delDetails = response.responseObject;
      console.log(delDetails);
      this.delFam(delDetails, i);
    });
  }
  editFamily(item) {
    console.log(item, 'item');
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this?.householdId
    };
    this.baselineService.baselineSurveyStatus(postBody).subscribe(response => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
      this.modalReference.close();
      this.route.navigate(['/family-info/create'], {
        skipLocationChange: true,
        queryParams: {
          id: item.householdDetailId,
          famid: item.familyDetailId,
          type: item.familyType,
          cFamilyCount: this.familyStatus?.createdFamilyCount,
          cFamilyMembersCount: this.familyStatus?.createdFamilyMambersCount,
          tFamilyCount: this.familyStatus?.totalFamilyCount,
          tFamilyMembersCount: this.familyStatus?.totalFamilyMambersCount,
          donor: this.sidebarService.donorName
        }
      });
    });
  }
  delFam(delDetails, i) {
    if (this.familyDetails.length == 1) {
      this.showError('Please Delete Household');
      return;
    }
    if (confirm('Do you want to delete family: ' + delDetails.firstName + ' ' + delDetails.lastName)) {
      let post = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        familyDetailDTO: {
          age: delDetails.age,
          bbMicroGroupMembership: delDetails.bbMicroGroupMembership,
          casteTypeMasterDTO: {
            casteTypeDescription: delDetails.casteTypeMasterDTO.casteTypeDescription,
            casteTypeMasterId: delDetails.casteTypeMasterDTO.casteTypeMasterId
          },
          childDetailDTOList: delDetails.childDetailDTOList,
          childrenBelow18: delDetails.childrenBelow18,
          childrenBelow5: delDetails.childrenBelow5,
          createdOn: delDetails.createdOn,
          educationalQualificationMasterDTO: {
            educationalQualificationMasterId: delDetails.educationalQualificationMasterDTO.educationalQualificationMasterId,
            qualification: delDetails.educationalQualificationMasterDTO.qualification
          },
          familyDetailId: delDetails.familyDetailId,
          familyDetailRemaingStatusDTO: {
            createdFamilyCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyCount,
            createdFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.createdFamilyMambersCount,
            totalFamilyCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyCount,
            totalFamilyMambersCount: delDetails.familyDetailRemaingStatusDTO.totalFamilyMambersCount
          },
          familyNumber: delDetails.familyNumber,
          familyType: delDetails.familyType,
          firstName: delDetails.firstName,
          haveChild: delDetails.haveChild,
          haveSanitaryLatrine: delDetails.haveSanitaryLatrine,
          householdDetailsId: delDetails.householdDetailsId,
          husbandOrGuardianName: delDetails.husbandOrGuardianName,
          identityCardDTOList: delDetails.identityCardDTOList,
          institutionalDelivery: delDetails.institutionalDelivery,
          lactetingMother: delDetails.lactetingMother,
          lastName: delDetails.lastName,
          middleName: delDetails.middleName,
          mobileNumber: delDetails.mobileNumber,
          monthlyIncomeMasterDTO: {
            incomeRange: delDetails.monthlyIncomeMasterDTO.incomeRange,
            monthlyIncomeMasterId: delDetails.monthlyIncomeMasterDTO.monthlyIncomeMasterId
          },
          occupationMasterDTO: {
            occupationDescription: delDetails.occupationMasterDTO.occupationDescription,
            occupationMasterId: delDetails.occupationMasterDTO.occupationMasterId
          },
          pregnantWoman: delDetails.pregnantWoman,
          religionMasterDTO: {
            religionMasterDescription: delDetails.religionMasterDTO.religionMasterDescription,
            religionMasterId: delDetails.religionMasterDTO.religionMasterId
          },
          status: "D",
          totaFamilyMemberFemales: delDetails.totaFamilyMemberFemales,
          totaFamilyMemberMales: delDetails.totaFamilyMemberMales,
          totaFamilyMemberSrcitizen: delDetails.totaFamilyMemberSrcitizen,
          totalNumberOfChildren: delDetails.totalNumberOfChildren
        }
      };
      this.baselineService.deleteFamily(post).subscribe(response => {
        console.log(response);
        if (response.status == true) {
          this.showSucces(response.message);
          this.familyDetails.splice(i, 1);
        } else {
          this.showErrorr(response.message);
        }
      });
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Household Delete', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Household Delete', {
      timeOut: 3000
    });
  }
  showSucces(message) {
    this.toaster.success(message, 'Family Delete', {
      timeOut: 3000
    });
  }
  showErrorr(message) {
    this.toaster.error(message, 'Family Delete', {
      timeOut: 3000
    });
  }
  p(event) {}
  changeEvent(event) {
    if (event.target.checked) {
      this.toggleBool = false;
      console.log(this.toggleBool);
    } else {
      this.toggleBool = true;
      console.log(this.toggleBool);
    }
  }
  gotoFamily(item) {
    let postBody = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: item.householdDetailId
    };
    this.baselineService.baselineSurveyStatus(postBody).subscribe(response => {
      this.familyStatus = response.responseObject.familyDetailRemaingStatusDTO;
      console.log(this.familyStatus);
      if (item.familyType == 'J' && this.familyStatus?.totalFamilyMambersCount - this.familyStatus?.createdFamilyMambersCount > 0 && this.familyStatus?.totalFamilyCount - this.familyStatus?.createdFamilyCount > 0) {
        this.confirmationDialogService.confirm('', 'Do you want to add more family against Household No : ' + item.houseHoldNumber + ' ?').then(() => this.route.navigate(['/family-info/create'], {
          queryParams: {
            id: item.householdDetailId,
            type: item.familyType,
            cFamilyCount: this.familyStatus.createdFamilyCount,
            cFamilyMembersCount: this.familyStatus.createdFamilyMambersCount,
            tFamilyCount: this.familyStatus.totalFamilyCount,
            tFamilyMembersCount: this.familyStatus.totalFamilyMambersCount,
            donor: this.sidebarService.donorName
          }
        })).catch(() => '');
      } else {
        this.showError('All Family Member or Family Count Is Already Added');
        return;
      }
    });
  }
  villageWiseSSList(villageId) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: parseInt(villageId)
    };
    console.log(req, 'villbyss');
    this.baselineService.VillageWiseSSList(req).subscribe(res => {
      this.swasthyaSahayika = res.responseObject;
      console.log(this.swasthyaSahayika, 'this.swasthyaSahayika');
    });
  }
  ssWiseViewList(ssName) {
    console.log(ssName);
    let obj = {
      activeStatus: "A",
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.branchVillageMapId
    };
    //API call for viewing HouseholdWithFamilyDetails
    this.loader = false;
    this.baselineService.baselineViewDetail(obj).subscribe(response => {
      this.baselineDetails = response.responseObject;
      console.log(this.baselineDetails);
      this.callSSfilter(ssName);
      this.loader = true;
    });
  }
  callSSfilter(ssName) {
    this.ssNameFilter = this.baselineDetails.filter(item => item.swasthyaSahayikaDTO.name == ssName);
    console.log(this.ssNameFilter);
    if (ssName) {
      if (this.ssNameFilter.length == 0) {
        this.showErrorss('No matched data with' + ' ' + ssName);
        this.baselineDetails = this.ssNameFilter;
      } else {
        this.baselineDetails = this.ssNameFilter;
      }
    }
  }
  showErrorss(message) {
    this.toaster.error(message, '', {
      timeOut: 3000
    });
  }
}
BaselineViewComponent.ɵfac = function BaselineViewComponent_Factory(t) {
  return new (t || BaselineViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_baseline_survey_service__WEBPACK_IMPORTED_MODULE_1__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__.SidebarService));
};
BaselineViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: BaselineViewComponent,
  selectors: [["app-baseline-view"]],
  decls: 99,
  vars: 38,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "col"], [1, "page-title"], [2, "color", "blue"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search by household no. ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["viewFamily", ""], ["viewDetails", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [3, "value"], ["formControlName", "ssByList", "id", "ssByList", 1, "form-select", 3, "change"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", "btn-link", "style", "color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Household", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Household", 3, "click", 4, "ngIf"], ["title", "Edit Household", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Household", 1, "fas", "fa-trash", 3, "click"], [1, "modal-content"], [1, "modal-header", 2, "height", "80px"], [1, "white_box", "QA_section", "mb_30", 2, "height", "100px"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", "margin-bottom", "25px", 3, "click"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], [2, "text-align", "center"], ["class", "form-check", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Family", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Family", 3, "click", 4, "ngIf"], ["title", "Edit Family", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Family", 1, "fas", "fa-trash", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexCheckDefault", 1, "form-check-label"], [3, "click"], ["id", "deleteButton", 1, "btn", "btn-danger"], ["aria-hidden", "true", 1, "fas", "fa-trash"], ["disabled", "", "id", "deleteButton", 1, "btn", "btn-danger"], [1, "modal-content", 2, "height", "500px"], ["title", "close", 1, "closes", 2, "cursor", "pointer", "font-size", "35px", "margin-bottom", "25px", 3, "click"], [1, "modal-body"], [1, "scheduler-border"], [1, "form-group", "col-md-6"], ["for", "", 2, "font-weight", "500", "font-size", "1.05rem"], ["for", ""], [1, "col-md-6"], ["class", "form-group col-md-6", 4, "ngIf"], ["id", "table_wrapper", 1, "table", "table-striped"]],
  template: function BaselineViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "View Household Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, BaselineViewComponent_div_13_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 2)(15, "div", 10)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_Template_select_change_20_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, BaselineViewComponent_option_23_Template, 2, 1, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, BaselineViewComponent_div_24_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 10)(26, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_Template_select_change_30_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, BaselineViewComponent_option_33_Template, 2, 1, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, BaselineViewComponent_div_34_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 10)(36, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BaselineViewComponent_Template_select_change_40_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, BaselineViewComponent_option_43_Template, 2, 2, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, BaselineViewComponent_div_44_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, BaselineViewComponent_div_45_Template, 7, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 23)(47, "div", 24)(48, "div", 25)(49, "form", 26)(50, "div", 27)(51, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function BaselineViewComponent_Template_input_ngModelChange_51_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 31)(55, "div", 32)(56, "div", 33)(57, "table", 34)(58, "thead", 35)(59, "tr")(60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "SL");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](66, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, " No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, " Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, " Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Total Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](78, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, " of Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Swasthya ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](82, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Sahayika");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, BaselineViewComponent_th_88_Template, 4, 0, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, BaselineViewComponent_th_89_Template, 2, 0, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](91, BaselineViewComponent_tr_91_Template, 18, 9, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](92, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](93, "baselineFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "pagination-controls", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function BaselineViewComponent_Template_pagination_controls_pageChange_94_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function BaselineViewComponent_Template_pagination_controls_pageBoundsCorrection_94_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, BaselineViewComponent_ng_template_95_Template, 45, 5, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, BaselineViewComponent_ng_template_97_Template, 242, 30, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](25, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](28, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](31, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.locationForm.value.gram);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.updateMode || ctx.deleteMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](92, 19, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](93, 22, ctx.baselineDetails, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](34, _c1, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](36, _c2, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe, _shared_baseline_view_search_pipe__WEBPACK_IMPORTED_MODULE_8__.baselineFilterPipe],
  styles: [".QA_table[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n  height: 400px;\r\n  \r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 12px 25px;\r\n}\r\n\r\n.fa-plus[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 22px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  width: 1000px;\r\n  margin-left: -190px;\r\n  margin-top: -4px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  justify-content: unset;\r\n  margin-left: 779px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -200px;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 540px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 840px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n\r\n#deleteButton[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: -30px;\r\n  margin-right: 20px;\r\n\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.closes[_ngcontent-%COMP%] {\r\n  margin-left: 700px;\r\n}\r\n\r\n.white_box[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9iYXNlbGluZS1zdXJ2ZXkvYmFzZWxpbmUtdmlldy9iYXNlbGluZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi5RQV90YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgLyogd2lkdGg6IDEwODBweDsgKi9cclxufVxyXG5cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIC50YWJsZSB0aGVhZCB0aCB7XHJcbiAgcGFkZGluZzogMTJweCAyNXB4O1xyXG59XHJcblxyXG4uZmEtcGx1cyB7XHJcbiAgY29sb3I6ICMzZTc3NTggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NzlweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgY29sb3I6ICMzZTc3NTggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNTQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogODQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG5cclxuXHJcbiNkZWxldGVCdXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmNsb3NlcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xyXG59XHJcblxyXG4ud2hpdGVfYm94IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 75934:
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/baseline-view-search.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baselineFilterPipe": () => (/* binding */ baselineFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class baselineFilterPipe {
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
baselineFilterPipe.ɵfac = function baselineFilterPipe_Factory(t) {
  return new (t || baselineFilterPipe)();
};
baselineFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "baselineFilter",
  type: baselineFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_baseline-survey_baseline-survey_module_ts.js.map