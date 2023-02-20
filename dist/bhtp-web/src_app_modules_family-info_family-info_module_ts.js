"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_family-info_family-info_module_ts"],{

/***/ 65353:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/family-info/family-info-create/family-info-create.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyInfoCreateComponent": () => (/* binding */ FamilyInfoCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _family_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../family-info.service */ 82328);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










const _c0 = ["aadhaarId"];
function FamilyInfoCreateComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_14_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_14_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.minlength);
  }
}
function FamilyInfoCreateComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_19_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.middleName.errors.minlength);
  }
}
function FamilyInfoCreateComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_24_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.lastName.errors.minlength);
  }
}
function FamilyInfoCreateComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_31_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.age.errors.required);
  }
}
function FamilyInfoCreateComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Husband/Guardian\u2019s Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_39_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_39_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.husbandName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.husbandName.errors.minlength);
  }
}
function FamilyInfoCreateComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_44_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_44_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.mobile.errors.pattern);
  }
}
function FamilyInfoCreateComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r42.identityCardTypesMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r42.name);
  }
}
function FamilyInfoCreateComponent_div_52_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " AADHAAR CARD Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_52_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " AADHAAR CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_52_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_52_div_7_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_52_div_7_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.f.aadhar.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.f.aadhar.errors.minlength || ctx_r45.f.aadhar.errors.pattern);
  }
}
const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function FamilyInfoCreateComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "AADHAAR CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_div_52_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r48.validationService.onlyIntegerAndSpace($event));
    })("keyup", function FamilyInfoCreateComponent_div_52_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.aadharcardValidation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FamilyInfoCreateComponent_div_52_div_7_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r7.f.aadhar.invalid && ctx_r7.f.aadhar.touched, ctx_r7.f.aadhar.valid && (ctx_r7.f.aadhar.dirty || ctx_r7.f.aadhar.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.aadhar.errors);
  }
}
function FamilyInfoCreateComponent_div_53_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " PAN Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_53_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " PAN Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_53_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_53_div_6_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_53_div_6_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r51.f.pan.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r51.f.pan.errors.minlength || ctx_r51.f.pan.errors.pattern);
  }
}
function FamilyInfoCreateComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PAN CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_div_53_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.validationService.charnum($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FamilyInfoCreateComponent_div_53_div_6_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r8.f.pan.invalid && ctx_r8.f.pan.touched, ctx_r8.f.pan.valid && (ctx_r8.f.pan.dirty || ctx_r8.f.pan.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.pan.errors);
  }
}
function FamilyInfoCreateComponent_div_54_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VOTER CARD Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_54_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VOTER CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_54_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_54_div_6_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_div_54_div_6_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r56.f.voter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r56.f.voter.errors.pattern);
  }
}
function FamilyInfoCreateComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " VOTER CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FamilyInfoCreateComponent_div_54_div_6_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r9.f.voter.invalid && ctx_r9.f.voter.touched, ctx_r9.f.voter.valid && (ctx_r9.f.voter.dirty || ctx_r9.f.voter.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.voter.errors);
  }
}
function FamilyInfoCreateComponent_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r59.religionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r59.religionMasterDescription);
  }
}
function FamilyInfoCreateComponent_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Religion is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_65_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.religion.errors.required);
  }
}
function FamilyInfoCreateComponent_option_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r62.casteTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r62.casteTypeDescription, "");
  }
}
function FamilyInfoCreateComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Caste is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_75_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.f.caste.errors.required);
  }
}
function FamilyInfoCreateComponent_option_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r65.educationalQualificationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r65.qualification, " ");
  }
}
function FamilyInfoCreateComponent_option_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r67.monthlyIncomeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r67.incomeRange);
  }
}
function FamilyInfoCreateComponent_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r69.occupationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r69.occupationDescription);
  }
}
function FamilyInfoCreateComponent_div_104_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Male is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_104_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.f.fmale.errors.required);
  }
}
function FamilyInfoCreateComponent_div_111_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Female is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_111_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.f.ffemale.errors.required);
  }
}
function FamilyInfoCreateComponent_div_120_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Senior Citizen is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_120_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.f.fsenior.errors.required);
  }
}
function FamilyInfoCreateComponent_label_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bandhan Bank Micro Group :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FamilyInfoCreateComponent_label_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Micro Group :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FamilyInfoCreateComponent_div_132_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Micro Group is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_132_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.f.bbMicro.errors.required);
  }
}
function FamilyInfoCreateComponent_div_133_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pregnancy selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_133_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_133_div_14_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r75.f.pregnancy.errors.required);
  }
}
function FamilyInfoCreateComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Are you pregnant now? :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 77)(6, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "-- Select Pregnancy --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FamilyInfoCreateComponent_div_133_div_14_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c1, ctx_r23.f.pregnancy.invalid && ctx_r23.f.pregnancy.touched, ctx_r23.f.pregnancy.valid && (ctx_r23.f.pregnancy.dirty || ctx_r23.f.pregnancy.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r23.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.f.pregnancy.errors);
  }
}
function FamilyInfoCreateComponent_div_134_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pregnancy selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_134_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_134_div_14_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r77.f.pregnancy.errors.required);
  }
}
function FamilyInfoCreateComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Are you pregnant now? :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 77)(6, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "-- Select Pregnancy --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FamilyInfoCreateComponent_div_134_div_14_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r24.f.pregnancy.invalid && ctx_r24.f.pregnancy.touched, ctx_r24.f.pregnancy.valid && (ctx_r24.f.pregnancy.dirty || ctx_r24.f.pregnancy.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.f.pregnancy.errors);
  }
}
function FamilyInfoCreateComponent_div_164_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Children count is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_div_164_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_div_164_div_6_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r79.f.child.errors.required);
  }
}
function FamilyInfoCreateComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " How many children do you have?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_div_164_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r81.validationService.onlyInteger($event));
    })("keydown", function FamilyInfoCreateComponent_div_164_Template_input_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r83.restrictZero($event));
    })("keyup", function FamilyInfoCreateComponent_div_164_Template_input_keyup_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r84.checkChildren());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FamilyInfoCreateComponent_div_164_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r25.f.child.invalid && ctx_r25.f.child.touched, ctx_r25.f.child.valid && (ctx_r25.f.child.dirty || ctx_r25.f.child.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.f.child.errors);
  }
}
function FamilyInfoCreateComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Do you have any child below 18 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 48)(6, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_165_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r85.childBelow18($event));
    })("click", function FamilyInfoCreateComponent_div_165_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r87.radioValueCheck(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_165_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r88.childBelow18($event));
    })("click", function FamilyInfoCreateComponent_div_165_Template_input_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r89.radioValueCheck(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r26.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", !ctx_r26.showChildDetails);
  }
}
function FamilyInfoCreateComponent_div_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Do you have children below 5 years?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 48)(6, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_166_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r90.childBelow5($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_166_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r92.childBelow5($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r27.showChildDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", !ctx_r27.showChildDetails);
  }
}
function FamilyInfoCreateComponent_div_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "In the case of the last delivery, where did it has been taken place?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 48)(6, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_167_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r93.institutionallDelivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00A0\u00A0Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_167_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r95.institutionallDelivery($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u00A0\u00A0Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function FamilyInfoCreateComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Are you breastfeeding your child aged below 2 years till now?\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 48)(6, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_169_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r96.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_169_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r98.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 48)(15, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_div_169_Template_input_change_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r99.breastFeeding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \u00A0\u00A0N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function FamilyInfoCreateComponent_button_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_button_177_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r101);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r100.resetBaselineCreate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_1_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r114.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_1_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r116.validationService.titleCase($event));
    })("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r117.childDetails.childInfo[i_r105].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r106.childDetails.childInfo[i_r105].childName);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_2_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r121);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r120.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_2_Template_input_keypress_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r121);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r122.validationService.titleCase($event));
    })("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r121);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r123.childDetails.childInfo[i_r105].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r107.childDetails.childInfo[i_r105].childName);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r127);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r126.childDetails.childInfo[i_r105].dob = $event);
    })("keydown", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_3_Template_input_keydown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r127);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r129.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r108.childDetails.childInfo[i_r105].dob)("min", ctx_r108.minDate)("max", ctx_r108.today);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r131.childDetails.childInfo[i_r105].dob = $event);
    })("keydown", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_4_Template_input_keydown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r134.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r109.childDetails.childInfo[i_r105].dob)("min", ctx_r109.minDate)("max", ctx_r109.today);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_5_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r137);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r136.childDetails.childInfo[i_r105].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r110.childDetails.childInfo[i_r105].sex);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 121)(1, "select", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_6_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r141);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r140.childDetails.childInfo[i_r105].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r111.childDetails.childInfo[i_r105].sex);
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_ng_template_181_tr_25_td_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r146);
      const i_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r144.removeNewChild(i_r105));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Selected for delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FamilyInfoCreateComponent_ng_template_181_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FamilyInfoCreateComponent_ng_template_181_tr_25_td_1_Template, 2, 1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FamilyInfoCreateComponent_ng_template_181_tr_25_td_2_Template, 2, 1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FamilyInfoCreateComponent_ng_template_181_tr_25_td_3_Template, 2, 3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FamilyInfoCreateComponent_ng_template_181_tr_25_td_4_Template, 2, 3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FamilyInfoCreateComponent_ng_template_181_tr_25_td_5_Template, 10, 1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FamilyInfoCreateComponent_ng_template_181_tr_25_td_6_Template, 10, 1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FamilyInfoCreateComponent_ng_template_181_tr_25_td_7_Template, 3, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FamilyInfoCreateComponent_ng_template_181_tr_25_td_8_Template, 3, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r105 = ctx.index;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r103.childDetails.childInfo[i_r105].status == "D");
  }
}
function FamilyInfoCreateComponent_ng_template_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "div", 1)(3, "div", 100)(4, "h4", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Child Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 102)(7, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_ng_template_181_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r147.addNewChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 104)(9, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_ng_template_181_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r149.childModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 106)(12, "div", 107)(13, "table", 108)(14, "thead")(15, "tr", 109)(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, FamilyInfoCreateComponent_ng_template_181_tr_25_Template, 9, 8, "tr", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1)(27, "div", 2)(28, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_ng_template_181_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r150.saveChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r32.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r32.checkChildDisabled());
  }
}
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class FamilyInfoCreateComponent {
  constructor(fb, modalService, familyService, httpService, validationService, toaster, routes, route) {
    this.fb = fb;
    this.modalService = modalService;
    this.familyService = familyService;
    this.httpService = httpService;
    this.validationService = validationService;
    this.toaster = toaster;
    this.routes = routes;
    this.route = route;
    this.haveChildren = 'N';
    this.breastfeeding = 'NA';
    this.today = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.addSum = 0;
    this.showAge = 0;
    this.ageCheck = 0;
    this.childDetails = {
      childInfo: []
    };
    this.showChildDetails = false;
    this.activeChild = [];
    this.isDisabled = false;
  }
  ngOnInit() {
    this.routes.queryParams.subscribe(params => {
      this.famData = params;
      console.log(this.famData, 'famdata');
      console.log(this.famData?.famid, 'familyki id');
    });
    if (this.famData.famid) {
      console.log(this.famData, 'adds');
      let post = {
        activeStatus: "A",
        dataAccessDTO: this.httpService.dataAccessDTO,
        id: this.famData.famid
      };
      this.familyService.viewFamilyDetails(post).subscribe(res => {
        this.moreFamData = res.responseObject;
        console.log(this.moreFamData, 'more');
        this.createForm(this.moreFamData);
        this.familyid = this.moreFamData.familyDetailId;
        if (this.moreFamData) {
          this.moreFamData.childDetailDTOList.forEach(e => {
            e.dob = e.dob.substring(0, 10);
          });
          this.childDetails.childInfo = this.moreFamData.childDetailDTOList;
        }
        this.baselineSurvey.markAllAsTouched();
      });
    }
    this.routes.queryParams.subscribe(params => {
      this.houseHoldId = params['id'];
      this.famType = params['type'];
      this.createdFamilyCount = params['cFamilyCount'];
      this.createdFamilyMembersCount = params['cFamilyMembersCount'];
      this.totalFamilyCount = params['tFamilyCount'];
      this.totalFamilyMembersCount = params['tFamilyMembersCount'];
      this.donorName = params['donor'];
    });
    this.getMinDate();
    this.createForm(this.moreFamData);
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
    this.familyService.getCasteView(obj).subscribe(response => {
      this.casteList = response.responseObject;
      // console.log(this.casteList);
    });
    //API call for getting education details
    this.familyService.getEducationDetails(obj).subscribe(response => {
      this.educationList = response.responseObject;
      // console.log(this.educationList);
    });
    //API call for getting monthlyIncomeDetails
    this.familyService.monthlyIncomeDetails(obj).subscribe(response => {
      this.householdIncomeDetails = response.responseObject;
      // console.log(this.householdIncomeDetails);
    });
    //API call for getting religionDetails
    this.familyService.religionDetails(obj).subscribe(response => {
      this.religionDetails = response.responseObject;
      // console.log(this.religionDetails);
    });
    //API call for getting occupationDetails
    this.familyService.occupationDetails(obj).subscribe(response => {
      this.occupationDetails = response.responseObject;
      // console.log(this.occupationDetails);
    });
    //API call for getting idCardDetails
    this.familyService.getIdCardDetails(obj).subscribe(response => {
      this.cardDetails = response.responseObject;
      // console.log(this.cardDetails);
    });
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
  createForm(data) {
    this.totalmale = data?.totaFamilyMemberMales;
    this.totalfemale = data?.totaFamilyMemberFemales;
    if (data?.haveChild == 'Y') {
      this.haveChildren = 'Y';
    } else {
      this.haveChildren = 'N';
    }
    if (data?.childrenBelow18 == 'Y') {
      this.childbelow18 = 'Y';
      this.showChildDetails = true;
    } else {
      this.childbelow18 = 'N';
    }
    if (data?.childrenBelow5 == 'Y') {
      this.childbelow5 = 'Y';
    } else {
      this.childbelow5 = 'N';
    }
    if (data?.totaFamilyMemberMales == 0) {
      var setMaleCount = "0";
    } else {
      setMaleCount = data?.totaFamilyMemberMales;
    }
    if (data?.totaFamilyMemberSrcitizen == 0) {
      var setSeniorCount = "0";
    } else {
      setSeniorCount = data?.totaFamilyMemberSrcitizen;
    }
    this.baselineSurvey = this.fb.group({
      firstName: [data?.firstName ? data?.firstName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      middleName: [data?.middleName ? data?.middleName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      lastName: [data?.lastName ? data?.lastName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      age: [data?.age ? data?.age : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(2)])],
      husbandName: [data?.husbandOrGuardianName ? data?.husbandOrGuardianName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      mobile: [data?.mobileNumber ? data?.mobileNumber : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[6789][0-9]{9}")])],
      idtype: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId ? data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId : ''],
      aadhar: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 1 ? data?.identityCardDTOList[0]?.number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 2 ? data?.identityCardDTOList[0]?.number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: [data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId == 3 ? data?.identityCardDTOList[0]?.number : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("([A-Z]{2}\\/[0-9]{2}\\/[0-9]{3}\\/[0-9]{6})|([A-Z]{3}[0-9]{7})")])],
      religion: [data?.religionMasterDTO?.religionMasterId ? data?.religionMasterDTO?.religionMasterId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      caste: [data?.casteTypeMasterDTO?.casteTypeMasterId ? data?.casteTypeMasterDTO?.casteTypeMasterId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      education: [data?.educationalQualificationMasterDTO?.educationalQualificationMasterId ? data?.educationalQualificationMasterDTO?.educationalQualificationMasterId : ''],
      household: [data?.monthlyIncomeMasterDTO?.monthlyIncomeMasterId ? data?.monthlyIncomeMasterDTO?.monthlyIncomeMasterId : ''],
      occupation: [data?.occupationMasterDTO?.occupationMasterId ? data?.occupationMasterDTO?.occupationMasterId : ''],
      fmale: [setMaleCount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ffemale: [data?.totaFamilyMemberFemales ? data?.totaFamilyMemberFemales : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      fsenior: [setSeniorCount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      bbMicro: [data?.bbMicroGroupMembership ? data?.bbMicroGroupMembership : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      pregnancy: [data?.pregnantWoman ? data?.pregnantWoman : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      sanitary: data?.haveSanitaryLatrine ? data?.haveSanitaryLatrine : this.haveSanitaryLatrine,
      haveChildren: data?.haveChild ? data?.haveChild : this.haveChildren,
      child: [data?.totalNumberOfChildren ? data?.totalNumberOfChildren : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      childbelow18: data?.childrenBelow18 ? data?.childrenBelow18 : 'NA',
      childbelow5: data?.childrenBelow5 ? data?.childrenBelow5 : 'NA',
      institutional: [data?.institutionalDelivery ? data?.institutionalDelivery : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      breastFeeding: data?.lactetingMother ? data?.lactetingMother : this.breastfeeding
    });
    this.addMF();
    this.IdType(data?.identityCardDTOList[0]?.identityCardTypesMasterDTO.identityCardTypesMasterId);
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
    if (this.famData.famid > 0) {
      this.childDetails.childInfo.filter(v => v.status = 'D');
    } else {
      this.childDetails.childInfo = [];
    }
  }
  childBelow18(e) {
    this.childbelow18 = e.target.value;
    this.baselineSurvey.controls.childbelow5.setValue('');
    this.baselineSurvey.controls.institutional.setValue('');
    this.baselineSurvey.controls.breastFeeding.setValue('NA');
    if (this.famData.famid > 0) {
      this.childDetails.childInfo.filter(v => v.status = 'D');
    } else {
      this.childDetails.childInfo = [];
    }
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
    this.route.navigate(['/Baseline-Survey/view']);
  }
  resetBaselineCreate() {
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.haveChildren = 'N';
    this.childbelow18 = '';
    this.childbelow5 = '';
    this.breastfeeding = 'NA';
    this.institutionalDelivery = '';
    this.showChildDetails = false;
    this.createForm(this.moreFamData);
    this.addSum = 0;
  }
  saveFamilyCreate() {
    let item = this.baselineSurvey.value;
    let idValue = '';
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
    let data = {
      familyDetailRemaingStatusDTO: {
        createdFamilyCount: this.createdFamilyCount,
        createdFamilyMambersCount: this.createdFamilyMembersCount,
        totalFamilyCount: this.totalFamilyCount,
        totalFamilyMambersCount: this.totalFamilyMembersCount
      }
    };
    if (item.idtype != 1 || item.idtype != 2 || item.idtype != 3) {
      this.idCard = [];
    }
    if (item.idtype == 1 || item.idtype == 2 || item.idtype == 3) {
      this.idCard = [{
        familyIdentityCardMapId: this.moreFamData?.identityCardDTOList[0]?.familyIdentityCardMapId ? this.moreFamData?.identityCardDTOList[0]?.familyIdentityCardMapId : 0,
        identityCardTypesMasterDTO: {
          identityCardTypesMasterId: item.idtype,
          name: this.cardDetails.filter(x => x.identityCardTypesMasterId == item.idtype)[0]?.name
        },
        number: idValue
      }];
    }
    if (this.finalDelChild != undefined) {
      this.childSetData = this.finalDelChild ? this.finalDelChild : this.moreFamData?.childDetailDTOList;
    } else {
      this.childSetData = this.childDetails.childInfo;
    }
    let postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailDTO: {
        age: item.age,
        bbMicroGroupMembership: item.bbMicro,
        casteTypeMasterDTO: {
          casteTypeDescription: this.casteList.filter(x => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription ? this.casteList.filter(x => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription : '',
          casteTypeMasterId: item.caste ? item.caste : 0
        },
        childDetailDTOList: this.childSetData,
        childrenBelow18: item.childbelow18 ? item.childbelow18 : 'NA',
        childrenBelow5: item.childbelow5 ? item.childbelow5 : 'NA',
        createdOn: this.moreFamData?.createdOn ? this.moreFamData?.createdOn : 'string',
        educationalQualificationMasterDTO: {
          educationalQualificationMasterId: item.education ? item.education : 0,
          qualification: this.educationList.filter(x => x.educationalQualificationMasterId == item.education)[0]?.qualification ? this.educationList.filter(x => x.educationalQualificationMasterId == item.education)[0]?.qualification : ''
        },
        existingChildCount: 0,
        familyDetailId: this.moreFamData?.familyDetailId ? this.moreFamData?.familyDetailId : 0,
        familyDetailRemaingStatusDTO: this.moreFamData?.familyDetailRemaingStatusDTO ? this.moreFamData?.familyDetailRemaingStatusDTO : data.familyDetailRemaingStatusDTO,
        familyNumber: this.moreFamData?.familyNumber ? this.moreFamData?.familyNumber : "string",
        familyType: this.moreFamData?.familyType ? this.moreFamData?.familyType : this.famType,
        firstName: item.firstName,
        haveChild: item.haveChildren,
        haveSanitaryLatrine: item.sanitary,
        householdDetailsId: this.moreFamData?.householdDetailsId ? this.moreFamData?.householdDetailsId : this.houseHoldId,
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
          religionMasterDescription: this.religionDetails.filter(x => x.religionMasterId == item.religion)[0]?.religionMasterDescription ? this.religionDetails.filter(x => x.religionMasterId == item.religion)[0]?.religionMasterDescription : '',
          religionMasterId: item.religion ? item.religion : 0
        },
        status: "A",
        totaFamilyMemberFemales: item.ffemale,
        totaFamilyMemberMales: item.fmale,
        totaFamilyMemberSrcitizen: item.fsenior,
        totalNumberOfChildren: item.child ? item.child : 0
      }
    };
    console.log(postBody);
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
        // var x = this.baselineSurvey.value.voter;
        // if (!regexp.test(x)) {
        //   this.showError('Invalid Voter Card No!');
        //   return;
        // }
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
      this.ageCheck = item.dob;
      if (this.ageCheck) {
        const convertAge = new Date(this.ageCheck);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.childDetails.childInfo[index].showAge = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365.25);
      }
    });
    this.activeChild = this.childDetails.childInfo.filter(x => x.status == 'A');
    // console.log(this.activeChild.length);
    if (this.baselineSurvey.value.childbelow18 == 'Y' || this.baselineSurvey.value.breastFeeding == 'Y' || this.baselineSurvey.value.breastFeeding == 'N' || this.baselineSurvey.value.childbelow5 == 'Y') {
      if (this.activeChild.length == 0) {
        this.showError('Please add child details');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow18 == 'Y') {
      if (this.showAge > 18) {
        this.showError('Please add a child below 18 years');
        return;
      }
    }
    if (this.baselineSurvey.value.childbelow5 == 'Y') {
      let isvalid = 0;
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 5) {
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
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 5) {
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
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 2) {
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
      this.activeChild.forEach((item, index) => {
        if (this.activeChild[index].showAge <= 2) {
          isvalid += 1;
        }
      });
      if (isvalid > 0) {
        this.showError('You can not add child below 2 years');
        return;
      }
    }
    let maleData = this.childDetails.childInfo.filter(x => x.sex == 'M' && x.status == 'A');
    let femaleData = this.childDetails.childInfo.filter(x => x.sex == 'F' && x.status == 'A');
    if (this.baselineSurvey.value.fmale < maleData.length) {
      this.showError('Total Male child should not be more than Total Family Member Male');
      return;
    }
    if (this.baselineSurvey.value.ffemale <= femaleData.length) {
      this.showError('Total Female child should not be more than or equal to Total Family Member Female');
      return;
    }
    if (this.famData.famid) {
      this.familyService.saveFamily(postBody).subscribe(response => {
        console.log(response);
        if (response.status == true) {
          this.showSuccess(response.message);
          this.route.navigate(['Baseline-Survey/view']);
        } else {
          this.showError(response.message);
        }
      });
    } else {
      this.familyService.saveFamily(postBody).subscribe(response => {
        console.log(response);
        if (response.status == true) {
          this.showSuccess(response.message);
          this.resetBaselineCreate();
        } else {
          this.showError(response.message);
        }
      });
    }
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
      familyDetailId: this.familyid ? this.familyid : 0,
      sex: '',
      status: 'A'
    });
  }
  childModalDismiss() {
    this.modalReference?.close();
  }
  removeNewChild(i) {
    if (this.famData.famid > 0) {
      this.childDetails.childInfo[i] = {
        age: 'string',
        childDetailId: this.childDetails.childInfo[i].childDetailId,
        childName: this.childDetails.childInfo[i].childName,
        createdOn: 'string',
        dob: this.childDetails.childInfo[i].dob,
        familyDetailId: this.childDetails.childInfo[i].familyDetailId,
        sex: this.childDetails.childInfo[i].sex,
        status: 'D'
      };
      this.finalDelChild = this.childDetails.childInfo;
      console.log(this.finalDelChild, 'arrayList');
    } else {
      this.childDetails.childInfo.splice(i, 1);
    }
    if (this.childDetails.childInfo[i]?.childName == '' || this.childDetails.childInfo[i]?.dob == '' || this.childDetails.childInfo[i]?.sex == '' || this.childDetails.childInfo[i]?.childDetailId == 0) {
      this.childDetails.childInfo.splice(i, 1);
    }
  }
  restrictZero(event) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }
  zeroAge() {
    if (this.baselineSurvey.value.age.startsWith(0)) {
      this.showError('Age should not be zero');
      this.baselineSurvey.controls.age.setValue('');
      return;
    }
  }
  zeroFemale() {
    if (this.baselineSurvey.value.ffemale.startsWith(0)) {
      this.showError('Female count should not be zero');
      this.baselineSurvey.controls.ffemale.setValue('');
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
    this.toaster.success(message, 'Family Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Family Save', {
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
    if (this.famData.famid > 0) {
      var SumForMaleFemaleCheck = this.totalmale + this.totalfemale;
      console.log(SumForMaleFemaleCheck, 'checkData');
      var forEditHouseHoldMemberCount = this.createdFamilyMembersCount - SumForMaleFemaleCheck;
      console.log(forEditHouseHoldMemberCount, 'addd');
      let totalHousehold = this.totalFamilyMembersCount - forEditHouseHoldMemberCount;
      let totalMale = 0;
      let totalFemale = 0;
      let item = this.baselineSurvey.value;
      if (item.fmale != '' && item.fmale != undefined) {
        totalMale = parseInt(item.fmale);
      }
      if (item.ffemale != '' && item.ffemale != undefined) {
        totalFemale = parseInt(item.ffemale);
      }
      console.log(totalHousehold, 'avvf');
      if (totalHousehold < totalMale + totalFemale && totalHousehold != totalMale + totalFemale) {
        this.baselineSurvey.controls.fmale.setValue('');
        this.baselineSurvey.controls.ffemale.setValue('');
        this.addSum = 0;
        this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
      }
    } else {
      let totalHousehold = this.totalFamilyMembersCount - this.createdFamilyMembersCount;
      console.log(this.addSum, 'addd');
      let totalMale = 0;
      let totalFemale = 0;
      let item = this.baselineSurvey.value;
      if (item.fmale != '' && item.fmale != undefined) {
        totalMale = parseInt(item.fmale);
      }
      if (item.ffemale != '' && item.ffemale != undefined) {
        totalFemale = parseInt(item.ffemale);
      }
      console.log(totalHousehold, 'avvs');
      if (totalHousehold < totalMale + totalFemale && totalHousehold != totalMale + totalFemale) {
        this.baselineSurvey.controls.fmale.setValue('');
        this.baselineSurvey.controls.ffemale.setValue('');
        this.addSum = 0;
        this.showError('Total Member of Household must be greater than or equal to sum of Total Male & Total Female');
      }
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
  saveChild() {
    let totalChildren = 0;
    let item = this.baselineSurvey.value;
    if (item.child != '' && item.child != undefined) {
      totalChildren = parseInt(item.child);
    }
    var actLen = [];
    actLen = this.childDetails.childInfo.filter(x => x.status == 'A');
    if (totalChildren < actLen.length) {
      this.showError(' Entered child data should not be more than children count');
      // return;
    } else {
      console.log(this.childDetails);
      console.log(this.finalDelChild);
      this.modalReference.close();
    }
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
  restrictTypeOfDate() {
    return false;
  }
}
FamilyInfoCreateComponent.ɵfac = function FamilyInfoCreateComponent_Factory(t) {
  return new (t || FamilyInfoCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_family_info_service__WEBPACK_IMPORTED_MODULE_0__.FamilyInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
FamilyInfoCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FamilyInfoCreateComponent,
  selectors: [["app-family-info-create"]],
  viewQuery: function FamilyInfoCreateComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.aadhaarId = _t.first);
    }
  },
  decls: 183,
  vars: 79,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "firstName"], [1, "text-danger"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", "maxlength", "20", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "middleName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Middle Name", "formControlName", "middleName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "lastName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "age"], ["type", "", "maxlength", "2", "placeholder", "Enter Age", "formControlName", "age", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], [1, "form-group", "col-md-3"], ["for", "husbandName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Husband Name", "formControlName", "husbandName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "mobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "mobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "idtype"], ["formControlName", "idtype", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], ["for", "religion"], ["formControlName", "religion", "id", "religion", 1, "form-select", 3, "ngClass"], ["for", "caste"], ["formControlName", "caste", "id", "caste", 1, "form-select", 3, "ngClass"], ["for", "education"], ["formControlName", "education", "id", "education", 1, "form-select"], ["for", "household"], ["formControlName", "household", "id", "household", 1, "form-select"], ["for", "occupation"], ["formControlName", "occupation", "id", "occupation", 1, "form-select"], ["for", "fmale"], ["type", "text", "maxlength", "2", "placeholder", "Child, Adult, and Senior", "formControlName", "fmale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change"], ["for", "ffemale"], ["type", "text", "placeholder", "Child, Adult, and Senior", "maxlength", "2", "formControlName", "ffemale", 1, "form-control", 3, "ngClass", "keypress", "keyup", "change", "keydown"], ["for", "fsenior"], ["type", "text", "maxlength", "2", "placeholder", "Enter Total Senior Citizen", "formControlName", "fsenior", 1, "form-control", 3, "ngClass", "keypress", "change", "keyup"], ["for", "bbMicro", 4, "ngIf"], ["formControlName", "bbMicro", "id", "bbMicro", 1, "form-select", 3, "ngClass"], ["value", "Y"], ["value", "N"], ["for", "sanitary"], [1, "form-check-inline"], ["name", "sanitary", "type", "radio", "id", "yes", "value", "Y", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "haveChildren"], ["name", "haveChildren", "type", "radio", "id", "yes", "value", "Y", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "haveChildren", 1, "form-check-input", 3, "change"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "form-group", "col-md-6"], ["for", "", 1, "btn", "btn-link", 3, "disabled", "click"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], ["class", "btn btn-secondary m-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "m-1", 3, "click"], [1, "fa", "fa-arrow-left", "m-1"], ["child", ""], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["for", "aadhar"], ["type", "text", "maxlength", "14", "placeholder", "Like 2104 0533 7065", "formControlName", "aadhar", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["aadhaarId", ""], ["for", "pan"], ["type", "text", "maxlength", "10", "placeholder", "Like BBHPM5672K", "formControlName", "pan", 1, "form-control", 3, "ngClass", "keypress"], ["for", "voter"], ["type", "text", "maxlength", "16", "placeholder", "Like NDF1758462", "formControlName", "voter", 1, "form-control", 3, "ngClass"], ["for", "bbMicro"], ["for", "pregnancy"], ["formControlName", "pregnancy", "id", "pregnancy", 1, "form-select", 3, "ngClass"], ["value", "NA"], ["for", "child"], ["type", "text", "placeholder", "Children in your family", "formControlName", "child", "maxlength", "2", 1, "form-control", 3, "ngClass", "keypress", "keydown", "keyup"], ["for", "childbelow18"], ["name", "childbelow18", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow18", 1, "form-check-input", 3, "checked", "change", "click"], ["for", "childbelow5"], ["name", "childbelow5", "type", "radio", "id", "yes", "value", "Y", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "childbelow5", 1, "form-check-input", 3, "checked", "change"], ["for", "institutional"], ["type", "radio", "name", "institutional", "id", "yes", "value", "I", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "institutional", 1, "form-check-label"], ["type", "radio", "name", "institutional", "id", "no", "value", "H", "formControlName", "institutional", 1, "form-check-input", 3, "change"], ["for", "breastFeeding"], ["type", "radio", "name", "breastFeeding", "id", "yes", "value", "Y", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["for", "breastFeeding", 1, "form-check-label"], ["type", "radio", "name", "breastFeeding", "id", "no", "value", "N", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "breastFeeding", "id", "na", "value", "NA", "formControlName", "breastFeeding", 1, "form-check-input", 3, "change"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], [1, "modal-content"], [1, "modal-header"], [1, "col-md-7"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-md-3"], ["title", "Add Child", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "col-md-2"], ["title", "close", 1, "clos", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["style", "pointer-events:none", 4, "ngIf"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", "readonly", "", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], ["type", "date", "readonly", "", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange", "keydown"], ["id", "sex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "M"], ["value", "F"], ["value", "O"], [2, "pointer-events", "none"], ["id", "sex", 1, "form-select", 2, "background-color", "#e9ecef", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"], [2, "color", "red"]],
  template: function FamilyInfoCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add/ Edit Family Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5)(7, "div", 1)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_13_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FamilyInfoCreateComponent_div_14_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Middle Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_18_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, FamilyInfoCreateComponent_div_19_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Last Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_23_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FamilyInfoCreateComponent_div_24_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6)(26, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Age:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_30_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keydown", function FamilyInfoCreateComponent_Template_input_keydown_30_listener($event) {
        return ctx.restrictZero($event);
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_30_listener() {
        return ctx.zeroAge();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, FamilyInfoCreateComponent_div_31_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 1)(33, "div", 17)(34, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Husband/Guardian\u2019s:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_38_listener($event) {
        return ctx.validationService.onlyAlphabetsAndSpace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, FamilyInfoCreateComponent_div_39_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 17)(41, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Mobile No:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_43_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, FamilyInfoCreateComponent_div_44_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 6)(46, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "ID Type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_Template_select_change_48_listener($event) {
        return ctx.IdType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, FamilyInfoCreateComponent_option_51_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, FamilyInfoCreateComponent_div_52_Template, 8, 5, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, FamilyInfoCreateComponent_div_53_Template, 7, 5, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, FamilyInfoCreateComponent_div_54_Template, 7, 5, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 1)(56, "div", 6)(57, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Religion :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "select", 28)(62, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "-- Select Religion --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, FamilyInfoCreateComponent_option_64_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, FamilyInfoCreateComponent_div_65_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 6)(67, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Caste :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "select", 30)(72, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "-- Select Caste --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, FamilyInfoCreateComponent_option_74_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, FamilyInfoCreateComponent_div_75_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 6)(77, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Education Level:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "select", 32)(80, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "-- Select Education --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, FamilyInfoCreateComponent_option_82_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 6)(84, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Monthly Family Income: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "select", 34)(87, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "-- Select Income --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, FamilyInfoCreateComponent_option_89_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 1)(91, "div", 6)(92, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Occupation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "select", 36)(95, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, FamilyInfoCreateComponent_option_97_Template, 2, 2, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 6)(99, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Total Male Family Member:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_103_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_103_listener() {
        return ctx.addMF();
      })("change", function FamilyInfoCreateComponent_Template_input_change_103_listener() {
        return ctx.checkChildren();
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_103_listener() {
        return ctx.familyCountChecking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, FamilyInfoCreateComponent_div_104_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 6)(106, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " Total Female Family Member:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_110_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_110_listener() {
        return ctx.addMF();
      })("change", function FamilyInfoCreateComponent_Template_input_change_110_listener() {
        return ctx.checkChildren();
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_110_listener() {
        return ctx.familyCountChecking();
      })("keydown", function FamilyInfoCreateComponent_Template_input_keydown_110_listener($event) {
        return ctx.restrictZero($event);
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_110_listener() {
        return ctx.zeroFemale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](111, FamilyInfoCreateComponent_div_111_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 6)(115, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Total Senior Citizen :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function FamilyInfoCreateComponent_Template_input_keypress_119_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("change", function FamilyInfoCreateComponent_Template_input_change_119_listener() {
        return ctx.checkChildren();
      })("keyup", function FamilyInfoCreateComponent_Template_input_keyup_119_listener() {
        return ctx.familyCountChecking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, FamilyInfoCreateComponent_div_120_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 1)(122, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, FamilyInfoCreateComponent_label_123_Template, 4, 0, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](124, FamilyInfoCreateComponent_label_124_Template, 4, 0, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "select", 44)(126, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "-- Micro Group --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "option", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Non-Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](132, FamilyInfoCreateComponent_div_132_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, FamilyInfoCreateComponent_div_133_Template, 15, 6, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](134, FamilyInfoCreateComponent_div_134_Template, 15, 5, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 6)(136, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, " Do you have sanitary latrine at your house premise?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 48)(141, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_Template_input_change_141_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_Template_input_change_146_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 6)(150, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, " Do you have any child in your family?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 48)(155, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_Template_input_change_155_listener($event) {
        return ctx.havesChildren($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FamilyInfoCreateComponent_Template_input_change_160_listener($event) {
        return ctx.havesChildren($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](164, FamilyInfoCreateComponent_div_164_Template, 7, 5, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](165, FamilyInfoCreateComponent_div_165_Template, 14, 2, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](166, FamilyInfoCreateComponent_div_166_Template, 14, 2, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](167, FamilyInfoCreateComponent_div_167_Template, 14, 0, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, FamilyInfoCreateComponent_div_169_Template, 18, 0, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 56)(171, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_Template_button_click_171_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r151);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](182);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openModal(_r31));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Child Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 58)(174, "button", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_Template_button_click_174_listener() {
        return ctx.saveFamilyCreate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](177, FamilyInfoCreateComponent_button_177_Template, 3, 0, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FamilyInfoCreateComponent_Template_button_click_178_listener() {
        return ctx.saveBaselineCreateBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, FamilyInfoCreateComponent_ng_template_181_Template, 30, 2, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.baselineSurvey);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](46, _c1, ctx.f.firstName.invalid && ctx.f.firstName.touched, ctx.f.firstName.valid && (ctx.f.firstName.dirty || ctx.f.firstName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](49, _c2, ctx.f.middleName.invalid && ctx.f.middleName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.middleName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](51, _c2, ctx.f.lastName.invalid && ctx.f.lastName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](53, _c1, ctx.f.age.invalid && ctx.f.age.touched, ctx.f.age.valid && (ctx.f.age.dirty || ctx.f.age.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.age.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](56, _c1, ctx.f.husbandName.invalid && ctx.f.husbandName.touched, ctx.f.husbandName.valid && (ctx.f.husbandName.dirty || ctx.f.husbandName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.husbandName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c2, ctx.f.mobile.invalid && ctx.f.mobile.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.mobile.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cardDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.idTypeField == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.idTypeField == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.idTypeField == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](61, _c1, ctx.f.religion.invalid && ctx.f.religion.touched, ctx.f.religion.valid && (ctx.f.religion.dirty || ctx.f.religion.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.religionDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.religion.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](64, _c1, ctx.f.caste.invalid && ctx.f.caste.touched, ctx.f.caste.valid && (ctx.f.caste.dirty || ctx.f.caste.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.casteList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.caste.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.educationList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.householdIncomeDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.occupationDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](67, _c1, ctx.f.fmale.invalid && ctx.f.fmale.touched, ctx.f.fmale.valid && (ctx.f.fmale.dirty || ctx.f.fmale.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.fmale.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](70, _c1, ctx.f.ffemale.invalid && ctx.f.ffemale.touched, ctx.f.ffemale.valid && (ctx.f.ffemale.dirty || ctx.f.ffemale.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.ffemale.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total Male + Female : ", ctx.addSum ? ctx.addSum : 0, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](73, _c1, ctx.f.fsenior.invalid && ctx.f.fsenior.touched, ctx.f.fsenior.valid && (ctx.f.fsenior.dirty || ctx.f.fsenior.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.fsenior.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.donorName == null ? null : ctx.donorName.includes("Bandhan"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.donorName == null ? null : ctx.donorName.includes("Bandhan")));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](76, _c1, ctx.f.bbMicro.invalid && ctx.f.bbMicro.touched, ctx.f.bbMicro.valid && (ctx.f.bbMicro.dirty || ctx.f.bbMicro.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.bbMicro.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.moreFamData == null ? null : ctx.moreFamData.pregnantWoman) == "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.moreFamData == null ? null : ctx.moreFamData.pregnantWoman) == "N" || (ctx.moreFamData == null ? null : ctx.moreFamData.pregnantWoman) == "NA" || ctx.famData.famid == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.childbelow18 === "Y" && ctx.haveChildren === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.childbelow5 === "Y" && ctx.haveChildren === "Y" && ctx.childbelow18 === "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.showChildDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.famData.famid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -180px\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 25px;\r\n}\r\n\r\n#child[_ngcontent-%COMP%] {\r\n  margin: -18px 0 0 -570px;\r\n}\r\n#girl[_ngcontent-%COMP%] {\r\n  margin: -18px 0 0 -500px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]  {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px; \r\n  overflow-x: auto;\r\n  width: 750px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 370px;\r\n}\r\n\r\n.clos[_ngcontent-%COMP%] {\r\n  margin-left: 290px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9mYW1pbHktaW5mby9mYW1pbHktaW5mby1jcmVhdGUvZmFtaWx5LWluZm8tY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgY29sb3I6ICMzZTc3NTggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xODBweFxyXG59XHJcblxyXG4uZmEtbWludXMtY2lyY2xlIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4jY2hpbGQge1xyXG4gIG1hcmdpbjogLTE4cHggMCAwIC01NzBweDtcclxufVxyXG4jZ2lybCB7XHJcbiAgbWFyZ2luOiAtMThweCAwIDAgLTUwMHB4O1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQgIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMzAwcHg7IFxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNzBweDtcclxufVxyXG5cclxuLmNsb3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAyOTBweDtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2958:
/*!*******************************************************************!*\
  !*** ./src/app/modules/family-info/family-info-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyInfoRoutingModule": () => (/* binding */ FamilyInfoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _family_info_create_family_info_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-info-create/family-info-create.component */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: 'create',
  component: _family_info_create_family_info_create_component__WEBPACK_IMPORTED_MODULE_0__.FamilyInfoCreateComponent
}];
class FamilyInfoRoutingModule {}
FamilyInfoRoutingModule.ɵfac = function FamilyInfoRoutingModule_Factory(t) {
  return new (t || FamilyInfoRoutingModule)();
};
FamilyInfoRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FamilyInfoRoutingModule
});
FamilyInfoRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FamilyInfoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 93855:
/*!***********************************************************!*\
  !*** ./src/app/modules/family-info/family-info.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyInfoModule": () => (/* binding */ FamilyInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _family_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-info-routing.module */ 2958);
/* harmony import */ var _family_info_create_family_info_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family-info-create/family-info-create.component */ 65353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class FamilyInfoModule {}
FamilyInfoModule.ɵfac = function FamilyInfoModule_Factory(t) {
  return new (t || FamilyInfoModule)();
};
FamilyInfoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FamilyInfoModule
});
FamilyInfoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _family_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamilyInfoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FamilyInfoModule, {
    declarations: [_family_info_create_family_info_create_component__WEBPACK_IMPORTED_MODULE_1__.FamilyInfoCreateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _family_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.FamilyInfoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ }),

/***/ 82328:
/*!************************************************************!*\
  !*** ./src/app/modules/family-info/family-info.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyInfoService": () => (/* binding */ FamilyInfoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class FamilyInfoService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getCasteView(obj) {
    return this.http.post(`${this.baseURL}castemaster/view`, obj);
  }
  getEducationDetails(obj) {
    return this.http.post(`${this.baseURL}educationalqualificationmaster/view`, obj);
  }
  monthlyIncomeDetails(obj) {
    return this.http.post(`${this.baseURL}monthlyincomemaster/view`, obj);
  }
  religionDetails(obj) {
    return this.http.post(`${this.baseURL}religionmaster/view`, obj);
  }
  occupationDetails(obj) {
    return this.http.post(`${this.baseURL}occupationmaster/view`, obj);
  }
  getIdCardDetails(obj) {
    return this.http.post(`${this.baseURL}identitycardtypes/view`, obj);
  }
  saveFamily(obj) {
    return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj);
  }
  viewFamilyDetails(obj) {
    return this.http.post(`${this.baseURL}familydetail/view`, obj);
  }
  baselineSurveyStatus(obj) {
    return this.http.post(`${this.baseURL}baselinesurvey/status`, obj);
  }
}
FamilyInfoService.ɵfac = function FamilyInfoService_Factory(t) {
  return new (t || FamilyInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
FamilyInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FamilyInfoService,
  factory: FamilyInfoService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_family-info_family-info_module_ts.js.map