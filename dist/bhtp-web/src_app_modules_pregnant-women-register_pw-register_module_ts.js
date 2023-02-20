"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_pregnant-women-register_pw-register_module_ts"],{

/***/ 14214:
/*!************************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-history/pw-history.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwHistoryComponent": () => (/* binding */ PwHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function PwHistoryComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.createdDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r1.userFirstName, " ", item_r1.userMiddleName, " ", item_r1.userLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.pregnantWomanStatus == "Y" ? "Yes" : item_r1.pregnantWomanStatus == "N" ? "No" : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.pregnantWomanComment);
  }
}
class PwHistoryComponent {
  constructor(http, httpService, data, dialogRef) {
    this.http = http;
    this.httpService = httpService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.pregnantWomenHistory = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailId: this.data.familyDetailId
    };
    this.http.post(`${this.httpService.baseURL}pwr/getFamilyDetailHistory`, Dto).subscribe(res => {
      this.pregnantWomenHistory = res.responseObject.familyDetailHistory;
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
PwHistoryComponent.ɵfac = function PwHistoryComponent_Factory(t) {
  return new (t || PwHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
};
PwHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PwHistoryComponent,
  selectors: [["app-pw-history"]],
  decls: 23,
  vars: 1,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [4, "ngFor", "ngForOf"]],
  template: function PwHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pregnant Woman History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PwHistoryComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "table", 8)(11, "thead")(12, "tr")(13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Created Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pregnant Women Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PwHistoryComponent_tr_22_Template, 9, 6, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pregnantWomenHistory);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcmVnbmFudC13b21lbi1yZWdpc3Rlci9wdy1oaXN0b3J5L3B3LWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 93328:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-register-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwRegisterRoutingModule": () => (/* binding */ PwRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pw_register_pw_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pw-register/pw-register.component */ 15284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _pw_register_pw_register_component__WEBPACK_IMPORTED_MODULE_0__.PwRegisterComponent
}];
class PwRegisterRoutingModule {}
PwRegisterRoutingModule.ɵfac = function PwRegisterRoutingModule_Factory(t) {
  return new (t || PwRegisterRoutingModule)();
};
PwRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PwRegisterRoutingModule
});
PwRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PwRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58642:
/*!***********************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-register.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwRegisterModule": () => (/* binding */ PwRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pw_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pw-register-routing.module */ 93328);
/* harmony import */ var _pw_register_pw_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pw-register/pw-register.component */ 15284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _pw_view_pw_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pw-view/pw-view.component */ 59683);
/* harmony import */ var _pw_status_pw_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pw-status/pw-status.component */ 11062);
/* harmony import */ var _single_pw_list_single_pw_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-pw-list/single-pw-list.component */ 46704);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _pw_history_pw_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pw-history/pw-history.component */ 14214);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);















class PwRegisterModule {}
PwRegisterModule.ɵfac = function PwRegisterModule_Factory(t) {
  return new (t || PwRegisterModule)();
};
PwRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: PwRegisterModule
});
PwRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _pw_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.PwRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PwRegisterModule, {
    declarations: [_pw_register_pw_register_component__WEBPACK_IMPORTED_MODULE_1__.PwRegisterComponent, _pw_view_pw_view_component__WEBPACK_IMPORTED_MODULE_3__.PwViewComponent, _pw_status_pw_status_component__WEBPACK_IMPORTED_MODULE_4__.PwStatusComponent, _single_pw_list_single_pw_list_component__WEBPACK_IMPORTED_MODULE_5__.SinglePwListComponent, _pw_history_pw_history_component__WEBPACK_IMPORTED_MODULE_7__.PwHistoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _pw_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.PwRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__.LoaderModule]
  });
})();

/***/ }),

/***/ 15284:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-register/pw-register.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwRegisterComponent": () => (/* binding */ PwRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pw_status_pw_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pw-status/pw-status.component */ 11062);
/* harmony import */ var _single_pw_list_single_pw_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../single-pw-list/single-pw-list.component */ 46704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ 9991);


















function PwRegisterComponent_form_16_div_1_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r15.regionName, " ");
  }
}
function PwRegisterComponent_form_16_div_1_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_form_16_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_1_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r12.f.region.errors.required);
  }
}
function PwRegisterComponent_form_16_div_1_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r17.branchName, " ");
  }
}
function PwRegisterComponent_form_16_div_1_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_form_16_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_1_div_20_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function PwRegisterComponent_form_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 22)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PwRegisterComponent_form_16_div_1_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, PwRegisterComponent_form_16_div_1_option_9_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, PwRegisterComponent_form_16_div_1_div_10_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 22)(12, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PwRegisterComponent_form_16_div_1_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, PwRegisterComponent_form_16_div_1_option_19_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, PwRegisterComponent_form_16_div_1_div_20_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, ctx_r4.f.region.invalid && ctx_r4.f.region.touched, ctx_r4.f.region.valid && (ctx_r4.f.region.dirty || ctx_r4.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r4.f.branch.invalid && ctx_r4.f.branch.touched, ctx_r4.f.branch.valid && (ctx_r4.f.branch.dirty || ctx_r4.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.branch.errors);
  }
}
function PwRegisterComponent_form_16_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r22.blockName, " ");
  }
}
function PwRegisterComponent_form_16_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_form_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_13_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.block.errors.required);
  }
}
function PwRegisterComponent_form_16_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r24.name, " ");
  }
}
function PwRegisterComponent_form_16_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_form_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_23_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.f.gp.errors.required);
  }
}
function PwRegisterComponent_form_16_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r26.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r26.villageName, " ");
  }
}
function PwRegisterComponent_form_16_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_form_16_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_33_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.f.gram.errors.required);
  }
}
function PwRegisterComponent_form_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_form_16_div_1_Template, 21, 12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2)(4, "div", 22)(5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Block :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PwRegisterComponent_form_16_Template_select_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.changeBlock($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "-- Select Block --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, PwRegisterComponent_form_16_option_12_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, PwRegisterComponent_form_16_div_13_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 22)(15, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "GP/ Municipality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PwRegisterComponent_form_16_Template_select_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.changeGp($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "-- Select GP/ Municipality --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, PwRegisterComponent_form_16_option_22_Template, 2, 1, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, PwRegisterComponent_form_16_div_23_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 22)(25, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Village/ Gram Sansad/ Locality :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function PwRegisterComponent_form_16_Template_select_change_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.changeVillage($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "-- Select Village --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, PwRegisterComponent_form_16_option_32_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, PwRegisterComponent_form_16_div_33_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.regionBranchHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](11, _c0, ctx_r0.f.block.invalid && ctx_r0.f.block.touched, ctx_r0.f.block.valid && (ctx_r0.f.block.dirty || ctx_r0.f.block.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.villagesOfBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.block.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](14, _c0, ctx_r0.f.gp.invalid && ctx_r0.f.gp.touched, ctx_r0.f.gp.valid && (ctx_r0.f.gp.dirty || ctx_r0.f.gp.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.gpDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.gp.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](17, _c0, ctx_r0.f.gram.invalid && ctx_r0.f.gram.touched, ctx_r0.f.gram.valid && (ctx_r0.f.gram.dirty || ctx_r0.f.gram.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.villageDtoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.gram.errors);
  }
}
function PwRegisterComponent_mat_tab_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Set Pregnancy Status ");
  }
}
function PwRegisterComponent_mat_tab_19_ng_template_2_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_mat_tab_19_ng_template_2_tr_20_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 47)(1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PwRegisterComponent_mat_tab_19_ng_template_2_tr_20_td_13_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.openPwStatus(item_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function PwRegisterComponent_mat_tab_19_ng_template_2_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, PwRegisterComponent_mat_tab_19_ng_template_2_tr_20_td_13_Template, 2, 0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r35.p - 1) * 6 + i_r37 + 1 ? (ctx_r35.p - 1) * 6 + i_r37 + 1 : i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r36.firstName, " ", item_r36.middleName, " ", item_r36.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r36.pregnancyStatus == "N" ? "No" : "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r35.createMode || ctx_r35.updateMode);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 6,
    currentPage: a1
  };
};
function PwRegisterComponent_mat_tab_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "table", 43)(4, "thead", 44)(5, "tr")(6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Current Pregnancy Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, PwRegisterComponent_mat_tab_19_ng_template_2_th_18_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, PwRegisterComponent_mat_tab_19_ng_template_2_tr_20_Template, 14, 9, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function PwRegisterComponent_mat_tab_19_ng_template_2_Template_pagination_controls_pageChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.p = $event);
    })("pageBoundsCorrection", function PwRegisterComponent_mat_tab_19_ng_template_2_Template_pagination_controls_pageBoundsCorrection_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r33.createMode || ctx_r33.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](21, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](22, 5, ctx_r33.nonPregnantWomenList, ctx_r33.pwSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c1, ctx_r33.p)));
  }
}
function PwRegisterComponent_mat_tab_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PwRegisterComponent_mat_tab_19_ng_template_1_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PwRegisterComponent_mat_tab_19_ng_template_2_Template, 24, 10, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function PwRegisterComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Pregnant Woman Register ");
  }
}
function PwRegisterComponent_ng_template_22_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 47)(14, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PwRegisterComponent_ng_template_22_tr_21_Template_i_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49);
      const i_r47 = restoredCtx.index;
      const item_r46 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.openPwList(i_r47, item_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r45.p - 1) * 6 + i_r47 + 1 ? (ctx_r45.p - 1) * 6 + i_r47 + 1 : i_r47 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r46.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r46.firstName, " ", item_r46.middleName, " ", item_r46.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r46.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r46.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r46.pregnancyStatus == "N" ? "No" : "Yes");
  }
}
function PwRegisterComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "table", 43)(4, "thead", 44)(5, "tr")(6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Family No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Current Pregnancy Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, PwRegisterComponent_ng_template_22_tr_21_Template, 15, 8, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function PwRegisterComponent_ng_template_22_Template_pagination_controls_pageChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r50.p = $event);
    })("pageBoundsCorrection", function PwRegisterComponent_ng_template_22_Template_pagination_controls_pageBoundsCorrection_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](22, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](23, 4, ctx_r3.allPregnantWomenList, ctx_r3.pwSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx_r3.p)));
  }
}
class PwRegisterComponent {
  constructor(httpService, http, fb, sidebarService, baselineService, dialog, toaster, activatedRoute, router, validationService) {
    this.httpService = httpService;
    this.http = http;
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.baselineService = baselineService;
    this.dialog = dialog;
    this.toaster = toaster;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.validationService = validationService;
    this.allPregnantWomenList = [];
    this.nonPregnantWomenList = [];
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
    this.ssList = [];
    this.swasthyaSahayika = [];
    this.index = 0;
    this.page = 1;
    this.pageSize = 6;
    this.loader = true;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.setStatus = params['status'];
      this.familyID = params['familyID'];
      this.regionID = params['regionID'];
      this.branchID = params['branchID'];
      this.blockID = params['blockID'];
      this.gpID = params['gpID'];
      this.villageID = params['villageID'];
    });
    let JSONDatas = {
      regionID: this.regionID,
      branchID: this.branchID,
      blockID: this.blockID,
      gpID: this.gpID,
      villageID: this.villageID
    };
    localStorage.setItem("datas", JSON.stringify(JSONDatas));
    if (this.setStatus == 'viewCentral') {
      this.getPregnantWomenList(this.villageID);
    } else {
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
          this.regionBranchHide = res.regionBranchHide;
          this.http.post(`${this.sidebarService.baseURL}village/getVillagesOfABranch`, Dto).subscribe(res => {
            if (res.sessionDTO.status == true) {
              this.villagesOfBranch = res.responseObject;
            }
          });
        }
        this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
        this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
        this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/pw-register']) : this.router.navigate(['/error']);
      });
    }
  }
  tabChanged(tabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  p(event) {}
  changeRegion(region) {
    let regionId = this.regionList.find(reg => reg.regionName == region)?.regionMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.baselineService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
    }, error => {
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
  changeBranch(branch) {
    this.sidebarService.branchId = this.branchList?.find(bran => bran.branchName == branch)?.branchId;
    this.sidebarService.branchName = this.locationForm.get('branch').value;
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.sidebarService.branchId
    };
    this.baselineService.villagesOfBranch(Dto).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch2');
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
  changeBlock(blockname) {
    this.gpDtoList = this.villagesOfBranch.find(block => block.blockName == blockname)?.gpDtoList;
    this.selectedBlock = this.locationForm.get('block').value;
    this.locationForm.controls.gp.setValue('');
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.block == '') {
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.villageDtoList = [];
    }
  }
  changeVillage(villageId) {
    this.villageMasterId = villageId;
    // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)
    //   ?.gpDtoList.find(gp => gp.name == this.selectedGp)
    //   ?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getPregnantWomenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {}
  }
  createForm() {
    this.locationForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
  }
  get f() {
    return this.locationForm.controls;
  }
  /* get the all Pregnant Women List */
  getPregnantWomenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    };
    console.log(req);
    this.loader = false;
    this.httpService.getPregnantWomenList(req).subscribe(res => {
      this.allPregnantWomenList = res.responseObject?.pregnantWomanList;
      this.nonPregnantWomenList = res.responseObject?.nonPregnantWomanList;
      console.log(this.allPregnantWomenList);
      this.loader = true;
      if (this.setStatus == 'viewCentral') {
        var setData = this.allPregnantWomenList.filter(fam => fam.familyDetailId == this.familyID);
        console.log(setData);
        this.allPregnantWomenList = setData;
      }
    }, error => {
      this.showError('Error');
      this.loader = true;
    });
  }
  openPwList(i, pregnantWomenList) {
    const dialogRef = this.dialog.open(_single_pw_list_single_pw_list_component__WEBPACK_IMPORTED_MODULE_1__.SinglePwListComponent, {
      width: '1000px',
      height: '550px',
      data: {
        id: pregnantWomenList.familyDetailId,
        singlePregnantWomenList: pregnantWomenList,
        villageMasterId: this.setStatus == 'viewCentral' ? this.villageID : this.villageMasterId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.setStatus == 'viewCentral') {
        this.getPregnantWomenList(this.villageID);
      } else this.getPregnantWomenList(this.villageMasterId);
    });
  }
  openPwStatus(womenList) {
    const dialogRef = this.dialog.open(_pw_status_pw_status_component__WEBPACK_IMPORTED_MODULE_0__.PwStatusComponent, {
      width: '500px',
      height: '280px',
      data: {
        nonPregnantWomenList: womenList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.setStatus == 'viewCentral') {
        this.getPregnantWomenList(this.villageID);
      } else this.getPregnantWomenList(this.villageMasterId);
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
PwRegisterComponent.ɵfac = function PwRegisterComponent_Factory(t) {
  return new (t || PwRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService));
};
PwRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: PwRegisterComponent,
  selectors: [["app-pw-register"]],
  decls: 23,
  vars: 5,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search pregnant info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-signin", 3, "formGroup", 4, "ngIf"], ["animationDuration", "500ms", 3, "selectedTabChange"], [4, "ngIf"], ["mat-tab-label", ""], ["matTabContent", ""], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [3, "value"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header-fixed"], [2, "width", "8%"], [2, "width", "10%"], [2, "width", "20%"], ["style", "width:20%;", 4, "ngIf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["title", "Edit", 1, "fas", "fa-edit", 3, "click"], ["title", "View", 1, "fas", "fa-list", 3, "click"]],
  template: function PwRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Pregnant Woman Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10)(12, "div", 11)(13, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function PwRegisterComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.pwSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, PwRegisterComponent_form_16_Template, 34, 20, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-tab-group", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedTabChange", function PwRegisterComponent_Template_mat_tab_group_selectedTabChange_18_listener($event) {
        return ctx.tabChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, PwRegisterComponent_mat_tab_19_Template, 3, 0, "mat-tab", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, PwRegisterComponent_ng_template_21_Template, 1, 0, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, PwRegisterComponent_ng_template_22_Template, 25, 9, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.pwSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.setStatus != "viewCentral");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.setStatus != "viewCentral");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabContent, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe],
  styles: [".mat-tab-group.mat-primary .mat-ink-bar {\r\n  background-color: #499 !important;\r\n}\r\n  .mat-tab-label .mat-tab-label-content {\r\n  font-size: medium;\r\n}\r\n\r\n  .mat-tab-header .mat-tab-labels {\r\n  justify-content: start;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 330px;\r\n  height: 63%;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 625px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 474px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 630px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n.fa-list[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcmVnbmFudC13b21lbi1yZWdpc3Rlci9wdy1yZWdpc3Rlci9wdy1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbHMge1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xyXG4gIGhlaWdodDogNjMlO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzJkYWFiODtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3NHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG59XHJcblxyXG4uZmEtbGlzdDpob3ZlciB7XHJcbiAgY29sb3I6ICM3MGNhZjcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 11062:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-status/pw-status.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwStatusComponent": () => (/* binding */ PwStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);







class PwStatusComponent {
  constructor(fb, http, toaster, httpService, data, dialogRef) {
    this.fb = fb;
    this.http = http;
    this.toaster = toaster;
    this.httpService = httpService;
    this.data = data;
    this.dialogRef = dialogRef;
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data.nonPregnantWomenList);
    this.pwStatusForm = this.fb.group({
      pregnantStatus: [null]
    });
    this.pwName = this.data.nonPregnantWomenList.firstName + this.data.nonPregnantWomenList.middleName + this.data.nonPregnantWomenList.lastName;
    this.pwStatusForm.patchValue({
      pregnantStatus: this.data.nonPregnantWomenList.pregnancyStatus
    });
  }
  onSave() {
    if (this.pwStatusForm.get('pregnantStatus').value == 'N' || this.pwStatusForm.get('pregnantStatus').value == 'NA') {
      return;
    } else {
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        familyDetailId: this.data.nonPregnantWomenList.familyDetailId,
        pregnantWomanStatus: this.pwStatusForm.value.pregnantStatus
      };
      console.log(Dto);
      this.http.post(`${this.httpService.baseURL}pwr/updateFamilyPregnantWomanDetail`, Dto).subscribe(res => {
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('Success');
        } else {
          this.showError(res.message);
        }
      }, error => {
        this.dialogRef.close();
        this.showError('Error');
      });
    }
  }
  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Status Change', {
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
PwStatusComponent.ɵfac = function PwStatusComponent_Factory(t) {
  return new (t || PwStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
};
PwStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PwStatusComponent,
  selectors: [["app-pw-status"]],
  decls: 38,
  vars: 2,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["type", "radio", "value", "Y", "formControlName", "pregnantStatus"], ["type", "radio", "value", "N", "formControlName", "pregnantStatus"], ["type", "radio", "value", "NA", "formControlName", "pregnantStatus"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]],
  template: function PwStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pregnant Woman Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PwStatusComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 5)(10, "div", 6)(11, "div", 7)(12, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Change pregnant status :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "NA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11)(36, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PwStatusComponent_Template_button_click_36_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Pregnant Woman Name : ", ctx.pwName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pwStatusForm);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\r\n.addEditBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: left;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcmVnbmFudC13b21lbi1yZWdpc3Rlci9wdy1zdGF0dXMvcHctc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxufVxyXG4uYWRkRWRpdEJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 59683:
/*!******************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/pw-view/pw-view.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwViewComponent": () => (/* binding */ PwViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);












function PwViewComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Weight should be 20 to 200 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_13_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.initialWeight.errors.notInWeightRange);
  }
}
function PwViewComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Last Menstrual Period is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_20_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.lastMenstrualDate.errors.required);
  }
}
function PwViewComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6)(3, "div", 7)(4, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "1st ANC Checkup:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_div_41_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.anc1stDate($event.target.value));
    })("keydown", function PwViewComponent_div_41_Template_input_keydown_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "2nd ANC checkup:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_div_41_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.anc2ndDate($event.target.value));
    })("keydown", function PwViewComponent_div_41_Template_input_keydown_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "3rd ANC checkup:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_div_41_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.anc3rdDate($event.target.value));
    })("keydown", function PwViewComponent_div_41_Template_input_keydown_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "4th ANC checkup:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_div_41_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.anc4thDate($event.target.value));
    })("keydown", function PwViewComponent_div_41_Template_input_keydown_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx_r2.Anc1stMin)("max", ctx_r2.today)("enableClearButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx_r2.Anc2ndMin)("max", ctx_r2.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx_r2.Anc3rdMin)("max", ctx_r2.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx_r2.Anc4thMin)("max", ctx_r2.today);
  }
}
function PwViewComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "*ANC Checkup Done*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Weight should be 20 to 200 kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_54_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.f.beforeDeliveryWeight.errors.notInWeightRange);
  }
}
function PwViewComponent_div_72_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0\u00A0\u00A0Reason selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_72_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_72_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.f.deliveryNo.errors.required);
  }
}
function PwViewComponent_div_72_div_20_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Miscarriage Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_72_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_72_div_20_div_6_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r26.f.miscarriage.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function PwViewComponent_div_72_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Miscarriage:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function PwViewComponent_div_72_div_20_Template_input_keydown_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PwViewComponent_div_72_div_20_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, ctx_r23.f.miscarriage.invalid && ctx_r23.f.miscarriage.touched, ctx_r23.f.miscarriage.valid && (ctx_r23.f.miscarriage.dirty || ctx_r23.f.miscarriage.touched)))("min", ctx_r23.miscarriageAbortionMinDate)("max", ctx_r23.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.f.miscarriage.errors);
  }
}
function PwViewComponent_div_72_div_21_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Abortion Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_72_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_72_div_21_div_6_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r30.f.abortion.errors.required);
  }
}
function PwViewComponent_div_72_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Abortion:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function PwViewComponent_div_72_div_21_Template_input_keydown_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PwViewComponent_div_72_div_21_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, ctx_r24.f.abortion.invalid && ctx_r24.f.abortion.touched, ctx_r24.f.abortion.valid && (ctx_r24.f.abortion.dirty || ctx_r24.f.abortion.touched)))("min", ctx_r24.miscarriageAbortionMinDate)("max", ctx_r24.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r24.f.abortion.errors);
  }
}
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function PwViewComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Reason :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_div_72_Template_input_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.checkDeliveryStatusNo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Miscarriage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label")(15, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_div_72_Template_input_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.checkDeliveryStatusNo($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Abortion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PwViewComponent_div_72_div_19_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PwViewComponent_div_72_div_20_Template, 7, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PwViewComponent_div_72_div_21_Template, 7, 7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r5.submitted && (ctx_r5.f.deliveryNo.errors == null ? null : ctx_r5.f.deliveryNo.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c1, ctx_r5.submitted && (ctx_r5.f.deliveryNo.errors == null ? null : ctx_r5.f.deliveryNo.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.f.deliveryNo.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.miscarriage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.abortion);
  }
}
function PwViewComponent_div_73_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actual Date of Delivery selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_73_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_73_div_7_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r37.f.actualDeliveryDate.errors.required);
  }
}
function PwViewComponent_div_73_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0\u00A0\u00A0Live / Still selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_73_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_73_div_26_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r38.f.liveStill.errors.required);
  }
}
function PwViewComponent_div_73_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0\u00A0\u00A0Delivery place selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_73_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PwViewComponent_div_73_div_45_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r39.f.deliveryPlace.errors.required);
  }
}
function PwViewComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Actual Date of Delivery:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_div_73_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.enableliveStillDelivery());
    })("keydown", function PwViewComponent_div_73_Template_input_keydown_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r45.restrictTypeOfDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PwViewComponent_div_73_div_7_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Livebirth or Stillbirth:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Still");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PwViewComponent_div_73_div_26_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Place of Delivery :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, PwViewComponent_div_73_div_45_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](10, _c0, ctx_r6.f.actualDeliveryDate.invalid && ctx_r6.f.actualDeliveryDate.touched, ctx_r6.f.actualDeliveryDate.valid && (ctx_r6.f.actualDeliveryDate.dirty || ctx_r6.f.actualDeliveryDate.touched)))("min", ctx_r6.actualDeliveryDate)("max", ctx_r6.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.actualDeliveryDate.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx_r6.submitted && (ctx_r6.f.liveStill.errors == null ? null : ctx_r6.f.liveStill.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx_r6.submitted && (ctx_r6.f.liveStill.errors == null ? null : ctx_r6.f.liveStill.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.liveStill.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx_r6.submitted && (ctx_r6.f.deliveryPlace.errors == null ? null : ctx_r6.f.deliveryPlace.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx_r6.submitted && (ctx_r6.f.deliveryPlace.errors == null ? null : ctx_r6.f.deliveryPlace.errors.required)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.f.deliveryPlace.errors);
  }
}
function PwViewComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Time Of death:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "During Pregnancy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "During Labour");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Postpartum");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function PwViewComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reason Of Death:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PwViewComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_div_95_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class PwViewComponent {
  constructor(http, httpService, fb, validationService, toaster, sidebarService, data, dialogRef) {
    this.http = http;
    this.httpService = httpService;
    this.fb = fb;
    this.validationService = validationService;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.createForm();
    console.log(this.data.pregnantWomanRegisterData, 'editpage');
    this.editMode();
    if (this.data.viewMode) {
      this.viewMode = this.data.viewMode;
      this.editMode();
      this.pwRegisterForm.disable();
    }
  }
  editMode() {
    this.pwRegisterForm.patchValue({
      initialWeight: this.data.pregnantWomanRegisterData.initialWeight,
      lastMenstrualDate: this.data.pregnantWomanRegisterData.lastMenstrualPeriod,
      expectedDeliveryDate: this.data.pregnantWomanRegisterData.expectedDateOfDelivery,
      ancComplete: this.data.pregnantWomanRegisterData.antenatalCheckup,
      anc1st: this.data.pregnantWomanRegisterData.firstAncCheckup,
      anc2nd: this.data.pregnantWomanRegisterData.secondAncCheckup,
      anc3rd: this.data.pregnantWomanRegisterData.thirdAncCheckup,
      anc4th: this.data.pregnantWomanRegisterData.fourthAncCheckup,
      pregnancyComplication: this.data.pregnantWomanRegisterData.pregnancyComplication,
      beforeDeliveryWeight: this.data.pregnantWomanRegisterData.weightBeforeDelivery,
      delivery: this.data.pregnantWomanRegisterData.delivery,
      deliveryNo: this.data.pregnantWomanRegisterData.miscarriage != null ? 'miscarriage' : this.data.pregnantWomanRegisterData.abortion != null ? 'abortion' : '',
      miscarriage: this.data.pregnantWomanRegisterData.miscarriage,
      abortion: this.data.pregnantWomanRegisterData.abortion,
      actualDeliveryDate: this.data.pregnantWomanRegisterData.actualDateOfDelivery,
      liveStill: this.data.pregnantWomanRegisterData.livebirthOrStillbirth,
      deliveryPlace: this.data.pregnantWomanRegisterData.placeOfDelivery,
      womenDeath: this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus == null ? 'N' : 'Y',
      deathTime: this.data.pregnantWomanRegisterData?.familyDeathRegister?.timeOfDeath,
      deathReason: this.data.pregnantWomanRegisterData?.familyDeathRegister?.familyDeathComment
    });
    if (this.data.pregnantWomanRegisterData.antenatalCheckup == 'Y') {
      this.checkAncComplete = true;
    } else {
      this.checkAncComplete = false;
    }
    if (this.data.pregnantWomanRegisterData.delivery == 'Y') {
      this.checkDeliveryStatus('Y');
      this.enableActualDelivery();
    }
    if (this.data.pregnantWomanRegisterData.delivery == 'N') {
      this.checkDeliveryStatus('N');
      let value = this.data.pregnantWomanRegisterData.miscarriage != null ? 'miscarriage' : 'abortion';
      if (value == 'miscarriage') {
        this.pwRegisterForm.controls['miscarriage'].enable();
        this.pwRegisterForm.controls['abortion'].disable();
        this.pwRegisterForm.get('miscarriage').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.pwRegisterForm.get('abortion').clearAsyncValidators();
        this.pwRegisterForm.controls['abortion'].reset();
        this.miscarriage = true;
        this.abortion = false;
      } else if (value == 'abortion') {
        this.pwRegisterForm.controls['miscarriage'].disable();
        this.pwRegisterForm.controls['abortion'].enable();
        this.pwRegisterForm.get('abortion').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
        this.pwRegisterForm.controls['miscarriage'].reset();
        this.miscarriage = false;
        this.abortion = true;
      }
    }
    this.enableDeliveryStatusNo();
    if (this.data.pregnantWomanRegisterData.lastMenstrualPeriod != null) {
      this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
      this.miscarriageAbortionMinDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
      let after12date = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(12, 'M').format('YYYY-MM-DD');
      this.maxEdd = after12date;
      this.Anc1stMin = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.lastMenstrualPeriod).add(1, 'days').format('YYYY-MM-DD');
    }
    if (this.data.pregnantWomanRegisterData.firstAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.firstAncCheckup;
      this.Anc2ndMin = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.firstAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }
    if (this.data.pregnantWomanRegisterData.secondAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.secondAncCheckup;
      this.Anc3rdMin = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.secondAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }
    if (this.data.pregnantWomanRegisterData.thirdAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.thirdAncCheckup;
      this.Anc4thMin = moment__WEBPACK_IMPORTED_MODULE_0__(this.data.pregnantWomanRegisterData.thirdAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }
    if (this.data.pregnantWomanRegisterData.fourthAncCheckup != null) {
      this.actualDeliveryDate = this.data.pregnantWomanRegisterData.fourthAncCheckup;
      // this.actualDeliveryDate = moment(this.data.pregnantWomanRegisterData.fourthAncCheckup).add(1, 'days').format('YYYY-MM-DD');
      if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
        this.showMessage = true;
      } else {
        this.showMessage = false;
      }
    }
    if (this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus == 'Y') {
      this.checkMotherDeath(this.data.pregnantWomanRegisterData?.familyDeathRegister?.deathStatus);
    }
  }
  createForm() {
    this.pwRegisterForm = this.fb.group({
      initialWeight: [null, this.weightRange],
      lastMenstrualDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      expectedDeliveryDate: [null],
      ancComplete: [null],
      anc1st: [null],
      anc2nd: [null],
      anc3rd: [null],
      anc4th: [null],
      pregnancyComplication: [''],
      beforeDeliveryWeight: [null, this.weightRange],
      delivery: [''],
      deliveryNo: [''],
      miscarriage: [''],
      abortion: [''],
      actualDeliveryDate: [''],
      liveStill: [null],
      deliveryPlace: [null],
      womenDeath: ['N'],
      deathTime: [null],
      deathReason: [null]
    });
  }
  get f() {
    return this.pwRegisterForm.controls;
  }
  weightRange(controls) {
    if (controls.value >= 20 && controls.value <= 200 || controls.value == null) {
      return null;
    }
    return {
      'notInWeightRange': true
    };
  }
  restrictAncDate(value) {
    this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    this.miscarriageAbortionMinDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    let after12date = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(12, 'M').format('YYYY-MM-DD');
    this.maxEdd = after12date;
    this.Anc1stMin = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('expectedDeliveryDate').reset();
    this.pwRegisterForm.get('anc1st').reset();
    this.pwRegisterForm.get('anc2nd').reset();
    this.pwRegisterForm.get('anc3rd').reset();
    this.pwRegisterForm.get('anc4th').reset();
    this.pwRegisterForm.get('actualDeliveryDate').reset();
  }
  restrictTypeOfDate() {
    return false;
  }
  checkAnc(value) {
    if (value == 'Y') {
      this.checkAncComplete = true;
    } else {
      this.checkAncComplete = false;
    }
  }
  checkDeliveryStatus(value) {
    if (value == 'N') {
      this.deliveryStatusNo = true;
      this.deliveryStatusYes = false;
      this.pwRegisterForm.controls['deliveryNo'].enable();
      this.pwRegisterForm.get('deliveryNo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearValidators();
      this.pwRegisterForm.get('deliveryPlace').clearValidators();
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
    } else if (value == 'Y') {
      this.pwRegisterForm.get('deliveryNo').clearValidators();
      this.pwRegisterForm.controls['deliveryNo'].disable();
      this.deliveryStatusYes = true;
      this.deliveryStatusNo = false;
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].disable();
      this.enableActualDelivery();
    } else {
      this.deliveryStatusNo = false;
      this.deliveryStatusYes = false;
      this.pwRegisterForm.get('deliveryNo').clearAsyncValidators();
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearAsyncValidators();
      this.pwRegisterForm.get('deliveryPlace').clearAsyncValidators();
    }
  }
  checkDeliveryStatusNo(value) {
    this.enableDeliveryStatusNo();
    if (value == 'miscarriage') {
      this.pwRegisterForm.controls['miscarriage'].enable();
      this.pwRegisterForm.controls['abortion'].disable();
      this.pwRegisterForm.get('miscarriage').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].reset();
      this.pwRegisterForm.controls['abortion'].reset();
      this.miscarriage = true;
      this.abortion = false;
    } else if (value == 'abortion') {
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].enable();
      this.pwRegisterForm.get('abortion').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.controls['miscarriage'].reset();
      this.pwRegisterForm.controls['abortion'].reset();
      this.miscarriage = false;
      this.abortion = true;
    } else {
      this.miscarriage = false;
      this.abortion = false;
      this.pwRegisterForm.get('miscarriage').clearAsyncValidators();
      this.pwRegisterForm.get('abortion').clearAsyncValidators();
    }
  }
  enableDeliveryStatusNo() {
    if (this.pwRegisterForm.controls['lastMenstrualDate'].value == null) {
      this.pwRegisterForm.controls['miscarriage'].disable();
      this.pwRegisterForm.controls['abortion'].disable();
    } else {
      this.pwRegisterForm.controls['miscarriage'].enable();
      this.pwRegisterForm.controls['abortion'].enable();
    }
  }
  anc1stDate(value) {
    this.pwRegisterForm.controls.anc2nd.setValue(null);
    this.pwRegisterForm.controls.anc3rd.setValue(null);
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).format('YYYY-MM-DD');
    this.Anc2ndMin = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc2ndDate(value) {
    this.pwRegisterForm.controls.anc3rd.setValue(null);
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).format('YYYY-MM-DD');
    this.Anc3rdMin = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc3rdDate(value) {
    this.pwRegisterForm.controls.anc4th.setValue(null);
    this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).format('YYYY-MM-DD');
    this.Anc4thMin = moment__WEBPACK_IMPORTED_MODULE_0__(value).add(1, 'days').format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  anc4thDate(value) {
    this.actualDeliveryDate = moment__WEBPACK_IMPORTED_MODULE_0__(value).format('YYYY-MM-DD');
    this.pwRegisterForm.get('actualDeliveryDate').reset();
    if (this.pwRegisterForm.controls['anc1st'].value != null && this.pwRegisterForm.controls['anc2nd'].value != null && this.pwRegisterForm.controls['anc3rd'].value != null) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }
  enableActualDelivery() {
    if (this.pwRegisterForm.controls['initialWeight'].value == null || this.pwRegisterForm.controls['lastMenstrualDate'].value == null || this.pwRegisterForm.controls['expectedDeliveryDate'].value == null || this.pwRegisterForm.controls['beforeDeliveryWeight'].value == null || this.pwRegisterForm.controls['ancComplete'].value == null || this.pwRegisterForm.controls['ancComplete'].value == null) {
      this.pwRegisterForm.get('actualDeliveryDate').clearAsyncValidators();
      this.pwRegisterForm.get('liveStill').clearAsyncValidators();
      this.pwRegisterForm.get('deliveryPlace').clearAsyncValidators();
      this.pwRegisterForm.controls['actualDeliveryDate'].disable();
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
      this.pwRegisterForm.controls['actualDeliveryDate'].reset();
      this.pwRegisterForm.controls['liveStill'].reset();
      this.pwRegisterForm.controls['deliveryPlace'].reset();
    } else {
      this.pwRegisterForm.controls['actualDeliveryDate'].enable();
      this.pwRegisterForm.controls['liveStill'].enable();
      this.pwRegisterForm.controls['deliveryPlace'].enable();
      this.pwRegisterForm.get('actualDeliveryDate').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('liveStill').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('deliveryPlace').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    }
  }
  enableliveStillDelivery() {
    if (this.pwRegisterForm.controls['actualDeliveryDate'].value == null) {
      this.pwRegisterForm.controls['liveStill'].disable();
      this.pwRegisterForm.controls['deliveryPlace'].disable();
    } else {
      this.pwRegisterForm.controls['liveStill'].enable();
      this.pwRegisterForm.controls['deliveryPlace'].enable();
      this.pwRegisterForm.get('liveStill').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('deliveryPlace').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    }
  }
  checkMotherDeath(value) {
    this.MotherDeath = value;
    if (this.pwRegisterForm.get('womenDeath').value == 'Y') {
      this.pwRegisterForm.get('deathTime').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
      this.pwRegisterForm.get('deathReason').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    } else {
      this.pwRegisterForm.get('deathTime').clearAsyncValidators();
      this.pwRegisterForm.get('deathReason').clearAsyncValidators();
      this.pwRegisterForm.get('deathTime').reset();
      this.pwRegisterForm.get('deathReason').reset();
    }
  }
  validation() {
    if (this.pwRegisterForm.value.actualDeliveryDate) {
      if (this.pwRegisterForm.value.actualDeliveryDate <= this.pwRegisterForm.value.lastMenstrualDate) {
        this.showError('Actual Date of Delivery should be after Last Menstrual Period');
        return;
      }
    }
    if (this.pwRegisterForm.value.anc1st) {
      if (this.pwRegisterForm.value.actualDeliveryDate < this.pwRegisterForm.value.anc1st) {
        this.showError('Actual Date of Delivery should be on or after 1st ANC Checkup');
      }
      return;
    }
    if (this.pwRegisterForm.value.anc2nd) {
      if (this.pwRegisterForm.value.actualDeliveryDate < this.pwRegisterForm.value.anc2nd) {
        this.showError('Actual Date of Delivery should be on or after 2nd ANC Checkup');
      }
      return;
    }
    if (this.pwRegisterForm.value.anc3rd) {
      if (this.pwRegisterForm.value.actualDeliveryDate < this.pwRegisterForm.value.anc3rd) {
        this.showError('Actual Date of Delivery should be on or after 3rd ANC Checkup');
      }
      return;
    }
    if (this.pwRegisterForm.value.anc4th) {
      if (this.pwRegisterForm.value.actualDeliveryDate < this.pwRegisterForm.value.anc4th) {
        this.showError('Actual Date of Delivery should be on or after 4th ANC Checkup');
      }
      return;
    }
    if (this.pwRegisterForm.get('delivery').value == 'Y' && this.pwRegisterForm.get('actualDeliveryDate').value == null) {
      this.showError('Please fill-up Actual Date of Delivery ');
      return;
    }
  }
  onSave() {
    console.log(this.pwRegisterForm);
    this.validation();
    this.pwRegisterForm.markAllAsTouched();
    if (this.pwRegisterForm.valid) {
      if (this.data.createMode == true) {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          pregnantWomanRegisterDto: {
            pregnantWomanRegisterId: 0,
            familyDetailId: this.data.pregnantWomanRegisterData.familyDetailId,
            initialWeight: this.pwRegisterForm.value.initialWeight,
            lastMenstrualPeriod: this.pwRegisterForm.value.lastMenstrualDate,
            expectedDateOfDelivery: this.pwRegisterForm.value.expectedDeliveryDate,
            antenatalCheckup: this.pwRegisterForm.value.ancComplete,
            firstAncCheckup: this.pwRegisterForm.value.anc1st,
            secondAncCheckup: this.pwRegisterForm.value.anc2nd,
            thirdAncCheckup: this.pwRegisterForm.value.anc3rd,
            fourthAncCheckup: this.pwRegisterForm.value.anc4th,
            pregnancyComplication: this.pwRegisterForm.value.pregnancyComplication,
            weightBeforeDelivery: this.pwRegisterForm.value.beforeDeliveryWeight,
            delivery: this.pwRegisterForm.value.delivery,
            miscarriage: this.pwRegisterForm.value.miscarriage,
            abortion: this.pwRegisterForm.value.abortion,
            actualDateOfDelivery: this.pwRegisterForm.value.actualDeliveryDate ? this.pwRegisterForm.value.actualDeliveryDate : null,
            livebirthOrStillbirth: this.pwRegisterForm.value.liveStill ? this.pwRegisterForm.value.liveStill : null,
            placeOfDelivery: this.pwRegisterForm.value.deliveryPlace ? this.pwRegisterForm.value.deliveryPlace : null
          },
          familyDeathRegister: {
            deathStatus: this.pwRegisterForm.value.womenDeath,
            familyDeathComment: this.pwRegisterForm.value.deathReason,
            family_death_register_id: 0,
            timeOfDeath: this.pwRegisterForm.value.deathTime
          }
        };
        console.log(Dto, 'reqAdd');
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe(res => {
          console.log(res, 'responseAdd');
          if (res.status) {
            this.dialogRef.close();
            this.showSuccess('Success');
          } else {
            this.dialogRef.close();
            this.showError(res.message);
          }
        }, error => {
          this.dialogRef.close();
          this.showError('Error');
        });
      } else {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          pregnantWomanRegisterDto: {
            pregnantWomanRegisterId: this.data.pregnantWomanRegisterData.pregnantWomanRegisterId,
            familyDetailId: this.data.familyDetailId,
            initialWeight: this.pwRegisterForm.value.initialWeight,
            lastMenstrualPeriod: this.pwRegisterForm.value.lastMenstrualDate,
            expectedDateOfDelivery: this.pwRegisterForm.value.expectedDeliveryDate,
            antenatalCheckup: this.pwRegisterForm.value.ancComplete,
            firstAncCheckup: this.pwRegisterForm.value.anc1st,
            secondAncCheckup: this.pwRegisterForm.value.anc2nd,
            thirdAncCheckup: this.pwRegisterForm.value.anc3rd,
            fourthAncCheckup: this.pwRegisterForm.value.anc4th,
            pregnancyComplication: this.pwRegisterForm.value.pregnancyComplication,
            weightBeforeDelivery: this.pwRegisterForm.value.beforeDeliveryWeight,
            delivery: this.pwRegisterForm.value.actualDeliveryDate || this.pwRegisterForm.value.miscarriage || this.pwRegisterForm.value.abortion ? this.pwRegisterForm.value.delivery : null,
            miscarriage: this.pwRegisterForm.value.miscarriage == undefined ? null : this.pwRegisterForm.value.miscarriage,
            abortion: this.pwRegisterForm.value.abortion == undefined ? null : this.pwRegisterForm.value.abortion,
            actualDateOfDelivery: this.pwRegisterForm.value.actualDeliveryDate ? this.pwRegisterForm.value.actualDeliveryDate : null,
            livebirthOrStillbirth: this.pwRegisterForm.value.liveStill ? this.pwRegisterForm.value.liveStill : null,
            placeOfDelivery: this.pwRegisterForm.value.deliveryPlace ? this.pwRegisterForm.value.deliveryPlace : null
          },
          familyDeathRegister: {
            deathStatus: this.pwRegisterForm.value.womenDeath,
            familyDeathComment: this.pwRegisterForm.value.deathReason,
            family_death_register_id: this.data.pregnantWomanRegisterData.familyDeathRegister == null ? 0 : this.data.pregnantWomanRegisterData.familyDeathRegister.deathStatus == 'Y' ? this.data.pregnantWomanRegisterData.familyDeathRegister.family_death_register_id : 0,
            timeOfDeath: this.pwRegisterForm.value.deathTime
          }
        };
        console.log(Dto, 'reqEdit');
        this.http.post(`${this.httpService.baseURL}pwr/saveOrUpdatePregnantWomanDetails`, Dto).subscribe(res => {
          console.log(res, 'responseEdit');
          if (res.status) {
            this.dialogRef.close();
            this.showSuccess('Success');
          } else {
            this.dialogRef.close();
            this.showError(res.message);
          }
        }, error => {
          this.dialogRef.close();
          this.showError('Error');
        });
      }
    } else {
      this.showError('Please fill-up the form correctly ');
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Pregnant Woman Details Save', {
      timeOut: 3000
    });
  }
  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
PwViewComponent.ɵfac = function PwViewComponent_Factory(t) {
  return new (t || PwViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
};
PwViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PwViewComponent,
  selectors: [["app-pw-view"]],
  decls: 96,
  vars: 26,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["for", "initialWeight"], ["type", "text", "placeholder", "Enter weight", "formControlName", "initialWeight", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "change"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastMenstrualDate"], [1, "text-danger"], ["type", "date", "formControlName", "lastMenstrualDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "max", "ngClass", "change", "keydown"], ["for", "expectedDeliveryDate"], ["type", "date", "formControlName", "expectedDeliveryDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "change", "keydown"], ["type", "radio", "value", "Y", "formControlName", "ancComplete", 3, "click", "change"], ["type", "radio", "value", "N", "formControlName", "ancComplete", 3, "click", "change"], [4, "ngIf"], ["style", "color: #29a10b; font-weight: bold; margin: 0 40%;", 4, "ngIf"], ["for", "pregnancyComplication"], ["rows", "1", "formControlName", "pregnancyComplication", "maxlength", "100", 1, "form-control"], ["for", "beforeDeliveryWeight"], ["type", "text", "placeholder", "Enter weight", "formControlName", "beforeDeliveryWeight", "maxlength", "7", 1, "form-control", 3, "ngClass", "keypress", "change"], ["type", "radio", "value", "Y", "formControlName", "delivery", 3, "click"], ["type", "radio", "value", "N", "formControlName", "delivery", 3, "click"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md-2"], ["type", "radio", "value", "Y", "formControlName", "womenDeath", 3, "change"], ["type", "radio", "value", "N", "formControlName", "womenDeath", 3, "change"], ["class", "form-group col-md", 4, "ngIf"], ["class", "form-group col-md-4", 4, "ngIf"], ["class", "addEditBtn", 4, "ngIf"], [1, "invalid-feedback"], ["for", "anc1st"], ["type", "date", "formControlName", "anc1st", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "enableClearButton", "change", "keydown"], ["for", "anc2nd"], ["type", "date", "formControlName", "anc2nd", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "change", "keydown"], ["for", "anc3rd"], ["type", "date", "formControlName", "anc3rd", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "change", "keydown"], ["for", "anc4th"], ["type", "date", "formControlName", "anc4th", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "min", "max", "change", "keydown"], [2, "color", "#29a10b", "font-weight", "bold", "margin", "0 40%"], ["type", "radio", "value", "miscarriage", "formControlName", "deliveryNo", 3, "ngClass", "click"], ["type", "radio", "value", "abortion", "formControlName", "deliveryNo", 3, "ngClass", "click"], ["class", "invalid-radio", 4, "ngIf"], [1, "invalid-radio"], ["for", "miscarriage"], ["type", "date", "formControlName", "miscarriage", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "abortion"], ["type", "date", "formControlName", "abortion", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "ngClass", "min", "max", "keydown"], ["for", "actualDeliveryDate"], ["type", "date", "formControlName", "actualDeliveryDate", "placeholder", "dd-mm-yyyy", 1, "form-control", 3, "ngClass", "min", "max", "change", "keydown"], ["type", "radio", "value", "Live", "formControlName", "liveStill", 3, "ngClass"], ["type", "radio", "value", "Still", "formControlName", "liveStill", 3, "ngClass"], ["type", "radio", "value", "Home", "formControlName", "deliveryPlace", 3, "ngClass"], ["type", "radio", "value", "Institution", "formControlName", "deliveryPlace", 3, "ngClass"], ["type", "radio", "value", "DP", "formControlName", "deathTime"], ["type", "radio", "value", "DL", "formControlName", "deathTime"], ["type", "radio", "value", "PP", "formControlName", "deathTime"], [1, "form-group", "col-md-4"], ["for", "deathReason"], ["rows", "3", "formControlName", "deathReason", "placeholder", "Enter Comment", "maxlength", "300", 1, "form-control"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"]],
  template: function PwViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pregnant Woman Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Initial Weight (kg):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PwViewComponent_Template_input_keypress_12_listener($event) {
        return ctx.validationService.onlyIntegerAndDot($event);
      })("change", function PwViewComponent_Template_input_change_12_listener() {
        return ctx.enableActualDelivery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PwViewComponent_div_13_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7)(15, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Last Menstrual Period (LMP):\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_Template_input_change_19_listener($event) {
        return ctx.restrictAncDate($event.target.value);
      })("change", function PwViewComponent_Template_input_change_19_listener() {
        return ctx.enableActualDelivery();
      })("change", function PwViewComponent_Template_input_change_19_listener() {
        return ctx.enableDeliveryStatusNo();
      })("keydown", function PwViewComponent_Template_input_keydown_19_listener() {
        return ctx.restrictTypeOfDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PwViewComponent_div_20_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7)(22, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Expected Date of Delivery (EDD):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_Template_input_change_24_listener() {
        return ctx.enableActualDelivery();
      })("keydown", function PwViewComponent_Template_input_keydown_24_listener() {
        return ctx.restrictTypeOfDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Antenatal Checkup Registration done (ANC):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " \u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_Template_input_click_31_listener($event) {
        return ctx.checkAnc($event.target.value);
      })("change", function PwViewComponent_Template_input_change_31_listener() {
        return ctx.enableActualDelivery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label")(37, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_Template_input_click_37_listener($event) {
        return ctx.checkAnc($event.target.value);
      })("change", function PwViewComponent_Template_input_change_37_listener() {
        return ctx.enableActualDelivery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PwViewComponent_div_41_Template, 19, 9, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, PwViewComponent_p_42_Template, 2, 0, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 6)(45, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Any pregnancy-related complication:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "textarea", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 6)(50, "div", 7)(51, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Weight Before Delivery (kg):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function PwViewComponent_Template_input_keypress_53_listener($event) {
        return ctx.validationService.onlyIntegerAndDot($event);
      })("change", function PwViewComponent_Template_input_change_53_listener() {
        return ctx.enableActualDelivery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, PwViewComponent_div_54_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 7)(56, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Delivery:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " \u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_Template_input_click_61_listener($event) {
        return ctx.checkDeliveryStatus($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "label")(67, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PwViewComponent_Template_input_click_67_listener($event) {
        return ctx.checkDeliveryStatus($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, PwViewComponent_div_72_Template, 22, 9, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, PwViewComponent_div_73_Template, 46, 21, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 6)(76, "div", 27)(77, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Death of the woman :");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, " \u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_Template_input_change_82_listener($event) {
        return ctx.checkMotherDeath($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "label")(88, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PwViewComponent_Template_input_change_88_listener($event) {
        return ctx.checkMotherDeath($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, PwViewComponent_div_92_Template, 24, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, PwViewComponent_div_93_Template, 6, 0, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, PwViewComponent_div_95_Template, 3, 0, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.pwRegisterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx.f.initialWeight.invalid && ctx.f.initialWeight.touched, ctx.f.initialWeight.valid && (ctx.f.initialWeight.dirty || ctx.f.initialWeight.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.initialWeight.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx.today)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c0, ctx.f.lastMenstrualDate.invalid && ctx.f.lastMenstrualDate.touched, ctx.f.lastMenstrualDate.valid && (ctx.f.lastMenstrualDate.dirty || ctx.f.lastMenstrualDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.lastMenstrualDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx.actualDeliveryDate)("max", ctx.maxEdd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkAncComplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c0, ctx.f.beforeDeliveryWeight.invalid && ctx.f.beforeDeliveryWeight.touched, ctx.f.beforeDeliveryWeight.valid && (ctx.f.beforeDeliveryWeight.dirty || ctx.f.beforeDeliveryWeight.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.f.beforeDeliveryWeight.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.deliveryStatusNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.deliveryStatusYes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.MotherDeath == "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.MotherDeath == "Y");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.viewMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\r\n.addEditBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n\r\n.invalid-radio[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcmVnbmFudC13b21lbi1yZWdpc3Rlci9wdy12aWV3L3B3LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMDAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbn1cclxuLmFkZEVkaXRCdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG59XHJcblxyXG4uaW52YWxpZC1yYWRpb3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 46704:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pregnant-women-register/single-pw-list/single-pw-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePwListComponent": () => (/* binding */ SinglePwListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _pw_history_pw_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pw-history/pw-history.component */ 14214);
/* harmony import */ var _pw_view_pw_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pw-view/pw-view.component */ 59683);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);












function SinglePwListComponent_div_10_tr_29_i_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SinglePwListComponent_div_10_tr_29_i_16_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.openPwEdit(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SinglePwListComponent_div_10_tr_29_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SinglePwListComponent_div_10_tr_29_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const item_r4 = ctx_r12.$implicit;
      const i_r5 = ctx_r12.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.deletePregnency(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SinglePwListComponent_div_10_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SinglePwListComponent_div_10_tr_29_i_16_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SinglePwListComponent_div_10_tr_29_i_17_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SinglePwListComponent_div_10_tr_29_Template_i_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const i_r5 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.ViewPw(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r5 + 1 == 1 ? "1st" : i_r5 + 1 == 2 ? "2nd" : i_r5 + 1 == 3 ? "3rd" : i_r5 + 1 + "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.pwName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r4.lastMenstrualPeriod == null ? "-" : item_r4.lastMenstrualPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r4.expectedDateOfDelivery == null ? "-" : item_r4.expectedDateOfDelivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r4.actualDateOfDelivery == null ? "-" : item_r4.actualDateOfDelivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.deleteMode);
  }
}
function SinglePwListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "table", 11)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "SL No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Family No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Husband Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Last Menstrual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Expected Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "of Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Month of pregnancy/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Actual Date of Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SinglePwListComponent_div_10_tr_29_Template, 19, 9, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.pregnantWomanRegisterDetailList);
  }
}
function SinglePwListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Records Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Add a new record.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class SinglePwListComponent {
  // allPregnantWomanRegisterId: Array<any> = [];
  constructor(data, dialogRef, dialog, httpService, confirmationDialogService, http, toaster, sidebarService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.httpService = httpService;
    this.confirmationDialogService = confirmationDialogService;
    this.http = http;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.pregnantWomanRegisterDetailList = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data.singlePregnantWomenList);
    this.pwName = this.data.singlePregnantWomenList.firstName + ' ' + this.data.singlePregnantWomenList.middleName + ' ' + this.data.singlePregnantWomenList.lastName;
    this.husbandOrGuardianName = this.data.singlePregnantWomenList.husbandOrGuardianName;
    this.familyNumber = this.data.singlePregnantWomenList.familyNumber;
    this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList.forEach(item => {
      this.pregnantWomanRegisterDetailList.push({
        "abortion": item.abortion,
        "actualDateOfDelivery": item.actualDateOfDelivery == null ? item.abortion == null ? item.miscarriage == null ? item.lastMenstrualPeriod == null ? '-' : moment__WEBPACK_IMPORTED_MODULE_2__(new Date(moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD'))).diff(new Date(item.lastMenstrualPeriod), 'months', true).toFixed(1) + " Month" : 'Miscarriage' : 'Abortion' : item.actualDateOfDelivery,
        "antenatalCheckup": item.antenatalCheckup,
        "delivery": item.delivery,
        "expectedDateOfDelivery": item.expectedDateOfDelivery,
        "firstAncCheckup": item.firstAncCheckup,
        "fourthAncCheckup": item.fourthAncCheckup,
        "initialWeight": item.initialWeight,
        "lastMenstrualPeriod": item.lastMenstrualPeriod,
        "livebirthOrStillbirth": item.livebirthOrStillbirth,
        "miscarriage": item.miscarriage,
        "placeOfDelivery": item.placeOfDelivery,
        "pregnancyComplication": item.pregnancyComplication,
        "pregnantWomanRegisterId": item.pregnantWomanRegisterId,
        "secondAncCheckup": item.secondAncCheckup,
        "thirdAncCheckup": item.thirdAncCheckup,
        "weightBeforeDelivery": item.weightBeforeDelivery
      });
    });
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 129 || item.subFunctionMasterId == 130 || item.subFunctionMasterId == 131 || item.subFunctionMasterId == 132)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }
  /* get the all Pregnant Women List */
  getPregnantWomenList(villageMasterId = null) {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    };
    this.httpService.getPregnantWomenList(req).subscribe(res => {
      this.pwName = this.data.singlePregnantWomenList.firstName + ' ' + this.data.singlePregnantWomenList.middleName + ' ' + this.data.singlePregnantWomenList.lastName;
      this.husbandOrGuardianName = this.data.singlePregnantWomenList.husbandOrGuardianName;
      this.familyNumber = this.data.singlePregnantWomenList.familyNumber;
      this.pregnantWomanRegisterDetailList = [];
      res?.responseObject?.pregnantWomanList.find(x => x.familyDetailId == this.data.id)?.pregnantWomanRegisterDetailList.forEach(item => {
        this.pregnantWomanRegisterDetailList.push({
          "abortion": item.abortion,
          "actualDateOfDelivery": item.actualDateOfDelivery == null ? item.abortion == null ? item.miscarriage == null ? item.lastMenstrualPeriod == null ? '-' : moment__WEBPACK_IMPORTED_MODULE_2__(new Date(moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD'))).diff(new Date(item.lastMenstrualPeriod), 'months', true).toFixed(1) + " Month" : 'Miscarriage' : 'Abortion' : item.actualDateOfDelivery,
          "antenatalCheckup": item.antenatalCheckup,
          "delivery": item.delivery,
          "expectedDateOfDelivery": item.expectedDateOfDelivery,
          "firstAncCheckup": item.firstAncCheckup,
          "fourthAncCheckup": item.fourthAncCheckup,
          "initialWeight": item.initialWeight,
          "lastMenstrualPeriod": item.lastMenstrualPeriod,
          "livebirthOrStillbirth": item.livebirthOrStillbirth,
          "miscarriage": item.miscarriage,
          "placeOfDelivery": item.placeOfDelivery,
          "pregnancyComplication": item.pregnancyComplication,
          "pregnantWomanRegisterId": item.pregnantWomanRegisterId,
          "secondAncCheckup": item.secondAncCheckup,
          "thirdAncCheckup": item.thirdAncCheckup,
          "weightBeforeDelivery": item.weightBeforeDelivery
        });
      });
      this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList = [];
      this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList = this.pregnantWomanRegisterDetailList;
      console.log(this.pregnantWomanRegisterDetailList, 'listpage');
    });
  }
  openPwEdit(i) {
    const dialogRef = this.dialog.open(_pw_view_pw_view_component__WEBPACK_IMPORTED_MODULE_1__.PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        pregnantWomanRegisterData: this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList[i],
        familyDetailId: this.data.singlePregnantWomenList.familyDetailId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.data.villageMasterId);
    });
  }
  ViewPw(i) {
    const dialogRef = this.dialog.open(_pw_view_pw_view_component__WEBPACK_IMPORTED_MODULE_1__.PwViewComponent, {
      width: '1000px',
      height: '550px',
      data: {
        viewMode: true,
        pregnantWomanRegisterData: this.data.singlePregnantWomenList.pregnantWomanRegisterDetailList[i],
        familyDetailId: this.data.singlePregnantWomenList.familyDetailId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPregnantWomenList(this.data.villageMasterId);
    });
  }
  openHistory() {
    const dialogRef = this.dialog.open(_pw_history_pw_history_component__WEBPACK_IMPORTED_MODULE_0__.PwHistoryComponent, {
      width: '1000px',
      height: '550px',
      data: {
        familyDetailId: this.data.singlePregnantWomenList.familyDetailId
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  // openCreatePage() {
  //   const dialogRef = this.dialog.open(PwViewComponent, {
  //     width: '1000px',
  //     height: '550px',
  //     data: {
  //       pregnantWomanRegisterData: this.data.singlePregnantWomenList
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getPregnantWomenList(this.data.villageMasterId)
  //   });
  // }
  deletePregnency(value, i) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyDetailId: this.data.singlePregnantWomenList.familyDetailId,
      pregnantWomanStatus: 'N',
      pregnantWomanRegisterId: value.pregnantWomanRegisterId
    };
    if (i === this.pregnantWomanRegisterDetailList.length - 1) {
      this.confirmationDialogService.confirm('', 'Do you want to make as wrong entry ?').then(() => {
        this.http.post(`${this.httpService.baseURL}pwr/updateFamilyPregnantWomanDetail`, Dto).subscribe(res => {
          if (res.status) {
            this.dialogRef.close();
            this.showSuccess('Delete');
            this.getPregnantWomenList(this.data.villageMasterId);
          } else {
            this.showError(res.message);
          }
        });
      }).catch(() => '');
    } else {
      this.showError('Error');
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'Pregnant Women Register Detete', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Always delete last one', {
      timeOut: 3000
    });
  }
}
SinglePwListComponent.ɵfac = function SinglePwListComponent_Factory(t) {
  return new (t || SinglePwListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_5__.SidebarService));
};
SinglePwListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SinglePwListComponent,
  selectors: [["app-single-pw-list"]],
  decls: 13,
  vars: 2,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], ["type", "submit", 1, "btn", "btn-outline-warning", 3, "click"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], ["class", "white_box_tittle list_header", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [4, "ngFor", "ngForOf"], ["class", "fas fa-edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Wrong Entry", 3, "click", 4, "ngIf"], ["title", "View Child", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["title", "Edit", 1, "fas", "fa-edit", 3, "click"], ["title", "Wrong Entry", 1, "fas", "fa-trash", 3, "click"], [1, "empty_message_div"], [1, "empty-state_message"], [1, "empty-state_help"]],
  template: function SinglePwListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Pregnant Woman List ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SinglePwListComponent_Template_button_click_5_listener() {
        return ctx.openHistory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SinglePwListComponent_Template_i_click_8_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SinglePwListComponent_div_10_Template, 30, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SinglePwListComponent_ng_template_11_Template, 5, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pregnantWomanRegisterDetailList.length !== 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n}\r\n\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcmVnbmFudC13b21lbi1yZWdpc3Rlci9zaW5nbGUtcHctbGlzdC9zaW5nbGUtcHctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG59XHJcblxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjb2xvcjogIzcwY2FmNyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_pregnant-women-register_pw-register_module_ts.js.map