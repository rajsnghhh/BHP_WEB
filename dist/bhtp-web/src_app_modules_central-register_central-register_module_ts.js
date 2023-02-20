"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_central-register_central-register_module_ts"],{

/***/ 91118:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/central-register/central-register-create/central-register-create.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRegisterCreateComponent": () => (/* binding */ CentralRegisterCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _central_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../central-register.service */ 23937);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










const _c0 = ["aadhaarId"];
function CentralRegisterCreateComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "District is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_21_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.f.district.errors.required);
  }
}
function CentralRegisterCreateComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Block is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_32_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.block.errors.required);
  }
}
function CentralRegisterCreateComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "GP is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_43_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.gp.errors.required);
  }
}
function CentralRegisterCreateComponent_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_54_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.gram.errors.required);
  }
}
function CentralRegisterCreateComponent_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name of Swasthya Sahayika/ Health Volunteer is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_65_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.f.swasthyaSahayika.errors.required);
  }
}
function CentralRegisterCreateComponent_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Selection of family is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_79_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.f.family.errors.required);
  }
}
function CentralRegisterCreateComponent_div_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Total Member of Household is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_86_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.f.household.errors.required);
  }
}
function CentralRegisterCreateComponent_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_97_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_97_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_97_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.firstName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.f.firstName.errors.minlength);
  }
}
function CentralRegisterCreateComponent_div_102_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_102_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.middleName.errors.minlength);
  }
}
function CentralRegisterCreateComponent_div_109_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_109_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_109_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_109_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.lastName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.lastName.errors.minlength);
  }
}
function CentralRegisterCreateComponent_div_116_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Age is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_116_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.age.errors.required);
  }
}
function CentralRegisterCreateComponent_div_124_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Husband Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_124_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_124_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_124_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.husbandName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.husbandName.errors.minlength);
  }
}
function CentralRegisterCreateComponent_div_129_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_129_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_129_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_129_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.mobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.mobile.errors.pattern);
  }
}
function CentralRegisterCreateComponent_option_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r46.identityCardTypesMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r46.name);
  }
}
function CentralRegisterCreateComponent_div_137_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " AADHAAR CARD Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_137_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " AADHAAR CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_137_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_137_div_7_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_137_div_7_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r49.f.aadhar.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r49.f.aadhar.errors.minlength || ctx_r49.f.aadhar.errors.pattern);
  }
}
const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CentralRegisterCreateComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "AADHAAR CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CentralRegisterCreateComponent_div_137_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.aadharcardValidation($event));
    })("keypress", function CentralRegisterCreateComponent_div_137_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.validationService.onlyIntegerAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CentralRegisterCreateComponent_div_137_div_7_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r14.f.aadhar.invalid && ctx_r14.f.aadhar.touched, ctx_r14.f.aadhar.valid && (ctx_r14.f.aadhar.dirty || ctx_r14.f.aadhar.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.f.aadhar.errors);
  }
}
function CentralRegisterCreateComponent_div_138_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " PAN Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_138_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " PAN Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_138_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_138_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_138_div_6_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r55.f.pan.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r55.f.pan.errors.minlength || ctx_r55.f.pan.errors.pattern);
  }
}
function CentralRegisterCreateComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PAN CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_div_138_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.validationService.charnum($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CentralRegisterCreateComponent_div_138_div_6_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r15.f.pan.invalid && ctx_r15.f.pan.touched, ctx_r15.f.pan.valid && (ctx_r15.f.pan.dirty || ctx_r15.f.pan.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.f.pan.errors);
  }
}
function CentralRegisterCreateComponent_div_139_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VOTER CARD Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_139_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VOTER CARD Number Invalid ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_139_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_139_div_6_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CentralRegisterCreateComponent_div_139_div_6_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60.f.voter.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r60.f.voter.errors.minlength || ctx_r60.f.voter.errors.pattern);
  }
}
function CentralRegisterCreateComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " VOTER CARD NO :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_div_139_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r63.validationService.charnum($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CentralRegisterCreateComponent_div_139_div_6_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r16.f.voter.invalid && ctx_r16.f.voter.touched, ctx_r16.f.voter.valid && (ctx_r16.f.voter.dirty || ctx_r16.f.voter.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.voter.errors);
  }
}
function CentralRegisterCreateComponent_option_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r65.religionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r65.religionMasterDescription);
  }
}
function CentralRegisterCreateComponent_div_150_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Religion is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_150_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.f.religion.errors.required);
  }
}
function CentralRegisterCreateComponent_option_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r68.casteTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r68.casteTypeDescription);
  }
}
function CentralRegisterCreateComponent_div_160_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Caste is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_160_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.f.caste.errors.required);
  }
}
function CentralRegisterCreateComponent_option_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r71.monthlyIncomeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r71.incomeRange);
  }
}
function CentralRegisterCreateComponent_div_170_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Income Range is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_170_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.f.monthly.errors.required);
  }
}
function CentralRegisterCreateComponent_option_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", item_r74.educationalQualificationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r74.qualification, " ");
  }
}
function CentralRegisterCreateComponent_div_180_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Education Level is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_180_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.f.education.errors.required);
  }
}
function CentralRegisterCreateComponent_div_200_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pregnant woman is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_200_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.f.pregnant.errors.required);
  }
}
function CentralRegisterCreateComponent_div_215_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Breast Feeding selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CentralRegisterCreateComponent_div_215_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CentralRegisterCreateComponent_div_215_div_1_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r26.f.breastFeeding.errors.required);
  }
}
function CentralRegisterCreateComponent_ng_template_241_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r83.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r85.validationService.titleCase($event));
    })("ngModelChange", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const i_r82 = restoredCtx.index;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r86.childDetails.childInfo[i_r82].childName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const i_r82 = restoredCtx.index;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r87.childDetails.childInfo[i_r82].dob = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const i_r82 = restoredCtx.index;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r88.childDetails.childInfo[i_r82].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "-- Select Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_ng_template_241_tr_25_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const i_r82 = restoredCtx.index;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r89.removeNewChild(i_r82));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r82 = ctx.index;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r80.childDetails.childInfo[i_r82].childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r80.childDetails.childInfo[i_r82].dob)("min", ctx_r80.minDate)("max", ctx_r80.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r80.childDetails.childInfo[i_r82].sex);
  }
}
function CentralRegisterCreateComponent_ng_template_241_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "div", 1)(3, "div", 85)(4, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Child Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 87)(7, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_ng_template_241_Template_i_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r90.addNewChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 89)(9, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_ng_template_241_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r92.childModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 91)(12, "div", 92)(13, "table", 93)(14, "thead")(15, "tr", 94)(16, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CentralRegisterCreateComponent_ng_template_241_tr_25_Template, 18, 5, "tr", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1)(27, "div", 2)(28, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_ng_template_241_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r93.saveChild());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r28.childDetails.childInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r28.checkChildDisabled());
  }
}
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class CentralRegisterCreateComponent {
  constructor(fb, router, modalService, centralService, httpService, validationService, toastr) {
    this.fb = fb;
    this.router = router;
    this.modalService = modalService;
    this.centralService = centralService;
    this.httpService = httpService;
    this.validationService = validationService;
    this.toastr = toastr;
    this.haveSanitaryLatrine = 'N';
    this.today = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().substring(0, 10);
    this.idTypeField = 0;
    this.childDetails = {
      childInfo: []
    };
  }
  ngOnInit() {
    this.getMinDate();
    this.getMinYear();
    this.getMaxYear();
    this.createForm();
    this.childDetails.childInfo.push({
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    });
    let obj = this.httpService.dataAccessDTO;
    // API call for getting caste
    this.centralService.getCasteView(obj).subscribe(response => {
      this.casteList = response.responseObject;
      console.log(this.casteList);
    });
    //API call for getting education details
    this.centralService.getEducationDetails(obj).subscribe(response => {
      this.educationList = response.responseObject;
      console.log(this.educationList);
    });
    //API call for getting monthlyIncomeDetails
    this.centralService.monthlyIncomeDetails(obj).subscribe(response => {
      this.monthlyIncomeDetails = response.responseObject;
      console.log(this.monthlyIncomeDetails);
    });
    //API call for getting religionDetails
    this.centralService.religionDetails(obj).subscribe(response => {
      this.religionDetails = response.responseObject;
      console.log(this.religionDetails);
    });
    //API call for getting idCardDetails
    this.centralService.getIdCardDetails(obj).subscribe(response => {
      this.cardDetails = response.responseObject;
      console.log(this.cardDetails);
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
  restrictZero(event) {
    if (event.target.value.length === 0 && event.key === '0') {
      event.preventDefault();
    }
  }
  firstChildCaps(event) {
    if (event.target.value) {
      event.target.value = event.target.value[0].toUpperCase() + event.target.value.slice(1);
    }
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
    let year = date.getUTCFullYear() - 5;
    this.minDate = year + "-" + month + "-" + toDate;
  }
  getMinYear() {
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
    this.minYear = year + "-" + month + "-" + toDate;
  }
  getMaxYear() {
    let date = new Date();
    let toDate = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getUTCFullYear() - 15;
    this.maxYear = year + "-" + month + "-" + toDate;
  }
  createForm() {
    this.centralRegister = this.fb.group({
      district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      swasthyaSahayika: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      household: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)])],
      age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      husbandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)])],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[6789][0-9]{9}")])],
      idtype: [''],
      aadhar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}")])],
      pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")])],
      voter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[A-Z]{3}[0-9]{7}")])],
      religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      caste: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      monthly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      children: [''],
      pregnant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      breastFeeding: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      sanitary: this.haveSanitaryLatrine
    });
  }
  get f() {
    return this.centralRegister.controls;
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
  changesanitary(e) {
    this.haveSanitaryLatrine = e.target.value;
  }
  saveChild() {
    console.log(this.childDetails);
    this.modalReference.close();
  }
  saveCentralRegister() {
    let item = this.centralRegister.value;
    let idValue = '';
    item.firstName = this.validationService.firstCaps(item.firstName.trim());
    item.middleName = this.validationService.firstCaps(item.middleName.trim());
    item.lastName = this.validationService.firstCaps(item.lastName.trim());
    item.husbandName = this.validationService.firstCaps(item.husbandName.trim());
    this.childDetails.childInfo.forEach(item => {
      if (item.childName == '') {
        this.childDetails.childInfo = [];
      }
    });
    if (item.idtype == 1) {
      idValue = item.aadhar;
    } else if (item.idtype == 2) {
      idValue = item.pan;
    } else if (item.idtype == 3) {
      idValue = item.voter;
    }
    const postBody = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      houseHoldDetailDTO: {
        branchDTO: {
          branchId: 15,
          branchName: "Kestopur"
        },
        branchVillageMapId: 5,
        familyDetailDTOList: [{
          age: item.age,
          bbMicroGroupMembership: "N",
          casteTypeMasterDTO: {
            casteTypeDescription: this.casteList.filter(x => x.casteTypeMasterId == item.caste)[0]?.casteTypeDescription,
            casteTypeMasterId: item.caste
          },
          educationalQualificationMasterDTO: {
            educationalQualificationMasterId: item.education,
            qualification: this.educationList.filter(x => x.educationalQualificationMasterId == item.education)[0]?.qualification
          },
          familyDetailId: 0,
          familyNumber: "string",
          firstName: item.firstName,
          haveChild: "Y",
          haveSanitaryLatrine: item.haveSanitaryLatrine,
          householdDetailsId: 0,
          husbandOrGuardianName: item.husbandName,
          identityCardDTOList: [{
            familyIdentityCardMapId: 0,
            identityCardTypesMasterDTO: {
              identityCardTypesMasterId: item.idtype ? item.idtype : 0,
              name: this.cardDetails.filter(x => x.identityCardTypesMasterId == item.idtype)[0]?.name ? this.cardDetails.filter(x => x.identityCardTypesMasterId == item.idtype)[0]?.name : ''
            },
            number: idValue
          }],
          institutionalDelivery: "Y",
          lactetingMother: item.breastFeeding,
          lastName: item.lastName,
          middleName: item.middleName,
          mobileNumber: item.mobile,
          monthlyIncomeMasterDTO: {
            incomeRange: this.monthlyIncomeDetails.filter(x => x.monthlyIncomeMasterId == item.monthly)[0]?.incomeRange,
            monthlyIncomeMasterId: item.monthly
          },
          occupationMasterDTO: {
            occupationDescription: "ocococo",
            occupationMasterId: 1
          },
          pregnantWoman: item.pregnant,
          religionMasterDTO: {
            religionMasterDescription: this.religionDetails.filter(x => x.religionMasterId == item.religion)[0]?.religionMasterDescription,
            religionMasterId: item.religion
          },
          status: "A",
          totaFamilyMemberFemales: 1,
          totaFamilyMemberMales: 2,
          totaFamilyMemberSrcitizen: 3,
          totalNumberOfChildren: item.children,
          zeroToFiveChildDetailDTOList: this.childDetails.childInfo
        }],
        houseHoldNumber: "string",
        householdDetailId: 0,
        status: "A",
        swasthyaSahayikaDTO: {
          name: "ABC",
          swasthyaSahayikaId: 1
        }
      }
    };
    console.log(postBody);
    if (!this.centralRegister.value.firstName) {
      this.showError('First Name should not be blank');
      return;
    } else if (this.centralRegister.value.firstName.length < 3) {
      this.showError('First Name should be at least 3 char long');
      return;
    }
    if (this.centralRegister.value.middleName.length) {
      if (this.centralRegister.value.middleName.length < 3) {
        this.showError('Middle Name should be at least 3 char long');
        return;
      }
    }
    if (!this.centralRegister.value.lastName) {
      this.showError('Last Name should not be blank');
      return;
    } else if (this.centralRegister.value.lastName.length < 3) {
      this.showError('Last Name should be at least 3 char long');
      return;
    }
    if (!this.centralRegister.value.age) {
      this.showError('Age should not be blank');
      return;
    }
    if (!this.centralRegister.value.husbandName) {
      this.showError('Husband Name should not be blank');
      return;
    } else if (this.centralRegister.value.husbandName.length < 3) {
      this.showError('Husband Name should be at least 3 char long');
      return;
    }
    if (this.centralRegister.value.mobile.length) {
      if (this.centralRegister.value.mobile.length != 10) {
        this.showError('Mobile Number should exactly contain 10 char');
        return;
      } else {
        let startChar = parseInt(this.centralRegister.value.mobile.substr(0, 1));
        console.log(startChar);
        if (startChar < 6) {
          this.showError('Mobile Number must start from 6-9');
          return;
        }
      }
    }
    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 1) {
        if (!this.centralRegister.value.aadhar) {
          this.showError('Please Enter Aadhaar Card No.');
          return;
        }
      }
    }
    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 2) {
        if (!this.centralRegister.value.pan) {
          this.showError('Please Enter PAN Card No');
          return;
        }
      }
    }
    if (this.centralRegister.value.idtype) {
      if (this.idTypeField == 3) {
        if (!this.centralRegister.value.voter) {
          this.showError('Please Enter Voter Card No');
          return;
        }
      }
    }
    if (!this.centralRegister.value.religion) {
      this.showError('Please select Religion');
      return;
    }
    if (!this.centralRegister.value.caste) {
      this.showError('Please select Caste');
      return;
    }
    if (!this.centralRegister.value.monthly) {
      this.showError('Please select Monthly Income');
      return;
    }
    if (!this.centralRegister.value.education) {
      this.showError('Please select Education');
      return;
    }
    if (!this.centralRegister.value.pregnant) {
      this.showError('Please select Pregnancy');
      return;
    }
    if (!this.centralRegister.value.breastFeeding) {
      this.showError('Please select Breast-Feeding');
      return;
    }
    this.centralService.saveCentralRegister(postBody).subscribe(response => {
      console.log(response);
      if (response.message == "Success") {
        this.showSuccess(response.message);
        this.createForm();
        this.childModalDismiss();
      } else {
        this.showError(response.message);
      }
    });
  }
  resetCentralRegister() {
    this.idTypeField = 0;
    this.haveSanitaryLatrine = 'N';
    this.createForm();
    this.childDetails.childInfo = [{
      age: 'string',
      childDetailId: 0,
      childName: '',
      dob: '',
      familyDetailId: 0,
      sex: '',
      status: 'A'
    }];
  }
  showSuccess(message) {
    this.toastr.success(message, 'Central Register Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toastr.error(message, 'Central Register Save', {
      timeOut: 2000
    });
  }
  IdType(IdType) {
    if (IdType == "") {
      this.idTypeField = 0;
    } else {
      this.idTypeField = IdType;
    }
    if (this.centralRegister.value.idtype == '') {
      this.centralRegister.controls.pan.setValue('');
      this.centralRegister.controls.voter.setValue('');
      this.centralRegister.controls.aadhar.setValue('');
    }
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
}
CentralRegisterCreateComponent.ɵfac = function CentralRegisterCreateComponent_Factory(t) {
  return new (t || CentralRegisterCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_central_register_service__WEBPACK_IMPORTED_MODULE_0__.CentralRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
};
CentralRegisterCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CentralRegisterCreateComponent,
  selectors: [["app-central-register-create"]],
  viewQuery: function CentralRegisterCreateComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.aadhaarId = _t.first);
    }
  },
  decls: 243,
  vars: 102,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "scheduler-border"], [1, "form-group", "col-md-3"], ["for", "district"], [1, "text-danger"], ["formControlName", "district", "id", "district", 1, "form-select", 3, "ngClass"], ["value", ""], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md-2"], ["for", "block"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass"], ["for", "swasthyaSahayika"], ["formControlName", "swasthyaSahayika", "id", "swasthyaSahayika", 1, "form-select", 3, "ngClass"], ["for", "family"], ["formControlName", "family", "id", "family", 1, "form-select", 3, "ngClass"], [1, "form-group", "col-md-4"], ["for", "household"], ["type", "text", "maxlength", "2", "placeholder", "Total Member of All Family", "formControlName", "household", 1, "form-control", 3, "ngClass", "keypress", "keydown"], [1, "form-group", "col-md"], ["for", "firstName"], ["type", "text", "maxlength", "20", "placeholder", "Enter First Name", "formControlName", "firstName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "middleName"], ["type", "text", "placeholder", "Enter Middle Name", "maxlength", "20", "formControlName", "middleName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "lastName"], ["type", "text", "placeholder", "Enter Last Name", "maxlength", "20", "formControlName", "lastName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "age"], ["type", "", "maxlength", "2", "placeholder", "Enter Age", "formControlName", "age", 1, "form-control", 3, "ngClass", "keypress", "keydown"], ["for", "husbandName"], ["type", "text", "maxlength", "20", "placeholder", "Enter Husband Name", "formControlName", "husbandName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "mobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile Number", "formControlName", "mobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "idtype"], ["formControlName", "idtype", 1, "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-md", 4, "ngIf"], ["for", "religion"], ["formControlName", "religion", "id", "religion", 1, "form-select", 3, "ngClass"], ["for", "caste"], ["formControlName", "caste", "id", "caste", 1, "form-select", 3, "ngClass"], ["for", "monthly"], ["formControlName", "monthly", "id", "monthly", 1, "form-select", 3, "ngClass"], ["for", "education"], ["formControlName", "education", "id", "education", 1, "form-select", 3, "ngClass"], ["for", "children"], ["type", "text", "maxlength", "2", "placeholder", "Enter Total No. of Children", "formControlName", "children", 1, "form-control", 3, "keypress", "keydown"], ["for", "pregnant"], ["formControlName", "pregnant", "id", "pregnant", 1, "form-select", 3, "ngClass"], ["value", "Y"], ["value", "N"], ["value", "NA"], ["for", "breastFeeding"], ["formControlName", "breastFeeding", "id", "breastFeeding", 1, "form-select", 3, "ngClass"], ["for", "sanitary"], [1, "form-check-inline"], ["value", "Y", "type", "radio", "name", "sanitary", "id", "yes", "formControlName", "sanitary", 1, "form-check-input", 3, "change"], ["for", "sanitary", 1, "form-check-label"], ["value", "N", "type", "radio", "name", "sanitary", "id", "no", "formControlName", "sanitary", "checked", "", 1, "form-check-input", 3, "change"], ["for", "addChild", 1, "btn", "btn-link", 3, "click"], [1, "text-center"], [1, "btn", "btn-primary", "m-1", 3, "click"], [1, "fas", "fa-check-circle", "m-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "fa", "fa-refresh", "m-1"], ["child", ""], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], ["for", "aadhar"], ["type", "text", "maxlength", "14", "placeholder", "Like 2104 0533 7065", "formControlName", "aadhar", 1, "form-control", 3, "ngClass", "keyup", "keypress"], ["aadhaarId", ""], ["for", "pan"], ["type", "text", "maxlength", "10", "placeholder", "Like BBHPM5672K", "formControlName", "pan", 1, "form-control", 3, "ngClass", "keypress"], ["for", "voter"], ["type", "text", "maxlength", "10", "placeholder", "Like NDF1758462", "formControlName", "voter", 1, "form-control", 3, "ngClass", "keypress"], [1, "modal-content"], [1, "modal-header"], [1, "col-md-7"], ["id", "modal-basic-title", 1, "modal-title"], [1, "col-md-3"], ["title", "Add Child", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", 3, "click"], [1, "col-md-2"], ["title", "close", 1, "close", 2, "cursor", "pointer", "font-size", "35px", 3, "click"], [1, "modal-body"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "bttn", 3, "disabled", "click"], ["type", "text", "maxlength", "20", "placeholder", "Enter Child Name", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngModel", "keypress", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "min", "max", "ngModelChange"], ["id", "sex", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "M"], ["value", "F"], ["value", "O"], ["type", "button", 1, "btn", "btn-remove", 3, "click"], [1, "fas", "fa-minus-circle"]],
  template: function CentralRegisterCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Create Central Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5)(7, "fieldset", 6)(8, "legend", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "HH Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1)(11, "div", 7)(12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "District :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 10)(17, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "gg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CentralRegisterCreateComponent_div_21_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "select", 15)(28, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "gg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CentralRegisterCreateComponent_div_32_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13)(34, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "GP :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "select", 17)(39, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "gg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CentralRegisterCreateComponent_div_43_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 7)(45, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "select", 19)(50, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "gg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, CentralRegisterCreateComponent_div_54_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 13)(56, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Name of SS :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "select", 21)(61, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "gg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, CentralRegisterCreateComponent_div_65_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 1)(67, "div", 7)(68, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Family Type:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "select", 23)(73, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Single Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Joint Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, CentralRegisterCreateComponent_div_79_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 24)(81, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Household:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_85_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keydown", function CentralRegisterCreateComponent_Template_input_keydown_85_listener($event) {
        return ctx.restrictZero($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, CentralRegisterCreateComponent_div_86_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "fieldset", 6)(88, "legend", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Family Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 1)(91, "div", 27)(92, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "First Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_96_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, CentralRegisterCreateComponent_div_97_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 27)(99, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Middle Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_101_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, CentralRegisterCreateComponent_div_102_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 27)(104, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Last Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_108_listener($event) {
        return ctx.validationService.onlyAlphabets($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, CentralRegisterCreateComponent_div_109_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 27)(111, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Age:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_115_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keydown", function CentralRegisterCreateComponent_Template_input_keydown_115_listener($event) {
        return ctx.restrictZero($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, CentralRegisterCreateComponent_div_116_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 1)(118, "div", 7)(119, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Husband Name:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_123_listener($event) {
        return ctx.validationService.onlyAlphabetsAndSpace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](124, CentralRegisterCreateComponent_div_124_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 7)(126, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Mobile No:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_128_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](129, CentralRegisterCreateComponent_div_129_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 27)(131, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "ID Type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "select", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CentralRegisterCreateComponent_Template_select_change_133_listener($event) {
        return ctx.IdType($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](136, CentralRegisterCreateComponent_option_136_Template, 2, 2, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](137, CentralRegisterCreateComponent_div_137_Template, 8, 5, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, CentralRegisterCreateComponent_div_138_Template, 7, 5, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, CentralRegisterCreateComponent_div_139_Template, 7, 5, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 1)(141, "div", 27)(142, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Religion :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "select", 45)(147, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "-- Select Religion --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](149, CentralRegisterCreateComponent_option_149_Template, 2, 2, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](150, CentralRegisterCreateComponent_div_150_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 27)(152, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Caste :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "select", 47)(157, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "-- Select Caste --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](159, CentralRegisterCreateComponent_option_159_Template, 2, 2, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](160, CentralRegisterCreateComponent_div_160_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 27)(162, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Monthly Family Income :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "select", 49)(167, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "-- Select Income --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, CentralRegisterCreateComponent_option_169_Template, 2, 2, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](170, CentralRegisterCreateComponent_div_170_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 27)(172, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Education Level :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "select", 51)(177, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "-- Select Education --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](179, CentralRegisterCreateComponent_option_179_Template, 2, 2, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, CentralRegisterCreateComponent_div_180_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 1)(182, "div", 7)(183, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " Total Number of Children:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CentralRegisterCreateComponent_Template_input_keypress_185_listener($event) {
        return ctx.validationService.onlyInteger($event);
      })("keydown", function CentralRegisterCreateComponent_Template_input_keydown_185_listener($event) {
        return ctx.restrictZero($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 7)(187, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Are you pregnant now? :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "select", 55)(192, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "N/A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](200, CentralRegisterCreateComponent_div_200_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 7)(202, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Are you breast-feeding? :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "select", 60)(207, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "-- Select --");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "N/A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](215, CentralRegisterCreateComponent_div_215_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 7)(217, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, " Do you have sanitary latrine at your house premise?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 62)(222, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CentralRegisterCreateComponent_Template_input_change_222_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CentralRegisterCreateComponent_Template_input_change_227_listener($event) {
        return ctx.changesanitary($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 1)(231, "div", 24)(232, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_Template_label_click_232_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](242);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openModal(_r27));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Child Details:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 67)(235, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_Template_button_click_235_listener() {
        return ctx.saveCentralRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](236, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CentralRegisterCreateComponent_Template_button_click_238_listener() {
        return ctx.resetCentralRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "i", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](241, CentralRegisterCreateComponent_ng_template_241_Template, 30, 2, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.centralRegister);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](47, _c1, ctx.f.district.invalid && ctx.f.district.touched, ctx.f.district.valid && (ctx.f.district.dirty || ctx.f.district.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.district.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](50, _c1, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](53, _c1, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](56, _c1, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](59, _c1, ctx.f.swasthyaSahayika.invalid && ctx.f.swasthyaSahayika.touched, ctx.f.swasthyaSahayika.valid && (ctx.f.swasthyaSahayika.dirty || ctx.f.swasthyaSahayika.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.swasthyaSahayika.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](62, _c1, ctx.f.family.invalid && ctx.f.family.touched, ctx.f.family.valid && (ctx.f.family.dirty || ctx.f.family.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.family.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](65, _c1, ctx.f.household.invalid && ctx.f.household.touched, ctx.f.household.valid && (ctx.f.household.dirty || ctx.f.household.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.household.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](68, _c1, ctx.f.firstName.invalid && ctx.f.firstName.touched, ctx.f.firstName.valid && (ctx.f.firstName.dirty || ctx.f.firstName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c2, ctx.f.middleName.invalid && ctx.f.middleName.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.middleName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](73, _c1, ctx.f.lastName.invalid && ctx.f.lastName.touched, ctx.f.lastName.valid && (ctx.f.lastName.dirty || ctx.f.lastName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](76, _c1, ctx.f.age.invalid && ctx.f.age.touched, ctx.f.age.valid && (ctx.f.age.dirty || ctx.f.age.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.age.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](79, _c1, ctx.f.husbandName.invalid && ctx.f.husbandName.touched, ctx.f.husbandName.valid && (ctx.f.husbandName.dirty || ctx.f.husbandName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.husbandName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](82, _c2, ctx.f.mobile.invalid && ctx.f.mobile.touched));
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](84, _c1, ctx.f.religion.invalid && ctx.f.religion.touched, ctx.f.religion.valid && (ctx.f.religion.dirty || ctx.f.religion.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.religionDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.religion.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](87, _c1, ctx.f.caste.invalid && ctx.f.caste.touched, ctx.f.caste.valid && (ctx.f.caste.dirty || ctx.f.caste.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.casteList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.caste.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](90, _c1, ctx.f.monthly.invalid && ctx.f.monthly.touched, ctx.f.monthly.valid && (ctx.f.monthly.dirty || ctx.f.monthly.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.monthlyIncomeDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.monthly.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](93, _c1, ctx.f.education.invalid && ctx.f.education.touched, ctx.f.education.valid && (ctx.f.education.dirty || ctx.f.education.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.educationList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.education.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](96, _c1, ctx.f.pregnant.invalid && ctx.f.pregnant.touched, ctx.f.pregnant.valid && (ctx.f.pregnant.dirty || ctx.f.pregnant.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.pregnant.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](99, _c1, ctx.f.breastFeeding.invalid && ctx.f.breastFeeding.touched, ctx.f.breastFeeding.valid && (ctx.f.breastFeeding.dirty || ctx.f.breastFeeding.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.breastFeeding.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 25px;\r\n  margin-left: -170px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 150px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  margin-left: 290px;\r\n}\r\n\r\n.closes[_ngcontent-%COMP%] {\r\n  margin-left: 260px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  width: 750px;\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  color: #0d6efd;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jZW50cmFsLXJlZ2lzdGVyL2NlbnRyYWwtcmVnaXN0ZXItY3JlYXRlL2NlbnRyYWwtcmVnaXN0ZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZhLXBsdXMtY2lyY2xlIHtcclxuICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTE3MHB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBtYXJnaW4tbGVmdDogMjkwcHg7XHJcbn1cclxuXHJcbi5jbG9zZXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNjBweDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHdpZHRoOiA3NTBweDtcclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjMGQ2ZWZkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 24659:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/central-register/central-register-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRegisterRoutingModule": () => (/* binding */ CentralRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _central_register_create_central_register_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central-register-create/central-register-create.component */ 91118);
/* harmony import */ var _central_register_view_central_register_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central-register-view/central-register-view.component */ 16764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: 'view',
  component: _central_register_view_central_register_view_component__WEBPACK_IMPORTED_MODULE_1__.CentralRegisterViewComponent
}, {
  path: 'create',
  component: _central_register_create_central_register_create_component__WEBPACK_IMPORTED_MODULE_0__.CentralRegisterCreateComponent
}];
class CentralRegisterRoutingModule {}
CentralRegisterRoutingModule.ɵfac = function CentralRegisterRoutingModule_Factory(t) {
  return new (t || CentralRegisterRoutingModule)();
};
CentralRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CentralRegisterRoutingModule
});
CentralRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CentralRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 16764:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/central-register/central-register-view/central-register-view.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRegisterViewComponent": () => (/* binding */ CentralRegisterViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _central_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../central-register.service */ 23937);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ 9991);















function CentralRegisterViewComponent_div_13_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", region_r12.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
  }
}
function CentralRegisterViewComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CentralRegisterViewComponent_div_13_div_10_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.f.region.errors.required);
  }
}
function CentralRegisterViewComponent_div_13_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", branch_r14.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
  }
}
function CentralRegisterViewComponent_div_13_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CentralRegisterViewComponent_div_13_div_20_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CentralRegisterViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 10)(2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CentralRegisterViewComponent_div_13_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, CentralRegisterViewComponent_div_13_option_9_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, CentralRegisterViewComponent_div_13_div_10_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CentralRegisterViewComponent_div_13_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CentralRegisterViewComponent_div_13_option_19_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, CentralRegisterViewComponent_div_13_div_20_Template, 2, 1, "div", 16);
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
function CentralRegisterViewComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", block_r19.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r19.blockName, " ");
  }
}
function CentralRegisterViewComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CentralRegisterViewComponent_div_24_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
  }
}
function CentralRegisterViewComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", gp_r21.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r21.name, " ");
  }
}
function CentralRegisterViewComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CentralRegisterViewComponent_div_34_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
  }
}
function CentralRegisterViewComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r23.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r23.villageName, " ");
  }
}
function CentralRegisterViewComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CentralRegisterViewComponent_div_44_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "color": a0,
    "font-weight": a1,
    "cursor": a2
  };
};
function CentralRegisterViewComponent_tr_84_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CentralRegisterViewComponent_tr_84_td_13_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.routePEMStatus(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](1, _c1, item_r25.pemStatus.includes("R") || item_r25.pemStatus.includes("G") || item_r25.pemStatus.includes("Y") ? "blue" : "", item_r25.pemStatus.includes("R") || item_r25.pemStatus.includes("G") || item_r25.pemStatus.includes("Y") ? "bold" : "", item_r25.pemStatus.includes("R") || item_r25.pemStatus.includes("G") || item_r25.pemStatus.includes("Y") ? "pointer" : ""));
  }
}
function CentralRegisterViewComponent_tr_84_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_tr_84_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CentralRegisterViewComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CentralRegisterViewComponent_tr_84_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.routePWStatus(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CentralRegisterViewComponent_tr_84_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.routeLMStatus(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, CentralRegisterViewComponent_tr_84_td_13_Template, 2, 5, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, CentralRegisterViewComponent_tr_84_td_14_Template, 2, 0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CentralRegisterViewComponent_tr_84_td_15_Template, 2, 0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r7.p - 1) * 5 + i_r26 + 1 ? (ctx_r7.p - 1) * 5 + i_r26 + 1 : i_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r25.familyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r25.firstName, " ", item_r25.middleName, " ", item_r25.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r25.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](13, _c1, item_r25.pregnantStatus == "Y" ? "blue" : "", item_r25.pregnantStatus == "Y" ? "bold" : "", item_r25.pregnantStatus == "Y" ? "pointer" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r25.pregnantStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](17, _c1, item_r25.lactatingWomanStatus == "Y" ? "blue" : "", item_r25.lactatingWomanStatus == "Y" ? "bold" : "", item_r25.lactatingWomanStatus == "Y" ? "pointer" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r25.lactatingWomanStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r25.pemStatus.includes("R") || item_r25.pemStatus.includes("G") || item_r25.pemStatus.includes("Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r25.pemStatus == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r25.pemStatus == "N/A");
  }
}
const _c2 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class CentralRegisterViewComponent {
  constructor(centralService, http, route, validationService, fb, sidebarService, httpClient, baselineService) {
    this.centralService = centralService;
    this.http = http;
    this.route = route;
    this.validationService = validationService;
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.httpClient = httpClient;
    this.baselineService = baselineService;
    this.regionList = [];
    this.branchList = [];
    this.centralDetails = [];
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    this.page = 1;
    this.pageSize = 6;
    this.loader = true;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.sidebarService.subMenuList.find(item => item.functionShortName == 'Household Info')?.subMenuDetailList.find(item => item.subFunctionMasterId == 89 || item.subFunctionMasterId == 90 || item.subFunctionMasterId == 91 || item.subFunctionMasterId == 92)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? this.route.navigate(['/central-register/view']) : this.route.navigate(['/error']);
    this.localStorageData = JSON.parse(localStorage.getItem("datas"));
    console.log(this.localStorageData, 'localstorage');
    this.createForm();
    if (this.localStorageData) {
      if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
        let Dto = {
          dataAccessDTO: this.http.dataAccessDTO,
          branchId: this.localStorageData?.branchID ? this.localStorageData?.branchID : this.sidebarService?.branchId
        };
        if (this.sidebarService.RoleDTOName.indexOf('HCO') != -1 || this.sidebarService.RoleDTOName.indexOf('TL') != -1) {
          this.centralService.villagesOfBranch(Dto).subscribe(res => {
            if (res.sessionDTO.status == true) {
              this.villagesOfBranch = res.responseObject;
              console.log(this.villagesOfBranch, 'villagesOfBranch12');
            }
          });
          setTimeout(() => {
            this.changeBlock(this.localStorageData?.blockID);
            this.changeGp(this.localStorageData?.gpID);
            this.changeVillage(this.localStorageData?.villageID);
          }, 1000);
        }
      } else {
        this.changeRegion(this.localStorageData.regionID);
        this.changeBranch(this.localStorageData.branchID);
        setTimeout(() => {
          this.changeBlock(this.localStorageData.blockID);
          this.changeGp(this.localStorageData.gpID);
          this.changeVillage(this.localStorageData.villageID);
        }, 1000);
      }
    }
    window.onbeforeunload = function () {
      localStorage.removeItem("datas");
    };
    this.createForm();
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
        this.httpClient.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
          }
        });
      }
    });
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }
  createForm() {
    this.centralViewForm = this.fb.group({
      region: [this.localStorageData?.regionID ? this.localStorageData?.regionID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: [this.localStorageData?.branchID ? this.localStorageData?.branchID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      block: [this.localStorageData?.blockID ? this.localStorageData?.blockID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gp: [this.localStorageData?.gpID ? this.localStorageData?.gpID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gram: [this.localStorageData?.villageID ? this.localStorageData?.villageID : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
    if (this.localStorageData != null) {
      this.centralViewForm.markAllAsTouched();
    }
  }
  get f() {
    return this.centralViewForm.controls;
  }
  changeRegion(regionId) {
    this.regionId = regionId;
    console.log(this.regionId);
    let req = {
      dataAccessDTO: this.http.dataAccessDTO,
      regionId: regionId
    };
    this.centralService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');
    }, error => {
      this.branchList = null;
    });
    if (!this.localStorageData) {
      this.centralViewForm.controls.branch.setValue('');
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
      this.timeToTentativeEndDate = '';
      if (!this.centralViewForm.value.region) {
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
        this.timeToTentativeEndDate = '';
      }
    } else {
      this.centralViewForm.controls.branch.setValue('');
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.villagesOfBranch = [];
      this.gpList = [];
      this.centralDetails = [];
      this.timeToTentativeEndDate = '';
    }
  }
  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId);
    this.branchEnddateDetailDTO = this.branchList.find(bran => bran.branchId == branchId)?.branchBaselineSurveyEnddateDetailDTO;
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
    let Dto = {
      dataAccessDTO: this.http.dataAccessDTO,
      branchId: branchId
    };
    this.centralService.villagesOfBranch(Dto).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
    });
    if (!this.localStorageData) {
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.gpList = [];
      this.centralDetails = [];
      if (!this.centralViewForm.value.branch) {
        this.centralViewForm.controls.block.setValue('');
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
      }
    } else {
      this.centralViewForm.controls.block.setValue('');
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.villageList = [];
      this.gpList = [];
      this.centralDetails = [];
      if (!this.centralViewForm.value.branch) {
        this.centralViewForm.controls.block.setValue('');
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.villagesOfBranch = [];
        this.gpList = [];
        this.centralDetails = [];
      }
    }
  }
  changeBlock(blockId) {
    this.blockId = blockId;
    console.log(this.blockId);
    this.gpList = this.villagesOfBranch?.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList);
    if (!this.localStorageData) {
      this.centralViewForm.controls.gp.setValue('');
      this.centralViewForm.controls.gram.setValue('');
      this.centralDetails = [];
      if (!this.centralViewForm.value.block) {
        this.centralViewForm.controls.gp.setValue('');
        this.centralViewForm.controls.gram.setValue('');
        this.villageList = [];
        this.centralDetails = [];
      }
    }
  }
  changeGp(gpId) {
    this.gpId = gpId;
    console.log(this.gpId);
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList);
    if (!this.localStorageData) {
      this.centralViewForm.controls.gram.setValue('');
      this.centralDetails = [];
      if (!this.centralViewForm.value.gp) {
        this.centralViewForm.controls.gram.setValue('');
        this.centralDetails = [];
      }
    }
  }
  changeVillage(villageId) {
    this.villageId = villageId;
    console.log(this.villageId);
    this.loader = false;
    if (!this.centralViewForm.value.gram) {
      this.loader = true;
    }
    let obj = {
      dataAccessDTO: this.http.dataAccessDTO,
      villageId: villageId
    };
    this.centralService.viewCentralRegisterDetails(obj).subscribe(res => {
      this.centralDetails = res.responseObject;
      console.log(this.centralDetails);
      this.loader = true;
    });
    if (!this.localStorageData) {
      this.centralDetails = [];
      if (!this.centralViewForm.value.gram) {
        this.centralDetails = [];
      }
    }
  }
  routePWStatus(PWitem) {
    if (PWitem.pregnantStatus == 'Y') {
      console.log(PWitem);
      this.route.navigate(['/pw-register'], {
        queryParams: {
          familyID: PWitem.familyDetailId,
          status: 'viewCentral',
          regionID: this.regionId,
          branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId
        }
      });
    }
  }
  routeLMStatus(LMitem) {
    if (LMitem.lactatingWomanStatus == 'Y') {
      console.log(LMitem);
      this.route.navigate(['/lmr'], {
        queryParams: {
          familyID: LMitem.familyDetailId,
          status: 'viewCentralLM',
          regionID: this.regionId,
          branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
          blockID: this.blockId,
          gpID: this.gpId,
          villageID: this.villageId
        }
      });
    }
  }
  routePEMStatus(PEMitem) {
    console.log(PEMitem);
    this.route.navigate(['/pem-register/create'], {
      queryParams: {
        familyID: PEMitem.familyDetailId,
        status: 'viewCentralPEM',
        regionID: this.regionId,
        branchID: this.branchId ? this.branchId : this.sidebarService.branchId,
        blockID: this.blockId,
        gpID: this.gpId,
        villageID: this.villageId
      }
    });
  }
  ngOnDestroy() {
    localStorage.removeItem("datas");
  }
}
CentralRegisterViewComponent.ɵfac = function CentralRegisterViewComponent_Factory(t) {
  return new (t || CentralRegisterViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_central_register_service__WEBPACK_IMPORTED_MODULE_1__.CentralRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_5__.BaselineSurveyService));
};
CentralRegisterViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CentralRegisterViewComponent,
  selectors: [["app-central-register-view"]],
  decls: 88,
  vars: 33,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "col"], [1, "page-title"], [2, "color", "blue"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search central info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "10%"], [2, "width", "22%"], [2, "width", "28%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngStyle", "click"], [3, "ngStyle", "click", 4, "ngIf"]],
  template: function CentralRegisterViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 2)(6, "div", 5)(7, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "View Central Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, CentralRegisterViewComponent_div_13_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 2)(15, "div", 10)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CentralRegisterViewComponent_Template_select_change_20_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, CentralRegisterViewComponent_option_23_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CentralRegisterViewComponent_div_24_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 10)(26, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CentralRegisterViewComponent_Template_select_change_30_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, CentralRegisterViewComponent_option_33_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CentralRegisterViewComponent_div_34_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 10)(36, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function CentralRegisterViewComponent_Template_select_change_40_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, CentralRegisterViewComponent_option_43_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, CentralRegisterViewComponent_div_44_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "div", 23)(48, "form", 24)(49, "div", 25)(50, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CentralRegisterViewComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 29)(54, "div", 30)(55, "div", 31)(56, "table", 32)(57, "thead")(58, "tr")(59, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "SL");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Husband Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "PW");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "LM");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "PEM");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](84, CentralRegisterViewComponent_tr_84_Template, 16, 21, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](85, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](86, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "pagination-controls", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function CentralRegisterViewComponent_Template_pagination_controls_pageChange_87_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function CentralRegisterViewComponent_Template_pagination_controls_pageBoundsCorrection_87_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.timeToTentativeEndDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.centralViewForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](22, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](25, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](28, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](85, 16, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](86, 19, ctx.centralDetails, ctx.registerSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](31, _c2, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe],
  styles: [".search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 330px;\r\n  margin-top: 5;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 850px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 690px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 850px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 350px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  font-size: large;\r\n  margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jZW50cmFsLXJlZ2lzdGVyL2NlbnRyYWwtcmVnaXN0ZXItdmlldy9jZW50cmFsLXJlZ2lzdGVyLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMzMwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4NTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICB3aWR0aDogNzQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4NTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGkge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 32091:
/*!*********************************************************************!*\
  !*** ./src/app/modules/central-register/central-register.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRegisterModule": () => (/* binding */ CentralRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _central_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./central-register-routing.module */ 24659);
/* harmony import */ var _central_register_view_central_register_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central-register-view/central-register-view.component */ 16764);
/* harmony import */ var _central_register_create_central_register_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./central-register-create/central-register-create.component */ 91118);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 88824);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _baseline_survey_location_location_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../baseline-survey/location/location.module */ 46425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);











class CentralRegisterModule {}
CentralRegisterModule.ɵfac = function CentralRegisterModule_Factory(t) {
  return new (t || CentralRegisterModule)();
};
CentralRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CentralRegisterModule
});
CentralRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _central_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CentralRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _baseline_survey_location_location_module__WEBPACK_IMPORTED_MODULE_6__.LocationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CentralRegisterModule, {
    declarations: [_central_register_view_central_register_view_component__WEBPACK_IMPORTED_MODULE_1__.CentralRegisterViewComponent, _central_register_create_central_register_create_component__WEBPACK_IMPORTED_MODULE_2__.CentralRegisterCreateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _central_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CentralRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _baseline_survey_location_location_module__WEBPACK_IMPORTED_MODULE_6__.LocationModule]
  });
})();

/***/ }),

/***/ 23937:
/*!**********************************************************************!*\
  !*** ./src/app/modules/central-register/central-register.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralRegisterService": () => (/* binding */ CentralRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CentralRegisterService {
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
  getIdCardDetails(obj) {
    return this.http.post(`${this.baseURL}identitycardtypes/view`, obj);
  }
  saveCentralRegister(obj) {
    return this.http.post(`${this.baseURL}baselinesurvey/saveOrUpdate`, obj);
  }
  viewDetailsCentralRegister(obj) {
    return this.http.post(`${this.baseURL}familydetail/view`, obj);
  }
  deleteFamily(obj) {
    return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj);
  }
  listOfRegionsOfUser(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj);
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  villagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
  }
  viewCentralRegisterDetails(obj) {
    return this.http.post(`${this.baseURL}centralRegister/view`, obj);
  }
}
CentralRegisterService.ɵfac = function CentralRegisterService_Factory(t) {
  return new (t || CentralRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CentralRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CentralRegisterService,
  factory: CentralRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_central-register_central-register_module_ts.js.map