"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_sattu-register_sattu-register_module_ts"],{

/***/ 62149:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/sattu-register/create-sattu-register/create-sattu-register.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSattuRegisterComponent": () => (/* binding */ CreateSattuRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sattu-register.service */ 18295);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);








const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class CreateSattuRegisterComponent {
  constructor(fb, httpService, sattuService, data, dialogRef) {
    this.fb = fb;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.prequisiteDetails = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.createSattu_Form();
    console.log(this.data);
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyId: this.data.familyDetailId
    };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe(res => {
      this.prequisiteDetails = res.responseObject;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      regularly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      irregularly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      notPreparing: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  get s() {
    return this.createSattuForm.controls;
  }
  orientation(e) {}
  regularly(e) {}
  irregularly(e) {}
  notPreparing(e) {}
}
CreateSattuRegisterComponent.ɵfac = function CreateSattuRegisterComponent_Factory(t) {
  return new (t || CreateSattuRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_1__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};
CreateSattuRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateSattuRegisterComponent,
  selectors: [["app-create-sattu-register"]],
  decls: 54,
  vars: 5,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["for", "orientation"], [1, "text-danger"], [1, "form-check-inline"], ["type", "radio", "name", "orientation", "id", "yes", "value", "Y", "formControlName", "orientation", 1, "form-check-input", 3, "change"], ["for", "orientation", 1, "form-check-label"], ["type", "radio", "name", "orientation", "id", "no", "value", "N", "formControlName", "orientation", 1, "form-check-input", 3, "change"], ["for", "preparing "], ["type", "radio", "name", "regularly", "id", "yes", "value", "Y", "formControlName", "regularly", 1, "form-check-input", 2, "margin-top", "33px", 3, "change"], ["for", "regularly", 1, "form-check-label"], ["type", "radio", "name", "irregularly", "id", "no", "value", "N", "formControlName", "irregularly", 1, "form-check-input", 3, "change"], ["for", "irregularly", 1, "form-check-label"], ["type", "radio", "name", "notPreparing", "id", "no", "value", "N", "formControlName", "notPreparing", 1, "form-check-input", 3, "change"], ["for", "notPreparing", 1, "form-check-label"], ["formControlName", "reason", "id", "reason", 1, "form-select", 3, "ngClass"], ["value", ""], [1, "col-md-4"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"]],
  template: function CreateSattuRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create Sattu Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateSattuRegisterComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Received Orientation For Preparing Sattu?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_16_listener($event) {
        return ctx.orientation($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_21_listener($event) {
        return ctx.orientation($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6)(25, "div", 7)(26, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Family preparing Sattu?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10)(31, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_31_listener($event) {
        return ctx.regularly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " \u00A0\u00A0Regularly");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_36_listener($event) {
        return ctx.irregularly($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " \u00A0\u00A0Irregularly");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_41_listener($event) {
        return ctx.notPreparing($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " \u00A0\u00A0Not Preparing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "select", 21)(47, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "-- Select Reason--");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 6)(51, "div", 23)(52, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.createSattuForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx.s.reason.invalid && ctx.s.reason.touched, ctx.s.reason.valid && (ctx.s.reason.dirty || ctx.s.reason.touched)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n  }\r\n  .dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n  }\r\n    .mat-dialog-container {\r\n    padding: 12px 17px;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci9jcmVhdGUtc2F0dHUtcmVnaXN0ZXIvY3JlYXRlLXNhdHR1LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kaWFsb2ctdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTdweDtcclxuICB9XHJcbiAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 83869:
/*!*************************************************************************!*\
  !*** ./src/app/modules/sattu-register/sattu-register-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterRoutingModule": () => (/* binding */ SattuRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sattu_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-register.component */ 92637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _sattu_register_component__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterComponent
}];
class SattuRegisterRoutingModule {}
SattuRegisterRoutingModule.ɵfac = function SattuRegisterRoutingModule_Factory(t) {
  return new (t || SattuRegisterRoutingModule)();
};
SattuRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SattuRegisterRoutingModule
});
SattuRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SattuRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92637:
/*!********************************************************************!*\
  !*** ./src/app/modules/sattu-register/sattu-register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterComponent": () => (/* binding */ SattuRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-sattu-family/view-sattu-family.component */ 90812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sattu-register.service */ 18295);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);

















function SattuRegisterComponent_div_21_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", region_r12.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", region_r12.regionName, " ");
  }
}
function SattuRegisterComponent_div_21_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_21_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SattuRegisterComponent_div_21_div_10_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.m.region.errors.required);
  }
}
function SattuRegisterComponent_div_21_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", branch_r14.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", branch_r14.branchName, " ");
  }
}
function SattuRegisterComponent_div_21_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_21_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SattuRegisterComponent_div_21_div_20_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.m.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SattuRegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 6)(2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SattuRegisterComponent_div_21_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SattuRegisterComponent_div_21_option_9_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SattuRegisterComponent_div_21_div_10_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6)(12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SattuRegisterComponent_div_21_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, SattuRegisterComponent_div_21_option_19_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SattuRegisterComponent_div_21_div_20_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c0, ctx_r0.m.region.invalid && ctx_r0.m.region.touched, ctx_r0.m.region.valid && (ctx_r0.m.region.dirty || ctx_r0.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](9, _c0, ctx_r0.m.branch.invalid && ctx_r0.m.branch.touched, ctx_r0.m.branch.valid && (ctx_r0.m.branch.dirty || ctx_r0.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.m.branch.errors);
  }
}
function SattuRegisterComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", block_r19.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", block_r19.blockName, " ");
  }
}
function SattuRegisterComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SattuRegisterComponent_div_32_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.m.block.errors.required);
  }
}
function SattuRegisterComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", gp_r21.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", gp_r21.name, " ");
  }
}
function SattuRegisterComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SattuRegisterComponent_div_42_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.m.gp.errors.required);
  }
}
function SattuRegisterComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", vill_r23.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", vill_r23.villageName, " ");
  }
}
function SattuRegisterComponent_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SattuRegisterComponent_div_52_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.m.gram.errors.required);
  }
}
function SattuRegisterComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class SattuRegisterComponent {
  constructor(sidebarService, http, router, fb, httpService, sattuService, modalService, config, validationService, dialog, toaster, confirmationDialogService) {
    this.sidebarService = sidebarService;
    this.http = http;
    this.router = router;
    this.fb = fb;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.modalService = modalService;
    this.validationService = validationService;
    this.dialog = dialog;
    this.toaster = toaster;
    this.confirmationDialogService = confirmationDialogService;
    this.loader = true;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.gpList = [];
    this.sattuView = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.selectVillage_Form();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.loader = true;
      if (res.regionBranchHide) {
        this.regionList = res.region;
        this.regionBranchHide = res.regionBranchHide;
      } else {
        this.lowerRoleBranchId = res.branchId;
        let dataAccessDTO = JSON.parse(localStorage.getItem('dataAccessDTO'));
        let Dto = {
          dataAccessDTO: {
            userId: dataAccessDTO.userId,
            userName: dataAccessDTO.userName
          },
          branchId: this.lowerRoleBranchId
        };
        this.regionBranchHide = res.regionBranchHide;
        this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
          if (res.sessionDTO.status == true) {
            this.villagesOfBranch = res.responseObject;
            console.log(this.villagesOfBranch, 'lowerrankvillagesOfBranch');
          }
        });
      }
    });
    // this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register']) : this.router.navigate(['/error']);
    // this.createMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    // this.updateMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    // this.deleteMode = this.sidebarService.subMenuList
    //   .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
    //   .find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList
    //   .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  selectVillage_Form() {
    this.selectVillageForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
  }
  get m() {
    return this.selectVillageForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        regionId: regionId
      };
      this.sattuService.getBranchesOfRegion(req).subscribe(res => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }
    this.selectVillageForm.controls.branch.setValue('');
    this.selectVillageForm.controls.block.setValue('');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.selectVillageForm.value.region == '') {
      this.branchList = [];
      // this.escortviewData = [];
    }
  }

  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.sattuService.getVillagesOfBranch(req).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });
    this.selectVillageForm.controls.block.setValue('');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.villageList = [];
    // this.escortviewData = [];
  }

  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.selectVillageForm.controls.gram.setValue('');
    // this.escortviewData = [];
  }

  changeVillage(villageId) {
    // this.escortviewData = [];
    // this.selectVillageForm.controls.filterDate.setValue('')
    console.log(villageId, 'villageId');
    let viewreq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: villageId,
      visitDate: null
    };
    this.loader = false;
    this.sattuService.getSattuview(viewreq).subscribe(res => {
      this.loader = true;
      this.sattuView = res.responseObject;
      //   this.sattuView?.forEach((x) => {
      //     x.familyList = x.familyList?.map(({
      //       visitDate = x.visitDate,
      //       ...rest
      //     }) => ({
      //       visitDate,
      //       ...rest
      //     }));
      //   })
      console.log(this.sattuView, 'sattuView');
      //   this.escortview?.forEach(y => {
      //     console.log(y);
      //     y.familyList.forEach(z => {
      //       this.escortviewData.push(z)
      //     })
      //     console.log(this.escortviewData, 'escortviewData');
    });
    //   this.escortviewData.forEach(x => {
    //     if (x.escortOrReferType == 'R') {
    //       x.escortOrReferType = 'Refer'
    //     } else {
    //       x.escortOrReferType = 'Escort'
    //     }
    //   });
    //   this.escortviewFilterData = this.escortviewData
    //   console.log(this.escortviewData, 'escortviewData');
    // })
  }

  viewFamilyList() {
    // this.escortSearch = '';
    // this.viewFamilyListModal = this.modalService.open(viewFam, {
    //   windowClass: 'viewFam',
    // });
    // this.viewFamily_Form();
    const dialogRef = this.dialog.open(_view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_0__.ViewSattuFamilyComponent, {
      width: '1100px',
      height: '570px',
      data: this.selectVillageForm.value.gram
    });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}

SattuRegisterComponent.ɵfac = function SattuRegisterComponent_Factory(t) {
  return new (t || SattuRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_3__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService));
};
SattuRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SattuRegisterComponent,
  selectors: [["app-sattu-register"]],
  decls: 87,
  vars: 24,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "form-group", "col-md"], [1, "page-title"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search fam, name, place, type ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Sattu Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "6%"], [2, "width", "20%"], [2, "width", "8%"], [2, "width", "25%"], [2, "width", "13%"], [2, "width", "10%"], [2, "width", "12%"], [2, "width", "11%"], ["style", "width: 12%;", 4, "ngIf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function SattuRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Sattu Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "form", 10)(14, "div", 11)(15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SattuRegisterComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.sattuSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 15)(19, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SattuRegisterComponent_Template_i_click_19_listener() {
        return ctx.viewFamilyList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "form", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SattuRegisterComponent_div_21_Template, 21, 12, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 2)(23, "div", 6)(24, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_28_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, SattuRegisterComponent_option_31_Template, 2, 2, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SattuRegisterComponent_div_32_Template, 2, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 6)(34, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "select", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_38_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SattuRegisterComponent_option_41_Template, 2, 2, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, SattuRegisterComponent_div_42_Template, 2, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 6)(44, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_48_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, SattuRegisterComponent_option_51_Template, 2, 2, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, SattuRegisterComponent_div_52_Template, 2, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 29)(54, "div", 30)(55, "div", 31)(56, "table", 32)(57, "thead")(58, "tr")(59, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "th", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Beneficiary");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Reason");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "th", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Done by- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](79, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Staff/ SS");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "th", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Place");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, SattuRegisterComponent_th_85_Template, 2, 0, "th", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "pagination-controls", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function SattuRegisterComponent_Template_pagination_controls_pageChange_86_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function SattuRegisterComponent_Template_pagination_controls_pageBoundsCorrection_86_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.sattuSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.selectVillageForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](15, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](18, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](21, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.deleteMode || ctx.updateMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1100px;\r\n  margin-left: -285px;\r\n  border: 10px solid white;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1100px;\r\n  margin-left: -285px;\r\n  border: 10px solid white;\r\n  background: white;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 331px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#tbodybenificiary[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 155px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -4px 0 1.5em 0 !important;\r\n  height: 140px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 200px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#tbodyReason[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 130px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 250px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 485px;\r\n  margin-top: -1px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin-left: 474px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: 591px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -20px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -186px;\r\n  margin-bottom: 11px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.filter_inner_fullscreen[_ngcontent-%COMP%] {\r\n  margin-left: 124px;\r\n  width: 148%;\r\n}\r\n\r\n.filter_inner[_ngcontent-%COMP%] {\r\n  margin-left: 83px;\r\n  width: 135%;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  width: 77%;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-left: 15px;\r\n  margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n  width: 430px;\r\n  position: relative;\r\n  margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  border: 0;\r\n  padding-left: 19px;\r\n  margin-left: 6px;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 24px;\r\n  content: \"\";\r\n  background: #2daab8;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: 8px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -1359px;\r\n  margin-top: 21px;\r\n}\r\n\r\n.form-controls[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-radius: 0.25rem;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci9zYXR0dS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFFBQVE7RUFJUiwyQkFBMkI7RUFDM0IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHFFQUFxRTtBQUN2RSIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDU3MHB4O1xyXG4gIHdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yODVweDtcclxuICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxuICB3aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjg1cHg7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcbi8qIFxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufSAqL1xyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI3Rib2R5RmFtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMzMXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jdGJvZHliZW5pZmljaWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAtNHB4IDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jdGJvZHlSZWFzb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjODI4QkIyO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggNXB4IDNweCByZ2JhKDExNywgMTExLCAxMTcsIDEpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCBsaSB7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogY2FsYygxMCUgLSAxMHB4KTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2JmYmZiZiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNDg1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0NzRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogNTkxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTg2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyX2lubmVyX2Z1bGxzY3JlZW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjRweDtcclxuICB3aWR0aDogMTQ4JTtcclxufVxyXG5cclxuLmZpbHRlcl9pbm5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzcHg7XHJcbiAgd2lkdGg6IDEzNSU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNzclO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMge1xyXG4gIHdpZHRoOiA0MzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjN2U3MTcyO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGJ1dHRvbjo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kOiAjMmRhYWI4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzU5cHg7XHJcbiAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9221:
/*!*****************************************************************!*\
  !*** ./src/app/modules/sattu-register/sattu-register.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterModule": () => (/* binding */ SattuRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-register-routing.module */ 83869);
/* harmony import */ var _sattu_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sattu-register.component */ 92637);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-sattu-register/create-sattu-register.component */ 62149);
/* harmony import */ var _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-sattu-family/view-sattu-family.component */ 90812);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










class SattuRegisterModule {}
SattuRegisterModule.ɵfac = function SattuRegisterModule_Factory(t) {
  return new (t || SattuRegisterModule)();
};
SattuRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: SattuRegisterModule
});
SattuRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SattuRegisterModule, {
    declarations: [_sattu_register_component__WEBPACK_IMPORTED_MODULE_1__.SattuRegisterComponent, _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_3__.CreateSattuRegisterComponent, _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_4__.ViewSattuFamilyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 18295:
/*!******************************************************************!*\
  !*** ./src/app/modules/sattu-register/sattu-register.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRegisterService": () => (/* binding */ SattuRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class SattuRegisterService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getBranchesOfRegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  getVillagesOfBranch(obj) {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj);
  }
  getListOfFamiliesOfAVillage(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/getListOfFamiliesOfAVillage`, obj);
  }
  getSattuRegisterPrerequisites(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/getSattuRegisterPrerequisites`, obj);
  }
  getSattuview(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/view`, obj);
  }
}
SattuRegisterService.ɵfac = function SattuRegisterService_Factory(t) {
  return new (t || SattuRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SattuRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SattuRegisterService,
  factory: SattuRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 90812:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sattu-register/view-sattu-family/view-sattu-family.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSattuFamilyComponent": () => (/* binding */ ViewSattuFamilyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-sattu-register/create-sattu-register.component */ 62149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sattu-register.service */ 18295);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
















function ViewSattuFamilyComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewSattuFamilyComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ViewSattuFamilyComponent_div_18_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.r.date.errors.required);
  }
}
function ViewSattuFamilyComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewSattuFamilyComponent_tr_45_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const fami_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.createSattu(fami_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fami_r3.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", fami_r3.firstName, "", fami_r3.middleName, " ", fami_r3.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fami_r3.husbandOrGuardianName);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class ViewSattuFamilyComponent {
  constructor(data, sidebarService, http, router, fb, validationService, httpService, sattuService, dialog, toaster, dialogRef) {
    this.data = data;
    this.sidebarService = sidebarService;
    this.http = http;
    this.router = router;
    this.fb = fb;
    this.validationService = validationService;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.dialog = dialog;
    this.toaster = toaster;
    this.dialogRef = dialogRef;
    this.loader = true;
    this.familyList = [];
    dialogRef.disableClose = true;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    console.log(this.data);
    this.viewFamily_Form();
    this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).subtract(7, "days").format("YYYY-MM-DD");
    this.maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).add(0, "days").format("YYYY-MM-DD");
  }
  viewFamily_Form() {
    this.viewFamilyForm = this.fb.group({
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  get r() {
    return this.viewFamilyForm.controls;
  }
  changeDate() {
    let famReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      visitDate: this.viewFamilyForm.value.date,
      villageId: this.data
    };
    this.loader = false;
    this.sattuService.getListOfFamiliesOfAVillage(famReq).subscribe(res => {
      this.loader = true;
      if (res.status == true) {
        this.familyList = res.responseObject;
        console.log(this.familyList, ' this.familyList');
      } else {
        this.familyList = [];
      }
    });
  }
  createSattu(fami) {
    this.dialog.open(_create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_1__.CreateSattuRegisterComponent, {
      width: '760px',
      height: '300px',
      data: fami
    });
  }
  restrictTypeOfDate() {
    return false;
  }
}
ViewSattuFamilyComponent.ɵfac = function ViewSattuFamilyComponent_Factory(t) {
  return new (t || ViewSattuFamilyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_3__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_5__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};
ViewSattuFamilyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ViewSattuFamilyComponent,
  selectors: [["app-view-sattu-family"]],
  decls: 46,
  vars: 12,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md-2"], [1, "form-group", "col-md-4"], ["for", "date"], [1, "text-danger"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "max", "ngClass", "keydown", "change"], ["class", "invalid-feedback", 4, "ngIf"], [1, "serach_field_23"], ["active", "#", 3, "ngClass"], ["type", "text", "name", "search", "placeholder", "search by fam no., name & guardian name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["id", "tbodyFam"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "text-align", "center"], [2, "width", "3%"], [2, "width", "25%"], [2, "width", "30%"], [2, "width", "5%"], [4, "ngFor", "ngForOf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "btn-link", 2, "width", "5%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"]],
  template: function ViewSattuFamilyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "List Of Families");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div")(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewSattuFamilyComponent_Template_i_click_6_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function ViewSattuFamilyComponent_Template_input_keydown_17_listener() {
        return ctx.restrictTypeOfDate();
      })("change", function ViewSattuFamilyComponent_Template_input_change_17_listener() {
        return ctx.changeDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ViewSattuFamilyComponent_div_18_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9)(20, "div", 14)(21, "div")(22, "form", 15)(23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ViewSattuFamilyComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.sattuSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "table", 21)(30, "thead", 22)(31, "tr", 23)(32, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Family No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "tbody", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ViewSattuFamilyComponent_tr_45_Template, 13, 6, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.viewFamilyForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](9, _c0, ctx.r.date.invalid && ctx.r.date.touched, ctx.r.date.valid && (ctx.r.date.dirty || ctx.r.date.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.r.date.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen" : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.sattuSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.familyList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border-bottom: 0 solid transparent;\r\n    background-color: #fff;\r\n    padding: 17px 30px;\r\n    line-height: 16px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n    text-transform: capitalize;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    border: 0;\r\n    background: #499;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 4px;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n    background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 331px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n  .mat-dialog-container {\r\n    padding: 12px 17px;\r\n    overflow: hidden\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    width: 77%;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n    margin-left: 15px;\r\n    margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n    width: 430px;\r\n    position: relative;\r\n    margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n    color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    background: transparent;\r\n    font-size: 12px;\r\n    border: 0;\r\n    padding-left: 19px;\r\n    margin-left: 6px;\r\n    margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 24px;\r\n    content: \"\";\r\n    background: #2daab8;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: 8px;\r\n    margin-bottom: 5px;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n    margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    margin-left: -609px;\r\n    margin-top: 21px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci92aWV3LXNhdHR1LWZhbWlseS92aWV3LXNhdHR1LWZhbWlseS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsUUFBUTtJQUlSLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTRweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRoZWFkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzQ5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbiNoZWFkZXJfZml4ZWQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI3Rib2R5RmFtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMzFweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNzclO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMge1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjN2U3MTcyO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMyZGFhYjg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b246OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICMyZGFhYjg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzJkYWFiODtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_sattu-register_sattu-register_module_ts.js.map