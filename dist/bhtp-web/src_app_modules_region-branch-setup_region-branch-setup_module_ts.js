"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_region-branch-setup_region-branch-setup_module_ts"],{

/***/ 16261:
/*!************************************************************************************!*\
  !*** ./src/app/modules/region-branch-setup/branch-setup/branch-setup.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchSetupComponent": () => (/* binding */ BranchSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);










function BranchSetupComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", region_r24.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", region_r24.regionName, " ");
  }
}
function BranchSetupComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_18_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.region.errors.required);
  }
}
function BranchSetupComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subVerticals_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", subVerticals_r26.subVerticalMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subVerticals_r26.subVerticalName, " ");
  }
}
function BranchSetupComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SubVertical selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_28_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.subVertical.errors.required);
  }
}
function BranchSetupComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subVerticleProject_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", subVerticleProject_r28.projectMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subVerticleProject_r28.projectCode, " ");
  }
}
function BranchSetupComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SubVerticleProject selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_38_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.subVerticleProject.errors.required);
  }
}
function BranchSetupComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", state_r30.stateMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", state_r30.stateName, " ");
  }
}
function BranchSetupComponent_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "State selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_49_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.f.state.errors.required);
  }
}
function BranchSetupComponent_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const district_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", district_r32.districtMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", district_r32.districtName, " ");
  }
}
function BranchSetupComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "District selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_59_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.f.district.errors.required);
  }
}
function BranchSetupComponent_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", block_r34.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", block_r34.blockName, " ");
  }
}
function BranchSetupComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_69_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.f.block.errors.required);
  }
}
function BranchSetupComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BranchName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_76_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.f.branchName.errors.required);
  }
}
function BranchSetupComponent_option_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branchType_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branchType_r37.branchTypeMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", branchType_r37.branchTypeDescription, " ");
  }
}
function BranchSetupComponent_div_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BranchType selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_86_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.f.branchType.errors.required);
  }
}
function BranchSetupComponent_div_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "StartDate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_94_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.f.startDate.errors.required);
  }
}
function BranchSetupComponent_div_101_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_101_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.f.address.errors.required);
  }
}
function BranchSetupComponent_div_108_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pincode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_108_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Minimum 6 digit required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_108_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BranchSetupComponent_div_108_div_2_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.f.pincode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.f.pincode.errors == null ? null : ctx_r17.f.pincode.errors.minlength);
  }
}
function BranchSetupComponent_div_114_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "PostOffice is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_114_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.f.postOffice.errors.required);
  }
}
function BranchSetupComponent_div_119_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "PoliceStation is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_119_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.f.policeStation.errors.required);
  }
}
function BranchSetupComponent_div_124_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BranchLandmark is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_124_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.f.branchLandmark.errors.required);
  }
}
function BranchSetupComponent_div_132_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Primary Mobile No is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_132_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_132_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_132_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BranchSetupComponent_div_132_div_2_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BranchSetupComponent_div_132_div_3_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.f.primaryMobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.f.primaryMobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.f.primaryMobile.errors.pattern);
  }
}
function BranchSetupComponent_div_139_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_139_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_139_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BranchSetupComponent_div_139_div_2_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.f.primaryEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.f.primaryEmail.errors.email);
  }
}
function BranchSetupComponent_div_144_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile No. should be of 10 digit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_144_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile No. should be starting with 6, 7, 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BranchSetupComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BranchSetupComponent_div_144_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BranchSetupComponent_div_144_div_2_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.f.secondaryMobile.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.f.secondaryMobile.errors.pattern);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class BranchSetupComponent {
  constructor(fb, http, toaster, httpService, data, dialogRef, validationService) {
    this.fb = fb;
    this.http = http;
    this.toaster = toaster;
    this.httpService = httpService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.validationService = validationService;
    this.regionList = [];
    this.subVerticalsList = [];
    this.subVerticleProjectList = [];
    this.branchTypeList = [];
    this.stateList = [];
    this.stateWiseDistrictList = [];
    this.blockList = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.createForm();
    this.allDropdownValue();
    if (this.data.editMode == false) {
      // this.branchForm.reset();
    } else {
      this.changeSubVertical(this.data.branchDetails.subverticalMasterId);
      // this.chnageANything(this.data.branchDetails.stateMasterId).then((res) => {
      //   this.changeDistrict(this.data.branchDetails.districtMasterId);
      // });
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        stateId: this.data.branchDetails.stateMasterId
      };
      this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe(res => {
        this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
        this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == this.data.branchDetails.districtMasterId)?.blockList;
      });
      this.branchForm.patchValue({
        region: this.data.regionMasterId,
        subVertical: this.data.branchDetails.subverticalMasterId,
        subVerticleProject: this.data.branchDetails.projectMasterId,
        state: this.data.branchDetails.stateMasterId,
        district: this.data.branchDetails.districtMasterId,
        block: this.data.branchDetails.blockMasterId,
        branchName: this.data.branchDetails.branchName,
        branchType: this.data.branchDetails.branchTypeMasterId,
        startDate: this.data.branchDetails.branchOpenDate,
        address: this.data.branchDetails.branchAddressLine,
        pincode: this.data.branchDetails.branchPincode,
        primaryMobile: this.data.branchDetails.branchPhonePrimary,
        primaryEmail: this.data.branchDetails.branchEmailPrimary,
        postOffice: this.data.branchDetails.branchPostOffice,
        policeStation: this.data.branchDetails.branchPoliceStation,
        branchLandmark: this.data.branchDetails.branchlandMark,
        secondaryMobile: this.data.branchDetails.branchPhoneSecondary,
        secondaryEmail: this.data.branchDetails.branchEmailSecondary
      });
      this.branchForm.markAllAsTouched();
    }
  }
  allDropdownValue() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.http.post(`${this.httpService.baseURL}user/getListOfAllRegions`, Dto).subscribe(res => {
      this.regionList = res.responseObject;
    });
    this.http.post(`${this.httpService.baseURL}subvertical/getListOfAllSubVerticals`, Dto).subscribe(res => {
      this.subVerticalsList = res.responseObject.subVerticalList;
    });
    this.http.post(`${this.httpService.baseURL}branch/getListOfALLBranchTypes`, Dto).subscribe(res => {
      this.branchTypeList = res.responseObject.branchTypeList;
    });
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe(res => {
      this.stateList = res.responseObject.stateList;
    });
  }
  changeSubVertical(value) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      subVerticalMasterId: value
    };
    this.http.post(`${this.httpService.baseURL}subvertical/getSubVerticalWiseListOfAllProjects`, Dto).subscribe(res => {
      this.subVerticleProjectList = res.responseObject.projectList;
    });
  }
  // chnageANything(value): Promise<any> {
  //   let stateId = value;
  //   let Dto = {
  //     dataAccessDTO: this.httpService.dataAccessDTO,
  //     stateId: stateId
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe((res: any) => {
  //       this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
  //       resolve(res.responseObject);
  //     });
  //   })
  // }
  changeState(value) {
    let stateId = value;
    this.stateCode = this.stateList.find(x => x.stateMasterId == value)?.stateCode;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateId: stateId
    };
    this.http.post(`${this.httpService.baseURL}district/getListOfDistrictAndBlock`, Dto).subscribe(res => {
      this.stateWiseDistrictList = res.responseObject?.stateWiseDistrictList;
    });
  }
  changeDistrict(value) {
    this.blockList = this.stateWiseDistrictList.find(item => item.districtMasterId == value)?.blockList;
  }
  createForm() {
    this.branchForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      subVertical: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      subVerticleProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      branchType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      primaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[6789][0-9]{9}")])],
      primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      postOffice: [''],
      policeStation: [''],
      branchLandmark: [''],
      secondaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("[6789][0-9]{9}")])],
      secondaryEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]
    });
  }
  get f() {
    return this.branchForm.controls;
  }
  onSave() {
    console.log(this.branchForm);
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.data.editMode == false ? "0" : this.data.branchDetails.branchId,
      regionMasterId: this.branchForm.value.region,
      projectMasterId: this.branchForm.value.subVerticleProject,
      stateCode: this.stateCode,
      blockMasterId: this.branchForm.value.block,
      branchName: this.validationService.camelize(this.branchForm.value.branchName.trim()),
      branchTypeMasterId: this.branchForm.value.branchType,
      branchPincode: this.branchForm.value.pincode,
      branchActiveFlag: "Y",
      branchOpenDate: this.branchForm.value.startDate,
      branchAddressLine: this.branchForm.value.address,
      branchPostOffice: this.branchForm.value.postOffice,
      branchPoliceStation: this.branchForm.value.policeStation,
      branchlandMark: this.branchForm.value.branchLandmark,
      branchPhonePrimary: this.branchForm.value.primaryMobile,
      branchEmailPrimary: this.branchForm.value.primaryEmail,
      branchPhoneSecondary: this.branchForm.value.secondaryMobile,
      branchEmailSecondary: this.branchForm.value.secondaryEmail
    };
    if (this.branchForm.valid) {
      this.http.post(`${this.httpService.baseURL}branch/saveOrUpdate`, Dto).subscribe(res => {
        console.log(res);
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('Branch Created');
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000
    });
  }
  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
BranchSetupComponent.ɵfac = function BranchSetupComponent_Factory(t) {
  return new (t || BranchSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__.ValidationService));
};
BranchSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BranchSetupComponent,
  selectors: [["app-branch-setup"]],
  decls: 152,
  vars: 92,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "subVertical"], ["formControlName", "subVertical", "id", "subVertical", 1, "form-select", 3, "ngClass", "change"], ["for", "subVerticleProject"], ["formControlName", "subVerticleProject", 1, "form-select", 3, "ngClass"], ["for", "state"], ["formControlName", "state", 1, "form-select", 3, "ngClass", "change"], ["for", "district"], ["formControlName", "district", "id", "district", 1, "form-select", 3, "ngClass", "change"], ["for", "block"], ["formControlName", "block", 1, "form-select", 3, "ngClass"], ["for", "branchName"], ["type", "text", "placeholder", "Enter branchName Name", "formControlName", "branchName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass"], ["for", "branchType"], ["formControlName", "branchType", 1, "form-select", 3, "ngClass"], [1, "form-group", "col-md-3"], ["for", "startDate"], ["type", "date", "placeholder", "Enter startDate Name", "formControlName", "startDate", 1, "form-control", 3, "ngClass"], ["for", "address"], ["type", "text", "placeholder", "Enter address Name", "formControlName", "address", 1, "form-control", 3, "ngClass"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "formControlName", "pincode", "maxlength", "6", "minlength", "6", 1, "form-control", 3, "ngClass", "keypress"], ["for", "postOffice"], ["type", "text", "placeholder", "Enter postOffice Name", "formControlName", "postOffice", 1, "form-control", 3, "ngClass"], ["for", "policeStation"], ["type", "text", "placeholder", "Enter policeStation Name", "formControlName", "policeStation", 1, "form-control", 3, "ngClass"], ["for", "branchLandmark"], ["type", "text", "placeholder", "Enter branchLandmark Name", "formControlName", "branchLandmark", 1, "form-control", 3, "ngClass"], ["for", "primaryMobile"], ["type", "", "maxlength", "10", "placeholder", "Enter Mobile No", "formControlName", "primaryMobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "primaryEmail"], ["type", "email", "placeholder", "Enter Email", "formControlName", "primaryEmail", 1, "form-control", 3, "ngClass"], ["for", "secondaryMobile"], ["type", "", "maxlength", "10", "placeholder", "Enter secondary Mobile No", "formControlName", "secondaryMobile", 1, "form-control", 3, "ngClass", "keypress"], ["for", "secondaryEmail"], ["type", "email", "placeholder", "Enter secondary Email", "formControlName", "secondaryEmail", 1, "form-control"], ["mat-dialog-actions", ""], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function BranchSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create New Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchSetupComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Region :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 10)(15, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "-- Select Region --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BranchSetupComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, BranchSetupComponent_div_18_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Sub-Vertical :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BranchSetupComponent_Template_select_change_24_listener($event) {
        return ctx.changeSubVertical($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "-- Select Sub-Vertical --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, BranchSetupComponent_option_27_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BranchSetupComponent_div_28_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7)(30, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Project of selected Sub-Verticle :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "select", 17)(35, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "-- Select Project of selected Sub-Verticle --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, BranchSetupComponent_option_37_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, BranchSetupComponent_div_38_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6)(40, "div", 7)(41, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "State :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BranchSetupComponent_Template_select_change_45_listener($event) {
        return ctx.changeState($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "-- Select state --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, BranchSetupComponent_option_48_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, BranchSetupComponent_div_49_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7)(51, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "District :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BranchSetupComponent_Template_select_change_55_listener($event) {
        return ctx.changeDistrict($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "-- Select district --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, BranchSetupComponent_option_58_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, BranchSetupComponent_div_59_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 7)(61, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Block of the selected district :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "select", 23)(66, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "-- Select block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, BranchSetupComponent_option_68_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, BranchSetupComponent_div_69_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 7)(71, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Branch Name :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, BranchSetupComponent_div_76_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 7)(78, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Branch Type :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "select", 27)(83, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "-- Select branchType --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, BranchSetupComponent_option_85_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, BranchSetupComponent_div_86_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 6)(88, "div", 28)(89, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Start Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, BranchSetupComponent_div_94_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 7)(96, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Address :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, BranchSetupComponent_div_101_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 28)(103, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Pincode:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function BranchSetupComponent_Template_input_keypress_107_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, BranchSetupComponent_div_108_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 6)(110, "div", 7)(111, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Post Office (P.O.) of branch locality :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, BranchSetupComponent_div_114_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 7)(116, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Police Station (P.S.) of branch locality :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, BranchSetupComponent_div_119_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 7)(121, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Landmark of branch locality :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](124, BranchSetupComponent_div_124_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 6)(126, "div", 7)(127, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Primary Mobile No:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function BranchSetupComponent_Template_input_keypress_131_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, BranchSetupComponent_div_132_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 7)(134, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Primary Email:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](139, BranchSetupComponent_div_139_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 7)(141, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Phone number of contact person secondary:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function BranchSetupComponent_Template_input_keypress_143_listener($event) {
        return ctx.validationService.onlyInteger($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](144, BranchSetupComponent_div_144_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 7)(146, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Secondary Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 49)(150, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BranchSetupComponent_Template_button_click_150_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.branchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](42, _c0, ctx.f.region.invalid && ctx.f.region.touched, ctx.f.region.valid && (ctx.f.region.dirty || ctx.f.region.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.regionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.region.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](45, _c0, ctx.f.subVertical.invalid && ctx.f.subVertical.touched, ctx.f.subVertical.valid && (ctx.f.subVertical.dirty || ctx.f.subVertical.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subVerticalsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.subVertical.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](48, _c0, ctx.f.subVerticleProject.invalid && ctx.f.subVerticleProject.touched, ctx.f.subVerticleProject.valid && (ctx.f.subVerticleProject.dirty || ctx.f.subVerticleProject.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subVerticleProjectList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.subVerticleProject.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](51, _c0, ctx.f.state.invalid && ctx.f.state.touched, ctx.f.state.valid && (ctx.f.state.dirty || ctx.f.state.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.state.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](54, _c0, ctx.f.district.invalid && ctx.f.district.touched, ctx.f.district.valid && (ctx.f.district.dirty || ctx.f.district.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateWiseDistrictList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.district.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](57, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.blockList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](60, _c0, ctx.f.branchName.invalid && ctx.f.branchName.touched, ctx.f.branchName.valid && (ctx.f.branchName.dirty || ctx.f.branchName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.branchName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](63, _c0, ctx.f.branchType.invalid && ctx.f.branchType.touched, ctx.f.branchType.valid && (ctx.f.branchType.dirty || ctx.f.branchType.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.branchTypeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.branchType.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](66, _c0, ctx.f.startDate.invalid && ctx.f.startDate.touched, ctx.f.startDate.valid && (ctx.f.startDate.dirty || ctx.f.startDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.startDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](69, _c0, ctx.f.address.invalid && ctx.f.address.touched, ctx.f.address.valid && (ctx.f.address.dirty || ctx.f.address.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.address.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](72, _c0, ctx.f.pincode.invalid && ctx.f.pincode.touched, ctx.f.pincode.valid && (ctx.f.pincode.dirty || ctx.f.pincode.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.pincode.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](75, _c0, ctx.f.postOffice.invalid && ctx.f.postOffice.touched, ctx.f.postOffice.valid && (ctx.f.postOffice.dirty || ctx.f.postOffice.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.postOffice.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](78, _c0, ctx.f.policeStation.invalid && ctx.f.policeStation.touched, ctx.f.policeStation.valid && (ctx.f.policeStation.dirty || ctx.f.policeStation.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.policeStation.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](81, _c0, ctx.f.branchLandmark.invalid && ctx.f.branchLandmark.touched, ctx.f.branchLandmark.valid && (ctx.f.branchLandmark.dirty || ctx.f.branchLandmark.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.branchLandmark.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](84, _c0, ctx.f.primaryMobile.invalid && ctx.f.primaryMobile.touched, ctx.f.primaryMobile.valid && (ctx.f.primaryMobile.dirty || ctx.f.primaryMobile.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.primaryMobile.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](87, _c0, ctx.f.primaryEmail.invalid && ctx.f.primaryEmail.touched, ctx.f.primaryEmail.valid && (ctx.f.primaryEmail.dirty || ctx.f.primaryEmail.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.primaryEmail.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](90, _c1, ctx.f.secondaryMobile.invalid && ctx.f.secondaryMobile.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.secondaryMobile.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n  }\r\n  .dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n  }\r\n    .mat-dialog-container {\r\n    padding: 12px 17px;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWdpb24tYnJhbmNoLXNldHVwL2JyYW5jaC1zZXR1cC9icmFuY2gtc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZGlhbG9nLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTRweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 82955:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/region-branch-setup/region-branch-home/region-branch-home.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionBranchHomeComponent": () => (/* binding */ RegionBranchHomeComponent)
/* harmony export */ });
/* harmony import */ var _branch_setup_branch_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../branch-setup/branch-setup.component */ 16261);
/* harmony import */ var _region_setup_region_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../region-setup/region-setup.component */ 45682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);














function RegionBranchHomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openCreateBranch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create Branch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.openCreateRegion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Create Region ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function RegionBranchHomeComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", state_r6.stateMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r6.stateName, " ");
  }
}
function RegionBranchHomeComponent_tr_39_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", branch_r21.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r21.branchName.length > 15 ? branch_r21.branchName.slice(0, 14) + "..." : branch_r21.branchName, "");
  }
}
function RegionBranchHomeComponent_tr_39_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RegionBranchHomeComponent_tr_39_ul_6_li_1_Template, 2, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r21 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", branch_r21.stateMasterId == ctx_r9.stateMasterId || ctx_r9.stateMasterId == undefined);
  }
}
function RegionBranchHomeComponent_tr_39_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", branch_r24.districtName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r24.districtName.length > 15 ? branch_r24.districtName.slice(0, 14) + "..." : branch_r24.districtName, "");
  }
}
function RegionBranchHomeComponent_tr_39_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RegionBranchHomeComponent_tr_39_ul_8_li_1_Template, 2, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r24 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", branch_r24.stateMasterId == ctx_r10.stateMasterId || ctx_r10.stateMasterId == undefined);
  }
}
function RegionBranchHomeComponent_tr_39_ul_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", branch_r27.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", branch_r27.projectCode, "");
  }
}
function RegionBranchHomeComponent_tr_39_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RegionBranchHomeComponent_tr_39_ul_10_li_1_Template, 2, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r27 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", branch_r27.stateMasterId == ctx_r11.stateMasterId || ctx_r11.stateMasterId == undefined);
  }
}
function RegionBranchHomeComponent_tr_39_ul_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](branch_r30.branchActiveFlag == "Y" ? "Active" : "Phased out");
  }
}
function RegionBranchHomeComponent_tr_39_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RegionBranchHomeComponent_tr_39_ul_12_li_1_Template, 2, 1, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r30 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", branch_r30.stateMasterId == ctx_r12.stateMasterId || ctx_r12.stateMasterId == undefined);
  }
}
function RegionBranchHomeComponent_tr_39_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r14);
  }
}
function RegionBranchHomeComponent_tr_39_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_tr_39_button_23_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const branch_r33 = restoredCtx.$implicit;
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.openEditBranch(item_r7.regionMasterId, branch_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Edit ", branch_r33.branchName, "");
  }
}
function RegionBranchHomeComponent_tr_39_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 37);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r18);
  }
}
function RegionBranchHomeComponent_tr_39_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_tr_39_button_34_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const branch_r37 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.deleteBranch(branch_r37.branchId, branch_r37.branchName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Delete ", branch_r37.branchName, "");
  }
}
function RegionBranchHomeComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RegionBranchHomeComponent_tr_39_ul_6_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, RegionBranchHomeComponent_tr_39_ul_8_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RegionBranchHomeComponent_tr_39_ul_10_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegionBranchHomeComponent_tr_39_ul_12_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RegionBranchHomeComponent_tr_39_i_14_Template, 1, 1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-menu", null, 25)(17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_tr_39_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.openEditRegion(item_r7.regionMasterId, item_r7.regionName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Edit Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-menu", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RegionBranchHomeComponent_tr_39_button_23_Template, 2, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RegionBranchHomeComponent_tr_39_i_25_Template, 1, 1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-menu", null, 31)(28, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegionBranchHomeComponent_tr_39_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.deleteRegion(item_r7.regionMasterId, item_r7.regionName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Delete Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-menu", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, RegionBranchHomeComponent_tr_39_button_34_Template, 2, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r7.regionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.updateAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Edit ", item_r7.regionName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.deleteAccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Delete ", item_r7.regionName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.branchList);
  }
}
class RegionBranchHomeComponent {
  constructor(fb, httpService, http, router, toaster, confirmationDialogService, dialog, sidebarService) {
    this.fb = fb;
    this.httpService = httpService;
    this.http = http;
    this.router = router;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.dialog = dialog;
    this.sidebarService = sidebarService;
    this.stateList = [];
    this.regionAndBranchList = [];
    this.loader = true;
  }
  ngOnInit() {
    this.createForm();
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.http.post(`${this.httpService.baseURL}state/getListOfAllStates`, Dto).subscribe(res => {
      this.stateList = res.responseObject.stateList;
      this.stateMasterId = res.responseObject.stateList[0].stateMasterId;
      this.stateSelectForm.get('state').patchValue(this.stateMasterId);
      this.getRegionAndBranchList(this.stateMasterId);
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 29 || item.subFunctionMasterId == 30 || item.subFunctionMasterId == 31 || item.subFunctionMasterId == 32)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/region-branch']) : this.router.navigate(['/error']);
    this.createAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 29 || item.subFunctionMasterId == 30 || item.subFunctionMasterId == 31 || item.subFunctionMasterId == 32)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 29 || item.subFunctionMasterId == 30 || item.subFunctionMasterId == 31 || item.subFunctionMasterId == 32)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteAccess = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Branch Setup')?.subMenuDetailList.find(item => item.subFunctionMasterId == 29 || item.subFunctionMasterId == 30 || item.subFunctionMasterId == 31 || item.subFunctionMasterId == 32)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  openCreateRegion() {
    const dialogRef = this.dialog.open(_region_setup_region_setup_component__WEBPACK_IMPORTED_MODULE_1__.RegionSetupComponent, {
      width: '500px',
      height: '280px',
      data: {
        editMode: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }
  openCreateBranch() {
    const dialogRef = this.dialog.open(_branch_setup_branch_setup_component__WEBPACK_IMPORTED_MODULE_0__.BranchSetupComponent, {
      width: '95vw',
      maxWidth: '100vw',
      data: {
        editMode: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }
  openEditRegion(regionMasterId, regionName) {
    const dialogRef = this.dialog.open(_region_setup_region_setup_component__WEBPACK_IMPORTED_MODULE_1__.RegionSetupComponent, {
      width: '500px',
      height: '280px',
      data: {
        editMode: true,
        regionId: regionMasterId,
        regionName: regionName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }
  openEditBranch(regionMasterId, branch) {
    const dialogRef = this.dialog.open(_branch_setup_branch_setup_component__WEBPACK_IMPORTED_MODULE_0__.BranchSetupComponent, {
      width: '95vw',
      maxWidth: '100vw',
      data: {
        editMode: true,
        regionMasterId: regionMasterId,
        branchDetails: branch
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRegionAndBranchList(this.stateMasterId);
    });
  }
  createForm() {
    this.stateSelectForm = this.fb.group({
      state: ['']
    });
  }
  get f() {
    return this.stateSelectForm.controls;
  }
  changeState(value) {
    this.stateMasterId = value;
    this.getRegionAndBranchList(this.stateMasterId);
  }
  getRegionAndBranchList(stateMasterId) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      stateMasterId: stateMasterId
    };
    this.loader = false;
    this.http.post(`${this.httpService.baseURL}region/getStateWiseRegionAndBranchList`, Dto).subscribe(res => {
      this.regionAndBranchList = res.responseObject.regionbranchlist;
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });
  }
  deleteRegion(regionMasterId, regionName) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionMasterId: regionMasterId
    };
    if (this.regionAndBranchList.find(x => x.regionMasterId == regionMasterId)?.branchList.length != 0) {
      this.showError('Delete all branch');
    } else {
      this.confirmationDialogService.confirm('', `Do you want to delete ${regionName} ?`).then(() => {
        this.http.post(`${this.httpService.baseURL}region/deleteRegion`, Dto).subscribe(res => {
          this.showSuccess('Success');
          this.getRegionAndBranchList(this.stateMasterId);
        });
      }).catch(() => '');
    }
  }
  deleteBranch(branchId, branchName) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.confirmationDialogService.confirm('', `Do you want to delete ${branchName} ?`).then(() => {
      this.http.post(`${this.httpService.baseURL}branch/deleteBranch`, Dto).subscribe(res => {
        if (res.status == true) {
          this.showSuccess(res.message);
          this.getRegionAndBranchList(this.stateMasterId);
        } else {
          this.showError(res.message);
        }
      });
    }).catch(() => '');
  }
  showSuccess(message) {
    this.toaster.success(message, 'Deleted', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
RegionBranchHomeComponent.ɵfac = function RegionBranchHomeComponent_Factory(t) {
  return new (t || RegionBranchHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService));
};
RegionBranchHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RegionBranchHomeComponent,
  selectors: [["app-region-branch-home"]],
  decls: 40,
  vars: 5,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], ["class", "add_button", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md-4"], ["for", "state"], ["formControlName", "state", 1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [4, "ngFor", "ngForOf"], [1, "add_button"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-code-branch"], [1, "fa", "fa-map-marker"], [3, "value"], ["class", "fa fa-ellipsis-v fa-lg", "aria-hidden", "true", "mat-icon-button", "", "title", "Edit", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "fas fa-trash", "aria-hidden", "true", "mat-icon-button", "", "title", "Delete", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu1", "matMenu"], ["vertebrates1", "matMenu"], [3, "title", 4, "ngIf"], [3, "title"], [4, "ngIf"], ["aria-hidden", "true", "mat-icon-button", "", "title", "Edit", 1, "fa", "fa-ellipsis-v", "fa-lg", 3, "matMenuTriggerFor"], ["aria-hidden", "true", "mat-icon-button", "", "title", "Delete", 1, "fas", "fa-trash", 3, "matMenuTriggerFor"]],
  template: function RegionBranchHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Region Branch Setup");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, RegionBranchHomeComponent_div_8_Template, 8, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 8)(10, "div", 2)(11, "div", 9)(12, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Select State :");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RegionBranchHomeComponent_Template_select_change_14_listener($event) {
        return ctx.changeState($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "-- Select state --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, RegionBranchHomeComponent_option_17_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "table", 17)(22, "thead")(23, "tr")(24, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "SL No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Region Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Branch Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "District");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, RegionBranchHomeComponent_tr_39_Template, 35, 14, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.createAccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.stateSelectForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.stateList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.regionAndBranchList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".add_button[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n.edit_button[_ngcontent-%COMP%]{\r\n    border: 1px;\r\n    background-color: #f2f2f2;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 16px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWdpb24tYnJhbmNoLXNldHVwL3JlZ2lvbi1icmFuY2gtaG9tZS9yZWdpb24tYnJhbmNoLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4uZWRpdF9idXR0b257XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 89243:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/region-branch-setup/region-branch-setup-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionBranchSetupRoutingModule": () => (/* binding */ RegionBranchSetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _region_branch_home_region_branch_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-branch-home/region-branch-home.component */ 82955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _region_branch_home_region_branch_home_component__WEBPACK_IMPORTED_MODULE_0__.RegionBranchHomeComponent
}];
class RegionBranchSetupRoutingModule {}
RegionBranchSetupRoutingModule.ɵfac = function RegionBranchSetupRoutingModule_Factory(t) {
  return new (t || RegionBranchSetupRoutingModule)();
};
RegionBranchSetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RegionBranchSetupRoutingModule
});
RegionBranchSetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegionBranchSetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85857:
/*!***************************************************************************!*\
  !*** ./src/app/modules/region-branch-setup/region-branch-setup.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionBranchSetupModule": () => (/* binding */ RegionBranchSetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _region_branch_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region-branch-setup-routing.module */ 89243);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _region_branch_home_region_branch_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region-branch-home/region-branch-home.component */ 82955);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _region_setup_region_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region-setup/region-setup.component */ 45682);
/* harmony import */ var _branch_setup_branch_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-setup/branch-setup.component */ 16261);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);













class RegionBranchSetupModule {}
RegionBranchSetupModule.ɵfac = function RegionBranchSetupModule_Factory(t) {
  return new (t || RegionBranchSetupModule)();
};
RegionBranchSetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: RegionBranchSetupModule
});
RegionBranchSetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _region_branch_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegionBranchSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RegionBranchSetupModule, {
    declarations: [_region_branch_home_region_branch_home_component__WEBPACK_IMPORTED_MODULE_1__.RegionBranchHomeComponent, _region_setup_region_setup_component__WEBPACK_IMPORTED_MODULE_2__.RegionSetupComponent, _branch_setup_branch_setup_component__WEBPACK_IMPORTED_MODULE_3__.BranchSetupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _region_branch_setup_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegionBranchSetupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule]
  });
})();

/***/ }),

/***/ 45682:
/*!************************************************************************************!*\
  !*** ./src/app/modules/region-branch-setup/region-setup/region-setup.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionSetupComponent": () => (/* binding */ RegionSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);










function RegionSetupComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Region Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegionSetupComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegionSetupComponent_div_14_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.regionName.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class RegionSetupComponent {
  constructor(fb, http, toaster, httpService, validationService, data, dialogRef) {
    this.fb = fb;
    this.http = http;
    this.toaster = toaster;
    this.httpService = httpService;
    this.validationService = validationService;
    this.data = data;
    this.dialogRef = dialogRef;
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.createForm();
    if (this.data.editMode == false) {
      this.regionForm.reset();
    } else {
      this.regionForm.patchValue({
        regionName: this.data.regionName
      });
    }
  }
  createForm() {
    this.regionForm = this.fb.group({
      regionName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  get f() {
    return this.regionForm.controls;
  }
  onSave() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionMasterId: this.data.editMode == false ? "0" : this.data.regionId,
      regionName: this.validationService.camelize(this.regionForm.value.regionName.trim())
    };
    console.log(Dto);
    if (this.regionForm.valid) {
      this.http.post(`${this.httpService.baseURL}region/saveOrUpdate`, Dto).subscribe(res => {
        console.log(res);
        if (res.status) {
          this.dialogRef.close();
          this.data.editMode == false ? this.showSuccess('Region Created') : this.showSuccess('Region Updated');
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Success', {
      timeOut: 3000
    });
  }
  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
RegionSetupComponent.ɵfac = function RegionSetupComponent_Factory(t) {
  return new (t || RegionSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
};
RegionSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RegionSetupComponent,
  selectors: [["app-region-setup"]],
  decls: 19,
  vars: 6,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Region Name", "formControlName", "regionName", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function RegionSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create New Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionSetupComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Region Name :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegionSetupComponent_div_14_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegionSetupComponent_Template_button_click_17_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.regionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.f.regionName.invalid && ctx.f.regionName.touched, ctx.f.regionName.valid && (ctx.f.regionName.dirty || ctx.f.regionName.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.regionName.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  .dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n  }\r\n  .dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n  }\r\n    .mat-dialog-container {\r\n    padding: 12px 17px;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZWdpb24tYnJhbmNoLXNldHVwL3JlZ2lvbi1zZXR1cC9yZWdpb24tc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZGlhbG9nLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTRweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_region-branch-setup_region-branch-setup_module_ts.js.map