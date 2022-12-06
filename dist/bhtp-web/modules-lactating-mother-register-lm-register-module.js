(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-lactating-mother-register-lm-register-module"],{

/***/ "+93P":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/add-lm-child/add-lm-child.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddLmChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLmChildComponent", function() { return AddLmChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");













function AddLmChildComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Birth Weight should be 0 to 9 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_30_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.birthWeight.errors.notInBirthWeightRange);
} }
function AddLmChildComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Visit Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_43_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.firstVisitDate.errors.required);
} }
function AddLmChildComponent_div_44_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Second Visit Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_44_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_44_div_5_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.f.secondVisitDate.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function AddLmChildComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Second visit Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddLmChildComponent_div_44_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.firstVisit)("max", ctx_r2.maxFirstVisit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r2.f.secondVisitDate.invalid && ctx_r2.f.secondVisitDate.touched, ctx_r2.f.secondVisitDate.valid && (ctx_r2.f.secondVisitDate.dirty || ctx_r2.f.secondVisitDate.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.secondVisitDate.errors);
} }
function AddLmChildComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_72_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.muacDate6.errors.required);
} }
function AddLmChildComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_78_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.height6month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_84_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.weight6month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_92_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_92_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_92_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_92_div_2_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.muac6month.errors == null ? null : ctx_r6.f.muac6month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.muac6month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_136_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_136_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.muacDate12.errors.required);
} }
function AddLmChildComponent_div_142_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_142_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.height12month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_148_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_148_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.weight12month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_156_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_156_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_156_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_156_div_2_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.muac12month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.muac12month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_184_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_184_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.muacDate18.errors.required);
} }
function AddLmChildComponent_div_190_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_190_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.height18month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_196_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_196_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.weight18month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_204_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_204_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_204_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_204_div_2_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.muac18month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.muac18month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_248_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_248_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.f.muacDate24.errors.required);
} }
function AddLmChildComponent_div_254_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Height should be 10 to 180 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_254_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_254_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.f.height24month.errors.notInHeightRange);
} }
function AddLmChildComponent_div_260_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight should be 0 to 25 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_260_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f.weight24month.errors.notInWeightRange);
} }
function AddLmChildComponent_div_268_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MUAC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_268_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLmChildComponent_div_268_div_1_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddLmChildComponent_div_268_div_2_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.muac24month.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.muac24month.errors.notInMuacRange);
} }
function AddLmChildComponent_div_284_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date of Death:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_285_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comment:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLmChildComponent_div_288_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLmChildComponent_div_288_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddLmChildComponent {
    constructor(validationService, fb, httpService, toaster, http, data, dialogRef) {
        this.validationService = validationService;
        this.fb = fb;
        this.httpService = httpService;
        this.toaster = toaster;
        this.http = http;
        this.data = data;
        this.dialogRef = dialogRef;
        this.childMuacList = [];
        this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
        this.enableSecondVisitDate = false;
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        var _a, _b;
        this.childDob = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.dob;
        let after6date = moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(6, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
        if (after6date > this.today) {
            this.maxFirstVisit = this.today;
        }
        else {
            this.maxFirstVisit = after6date;
        }
        this.muacRec6MinmaxDate();
        this.muacRec12MinmaxDate();
        this.muacRec18MinmaxDate();
        this.muacRec24MinmaxDate();
        this.editMode = this.data.editMode;
        this.panelOpenState = false;
        this.lmMuacList();
        this.createForm();
        this.disableForm();
        if (this.data.viewMode == true) {
            this.viewMode = this.data.viewMode;
            this.lmMuacList();
            this.childBirthForm.disable();
        }
    }
    ngAfterContentInit() {
        // this.childBirthForm.controls['secondVisitDate'].disable();
    }
    /* get the childWiselactatingmotherMUACList &
      set the value in form */
    lmMuacList() {
        var _a, _b;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            childId: (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.childDetailId
        };
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27;
            this.childMuacList = res === null || res === void 0 ? void 0 : res.responseObject;
            this.muacRegisterId6month = (_a = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _a === void 0 ? void 0 : _a.muacRegisterId;
            this.muacRegisterId12month = (_b = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _b === void 0 ? void 0 : _b.muacRegisterId;
            this.muacRegisterId18month = (_c = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _c === void 0 ? void 0 : _c.muacRegisterId;
            this.muacRegisterId24month = (_d = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _d === void 0 ? void 0 : _d.muacRegisterId;
            if (this.data.editMode == false) {
                this.childBirthForm.reset();
            }
            else {
                this.restrictSecondDate((_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.childWiselactatingmotherList) === null || _f === void 0 ? void 0 : _f.childBasicStatusDto.firstVisitDate);
                this.childBirthForm.patchValue({
                    place: (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.childWiselactatingmotherList) === null || _h === void 0 ? void 0 : _h.childBasicStatusDto.placeOfDelivery,
                    birthWeight: (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.childWiselactatingmotherList) === null || _k === void 0 ? void 0 : _k.childBasicStatusDto.birthWeight,
                    primaryImmunizationUpto12Completed: (_o = (_m = (_l = this.data) === null || _l === void 0 ? void 0 : _l.childWiselactatingmotherList) === null || _m === void 0 ? void 0 : _m.childBasicStatusDto) === null || _o === void 0 ? void 0 : _o.primaryImmunizationUpto12Completed,
                    primaryImmunizationUpto24Completed: (_r = (_q = (_p = this.data) === null || _p === void 0 ? void 0 : _p.childWiselactatingmotherList) === null || _q === void 0 ? void 0 : _q.childBasicStatusDto) === null || _r === void 0 ? void 0 : _r.primaryImmunizationUpto24Completed,
                    ebfUpto6Complete: (_t = (_s = this.data) === null || _s === void 0 ? void 0 : _s.childWiselactatingmotherList) === null || _t === void 0 ? void 0 : _t.childBasicStatusDto.ebfUpto6Complete,
                    ebfUpto12Complete: (_v = (_u = this.data) === null || _u === void 0 ? void 0 : _u.childWiselactatingmotherList) === null || _v === void 0 ? void 0 : _v.childBasicStatusDto.ebfUpto12Complete,
                    ebfUpto18Complete: (_x = (_w = this.data) === null || _w === void 0 ? void 0 : _w.childWiselactatingmotherList) === null || _x === void 0 ? void 0 : _x.childBasicStatusDto.ebfUpto18Complete,
                    ebfUpto24Complete: (_z = (_y = this.data) === null || _y === void 0 ? void 0 : _y.childWiselactatingmotherList) === null || _z === void 0 ? void 0 : _z.childBasicStatusDto.ebfUpto24Complete,
                    muacDate6: (_0 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _0 === void 0 ? void 0 : _0.muacRecordDate,
                    muacDate12: (_1 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _1 === void 0 ? void 0 : _1.muacRecordDate,
                    muacDate18: (_2 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _2 === void 0 ? void 0 : _2.muacRecordDate,
                    muacDate24: (_3 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _3 === void 0 ? void 0 : _3.muacRecordDate,
                    height6month: parseInt((_4 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _4 === void 0 ? void 0 : _4.height) == 0 ? null : (_5 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _5 === void 0 ? void 0 : _5.height,
                    height12month: parseInt((_6 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _6 === void 0 ? void 0 : _6.height) == 0 ? null : (_7 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _7 === void 0 ? void 0 : _7.height,
                    height18month: parseInt((_8 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _8 === void 0 ? void 0 : _8.height) == 0 ? null : (_9 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _9 === void 0 ? void 0 : _9.height,
                    height24month: parseInt((_10 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _10 === void 0 ? void 0 : _10.height) == 0 ? null : (_11 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _11 === void 0 ? void 0 : _11.height,
                    weight6month: parseInt((_12 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _12 === void 0 ? void 0 : _12.weight) == 0 ? null : (_13 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _13 === void 0 ? void 0 : _13.weight,
                    weight12month: parseInt((_14 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _14 === void 0 ? void 0 : _14.weight) == 0 ? null : (_15 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _15 === void 0 ? void 0 : _15.weight,
                    weight18month: parseInt((_16 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _16 === void 0 ? void 0 : _16.weight) == 0 ? null : (_17 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _17 === void 0 ? void 0 : _17.weight,
                    weight24month: parseInt((_18 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _18 === void 0 ? void 0 : _18.weight) == 0 ? null : (_19 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _19 === void 0 ? void 0 : _19.weight,
                    muac6month: (_20 = this.childMuacList.find(month => month.muacForMonth == "6")) === null || _20 === void 0 ? void 0 : _20.muac,
                    muac12month: (_21 = this.childMuacList.find(month => month.muacForMonth == "12")) === null || _21 === void 0 ? void 0 : _21.muac,
                    muac18month: (_22 = this.childMuacList.find(month => month.muacForMonth == "18")) === null || _22 === void 0 ? void 0 : _22.muac,
                    muac24month: (_23 = this.childMuacList.find(month => month.muacForMonth == "24")) === null || _23 === void 0 ? void 0 : _23.muac,
                    firstVisitDate: (_25 = (_24 = this.data) === null || _24 === void 0 ? void 0 : _24.childWiselactatingmotherList) === null || _25 === void 0 ? void 0 : _25.childBasicStatusDto.firstVisitDate,
                    secondVisitDate: (_27 = (_26 = this.data) === null || _26 === void 0 ? void 0 : _26.childWiselactatingmotherList) === null || _27 === void 0 ? void 0 : _27.childBasicStatusDto.secondVisitDate,
                });
            }
        });
    }
    /* Disable the form field
    depending on child age */
    disableForm() {
        var _a, _b;
        let dateString = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.childWiselactatingmotherList) === null || _b === void 0 ? void 0 : _b.childAge;
        let y = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("year");
        let year = parseInt(dateString === null || dateString === void 0 ? void 0 : dateString.slice(0, y - 1));
        let m = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("r");
        let m1 = dateString === null || dateString === void 0 ? void 0 : dateString.indexOf("month");
        let month = parseInt(dateString === null || dateString === void 0 ? void 0 : dateString.slice(m + 2, m1 - 1));
        if (year <= 0 && month < 6) {
            this.after6m = true;
            this.after12m = true;
            this.after18m = true;
            this.after24m = true;
        }
        else if (year <= 0 && month >= 6 && month <= 12) {
            this.after6m = false;
            this.after12m = true;
            this.after18m = true;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 1 && year < 2 && month < 6) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = true;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 1 && year < 2 && month >= 6 && month <= 12) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = false;
            this.after24m = true;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac18month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate18').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else if (year >= 2) {
            this.after6m = false;
            this.after12m = false;
            this.after18m = false;
            this.after24m = false;
            this.childBirthForm.get('muac6month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac12month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac18month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muac24month').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.muacRange]));
            this.childBirthForm.get('muacDate6').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate12').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate18').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.childBirthForm.get('muacDate24').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
    }
    createForm() {
        this.childBirthForm = this.fb.group({
            place: [null],
            birthWeight: ['', this.birthWeightRange],
            primaryImmunizationUpto12Completed: [null],
            primaryImmunizationUpto24Completed: [null],
            ebfUpto6Complete: [null],
            ebfUpto12Complete: [null],
            ebfUpto18Complete: [null],
            ebfUpto24Complete: [null],
            muacDate6: [''],
            muacDate12: [''],
            muacDate18: [''],
            muacDate24: [''],
            height6month: ['', this.heightRange],
            height12month: ['', this.heightRange],
            height18month: ['', this.heightRange],
            height24month: ['', this.heightRange],
            weight6month: ['', this.weightRange],
            weight12month: ['', this.weightRange],
            weight18month: ['', this.weightRange],
            weight24month: ['', this.weightRange],
            muac6month: [''],
            muac12month: [''],
            muac18month: [''],
            muac24month: [''],
            firstVisitDate: [''],
            secondVisitDate: [''],
            checkChildDeath: [null],
            deathOfChildDate: [null],
            comment: [''],
        });
    }
    get f() {
        return this.childBirthForm.controls;
    }
    /* Restrict the second date depending on First visit date */
    restrictSecondDate(date) {
        this.firstVisit = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(1, 'days').format('YYYY-MM-DD');
        this.childBirthForm.controls.secondVisitDate.setValue(null);
        this.enableSecondVisitDate = true;
    }
    /* make child death comment required
    depending on checkChildDeath field value */
    checkChildDeath(value) {
        this.childDeath = value;
        if (this.childBirthForm.get('checkChildDeath').value == 'Y') {
            this.childBirthForm.get('comment').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        else {
            this.childBirthForm.get('comment').clearAsyncValidators();
        }
    }
    /* MUAC range between 1 to 30, validation */
    muacRange(controls) {
        if (controls.value >= 1 && controls.value <= 30) {
            return null;
        }
        return { 'notInMuacRange': true };
    }
    /* weight range between 0 to 25, validation */
    weightRange(controls) {
        if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
            return null;
        }
        return { 'notInWeightRange': true };
    }
    /* Birth Weight range between 0 to 9, validation */
    birthWeightRange(controls) {
        if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
            return null;
        }
        return { 'notInBirthWeightRange': true };
    }
    /* Height range between 10 to 180, validation */
    heightRange(controls) {
        if (controls.value >= 10 && controls.value <= 180 || controls.value == null || controls.value == '') {
            return null;
        }
        return { 'notInHeightRange': true };
    }
    /* Muac record for 6 month min max date set */
    muacRec6MinmaxDate() {
        this.muac6MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(6, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(12, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac6MaxDate = this.today;
        }
        else {
            this.muac6MaxDate = value;
        }
    }
    /* Muac record for 12 month min max date set */
    muacRec12MinmaxDate() {
        this.muac12MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(12, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(18, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac12MaxDate = this.today;
        }
        else {
            this.muac12MaxDate = value;
        }
    }
    /* Muac record for 18 month min max date set */
    muacRec18MinmaxDate() {
        this.muac18MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(18, 'M').format('YYYY-MM-DD');
        let value = moment__WEBPACK_IMPORTED_MODULE_3__(moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(24, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
        if (value > this.today) {
            this.muac18MaxDate = this.today;
        }
        else {
            this.muac18MaxDate = value;
        }
    }
    /* Muac record for 24 month min max date set */
    muacRec24MinmaxDate() {
        this.muac24MinDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.childDob).add(24, 'M').format('YYYY-MM-DD');
        this.muac24MaxDate = this.today;
    }
    /* Depending on condition form is Save or Edit */
    onSave() {
        let muacDate = ['muacDate6', 'muacDate12', 'muacDate18', 'muacDate24'];
        let muac = ['muac6month', 'muac12month', 'muac18month', 'muac24month'];
        let range = (this.after24m == false) ? 3 : (this.after18m == false) ? 2 : (this.after12m == false) ? 1 : (this.after6m == false) ? 0 : -1;
        if (range >= 0) {
            for (let i = 0; i <= range; i++) {
                if (!this.childBirthForm.get(muacDate[i]).value) {
                    let x = muacDate[i].length == 9 ? -1 : -2;
                    this.showError(`Enter record date for after ${muacDate[i].slice(x)} months`);
                    return;
                }
                if (!this.childBirthForm.get(muac[i]).value) {
                    let x = muac[i].length == 10 ? 5 : 6;
                    this.showError(`Enter muac value for after ${muac[i].slice(4, x)} months`);
                    return;
                }
            }
        }
        if (this.childBirthForm.valid) {
            console.log(this.childBirthForm);
            if (this.data.editMode == false) {
                let Dto = {
                    dataAccessDTO: this.httpService.dataAccessDTO,
                    childBasicStatusDto: {
                        childId: this.data.childWiselactatingmotherList.childDetailId,
                        placeOfDelivery: this.childBirthForm.value.place,
                        birthWeight: this.childBirthForm.value.birthWeight,
                        firstVisitDate: this.childBirthForm.value.firstVisitDate,
                        secondVisitDate: this.childBirthForm.value.secondVisitDate,
                        ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
                        primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
                        ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
                        ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
                        primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
                        ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
                    },
                    muacDataList: [{
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height6month == null ? "0" : Math.trunc(this.childBirthForm.value.height6month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight6month == null ? "0" : Math.trunc(this.childBirthForm.value.weight6month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac6month == null ? "0" : Math.trunc(this.childBirthForm.value.muac6month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "6",
                            muacRecordDate: this.childBirthForm.value.muacDate6
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "12",
                            muacRecordDate: this.childBirthForm.value.muacDate12
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "18",
                            muacRecordDate: this.childBirthForm.value.muacDate18
                        },
                        {
                            muacRegisterId: 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "24",
                            muacRecordDate: this.childBirthForm.value.muacDate24
                        }
                    ],
                    deadChildRegisterDto: {
                        deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
                        comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
                    }
                };
                console.log(Dto, 'reqAdd');
                this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
                    console.log(res, 'responseAdd');
                    if (res.status) {
                        this.showSuccess(res.message);
                        this.dialogRef.close();
                    }
                    else {
                        this.showError(res.message);
                    }
                });
            }
            else {
                let Dto = {
                    dataAccessDTO: this.httpService.dataAccessDTO,
                    childBasicStatusDto: {
                        childId: this.data.childWiselactatingmotherList.childDetailId,
                        placeOfDelivery: this.childBirthForm.value.place,
                        birthWeight: this.childBirthForm.value.birthWeight,
                        firstVisitDate: this.childBirthForm.value.firstVisitDate,
                        secondVisitDate: this.childBirthForm.value.secondVisitDate,
                        ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
                        primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
                        ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
                        ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
                        primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
                        ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
                    },
                    muacDataList: [{
                            muacRegisterId: this.muacRegisterId6month ? this.muacRegisterId6month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height6month == null ? "0" : Math.trunc(this.childBirthForm.value.height6month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight6month == null ? "0" : Math.trunc(this.childBirthForm.value.weight6month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac6month == null ? "0" : Math.trunc(this.childBirthForm.value.muac6month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "6",
                            muacRecordDate: this.childBirthForm.value.muacDate6
                        },
                        {
                            muacRegisterId: this.muacRegisterId12month ? this.muacRegisterId12month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "12",
                            muacRecordDate: this.childBirthForm.value.muacDate12
                        },
                        {
                            muacRegisterId: this.muacRegisterId18month ? this.muacRegisterId18month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "18",
                            muacRecordDate: this.childBirthForm.value.muacDate18
                        },
                        {
                            muacRegisterId: this.muacRegisterId24month ? this.muacRegisterId24month : 0,
                            childId: this.data.childWiselactatingmotherList.childDetailId,
                            height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
                            weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
                            muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
                            active_flag: "A",
                            muacForMonth: "24",
                            muacRecordDate: this.childBirthForm.value.muacDate24
                        }
                    ],
                    deadChildRegisterDto: {
                        deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
                        comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
                    }
                };
                console.log(Dto, 'reqEdit');
                this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res) => {
                    console.log(res, 'responseedit');
                    if (res.status) {
                        this.showSuccess(res.message);
                        this.dialogRef.close();
                    }
                    else {
                        this.showError(res.message);
                    }
                });
            }
        }
        else {
            this.showError('Form is invalid');
        }
    }
    /* Close the dialog pop-up */
    closeDialog() {
        this.dialogRef.close();
    }
    /* Show success message toaster */
    showSuccess(message) {
        this.toaster.success(message, 'Child Information Save', {
            timeOut: 3000,
        });
    }
    /* Show Error message toaster */
    showError(message) {
        this.toaster.error(message, 'Error', {
            timeOut: 3000,
        });
    }
    restrictTypeOfDate() {
        return false;
    }
    heightKeyup(e) {
        var t = e.target.value;
        e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
        console.log(t);
    }
    weightKeyup(e) {
        var t = e.target.value;
        e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4)) : t;
        console.log(t);
    }
    muacKeyup(e) {
        var t = e.target.value;
        e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
        console.log(t);
    }
}
AddLmChildComponent.ɵfac = function AddLmChildComponent_Factory(t) { return new (t || AddLmChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
AddLmChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddLmChildComponent, selectors: [["app-add-lm-child"]], decls: 289, vars: 109, consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-4"], ["type", "radio", "value", "Home", "formControlName", "place"], ["type", "radio", "value", "Institution", "formControlName", "place"], [1, "form-group", "col-md"], ["for", "birthWeight"], ["type", "text", "placeholder", "Enter weight", "formControlName", "birthWeight", "maxlength", "5", 1, "form-control", 3, "ngClass", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "firstVisitDate"], ["type", "date", "formControlName", "firstVisitDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "ngClass", "change"], ["class", "form-group col-md-4", 4, "ngIf"], [3, "disabled", "opened", "closed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto6Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto6Complete"], ["for", "muacDate6"], [1, "text-danger"], ["type", "date", "formControlName", "muacDate6", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height6month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height6month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "weight6month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight6month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "muac6month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac6month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["type", "radio", "value", "Y", "formControlName", "primaryImmunizationUpto12Completed"], ["type", "radio", "value", "N", "formControlName", "primaryImmunizationUpto12Completed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto12Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto12Complete"], ["for", "muacDate12"], ["type", "date", "formControlName", "muacDate12", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height12month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height12month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "weight12month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight12month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "muac12month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac12month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto18Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto18Complete"], ["for", "muacDate18"], ["type", "date", "formControlName", "muacDate18", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height18month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height18month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "weight18month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight18month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "muac18month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac18month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["type", "radio", "value", "Y", "formControlName", "primaryImmunizationUpto24Completed"], ["type", "radio", "value", "N", "formControlName", "primaryImmunizationUpto24Completed"], ["type", "radio", "value", "Y", "formControlName", "ebfUpto24Complete"], ["type", "radio", "value", "N", "formControlName", "ebfUpto24Complete"], ["for", "muacDate24"], ["type", "date", "formControlName", "muacDate24", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "height24month"], ["type", "text", "placeholder", "Enter height", "formControlName", "height24month", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "weight24month"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight24month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], ["for", "muac24month"], ["type", "text", "placeholder", "Enter MUAC", "formControlName", "muac24month", "maxlength", "6", 1, "form-control", 3, "ngClass", "keypress", "keyup"], [3, "opened", "closed"], [1, "form-group", "col-md-3"], ["for", "checkChildDeath"], ["formControlName", "checkChildDeath", "id", "checkChildDeath", 1, "form-select", 3, "change"], ["value", ""], ["value", "Y"], ["value", "N"], ["class", "form-group col-md", 4, "ngIf"], ["class", "addEditBtn", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "secondVisitDate"], ["type", "date", "formControlName", "secondVisitDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "ngClass"], ["for", "deathOfChildDate"], ["type", "date", "formControlName", "deathOfChildDate", 1, "form-control"], ["for", "comment"], ["type", "text", "formControlName", "comment", 1, "form-control"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]], template: function AddLmChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lactating Mother Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLmChildComponent_Template_i_click_5_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Place of Delivery :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Institution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Birth Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_29_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddLmChildComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Within 6 month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Visit Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddLmChildComponent_Template_input_change_42_listener($event) { return ctx.restrictSecondDate($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddLmChildComponent_div_43_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddLmChildComponent_div_44_Template, 6, 7, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_45_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_45_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " After 6 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_71_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AddLmChildComponent_div_72_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_77_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_77_listener($event) { return ctx.heightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AddLmChildComponent_div_78_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_83_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_83_listener($event) { return ctx.weightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AddLmChildComponent_div_84_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_91_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_91_listener($event) { return ctx.muacKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AddLmChildComponent_div_92_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_93_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_93_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " After 12 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Primary Immunization completed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_135_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, AddLmChildComponent_div_136_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_141_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_141_listener($event) { return ctx.heightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, AddLmChildComponent_div_142_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_147_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_147_listener($event) { return ctx.weightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, AddLmChildComponent_div_148_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_155_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_155_listener($event) { return ctx.muacKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, AddLmChildComponent_div_156_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_157_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_157_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " After 18 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_183_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](184, AddLmChildComponent_div_184_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_189_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_189_listener($event) { return ctx.heightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, AddLmChildComponent_div_190_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_195_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_195_listener($event) { return ctx.weightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, AddLmChildComponent_div_196_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_203_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_203_listener($event) { return ctx.muacKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, AddLmChildComponent_div_204_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-expansion-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_205_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_205_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " After 24 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Primary Immunization completed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Exclusive Breast Feeding Complete :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " \u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "MUAC Record Date:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AddLmChildComponent_Template_input_keydown_247_listener() { return ctx.restrictTypeOfDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, AddLmChildComponent_div_248_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Height (cm):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_253_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_253_listener($event) { return ctx.heightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, AddLmChildComponent_div_254_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Weight (kg):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_259_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_259_listener($event) { return ctx.weightKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, AddLmChildComponent_div_260_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "MUAC (cm):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "*\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AddLmChildComponent_Template_input_keypress_267_listener($event) { return ctx.validationService.onlyIntegerAndDot($event); })("keyup", function AddLmChildComponent_Template_input_keyup_267_listener($event) { return ctx.muacKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](268, AddLmChildComponent_div_268_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "mat-expansion-panel", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function AddLmChildComponent_Template_mat_expansion_panel_opened_269_listener() { return ctx.panelOpenState = true; })("closed", function AddLmChildComponent_Template_mat_expansion_panel_closed_269_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Child Death ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Is child death ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "select", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddLmChildComponent_Template_select_change_277_listener($event) { return ctx.checkChildDeath($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "-- Select --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](284, AddLmChildComponent_div_284_Template, 5, 0, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](285, AddLmChildComponent_div_285_Template, 7, 0, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](288, AddLmChildComponent_div_288_Template, 3, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.childBirthForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](55, _c0, ctx.f.birthWeight.invalid && ctx.f.birthWeight.touched, ctx.f.birthWeight.valid && (ctx.f.birthWeight.dirty || ctx.f.birthWeight.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.birthWeight.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.childDob)("max", ctx.maxFirstVisit)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](58, _c0, ctx.f.firstVisitDate.invalid && ctx.f.firstVisitDate.touched, ctx.f.firstVisitDate.valid && (ctx.f.firstVisitDate.dirty || ctx.f.firstVisitDate.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.firstVisitDate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableSecondVisitDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after6m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](61, _c0, ctx.f.muacDate6.invalid && ctx.f.muacDate6.touched, ctx.f.muacDate6.valid && (ctx.f.muacDate6.dirty || ctx.f.muacDate6.touched)))("min", ctx.muac6MinDate)("max", ctx.muac6MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate6.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](64, _c0, ctx.f.height6month.invalid && ctx.f.height6month.touched, ctx.f.height6month.valid && (ctx.f.height6month.dirty || ctx.f.height6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c0, ctx.f.weight6month.invalid && ctx.f.weight6month.touched, ctx.f.weight6month.valid && (ctx.f.weight6month.dirty || ctx.f.weight6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](70, _c0, ctx.f.muac6month.invalid && ctx.f.muac6month.touched, ctx.f.muac6month.valid && (ctx.f.muac6month.dirty || ctx.f.muac6month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac6month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after12m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](73, _c0, ctx.f.muacDate12.invalid && ctx.f.muacDate12.touched, ctx.f.muacDate12.valid && (ctx.f.muacDate12.dirty || ctx.f.muacDate12.touched)))("min", ctx.muac12MinDate)("max", ctx.muac12MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate12.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](76, _c0, ctx.f.height12month.invalid && ctx.f.height12month.touched, ctx.f.height12month.valid && (ctx.f.height12month.dirty || ctx.f.height12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](79, _c0, ctx.f.weight12month.invalid && ctx.f.weight12month.touched, ctx.f.weight12month.valid && (ctx.f.weight12month.dirty || ctx.f.weight12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](82, _c0, ctx.f.muac12month.invalid && ctx.f.muac12month.touched, ctx.f.muac12month.valid && (ctx.f.muac12month.dirty || ctx.f.muac12month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac12month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after18m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](85, _c0, ctx.f.muacDate18.invalid && ctx.f.muacDate18.touched, ctx.f.muacDate18.valid && (ctx.f.muacDate18.dirty || ctx.f.muacDate18.touched)))("min", ctx.muac18MinDate)("max", ctx.muac18MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate18.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](88, _c0, ctx.f.height18month.invalid && ctx.f.height18month.touched, ctx.f.height18month.valid && (ctx.f.height18month.dirty || ctx.f.height18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](91, _c0, ctx.f.weight18month.invalid && ctx.f.weight18month.touched, ctx.f.weight18month.valid && (ctx.f.weight18month.dirty || ctx.f.weight18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](94, _c0, ctx.f.muac18month.invalid && ctx.f.muac18month.touched, ctx.f.muac18month.valid && (ctx.f.muac18month.dirty || ctx.f.muac18month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac18month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.after24m);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](97, _c0, ctx.f.muacDate24.invalid && ctx.f.muacDate24.touched, ctx.f.muacDate24.valid && (ctx.f.muacDate24.dirty || ctx.f.muacDate24.touched)))("min", ctx.muac24MinDate)("max", ctx.muac24MaxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muacDate24.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](100, _c0, ctx.f.height24month.invalid && ctx.f.height24month.touched, ctx.f.height24month.valid && (ctx.f.height24month.dirty || ctx.f.height24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.height24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](103, _c0, ctx.f.weight24month.invalid && ctx.f.weight24month.touched, ctx.f.weight24month.valid && (ctx.f.weight24month.dirty || ctx.f.weight24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.weight24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](106, _c0, ctx.f.muac24month.invalid && ctx.f.muac24month.touched, ctx.f.muac24month.valid && (ctx.f.muac24month.dirty || ctx.f.muac24month.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.muac24month.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childDeath == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.childDeath == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1sbS1jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhZGQtbG0tY2hpbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLmChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-lm-child',
                templateUrl: './add-lm-child.component.html',
                styleUrls: ['./add-lm-child.component.css']
            }]
    }], function () { return [{ type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "D/kB":
/*!*************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-register.module.ts ***!
  \*************************************************************************/
/*! exports provided: LmRegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmRegisterModule", function() { return LmRegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lm-register-routing.module */ "O/z0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lm-view/lm-view.component */ "uW4m");
/* harmony import */ var _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-lm-child/add-lm-child.component */ "+93P");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/loader/loader.module */ "iFG+");












class LmRegisterModule {
}
LmRegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LmRegisterModule });
LmRegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LmRegisterModule_Factory(t) { return new (t || LmRegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LmRegisterModule, { declarations: [_lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__["LmViewComponent"], _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__["AddLmChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmRegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_4__["LmViewComponent"], _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_5__["AddLmChildComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _lm_register_routing_module__WEBPACK_IMPORTED_MODULE_2__["LmRegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_10__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O/z0":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-register-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LmRegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmRegisterRoutingModule", function() { return LmRegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lm-view/lm-view.component */ "uW4m");





const routes = [{ path: '', component: _lm_view_lm_view_component__WEBPACK_IMPORTED_MODULE_2__["LmViewComponent"] },];
class LmRegisterRoutingModule {
}
LmRegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LmRegisterRoutingModule });
LmRegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LmRegisterRoutingModule_Factory(t) { return new (t || LmRegisterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LmRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmRegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uW4m":
/*!********************************************************************************!*\
  !*** ./src/app/modules/lactating-mother-register/lm-view/lm-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: LmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmViewComponent", function() { return LmViewComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-lm-child/add-lm-child.component */ "+93P");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http/http.service */ "YwHQ");
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ "dBge");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ "SMi9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/validation.service */ "yjnX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "G/xV");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
















function LmViewComponent_form_16_div_1_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", region_r13.regionName, " ");
} }
function LmViewComponent_form_16_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_form_16_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_1_div_10_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.f.region.errors.required);
} }
function LmViewComponent_form_16_div_1_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r15.branchName, " ");
} }
function LmViewComponent_form_16_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_form_16_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_1_div_20_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.f.branch.errors.required);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function LmViewComponent_form_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_form_16_div_1_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.changeRegion($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LmViewComponent_form_16_div_1_option_9_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LmViewComponent_form_16_div_1_div_10_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_form_16_div_1_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.changeBranch($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LmViewComponent_form_16_div_1_option_19_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LmViewComponent_form_16_div_1_div_20_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r2.f.region.invalid && ctx_r2.f.region.touched, ctx_r2.f.region.valid && (ctx_r2.f.region.dirty || ctx_r2.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx_r2.f.branch.invalid && ctx_r2.f.branch.touched, ctx_r2.f.branch.valid && (ctx_r2.f.branch.dirty || ctx_r2.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.branch.errors);
} }
function LmViewComponent_form_16_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", block_r20.blockName, " ");
} }
function LmViewComponent_form_16_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_form_16_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_12_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.block.errors.required);
} }
function LmViewComponent_form_16_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gp_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gp_r22.name, " ");
} }
function LmViewComponent_form_16_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_form_16_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_22_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.gp.errors.required);
} }
function LmViewComponent_form_16_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vill_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", vill_r24.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vill_r24.villageName, " ");
} }
function LmViewComponent_form_16_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_form_16_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_32_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.f.gram.errors.required);
} }
function LmViewComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LmViewComponent_form_16_div_1_Template, 21, 12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_form_16_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.changeBlock($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LmViewComponent_form_16_option_11_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LmViewComponent_form_16_div_12_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_form_16_Template_select_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.changeGp($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "-- Select GP/ Municipality --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LmViewComponent_form_16_option_21_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LmViewComponent_form_16_div_22_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Village/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LmViewComponent_form_16_Template_select_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.changeVillage($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LmViewComponent_form_16_option_31_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LmViewComponent_form_16_div_32_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.regionBranchHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, ctx_r0.f.block.invalid && ctx_r0.f.block.touched, ctx_r0.f.block.valid && (ctx_r0.f.block.dirty || ctx_r0.f.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, ctx_r0.f.gp.invalid && ctx_r0.f.gp.touched, ctx_r0.f.gp.valid && (ctx_r0.f.gp.dirty || ctx_r0.f.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.gpDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c0, ctx_r0.f.gram.invalid && ctx_r0.f.gram.touched, ctx_r0.f.gram.valid && (ctx_r0.f.gram.dirty || ctx_r0.f.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.villageDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.gram.errors);
} }
function LmViewComponent_tr_60_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LmViewComponent_tr_60_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.openAddEditLmChild(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LmViewComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LmViewComponent_tr_60_i_22_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LmViewComponent_tr_60_Template_i_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const item_r30 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.ViewLmChild(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r30.firstName, " ", item_r30.middleName, " ", item_r30.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.muac ? item_r30.muac : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r30.muacIndicatorName == "RED" ? "danger" : item_r30.muacIndicatorName == "GREEN" ? "success" : item_r30.muacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.createUpdateMode);
} }
class LmViewComponent {
    constructor(httpService, fb, sidebarService, http, baselineService, dialog, datepipe, validationService, activatedRoute, router) {
        this.httpService = httpService;
        this.fb = fb;
        this.sidebarService = sidebarService;
        this.http = http;
        this.baselineService = baselineService;
        this.dialog = dialog;
        this.datepipe = datepipe;
        this.validationService = validationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.regionList = [];
        this.branchList = [];
        this.villagesOfBranch = [];
        this.gpDtoList = [];
        this.villageDtoList = [];
        this.ssList = [];
        this.swasthyaSahayika = [];
        this.lactatingmotherregister = [];
        this.loader = false;
    }
    ngDoCheck() {
        this.searchFullscreen = this.validationService.val;
    }
    ngOnInit() {
        var _a, _b, _c;
        this.activatedRoute.queryParams.subscribe(params => {
            this.setStatus = params['status'];
            this.familyID = params['familyID'];
            this.regionID = params['regionID'];
            this.branchID = params['branchID'];
            this.blockID = params['blockID'];
            this.gpID = params['gpID'];
            this.villageID = params['villageID'];
        });
        let JSONDatas = { regionID: this.regionID, branchID: this.branchID, blockID: this.blockID, gpID: this.gpID, villageID: this.villageID };
        localStorage.setItem("datas", JSON.stringify(JSONDatas));
        if (this.setStatus == 'viewCentralLM') {
            this.getLactatingMotherList(this.villageID);
        }
        else {
            this.createForm();
            this.getLactatingMotherList();
            this.sidebarService.checkRoledetailDTO().then((res) => {
                var _a, _b, _c;
                if (res.regionBranchHide) {
                    this.regionList = res.region;
                    this.regionBranchHide = res.regionBranchHide;
                }
                else {
                    let Dto = {
                        dataAccessDTO: res.dataAccessDTO,
                        branchId: res.branchId
                    };
                    this.regionBranchHide = res.regionBranchHide;
                    this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe((res) => {
                        if (res.sessionDTO.status == true) {
                            this.villagesOfBranch = res.responseObject;
                        }
                    });
                }
                ((_c = (_b = (_a = this.sidebarService.subMenuList
                    .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 121 || item.subFunctionMasterId == 122 || item.subFunctionMasterId == 123 || item.subFunctionMasterId == 124)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'view')) === null || _c === void 0 ? void 0 : _c.accessType) ? this.router.navigate(['/lmr']) : this.router.navigate(['/error']);
            });
        }
        this.createUpdateMode = ((_c = (_b = (_a = this.sidebarService.subMenuList
            .find(functionShortName => functionShortName.functionShortName == 'Registers')) === null || _a === void 0 ? void 0 : _a.subMenuDetailList.find(item => item.subFunctionMasterId == 121 || item.subFunctionMasterId == 122 || item.subFunctionMasterId == 123 || item.subFunctionMasterId == 124)) === null || _b === void 0 ? void 0 : _b.accessDetailList.find(accessType => accessType.accessType == 'create')) === null || _c === void 0 ? void 0 : _c.accessType) ? true : false;
    }
    /* on change Region dropdown getting Branch list */
    changeRegion(region) {
        var _a, _b, _c;
        let regionId = (_a = this.regionList.find((reg) => reg.regionName == region)) === null || _a === void 0 ? void 0 : _a.regionMasterId;
        let req = {
            dataAccessDTO: {
                userId: (_b = this.sidebarService) === null || _b === void 0 ? void 0 : _b.userId,
                userName: (_c = this.sidebarService) === null || _c === void 0 ? void 0 : _c.loginId,
            },
            regionId: regionId,
        };
        this.baselineService.listOfBranchesOfARegion(req).subscribe((res) => {
            this.branchList = res === null || res === void 0 ? void 0 : res.responseObject;
        }, (error) => {
            this.branchList = null;
        });
        this.locationForm.controls.branch.setValue('');
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.region == '') {
            this.villagesOfBranch = [];
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change Branch dropdown getting villagesOfBranch list */
    changeBranch(branch) {
        var _a, _b;
        this.sidebarService.branchId = (_b = (_a = this.branchList) === null || _a === void 0 ? void 0 : _a.find(bran => bran.branchName == branch)) === null || _b === void 0 ? void 0 : _b.branchId;
        this.sidebarService.branchName = this.locationForm.get('branch').value;
        let Dto = {
            dataAccessDTO: {
                userId: this.sidebarService.userId,
                userName: this.sidebarService.loginId,
            },
            branchId: this.sidebarService.branchId
        };
        this.baselineService.villagesOfBranch(Dto).subscribe((res) => {
            this.villagesOfBranch = res.responseObject;
        });
        this.locationForm.controls.block.setValue('');
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.branch == '') {
            this.villagesOfBranch = [];
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change Block dropdown getting GP list */
    changeBlock(blockname) {
        var _a;
        this.gpDtoList = (_a = this.villagesOfBranch.find(block => block.blockName == blockname)) === null || _a === void 0 ? void 0 : _a.gpDtoList;
        this.selectedBlock = this.locationForm.get('block').value;
        this.locationForm.controls.gp.setValue('');
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.block == '') {
            this.gpDtoList = [];
            this.villageDtoList = [];
        }
    }
    /* on change GP dropdown getting Village list */
    changeGp(gpName) {
        var _a, _b;
        this.villageDtoList = (_b = (_a = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)) === null || _a === void 0 ? void 0 : _a.gpDtoList.find(gp => gp.name == gpName)) === null || _b === void 0 ? void 0 : _b.villageDtoList;
        this.selectedGp = this.locationForm.get('gp').value;
        this.locationForm.controls.gram.setValue('');
        if (this.locationForm.value.gp == '') {
            this.villageDtoList = [];
        }
    }
    /* on change Village dropdown getting LactatingMother List */
    changeVillage(villageID) {
        this.villageMasterId = villageID;
        // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
        this.getLactatingMotherList(this.villageMasterId);
        if (this.locationForm.value.gram == '') {
        }
    }
    createForm() {
        this.locationForm = this.fb.group({
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get f() {
        return this.locationForm.controls;
    }
    /* get the all Lactating Mother List */
    getLactatingMotherList(villageMasterId = null) {
        let req = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            villageMasterId: villageMasterId
        };
        this.loader = false;
        this.httpService.getLactatingMotherRegister(req).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            this.lactatingmotherregister = (_a = res.responseObject) === null || _a === void 0 ? void 0 : _a.childrenBetween0And6Months.concat((_b = res.responseObject) === null || _b === void 0 ? void 0 : _b.childrenBetween6And12Months, (_c = res.responseObject) === null || _c === void 0 ? void 0 : _c.childrenBetween12And18Months, (_d = res.responseObject) === null || _d === void 0 ? void 0 : _d.childrenBetween18And24Months, (_e = res.responseObject) === null || _e === void 0 ? void 0 : _e.childrenBeyond24Months);
            this.loader = true;
            if (this.setStatus == 'viewCentralLM') {
                var setData = this.lactatingmotherregister.filter(fam => fam.familyDetailId == this.familyID);
                console.log(setData);
                this.lactatingmotherregister = setData;
            }
        }, error => {
            this.loader = true;
        });
    }
    /* only view the particular Lactating Mother info */
    ViewLmChild(lmList) {
        console.log(lmList);
        const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
            width: '1000px',
            height: '550px',
            data: {
                viewMode: true,
                childWiselactatingmotherList: lmList
            }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    /* First time it save the data,
      After that it is editable */
    openAddEditLmChild(lmList) {
        console.log(lmList);
        let saveForm;
        let Dto = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            childId: lmList.childDetailId,
        };
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res) => {
            if (lmList.childBasicStatusDto.placeOfDelivery == null &&
                lmList.childBasicStatusDto.birthWeight == null &&
                lmList.childBasicStatusDto.firstVisitDate == null &&
                lmList.childBasicStatusDto.secondVisitDate == null) {
                saveForm = true;
            }
            else {
                saveForm = false;
            }
            if (res.responseObject.length == 0 && saveForm) {
                const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
                    width: '1000px',
                    height: '550px',
                    data: {
                        editMode: false,
                        childWiselactatingmotherList: lmList
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (this.setStatus == 'viewCentralLM') {
                        this.getLactatingMotherList(this.villageID);
                    }
                    else {
                        this.getLactatingMotherList(this.villageMasterId);
                    }
                });
            }
            else {
                const dialogRef = this.dialog.open(_add_lm_child_add_lm_child_component__WEBPACK_IMPORTED_MODULE_3__["AddLmChildComponent"], {
                    width: '1000px',
                    height: '550px',
                    data: {
                        editMode: true,
                        childWiselactatingmotherList: lmList
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (this.setStatus == 'viewCentralLM') {
                        this.getLactatingMotherList(this.villageID);
                    }
                    else {
                        this.getLactatingMotherList(this.villageMasterId);
                    }
                });
            }
        });
    }
}
LmViewComponent.ɵfac = function LmViewComponent_Factory(t) { return new (t || LmViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__["BaselineSurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
LmViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LmViewComponent, selectors: [["app-lm-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 62, vars: 8, consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search lactating info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-signin", 3, "formGroup", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["id", "table_wrapper", 1, "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "8%"], [2, "width", "20%"], [2, "width", "6%"], [2, "width", "5%"], [2, "width", "22%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "fa", "fa-circle", "fa-lg"], ["class", "fas fa-edit", "title", "Save & Edit", 3, "click", 4, "ngIf"], ["title", "View Child", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["title", "Save & Edit", 1, "fas", "fa-edit", 3, "click"]], template: function LmViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lactating Mother Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LmViewComponent_Template_input_ngModelChange_13_listener($event) { return ctx.lmrSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LmViewComponent_form_16_Template, 33, 20, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "SL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mother Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Mother");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Guardian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Child Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Sex");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Child Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Last MUAC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, LmViewComponent_tr_60_Template, 24, 15, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lmrSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.setStatus != "viewCentralLM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](61, 5, ctx.lactatingmotherregister, ctx.lmrSearch));
    } }, directives: [_shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"]], styles: [".QA_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 17px 10px;\r\n}\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 330px;\r\n  height: 63%;\r\n}\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 625px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 474px;\r\n}\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 630px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\r\n  .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding-right: 1px;\r\n    margin-left: 145px;\r\n    height: 63%;\r\n  }\r\n  \r\n  .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding-right: 1px;\r\n    margin-left: 410px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 60%;\r\n    background: transparent;\r\n    font-size: 12px;\r\n    padding-left: 19px;\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    border: 0;\r\n  }\r\n  \r\n  .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin-left: 290px;\r\n  }\r\n  \r\n  .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 74%;\r\n    margin-left: 415px;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n\r\ntable.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 60px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxtLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7QUFFRjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWCIsImZpbGUiOiJsbS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUUFfdGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBwYWRkaW5nOiAxN3B4IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xyXG4gIGhlaWdodDogNjMlO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3NHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0NXB4O1xyXG4gICAgaGVpZ2h0OiA2MyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzJkYWFiODtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDc0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY29sb3I6ICM3MGNhZjcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLmRhbmdlciB7XHJcbiAgY29sb3I6ICNjZDAyMDI7XHJcbn1cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLndhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjdjZDAwO1xyXG59XHJcblxyXG5cclxuLyogdGFibGUudGFibGUgdGhlYWQgdHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxudGFibGUudGFibGUgdGhlYWQgdGgge1xyXG4gIGZsZXg6IDEgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG50YWJsZS50YWJsZSB0Ym9keSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxudGFibGUudGFibGUgdGhlYWQgdHIsXHJcbnRhYmxlLnRhYmxlIHRib2R5IHRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRoZWFkIHRyIHRoLFxyXG50YWJsZS50YWJsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0gKi9cclxuXHJcbnRhYmxlLnRhYmxlIHRoZWFkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LmViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lm-view',
                templateUrl: './lm-view.component.html',
                styleUrls: ['./lm-view.component.css'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
            }]
    }], function () { return [{ type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_7__["BaselineSurveyService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-lactating-mother-register-lm-register-module.js.map