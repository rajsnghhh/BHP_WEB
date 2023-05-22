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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-register.service */ 97385);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/event-register-search.pipe */ 41502);













function CreateEventRegisterComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", event_r6.eventTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", event_r6.eventName, " ");
  }
}
function CreateEventRegisterComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please select a Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_20_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.l.eventType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter School Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum length should be 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CreateEventRegisterComponent_div_21_div_8_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.l.schoolName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.l.schoolName.errors.minlength);
  }
}
function CreateEventRegisterComponent_div_21_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please select school type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_21_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.l.schoolType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", block_r31.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", block_r31.blockName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_40_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.l.block.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", gp_r33.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", gp_r33.name, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_50_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.l.gp.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", vill_r35.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vill_r35.villageName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_60_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.l.gram.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select event date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_68_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.l.eventDate.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const issue_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", issue_r38.eventIssueMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", issue_r38.issueName, " ");
  }
}
function CreateEventRegisterComponent_div_21_div_78_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please select a Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_21_div_78_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.l.issueType.errors.required);
  }
}
function CreateEventRegisterComponent_div_21_tr_91_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_tr_91_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const user_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.selectMultipleStaff($event, user_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_91_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_tr_91_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const user_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.selectMultipleStaff($event, user_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_91_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_tr_91_input_8_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);
      const user_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.selectMultipleStaff($event, user_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_91_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_tr_91_input_9_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57);
      const user_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r55.selectMultipleStaff($event, user_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CreateEventRegisterComponent_div_21_tr_91_input_6_Template, 1, 0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_91_input_7_Template, 1, 0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_tr_91_input_8_Template, 1, 0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_21_tr_91_input_9_Template, 1, 0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r41 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate5"]("", user_r40.user_firstname, "", user_r40.user_middlename, " ", user_r40.user_lastname, " (", user_r40.role_shortname, ") - ", user_r40.branch_name ? user_r40.branch_name : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r40.is_checked == true && (ctx_r19.specificEventDetails == null ? null : ctx_r19.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r40.is_checked == false && (ctx_r19.specificEventDetails == null ? null : ctx_r19.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r40.is_checked == true && (ctx_r19.specificEventDetails == null ? null : ctx_r19.specificEventDetails.modalType) == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r40.is_checked == false && (ctx_r19.specificEventDetails == null ? null : ctx_r19.specificEventDetails.modalType) == "view");
  }
}
function CreateEventRegisterComponent_div_21_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CreateEventRegisterComponent_div_21_i_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_i_101_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.addMoreFacilitator());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_105_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", desig_r65.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", desig_r65.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_105_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_105_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);
      const i_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.removeFacilitator(i_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_105_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function CreateEventRegisterComponent_div_21_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_105_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_105_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_105_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const i_r61 = restoredCtx.index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.facilitatorDetails.facilitatorInfo[i_r61].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_21_tr_105_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70);
      const i_r61 = restoredCtx.index;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.facilitatorDetails.facilitatorInfo[i_r61].designationId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_105_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_21_tr_105_button_9_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_21_tr_105_button_10_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("ngModel", ctx_r22.facilitatorDetails.facilitatorInfo[i_r61].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r22.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r22.isReadOnly)("ngModel", ctx_r22.facilitatorDetails.facilitatorInfo[i_r61].designationId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r22.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r22.facilitatorDetails.facilitatorInfo[i_r61].active_flag != "D" && (ctx_r22.specificEventDetails == null ? null : ctx_r22.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r22.facilitatorDetails.facilitatorInfo[i_r61].active_flag == "D" && (ctx_r22.specificEventDetails == null ? null : ctx_r22.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_21_i_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_i_111_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.addMoreStakeHolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_115_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", desig_r81.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", desig_r81.designation, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_115_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_115_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84);
      const i_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.removeStackHolder(i_r77));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_115_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_115_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_115_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r87.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_115_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const i_r77 = restoredCtx.index;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r88.stakeHolderDetails.stakeHolderInfo[i_r77].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_21_tr_115_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const i_r77 = restoredCtx.index;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.stakeHolderDetails.stakeHolderInfo[i_r77].designationId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_115_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_21_tr_115_button_9_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_21_tr_115_button_10_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r77 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("ngModel", ctx_r24.stakeHolderDetails.stakeHolderInfo[i_r77].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r24.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r24.isReadOnly)("ngModel", ctx_r24.stakeHolderDetails.stakeHolderInfo[i_r77].designationId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r24.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r24.stakeHolderDetails.stakeHolderInfo[i_r77].active_flag == "A" && (ctx_r24.specificEventDetails == null ? null : ctx_r24.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r24.stakeHolderDetails.stakeHolderInfo[i_r77].active_flag == "D" && (ctx_r24.specificEventDetails == null ? null : ctx_r24.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_21_i_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_i_124_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r90.addMoreAttendeeDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_128_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const class_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", class_r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", class_r99, " ");
  }
}
function CreateEventRegisterComponent_div_21_tr_128_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_128_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_128_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_21_tr_128_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r102);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r100.removeAttendeeDetails(i_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_128_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_21_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_tr_128_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r103.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_21_tr_128_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r105.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_21_tr_128_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const i_r93 = restoredCtx.index;
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r106.attendeeDetails.attendeeInfo[i_r93].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_21_tr_128_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const i_r93 = restoredCtx.index;
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r107.attendeeDetails.attendeeInfo[i_r93].className = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Class --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_21_tr_128_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td")(9, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_21_tr_128_Template_select_ngModelChange_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r104);
      const i_r93 = restoredCtx.index;
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r108.attendeeDetails.attendeeInfo[i_r93].sex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "-- Sex --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CreateEventRegisterComponent_div_21_tr_128_option_12_Template, 2, 0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CreateEventRegisterComponent_div_21_tr_128_option_15_Template, 2, 0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CreateEventRegisterComponent_div_21_tr_128_button_17_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CreateEventRegisterComponent_div_21_tr_128_button_18_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r93 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0))("ngModel", ctx_r26.attendeeDetails.attendeeInfo[i_r93].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r26.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r26.isReadOnly)("ngModel", ctx_r26.attendeeDetails.attendeeInfo[i_r93].className)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r26.classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r26.isReadOnly)("ngModel", ctx_r26.attendeeDetails.attendeeInfo[i_r93].sex)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.createEventRegisterForm.value.eventType == 1 || (ctx_r26.specificEventDetails == null ? null : ctx_r26.specificEventDetails.eventTypeMasterId) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.createEventRegisterForm.value.eventType == 1 || (ctx_r26.specificEventDetails == null ? null : ctx_r26.specificEventDetails.eventTypeMasterId) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.attendeeDetails.attendeeInfo[i_r93].active_flag == "A" && (ctx_r26.specificEventDetails == null ? null : ctx_r26.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.attendeeDetails.attendeeInfo[i_r93].active_flag == "D" && (ctx_r26.specificEventDetails == null ? null : ctx_r26.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_21_div_129_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r110 = ctx.$implicit;
    const i_r111 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", image_r110.event_school_register_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", image_r110.event_school_register_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Image : ", i_r111 + 1, "");
  }
}
function CreateEventRegisterComponent_div_21_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Event Captured Images ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CreateEventRegisterComponent_div_21_div_129_div_4_Template, 5, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r27.capturedImagesList);
  }
}
const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CreateEventRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 19)(3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "School Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_21_Template_input_keypress_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r113);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r112.validationService.onlyAlphabetsAndSpace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_21_div_8_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 19)(10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "School Type :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "select", 23)(15, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "-- Select School Type --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Government");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CreateEventRegisterComponent_div_21_div_21_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7)(24, "div", 19)(25, "fieldset", 26)(26, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "School Place :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 7)(31, "div", 19)(32, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_Template_select_change_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r113);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r114.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CreateEventRegisterComponent_div_21_option_39_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CreateEventRegisterComponent_div_21_div_40_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 19)(42, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_21_Template_select_change_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r113);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r115.changeGp($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "-- Select GP --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, CreateEventRegisterComponent_div_21_option_49_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, CreateEventRegisterComponent_div_21_div_50_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 19)(52, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Vill/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "select", 33)(57, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, CreateEventRegisterComponent_div_21_option_59_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, CreateEventRegisterComponent_div_21_div_60_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 7)(62, "div", 19)(63, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Date of Event :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CreateEventRegisterComponent_div_21_Template_input_keydown_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r113);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r116.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, CreateEventRegisterComponent_div_21_div_68_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 19)(70, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Issue Addressed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "select", 37)(75, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "-- Select Issue Addressed --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, CreateEventRegisterComponent_div_21_option_77_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, CreateEventRegisterComponent_div_21_div_78_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 7)(81, "div", 19)(82, "fieldset", 27)(83, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Staff/ Role/ Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 38)(88, "div", 39)(89, "table", 40)(90, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, CreateEventRegisterComponent_div_21_tr_91_Template, 10, 10, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, CreateEventRegisterComponent_div_21_tr_92_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 7)(94, "div", 8)(95, "div", 43)(96, "div", 44)(97, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Facilitator :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, CreateEventRegisterComponent_div_21_i_101_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 39)(103, "table", 47)(104, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, CreateEventRegisterComponent_div_21_tr_105_Template, 11, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 8)(107, "div", 43)(108, "div", 44)(109, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Stakeholder :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, CreateEventRegisterComponent_div_21_i_111_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 39)(113, "table", 47)(114, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, CreateEventRegisterComponent_div_21_tr_115_Template, 11, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 7)(117, "div", 19)(118, "div", 43)(119, "div", 44)(120, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Details of Attendee :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, CreateEventRegisterComponent_div_21_i_124_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 39)(126, "table", 47)(127, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, CreateEventRegisterComponent_div_21_tr_128_Template, 19, 17, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](129, CreateEventRegisterComponent_div_21_div_129_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](29, _c1, ctx_r2.l.schoolName.invalid && ctx_r2.l.schoolName.touched, ctx_r2.l.schoolName.valid && (ctx_r2.l.schoolName.dirty || ctx_r2.l.schoolName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.schoolName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](32, _c1, ctx_r2.l.schoolType.invalid && ctx_r2.l.schoolType.touched, ctx_r2.l.schoolType.valid && (ctx_r2.l.schoolType.dirty || ctx_r2.l.schoolType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.schoolType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](35, _c1, ctx_r2.l.block.invalid && ctx_r2.l.block.touched, ctx_r2.l.block.valid && (ctx_r2.l.block.dirty || ctx_r2.l.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](38, _c1, ctx_r2.l.gp.invalid && ctx_r2.l.gp.touched, ctx_r2.l.gp.valid && (ctx_r2.l.gp.dirty || ctx_r2.l.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.gpList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](41, _c1, ctx_r2.l.gram.invalid && ctx_r2.l.gram.touched, ctx_r2.l.gram.valid && (ctx_r2.l.gram.dirty || ctx_r2.l.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.villageList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.gram.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](44, _c1, ctx_r2.l.eventDate.invalid && ctx_r2.l.eventDate.touched, ctx_r2.l.eventDate.valid && (ctx_r2.l.eventDate.dirty || ctx_r2.l.eventDate.touched)))("min", ctx_r2.minToDate)("max", ctx_r2.maxToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.eventDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](47, _c1, ctx_r2.l.issueType.invalid && ctx_r2.l.issueType.touched, ctx_r2.l.issueType.valid && (ctx_r2.l.issueType.dirty || ctx_r2.l.issueType.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.issuesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.l.issueType.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.hcoUserList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.hcoUserList == null ? null : ctx_r2.hcoUserList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.specificEventDetails == null ? null : ctx_r2.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.facilitatorDetails.facilitatorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.specificEventDetails == null ? null : ctx_r2.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.stakeHolderDetails.stakeHolderInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.specificEventDetails == null ? null : ctx_r2.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.attendeeDetails.attendeeInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r2.specificEventDetails == null ? null : ctx_r2.specificEventDetails.modalType) == "view" && ctx_r2.capturedImagesList.length > 0);
  }
}
function CreateEventRegisterComponent_div_22_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select from event date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_22_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r117.l.eventDateFrom.errors.required);
  }
}
function CreateEventRegisterComponent_div_22_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select to event date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_22_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r118.l.eventDateTo.errors.required);
  }
}
function CreateEventRegisterComponent_div_22_tr_27_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_tr_27_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r138);
      const user_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r136.selectMultipleStaff($event, user_r130));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_27_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_tr_27_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r141);
      const user_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r139.selectMultipleStaff($event, user_r130));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_27_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_tr_27_input_8_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r144);
      const user_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r142.selectMultipleStaff($event, user_r130));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_27_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_tr_27_input_9_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r147);
      const user_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r145.selectMultipleStaff($event, user_r130));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CreateEventRegisterComponent_div_22_tr_27_input_6_Template, 1, 0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_22_tr_27_input_7_Template, 1, 0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_22_tr_27_input_8_Template, 1, 0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_22_tr_27_input_9_Template, 1, 0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r130 = ctx.$implicit;
    const i_r131 = ctx.index;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r131 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate5"]("", user_r130.user_firstname, "", user_r130.user_middlename, " ", user_r130.user_lastname, " (", user_r130.role_shortname, ") - ", user_r130.branch_name ? user_r130.branch_name : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r130.is_checked == true && (ctx_r119.specificEventDetails == null ? null : ctx_r119.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r130.is_checked == false && (ctx_r119.specificEventDetails == null ? null : ctx_r119.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r130.is_checked == true && (ctx_r119.specificEventDetails == null ? null : ctx_r119.specificEventDetails.modalType) == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r130.is_checked == false && (ctx_r119.specificEventDetails == null ? null : ctx_r119.specificEventDetails.modalType) == "view");
  }
}
function CreateEventRegisterComponent_div_22_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CreateEventRegisterComponent_div_22_i_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_i_37_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r149);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r148.addMoreFacilitator());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_41_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", desig_r155.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", desig_r155.designation, " ");
  }
}
function CreateEventRegisterComponent_div_22_tr_41_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_tr_41_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r158);
      const i_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r156.removeFacilitator(i_r151));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_41_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_22_tr_41_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r160);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r159.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_22_tr_41_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r160);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r161.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_22_tr_41_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r160);
      const i_r151 = restoredCtx.index;
      const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r162.facilitatorDetails.facilitatorInfo[i_r151].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_22_tr_41_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r160);
      const i_r151 = restoredCtx.index;
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r163.facilitatorDetails.facilitatorInfo[i_r151].designationId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_22_tr_41_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_22_tr_41_button_9_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_22_tr_41_button_10_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r151 = ctx.index;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("ngModel", ctx_r122.facilitatorDetails.facilitatorInfo[i_r151].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r122.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r122.isReadOnly)("ngModel", ctx_r122.facilitatorDetails.facilitatorInfo[i_r151].designationId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r122.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r122.facilitatorDetails.facilitatorInfo[i_r151].active_flag != "D" && (ctx_r122.specificEventDetails == null ? null : ctx_r122.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r122.facilitatorDetails.facilitatorInfo[i_r151].active_flag == "D" && (ctx_r122.specificEventDetails == null ? null : ctx_r122.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_22_i_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_i_48_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r165);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r164.addMoreStakeHolder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_52_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", desig_r171.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", desig_r171.designation, " ");
  }
}
function CreateEventRegisterComponent_div_22_tr_52_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_tr_52_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r174);
      const i_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.removeStackHolder(i_r167));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_52_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_22_tr_52_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r176);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r175.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_22_tr_52_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r176);
      const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r177.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_22_tr_52_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r176);
      const i_r167 = restoredCtx.index;
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r178.stakeHolderDetails.stakeHolderInfo[i_r167].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_22_tr_52_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r176);
      const i_r167 = restoredCtx.index;
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r179.stakeHolderDetails.stakeHolderInfo[i_r167].designationId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_22_tr_52_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_22_tr_52_button_9_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_22_tr_52_button_10_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r167 = ctx.index;
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("ngModel", ctx_r124.stakeHolderDetails.stakeHolderInfo[i_r167].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r124.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r124.isReadOnly)("ngModel", ctx_r124.stakeHolderDetails.stakeHolderInfo[i_r167].designationId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r124.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r124.stakeHolderDetails.stakeHolderInfo[i_r167].active_flag == "A" && (ctx_r124.specificEventDetails == null ? null : ctx_r124.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r124.stakeHolderDetails.stakeHolderInfo[i_r167].active_flag == "D" && (ctx_r124.specificEventDetails == null ? null : ctx_r124.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_22_i_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_i_59_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r181);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r180.addMoreSpecialGuests());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_63_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desig_r187 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", desig_r187.eventDesignationMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", desig_r187.designation, " ");
  }
}
function CreateEventRegisterComponent_div_22_tr_63_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_22_tr_63_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r190);
      const i_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r188.removeSpecialGuests(i_r183));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_63_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_22_tr_63_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r192);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r191.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_22_tr_63_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r192);
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r193.validationService.titleCase($event));
    })("ngModelChange", function CreateEventRegisterComponent_div_22_tr_63_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r192);
      const i_r183 = restoredCtx.index;
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r194.specialGuestDetails.guestsInfo[i_r183].name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td")(4, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_22_tr_63_Template_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r192);
      const i_r183 = restoredCtx.index;
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r195.specialGuestDetails.guestsInfo[i_r183].designationId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- Designation --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_22_tr_63_option_7_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_22_tr_63_button_9_Template, 2, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_22_tr_63_button_10_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r183 = ctx.index;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0))("ngModel", ctx_r126.specialGuestDetails.guestsInfo[i_r183].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r126.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r126.isReadOnly)("ngModel", ctx_r126.specialGuestDetails.guestsInfo[i_r183].designationId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r126.designationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r126.specialGuestDetails.guestsInfo[i_r183].active_flag != "D" && (ctx_r126.specificEventDetails == null ? null : ctx_r126.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r126.specialGuestDetails.guestsInfo[i_r183].active_flag == "D" && (ctx_r126.specificEventDetails == null ? null : ctx_r126.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select the date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_22_div_83_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r196.l.rallySeminarDate.errors.required);
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter the place name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_22_div_83_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r197.l.rallySeminarPlace.errors.required);
  }
}
function CreateEventRegisterComponent_div_22_div_83_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", vill_r207.villageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vill_r207.villageName, " ");
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateEventRegisterComponent_div_22_div_83_div_40_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r200.l.village.errors.required);
  }
}
function CreateEventRegisterComponent_div_22_div_83_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Village Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fam_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fam_r209.villageName, "");
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_tr_58_input_11_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r219);
      const fam_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r217.selectMultipleFamilies($event, fam_r209));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_tr_58_input_12_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r222);
      const fam_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r220.selectMultipleFamilies($event, fam_r209));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_tr_58_input_13_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r225);
      const fam_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r223.selectMultipleFamilies($event, fam_r209));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_tr_58_input_14_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r228);
      const fam_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r226.selectMultipleFamilies($event, fam_r209));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CreateEventRegisterComponent_div_22_div_83_tr_58_td_7_Template, 2, 1, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CreateEventRegisterComponent_div_22_div_83_tr_58_input_11_Template, 1, 0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CreateEventRegisterComponent_div_22_div_83_tr_58_input_12_Template, 1, 0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CreateEventRegisterComponent_div_22_div_83_tr_58_input_13_Template, 1, 0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, CreateEventRegisterComponent_div_22_div_83_tr_58_input_14_Template, 1, 0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fam_r209 = ctx.$implicit;
    const i_r210 = ctx.index;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r210 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fam_r209.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fam_r209.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r202.createEventRegisterForm.value.village == "allFamilies");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fam_r209.setStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fam_r209.is_checked == true && (ctx_r202.specificEventDetails == null ? null : ctx_r202.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fam_r209.is_checked == false && (ctx_r202.specificEventDetails == null ? null : ctx_r202.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fam_r209.is_checked == true && (ctx_r202.specificEventDetails == null ? null : ctx_r202.specificEventDetails.modalType) == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", fam_r209.is_checked == false && (ctx_r202.specificEventDetails == null ? null : ctx_r202.specificEventDetails.modalType) == "view");
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_8_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r239);
      const ss_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r237.selectMultipleSS($event, ss_r231));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_9_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r242);
      const ss_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r240.selectMultipleSS($event, ss_r231));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_10_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r245);
      const ss_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r243.selectMultipleSS($event, ss_r231));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_11_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r248);
      const ss_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r246.selectMultipleSS($event, ss_r231));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_8_Template, 1, 0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_9_Template, 1, 0, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_10_Template, 1, 0, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_input_11_Template, 1, 0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ss_r231 = ctx.$implicit;
    const i_r232 = ctx.index;
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r232 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ss_r231.ssAndBranchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ss_r231.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ss_r231.is_checked == true && (ctx_r229.specificEventDetails == null ? null : ctx_r229.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ss_r231.is_checked == false && (ctx_r229.specificEventDetails == null ? null : ctx_r229.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ss_r231.is_checked == true && (ctx_r229.specificEventDetails == null ? null : ctx_r229.specificEventDetails.modalType) == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ss_r231.is_checked == false && (ctx_r229.specificEventDetails == null ? null : ctx_r229.specificEventDetails.modalType) == "view");
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 19)(2, "fieldset", 27)(3, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "SS List :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 38)(8, "div", 39)(9, "table", 40)(10, "thead", 120)(11, "tr", 41)(12, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "SS - Branch Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Husband/ GuardianName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CreateEventRegisterComponent_div_22_div_83_div_77_tr_21_Template, 12, 7, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CreateEventRegisterComponent_div_22_div_83_div_77_tr_22_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r203.ssListOfRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r203.hcoUserList == null ? null : ctx_r203.hcoUserList.length) == 0);
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_78_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r250 = ctx.$implicit;
    const i_r251 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", image_r250.event_special_register_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", image_r250.event_special_register_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Image : ", i_r251 + 1, "");
  }
}
function CreateEventRegisterComponent_div_22_div_83_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Event Captured Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CreateEventRegisterComponent_div_22_div_83_div_78_div_4_Template, 5, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r204.capturedImagesList);
  }
}
const _c2 = function (a0, a1) {
  return {
    familyNumber: a0,
    name: a1
  };
};
function CreateEventRegisterComponent_div_22_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 19)(3, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Date of Rally/ Seminar :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CreateEventRegisterComponent_div_22_div_83_Template_input_keydown_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r252.restrictTypeOfDate());
    })("change", function CreateEventRegisterComponent_div_22_div_83_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r254.changeDateOfRally($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_22_div_83_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 19)(10, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Place of Rally/ Seminar :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function CreateEventRegisterComponent_div_22_div_83_Template_input_keypress_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r255.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function CreateEventRegisterComponent_div_22_div_83_Template_input_keypress_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r256.validationService.titleCase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CreateEventRegisterComponent_div_22_div_83_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7)(17, "div", 108)(18, "div", 44)(19, "div", 7)(20, "div", 109)(21, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Participants attended");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Rally/ Seminar :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 110)(28, "div", 111)(29, "div")(30, "form", 112)(31, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateEventRegisterComponent_div_22_div_83_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r257.familySearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 110)(35, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_Template_select_change_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r258.getFamiliesWithStatusForAVillage($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CreateEventRegisterComponent_div_22_div_83_option_36_Template, 2, 0, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "All Selected Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CreateEventRegisterComponent_div_22_div_83_option_39_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CreateEventRegisterComponent_div_22_div_83_div_40_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 119)(42, "div", 39)(43, "table", 40)(44, "thead", 120)(45, "tr", 41)(46, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, CreateEventRegisterComponent_div_22_div_83_th_52_Template, 2, 0, "th", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, CreateEventRegisterComponent_div_22_div_83_tr_58_Template, 15, 9, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](59, "eventRegisterFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 7)(62, "div", 8)(63, "div", 124)(64, "div", 98)(65, "div", 7)(66, "div", 125)(67, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "SS Attended in Rally/ Seminar :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 126)(72, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_Template_input_change_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r259.SSAttendedRally($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 126)(75, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_div_83_Template_input_change_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r253);
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r260.SSAttendedRally($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, CreateEventRegisterComponent_div_22_div_83_div_77_Template, 23, 2, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, CreateEventRegisterComponent_div_22_div_83_div_78_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](21, _c1, ctx_r127.l.rallySeminarDate.invalid && ctx_r127.l.rallySeminarDate.touched, ctx_r127.l.rallySeminarDate.valid && (ctx_r127.l.rallySeminarDate.dirty || ctx_r127.l.rallySeminarDate.touched)))("min", ctx_r127.createEventRegisterForm.value.eventDateFrom)("max", ctx_r127.createEventRegisterForm.value.eventDateTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.l.rallySeminarDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](25, _c1, ctx_r127.l.rallySeminarPlace.invalid && ctx_r127.l.rallySeminarPlace.touched, ctx_r127.l.rallySeminarPlace.valid && (ctx_r127.l.rallySeminarPlace.dirty || ctx_r127.l.rallySeminarPlace.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("readonly", ctx_r127.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.l.rallySeminarPlace.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r127.searchFullscreen ? "search_inner_fullscreen" : " search_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r127.familySearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](28, _c1, ctx_r127.l.village.invalid && ctx_r127.l.village.touched, ctx_r127.l.village.valid && (ctx_r127.l.village.dirty || ctx_r127.l.village.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r127.specificEventDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r127.specialEventVillList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.l.village.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.createEventRegisterForm.value.village == "allFamilies");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](59, 18, ctx_r127.familiesWithStatusOfVillage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](31, _c2, ctx_r127.familySearch, ctx_r127.familySearch)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r127.createEventRegisterForm.value.ssAttended == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r127.specificEventDetails == null ? null : ctx_r127.specificEventDetails.modalType) == "view" && ctx_r127.capturedImagesList.length > 0);
  }
}
function CreateEventRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 19)(3, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "From Date of Event :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CreateEventRegisterComponent_div_22_Template_input_keydown_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r261.restrictTypeOfDate());
    })("change", function CreateEventRegisterComponent_div_22_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r263.setEventDateTo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, CreateEventRegisterComponent_div_22_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 19)(10, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "To Date of Event:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function CreateEventRegisterComponent_div_22_Template_input_keydown_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r264.restrictTypeOfDate());
    })("change", function CreateEventRegisterComponent_div_22_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r265.eventDateTo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CreateEventRegisterComponent_div_22_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7)(17, "div", 19)(18, "fieldset", 27)(19, "legend", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Staff/ Role/ Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 38)(24, "div", 39)(25, "table", 40)(26, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CreateEventRegisterComponent_div_22_tr_27_Template, 10, 10, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, CreateEventRegisterComponent_div_22_tr_28_Template, 3, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "div", 91)(32, "div", 44)(33, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Facilitator :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, CreateEventRegisterComponent_div_22_i_37_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 39)(39, "table", 47)(40, "tbody", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, CreateEventRegisterComponent_div_22_tr_41_Template, 11, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 8)(43, "div", 7)(44, "div", 93)(45, "div", 44)(46, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Stakeholder :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, CreateEventRegisterComponent_div_22_i_48_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 39)(50, "table", 47)(51, "tbody", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, CreateEventRegisterComponent_div_22_tr_52_Template, 11, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 7)(55, "div", 95)(56, "div", 44)(57, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Special Guest :");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, CreateEventRegisterComponent_div_22_i_59_Template, 1, 0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 39)(61, "table", 47)(62, "tbody", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, CreateEventRegisterComponent_div_22_tr_63_Template, 11, 11, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 7)(65, "div", 8)(66, "div", 97)(67, "div", 98)(68, "div", 7)(69, "div", 83)(70, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Events :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 83)(75, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_Template_input_change_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r266.multipleEventsSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "\u00A0\u00A0Rally");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 83)(78, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_Template_input_change_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r267.multipleEventsSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\u00A0\u00A0Seminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 83)(81, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_div_22_Template_input_change_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r262);
      const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r268.multipleEventsSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "\u00A0\u00A0FGD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, CreateEventRegisterComponent_div_22_div_83_Template, 79, 34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](16, _c1, ctx_r3.l.eventDateFrom.invalid && ctx_r3.l.eventDateFrom.touched, ctx_r3.l.eventDateFrom.valid && (ctx_r3.l.eventDateFrom.dirty || ctx_r3.l.eventDateFrom.touched)))("min", ctx_r3.minToDate)("max", ctx_r3.maxToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.l.eventDateFrom.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](19, _c1, ctx_r3.l.eventDateTo.invalid && ctx_r3.l.eventDateTo.touched, ctx_r3.l.eventDateTo.valid && (ctx_r3.l.eventDateTo.dirty || ctx_r3.l.eventDateTo.touched)))("min", ctx_r3.toDateMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.l.eventDateTo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.hcoUserList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.hcoUserList == null ? null : ctx_r3.hcoUserList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.specificEventDetails == null ? null : ctx_r3.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.facilitatorDetails.facilitatorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.specificEventDetails == null ? null : ctx_r3.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.stakeHolderDetails.stakeHolderInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r3.specificEventDetails == null ? null : ctx_r3.specificEventDetails.modalType) != "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.specialGuestDetails.guestsInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.createEventRegisterForm.value.rally == true || ctx_r3.createEventRegisterForm.value.seminar == true);
  }
}
function CreateEventRegisterComponent_div_23_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_23_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r271);
      const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r270.saveUpdateSchoolEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r269.disableSchoolEvent());
  }
}
function CreateEventRegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 130)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CreateEventRegisterComponent_div_23_button_2_Template, 2, 1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r4.specificEventDetails == null ? null : ctx_r4.specificEventDetails.modalType) != "view");
  }
}
function CreateEventRegisterComponent_div_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_div_24_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r274);
      const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r273.saveUpdateSpecialEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r272.disableSpecialEvent());
  }
}
function CreateEventRegisterComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 130)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CreateEventRegisterComponent_div_24_button_2_Template, 2, 1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r5.specificEventDetails == null ? null : ctx_r5.specificEventDetails.modalType) != "view");
  }
}
class CreateEventRegisterComponent {
  constructor(data, dialogRef, eventService, httpService, fb, validationService, toaster) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.eventService = eventService;
    this.httpService = httpService;
    this.fb = fb;
    this.validationService = validationService;
    this.toaster = toaster;
    this.loader = true;
    this.eventTypeLists = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.gpList = [];
    this.staffListID = [];
    this.familiesWithStatusOfVillage = [];
    this.onEditfamiliesWithStatusOfVillage = [];
    this.familiesListID = [];
    this.ssListID = [];
    this.ssListOfRegion = [];
    this.path1 = 'No file chosen';
    this.path2 = 'No file chosen';
    this.path3 = 'No file chosen';
    this.path4 = 'No file chosen';
    this.facilitatorDetails = {
      facilitatorInfo: []
    };
    this.stakeHolderDetails = {
      stakeHolderInfo: []
    };
    this.attendeeDetails = {
      attendeeInfo: []
    };
    this.specialGuestDetails = {
      guestsInfo: []
    };
    this.classList = [];
    dialogRef.disableClose = true;
  }
  // @ViewChild('fileUploader1') fileUploader1: ElementRef;
  // @ViewChild('fileUploader2') fileUploader2: ElementRef;
  // @ViewChild('fileUploader3') fileUploader3: ElementRef;
  // @ViewChild('fileUploader4') fileUploader4: ElementRef;
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    // console.log(this.data);
    this.specificEventDetails = this.data?.specificEventDetails;
    this.capturedImagesList = this.data?.specificEventDetails?.imageList;
    console.log(this.capturedImagesList, 'this.capturedImagesList');
    console.log(this.specificEventDetails, 'specificEventDetails');
    if (this.specificEventDetails?.modalType == 'edit') {
      this.dialogTitle = 'Edit Event Register';
    } else if (this.specificEventDetails?.modalType == 'view') {
      this.dialogTitle = 'View Event Register';
    } else {
      this.dialogTitle = 'Create Event Register';
    }
    this.createEventForm();
    let eventListReq = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.eventService.getEventMasterTypeList(eventListReq).subscribe(res => {
      this.eventTypeLists = res.responseObject;
      // console.log(this.eventTypeLists, 'eventTypeLists');
    });
  }

  createEventForm() {
    let ssAttend;
    if (this.specificEventDetails) {
      ssAttend = this.specificEventDetails?.rallyOrSeminarDetails?.ssList?.length > 0 ? 'Y' : 'N';
    } else {
      ssAttend = '';
    }
    this.createEventRegisterForm = this.fb.group({
      //school event formcontrols
      eventType: [this.specificEventDetails?.eventTypeMasterId ? this.specificEventDetails?.eventTypeMasterId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      schoolName: [this.specificEventDetails?.schoolName ? this.specificEventDetails?.schoolName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      schoolType: [this.specificEventDetails?.schoolType ? this.specificEventDetails?.schoolType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      block: [this.specificEventDetails?.blockId ? this.specificEventDetails?.blockId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      eventDate: [this.specificEventDetails?.eventDate ? this.specificEventDetails?.eventDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      issueType: [this.specificEventDetails?.issueId ? this.specificEventDetails?.issueId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      //special event formcontrols
      eventDateFrom: [this.specificEventDetails?.startDate ? this.specificEventDetails?.startDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      eventDateTo: [this.specificEventDetails?.endDate ? this.specificEventDetails?.endDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      rallySeminarDate: [this.specificEventDetails?.rallyOrSeminarDetails ? this.specificEventDetails?.rallyOrSeminarDetails.date : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      rallySeminarPlace: [this.specificEventDetails?.rallyOrSeminarDetails ? this.specificEventDetails?.rallyOrSeminarDetails.place : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      village: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      ssAttended: [ssAttend, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      rally: [this.specificEventDetails?.rally == 'Y' ? true : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      seminar: [this.specificEventDetails?.seminar == 'Y' ? true : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      fgd: [this.specificEventDetails?.fgd == 'Y' ? true : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    setTimeout(() => {
      if (this.specificEventDetails?.eventTypeMasterId && this.specificEventDetails?.modalType == 'edit') {
        // console.log(true);
        /*Fgd Max and Min Date*/
        if (this.specificEventDetails?.fgdDetails?.length > 0) {
          var fgd = this.specificEventDetails?.fgdDetails;
          this.rallyMaxMinDate = this.specificEventDetails?.rallyOrSeminarDetails?.date;
          if (this.rallyMaxMinDate == null) {
            this.fgdMinDate = fgd[0]?.dateOfFgd.toString();
            this.fgdMaxDate = fgd[fgd.length - 1]?.dateOfFgd.toString();
          } else {
            this.fgdMinDate = fgd[0]?.dateOfFgd.toString();
            this.fgdMaxDate = fgd[fgd.length - 1]?.dateOfFgd.toString();
            if (this.rallyMaxMinDate.toString() < this.fgdMinDate.toString()) this.fgdMinDate = this.rallyMaxMinDate;
            if (this.rallyMaxMinDate.toString() > this.fgdMaxDate.toString()) this.fgdMaxDate = this.rallyMaxMinDate;
          }
        } else {
          this.rallyMaxMinDate = this.specificEventDetails?.rallyOrSeminarDetails?.date;
          this.fgdMaxDate = this.rallyMaxMinDate;
          this.fgdMinDate = this.rallyMaxMinDate;
        }
        setTimeout(() => {
          this.minToDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
          this.maxToDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.fgdMinDate).add(0, 'days').format('YYYY-MM-DD');
          this.toDateMin = moment__WEBPACK_IMPORTED_MODULE_0__(this.fgdMaxDate).add(0, 'days').format('YYYY-MM-DD');
          console.log(this.minToDate, this.maxToDate, this.toDateMin);
        }, 1000);
        //       it.fgdDetails?.let {
        //         fgd ->
        // if (fgd.isEmpty()) {
        //           rallyMaxMinDate = it.rallyOrSeminarDetails?.date
        //           fgdMaxDate = rallyMaxMinDate
        //           fgdMinDate = rallyMaxMinDate
        //         } else {
        //           rallyMaxMinDate = it.rallyOrSeminarDetails?.date
        //           if (rallyMaxMinDate == null) {
        //             fgdMinDate = fgd[0].dateOfFgd.toString()
        //             fgdMaxDate = fgd[fgd.size - 1].dateOfFgd.toString()
        //           } else {
        //             fgdMinDate = fgd[0].dateOfFgd.toString()
        //             fgdMaxDate = fgd[fgd.size - 1].dateOfFgd.toString()
        //             if (rallyMaxMinDate.toString() < fgdMinDate.toString())
        //               fgdMinDate = rallyMaxMinDate
        //             if (rallyMaxMinDate.toString() > fgdMaxDate.toString())
        //               fgdMaxDate = rallyMaxMinDate
        //           }
        //         }
        //       } ?: run {
        //         rallyMaxMinDate = it.rallyOrSeminarDetails?.date
        //         fgdMaxDate = rallyMaxMinDate
        //         fgdMinDate = rallyMaxMinDate
        //       }
        //       Log.e("FGD DATE", "$rallyMaxMinDate ** $fgdMinDate -- $fgdMaxDate")
        this.changeEventTypes(this.specificEventDetails?.eventTypeMasterId);
        setTimeout(() => {
          this.changeBlock(this.specificEventDetails?.blockId);
          if (this.specificEventDetails?.gpId) {
            this.createEventRegisterForm.controls.gp.setValue(this.specificEventDetails?.gpId);
          }
          this.changeGp(this.specificEventDetails?.gpId);
          if (this.specificEventDetails?.schoolPlaceVillageId) {
            this.createEventRegisterForm.controls.gram.setValue(this.specificEventDetails?.schoolPlaceVillageId);
          }
        }, 100);
        this.createEventRegisterForm.controls['eventType'].disable();
        this.createEventRegisterForm.controls['eventDate'].disable();
        // this.createEventRegisterForm.controls['eventDateFrom'].disable();
        // this.createEventRegisterForm.controls['eventDateTo'].disable();
        console.log(this.createEventRegisterForm.value.rally);
        console.log(this.createEventRegisterForm.value.seminar);
        if (this.specificEventDetails?.rally == 'Y' || this.specificEventDetails?.seminar == 'Y') {
          this.createEventRegisterForm.controls['rallySeminarDate'].disable();
          // this.createEventRegisterForm.controls['rallySeminarPlace'].disable();
        } else {
          this.createEventRegisterForm.controls['rallySeminarDate'].enable();
          // this.createEventRegisterForm.controls['rallySeminarPlace'].enable();
        }

        if (this.specificEventDetails?.fgdDetails?.length > 0) {
          // this.createEventRegisterForm.controls['fgd'].disable();
        }
        return this.createEventRegisterForm.markAllAsTouched();
      } else if (this.specificEventDetails?.eventTypeMasterId && this.specificEventDetails?.modalType == 'view') {
        this.changeEventTypes(this.specificEventDetails?.eventTypeMasterId);
        setTimeout(() => {
          this.changeBlock(this.specificEventDetails?.blockId);
          if (this.specificEventDetails?.gpId) {
            this.createEventRegisterForm.controls.gp.setValue(this.specificEventDetails?.gpId);
          }
          this.changeGp(this.specificEventDetails?.gpId);
          if (this.specificEventDetails?.schoolPlaceVillageId) {
            this.createEventRegisterForm.controls.gram.setValue(this.specificEventDetails?.schoolPlaceVillageId);
          }
        }, 100);
        this.createEventRegisterForm.disable();
        this.isReadOnly = true;
      }
    }, 500);
    if (this.createEventRegisterForm.value.eventDateFrom) {
      this.createEventRegisterForm.controls['eventDateTo'].enable();
    } else {
      this.createEventRegisterForm.controls['eventDateTo'].disable();
    }
    if ((this.createEventRegisterForm.value.eventDateFrom || this.specificEventDetails?.startDate) && (this.createEventRegisterForm.value.eventDateTo || this.specificEventDetails?.endDate)) {
      this.createEventRegisterForm.controls['rallySeminarDate'].enable();
    } else {
      this.createEventRegisterForm.controls['rallySeminarDate'].disable();
    }
  }
  get l() {
    return this.createEventRegisterForm.controls;
  }
  changeEventTypes(eventTypeMasterId) {
    if (!this.specificEventDetails?.eventTypeMasterId) {
      this.createEventRegisterForm.controls.issueType.setValue('');
    }
    this.event_is_special = this.eventTypeLists.find(x => x.eventTypeMasterId == eventTypeMasterId)?.is_special;
    // console.log(this.event_is_special, 'this.event_is_special');
    // console.log(this.data.branchOpenDate);
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
      this.hcoUserList = this.hcoUserList?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));
      console.log(this.hcoUserList);
      this.specificEventDetails?.staffList?.forEach(e => {
        this.hcoUserList.find(v => v.user_id == e.staffId).is_checked = true;
        this.hcoUserList.find(v => v.user_id == e.staffId).staffEventMapId = e.staffEventMapId;
        this.staffListID.push({
          staffEventMapId: e.staffEventMapId,
          staffId: e.staffId,
          active_flag: 'A'
        });
      });
    });
    if (this.specificEventDetails?.facilitatorList?.length > 0) {
      this.specificEventDetails?.facilitatorList.forEach(x => {
        this.facilitatorDetails.facilitatorInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        });
        // console.log(this.facilitatorDetails.facilitatorInfo);
      });
    } else {
      this.facilitatorDetails.facilitatorInfo = [];
      this.facilitatorDetails.facilitatorInfo.push({
        facilitatorStakeholderMapId: 0,
        name: '',
        designationId: '',
        active_flag: 'A'
      });
    }
    if (this.specificEventDetails?.stakeHolderList?.length > 0) {
      this.specificEventDetails?.stakeHolderList.forEach(x => {
        this.stakeHolderDetails.stakeHolderInfo.push({
          facilitatorStakeholderMapId: x.facilitatorStakeholderMapId,
          name: x.name,
          designationId: x.designationId,
          active_flag: 'A'
        });
        // console.log(this.stakeHolderDetails.stakeHolderInfo);
      });
    } else {
      this.stakeHolderDetails.stakeHolderInfo = [];
      this.stakeHolderDetails.stakeHolderInfo.push({
        facilitatorStakeholderMapId: 0,
        name: '',
        designationId: '',
        active_flag: 'A'
      });
    }
    let getEventPreRequisiteReg = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      event_type_master_id: null
    };
    this.loader = false;
    this.eventService.getEventPreRequisite(getEventPreRequisiteReg).subscribe(res => {
      this.loader = true;
      // console.log(res.responseObject.issueList);
      this.issuesList = res.responseObject.issueList.filter(x => x.eventTypeMasterId == eventTypeMasterId);
      // console.log(this.issuesList, 'issuesList');
      this.designationList = res.responseObject.designationList;
      console.log(res, 'designationList');
    });
    if (this.event_is_special == 'N') {
      let villageReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.data.branchID
      };
      this.loader = false;
      this.eventService.getVillagesOfBranch(villageReg).subscribe(res => {
        this.loader = true;
        this.villagesOfBranch = res.responseObject;
        // console.log(this.villagesOfBranch, 'villagesOfBranch');
      });
      // this.facilitatorDetails.facilitatorInfo = [];
      // this.stakeHolderDetails.stakeHolderInfo = [];
      this.attendeeDetails.attendeeInfo = [];
      // console.log(this.specificEventDetails?.facilitatorList);
      if (this.specificEventDetails?.attendeeList) {
        this.specificEventDetails?.attendeeList.forEach(x => {
          this.attendeeDetails.attendeeInfo.push({
            eventSchoolAttendeeMapId: x.eventSchoolAttendeeMapId,
            name: x.name,
            className: x.className,
            sex: x.sex,
            active_flag: 'A'
          });
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        });
      } else {
        this.attendeeDetails.attendeeInfo.push({
          eventSchoolAttendeeMapId: 0,
          name: '',
          className: '',
          sex: '',
          active_flag: 'A'
        });
      }
      this.classList = [];
      if (eventTypeMasterId == 1) {
        this.classList.push('LN', 'UN', 'KG', '1', '2', '3', '4', '5');
      } else if (eventTypeMasterId == 2) {
        this.classList.push('6', '7', '8', '9', '10', '11', '12');
      }
      if (this.specificEventDetails) {
        this.url1 = this.specificEventDetails?.imageList[0]?.event_school_register_image_url;
        this.path1 = this.url1;
        this.url2 = this.specificEventDetails?.imageList[1]?.event_school_register_image_url;
        this.path2 = this.url2;
        this.url3 = this.specificEventDetails?.imageList[2]?.event_school_register_image_url;
        this.path3 = this.url3;
        this.url4 = this.specificEventDetails?.imageList[3]?.event_school_register_image_url;
        this.path4 = this.url4;
      }
      // this.file1 = this.convertURLToFile(this.url1);
      // // this.path1 = this.convertURLToFile(this.url1).name;
      // this.file2 = this.convertURLToFile(this.url2);
      // // this.path2 = this.convertURLToFile(this.url2).name;
      // this.file3 = this.convertURLToFile(this.url3);
      // // this.path3 = this.convertURLToFile(this.url3).name;
      // this.file4 = this.convertURLToFile(this.url4);
      // // this.path4 = this.convertURLToFile(this.url4).name;
      // console.log(this.file1);
    }

    if (this.event_is_special == 'Y') {
      if (this.specificEventDetails?.specialGuestList?.length > 0) {
        this.specificEventDetails?.specialGuestList.forEach(x => {
          this.specialGuestDetails.guestsInfo.push({
            specialGuestMapId: x.specialGuestMapId,
            name: x.name,
            designationId: x.designationId,
            active_flag: 'A'
          });
          // console.log(this.stakeHolderDetails.stakeHolderInfo);
        });
      } else {
        this.specialGuestDetails.guestsInfo = [];
        this.specialGuestDetails.guestsInfo.push({
          specialGuestMapId: 0,
          name: '',
          designationId: '',
          active_flag: 'A'
        });
      }
      if (this.specificEventDetails?.rallyOrSeminarDetails) {
        this.specificEventDetails?.rallyOrSeminarDetails.date ? this.createEventRegisterForm.controls['village'].setValue('allFamilies') : '';
        this.getSimpleListOfVillagesOfABranch();
        this.onEditfamiliesWithStatusOfVillage = this.specificEventDetails?.rallyOrSeminarDetails.familyList?.map(({
          is_checked = true,
          active_flag = 'A',
          ...rest
        }) => ({
          is_checked,
          active_flag,
          ...rest
        }));
        this.setStatusForAll(this.onEditfamiliesWithStatusOfVillage);
        this.familiesWithStatusOfVillage = this.onEditfamiliesWithStatusOfVillage;
        this.familiesListID = this.onEditfamiliesWithStatusOfVillage;
        console.log(this.specificEventDetails?.rallyOrSeminarDetails.familyList);
        console.log(this.familiesWithStatusOfVillage, 'this.familiesWithStatusOfVillage');
      }
      if (!this.createEventRegisterForm.value.rallySeminarDate) {
        this.createEventRegisterForm.controls['village'].disable();
      } else {
        this.createEventRegisterForm.controls['village'].enable();
      }
      if (this.specificEventDetails?.rallyOrSeminarDetails?.ssList?.length > 0) {
        this.getAllSsOfARegion();
      }
    }
  }
  changeDateOfRally(value) {
    this.createEventRegisterForm.controls['village'].setValue('');
    this.familiesWithStatusOfVillage = [];
    this.specialEventVillList = [];
    this.familiesListID = [];
    if (value) {
      this.createEventRegisterForm.controls['village'].enable();
      this.getSimpleListOfVillagesOfABranch();
    } else {
      this.createEventRegisterForm.controls['village'].disable();
      this.familiesWithStatusOfVillage = [];
      this.specialEventVillList = [];
      this.familiesListID = [];
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  changeBlock(blockId) {
    // console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    // console.log(this.gpList, 'gplist');
    this.createEventRegisterForm.controls.gp.setValue('');
    this.createEventRegisterForm.controls.gram.setValue('');
    this.villageList = [];
  }
  changeGp(gpId) {
    // console.log(gpId, 'GpId');
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList, 'villageList');
    this.createEventRegisterForm.controls.gram.setValue('');
  }
  restrictTypeOfDate() {
    return false;
  }
  selectMultipleStaff(e, user) {
    this.staffListID = [];
    console.log(e.target.checked, user);
    if (e.target.checked == true) {
      user.is_checked = true;
    } else {
      user.is_checked = false;
    }
    console.log(this.hcoUserList);
    this.hcoUserList.forEach(x => {
      if (x.staffEventMapId) {
        this.staffListID.push({
          staffEventMapId: x.staffEventMapId ? x.staffEventMapId : 0,
          staffId: x.user_id,
          active_flag: x.is_checked == false ? 'D' : 'A'
        });
      } else {
        if (x.is_checked == true) this.staffListID.push({
          staffEventMapId: 0,
          staffId: x.user_id,
          active_flag: 'A'
        });
      }
    });
    console.log(this.staffListID);
  }
  addMoreFacilitator() {
    this.facilitatorDetails.facilitatorInfo.push({
      facilitatorStakeholderMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.facilitatorDetails.facilitatorInfo);
  }
  removeFacilitator(i) {
    console.log(this.facilitatorDetails.facilitatorInfo);
    var faci = this.facilitatorDetails.facilitatorInfo;
    if (this.specificEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].facilitatorStakeholderMapId != 0) {
          faci[i].active_flag = "D";
        } else {
          faci.splice(i, 1);
          console.log(this.facilitatorDetails.facilitatorInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.facilitatorDetails.facilitatorInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.facilitatorDetails.facilitatorInfo);
    }
  }
  addMoreStakeHolder() {
    this.stakeHolderDetails.stakeHolderInfo.push({
      facilitatorStakeholderMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.stakeHolderDetails.stakeHolderInfo);
  }
  removeStackHolder(i) {
    var faci = this.stakeHolderDetails.stakeHolderInfo;
    if (this.specificEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].facilitatorStakeholderMapId != 0) {
          faci[i].active_flag = "D";
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        } else {
          faci.splice(i, 1);
          console.log(this.stakeHolderDetails.stakeHolderInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.stakeHolderDetails.stakeHolderInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.stakeHolderDetails.stakeHolderInfo);
    }
  }
  addMoreAttendeeDetails() {
    this.attendeeDetails.attendeeInfo.push({
      eventSchoolAttendeeMapId: 0,
      name: '',
      className: '',
      sex: '',
      active_flag: 'A'
    });
    console.log(this.attendeeDetails.attendeeInfo);
  }
  removeAttendeeDetails(i) {
    var faci = this.attendeeDetails.attendeeInfo;
    if (this.specificEventDetails?.eventTypeMasterId) {
      if (faci.length != 0) {
        if (faci[i].eventSchoolAttendeeMapId != 0) {
          faci[i].active_flag = "D";
          console.log(this.attendeeDetails.attendeeInfo);
        } else {
          faci.splice(i, 1);
          console.log(this.attendeeDetails.attendeeInfo);
        }
      } else {
        faci.splice(i, 1);
        console.log(this.attendeeDetails.attendeeInfo);
      }
    } else {
      faci.splice(i, 1);
      console.log(this.attendeeDetails.attendeeInfo);
    }
  }
  onSelectFiles(e, url, remove) {
    console.log(e.target.value, url, remove);
    if (remove == '' && e.target.value) {
      if (url == 'url1') {
        this.path1 = e.target.files[0].name;
        this.file1 = e.target.files[0];
        console.log(this.file1);
        console.log(this.path1, 'path1');
      } else if (url == 'url2') {
        this.path2 = e.target.files[0].name;
        this.file2 = e.target.files[0];
        console.log(this.path2, 'path2');
      } else if (url == 'url3') {
        this.path3 = e.target.files[0].name;
        this.file3 = e.target.files[0];
        console.log(this.path2, 'path3');
      } else if (url == 'url4') {
        this.path4 = e.target.files[0].name;
        this.file4 = e.target.files[0];
        console.log(this.path2, 'path4');
      }
    }
    if (remove == 'remove1') {
      // this.fileUploader1.nativeElement.value = null;
      this.path1 = 'No file chosen';
      this.url1 = '';
    } else if (remove == 'remove2') {
      // this.fileUploader2.nativeElement.value = null;
      this.path2 = 'No file chosen';
      this.url2 = '';
    } else if (remove == 'remove3') {
      // this.fileUploader3.nativeElement.value = null;
      this.path3 = 'No file chosen';
      this.url3 = '';
    } else if (remove == 'remove4') {
      // this.fileUploader4.nativeElement.value = null;
      this.path4 = 'No file chosen';
      this.url4 = '';
    }
    if (!e.target.value && url == 'url1') {
      this.url1 = '';
      this.path1 = 'No file chosen';
    } else if (!e.target.value && url == 'url2') {
      this.url2 = '';
      this.path2 = 'No file chosen';
    } else if (!e.target.value && url == 'url3') {
      this.url3 = '';
      this.path3 = 'No file chosen';
    } else if (!e.target.value && url == 'url4') {
      this.url4 = '';
      this.path4 = 'No file chosen';
    }
    if (e.target.files[0].type.match('image/jpeg|image/png|image/jpg')) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = event => {
        if (url == 'url1') {
          this.url1 = event.target.result;
        } else if (url == 'url2') {
          this.url2 = event.target.result;
        } else if (url == 'url3') {
          this.url3 = event.target.result;
        } else if (url == 'url4') {
          this.url4 = event.target.result;
        }
      };
    } else {
      this.showError('Wrong Format Selected');
      if (url == 'url1') {
        this.path1 = 'No file chosen';
        // this.fileUploader1.nativeElement.value = null;
        this.url1 = '';
      } else if (url == 'url2') {
        this.path2 = 'No file chosen';
        // this.fileUploader2.nativeElement.value = null;
        this.url2 = '';
      } else if (url == 'url3') {
        this.path3 = 'No file chosen';
        // this.fileUploader3.nativeElement.value = null;
        this.url3 = '';
      } else if (url == 'url4') {
        this.path4 = 'No file chosen';
        // this.fileUploader4.nativeElement.value = null;
        this.url4 = '';
      }
    }
  }
  disableSchoolEvent() {
    let flag = true;
    let x = this.createEventRegisterForm.value;
    if (!x.eventType && !this.specificEventDetails?.eventTypeMasterId) {
      flag = false;
    }
    if (x.eventType == 1 || this.specificEventDetails?.eventTypeMasterId == 1 || x.eventType == 2 || this.specificEventDetails?.eventTypeMasterId == 2) {
      if (!x.schoolName) {
        flag = false;
      } else if (this.createEventRegisterForm.value.schoolName.trim().length < 3) {
        flag = false;
      } else if (!x.schoolType) {
        flag = false;
      } else if (!x.gram) {
        flag = false;
      } else if (!x.eventDate && !this.specificEventDetails?.eventDate) {
        flag = false;
      } else if (!x.issueType) {
        flag = false;
      }
      if (this.hcoUserList?.filter(x => x.is_checked == true).length == 0) {
        flag = false;
      }
      this.facilitatorDetails.facilitatorInfo.forEach(y => {
        if (y.name) {
          if (!y.designationId) {
            flag = false;
          }
        } else if (y.designationId) {
          if (!y.name) {
            flag = false;
          }
        }
      });
      if (this.facilitatorDetails.facilitatorInfo.filter(x => x.active_flag == 'A' && x.name).length == 0) {
        flag = false;
      }
      this.stakeHolderDetails.stakeHolderInfo.forEach(y => {
        if (y.name) {
          if (!y.designationId) {
            flag = false;
          }
        } else if (y.designationId) {
          if (!y.name) {
            flag = false;
          }
        }
      });
      this.attendeeDetails.attendeeInfo.forEach(y => {
        if (y.name) {
          if (!y.className) {
            flag = false;
          } else if (!y.sex) {
            flag = false;
          }
        } else if (y.className) {
          if (!y.name) {
            flag = false;
          } else if (!y.sex) {
            flag = false;
          }
        } else if (y.sex) {
          if (!y.name) {
            flag = false;
          } else if (!y.className) {
            flag = false;
          }
        }
      });
      if (this.attendeeDetails.attendeeInfo.filter(x => x.active_flag == 'A' && x.name).length == 0) {
        flag = false;
      }
      // if (!this.url1 && !this.url2 && !this.url3 && !this.url4) {
      //   flag = false;
      // }
    }

    return flag;
  }
  saveUpdateSchoolEvent() {
    console.log(this.facilitatorDetails.facilitatorInfo);
    console.log(this.stakeHolderDetails.stakeHolderInfo);
    console.log(this.attendeeDetails.attendeeInfo);
    this.facilitatorDetails.facilitatorInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    this.stakeHolderDetails.stakeHolderInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    this.attendeeDetails.attendeeInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    let schoolEventReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSchoolId: this.specificEventDetails?.eventRegisterSchoolId ? this.specificEventDetails?.eventRegisterSchoolId : 0,
      eventTypeMasterId: this.specificEventDetails?.eventTypeMasterId ? this.specificEventDetails?.eventTypeMasterId : this.createEventRegisterForm.value.eventType,
      schoolPlaceBranchId: this.data.branchID,
      schoolPlaceVillageId: this.createEventRegisterForm.value.gram,
      schoolName: this.validationService.camelize(this.createEventRegisterForm.value.schoolName.trim()),
      schoolType: this.createEventRegisterForm.value.schoolType,
      eventDate: this.specificEventDetails?.eventDate ? this.specificEventDetails?.eventDate : this.createEventRegisterForm.value.eventDate,
      issueId: this.createEventRegisterForm.value.issueType,
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      attendeeList: this.attendeeDetails.attendeeInfo.filter(x => x.name)
    };
    console.log(schoolEventReq, 'schoolEventReq');
    this.eventService.schoolEventSaveOrUpdate(schoolEventReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess('Success');
        this.closeDialog();
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Event Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Event Register', {
      timeOut: 3000
    });
  }
  //Special event functionalities begins from here...
  setEventDateTo(value) {
    console.log(this.fgdMinDate, 'fgdMinDate');
    console.log(this.fgdMaxDate, 'fgdMaxDate');
    console.log(this.rallyMaxMinDate, 'rallyMaxMinDate');
    if (!this.fgdMaxDate) {
      if (value) {
        this.toDateMin = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(0, 'days').format('YYYY-MM-DD');
        this.createEventRegisterForm.controls['eventDateTo'].enable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      } else if (value && this.createEventRegisterForm.value.eventDateTo) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else {
        this.createEventRegisterForm.controls['eventDateTo'].disable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    } else {
      if (value) {
        this.createEventRegisterForm.controls['eventDateTo'].enable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        // this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      } else if (value && this.createEventRegisterForm.value.eventDateTo) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else {
        // this.createEventRegisterForm.controls['eventDateTo'].disable();
        this.createEventRegisterForm.controls.eventDateTo.setValue('');
        // this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
      /*   this.minToDate = moment(this.data.branchOpenDate).add(1, 'days').format('YYYY-MM-DD');
      this.maxToDate = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10); */
    }

    if (!this.specificEventDetails) {
      this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
    }
  }
  eventDateTo(value) {
    if (!this.fgdMaxDate) {
      if (this.createEventRegisterForm.value.eventDateFrom && value) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
      } else if (!value) {
        this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    } else {
      if (this.createEventRegisterForm.value.eventDateFrom && value) {
        this.createEventRegisterForm.controls['rallySeminarDate'].enable();
      } else if (!value) {
        // this.createEventRegisterForm.controls['rallySeminarDate'].setValue('');
        this.createEventRegisterForm.controls['rallySeminarDate'].disable();
      }
    }
  }
  addMoreSpecialGuests() {
    this.specialGuestDetails.guestsInfo.push({
      specialGuestMapId: 0,
      name: '',
      designationId: '',
      active_flag: 'A'
    });
    console.log(this.specialGuestDetails.guestsInfo);
  }
  removeSpecialGuests(i) {
    var specialGuests = this.specialGuestDetails.guestsInfo;
    if (this.specificEventDetails?.eventTypeMasterId) {
      if (specialGuests.length != 0) {
        if (specialGuests[i].specialGuestMapId != 0) {
          specialGuests[i].active_flag = "D";
          console.log(this.specialGuestDetails.guestsInfo);
        } else {
          specialGuests.splice(i, 1);
          console.log(this.specialGuestDetails.guestsInfo);
        }
      } else {
        specialGuests.splice(i, 1);
        console.log(this.specialGuestDetails.guestsInfo);
      }
    } else {
      specialGuests.splice(i, 1);
      console.log(this.specialGuestDetails.guestsInfo);
    }
  }
  multipleEventsSelect(e) {
    // if (this.createEventRegisterForm.value.rally == true) {
    //   this.createEventRegisterForm.controls.rally.setValue('R')
    // } else if (this.createEventRegisterForm.value.seminar == true) {
    //   this.createEventRegisterForm.controls.seminar.setValue('S')
    // } else if (this.createEventRegisterForm.value.fgd == true) {
    //   this.createEventRegisterForm.controls.fgd.setValue('FGD')
    // }
    console.log(this.createEventRegisterForm.value.rally);
    console.log(this.createEventRegisterForm.value.seminar);
    console.log(this.createEventRegisterForm.value.fgd);
    console.log(this.createEventRegisterForm.value.eventDateFrom, this.createEventRegisterForm.value.eventDateTo);
    if ((this.createEventRegisterForm.value.eventDateFrom || this.specificEventDetails.startDate) && (this.createEventRegisterForm.value.eventDateTo || this.specificEventDetails.endDate)) {
      this.createEventRegisterForm.controls['rallySeminarDate'].enable();
    } else {
      this.createEventRegisterForm.controls['rallySeminarDate'].disable();
    }
  }
  getSimpleListOfVillagesOfABranch() {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.data.branchID
    };
    this.eventService.getSimpleListOfVillagesOfABranch(req).subscribe(res => {
      this.specialEventVillList = res.responseObject;
      // console.log(this.specialEventVillList, 'specialEventVillList');
    });
  }

  getFamiliesWithStatusForAVillage(villageID) {
    // console.log(villageID);
    var showVillageName = this.specialEventVillList.find(x => x.villageId == villageID)?.villageName;
    if (villageID == '') {
      this.familiesListID = [];
    }
    if (villageID == 'allFamilies') {
      if (this.specificEventDetails) {
        this.familiesWithStatusOfVillage = this.onEditfamiliesWithStatusOfVillage.filter(x => x.is_checked == true).concat(this.familiesListID.filter(x => x.is_checked == true));
        this.familiesWithStatusOfVillage = [...new Map(this.familiesWithStatusOfVillage.map(m => [m.familyId, m])).values()];
      } else {
        this.familiesWithStatusOfVillage = this.familiesListID.filter(x => x.is_checked == true);
      }
    } else {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        date: this.createEventRegisterForm.value.rallySeminarDate ? this.createEventRegisterForm.value.rallySeminarDate : this.specificEventDetails?.rallyOrSeminarDetails?.date,
        villageId: villageID
      };
      this.eventService.getFamiliesWithStatusForAVillage(req).subscribe(res => {
        this.familiesWithStatusOfVillage = res.responseObject;
        // console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');
        this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage?.map(({
          setStatus = '',
          is_checked = false,
          villageName = showVillageName,
          ...rest
        }) => ({
          setStatus,
          is_checked,
          villageName,
          ...rest
        }));
        this.setStatusForAll(this.familiesWithStatusOfVillage);
        console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');
        console.log(this.onEditfamiliesWithStatusOfVillage);
        //   this.onEditfamiliesWithStatusOfVillage.forEach(x => {
        //     this.familiesWithStatusOfVillage.forEach(y => {
        //    if( y.familyId == x.familyId){
        //     y.is_checked=x.is_checked;
        //     console.log(y);
        //    }
        //   })
        // })
        // if (this.onEditfamiliesWithStatusOfVillage.length > 0) {
        //   this.onEditfamiliesWithStatusOfVillage.forEach(x => {
        //     this.familiesWithStatusOfVillage.forEach(y => {
        //       if (y.familyId == x.familyId) {
        //         y.is_checked = x.is_checked
        //       }
        //     })
        //   })
        // }
        this.specificEventDetails?.rallyOrSeminarDetails?.familyList?.forEach(x => {
          this.familiesWithStatusOfVillage?.forEach(y => {
            if (y.familyId == x.familyId) {
              y.is_checked = true;
              y.rallySeminarFamilyMapId = x.rallySeminarFamilyMapId;
            }
          });
        });
        if (this.familiesListID?.length > 0) {
          console.log(this.familiesListID);
          this.familiesListID?.forEach(y => {
            this.familiesWithStatusOfVillage?.filter(x => x.familyId == y.familyId).forEach(x => {
              // if(x.active_flag=='A')
              x.is_checked = y.is_checked;
            });
          });
        }
      });
    }
  }
  selectMultipleFamilies(e, fam) {
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
    } else {
      fam.is_checked = false;
    }
    console.log(this.familiesWithStatusOfVillage);
    this.familiesListID?.forEach(x => {
      if (x.familyId == fam.familyId) {
        x.is_checked = fam.is_checked;
      }
    });
    if (this.specificEventDetails?.rallyOrSeminarDetails) {
      this.onEditfamiliesWithStatusOfVillage?.forEach(x => {
        // console.log(x);
        if (x.familyId == fam.familyId) {
          x.is_checked = fam.is_checked;
          console.log(x);
        }
        // console.log(x);
      });
    }

    if (fam.is_checked == true) {
      this.familiesListID.push(fam);
    }
    this.familiesListID = this.familiesListID.filter(x => x.is_checked == true);
    // this.familiesListID = this.familiesListID.concat(this.onEditfamiliesWithStatusOfVillage.filter(x => x.is_checked == true))
    this.familiesListID = this.familiesListID.concat(this.onEditfamiliesWithStatusOfVillage);
    this.familiesListID = [...new Map(this.familiesListID.map(m => [m.familyId, m])).values()];
    this.familiesListID.forEach(x => {
      // console.log(x);
      if (!x.rallySeminarFamilyMapId) {
        x.rallySeminarFamilyMapId = 0, x.active_flag = 'A';
      }
      if (x.is_checked == false && x.rallySeminarFamilyMapId != 0) {
        this.onEditfamiliesWithStatusOfVillage.find(y => y.familyId == x.familyId).active_flag = 'D';
        //   this.onEditfamiliesWithStatusOfVillage.find(y => y.familyId == x.familyId).is_checked = false
        //   this.familiesWithStatusOfVillage.find(y => y.familyId == x.familyId).is_checked = false
        //   x.active_flag = 'D'
      } else {
        x.active_flag = 'A';
      }
    });
    // this.familiesListID.forEach(x => {
    //   if (x.rallySeminarFamilyMapId) {
    //     this.staffListID.push({
    //       staffEventMapId: x.staffEventMapId ? x.staffEventMapId : 0, staffId: x.user_id,
    //       active_flag: x.is_checked == false ? 'D' : 'A'
    //     })
    //   } else {
    //     if (x.is_checked == true)
    //       this.staffListID.push({ staffEventMapId: 0, staffId: x.user_id, active_flag: 'A' });
    //   }
    // })
    console.log(this.familiesListID, 'familiesListID');
  }
  //Set PW,PEM,LM,2-5YR,Adol Status
  setStatusForAll(familys) {
    familys?.forEach(family => {
      if (family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.pem == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, LM, PW, 2to5, AG";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "LM";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman == "Y" && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "PW";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pem == "Y" && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "PEM";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.adolescentGirl?.includes("N") && family.pem?.includes("N")) {
        family.setStatus = "2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.adolescentGirl == "Y" && family.twoToFive?.includes("N") && family.pem?.includes("N")) {
        family.setStatus = "AG";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, PW";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.pem == "Y" && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, PEM";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.pem?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, 2to5";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.adolescentGirl == "Y" && family.twoToFive?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, AG";
      } else if (family.lactatingMother?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N") && family.pregnantWoman == "Y" && family.pem == "Y") {
        family.setStatus = "PW, PEM";
      } else if (family.lactatingMother?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.pregnantWoman == "Y" && family.twoToFive == "Y") {
        family.setStatus = "PW, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.pregnantWoman == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PW, AG";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.adolescentGirl?.includes("N") && family.pem == "Y" && family.twoToFive == "Y") {
        family.setStatus = "PEM, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive?.includes("N") && family.pem == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, AG";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "2to5, AG";
      } else if (family.lactatingMother?.includes("N") && family.pem == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, PW, 2to5, AG";
      } else if (family.pem?.includes("N") && family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PW, 2to5, AG";
      } else if (family.pregnantWoman?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PEM, 2to5, AG";
      } else if (family.twoToFive?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.pregnantWoman == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PEM, PW, AG";
      } else if (family.adolescentGirl?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y") {
        family.setStatus = "LM, PEM, PW, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "--";
      } else {
        family.setStatus = "--";
      }
    });
  }
  SSAttendedRally(value) {
    console.log(value);
    if (value == 'Y') {
      this.getAllSsOfARegion();
    } else {
      this.ssListID = [];
    }
  }
  getAllSsOfARegion() {
    let ssReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: this.data.regionID
    };
    this.eventService.getAllSsOfARegion(ssReq).subscribe(res => {
      this.ssListOfRegion = res.responseObject;
      this.ssListOfRegion = this.ssListOfRegion?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));
      if (this.specificEventDetails?.rallyOrSeminarDetails) {
        this.specificEventDetails?.rallyOrSeminarDetails?.ssList.forEach(x => {
          this.ssListOfRegion.find(y => y.swasthya_sahayika_id == x.ssId).is_checked = true;
          this.ssListOfRegion.find(y => y.swasthya_sahayika_id == x.ssId).rallySeminarSsMapId = x.rallySeminarSsMapId;
          this.ssListID.push({
            rallySeminarSsMapId: x.rallySeminarSsMapId,
            ssId: x.ssId,
            active_flag: 'A'
          });
        });
      }
      // console.log(this.ssListOfRegion, 'this.ssListOfRegion');
    });
  }

  selectMultipleSS(e, ss) {
    this.ssListID = [];
    console.log(e.target.checked, ss);
    if (e.target.checked == true) {
      ss.is_checked = true;
    } else {
      ss.is_checked = false;
    }
    console.log(this.ssListOfRegion, 'ssListOfRegion');
    this.ssListOfRegion.forEach(x => {
      if (x.rallySeminarSsMapId) {
        this.ssListID.push({
          rallySeminarSsMapId: x.rallySeminarSsMapId ? x.rallySeminarSsMapId : 0,
          ssId: x.swasthya_sahayika_id,
          active_flag: x.is_checked == false ? 'D' : 'A'
        });
      } else {
        if (x.is_checked == true) this.ssListID.push({
          rallySeminarSsMapId: 0,
          ssId: x.swasthya_sahayika_id,
          active_flag: 'A'
        });
      }
    });
    console.log(this.ssListID);
  }
  disableSpecialEvent() {
    let flag = true;
    let x = this.createEventRegisterForm.value;
    if (!x.eventType && !this.specificEventDetails?.eventTypeMasterId) {
      flag = false;
    } else if (!x.eventDateFrom && !this.specificEventDetails?.startDate) {
      flag = false;
    } else if (!x.eventDateTo && !this.specificEventDetails?.endDate) {
      flag = false;
    } else if (this.hcoUserList?.filter(x => x.is_checked == true).length == 0) {
      flag = false;
    }
    this.facilitatorDetails.facilitatorInfo.forEach(y => {
      if (y.name) {
        if (!y.designationId) {
          flag = false;
        }
      } else if (y.designationId) {
        if (!y.name) {
          flag = false;
        }
      }
    });
    if (this.facilitatorDetails.facilitatorInfo.filter(x => x.active_flag == 'A' && x.name).length == 0) {
      flag = false;
    }
    this.stakeHolderDetails.stakeHolderInfo.forEach(y => {
      if (y.name) {
        if (!y.designationId) {
          flag = false;
        }
      } else if (y.designationId) {
        if (!y.name) {
          flag = false;
        }
      }
    });
    this.specialGuestDetails.guestsInfo.forEach(y => {
      if (y.name) {
        if (!y.designationId) {
          flag = false;
        }
      } else if (y.designationId) {
        if (!y.name) {
          flag = false;
        }
      }
    });
    if (x.rally != true && x.seminar != true && x.fgd != true) {
      flag = false;
    }
    if (x.rally == true || x.seminar == true) {
      if (!x.rallySeminarDate && !this.specificEventDetails?.rallyOrSeminarDetails?.date) {
        flag = false;
      } else if (!x.rallySeminarPlace) {
        flag = false;
      } else if (!x.ssAttended) {
        flag = false;
      } else if (x.ssAttended == 'Y') {
        if (this.ssListID.filter(x => x.active_flag == 'A').length == 0) {
          flag = false;
        }
      } else if (!x.village) {
        flag = false;
      }
    }
    return flag;
  }
  saveUpdateSpecialEvent() {
    console.log(this.familiesListID);
    if (this.createEventRegisterForm.value.rally == true || this.createEventRegisterForm.value.seminar == true) {
      if (this.familiesListID.filter(x => x.is_checked == true && x.active_flag == 'A').length == 0) {
        this.showError('Please select atleast one active participant');
        return;
      }
    }
    this.facilitatorDetails.facilitatorInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    this.stakeHolderDetails.stakeHolderInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    this.specialGuestDetails.guestsInfo.forEach(x => {
      x.name = this.validationService.camelize(x.name.trim());
    });
    let specialEventReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.specificEventDetails?.eventRegisterSpecialId ? this.specificEventDetails?.eventRegisterSpecialId : 0,
      eventTypeMasterId: this.createEventRegisterForm.value.eventType,
      specialEventBranchId: this.data.branchID,
      startDate: this.createEventRegisterForm.value.eventDateFrom,
      endDate: this.createEventRegisterForm.value.eventDateTo,
      rally: this.createEventRegisterForm.value.rally == true ? 'Y' : 'N',
      seminar: this.createEventRegisterForm.value.seminar == true ? 'Y' : 'N',
      fgd: this.createEventRegisterForm.value.fgd == true ? 'Y' : 'N',
      active_flag: 'A',
      staffList: this.staffListID,
      facilitatorList: this.facilitatorDetails.facilitatorInfo.filter(x => x.name),
      stakeHolderList: this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name).length == 0 ? [] : this.stakeHolderDetails.stakeHolderInfo.filter(x => x.name),
      specialGuestList: this.specialGuestDetails.guestsInfo.filter(x => x.name).length == 0 ? [] : this.specialGuestDetails.guestsInfo.filter(x => x.name),
      rallyOrSeminarDetails: {
        eventSpecialRallySeminarMapId: this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId ? this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId : 0,
        place: this.validationService.camelize(this.createEventRegisterForm.value.rallySeminarPlace?.trim()),
        date: this.createEventRegisterForm.value.rallySeminarDate ? this.createEventRegisterForm.value.rallySeminarDate : this.specificEventDetails?.rallyOrSeminarDetails?.date,
        active_flag: 'A',
        familyList: this.familiesListID,
        ssList: this.createEventRegisterForm.value.ssAttended == 'Y' ? this.ssListID : null
      }
    };
    if (this.specificEventDetails?.rallyOrSeminarDetails) {
      if (specialEventReq.rally == 'N' && specialEventReq.seminar == 'N') {
        specialEventReq.rallyOrSeminarDetails.eventSpecialRallySeminarMapId = this.specificEventDetails?.rallyOrSeminarDetails?.eventSpecialRallySeminarMapId;
        specialEventReq.rallyOrSeminarDetails.active_flag = 'D';
      }
    } else {
      if (specialEventReq.rally == 'N' && specialEventReq.seminar == 'N') {
        specialEventReq.rallyOrSeminarDetails = null;
      }
    }
    if (this.specificEventDetails?.eventRegisterSpecialId) {
      delete specialEventReq.eventTypeMasterId;
      //   delete specialEventReq.specialEventBranchId
      //   delete specialEventReq.startDate
      //   delete specialEventReq.endDate
      //   delete specialEventReq.rallyOrSeminarDetails.date
      //   delete specialEventReq.rallyOrSeminarDetails.place
      //   delete specialEventReq.rallyOrSeminarDetails.active_flag
    }
    // else {
    //   if (specialEventReq.rally == 'Y' || specialEventReq.seminar == 'Y')
    //     delete specialEventReq.rallyOrSeminarDetails.eventSpecialRallySeminarMapId
    // }
    // if (this.specificEventDetails?.eventRegisterSpecialId) {
    //   delete specialEventReq.eventTypeMasterId
    // }
    console.log(specialEventReq, 'specialEventReq');
    this.eventService.specialEventSaveOrUpdate(specialEventReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess('success');
        this.closeDialog();
      } else {
        this.showError(res.message);
      }
    });
  }
}
CreateEventRegisterComponent.ɵfac = function CreateEventRegisterComponent_Factory(t) {
  return new (t || CreateEventRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_1__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
};
CreateEventRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CreateEventRegisterComponent,
  selectors: [["app-create-event-register"]],
  decls: 25,
  vars: 13,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", "", 2, "overflow-y", "auto", "height", "400px", "overflow-x", "hidden"], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "eventType"], [1, "text-danger"], ["formControlName", "eventType", "id", "eventType", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [1, "form-group", "col-md"], ["for", "schoolName"], ["type", "text", "placeholder", "Enter School Name", "formControlName", "schoolName", "maxlength", "100", "minlength", "3", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "schoolType"], ["formControlName", "schoolType", "id", "schoolType", 1, "form-select", 3, "ngClass"], ["value", "G"], ["value", "P"], [1, "scheduler-borders"], [1, "scheduler-border"], ["for", "block"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass"], ["for", "eventDate"], ["type", "date", "formControlName", "eventDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "issueType"], ["formControlName", "issueType", "id", "issueType", 1, "form-select", 3, "ngClass"], ["id", "tbodyStaff"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "200px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["class", "fas fa-plus-circle", "id", "circle", "style", "cursor: pointer; float: right;\n                                            margin-top:-45px;", "title", "Add More Facilitator", 3, "click", 4, "ngIf"], ["id", "table_wrapper", 1, "table"], ["id", "tbodyFaciliator", 2, "text-align", "center"], ["class", "fas fa-plus-circle", "id", "circle", "style", "cursor: pointer; float: right;\n                                            margin-top:-45px;", "title", "Add More Stakeholder", 3, "click", 4, "ngIf"], ["class", "fas fa-plus-circle", "id", "circle", "style", "cursor: pointer; float: right;\n                                            margin-top:-45px;", "title", "Add More Attendee Details", 3, "click", 4, "ngIf"], [2, "width", "4%"], [2, "width", "25%"], [2, "width", "5%"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input", 3, "change"], ["colspan", "6"], ["id", "circle", "title", "Add More Facilitator", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["type", "text", "placeholder", "Facilitator Name", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], [1, "form-select", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 4, "ngIf"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem", 3, "click"], [1, "fas", "fa-minus-circle", 2, "color", "red !important", "font-size", "20px"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem"], [1, "fas", "fa-minus-circle", 2, "color", "#f57676 !important", "font-size", "20px"], ["id", "circle", "title", "Add More Stakeholder", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["type", "text", "placeholder", "Stakeholder Name", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["id", "circle", "title", "Add More Attendee Details", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["type", "text", "placeholder", "Name", 1, "form-control", 2, "width", "485px", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], [1, "form-select", 2, "width", "12rem", 3, "disabled", "ngModel", "ngModelOptions", "ngModelChange"], ["value", "M", 4, "ngIf"], ["value", "F"], ["value", "O", 4, "ngIf"], ["value", "M"], ["value", "O"], ["class", "col-md", 4, "ngFor", "ngForOf"], [1, "col-md"], ["target", "_blank", 3, "href"], [3, "src"], [2, "margin-left", "100px"], ["for", "eventDateFrom"], ["type", "date", "formControlName", "eventDateFrom", 1, "form-control", 3, "ngClass", "min", "max", "keydown", "change"], ["for", "eventDateTo"], ["type", "date", "formControlName", "eventDateTo", 1, "form-control", 3, "ngClass", "min", "keydown", "change"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "240px"], ["id", "tbodyFaciliator", 2, "text-align", "center", "height", "170px"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px"], ["id", "tbodyFaciliator", 2, "text-align", "center", "height", "83px"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-top", "-15px"], ["class", "fas fa-plus-circle", "id", "circle", "style", "cursor: pointer; float: right;\n                            margin-top:-45px;", "title", "Add More Special Guests", 3, "click", 4, "ngIf"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "58px", "margin-top", "-75px"], [1, "card-body"], ["type", "checkbox", "value", "R", "id", "flexCheckDefault", "formControlName", "rally", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "S", "id", "flexCheckDefault", "formControlName", "seminar", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "FGD", "formControlName", "fgd", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["id", "circle", "title", "Add More Special Guests", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["type", "text", "placeholder", "Guest Name", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["for", "rallySeminarDate"], ["type", "date", "formControlName", "rallySeminarDate", 1, "form-control", 3, "ngClass", "min", "max", "keydown", "change"], ["for", "rallySeminarPlace"], ["type", "text", "placeholder", "Enter Place Name", "formControlName", "rallySeminarPlace", 1, "form-control", 3, "ngModelOptions", "ngClass", "keypress"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "260px"], [1, "form-group", "col-md-2"], [1, "form-group", "col-md-5"], [1, "serach_field_23"], ["active", "#", 3, "ngClass"], ["type", "text", "name", "search", "placeholder", "search by Family No. & Name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["formControlName", "village", "id", "village", 1, "form-select", 3, "ngClass", "change"], ["value", "", 4, "ngIf"], ["value", "allFamilies"], ["id", "tbodyFam"], ["id", "header_fixed"], [2, "width", "3%"], ["style", "width: 25%;", 4, "ngIf"], [2, "width", "30%"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "58px"], [1, "col-md-6"], [1, "col-md-3"], ["type", "radio", "value", "Y", "id", "flexCheckDefault", "formControlName", "ssAttended", 1, "form-check-input", 3, "change"], ["type", "radio", "value", "N", "id", "flexCheckDefault", "formControlName", "ssAttended", 1, "form-check-input", 3, "change"], ["class", "row", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"]],
  template: function CreateEventRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateEventRegisterComponent_Template_i_click_6_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Event Types :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateEventRegisterComponent_Template_select_change_16_listener($event) {
        return ctx.changeEventTypes($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Event Types --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, CreateEventRegisterComponent_option_19_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CreateEventRegisterComponent_div_20_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CreateEventRegisterComponent_div_21_Template, 130, 50, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CreateEventRegisterComponent_div_22_Template, 84, 22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CreateEventRegisterComponent_div_23_Template, 3, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, CreateEventRegisterComponent_div_24_Template, 3, 1, "div", 16);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.dialogTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.createEventRegisterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](10, _c1, ctx.l.eventType.invalid && ctx.l.eventType.touched, ctx.l.eventType.valid && (ctx.l.eventType.dirty || ctx.l.eventType.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.eventTypeLists);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.l.eventType.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.event_is_special == "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.event_is_special == "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.event_is_special == "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.event_is_special == "Y");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_5__.eventRegisterSearchFilterPipe],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 200px;\r\n}\r\n\r\nfieldset.scheduler-borders[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 120px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 180px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#tbodyStaff[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 150px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n.fa-plus-circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-minus-circle[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n  font-size: 20px;\r\n}\r\n\r\n#tbodyFaciliator[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 130px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  overflow: hidden;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 166px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: -1;\r\n  position: absolute;\r\n}\r\n\r\n#fileLabel[_ngcontent-%COMP%] {\r\n  background-color: #D3D3D3;\r\n  padding: 3.5px;\r\n  border-radius: 3px;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n#filePath[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n  width: 130%;\r\n  margin-left: -7px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  width: 77%;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-left: 77px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n  width: 430px;\r\n  position: relative;\r\n  margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  border: 0;\r\n  padding-left: 19px;\r\n  margin-left: 68px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 24px;\r\n  content: \"\";\r\n  background: #2daab8;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: 87px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -1190px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  width: 260px;\r\n  padding: 5px;\r\n  height: 175px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ldmVudC1yZWdpc3Rlci9jcmVhdGUtZXZlbnQtcmVnaXN0ZXIvY3JlYXRlLWV2ZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsUUFBUTtFQUlSLDJCQUEyQjtFQUMzQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAtMTJweCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVycyB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAtMTJweCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiN0Ym9keVN0YWZmIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGUge1xyXG4gIGNvbG9yOiAjM2U3NzU4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZmEtbWludXMtY2lyY2xlIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jdGJvZHlGYWNpbGlhdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jdGJvZHlGYW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTY2cHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuI2ZpbGVMYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcclxuICBwYWRkaW5nOiAzLjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2ZpbGVQYXRoIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2lkdGg6IDEzMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNzclO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3N3B4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIHtcclxuICB3aWR0aDogNDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzdlNzE3MjtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b246OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogIzJkYWFiODtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDg3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTE5MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY5MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event-register/create-event-register.component */ 64274);
/* harmony import */ var _fgd_view_fgd_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fgd-view/fgd-view.component */ 20245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-register.service */ 97385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 75595);


















function EventRegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_div_9_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.createEventRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function EventRegisterComponent_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", region_r13.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r13.regionName, " ");
  }
}
function EventRegisterComponent_div_11_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EventRegisterComponent_div_11_div_10_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.l.region.errors.required);
  }
}
function EventRegisterComponent_div_11_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", branch_r15.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r15.branchName, " ");
  }
}
function EventRegisterComponent_div_11_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_div_11_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EventRegisterComponent_div_11_div_20_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.l.branch.errors.required);
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
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 16)(2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function EventRegisterComponent_div_11_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, EventRegisterComponent_div_11_option_9_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, EventRegisterComponent_div_11_div_10_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 16)(12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function EventRegisterComponent_div_11_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, EventRegisterComponent_div_11_option_19_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, EventRegisterComponent_div_11_div_20_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, ctx_r2.l.region.invalid && ctx_r2.l.region.touched, ctx_r2.l.region.valid && (ctx_r2.l.region.dirty || ctx_r2.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r2.l.branch.invalid && ctx_r2.l.branch.touched, ctx_r2.l.branch.valid && (ctx_r2.l.branch.dirty || ctx_r2.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.l.branch.errors);
  }
}
function EventRegisterComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " School Events ");
  }
}
function EventRegisterComponent_ng_template_16_tr_15_i_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_16_tr_15_i_11_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const school_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.editSchoolEvent(school_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_16_tr_15_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_16_tr_15_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const school_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.deleteSchoolEvent(school_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_16_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 36)(10, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_16_tr_15_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const school_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.viewSchoolEvent(school_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, EventRegisterComponent_ng_template_16_tr_15_i_11_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, EventRegisterComponent_ng_template_16_tr_15_i_12_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const school_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r20.p - 1) * 5 + i_r22 + 1 ? (ctx_r20.p - 1) * 5 + i_r22 + 1 : i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](school_r21.schoolName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](school_r21.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", school_r21.eventDate.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r20.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r20.deleteMode);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
function EventRegisterComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28)(1, "table", 29)(2, "thead", 30)(3, "tr", 31)(4, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "School Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "School Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Date of Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "tbody", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, EventRegisterComponent_ng_template_16_tr_15_Template, 13, 6, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "pagination-controls", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function EventRegisterComponent_ng_template_16_Template_pagination_controls_pageChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.p = $event);
    })("pageBoundsCorrection", function EventRegisterComponent_ng_template_16_Template_pagination_controls_pageBoundsCorrection_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 1, ctx_r4.SchoolEventsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, ctx_r4.p)));
  }
}
function EventRegisterComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Special Events ");
  }
}
function EventRegisterComponent_ng_template_19_tr_17_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_19_tr_17_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      const special_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.fgdViewModal(special_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_19_tr_17_i_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_19_tr_17_i_13_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.fgdViewModalMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_19_tr_17_i_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_19_tr_17_i_15_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const special_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.editSpecialEvent(special_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_19_tr_17_i_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_19_tr_17_i_16_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53);
      const special_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.deleteSpecialEvent(special_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function EventRegisterComponent_ng_template_19_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, EventRegisterComponent_ng_template_19_tr_17_i_12_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, EventRegisterComponent_ng_template_19_tr_17_i_13_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EventRegisterComponent_ng_template_19_tr_17_Template_i_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);
      const special_r37 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r54.viewSpecialEvent(special_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, EventRegisterComponent_ng_template_19_tr_17_i_15_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, EventRegisterComponent_ng_template_19_tr_17_i_16_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const special_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r36.p2 - 1) * 5 + i_r38 + 1 ? (ctx_r36.p2 - 1) * 5 + i_r38 + 1 : i_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", special_r37.startDate.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", special_r37.endDate.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](special_r37.eventName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](special_r37.place ? special_r37.place : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", special_r37.fgd == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", special_r37.fgd == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.deleteMode);
  }
}
function EventRegisterComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28)(1, "table", 29)(2, "thead", 30)(3, "tr", 31)(4, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Event Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tbody", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, EventRegisterComponent_ng_template_19_tr_17_Template, 17, 9, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "pagination-controls", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function EventRegisterComponent_ng_template_19_Template_pagination_controls_pageChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r56.p2 = $event);
    })("pageBoundsCorrection", function EventRegisterComponent_ng_template_19_Template_pagination_controls_pageBoundsCorrection_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r58.p2 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](18, 1, ctx_r6.SpecialEventsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c1, ctx_r6.p2)));
  }
}
class EventRegisterComponent {
  constructor(fb, sidebarService, http, toaster, validationService, httpService, eventService, router, dialog, confirmationDialogService) {
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.toaster = toaster;
    this.validationService = validationService;
    this.httpService = httpService;
    this.eventService = eventService;
    this.router = router;
    this.dialog = dialog;
    this.confirmationDialogService = confirmationDialogService;
    this.loader = false;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.index = 0;
    this.SchoolEventsOfBranch = [];
    this.SpecialEventsOfBranch = [];
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
      this.lowerRankRegionId = res.regionID;
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
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/event-register']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  eventRegisterForms() {
    this.eventRegisterForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
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
    this.eventRegisterForm.controls.branch.setValue('');
    this.SchoolEventsOfBranch = [];
    if (this.eventRegisterForm.value.region == '') {
      this.branchList = [];
      this.SchoolEventsOfBranch = [];
    }
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    if (!this.lowerRankbranchId) {
      this.branchOpenDate = this.branchList.find(x => x.branchId == branchId)?.branchOpenDate;
      console.log(this.branchOpenDate, 'branchOpenDate');
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.loader = false;
    this.eventService.viewAllEventsOfABranch(req).subscribe(res => {
      this.loader = true;
      this.SchoolEventsOfBranch = res.responseObject.schoolEvents;
      console.log(this.SchoolEventsOfBranch, 'SchoolEventsOfBranch');
      this.SpecialEventsOfBranch = res.responseObject.specialEvents;
      console.log(this.SpecialEventsOfBranch, 'SpecialEventsOfBranch');
    });
    this.SchoolEventsOfBranch = [];
  }
  viewSchoolEvent(school) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSchoolId: school.eventRegisterSchoolId
    };
    this.loader = false;
    this.eventService.viewSpecificSchoolEventRegister(req).subscribe(res => {
      this.loader = true;
      this.specificSchoolEventDetails = res.responseObject;
      this.specificSchoolEventDetails.modalType = "view";
      this.createEventRegister(this.specificSchoolEventDetails);
    });
  }
  viewSpecialEvent(special) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: special.eventRegisterSpecialId
    };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe(res => {
      this.loader = true;
      this.specificSpecialEventDetails = res.responseObject;
      this.specificSpecialEventDetails.modalType = "view";
      this.createEventRegister(this.specificSpecialEventDetails);
    });
  }
  createEventRegister(specificEventDetails) {
    // console.log(specificEventDetails, 'specificEventDetails');
    const dialogRef = this.dialog.open(_create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_0__.CreateEventRegisterComponent, {
      width: '1100px',
      height: '570px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId,
        branchOpenDate: this.branchOpenDate,
        specificEventDetails: specificEventDetails,
        regionID: this.eventRegisterForm.value.region || this.lowerRankRegionId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }
  tabChanged(tabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  editSchoolEvent(school) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSchoolId: school.eventRegisterSchoolId
    };
    this.loader = false;
    this.eventService.viewSpecificSchoolEventRegister(req).subscribe(res => {
      this.loader = true;
      this.specificSchoolEventDetails = res.responseObject;
      this.specificSchoolEventDetails.modalType = "edit";
      this.createEventRegister(this.specificSchoolEventDetails);
    });
  }
  editSpecialEvent(special) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: special.eventRegisterSpecialId
    };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe(res => {
      this.loader = true;
      this.specificSpecialEventDetails = res.responseObject;
      this.specificSpecialEventDetails.modalType = "edit";
      this.createEventRegister(this.specificSpecialEventDetails);
    });
  }
  deleteSchoolEvent(school) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?').then(() => this.schoolDelete(school)).catch(() => '');
  }
  schoolDelete(school) {
    let schoolDelReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSchoolId: school.eventRegisterSchoolId,
      active_flag: 'D'
    };
    this.eventService.schoolEventSaveOrUpdate(schoolDelReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  deleteSpecialEvent(special) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?').then(() => this.specialDelete(special)).catch(() => '');
  }
  specialDelete(special) {
    let schoolDelReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: special.eventRegisterSpecialId,
      active_flag: 'D'
    };
    this.eventService.specialEventSaveOrUpdate(schoolDelReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  fgdViewModalMessage() {
    this.showErrors('FGD is not accessible');
  }
  showSuccess(message) {
    this.toaster.success(message, 'Event Deleted', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Event Deleted', {
      timeOut: 3000
    });
  }
  showErrors(message) {
    this.toaster.error(message, '', {
      timeOut: 3000
    });
  }
  fgdViewModal(special) {
    const dialogRef = this.dialog.open(_fgd_view_fgd_view_component__WEBPACK_IMPORTED_MODULE_1__.FgdViewComponent, {
      width: '800px',
      height: '380px',
      data: {
        branchID: this.eventRegisterForm.value.branch || this.lowerRankbranchId,
        branchOpenDate: this.branchOpenDate,
        special: special
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeBranch(this.eventRegisterForm.value.branch || this.lowerRankbranchId);
    });
  }
}
EventRegisterComponent.ɵfac = function EventRegisterComponent_Factory(t) {
  return new (t || EventRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_5__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__.ConfirmationDialogService));
};
EventRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: EventRegisterComponent,
  selectors: [["app-event-register"]],
  decls: 20,
  vars: 5,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["mat-tab-label", "", "style", "margin-left: 5px;"], ["matTabContent", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Event Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Event Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "text-align", "center"], [2, "width", "4%"], [2, "width", "25%"], [2, "width", "30%"], [2, "width", "15%"], [2, "width", "12%"], ["id", "tbodyy", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["title", "View Details", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["class", "fas fa-edit", "title", "Edit Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Event", 3, "click", 4, "ngIf"], ["title", "Edit Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Event", 1, "fas", "fa-trash", 3, "click"], [2, "width", "2%"], [1, "d-flex", "justify-content-end", "p2-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["class", "fa fa-group", "title", "Focused Group Discussion", 3, "click", 4, "ngIf"], ["title", "Focused Group Discussion", 1, "fa", "fa-group", 3, "click"]],
  template: function EventRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Event Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, EventRegisterComponent_div_8_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, EventRegisterComponent_div_9_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, EventRegisterComponent_div_11_Template, 21, 12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 2)(13, "mat-tab-group", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedTabChange", function EventRegisterComponent_Template_mat_tab_group_selectedTabChange_13_listener($event) {
        return ctx.tabChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, EventRegisterComponent_ng_template_15_Template, 1, 0, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, EventRegisterComponent_ng_template_16_Template, 18, 6, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, EventRegisterComponent_ng_template_18_Template, 1, 0, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, EventRegisterComponent_ng_template_19_Template, 20, 6, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.eventRegisterForm.value.branch && !ctx.lowerRankbranchId);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.eventRegisterForm.value.branch && ctx.createMode || ctx.lowerRankbranchId && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.eventRegisterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabContent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
  styles: ["#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n  font-size: 15px;\r\n  color: #828bb2;\r\n  font-weight: 400;\r\n  border-bottom: 1px solid rgba(130, 139, 178, 0.1);\r\n  height: 35px;\r\n}\r\n\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\r\n\r\n.fa-group[_ngcontent-%COMP%]:hover {\r\n  color: green !important;\r\n  cursor: pointer;\r\n  font-size: 1.6em;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ldmVudC1yZWdpc3Rlci9ldmVudC1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzgyOGJiMjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEzMCwgMTM5LCAxNzgsIDAuMSk7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjb2xvcjogIzcwY2FmNyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4uZmEtZ3JvdXA6aG92ZXIge1xyXG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-register-routing.module */ 88442);
/* harmony import */ var _event_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-register.component */ 18567);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-event-register/create-event-register.component */ 64274);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/event-register-search.pipe */ 41502);
/* harmony import */ var _focused_group_discussion_focused_group_discussion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focused-group-discussion/focused-group-discussion.component */ 1843);
/* harmony import */ var _fgd_view_fgd_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fgd-view/fgd-view.component */ 20245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);












class EventRegisterModule {}
EventRegisterModule.ɵfac = function EventRegisterModule_Factory(t) {
  return new (t || EventRegisterModule)();
};
EventRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: EventRegisterModule
});
EventRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventRegisterRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EventRegisterModule, {
    declarations: [_event_register_component__WEBPACK_IMPORTED_MODULE_1__.EventRegisterComponent, _create_event_register_create_event_register_component__WEBPACK_IMPORTED_MODULE_3__.CreateEventRegisterComponent, _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_5__.eventRegisterSearchFilterPipe, _focused_group_discussion_focused_group_discussion_component__WEBPACK_IMPORTED_MODULE_6__.FocusedGroupDiscussionComponent, _fgd_view_fgd_view_component__WEBPACK_IMPORTED_MODULE_7__.FgdViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _event_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventRegisterRoutingModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule]
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
  schoolEventSaveOrUpdate(obj) {
    return this.http.post(`${this.baseURL}eventRegister/schoolEventSaveOrUpdate`, obj);
  }
  viewAllEventsOfABranch(obj) {
    return this.http.post(`${this.baseURL}eventRegister/viewAllEventsOfABranch`, obj);
  }
  viewSpecificSchoolEventRegister(obj) {
    return this.http.post(`${this.baseURL}eventRegister/viewSpecificSchoolEventRegister`, obj);
  }
  getSimpleListOfVillagesOfABranch(obj) {
    return this.http.post(`${this.baseURL}village/getSimpleListOfVillagesOfABranch`, obj);
  }
  getFamiliesWithStatusForAVillage(obj) {
    return this.http.post(`${this.baseURL}eventRegister/getFamiliesWithStatusForAVillage`, obj);
  }
  getAllSsOfARegion(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getAllSsOfARegion`, obj);
  }
  specialEventSaveOrUpdate(obj) {
    return this.http.post(`${this.baseURL}eventRegister/specialEventSaveOrUpdate`, obj);
  }
  imageSchoolEventSave(obj) {
    return this.http.post(`${this.baseURL}image/schoolEvent/saveFile`, obj);
  }
  viewSpecificSpecialEventRegister(obj) {
    return this.http.post(`${this.baseURL}eventRegister/viewSpecificSpecialEventRegister`, obj);
  }
  getAllSsOfABranchSimpler(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getSSOfABranchSimpler`, obj);
  }
  saveOrUpdateFgd(obj) {
    return this.http.post(`${this.baseURL}eventRegister/saveOrUpdateFgd`, obj);
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

/***/ }),

/***/ 20245:
/*!***********************************************************************!*\
  !*** ./src/app/modules/event-register/fgd-view/fgd-view.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FgdViewComponent": () => (/* binding */ FgdViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _focused_group_discussion_focused_group_discussion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../focused-group-discussion/focused-group-discussion.component */ 1843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-register.service */ 97385);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);











function FgdViewComponent_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FgdViewComponent_h3_5_Template_h3_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.CreateFGDModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "click here to create FGD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FgdViewComponent_tr_24_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FgdViewComponent_tr_24_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const fgd_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.editFGD(fgd_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FgdViewComponent_tr_24_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FgdViewComponent_tr_24_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const fgd_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.deleteFGDEvent(fgd_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FgdViewComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 13)(8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FgdViewComponent_tr_24_Template_i_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const fgd_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.viewFGDDetails(fgd_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, FgdViewComponent_tr_24_i_9_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, FgdViewComponent_tr_24_i_10_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fgd_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fgd_r5.dateOfFgd.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fgd_r5.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.deleteMode);
  }
}
function FgdViewComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class FgdViewComponent {
  constructor(data, dialogRef, eventService, httpService, dialog, toaster, confirmationDialogService, sidebarService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.eventService = eventService;
    this.httpService = httpService;
    this.dialog = dialog;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.sidebarService = sidebarService;
    this.loader = true;
    this.fgdDetails = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data);
    this.fgdLists();
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  fgdLists() {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.data?.special?.eventRegisterSpecialId
    };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe(res => {
      this.loader = true;
      this.fgdDetails = res.responseObject.fgdDetails;
      console.log(this.fgdDetails, 'fgdDetails');
    });
  }
  viewFGDDetails(fgd) {
    fgd.modalType = 'view';
    this.editFGD(fgd);
  }
  CreateFGDModal() {
    const dialogRef = this.dialog.open(_focused_group_discussion_focused_group_discussion_component__WEBPACK_IMPORTED_MODULE_0__.FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        special: this.data?.special
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }
  editFGD(fgd) {
    const dialogRef = this.dialog.open(_focused_group_discussion_focused_group_discussion_component__WEBPACK_IMPORTED_MODULE_0__.FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        special: this.data?.special,
        fgdDetails: fgd
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }
  deleteFGDEvent(fgd) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this FGD ?').then(() => this.fdgDelete(fgd)).catch(() => '');
  }
  fdgDelete(fgd) {
    let deleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventSpecialFgdMapId: fgd.eventSpecialFgdMapId,
      active_flag: "D"
    };
    this.eventService.saveOrUpdateFgd(deleteObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess('success');
        this.fgdLists();
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'FGD Deleted', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'FGD Deleted', {
      timeOut: 3000
    });
  }
}
FgdViewComponent.ɵfac = function FgdViewComponent_Factory(t) {
  return new (t || FgdViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_1__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService));
};
FgdViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FgdViewComponent,
  selectors: [["app-fgd-view"]],
  decls: 26,
  vars: 4,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], ["class", "btn-link", "style", "color:#0d6efd; cursor: pointer;margin-left: 225px;", 3, "click", 4, "ngIf"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", "", 2, "overflow-y", "auto", "height", "375px", "overflow-x", "hidden"], ["id", "tbodyFam"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "text-align", "center"], [2, "width", "8%"], [2, "width", "15%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn-link", 2, "color", "#0d6efd", "cursor", "pointer", "margin-left", "225px", 3, "click"], ["title", "View Details", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["class", "fas fa-edit", "title", "Edit FGD", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete FGD", 3, "click", 4, "ngIf"], ["title", "Edit FGD", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete FGD", 1, "fas", "fa-trash", 3, "click"], ["colspan", "4"]],
  template: function FgdViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "List Of FGD's");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FgdViewComponent_h3_5_Template, 2, 0, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FgdViewComponent_Template_i_click_7_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "table", 9)(13, "thead", 10)(14, "tr", 11)(15, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "FGD Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "FGD Place");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "tbody", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, FgdViewComponent_tr_24_Template, 11, 5, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, FgdViewComponent_tr_25_Template, 3, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.fgdDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.fgdDetails == null ? null : ctx.data.fgdDetails.length) == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n  height: 30px;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 216px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  overflow: hidden;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ldmVudC1yZWdpc3Rlci9mZ2Qtdmlldy9mZ2Qtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG5cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuI3Rib2R5RmFtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDIxNnB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jaGVhZGVyX2ZpeGVkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5mYS1leWU6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzBjYWY3ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1843:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/event-register/focused-group-discussion/focused-group-discussion.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusedGroupDiscussionComponent": () => (/* binding */ FocusedGroupDiscussionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _event_register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-register.service */ 97385);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/event-register-search.pipe */ 41502);












function FocusedGroupDiscussionComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please select date of FGD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FocusedGroupDiscussionComponent_div_17_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.l.fgdDate.errors.required);
  }
}
function FocusedGroupDiscussionComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", block_r13.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", block_r13.blockName, " ");
  }
}
function FocusedGroupDiscussionComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FocusedGroupDiscussionComponent_div_35_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.l.block.errors.required);
  }
}
function FocusedGroupDiscussionComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", gp_r15.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", gp_r15.name, " ");
  }
}
function FocusedGroupDiscussionComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FocusedGroupDiscussionComponent_div_45_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.l.gp.errors.required);
  }
}
function FocusedGroupDiscussionComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", vill_r17.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", vill_r17.villageName, " ");
  }
}
function FocusedGroupDiscussionComponent_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FocusedGroupDiscussionComponent_div_55_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.l.gram.errors.required);
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_21_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_div_72_tr_21_input_8_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ss_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.selectMultipleSS($event, ss_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_21_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_div_72_tr_21_input_9_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ss_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.selectMultipleSS($event, ss_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_21_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_div_72_tr_21_input_10_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ss_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.selectMultipleSS($event, ss_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_21_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_div_72_tr_21_input_11_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ss_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.selectMultipleSS($event, ss_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FocusedGroupDiscussionComponent_div_72_tr_21_input_8_Template, 1, 0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, FocusedGroupDiscussionComponent_div_72_tr_21_input_9_Template, 1, 0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FocusedGroupDiscussionComponent_div_72_tr_21_input_10_Template, 1, 0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FocusedGroupDiscussionComponent_div_72_tr_21_input_11_Template, 1, 0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ss_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ss_r21.ssName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ss_r21.ssHusbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ss_r21.is_checked == true && !ctx_r19.modalType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ss_r21.is_checked == false && !ctx_r19.modalType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ss_r21.is_checked == true && ctx_r19.modalType == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ss_r21.is_checked == false && ctx_r19.modalType == "view");
  }
}
function FocusedGroupDiscussionComponent_div_72_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FocusedGroupDiscussionComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 13)(2, "fieldset", 15)(3, "legend", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "SS List :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 57)(8, "div", 44)(9, "table", 45)(10, "thead", 46)(11, "tr", 47)(12, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "SS Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Husband/ Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FocusedGroupDiscussionComponent_div_72_tr_21_Template, 12, 7, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FocusedGroupDiscussionComponent_div_72_tr_22_Template, 3, 0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.ssListOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r7.ssListOfBranch == null ? null : ctx_r7.ssListOfBranch.length) == 0);
  }
}
function FocusedGroupDiscussionComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Village Name : ", ctx_r8.showVillageName, "");
  }
}
function FocusedGroupDiscussionComponent_tr_106_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_tr_106_input_10_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);
      const fam_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.selectMultipleFamilies($event, fam_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_tr_106_input_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_tr_106_input_11_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);
      const fam_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.selectMultipleFamilies($event, fam_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_tr_106_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_tr_106_input_12_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53);
      const fam_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.selectMultipleFamilies($event, fam_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_tr_106_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_tr_106_input_13_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);
      const fam_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r54.selectMultipleFamilies($event, fam_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FocusedGroupDiscussionComponent_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FocusedGroupDiscussionComponent_tr_106_input_10_Template, 1, 0, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FocusedGroupDiscussionComponent_tr_106_input_11_Template, 1, 0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FocusedGroupDiscussionComponent_tr_106_input_12_Template, 1, 0, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FocusedGroupDiscussionComponent_tr_106_input_13_Template, 1, 0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fam_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r40 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fam_r39.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fam_r39.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fam_r39.setStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fam_r39.is_checked == true && !ctx_r9.modalType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fam_r39.is_checked == false && !ctx_r9.modalType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fam_r39.is_checked == true && ctx_r9.modalType == "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fam_r39.is_checked == false && ctx_r9.modalType == "view");
  }
}
function FocusedGroupDiscussionComponent_div_109_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70)(1, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", image_r58.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", image_r58.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Image : ", i_r59 + 1, "");
  }
}
function FocusedGroupDiscussionComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "legend", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "FGD Captured Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FocusedGroupDiscussionComponent_div_109_div_4_Template, 5, 3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.capturedImagesList);
  }
}
function FocusedGroupDiscussionComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FocusedGroupDiscussionComponent_div_111_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.saveOrUpdateFGD());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r11.fgdSaveDisabled());
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    familyNumber: a0,
    name: a1
  };
};
class FocusedGroupDiscussionComponent {
  constructor(data, dialogRef, eventService, httpService, fb, validationService, toaster) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.eventService = eventService;
    this.httpService = httpService;
    this.fb = fb;
    this.validationService = validationService;
    this.toaster = toaster;
    this.loader = true;
    this.gpList = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.ssListOfBranch = [];
    this.familiesWithStatusOfVillage = [];
    this.ssListID = [];
    this.familiesListID = [];
    this.capturedImagesList = [];
    dialogRef.disableClose = true;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    console.log(this.data);
    this.modalType = this.data?.fgdDetails?.modalType;
    this.capturedImagesList = this.data?.fgdDetails?.imageList;
    this.specialFromDate = this.data?.special?.startDate;
    this.specialTodate = this.data?.special?.endDate;
    let currentDate = new Date().toJSON().slice(0, 10);
    if (this.specialTodate > currentDate) {
      this.specialTodate = currentDate;
    }
    console.log(this.specialFromDate, 'this.specialFromDate ');
    console.log(this.specialTodate, 'this.specialTodate');
    let villageReg = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.data.branchID
    };
    this.loader = false;
    this.eventService.getVillagesOfBranch(villageReg).subscribe(res => {
      this.loader = true;
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch);
    });
    this.FGDFormGroup();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  FGDFormGroup() {
    var x = this.data.fgdDetails;
    var ssAttended;
    if (x?.ssList?.length > 0) {
      ssAttended = 'Y';
      this.getAllSsOfABranch();
    } else {
      ssAttended = 'N';
    }
    this.FGDForm = this.fb.group({
      fgdDate: [x?.dateOfFgd ? x?.dateOfFgd : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      block: [x?.blockId ? x?.blockId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      ssAttended: [ssAttended ? ssAttended : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    setTimeout(() => {
      if (this.data.fgdDetails) {
        this.changeBlock(x?.blockId);
        this.FGDForm.controls.gp.setValue(x.gpId);
        this.changeGp(x?.gpId);
        this.FGDForm.controls.gram.setValue(x.villageId);
        this.beneficiaryAttendedList(x.villageId);
        // this.FGDForm.controls['fgdDate'].disable();
        this.FGDForm.controls['block'].disable();
        this.FGDForm.controls['gp'].disable();
        this.FGDForm.controls['gram'].disable();
        if (this.modalType == 'view') {
          this.FGDForm.controls['ssAttended'].disable();
        }
      }
    }, 200);
    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
    }
    return this.FGDForm.markAllAsTouched();
  }
  get l() {
    return this.FGDForm.controls;
  }
  restrictTypeOfDate() {
    return false;
  }
  changeBlock(blockId) {
    console.log(true);
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    this.FGDForm.controls.gp.setValue('');
    this.FGDForm.controls.gram.setValue('');
    this.villageList = [];
    this.familiesWithStatusOfVillage = [];
    this.familiesListID = [];
  }
  changeGp(gpId) {
    this.villageList = this.gpList?.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    // console.log(this.villageList);
    this.FGDForm.controls.gram.setValue('');
    this.familiesWithStatusOfVillage = [];
    this.familiesListID = [];
  }
  dateOfFGD(date) {
    if (!this.FGDForm.value.fgdDate) {
      this.FGDForm.controls['block'].disable();
      this.FGDForm.controls['gp'].disable();
      this.FGDForm.controls['gram'].disable();
      this.FGDForm.controls.block.setValue('');
      this.FGDForm.controls.gp.setValue('');
      this.FGDForm.controls.gram.setValue('');
      this.familiesWithStatusOfVillage = [];
      this.familiesListID = [];
    } else {
      this.FGDForm.controls['block'].enable();
      this.FGDForm.controls['gp'].enable();
      this.FGDForm.controls['gram'].enable();
    }
  }
  SSAttendedRally(value) {
    console.log(value);
    if (value == 'Y') {
      this.getAllSsOfABranch();
    } else {
      if (this.data?.fgdDetails?.ssList) {
        this.ssListID.forEach(x => {
          if (x.fgdSsMapId) {
            x.active_flag = 'D';
          }
        });
        this.ssListID = this.ssListID.filter(x => x.active_flag == 'D');
      } else {
        this.ssListID = [];
      }
    }
  }
  getAllSsOfABranch() {
    this.ssListID = [];
    let ssReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.data.branchID
    };
    this.eventService.getAllSsOfABranchSimpler(ssReq).subscribe(res => {
      this.ssListOfBranch = res.responseObject?.ssDtoList;
      this.ssListOfBranch = this.ssListOfBranch?.map(({
        is_checked = false,
        ...rest
      }) => ({
        is_checked,
        ...rest
      }));
      if (this.data?.fgdDetails?.ssList) {
        this.data?.fgdDetails?.ssList.forEach(x => {
          this.ssListOfBranch.forEach(y => {
            if (y.ssId == x.ssId) {
              y.is_checked = true;
              y.fgdSsMapId = x.fgdSsMapId;
            }
          });
          this.ssListID.push({
            fgdSsMapId: x.fgdSsMapId,
            ssId: x.ssId,
            active_flag: 'A'
          });
        });
      }
      console.log(this.ssListOfBranch, 'ssListOfBranch');
    });
  }
  selectMultipleSS(e, ss) {
    this.ssListID = [];
    console.log(e.target.checked, ss);
    if (e.target.checked == true) {
      ss.is_checked = true;
    } else {
      ss.is_checked = false;
    }
    console.log(this.ssListOfBranch, 'ssListOfBranch');
    this.ssListOfBranch.forEach(x => {
      if (x.fgdSsMapId) {
        this.ssListID.push({
          fgdSsMapId: x.fgdSsMapId ? x.fgdSsMapId : 0,
          ssId: x.ssId,
          active_flag: x.is_checked == false ? 'D' : 'A'
        });
      } else {
        if (x.is_checked == true) {
          this.ssListID.push({
            fgdSsMapId: 0,
            ssId: x.ssId,
            active_flag: 'A'
          });
        }
      }
    });
    console.log(this.ssListID);
  }
  beneficiaryAttendedList(villageID) {
    if (villageID == '') {
      this.familiesListID = [];
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      date: this.FGDForm.value.fgdDate,
      villageId: villageID
    };
    this.eventService.getFamiliesWithStatusForAVillage(req).subscribe(res => {
      this.familiesWithStatusOfVillage = res.responseObject;
      console.log(this.villageList);
      this.showVillageName = this.villageList.find(x => x.villageMasterId == villageID)?.villageName;
      this.familiesWithStatusOfVillage = this.familiesWithStatusOfVillage?.map(({
        setStatus = '',
        is_checked = false,
        ...rest
      }) => ({
        setStatus,
        is_checked,
        ...rest
      }));
      this.setStatusForAll(this.familiesWithStatusOfVillage);
      console.log(this.familiesWithStatusOfVillage, 'familiesWithStatusOfVillage');
      console.log(this.data?.fgdDetails?.familyList);
      if (this.data.fgdDetails) {
        this.data.fgdDetails.familyList.forEach(x => {
          this.familiesWithStatusOfVillage.forEach(y => {
            if (y.familyId == x.familyId) {
              y.is_checked = true;
              y.fgdFamilyMapId = x.fgdFamilyMapId;
            }
          });
          this.familiesListID.push({
            fgdFamilyMapId: x.fgdFamilyMapId,
            familyId: x.familyId,
            pregnantWoman: x.pregnantWoman,
            lactatingMother: x.lactatingMother,
            twoToFive: x.twoToFive,
            pem: x.pem,
            adolescentGirl: x.adolescentGirl,
            active_flag: 'A'
          });
        });
      }
      // else {
      //   this.familiesWithStatusOfVillage = this.familiesListID.filter(x => x.is_checked == true);
      // }
    });
  }
  //Set PW,PEM,LM,2-5YR,Adol Status
  setStatusForAll(familys) {
    familys?.forEach(family => {
      if (family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.pem == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, LM, PW, 2to5, AG";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "LM";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman == "Y" && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "PW";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pem == "Y" && family.adolescentGirl?.includes("N") && family.twoToFive?.includes("N")) {
        family.setStatus = "PEM";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.adolescentGirl?.includes("N") && family.pem?.includes("N")) {
        family.setStatus = "2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.adolescentGirl == "Y" && family.twoToFive?.includes("N") && family.pem?.includes("N")) {
        family.setStatus = "AG";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, PW";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.pem == "Y" && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, PEM";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.pem?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, 2to5";
      } else if (family.lactatingMother == "Y" && family.pregnantWoman?.includes("N") && family.adolescentGirl == "Y" && family.twoToFive?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "LM, AG";
      } else if (family.lactatingMother?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N") && family.pregnantWoman == "Y" && family.pem == "Y") {
        family.setStatus = "PW, PEM";
      } else if (family.lactatingMother?.includes("N") && family.pem?.includes("N") && family.adolescentGirl?.includes("N") && family.pregnantWoman == "Y" && family.twoToFive == "Y") {
        family.setStatus = "PW, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.pregnantWoman == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PW, AG";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.adolescentGirl?.includes("N") && family.pem == "Y" && family.twoToFive == "Y") {
        family.setStatus = "PEM, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive?.includes("N") && family.pem == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, AG";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pregnantWoman?.includes("N") && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "2to5, AG";
      } else if (family.lactatingMother?.includes("N") && family.pem == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "PEM, PW, 2to5, AG";
      } else if (family.pem?.includes("N") && family.lactatingMother == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PW, 2to5, AG";
      } else if (family.pregnantWoman?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.twoToFive == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PEM, 2to5, AG";
      } else if (family.twoToFive?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.pregnantWoman == "Y" && family.adolescentGirl == "Y") {
        family.setStatus = "LM, PEM, PW, AG";
      } else if (family.adolescentGirl?.includes("N") && family.lactatingMother == "Y" && family.pem == "Y" && family.pregnantWoman == "Y" && family.twoToFive == "Y") {
        family.setStatus = "LM, PEM, PW, 2to5";
      } else if (family.lactatingMother?.includes("N") && family.pregnantWoman?.includes("N") && family.pem?.includes("N") && family.twoToFive?.includes("N") && family.adolescentGirl?.includes("N")) {
        family.setStatus = "--";
      } else {
        family.setStatus = "--";
      }
    });
  }
  selectMultipleFamilies(e, fam) {
    this.familiesListID = [];
    console.log(e.target.checked, fam);
    if (e.target.checked == true) {
      fam.is_checked = true;
    } else {
      fam.is_checked = false;
    }
    // this.familiesWithStatusOfVillage.filter(x => x.is_checked == true).forEach(x => {
    //   this.familiesListID.push({
    //     fgdFamilyMapId: 0, familyId: x.familyId, pregnantWoman: x.pregnantWoman,
    //     lactatingMother: x.lactatingMother, twoToFive: x.twoToFive, pem: x.pem, adolescentGirl: x.adolescentGirl, active_flag: 'A'
    //   });
    // })
    this.familiesWithStatusOfVillage.forEach(x => {
      if (x.fgdFamilyMapId) {
        this.familiesListID.push({
          fgdFamilyMapId: x.fgdFamilyMapId ? x.fgdFamilyMapId : 0,
          familyId: x.familyId,
          pregnantWoman: x.pregnantWoman,
          lactatingMother: x.lactatingMother,
          twoToFive: x.twoToFive,
          pem: x.pem,
          adolescentGirl: x.adolescentGirl,
          active_flag: x.is_checked == false ? 'D' : 'A'
        });
      } else {
        if (x.is_checked == true) this.familiesListID.push({
          fgdFamilyMapId: 0,
          familyId: x.familyId,
          pregnantWoman: x.pregnantWoman,
          lactatingMother: x.lactatingMother,
          twoToFive: x.twoToFive,
          pem: x.pem,
          adolescentGirl: x.adolescentGirl,
          active_flag: 'A'
        });
      }
    });
    // console.log(this.familiesListID);
  }

  fgdSaveDisabled() {
    let flag = true;
    // console.log(this.data.fgdDetails);
    if (!this.FGDForm.value.fgdDate && !this.data?.fgdDetails?.dateOfFgd) {
      flag = false;
    } else if (!this.FGDForm.value.gram && !this.data?.fgdDetails?.villageId) {
      flag = false;
    } else if (!this.FGDForm.value.ssAttended) {
      flag = false;
    } else if (this.FGDForm.value.ssAttended == 'Y') {
      if (this.ssListID.filter(x => x.active_flag == 'A').length < 1) {
        flag = false;
      }
    }
    // console.log(this.familiesListID);
    if (this.familiesListID.filter(y => y.active_flag == 'A').length < 1) {
      flag = false;
    }
    return flag;
  }
  saveOrUpdateFGD() {
    let saveORUpdateObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventRegisterSpecialId: this.data?.special?.eventRegisterSpecialId,
      eventSpecialFgdMapId: this.data?.fgdDetails?.eventSpecialFgdMapId ? this.data?.fgdDetails?.eventSpecialFgdMapId : 0,
      villageId: this.data?.fgdDetails?.villageId ? this.data?.fgdDetails?.villageId : this.FGDForm.value.gram,
      dateOfFgd: this.data?.fgdDetails?.dateOfFgd ? this.data?.fgdDetails?.dateOfFgd : this.FGDForm.value.fgdDate,
      active_flag: 'A',
      familyList: this.familiesListID,
      ssList: this.ssListID
    };
    // console.log(this.ssListID);
    console.log(saveORUpdateObj, 'saveORUpdateObj');
    this.eventService.saveOrUpdateFgd(saveORUpdateObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess('success');
        this.closeDialog();
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'FGD', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'FGD', {
      timeOut: 3000
    });
  }
}
FocusedGroupDiscussionComponent.ɵfac = function FocusedGroupDiscussionComponent_Factory(t) {
  return new (t || FocusedGroupDiscussionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_event_register_service__WEBPACK_IMPORTED_MODULE_0__.EventRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
};
FocusedGroupDiscussionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FocusedGroupDiscussionComponent,
  selectors: [["app-focused-group-discussion"]],
  decls: 112,
  vars: 40,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", "", 2, "overflow-y", "auto", "height", "375px", "overflow-x", "hidden"], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "fgdDate"], [1, "text-danger"], ["type", "date", "formControlName", "fgdDate", 1, "form-control", 3, "min", "max", "ngClass", "change", "keydown"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md"], [1, "scheduler-borders"], [1, "scheduler-border"], ["for", "block"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "50px", "margin-top", "-33px"], [1, "card-body"], [1, "col-md-4"], [1, "card-title", 2, "margin-left", "25px"], ["type", "radio", "value", "Y", "id", "flexCheckDefault", "formControlName", "ssAttended", 1, "form-check-input", 3, "change"], [1, "col-md-2", 2, "margin-left", "-40px"], ["type", "radio", "value", "N", "id", "flexCheckDefault", "formControlName", "ssAttended", 1, "form-check-input", 3, "change"], ["class", "row", 4, "ngIf"], [1, "card", 2, "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "400px"], [1, "card-body", 2, "height", "40vh"], [1, "form-group", "col-md-3"], [1, "card-title"], [1, "form-group", "col-md-4"], [1, "serach_field_23"], ["active", "#", 3, "ngClass"], ["type", "text", "name", "search", "placeholder", "search by Family No. & Name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-group col-md-5", 4, "ngIf"], ["id", "tbodyFam"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "text-align", "center"], [2, "width", "3%"], [2, "width", "25%"], [2, "width", "30%"], [2, "width", "5%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "modal-footer"], [1, "invalid-feedback"], [3, "value"], ["id", "tbodyStaff"], [2, "width", "4%"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input", 3, "change"], ["colspan", "6"], [1, "form-group", "col-md-5"], ["class", "col-md", 4, "ngFor", "ngForOf"], [1, "col-md"], ["target", "_blank", 3, "href"], [3, "src"], [2, "margin-left", "100px"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"]],
  template: function FocusedGroupDiscussionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Focused Group Discussion (FGD)");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div")(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FocusedGroupDiscussionComponent_Template_i_click_6_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Date of FGD :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_input_change_16_listener($event) {
        return ctx.dateOfFGD($event.target.value);
      })("keydown", function FocusedGroupDiscussionComponent_Template_input_keydown_16_listener() {
        return ctx.restrictTypeOfDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, FocusedGroupDiscussionComponent_div_17_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "div", 13)(20, "fieldset", 14)(21, "legend", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Place Of FGD :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7)(26, "div", 13)(27, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_select_change_31_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, FocusedGroupDiscussionComponent_option_34_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, FocusedGroupDiscussionComponent_div_35_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 13)(37, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_select_change_41_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "-- Select GP --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, FocusedGroupDiscussionComponent_option_44_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, FocusedGroupDiscussionComponent_div_45_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 13)(47, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Vill/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_select_change_51_listener($event) {
        return ctx.beneficiaryAttendedList($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, FocusedGroupDiscussionComponent_option_54_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, FocusedGroupDiscussionComponent_div_55_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 7)(57, "div", 8)(58, "div", 24)(59, "div", 25)(60, "div", 7)(61, "div", 26)(62, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "SS Present :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 26)(67, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_input_change_67_listener($event) {
        return ctx.SSAttendedRally($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "\u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 29)(70, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FocusedGroupDiscussionComponent_Template_input_change_70_listener($event) {
        return ctx.SSAttendedRally($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, FocusedGroupDiscussionComponent_div_72_Template, 23, 2, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 7)(74, "div", 32)(75, "div", 33)(76, "div", 7)(77, "div", 34)(78, "h4", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Beneficiary Attended:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 36)(83, "div", 37)(84, "div")(85, "form", 38)(86, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FocusedGroupDiscussionComponent_Template_input_ngModelChange_86_listener($event) {
        return ctx.familySearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, FocusedGroupDiscussionComponent_div_89_Template, 3, 1, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 43)(91, "div", 44)(92, "table", 45)(93, "thead", 46)(94, "tr", 47)(95, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Family No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "th", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "th", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "th", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "tbody", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, FocusedGroupDiscussionComponent_tr_106_Template, 14, 8, "tr", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](107, "eventRegisterFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, FocusedGroupDiscussionComponent_div_109_Template, 5, 1, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, FocusedGroupDiscussionComponent_div_111_Template, 3, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.FGDForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.specialFromDate)("max", ctx.specialTodate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](25, _c0, ctx.l.fgdDate.invalid && ctx.l.fgdDate.touched, ctx.l.fgdDate.valid && (ctx.l.fgdDate.dirty || ctx.l.fgdDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.l.fgdDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c0, ctx.l.block.invalid && ctx.l.block.touched, ctx.l.block.valid && (ctx.l.block.dirty || ctx.l.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.l.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c0, ctx.l.gp.invalid && ctx.l.gp.touched, ctx.l.gp.valid && (ctx.l.gp.dirty || ctx.l.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.l.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](34, _c0, ctx.l.gram.invalid && ctx.l.gram.touched, ctx.l.gram.valid && (ctx.l.gram.dirty || ctx.l.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.l.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FGDForm.value.ssAttended == "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen" : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.familySearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showVillageName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](107, 22, ctx.familiesWithStatusOfVillage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c1, ctx.familySearch, ctx.familySearch)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.modalType == "view" && ctx.capturedImagesList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.modalType);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_sidebar_event_register_search_pipe__WEBPACK_IMPORTED_MODULE_4__.eventRegisterSearchFilterPipe],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n\r\nfieldset.scheduler-borders[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 120px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 210px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 180px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#tbodyStaff[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 166px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  overflow: hidden;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  width: 77%;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-left: -34px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n  width: 430px;\r\n  position: relative;\r\n  margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  border: 0;\r\n  padding-left: 19px;\r\n  margin-left: -45px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 24px;\r\n  content: \"\";\r\n  background: #2daab8;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: -25px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  \r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -1425px;\r\n  \r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 286px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  width: 260px;\r\n  padding: 5px;\r\n  height: 175px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ldmVudC1yZWdpc3Rlci9mb2N1c2VkLWdyb3VwLWRpc2N1c3Npb24vZm9jdXNlZC1ncm91cC1kaXNjdXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOzs7QUFHQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsUUFBUTtFQUlSLDJCQUEyQjtFQUMzQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG5cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXJzIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IC0xMnB4IDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogLTEycHggMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiN0Ym9keVN0YWZmIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2NnB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDc3JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTM0cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMge1xyXG4gIHdpZHRoOiA0MzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjN2U3MTcyO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00NXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b246OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogIzJkYWFiODtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIC8qIG1hcmdpbi10b3A6IDE5cHg7ICovXHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNDI1cHg7XHJcbiAgLyogbWFyZ2luLXRvcDogMjFweDsgKi9cclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4jdGJvZHlGYW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMjg2cHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 41502:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/event-register-search.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventRegisterSearchFilterPipe": () => (/* binding */ eventRegisterSearchFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class eventRegisterSearchFilterPipe {
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
eventRegisterSearchFilterPipe.ɵfac = function eventRegisterSearchFilterPipe_Factory(t) {
  return new (t || eventRegisterSearchFilterPipe)();
};
eventRegisterSearchFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "eventRegisterFilter",
  type: eventRegisterSearchFilterPipe,
  pure: false
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_event-register_event-register_module_ts.js.map