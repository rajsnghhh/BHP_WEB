"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_escort-reref-register_escort-reref-register_module_ts"],{

/***/ 55834:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-refer-register-mat-modal/escort-refer-register-mat-modal.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortReferRegisterMatModalComponent": () => (/* binding */ EscortReferRegisterMatModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function EscortReferRegisterMatModalComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
  }
}
class EscortReferRegisterMatModalComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.benData = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.famNo = this.data.famNo;
    this.benData = this.data.ben;
    console.log(this.famNo, this.benData);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
EscortReferRegisterMatModalComponent.ɵfac = function EscortReferRegisterMatModalComponent_Factory(t) {
  return new (t || EscortReferRegisterMatModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
EscortReferRegisterMatModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EscortReferRegisterMatModalComponent,
  selectors: [["app-escort-refer-register-mat-modal"]],
  decls: 18,
  vars: 2,
  consts: [["mat-dialog-content", ""], [1, "fas", "fa-times", 2, "float", "right", 3, "click"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header_fixed", 2, "text-align", "center"], [2, "width", "7%"], [2, "width", "30%"], [2, "width", "35%"], [4, "ngFor", "ngForOf"], [2, "width", "25%"]],
  template: function EscortReferRegisterMatModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EscortReferRegisterMatModalComponent_Template_i_click_2_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "table", 5)(8, "thead", 6)(9, "tr")(10, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Beneficiary Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Beneficiary Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EscortReferRegisterMatModalComponent_tr_17_Template, 7, 3, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Family No: ", ctx.famNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  #header_fixed[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n    background-color: #499;\r\n    color: #FFFFFF;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n    background: transparent;\r\n  }\r\n  \r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 165px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n  }\r\n  \r\n  .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 6px;\r\n  }\r\n  \r\n    .mat-dialog-container {\r\n    padding: 12px 17px;\r\n    overflow: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lc2NvcnQtcmVyZWYtcmVnaXN0ZXIvZXNjb3J0LXJlZmVyLXJlZ2lzdGVyLW1hdC1tb2RhbC9lc2NvcnQtcmVmZXItcmVnaXN0ZXItbWF0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgI2hlYWRlcl9maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNjVweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB9XHJcbiAgXHJcbiAgLlFBX3RhYmxlIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 15016:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterRoutingModule": () => (/* binding */ EscortRerefRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterComponent
}];
class EscortRerefRegisterRoutingModule {}
EscortRerefRegisterRoutingModule.ɵfac = function EscortRerefRegisterRoutingModule_Factory(t) {
  return new (t || EscortRerefRegisterRoutingModule)();
};
EscortRerefRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterRoutingModule
});
EscortRerefRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EscortRerefRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59123:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterComponent": () => (/* binding */ EscortRerefRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _escort_refer_register_mat_modal_escort_refer_register_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort-refer-register-mat-modal/escort-refer-register-mat-modal.component */ 55834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _escort_reref_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./escort-reref-register.service */ 36491);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_sidebar_escort_reref_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/sidebar/escort-reref-search.pipe */ 89693);



















function EscortRerefRegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "div", 41)(2, "div", 42)(3, "form", 43)(4, "div", 44)(5, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EscortRerefRegisterComponent_div_10_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.escortSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.escortSearch);
  }
}
function EscortRerefRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48)(1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_div_12_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](86);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.createEscortRefer(_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EscortRerefRegisterComponent_div_14_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", region_r25.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", region_r25.regionName, " ");
  }
}
function EscortRerefRegisterComponent_div_14_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_14_div_10_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.m.region.errors.required);
  }
}
function EscortRerefRegisterComponent_div_14_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", branch_r27.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", branch_r27.branchName, " ");
  }
}
function EscortRerefRegisterComponent_div_14_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_14_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_14_div_20_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.m.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function EscortRerefRegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 6)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_div_14_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EscortRerefRegisterComponent_div_14_option_9_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EscortRerefRegisterComponent_div_14_div_10_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6)(12, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_div_14_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, EscortRerefRegisterComponent_div_14_option_19_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, EscortRerefRegisterComponent_div_14_div_20_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c0, ctx_r3.m.region.invalid && ctx_r3.m.region.touched, ctx_r3.m.region.valid && (ctx_r3.m.region.dirty || ctx_r3.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](9, _c0, ctx_r3.m.branch.invalid && ctx_r3.m.branch.touched, ctx_r3.m.branch.valid && (ctx_r3.m.branch.dirty || ctx_r3.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.m.branch.errors);
  }
}
function EscortRerefRegisterComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", block_r32.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", block_r32.blockName, " ");
  }
}
function EscortRerefRegisterComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_25_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.m.block.errors.required);
  }
}
function EscortRerefRegisterComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", gp_r34.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", gp_r34.name, " ");
  }
}
function EscortRerefRegisterComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_35_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.m.gp.errors.required);
  }
}
function EscortRerefRegisterComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", vill_r36.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", vill_r36.villageName, " ");
  }
}
function EscortRerefRegisterComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_div_45_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.m.gram.errors.required);
  }
}
function EscortRerefRegisterComponent_input_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_input_58_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.filterList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_tr_81_div_17_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", i_r50 + 1, ". ", reason_r49.reasonName, " ");
  }
}
function EscortRerefRegisterComponent_tr_81_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_tr_81_div_17_li_1_Template, 2, 2, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const escort_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", escort_r40.reasonList);
  }
}
function EscortRerefRegisterComponent_tr_81_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 63)(1, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EscortRerefRegisterComponent_tr_81_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const escort_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" * STAFF : ", escort_r40.escortedReferredByStaff == "Y" ? escort_r40.escorteeRefereeStaffName : "", "");
  }
}
function EscortRerefRegisterComponent_tr_81_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const escort_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" * SS : ", escort_r40.escortedReferredBySS == "Y" ? escort_r40.escorteeRefereeSsName : "", "");
  }
}
function EscortRerefRegisterComponent_tr_81_i_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_tr_81_i_32_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);
      const escort_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](88);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.editEscort(_r15, escort_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_tr_81_i_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_tr_81_i_33_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const escort_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r57.deleteEscort(escort_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_tr_81_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61);
      const escort_r40 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.openDialog(escort_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 32)(14, "div", 60)(15, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EscortRerefRegisterComponent_tr_81_div_17_Template, 2, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EscortRerefRegisterComponent_tr_81_div_18_Template, 3, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td", 33)(20, "div", 60)(21, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 63)(24, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, EscortRerefRegisterComponent_tr_81_div_25_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, EscortRerefRegisterComponent_tr_81_div_26_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, EscortRerefRegisterComponent_tr_81_i_32_Template, 1, 0, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, EscortRerefRegisterComponent_tr_81_i_33_Template, 1, 0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const escort_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r12.p - 1) * 5 + i_r41 + 1 ? (ctx_r12.p - 1) * 5 + i_r41 + 1 : i_r41 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", escort_r40.visitDate.split("-").reverse().join("-"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](escort_r40.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](escort_r40.familyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](escort_r40.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (escort_r40 == null ? null : escort_r40.reasonList == null ? null : escort_r40.reasonList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (escort_r40 == null ? null : escort_r40.reasonList == null ? null : escort_r40.reasonList.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", escort_r40.escorteeRefereeStaffName != null && escort_r40.escortedReferredByStaff == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", escort_r40.escorteeRefereeSsName != null && escort_r40.escortedReferredBySS == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](escort_r40.visitingPlaceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](escort_r40.escortOrReferType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.deleteMode);
  }
}
function EscortRerefRegisterComponent_ng_template_85_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_85_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_85_div_18_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r62.r.date.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_85_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_85_tr_49_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r68);
      const fami_r65 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](88);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r67.viewSelectBenificiary(_r15, fami_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r66 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fami_r65.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", fami_r65.firstName, "", fami_r65.middleName, " ", fami_r65.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fami_r65.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r63.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fami_r65.followUpSSName ? fami_r65.followUpSSName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", fami_r65.staffDetails ? fami_r65.staffDetails.staffFirstNAme : "-", "", fami_r65 == null ? null : fami_r65.staffDetails == null ? null : fami_r65.staffDetails.staffMiddleName, " ", fami_r65 == null ? null : fami_r65.staffDetails == null ? null : fami_r65.staffDetails.staffLastName, " ");
  }
}
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    familyNumber: a0,
    firstName: a1,
    middleName: a2,
    lastName: a3,
    husbandOrGuardianName: a4
  };
};
function EscortRerefRegisterComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "List Of Families");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_85_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r69.createERModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 75)(9, "form", 10)(10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 77)(13, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function EscortRerefRegisterComponent_ng_template_85_Template_input_keydown_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r71.restrictTypeOfDate());
    })("change", function EscortRerefRegisterComponent_ng_template_85_Template_input_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r70);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r72.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EscortRerefRegisterComponent_ng_template_85_div_18_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 77)(20, "div", 80)(21, "div")(22, "form", 81)(23, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EscortRerefRegisterComponent_ng_template_85_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r70);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.escortSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 83)(28, "div", 84)(29, "table", 85)(30, "thead", 86)(31, "tr", 36)(32, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Family No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Name of SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Name of Staff");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Beneficiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, EscortRerefRegisterComponent_ng_template_85_tr_49_Template, 17, 11, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "escortRegisterFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r14.viewFamilyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r14.minDate)("max", ctx_r14.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](11, _c0, ctx_r14.r.date.invalid && ctx_r14.r.date.touched, ctx_r14.r.date.valid && (ctx_r14.r.date.dirty || ctx_r14.r.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.r.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r14.searchFullscreen ? "search_inner_fullscreen" : " search_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r14.escortSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](50, 8, ctx_r14.familyList, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction5"](14, _c1, ctx_r14.escortSearch, ctx_r14.escortSearch, ctx_r14.escortSearch, ctx_r14.escortSearch, ctx_r14.escortSearch)));
  }
}
function EscortRerefRegisterComponent_ng_template_87_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Escort/ Refer Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit Escort/ Refer Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_31_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_ng_template_87_tr_31_input_12_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r90);
      const ben_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r88.selectMultipleBeneficiary($event, ben_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_31_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_ng_template_87_tr_31_input_13_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93);
      const ben_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r91.selectMultipleBeneficiary($event, ben_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EscortRerefRegisterComponent_ng_template_87_tr_31_input_12_Template, 1, 0, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, EscortRerefRegisterComponent_ng_template_87_tr_31_input_13_Template, 1, 0, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ben_r84 = ctx.$implicit;
    const i_r85 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r85 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ben_r84.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ben_r84.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ben_r84.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ben_r84.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ben_r84.is_checked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ben_r84.is_checked == false);
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No list is available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Type selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_87_div_46_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r78.e.type.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_47_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Referred By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_47_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Escorted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_47_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", (ctx_r97.editEscortDetails == null ? null : ctx_r97.editEscortDetails.escorteeRefereeSsName) ? ctx_r97.editEscortDetails == null ? null : ctx_r97.editEscortDetails.escorteeRefereeSsName : ctx_r97.onclickBenFamDetails == null ? null : ctx_r97.onclickBenFamDetails.followUpSSName, ")");
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_47_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "(No ss is available)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_87_div_47_label_1_Template, 4, 0, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EscortRerefRegisterComponent_ng_template_87_div_47_label_2_Template, 4, 0, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Staff: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_ng_template_87_div_47_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r99.staffChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0 SS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EscortRerefRegisterComponent_ng_template_87_div_47_span_9_Template, 2, 1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EscortRerefRegisterComponent_ng_template_87_div_47_span_10_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r79.createEscortReferForm.value.type == "refer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r79.createEscortReferForm.value.type == "escort");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r79.editEscortDetails == null ? null : ctx_r79.editEscortDetails.escorteeRefereeSsName) || (ctx_r79.onclickBenFamDetails == null ? null : ctx_r79.onclickBenFamDetails.followUpSSName));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r79.editEscortDetails == null ? null : ctx_r79.editEscortDetails.escorteeRefereeSsName) && !(ctx_r79.onclickBenFamDetails == null ? null : ctx_r79.onclickBenFamDetails.followUpSSName));
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_48_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", user_r103.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", user_r103.user_firstname, "", user_r103.user_middlename, " ", user_r103.user_lastname, " ");
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_48_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Staff selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_48_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_87_div_48_div_9_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r102.e.user.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Staff List :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "select", 116)(6, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "-- Select Staff --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EscortRerefRegisterComponent_ng_template_87_div_48_option_8_Template, 2, 4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EscortRerefRegisterComponent_ng_template_87_div_48_div_9_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](3, _c0, ctx_r80.e.user.invalid && ctx_r80.e.user.touched, ctx_r80.e.user.valid && (ctx_r80.e.user.dirty || ctx_r80.e.user.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r80.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r80.e.user.errors);
  }
}
function EscortRerefRegisterComponent_ng_template_87_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const place_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", place_r105.placeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", place_r105.placeName, " ");
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Place selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EscortRerefRegisterComponent_ng_template_87_div_58_div_1_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r82.e.place.errors.required);
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_74_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_ng_template_87_tr_74_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r113);
      const reason_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r111.selectMultipleReason($event, reason_r107));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_74_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_ng_template_87_tr_74_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116);
      const reason_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r114.selectMultipleReason($event, reason_r107));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EscortRerefRegisterComponent_ng_template_87_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EscortRerefRegisterComponent_ng_template_87_tr_74_input_6_Template, 1, 0, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EscortRerefRegisterComponent_ng_template_87_tr_74_input_7_Template, 1, 0, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const reason_r107 = ctx.$implicit;
    const i_r108 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r108 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](reason_r107.reasonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reason_r107.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", reason_r107.isChecked == false);
  }
}
function EscortRerefRegisterComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 91)(1, "div", 71)(2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EscortRerefRegisterComponent_ng_template_87_h3_3_Template, 2, 0, "h3", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EscortRerefRegisterComponent_ng_template_87_h3_4_Template, 2, 0, "h3", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_87_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r117.viewSelectBenificiaryModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 93)(9, "form", 10)(10, "fieldset", 94)(11, "legend", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Beneficiary List");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 96)(14, "div", 84)(15, "table", 85)(16, "thead", 86)(17, "tr", 36)(18, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, EscortRerefRegisterComponent_ng_template_87_tr_31_Template, 14, 7, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, EscortRerefRegisterComponent_ng_template_87_tr_32_Template, 3, 0, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 2)(34, "div", 6)(35, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Type selection :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "select", 99)(40, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "-- Select Type --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Escort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Refer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, EscortRerefRegisterComponent_ng_template_87_div_46_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, EscortRerefRegisterComponent_ng_template_87_div_47_Template, 11, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, EscortRerefRegisterComponent_ng_template_87_div_48_Template, 10, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 6)(50, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Place List :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "select", 103)(55, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "-- Select Place --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, EscortRerefRegisterComponent_ng_template_87_option_57_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, EscortRerefRegisterComponent_ng_template_87_div_58_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "fieldset", 94)(60, "legend", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Reasons List");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 104)(63, "div", 84)(64, "table", 85)(65, "thead", 86)(66, "tr", 36)(67, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Reason Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, EscortRerefRegisterComponent_ng_template_87_tr_74_Template, 8, 4, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 105)(76, "div", 2)(77, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EscortRerefRegisterComponent_ng_template_87_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r118);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r119.saveEscortRefer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r16.editEscortDetails == null ? null : ctx_r16.editEscortDetails.escortReferRegisterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.editEscortDetails == null ? null : ctx_r16.editEscortDetails.escortReferRegisterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r16.createEscortReferForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r16.viewBeneficiaryDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.viewBeneficiaryDetails.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](14, _c0, ctx_r16.e.type.invalid && ctx_r16.e.type.touched, ctx_r16.e.type.valid && (ctx_r16.e.type.dirty || ctx_r16.e.type.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.e.type.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.createEscortReferForm.value.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.createEscortReferForm.value.staff == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](17, _c0, ctx_r16.e.place.invalid && ctx_r16.e.place.touched, ctx_r16.e.place.valid && (ctx_r16.e.place.dirty || ctx_r16.e.place.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r16.placeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.e.place.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r16.reasonList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r16.disableSave());
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    familyNumber: a0,
    familyName: a1,
    visitingPlaceName: a2,
    escortOrReferType: a3
  };
};
const _c3 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class EscortRerefRegisterComponent {
  constructor(sidebarService, http, router, fb, httpService, escortReferService, modalService, config, validationService, toaster, dialog, confirmationDialogService) {
    this.sidebarService = sidebarService;
    this.http = http;
    this.router = router;
    this.fb = fb;
    this.httpService = httpService;
    this.escortReferService = escortReferService;
    this.modalService = modalService;
    this.validationService = validationService;
    this.toaster = toaster;
    this.dialog = dialog;
    this.confirmationDialogService = confirmationDialogService;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.villageList = [];
    this.gpList = [];
    this.loader = true;
    this.familyList = [];
    this.viewBeneficiaryDetails = [];
    this.beneficiaryDetails = [];
    this.placeList = [];
    this.staffList = [];
    this.reasonList = [];
    this.beneficiaryListID = [];
    this.reasonListID = [];
    this.escortview = [];
    this.escortviewData = [];
    this.escortviewFilterData = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.viewEscort_ReferForm();
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
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/escort-reref-register']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 266 || item.subFunctionMasterId == 267 || item.subFunctionMasterId == 268 || item.subFunctionMasterId == 269)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  viewEscort_ReferForm() {
    this.viewEscortReferForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      filterDate: ['']
    });
  }
  get m() {
    return this.viewEscortReferForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionMasterId');
    if (regionId) {
      let req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        regionId: regionId
      };
      this.escortReferService.getBranchesOfRegion(req).subscribe(res => {
        this.branchList = res.responseObject;
        console.log(this.branchList, 'branchList');
      });
    }
    this.viewEscortReferForm.controls.branch.setValue('');
    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.villagesOfBranch = [];
    if (this.viewEscortReferForm.value.region == '') {
      this.branchList = [];
      this.escortviewData = [];
    }
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.escortReferService.getVillagesOfBranch(req).subscribe(res => {
      this.villagesOfBranch = res.responseObject;
      console.log(this.villagesOfBranch, 'villagesOfBranch');
    });
    this.viewEscortReferForm.controls.block.setValue('');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.gpList = [];
    this.villageList = [];
    this.escortviewData = [];
  }
  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.viewEscortReferForm.controls.gp.setValue('');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.villageList = [];
    this.escortviewData = [];
  }
  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.viewEscortReferForm.controls.gram.setValue('');
    this.escortviewData = [];
  }
  changeVillage(villageId) {
    this.escortviewData = [];
    this.viewEscortReferForm.controls.filterDate.setValue('');
    console.log(villageId, 'villageId');
    let viewreq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: villageId,
      visitDate: null
    };
    this.escortReferService.getEscortReferRegisterview(viewreq).subscribe(res => {
      this.escortview = res.responseObject;
      this.escortview?.forEach(x => {
        x.familyList = x.familyList?.map(({
          visitDate = x.visitDate,
          ...rest
        }) => ({
          visitDate,
          ...rest
        }));
      });
      console.log(this.escortview, 'escortview');
      this.escortview?.forEach(y => {
        console.log(y);
        y.familyList.forEach(z => {
          this.escortviewData.push(z);
        });
        console.log(this.escortviewData, 'escortviewData');
      });
      this.escortviewData.forEach(x => {
        if (x.escortOrReferType == 'R') {
          x.escortOrReferType = 'Refer';
        } else {
          x.escortOrReferType = 'Escort';
        }
      });
      this.escortviewFilterData = this.escortviewData;
      console.log(this.escortviewData, 'escortviewData');
    });
  }
  createEscortRefer(createER) {
    this.escortSearch = '';
    this.modalContent = '';
    this.createERRegisterModal = this.modalService.open(createER, {
      windowClass: 'createER'
    });
    this.viewFamily_Form();
    this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).subtract(7, "days").format("YYYY-MM-DD");
    this.maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).add(0, "days").format("YYYY-MM-DD");
  }
  changeDate() {
    let famReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortRefRegDate: this.viewFamilyForm.value.date,
      villageId: this.viewEscortReferForm.value.gram
    };
    this.loader = false;
    this.escortReferService.getListOfFamiliesOfAVillage(famReq).subscribe(res => {
      this.loader = true;
      console.log(res.responseObject);
      if (res.status == true) {
        this.villageName = res.responseObject[0]?.villageName;
        this.familyList = res.responseObject[0]?.familyList;
        console.log(this.familyList, ' this.familyList');
        console.log(this.villageName, ' this.villageName');
        var tt = this.familyList?.filter(x => x.presentInPregnantWoman == 'Y');
        var tt2 = this.familyList?.filter(x => x.below5YearsChildren.length > 0);
        var tt3 = this.familyList?.filter(x => x.adolescentGilrChildren.length > 0);
        console.log(tt, 'presentInPregnantWoman');
        console.log(tt2, 'below5YearsChildren');
        console.log(tt3, 'adolescentGilrChildren');
      } else {
        this.familyList = [];
      }
    });
  }
  createERModalDismiss() {
    this.createERRegisterModal.close();
    this.escortSearch = '';
    this.villageName = [];
    this.familyList = [];
  }
  viewFamily_Form() {
    this.viewFamilyForm = this.fb.group({
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
  }
  get r() {
    return this.viewFamilyForm.controls;
  }
  viewSelectBenificiary(Benificiary, fami) {
    console.log(this.editEscortDetails, 'editEscortDetails');
    this.createEscortRefer_Form();
    this.getEscortReferRegisterPrerequisites();
    if (this.editEscortDetails?.escortReferRegisterId) {
      this.beneficiaryListID = [];
      this.loader = false;
      setTimeout(() => {
        this.modalContent = '';
        this.viewBeneficiaryModal = this.modalService.open(Benificiary, {
          windowClass: 'Benificiary'
        });
        this.loader = true;
      }, 500);
      if (this.editEscortDetails?.escorteeRefereeSsId == null) {
        this.createEscortReferForm.controls['ss'].disable();
        // console.log('disable');
      }

      if (this.editEscortDetails?.escorteeRefereeSsId != null) {
        this.createEscortReferForm.controls['ss'].enable();
        // console.log('enable');
      }

      var tt = [];
      if (this.editEscortDetails.presentInPregnantWoman == 'Y') {
        tt.push({
          childName: this.editEscortDetails.familyName,
          age: this.editEscortDetails.familyAge,
          sex: 'F',
          status: 'PW, ',
          is_checked: false
        });
      }
      if (this.editEscortDetails.childDetailList.length > 0) {
        this.editEscortDetails.childDetailList.forEach(y => {
          var t = [];
          y.age.split(/[year,month,days]+/).forEach(x => {
            t.push(x);
            this.year = t[0];
            this.month = t[1];
            this.day = t[2];
          });
          console.log(this.year, this.month, this.day);
          if (y.presentInPem == 'Y') {
            this.muacPEM = 'PEM, ';
          } else {
            this.muacPEM = '';
          }
          if (this.year < 2) {
            this.muacLM = 'LM, ';
          } else {
            this.muacLM = '';
          }
          if (this.year >= 2 && this.year < 5) {
            this.twotofive = '2 to 5, ';
          } else {
            this.twotofive = '';
          }
          if (this.year >= 14 && this.year < 18) {
            this.adolStatus = 'AG, ';
          } else {
            this.adolStatus = '';
          }
          tt.push(y);
          tt = tt?.map(({
            status = this.muacPEM + this.muacLM + this.twotofive + this.adolStatus,
            is_checked = false,
            ...rest
          }) => ({
            status,
            is_checked,
            ...rest
          }));
        });
      }
      console.log(tt, 'tt');
      tt.forEach(x => {
        x.status = x.status.substring(0, x.status.length - 2);
      });
      this.viewBeneficiaryDetails = tt;
      console.log(this.viewBeneficiaryDetails);
      if (this.editEscortDetails.isFamilyHerselfBeneficiary == 'Y') {
        let PW_checked = this.viewBeneficiaryDetails.filter(x => x.status == 'PW')?.[0];
        PW_checked.is_checked = true;
        console.log(PW_checked);
      }
      if (this.editEscortDetails.childDetailList.length > 0) {
        this.editEscortDetails.childDetailList.forEach(x => {
          this.viewBeneficiaryDetails.filter(v => v.escortReferChildMapId == x.escortReferChildMapId && v.active_flag == 'A').forEach(z => {
            z.is_checked = true;
          });
        });
      }
      this.viewBeneficiaryDetails.filter(x => x.status != 'PW').forEach(y => {
        this.beneficiaryListID.push({
          escortReferChildMapId: y.escortReferChildMapId,
          childDetailId: y.childDetailId,
          childName: y.childName,
          dob: y.dob,
          age: y.age,
          sex: y.sex,
          presentInPem: y.presentInPem,
          latestMuacRegisterId: y.latestMuacRegisterId,
          latestMuac: y.latestMuac,
          latestMuacRegisterTag: y.latestMuacRegisterTag,
          latestMuacIndicatorName: y.latestMuacIndicatorName,
          active_flag: y.is_checked == true ? 'A' : 'NC'
        });
      });
    } else {
      this.viewBeneficiaryDetails = [];
      this.onclickBenFamDetails = fami;
      console.log(this.onclickBenFamDetails, 'onclickBenFamDetails');
      if (this.onclickBenFamDetails?.followUpSSId == null) {
        this.createEscortReferForm.controls['ss'].disable();
        console.log('disable');
      }
      if (this.onclickBenFamDetails?.followUpSSId != null) {
        this.createEscortReferForm.controls['ss'].enable();
        console.log('enable');
      }
      if (fami.presentInPregnantWoman == 'Y') {
        this.viewBeneficiaryDetails.push({
          childName: fami.firstName + fami.middleName + '' + fami.lastName,
          age: fami.familyAge,
          sex: 'F',
          status: 'PW, ',
          is_checked: false
        });
      }
      if (fami.adolescentGilrChildren.length > 0) {
        fami.adolescentGilrChildren.forEach(z => {
          this.viewBeneficiaryDetails.push(z);
          this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
            status = 'AG, ',
            is_checked = false,
            ...rest
          }) => ({
            status,
            is_checked,
            ...rest
          }));
        });
      }
      if (fami.below5YearsChildren.length > 0) {
        fami.below5YearsChildren.forEach(y => {
          var t = [];
          y.age.split(/[year,month,days]+/).forEach(x => {
            t.push(x);
            this.year = t[0];
            this.month = t[1];
            this.day = t[2];
          });
          console.log(this.year, this.month, this.day);
          if (y.presentInPem == 'Y') {
            this.muacPEM = 'PEM, ';
          } else {
            this.muacPEM = '';
          }
          if (this.year < 2) {
            this.muacLM = 'LM, ';
          } else {
            this.muacLM = '';
          }
          if (this.year >= 2 && this.year < 5) {
            this.twotofive = '2 to 5, ';
          } else {
            this.twotofive = '';
          }
          this.viewBeneficiaryDetails.push(y);
          this.viewBeneficiaryDetails = this.viewBeneficiaryDetails?.map(({
            status = this.muacPEM + this.muacLM + this.twotofive,
            is_checked = false,
            ...rest
          }) => ({
            status,
            is_checked,
            ...rest
          }));
        });
      }
      console.log(this.viewBeneficiaryDetails);
      this.viewBeneficiaryDetails.forEach(x => {
        x.status = x.status.substring(0, x.status.length - 2);
      });
      this.modalContent = '';
      this.viewBeneficiaryModal = this.modalService.open(Benificiary, {
        windowClass: 'Benificiary'
      });
    }
  }
  editEscort(Benificiary, escort) {
    this.editEscortDetails = escort;
    this.viewSelectBenificiary(Benificiary, escort);
  }
  createEscortRefer_Form() {
    // console.log(this.editEscortDetails, 'editEscortDetails');
    if (this.editEscortDetails?.escortOrReferType == "Refer") {
      var type = 'refer';
    } else if (this.editEscortDetails?.escortOrReferType == "Escort") {
      type = 'escort';
    } else {
      type = '';
    }
    this.createEscortReferForm = this.fb.group({
      type: [type ? type : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      staff: [this.editEscortDetails?.escortedReferredByStaff == 'Y' ? true : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      ss: [this.editEscortDetails?.escortedReferredBySS == 'Y' ? true : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      user: [this.editEscortDetails?.escorteeRefereeStaffId ? this.editEscortDetails?.escorteeRefereeStaffId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      place: [this.editEscortDetails?.visitingPlaceId ? this.editEscortDetails?.visitingPlaceId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
    if (this.editEscortDetails?.escortReferRegisterId) {
      return this.createEscortReferForm.markAllAsTouched();
    }
  }
  getEscortReferRegisterPrerequisites() {
    this.reasonListID = [];
    let prerequisite_req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageId: this.viewEscortReferForm.value.gram
    };
    this.escortReferService.getEscortReferRegisterPrerequisites(prerequisite_req).subscribe(res => {
      console.log(res.responseObject);
      this.reasonList = res.responseObject?.reasonList;
      this.reasonList = this.reasonList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      this.placeList = res.responseObject?.placeList;
      this.staffList = res.responseObject?.staffList;
      console.log(this.reasonList, 'this.reasonList ');
      console.log(this.placeList, ' this.placeList');
      console.log(this.staffList, ' this.staffList');
      if (this.editEscortDetails?.escortReferRegisterId) {
        console.log(this.editEscortDetails?.reasonList);
        this.editEscortDetails?.reasonList.forEach(x => {
          this.reasonList.filter(v => v.reasonId == x.reasonId).forEach(z => {
            z.isChecked = true;
            this.reasonListID.push({
              escortReferReasonMapId: x.escortReferReasonMapId,
              reasonId: x.reasonId,
              active_flag: 'A'
            });
          });
        });
      }
    });
  }
  get e() {
    return this.createEscortReferForm.controls;
  }
  viewSelectBenificiaryModalDismiss() {
    var ID = this.editEscortDetails?.escortReferRegisterId;
    if (ID) {
      this.editEscortDetails = '';
      ID = 0;
      this.viewBeneficiaryModal.close();
    } else {
      this.viewBeneficiaryModal.close();
      this.viewBeneficiaryDetails = [];
      this.onclickBenFamDetails = [];
    }
  }
  restrictTypeOfDate() {
    return false;
  }
  selectMultipleReason(e, reason) {
    this.reasonListID = [];
    console.log(e.target.checked, reason);
    if (e.target.checked == true) {
      reason.isChecked = true;
    } else {
      reason.isChecked = false;
    }
    console.log(this.reasonList);
    if (this.editEscortDetails?.escortReferRegisterId) {
      this.reasonList.forEach(x => {
        if (x.isChecked == true) {
          var tt = this.editEscortDetails.reasonList.filter(y => y.reasonId == x.reasonId);
          if (tt.length != 0) {
            tt.forEach(z => {
              this.reasonListID.push({
                escortReferReasonMapId: z.escortReferReasonMapId,
                reasonId: z.reasonId,
                active_flag: 'A'
              });
              console.log(this.reasonListID, ' this.reasonListID');
            });
          } else {
            this.reasonListID.push({
              escortReferReasonMapId: 0,
              reasonId: x.reasonId,
              active_flag: 'A'
            });
            console.log(this.reasonListID, ' this.reasonListID');
          }
        } else {
          this.editEscortDetails.reasonList.filter(y => y.reasonId == x.reasonId).forEach(z => {
            this.reasonListID.push({
              escortReferReasonMapId: z.escortReferReasonMapId,
              reasonId: z.reasonId,
              active_flag: 'D'
            });
            console.log(this.reasonListID, ' this.reasonListID');
          });
        }
      });
    } else {
      this.reasonList.filter(x => x.isChecked == true).forEach(y => {
        this.reasonListID.push({
          escortReferReasonMapId: 0,
          reasonId: y.reasonId,
          active_flag: 'A'
        });
        console.log(this.reasonListID, ' this.reasonListID');
      });
    }
  }
  staffChange(e) {
    if (e.target.checked == false) {
      this.createEscortReferForm.controls.user.setValue('');
    }
  }
  selectMultipleBeneficiary(e, ben) {
    this.beneficiaryListID = [];
    console.log(e.target.checked, ben);
    if (e.target.checked == true) {
      ben.is_checked = true;
    } else {
      ben.is_checked = false;
    }
    console.log(this.viewBeneficiaryDetails);
    if (this.editEscortDetails?.escortReferRegisterId) {
      this.viewBeneficiaryDetails.filter(x => x.status != 'PW').forEach(y => {
        this.beneficiaryListID.push({
          escortReferChildMapId: y.escortReferChildMapId,
          childDetailId: y.childDetailId,
          childName: y.childName,
          dob: y.dob,
          age: y.age,
          sex: y.sex,
          presentInPem: y.presentInPem,
          latestMuacRegisterId: y.latestMuacRegisterId,
          latestMuac: y.latestMuac,
          latestMuacRegisterTag: y.latestMuacRegisterTag,
          latestMuacIndicatorName: y.latestMuacIndicatorName,
          active_flag: y.is_checked == true ? 'A' : 'NC'
        });
      });
    } else {
      this.viewBeneficiaryDetails.filter(x => x.status != 'PW').forEach(y => {
        this.beneficiaryListID.push({
          escortReferChildMapId: 0,
          childDetailId: y.childDetailId,
          childName: y.childName,
          dob: y.dob,
          age: y.age,
          sex: y.sex,
          presentInPem: y.presentInPem,
          latestMuacRegisterId: y.latestMuacRegisterId,
          latestMuac: y.latestMuac,
          latestMuacRegisterTag: y.latestMuacRegisterTag,
          latestMuacIndicatorName: y.latestMuacIndicatorName,
          active_flag: y.is_checked == true ? 'A' : 'NC'
        });
      });
    }
  }
  saveEscortRefer() {
    console.log(this.viewBeneficiaryDetails.filter(x => x.is_checked == true && x.status == 'PW')?.[0]);
    console.log(this.viewBeneficiaryDetails);
    console.log(this.beneficiaryListID);
    console.log(this.editEscortDetails);
    if (this.editEscortDetails?.escortReferRegisterId) {
      if (this.editEscortDetails?.escorteeRefereeSsId != null) {
        var ssid = this.editEscortDetails?.escorteeRefereeSsId;
      } else {
        ssid = null;
      }
    } else {
      if (this.onclickBenFamDetails?.followUpSSId != null) {
        ssid = this.onclickBenFamDetails?.followUpSSId;
      } else {
        ssid = null;
      }
    }
    let saveReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortReferRegisterId: this.editEscortDetails?.escortReferRegisterId ? this.editEscortDetails?.escortReferRegisterId : 0,
      familyId: this.editEscortDetails?.familyId ? this.editEscortDetails?.familyId : this.onclickBenFamDetails?.familyDetailId,
      visitDate: this.editEscortDetails?.visitDate ? this.editEscortDetails?.visitDate : this.viewFamilyForm.value.date,
      isFamilyHerselfBeneficiary: this.viewBeneficiaryDetails.filter(x => x.is_checked == true && x.status == 'PW')?.[0]?.is_checked == true ? 'Y' : 'N',
      escortOrReferType: this.createEscortReferForm.value.type == 'escort' ? 'E' : 'R',
      visitingPlaceId: this.createEscortReferForm.value.place,
      escortedReferredByStaff: this.createEscortReferForm.value.staff == true ? 'Y' : 'N',
      escorteeRefereeStaffId: this.createEscortReferForm.value.user ? this.createEscortReferForm.value.user : null,
      escortedReferredBySS: this.createEscortReferForm.value.ss == true ? 'Y' : 'N',
      escorteeRefereeSsId: ssid,
      presentInPregnantWoman: this.editEscortDetails?.presentInPregnantWoman ? this.editEscortDetails?.presentInPregnantWoman : this.onclickBenFamDetails?.presentInPregnantWoman,
      presentInLactatingMother: this.editEscortDetails?.presentInLactatingMother ? this.editEscortDetails?.presentInLactatingMother : this.onclickBenFamDetails?.presentInLactatingMother,
      hasChildPresentInPem: this.editEscortDetails?.hasChildPresentInPem ? this.editEscortDetails?.hasChildPresentInPem : this.onclickBenFamDetails?.hasChildPresentInPem,
      has2to5yearsOldChildren: this.editEscortDetails?.has2to5yearsOldChildren ? this.editEscortDetails?.has2to5yearsOldChildren : this.onclickBenFamDetails?.has2to5yearsoldChildren,
      hasAdolescentGirlChildren: this.editEscortDetails?.hasAdolescentGirlChildren ? this.editEscortDetails?.hasAdolescentGirlChildren : this.onclickBenFamDetails?.hasAdolescentGirlChildren,
      active_flag: 'A',
      reasonList: this.reasonListID,
      childDetailList: this.beneficiaryListID
    };
    console.log(saveReq, 'savereq');
    this.loader = false;
    this.escortReferService.getEscortReferRegistersaveOrUpdate(saveReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.loader = true;
        this.showSuccess(res.message);
        this.viewSelectBenificiaryModalDismiss();
        this.changeVillage(this.viewEscortReferForm.value.gram);
      } else {
        this.showError(res.message);
        this.loader = true;
      }
    });
  }
  disableSave() {
    let flag = true;
    var benChecked = [];
    benChecked = this.viewBeneficiaryDetails.filter(x => x.is_checked == true);
    if (benChecked.length == 0) {
      flag = false;
    } else if (!this.createEscortReferForm.value.type) {
      flag = false;
    } else if (this.createEscortReferForm.value.staff == false && (this.createEscortReferForm.value.ss == false || this.createEscortReferForm.value.ss == undefined)) {
      flag = false;
    } else if (!this.createEscortReferForm.value.place) {
      flag = false;
    } else if (this.reasonList.filter(x => x.isChecked == true).length == 0) {
      flag = false;
    }
    if (this.createEscortReferForm.value.staff == true) {
      if (!this.createEscortReferForm.value.user) {
        flag = false;
      }
    }
    return flag;
  }
  openDialog(escort) {
    console.log(escort);
    this.beneficiaryDetails = [];
    if (escort.isFamilyHerselfBeneficiary == 'Y') {
      this.beneficiaryDetails.push({
        childName: escort.familyName,
        age: escort.familyAge,
        sex: 'F',
        status: 'PW, '.substring(0, 'PW, '.length - 2)
      });
    }
    if (escort.childDetailList.length > 0) {
      escort.childDetailList.filter(x => x.active_flag != 'NC').forEach(y => {
        var t = [];
        y.age.split(/[year,month,days]+/).forEach(x => {
          t.push(x);
          this.year = t[0];
          this.month = t[1];
          this.day = t[2];
        });
        console.log(this.year, this.month, this.day);
        if (y.presentInPem == 'Y') {
          this.muacPEM = 'PEM, ';
        } else {
          this.muacPEM = '';
        }
        if (this.year < 2) {
          this.muacLM = 'LM, ';
        } else {
          this.muacLM = '';
        }
        if (this.year >= 2 && this.year < 5) {
          this.twotofive = '2 to 5, ';
        } else {
          this.twotofive = '';
        }
        if (this.year >= 14 && this.year < 18) {
          this.adolStatus = 'AG, ';
        } else {
          this.adolStatus = '';
        }
        this.beneficiaryDetails.push(y);
        console.log(this.beneficiaryDetails, 'beneficiaryDetails');
        this.beneficiaryDetails = this.beneficiaryDetails?.map(({
          status = (this.muacPEM + this.muacLM + this.twotofive + this.adolStatus).substring(0, (this.muacPEM + this.muacLM + this.twotofive + this.adolStatus).length - 2),
          ...rest
        }) => ({
          status,
          ...rest
        }));
      });
    }
    console.log(this.beneficiaryDetails, 'beneficiaryDetails');
    this.dialog.open(_escort_refer_register_mat_modal_escort_refer_register_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__.EscortReferRegisterMatModalComponent, {
      width: '700px',
      height: '250px',
      data: {
        ben: this.beneficiaryDetails,
        famNo: escort.familyNumber
      }
    });
  }
  deleteEscort(escort) {
    console.log(escort);
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this record ?').then(() => this.delete(escort)).catch(() => '');
  }
  delete(escort) {
    let delReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      escortReferRegisterId: escort.escortReferRegisterId,
      familyId: escort.familyId,
      visitDate: escort.visitDate,
      isFamilyHerselfBeneficiary: escort.isFamilyHerselfBeneficiary,
      active_flag: 'D',
      reasonList: escort.reasonList,
      childDetailList: escort.childDetailList
    };
    console.log(delReq, 'delReq');
    this.escortReferService.getEscortReferRegistersaveOrUpdate(delReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeVillage(this.viewEscortReferForm.value.gram);
      } else {
        this.showError(res.message);
      }
    });
  }
  filterList(e) {
    console.log(e);
    if (e) {
      var filter = this.escortviewFilterData.filter(x => x.visitDate == e);
      console.log(filter);
      this.escortviewData = filter;
    } else {
      this.escortviewData = this.escortviewFilterData;
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Escort-Reref Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Escort-Reref Register', {
      timeOut: 3000
    });
  }
}
EscortRerefRegisterComponent.ɵfac = function EscortRerefRegisterComponent_Factory(t) {
  return new (t || EscortRerefRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_escort_reref_register_service__WEBPACK_IMPORTED_MODULE_4__.EscortRerefRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__.ConfirmationDialogService));
};
EscortRerefRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: EscortRerefRegisterComponent,
  selectors: [["app-escort-reref-register"]],
  decls: 89,
  vars: 40,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "form-group", "col-md"], [1, "page-title"], ["class", "form-group col-md", 4, "ngIf"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "6%"], [2, "width", "20%"], ["type", "date", "class", "form-controls", "formControlName", "filterDate", 3, "change", 4, "ngIf"], [2, "width", "8%"], [2, "width", "25%"], [2, "width", "13%"], [2, "width", "10%"], [2, "width", "12%"], [2, "width", "11%"], ["style", "width: 12%;", 4, "ngIf"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["createER", ""], ["Benificiary", ""], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search fam, name, place, type ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Escort/ Refer Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Escort/ Refer Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "date", "formControlName", "filterDate", 1, "form-controls", 3, "change"], [1, "btn-link", 2, "width", "13%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], [1, "popover__wrapper"], [1, "popover__title", 2, "color", "#0d6efd"], ["class", "popover__content", 4, "ngIf"], [1, "popover__content"], [2, "word-wrap", "break-word", "text-align", "left"], ["class", "fas fa-edit", "title", "Edit Escort/ Refer Register", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Escort/ Refer Register", 3, "click", 4, "ngIf"], ["style", "word-wrap: break-word; text-align: left;", 4, "ngFor", "ngForOf"], ["title", "Edit Escort/ Refer Register", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Escort/ Refer Register", 1, "fas", "fa-trash", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], [1, "dialog-title"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body"], [1, "form-group", "col-md-2"], [1, "form-group", "col-md-4"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "max", "ngClass", "keydown", "change"], [1, "serach_field_23"], ["active", "#", 3, "ngClass"], ["type", "text", "name", "search", "placeholder", "search by fam no., name & guardian name ...", 3, "ngModel", "ngModelChange"], ["id", "tbodyFam"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "width", "3%"], [2, "width", "30%"], [2, "width", "5%"], [1, "btn-link", 2, "width", "5%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], [1, "modal-contents"], ["class", "dialog-title", 4, "ngIf"], [1, "modal-body", 2, "overflow-y", "auto", "height", "400px"], [1, "scheduler-border", 2, "height", "190px"], [1, "scheduler-border"], ["id", "tbodybenificiary"], [2, "width", "4%"], ["for", "type"], ["formControlName", "type", "id", "type", 1, "form-select", 3, "ngClass"], ["value", "escort"], ["value", "refer"], ["for", "place"], ["formControlName", "place", "id", "place", 1, "form-select", 3, "ngClass"], ["id", "tbodyReason"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["colspan", "6"], ["for", "type", 4, "ngIf"], ["type", "checkbox", "value", "staff", "id", "flexCheckDefault", "formControlName", "staff", 1, "form-check-input", 2, "margin-top", "3px", 3, "change"], ["type", "checkbox", "value", "ss", "id", "flexCheckDefault", "formControlName", "ss", 1, "form-check-input", 2, "margin-top", "3px"], ["for", "user"], ["formControlName", "user", "id", "user", 1, "form-select", 3, "ngClass"]],
  template: function EscortRerefRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Escort/ Refer Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EscortRerefRegisterComponent_div_10_Template, 8, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EscortRerefRegisterComponent_div_11_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EscortRerefRegisterComponent_div_12_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EscortRerefRegisterComponent_div_14_Template, 21, 12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 2)(16, "div", 6)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_21_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, EscortRerefRegisterComponent_option_24_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, EscortRerefRegisterComponent_div_25_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 6)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_31_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, EscortRerefRegisterComponent_option_34_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, EscortRerefRegisterComponent_div_35_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 6)(37, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EscortRerefRegisterComponent_Template_select_change_41_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, EscortRerefRegisterComponent_option_44_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, EscortRerefRegisterComponent_div_45_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 22)(47, "div", 23)(48, "div", 24)(49, "table", 25)(50, "thead")(51, "tr")(52, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, EscortRerefRegisterComponent_input_58_Template, 1, 0, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Beneficiary");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Reason");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "th", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Done by- ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Staff/ SS");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "Place");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, EscortRerefRegisterComponent_th_79_Template, 2, 0, "th", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "tbody", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, EscortRerefRegisterComponent_tr_81_Template, 34, 13, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](82, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](83, "escortRegisterFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "pagination-controls", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function EscortRerefRegisterComponent_Template_pagination_controls_pageChange_84_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function EscortRerefRegisterComponent_Template_pagination_controls_pageBoundsCorrection_84_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, EscortRerefRegisterComponent_ng_template_85_Template, 51, 20, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, EscortRerefRegisterComponent_ng_template_87_Template, 79, 20, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.escortviewData.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.viewEscortReferForm.value.gram || !ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewEscortReferForm.value.gram && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.viewEscortReferForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](24, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](27, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](30, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.viewEscortReferForm.value.gram);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.deleteMode || ctx.updateMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](82, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](83, 21, ctx.escortviewData, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](33, _c2, ctx.escortSearch, ctx.escortSearch, ctx.escortSearch, ctx.escortSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](38, _c3, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _shared_sidebar_escort_reref_search_pipe__WEBPACK_IMPORTED_MODULE_9__.escortRerefFilterPipe],
  styles: [".modal-content[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1100px;\r\n  margin-left: -285px;\r\n  border: 10px solid white;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1100px;\r\n  margin-left: -285px;\r\n  border: 10px solid white;\r\n  background: white;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 331px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#tbodybenificiary[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 155px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -4px 0 1.5em 0 !important;\r\n  height: 140px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 200px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n#tbodyReason[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 130px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 250px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 485px;\r\n  margin-top: -1px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin-left: 474px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: 591px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -20px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -186px;\r\n  margin-bottom: 11px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.filter_inner_fullscreen[_ngcontent-%COMP%] {\r\n  margin-left: 124px;\r\n  width: 148%;\r\n}\r\n\r\n.filter_inner[_ngcontent-%COMP%] {\r\n  margin-left: 83px;\r\n  width: 135%;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  width: 77%;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-left: 15px;\r\n  margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n  width: 430px;\r\n  position: relative;\r\n  margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  border: 0;\r\n  padding-left: 19px;\r\n  margin-left: 6px;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 24px;\r\n  content: \"\";\r\n  background: #2daab8;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: 8px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n  margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -1359px;\r\n  margin-top: 21px;\r\n}\r\n\r\n.form-controls[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-radius: 0.25rem;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lc2NvcnQtcmVyZWYtcmVnaXN0ZXIvZXNjb3J0LXJlcmVmLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1Q0FBdUM7RUFDdkMsaUNBQWlDO0VBQ2pDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFFBQVE7RUFJUiwyQkFBMkI7RUFDM0IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHFFQUFxRTtBQUN2RSIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDU3MHB4O1xyXG4gIHdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yODVweDtcclxuICBib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxuICB3aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjg1cHg7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG5cclxuI3Rib2R5RmFtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMzMXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jdGJvZHliZW5pZmljaWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAtNHB4IDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jdGJvZHlSZWFzb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzQ5OTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjODI4QkIyO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggNXB4IDNweCByZ2JhKDExNywgMTExLCAxMTcsIDEpO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudCBsaSB7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogY2FsYygxMCUgLSAxMHB4KTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2JmYmZiZiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNDg1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2OTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0NzRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogNTkxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMiAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTg2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyX2lubmVyX2Z1bGxzY3JlZW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMjRweDtcclxuICB3aWR0aDogMTQ4JTtcclxufVxyXG5cclxuLmZpbHRlcl9pbm5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzcHg7XHJcbiAgd2lkdGg6IDEzNSU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNzclO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMge1xyXG4gIHdpZHRoOiA0MzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjN2U3MTcyO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGJ1dHRvbjo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kOiAjMmRhYWI4O1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiBpIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzU5cHg7XHJcbiAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 42493:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterModule": () => (/* binding */ EscortRerefRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escort-reref-register-routing.module */ 15016);
/* harmony import */ var _escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escort-reref-register.component */ 59123);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _escort_refer_register_mat_modal_escort_refer_register_mat_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./escort-refer-register-mat-modal/escort-refer-register-mat-modal.component */ 55834);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_sidebar_escort_reref_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/sidebar/escort-reref-search.pipe */ 89693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










class EscortRerefRegisterModule {}
EscortRerefRegisterModule.ɵfac = function EscortRerefRegisterModule_Factory(t) {
  return new (t || EscortRerefRegisterModule)();
};
EscortRerefRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: EscortRerefRegisterModule
});
EscortRerefRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EscortRerefRegisterModule, {
    declarations: [_escort_reref_register_component__WEBPACK_IMPORTED_MODULE_1__.EscortRerefRegisterComponent, _escort_refer_register_mat_modal_escort_refer_register_mat_modal_component__WEBPACK_IMPORTED_MODULE_4__.EscortReferRegisterMatModalComponent, _shared_sidebar_escort_reref_search_pipe__WEBPACK_IMPORTED_MODULE_5__.escortRerefFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _escort_reref_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscortRerefRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_3__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule]
  });
})();

/***/ }),

/***/ 36491:
/*!********************************************************************************!*\
  !*** ./src/app/modules/escort-reref-register/escort-reref-register.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscortRerefRegisterService": () => (/* binding */ EscortRerefRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class EscortRerefRegisterService {
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
    return this.http.post(`${this.baseURL}escortreferregister/getListOfFamiliesOfAVillage`, obj);
  }
  getEscortReferRegisterPrerequisites(obj) {
    return this.http.post(`${this.baseURL}escortreferregister/getEscortReferRegisterPrerequisites`, obj);
  }
  getEscortReferRegistersaveOrUpdate(obj) {
    return this.http.post(`${this.baseURL}escortreferregister/saveOrUpdate`, obj);
  }
  getEscortReferRegisterview(obj) {
    return this.http.post(`${this.baseURL}escortreferregister/view`, obj);
  }
}
EscortRerefRegisterService.ɵfac = function EscortRerefRegisterService_Factory(t) {
  return new (t || EscortRerefRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
EscortRerefRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EscortRerefRegisterService,
  factory: EscortRerefRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 89693:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/escort-reref-search.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escortRerefFilterPipe": () => (/* binding */ escortRerefFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class escortRerefFilterPipe {
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
escortRerefFilterPipe.ɵfac = function escortRerefFilterPipe_Factory(t) {
  return new (t || escortRerefFilterPipe)();
};
escortRerefFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "escortRegisterFilter",
  type: escortRerefFilterPipe,
  pure: false
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_escort-reref-register_escort-reref-register_module_ts.js.map