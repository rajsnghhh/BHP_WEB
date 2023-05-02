"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_event-register_event-register_module_ts"],{

/***/ 64274:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/event-register/create-event-register/create-event-register.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEventRegisterComponent": () => (/* binding */ CreateEventRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-register.service */ 97385);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);











function CreateEventRegisterComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", event_r3.eventTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", event_r3.eventName, " ");
  }
}
function CreateEventRegisterComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select a Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_20_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.l.eventType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter School Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CreateEventRegisterComponent_div_21_div_8_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.l.schoolName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.l.schoolName.errors.minlength);
  }
}
function CreateEventRegisterComponent_div_21_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select school type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_21_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.l.schoolType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", block_r24.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", block_r24.blockName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_40_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.l.block.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", gp_r26.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", gp_r26.name, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_50_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.l.gp.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", vill_r28.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", vill_r28.villageName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_60_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.l.gram.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please select event date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_68_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.l.eventDate.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const issue_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", issue_r31.eventIssueMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", issue_r31.issueName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_78_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select a Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_78_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r15.l.issueType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate5"]("", user_r33.user_firstname, "", user_r33.user_middlename, " ", user_r33.user_lastname, " (", user_r33.role_shortname, ") - ", user_r33.branch_name ? user_r33.branch_name : "NA", " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CreateEventRegisterComponent_div_21_tr_101_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", desig_r39.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", desig_r39.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_101_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Designation selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_101_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_tr_101_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r38.l.designation.errors.required);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CreateEventRegisterComponent_div_21_tr_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_101_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_101_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_101_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const i_r36 = restoredCtx.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.facilitatorDetails.facilitatorInfo[i_r36].Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "select", 56)(5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_101_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_tr_101_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_101_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const i_r36 = restoredCtx.index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.removeFacilitator(i_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r36 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx_r18.facilitatorDetails.facilitatorInfo[i_r36].Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ctx_r18.l.designation.invalid && ctx_r18.l.designation.touched, ctx_r18.l.designation.valid && (ctx_r18.l.designation.dirty || ctx_r18.l.designation.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r18.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.l.designation.errors);
  }
}
function CreateEventRegisterComponent_div_21_tr_111_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", desig_r50.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", desig_r50.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_111_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Designation selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_111_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_tr_111_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r49.l.designation.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_111_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_111_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_111_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const i_r47 = restoredCtx.index;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.stakeHolderDetails.stakeHolderInfo[i_r47].Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "select", 56)(5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_111_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_tr_111_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_111_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const i_r47 = restoredCtx.index;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.removeStackHolder(i_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx_r19.stakeHolderDetails.stakeHolderInfo[i_r47].Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ctx_r19.l.designation.invalid && ctx_r19.l.designation.touched, ctx_r19.l.designation.valid && (ctx_r19.l.designation.dirty || ctx_r19.l.designation.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r19.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.l.designation.errors);
  }
}
function CreateEventRegisterComponent_div_21_tr_122_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", desig_r63.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", desig_r63.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_122_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Designation selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_122_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_tr_122_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.l.designation.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_tr_122_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", desig_r65.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", desig_r65.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_122_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Designation selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_122_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_tr_122_div_14_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r62.l.designation.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_tr_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_122_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r67.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_122_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r69.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_122_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);
      const i_r58 = restoredCtx.index;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r70.attendeeDetails.attendeeInfo[i_r58].Name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "select", 56)(5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_122_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_tr_122_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "select", 56)(11, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CreateEventRegisterComponent_div_21_tr_122_option_13_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CreateEventRegisterComponent_div_21_tr_122_div_14_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_122_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);
      const i_r58 = restoredCtx.index;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.removeAttendeeDetails(i_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r58 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0))("ngModel", ctx_r20.attendeeDetails.attendeeInfo[i_r58].Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c1, ctx_r20.l.designation.invalid && ctx_r20.l.designation.touched, ctx_r20.l.designation.valid && (ctx_r20.l.designation.dirty || ctx_r20.l.designation.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r20.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.l.designation.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](12, _c1, ctx_r20.l.designation.invalid && ctx_r20.l.designation.touched, ctx_r20.l.designation.valid && (ctx_r20.l.designation.dirty || ctx_r20.l.designation.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r20.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r20.l.designation.errors);
  }
}
function CreateEventRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 20)(3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "School Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_Template_input_keypress_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.validationService.onlyAlphabetsAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_div_8_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20)(10, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "School Type :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 24)(15, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "-- Select School Type --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Government");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CreateEventRegisterComponent_div_21_div_21_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7)(24, "div", 20)(25, "fieldset", 27)(26, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "School Place :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 7)(31, "div", 20)(32, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_Template_select_change_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r74.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CreateEventRegisterComponent_div_21_option_39_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CreateEventRegisterComponent_div_21_div_40_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_Template_select_change_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r75.changeGp($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "-- Select GP --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, CreateEventRegisterComponent_div_21_option_49_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, CreateEventRegisterComponent_div_21_div_50_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 20)(52, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Vill/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "select", 33)(57, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CreateEventRegisterComponent_div_21_option_59_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, CreateEventRegisterComponent_div_21_div_60_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 7)(62, "div", 20)(63, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Date of Event :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function CreateEventRegisterComponent_div_21_Template_input_keydown_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r76.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CreateEventRegisterComponent_div_21_div_68_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 20)(70, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Issue Addressed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "select", 37)(75, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "-- Select Issue Addressed --");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CreateEventRegisterComponent_div_21_option_77_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, CreateEventRegisterComponent_div_21_div_78_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 7)(81, "div", 20)(82, "fieldset", 27)(83, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Staff/ Role/ Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 38)(86, "div", 39)(87, "table", 40)(88, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, CreateEventRegisterComponent_div_21_tr_89_Template, 7, 6, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, CreateEventRegisterComponent_div_21_tr_90_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 7)(92, "div", 8)(93, "div", 43)(94, "div", 44)(95, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Facilitator :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_Template_i_click_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r77.addMoreFacilitator());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 39)(99, "table", 47)(100, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, CreateEventRegisterComponent_div_21_tr_101_Template, 12, 9, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 8)(103, "div", 43)(104, "div", 44)(105, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Stakeholder :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_Template_i_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r78.addMoreStakeHolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 39)(109, "table", 47)(110, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, CreateEventRegisterComponent_div_21_tr_111_Template, 12, 9, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 7)(113, "div", 20)(114, "div", 43)(115, "div", 44)(116, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Details of Attendee :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_Template_i_click_118_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r79.addMoreAttendeeDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 39)(120, "table", 47)(121, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, CreateEventRegisterComponent_div_21_tr_122_Template, 18, 15, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](25, _c1, ctx_r2.l.schoolName.invalid && ctx_r2.l.schoolName.touched, ctx_r2.l.schoolName.valid && (ctx_r2.l.schoolName.dirty || ctx_r2.l.schoolName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.schoolName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c1, ctx_r2.l.schoolType.invalid && ctx_r2.l.schoolType.touched, ctx_r2.l.schoolType.valid && (ctx_r2.l.schoolType.dirty || ctx_r2.l.schoolType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.schoolType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c1, ctx_r2.l.block.invalid && ctx_r2.l.block.touched, ctx_r2.l.block.valid && (ctx_r2.l.block.dirty || ctx_r2.l.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](34, _c1, ctx_r2.l.gp.invalid && ctx_r2.l.gp.touched, ctx_r2.l.gp.valid && (ctx_r2.l.gp.dirty || ctx_r2.l.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.gpList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c1, ctx_r2.l.gram.invalid && ctx_r2.l.gram.touched, ctx_r2.l.gram.valid && (ctx_r2.l.gram.dirty || ctx_r2.l.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.villageList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.gram.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c1, ctx_r2.l.eventDate.invalid && ctx_r2.l.eventDate.touched, ctx_r2.l.eventDate.valid && (ctx_r2.l.eventDate.dirty || ctx_r2.l.eventDate.touched)))("min", ctx_r2.minToDate)("max", ctx_r2.maxToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.eventDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c1, ctx_r2.l.issueType.invalid && ctx_r2.l.issueType.touched, ctx_r2.l.issueType.valid && (ctx_r2.l.issueType.dirty || ctx_r2.l.issueType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.issuesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.issueType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.hcoUserList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hcoUserList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.facilitatorDetails.facilitatorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.stakeHolderDetails.stakeHolderInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.attendeeDetails.attendeeInfo);
  }
}
class CreateEventRegisterComponent {
  constructor(data, dialogRef, eventService, httpService, fb, validationService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.eventService = eventService;
    this.httpService = httpService;
    this.fb = fb;
    this.validationService = validationService;
    this.loader = true;
    this.eventTypeLists = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.gpList = [];
    this.hcoUserList = [];
    this.issuesList = [];
    this.designationList = [];
    this.facilitatorDetails = {
      facilitatorInfo: []
    };
    this.stakeHolderDetails = {
      stakeHolderInfo: []
    };
    this.attendeeDetails = {
      attendeeInfo: []
    };
    this.classList = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data);
    this.createEventForm();
    let eventListReq = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.eventTypeLists = res.responseObject;
      console.log(this.eventTypeLists, 'eventTypeLists');
    });
  }
  createEventForm() {
    this.createEventRegisterForm = this.fb.group({
      eventType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      schoolType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      issueType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get l() {
    return this.createEventRegisterForm.controls;
  }
  changeEventTypes(eventTypeMasterId) {
    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    console.log(this.event_is_special, 'this.event_is_special');
    if (this.event_is_special == 'N') {
      let villageReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.data.branchID
      };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe(res => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        console.log(this.villagesOfBranch, 'villagesOfBranch');
      });
      this.minToDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
      this.maxToDate = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
      let hcoUserReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.data.branchID
      };
      this.loader = false;
      this.eventService.getAllStaffOfABrancsRegion(hcoUserReg).subscribe(res => {
        this.loader = true;
        this.hcoUserList = res.responseObject.fullStaffList;
        console.log(this.hcoUserList, 'hcoUserList');
      });
      let getEventPreRequisiteReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        event_type_master_id: null
      };
      this.loader = false;
      this.eventService.getEventPreRequisite(getEventPreRequisiteReg).subscribe(res => {
        this.loader = true;
        console.log(res.responseObject.issueList);
        this.issuesList = res.responseObject.issueList.filter(x => x.eventTypeMasterId == eventTypeMasterId);
        console.log(this.issuesList, 'issuesList');
        this.designationList = res.responseObject.designationList;
        console.log(this.designationList, 'designationList');
      });
      this.facilitatorDetails.facilitatorInfo = [];
      this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];
      this.facilitatorDetails.facilitatorInfo.push({
        Name: '',
        Designation: ''
      });
      this.stakeHolderDetails.stakeHolderInfo.push({
        Name: '',
        Designation: ''
      });
      this.attendeeDetails.attendeeInfo.push({
        Name: '',
        Class: '',
        Sex: ''
      });
      this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
      console.log(this.classList);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.createEventRegisterForm.controls.gram.setValue('');
    // this.escortviewData = [];
  }

  restrictTypeOfDate() {
    return false;
  }
  addMoreFacilitator() {
    this.facilitatorDetails.facilitatorInfo.push({
      Name: '',
      Designation: ''
    });
  }
  removeFacilitator(i) {
    this.facilitatorDetails.facilitatorInfo.splice(i, 1);
  }
  addMoreStakeHolder() {
    this.stakeHolderDetails.stakeHolderInfo.push({
      Name: '',
      Designation: ''
    });
  }
  removeStackHolder(i) {
    this.stakeHolderDetails.stakeHolderInfo.splice(i, 1);
  }
  addMoreAttendeeDetails() {
    this.attendeeDetails.attendeeInfo.push({
      Name: '',
      Class: '',
      Sex: ''
    });
  }
  removeAttendeeDetails(i) {
    this.attendeeDetails.attendeeInfo.splice(i, 1);
  }
}
CreateEventRegisterComponent.ɵfac = function CreateEventRegisterComponent_Factory(t) {
  return new (t || CreateEventRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_1__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService));
};
CreateEventRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CreateEventRegisterComponent,
  selectors: [["app-create-event-register"]],
  decls: 26,
  vars: 9,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", "", 2, "overflow-y", "auto", "height", "400px", "overflow-x", "hidden"], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "eventType"], [1, "text-danger"], ["formControlName", "eventType", "id", "eventType", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], [3, "value"], [1, "invalid-feedback"], [1, "form-group", "col-md"], ["for", "schoolName"], ["type", "text", "placeholder", "Enter School Name", "formControlName", "schoolName", "maxlength", "100", "minlength", "3", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "schoolType"], ["formControlName", "schoolType", "id", "schoolType", 1, "form-select", 3, "ngClass"], ["value", "govt"], ["value", "private"], [1, "scheduler-border"], ["for", "block"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass"], ["for", "eventDate"], ["type", "date", "formControlName", "eventDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "issueType"], ["formControlName", "issueType", "id", "issueType", 1, "form-select", 3, "ngClass"], ["id", "tbodyStaff"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "200px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["id", "circle", "title", "Add More Facilitator", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "table_wrapper", 1, "table"], ["id", "tbodyFaciliator", 2, "text-align", "center"], ["id", "circle", "title", "Add More Stakeholder", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "circle", "title", "Add More Attendee Details", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], [2, "width", "4%"], [2, "width", "25%"], [2, "width", "5%"], ["colspan", "6"], ["type", "text", "maxlength", "20", "placeholder", "Facilitator Name", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["formControlName", "designation", "id", "designation", 1, "form-select", 3, "ngClass"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem", 3, "click"], [1, "fas", "fa-minus-circle", 2, "color", "red !important", "font-size", "20px"], ["type", "text", "maxlength", "20", "placeholder", "Stakeholder Name", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"]],
  template: function CreateEventRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create Event Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div")(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateEventRegisterComponent_Template_i_click_6_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Event Types :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CreateEventRegisterComponent_Template_select_change_16_listener($event) {
        return ctx.changeEventTypes($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "-- Select Event Types --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CreateEventRegisterComponent_option_19_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CreateEventRegisterComponent_div_20_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CreateEventRegisterComponent_div_21_Template, 123, 46, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16)(23, "div", 7)(24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.createEventRegisterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ctx.l.eventType.invalid && ctx.l.eventType.touched, ctx.l.eventType.valid && (ctx.l.eventType.dirty || ctx.l.eventType.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.eventTypeLists);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.l.eventType.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.event_is_special == "N");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: -12px 0 1.5em 0 !important;\r\n    height: 120px;\r\n  }\r\n  \r\n  legend.scheduler-border[_ngcontent-%COMP%] {\r\n    border: 1px groove #ddd !important;\r\n    background-color: gray;\r\n    width: 180px;\r\n    color: #ddd;\r\n    font-size: 1.2em !important;\r\n    font-weight: bold !important;\r\n    font-family: ui-sans-serif;\r\n  }\r\n\r\n  .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  #tbodyStaff[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 85px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  #table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border-bottom: 0 solid transparent;\r\n    background-color: #fff;\r\n    padding: 17px 30px;\r\n    line-height: 16px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n    text-transform: capitalize;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    border: 0;\r\n    background: #499;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  #table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n  }\r\n\r\n  #header_fixed[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n  }\r\n\r\n  .fa-plus-circle[_ngcontent-%COMP%] {\r\n    color: #3e7758 !important;\r\n    font-size: 20px;\r\n    \r\n  }\r\n  \r\n  .fa-minus-circle[_ngcontent-%COMP%] {\r\n    color: red !important;\r\n    font-size: 20px;\r\n  }\r\n\r\n  #tbodyFaciliator[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 130px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n    .mat-dialog-container {\r\n      overflow: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ldmVudC1yZWdpc3Rlci9jcmVhdGUtZXZlbnQtcmVnaXN0ZXIvY3JlYXRlLWV2ZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IC0xMnB4IDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAjdGJvZHlTdGFmZiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRib2R5IHRkIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcblxyXG4gICNoZWFkZXJfZml4ZWQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcblxyXG4gIC5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IC00MjlweDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmZhLW1pbnVzLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAjdGJvZHlGYWNpbGlhdG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88442:
/*!*************************************************************************!*\
  !*** ./src/app/modules/event-register/event-register-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRegisterRoutingModule": () => (/* binding */ EventRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _event_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-register.component */ 18567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _event_register_component__WEBPACK_IMPORTED_MODULE_0__.EventRegisterComponent
}];
class EventRegisterRoutingModule {}
EventRegisterRoutingModule.ɵfac = function EventRegisterRoutingModule_Factory(t) {
  return new (t || EventRegisterRoutingModule)();
};
EventRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EventRegisterRoutingModule
});
EventRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EventRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 18567:
/*!********************************************************************!*\
  !*** ./src/app/modules/event-register/event-register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRegisterComponent": () => (/* binding */ EventRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event-register/create-event-register.component */ 64274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-register.service */ 97385);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);













function EventRegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventRegisterComponent_div_9_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.createEventRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function EventRegisterComponent_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", region_r9.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", region_r9.regionName, " ");
  }
}
function EventRegisterComponent_div_11_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EventRegisterComponent_div_11_div_10_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.l.region.errors.required);
  }
}
function EventRegisterComponent_div_11_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", branch_r11.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r11.branchName, " ");
  }
}
function EventRegisterComponent_div_11_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_11_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EventRegisterComponent_div_11_div_20_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function EventRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function EventRegisterComponent_div_11_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EventRegisterComponent_div_11_option_9_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EventRegisterComponent_div_11_div_10_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 13)(12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function EventRegisterComponent_div_11_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EventRegisterComponent_div_11_option_19_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, EventRegisterComponent_div_11_div_20_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, ctx_r2.l.region.invalid && ctx_r2.l.region.touched, ctx_r2.l.region.valid && (ctx_r2.l.region.dirty || ctx_r2.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx_r2.l.branch.invalid && ctx_r2.l.branch.touched, ctx_r2.l.branch.valid && (ctx_r2.l.branch.dirty || ctx_r2.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.branch.errors);
  }
}
class EventRegisterComponent {
  constructor(fb, sidebarService, http, toaster, validationService, httpService, eventService, dialog) {
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.toaster = toaster;
    this.validationService = validationService;
    this.httpService = httpService;
    this.eventService = eventService;
    this.dialog = dialog;
    this.loader = false;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.eventRegisterForms();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.loader = true;
      this.lowerRankbranchId = res.branchId;
      this.branchOpenDate = !this.lowerRankbranchId ? null : res.branchLIST[0]?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate');
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
          branchId: this.lowerRankbranchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.loader = true;
            this.villagesOfBranch = res.responseObject;
          }
        });
        this.changeBranch(this.lowerRankbranchId);
      }
    });
    this.regionBranchHide = this.sidebarService.regionBranchHide;
  }
  eventRegisterForms() {
    this.eventRegisterForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get l() {
    return this.eventRegisterForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        regionId: regionId
      };
      this.eventService.getBranchesOfRegion(req).subscribe(res => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }
    // this.viewEscortReferForm.controls.branch.setValue('');
    // this.viewEscortReferForm.controls.block.setValue('');
    // this.viewEscortReferForm.controls.gp.setValue('');
    // this.viewEscortReferForm.controls.gram.setValue('');
    // this.gpList = [];
    // this.villageList = [];
    // this.villagesOfBranch = [];
    // if (this.viewEscortReferForm.value.region == '') {
    //   this.branchList = [];
    //   this.escortviewData = [];
    // }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    if (!this.lowerRankbranchId) {
      this.branchOpenDate = this.branchList.find(x => x.branchId == branchId)?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate');
    }
    // let req = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: branchId };
    // this.loader = false;
    // this.eventService.getVillagesOfBranch(req).subscribe((res) => {
    //   this.loader = true;
    //   this.villagesOfBranch = res.responseObject;
    //   console.log(this.villagesOfBranch, 'villagesOfBranch');
    // });
    // this.viewEscortReferForm.controls.block.setValue('');
    // this.viewEscortReferForm.controls.gp.setValue('');
    // this.viewEscortReferForm.controls.gram.setValue('');
    // this.gpList = [];
    // this.villageList = [];
    // this.escortviewData = [];
  }

  createEventRegister() {
    const dialogRef = this.dialog.open(_create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_0__.CreateEventRegisterComponent, {
      width: '1100px',
      height: '570px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId,
        branchOpenDate: this.branchOpenDate
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }
}
EventRegisterComponent.ɵfac = function EventRegisterComponent_Factory(t) {
  return new (t || EventRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_4__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};
EventRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EventRegisterComponent,
  selectors: [["app-event-register"]],
  decls: 12,
  vars: 5,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Event Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Event Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function EventRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Event Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, EventRegisterComponent_div_8_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EventRegisterComponent_div_9_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EventRegisterComponent_div_11_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.eventRegisterForm.value.branch && !ctx.lowerRankbranchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.eventRegisterForm.value.branch || ctx.lowerRankbranchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.eventRegisterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 53093:
/*!*****************************************************************!*\
  !*** ./src/app/modules/event-register/event-register.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRegisterModule": () => (/* binding */ EventRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-register-routing.module */ 88442);
/* harmony import */ var _event_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-register.component */ 18567);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-event-register/create-event-register.component */ 64274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class EventRegisterModule {}
EventRegisterModule.ɵfac = function EventRegisterModule_Factory(t) {
  return new (t || EventRegisterModule)();
};
EventRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: EventRegisterModule
});
EventRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventRegisterRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EventRegisterModule, {
    declarations: [_event_register_component__WEBPACK_IMPORTED_MODULE_1__.EventRegisterComponent, _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_3__.CreateEventRegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventRegisterRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
  });
})();

/***/ }),

/***/ 97385:
/*!******************************************************************!*\
  !*** ./src/app/modules/event-register/event-register.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRegisterService": () => (/* binding */ EventRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class EventRegisterService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getBranchesOfRegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  getEventMasterTypeList(obj) {
    return this.http.post(`${this.baseURL}eventRegister/getEventMasterTypeList`, obj);
  }
  getVillagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
  }
  getAllStaffOfABrancsRegion(obj) {
    return this.http.post(`${this.baseURL}eventRegister/getAllStaffOfABrancsRegion`, obj);
  }
  getEventPreRequisite(obj) {
    return this.http.post(`${this.baseURL}eventRegister/getEventPreRequisite`, obj);
  }
}
EventRegisterService.ɵfac = function EventRegisterService_Factory(t) {
  return new (t || EventRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EventRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EventRegisterService,
  factory: EventRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_event-register_event-register_module_ts.js.map