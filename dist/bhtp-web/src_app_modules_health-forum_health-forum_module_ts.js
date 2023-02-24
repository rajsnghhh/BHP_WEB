"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_health-forum_health-forum_module_ts"],{

/***/ 69385:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-angular-mat-modal/health-forum-angular-mat-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumAngularMatModalComponent": () => (/* binding */ HealthForumAngularMatModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function HealthForumAngularMatModalComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.villageName);
  }
}
class HealthForumAngularMatModalComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.lists = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data.villLists);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
HealthForumAngularMatModalComponent.ɵfac = function HealthForumAngularMatModalComponent_Factory(t) {
  return new (t || HealthForumAngularMatModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
HealthForumAngularMatModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HealthForumAngularMatModalComponent,
  selectors: [["app-health-forum-angular-mat-modal"]],
  decls: 15,
  vars: 1,
  consts: [["mat-dialog-content", ""], [1, "fas", "fa-times", 2, "float", "right", 3, "click"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "header_fixed", 2, "text-align", "center"], [2, "width", "8%"], [2, "width", "30%"], [4, "ngFor", "ngForOf"]],
  template: function HealthForumAngularMatModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HealthForumAngularMatModalComponent_Template_i_click_1_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Village Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HealthForumAngularMatModalComponent_tr_14_Template, 5, 2, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.villLists);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n  background-color: #499;\r\n  color: #FFFFFF;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 165px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9oZWFsdGgtZm9ydW0vaGVhbHRoLWZvcnVtLWFuZ3VsYXItbWF0LW1vZGFsL2hlYWx0aC1mb3J1bS1hbmd1bGFyLW1hdC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlYWRlcl9maXhlZCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50YWJsZSB0aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTdweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3741:
/*!*********************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumRoutingModule": () => (/* binding */ HealthForumRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-forum.component */ 91699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _health_forum_component__WEBPACK_IMPORTED_MODULE_0__.HealthForumComponent
}];
class HealthForumRoutingModule {}
HealthForumRoutingModule.ɵfac = function HealthForumRoutingModule_Factory(t) {
  return new (t || HealthForumRoutingModule)();
};
HealthForumRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HealthForumRoutingModule
});
HealthForumRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthForumRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91699:
/*!****************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumComponent": () => (/* binding */ HealthForumComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ 69385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _health_forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-forum.service */ 71727);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ 14357);





















function HealthForumComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_div_17_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.createHealthForum(_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HealthForumComponent_div_19_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", region_r21.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", region_r21.regionName, " ");
  }
}
function HealthForumComponent_div_19_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_10_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.l.region.errors.required);
  }
}
function HealthForumComponent_div_19_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", branch_r23.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", branch_r23.branchName, " ");
  }
}
function HealthForumComponent_div_19_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_div_19_div_20_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.l.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function HealthForumComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 40)(2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HealthForumComponent_div_19_option_9_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, HealthForumComponent_div_19_div_10_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 40)(12, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_div_19_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r27.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HealthForumComponent_div_19_option_19_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HealthForumComponent_div_19_div_20_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c0, ctx_r2.l.region.invalid && ctx_r2.l.region.touched, ctx_r2.l.region.valid && (ctx_r2.l.region.dirty || ctx_r2.l.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.l.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](9, _c0, ctx_r2.l.branch.invalid && ctx_r2.l.branch.touched, ctx_r2.l.branch.valid && (ctx_r2.l.branch.dirty || ctx_r2.l.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.l.branch.errors);
  }
}
function HealthForumComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_td_20_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](73);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.viewHFEventDetails(_r5, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_i_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 64);
  }
}
function HealthForumComponent_tr_68_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 65);
  }
}
function HealthForumComponent_tr_68_i_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_i_31_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](77);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.editHealthForum(_r9, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_i_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_i_32_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.deleteHealthForum(health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_i_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_i_33_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r46.approveHealthForum(health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_i_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_i_34_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50);
      const health_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](81);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r49.rescheduleHealthForum(_r13, health_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 26)(12, "div", 52)(13, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 54)(16, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_tr_68_Template_td_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const health_r28 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.openDialog(health_r28.villageList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HealthForumComponent_tr_68_td_20_Template, 2, 0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HealthForumComponent_tr_68_i_28_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, HealthForumComponent_tr_68_i_29_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, HealthForumComponent_tr_68_i_31_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, HealthForumComponent_tr_68_i_32_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HealthForumComponent_tr_68_i_33_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, HealthForumComponent_tr_68_i_34_Template, 1, 0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const health_r28 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.isIndex + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", health_r28.scheduleDetails.date.split("-").reverse().join("-"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", health_r28.rescheduleDetails ? health_r28.rescheduleDetails.rescheduleToDate.split("-").reverse().join("-") : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", health_r28.staffFirstName, " ", health_r28.staffLastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.ssName ? health_r28.ssName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" * ", health_r28.topicDetails.topicName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.eventViewMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", health_r28.noOfEventProposed, "/ ", health_r28.eventList.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.forumFamilyPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](health_r28.forumAdolescentGirlPresent + health_r28.forumFamilyHeadPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", health_r28.approvalStatus == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", health_r28.approvalStatus != "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.deleteMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.approveMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.rescheduleMode);
  }
}
function HealthForumComponent_ng_template_72_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](79);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r56.createHFEvents(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_23_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const disease_r67 = ctx.$implicit;
    const i_r68 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", i_r68 + 1, ". ", disease_r67.diseasesName, " ");
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_tr_61_div_23_li_1_Template, 2, 2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", event_r58.seasonalDiseaseDiscussedList);
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54)(1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_29_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const visitor_r71 = ctx.$implicit;
    const i_r72 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", i_r72 + 1, ". ", visitor_r71.visitorName, " (", visitor_r71.visitorDesignation, ") ");
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_72_tr_61_div_29_li_1_Template, 2, 3, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", event_r58.visitorDetails);
  }
}
function HealthForumComponent_ng_template_72_tr_61_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54)(1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HealthForumComponent_ng_template_72_tr_61_i_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_tr_61_i_36_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75);
      const event_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](79);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r74.editHFEvents(_r11, event_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_72_tr_61_i_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_tr_61_i_37_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const event_r58 = ctx_r78.$implicit;
      const i_r59 = ctx_r78.index;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r77.deleteHFEvent(event_r58, i_r59));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_72_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 26)(6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_tr_61_Template_span_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r81);
      const event_r58 = restoredCtx.$implicit;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](75);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r80.viewFamilyAttendedDetails(_r7, event_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td", 28)(20, "div", 52)(21, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, HealthForumComponent_ng_template_72_tr_61_div_23_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, HealthForumComponent_ng_template_72_tr_61_div_24_Template, 3, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "td", 79)(26, "div", 52)(27, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, HealthForumComponent_ng_template_72_tr_61_div_29_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, HealthForumComponent_ng_template_72_tr_61_div_30_Template, 3, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, HealthForumComponent_ng_template_72_tr_61_i_36_Template, 1, 0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, HealthForumComponent_ng_template_72_tr_61_i_37_Template, 1, 0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r59 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r58.createdOn.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", event_r58.forumEventFamilyPresent, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r58.forumEventFamilyHeadPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r58.forumEventAdolescentGirlPresent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](event_r58.eventConductedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r55.viewForumList.topicDetails.topicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (event_r58 == null ? null : event_r58.seasonalDiseaseDiscussedList == null ? null : event_r58.seasonalDiseaseDiscussedList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (event_r58 == null ? null : event_r58.seasonalDiseaseDiscussedList == null ? null : event_r58.seasonalDiseaseDiscussedList.length) == 0 || (event_r58 == null ? null : event_r58.seasonalDiseaseDiscussedList) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (event_r58 == null ? null : event_r58.visitorDetails == null ? null : event_r58.visitorDetails.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (event_r58 == null ? null : event_r58.visitorDetails == null ? null : event_r58.visitorDetails.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", event_r58.startHour.toString().length > 1 ? event_r58.startHour : "0" + event_r58.startHour, ":", event_r58.startMinute.toString().length > 1 ? event_r58.startMinute : "0" + event_r58.startMinute, " ", event_r58.startAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", event_r58.endHour.toString().length > 1 ? event_r58.endHour : "0" + event_r58.endHour, ":", event_r58.endMinute.toString().length > 1 ? event_r58.endMinute : "0" + event_r58.endMinute, " ", event_r58.endAmOrPm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r55.eventUpdateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r55.eventDeleteMode);
  }
}
function HealthForumComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Event Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_72_i_6_Template, 1, 0, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 72)(8, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_72_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r82.viewHFEventModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 76)(11, "div", 18)(12, "div", 18)(13, "div", 19)(14, "div", 20)(15, "table", 21)(16, "thead")(17, "tr")(18, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Sl.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Family View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "(Attended)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Fam. Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Adol. Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Conducted");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Topic Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Seasonal Disease");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Discussed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Visitors");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "tbody", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, HealthForumComponent_ng_template_72_tr_61_Template, 38, 19, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.eventCreateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.viewEventList);
  }
}
function HealthForumComponent_ng_template_74_tbody_34_tr_1_h3_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "(view)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_74_tbody_34_tr_1_h3_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h3", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "(view)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_74_tbody_34_tr_1_div_14_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r93 = ctx.$implicit;
    const chi_r94 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", chi_r94 + 1, ". ", child_r93.childName, " ");
  }
}
function HealthForumComponent_ng_template_74_tbody_34_tr_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_74_tbody_34_tr_1_div_14_li_1_Template, 2, 2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fam_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", fam_r87.childrenList);
  }
}
function HealthForumComponent_ng_template_74_tbody_34_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HealthForumComponent_ng_template_74_tbody_34_tr_1_h3_12_Template, 2, 0, "h3", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, HealthForumComponent_ng_template_74_tbody_34_tr_1_h3_13_Template, 2, 0, "h3", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HealthForumComponent_ng_template_74_tbody_34_tr_1_div_14_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fam_r87 = ctx.$implicit;
    const fami_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fam_r87.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", fam_r87.familyFirstName, " ", fam_r87.familyMiddleName, " ", fam_r87.familyLastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fami_r85.villageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolateV"]([" ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren == "Y" ? "PEM, LM, PW, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren == "Y" ? "PEM, LM, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren.includes("N") ? "PEM" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren.includes("N") ? "" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren == "Y" ? "LM, PW, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren.includes("N") ? "PW" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren.includes("N") ? "LM" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren == "Y" ? "PEM, PW, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren.includes("N") ? "PEM, LM, PW" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren.includes("N") ? "PEM, LM" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren == "Y" ? "PW, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren == "Y" ? "2-5 yr" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren.includes("N") ? "LM, PW" : "", " ", fam_r87.hasChildPresentInPem.includes("N") && fam_r87.presentInLactatingMother == "Y" && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren == "Y" ? "LM, 2-5 yr" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman == "Y" && fam_r87.has2to5yearsOldChildren.includes("N") ? "PEM, PW" : "", " ", fam_r87.hasChildPresentInPem == "Y" && fam_r87.presentInLactatingMother.includes("N") && fam_r87.presentInPregnantWoman.includes("N") && fam_r87.has2to5yearsOldChildren == "Y" ? "PEM, 2-5 yr" : "", " "]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", fam_r87.adolescent_girl_attended, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fam_r87.adolescent_girl_attended == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fam_r87.adolescent_girl_attended == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fam_r87.adolescent_girl_attended == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](fam_r87.family_head_present);
  }
}
function HealthForumComponent_ng_template_74_tbody_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_74_tbody_34_tr_1_Template, 17, 26, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fami_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", fami_r85.familyList);
  }
}
function HealthForumComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Family Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_74_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r98);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r97.viewFamilyModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 76)(9, "div", 18)(10, "div", 18)(11, "div", 19)(12, "div", 20)(13, "table", 21)(14, "thead")(15, "tr")(16, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Family Head Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Status Of Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Adolescent Girl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Family Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, HealthForumComponent_ng_template_74_tbody_34_Template, 2, 1, "tbody", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.familyDetails);
  }
}
function HealthForumComponent_ng_template_76_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_16_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r101.c.date.errors.required);
  }
}
function HealthForumComponent_ng_template_76_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const staff_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", staff_r117.staffId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", staff_r117.staffFisrtName, " ", staff_r117.staffMiddleName, " ", staff_r117.staffLastName, " ");
  }
}
function HealthForumComponent_ng_template_76_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Staff Name selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_26_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r103.c.staffName.errors.required);
  }
}
function HealthForumComponent_ng_template_76_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ss_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ss_r119.ssId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ss_r119.ssName, " ");
  }
}
function HealthForumComponent_ng_template_76_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Area selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_40_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r105.c.areaList.errors.required);
  }
}
function HealthForumComponent_ng_template_76_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const topic_r121 = ctx.$implicit;
    const i_r122 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r122 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](topic_r121.ss_training_event_topic_name);
  }
}
function HealthForumComponent_ng_template_76_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Data Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function HealthForumComponent_ng_template_76_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const topic_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", topic_r123.ss_training_event_topic_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", topic_r123.ss_training_event_topic_name, " ");
  }
}
function HealthForumComponent_ng_template_76_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Topic selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_65_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r109.c.topic.errors.required);
  }
}
function HealthForumComponent_ng_template_76_div_78_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No. of Event Proposed is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_78_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r110.c.event.errors.required);
  }
}
function HealthForumComponent_ng_template_76_option_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r126.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r126.hourName, " ");
  }
}
function HealthForumComponent_ng_template_76_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_90_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r112.c.hour.errors.required);
  }
}
function HealthForumComponent_ng_template_76_option_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r129.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r129.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_76_div_96_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_96_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r114.c.minute.errors.required);
  }
}
function HealthForumComponent_ng_template_76_div_105_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select Meridiem");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_76_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_76_div_105_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r115.c.meridiem.errors.required);
  }
}
function HealthForumComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 94)(1, "div", 71)(2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_76_h2_3_Template, 2, 0, "h2", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HealthForumComponent_ng_template_76_h2_4_Template, 2, 0, "h2", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_76_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r133.createHFModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 96)(9, "form", 16)(10, "div", 40)(11, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_76_Template_input_keydown_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r135.restrictTypeOfDate());
    })("change", function HealthForumComponent_ng_template_76_Template_input_change_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r136.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_ng_template_76_div_16_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 40)(18, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Staff Name :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_76_Template_select_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r137.changeStaff($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "-- Select Staff Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, HealthForumComponent_ng_template_76_option_25_Template, 2, 4, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_76_div_26_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 40)(28, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "SS Name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_76_Template_select_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r138.changeSS($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "-- Select SS Name --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HealthForumComponent_ng_template_76_option_33_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 40)(35, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Select Multiple Area :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ng-multiselect-dropdown", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onSelect", function HealthForumComponent_ng_template_76_Template_ng_multiselect_dropdown_onSelect_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r139.onItemSelect($event));
    })("onSelectAll", function HealthForumComponent_ng_template_76_Template_ng_multiselect_dropdown_onSelectAll_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r140.onSelectAll($event));
    })("onDeSelect", function HealthForumComponent_ng_template_76_Template_ng_multiselect_dropdown_onDeSelect_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r141.onItemDeSelect($event));
    })("onDeSelectAll", function HealthForumComponent_ng_template_76_Template_ng_multiselect_dropdown_onDeSelectAll_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r142.onItemDeSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, HealthForumComponent_ng_template_76_div_40_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 40)(42, "fieldset", 105)(43, "legend", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Last Mon. Training Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 107)(46, "table", 108)(47, "thead", 109)(48, "tr", 80)(49, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Topic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "tbody", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, HealthForumComponent_ng_template_76_tr_54_Template, 5, 2, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, HealthForumComponent_ng_template_76_tr_55_Template, 3, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 40)(57, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "select", 113)(62, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "-- Select Topic --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, HealthForumComponent_ng_template_76_option_64_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, HealthForumComponent_ng_template_76_div_65_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 40)(67, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "No. of Event Proposed :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "select", 115)(72, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "-- Select Event --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, HealthForumComponent_ng_template_76_div_78_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 40)(80, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Schedule Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 2)(85, "div", 72)(86, "select", 119)(87, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, HealthForumComponent_ng_template_76_option_89_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, HealthForumComponent_ng_template_76_div_90_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 72)(92, "select", 120)(93, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](95, HealthForumComponent_ng_template_76_option_95_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](96, HealthForumComponent_ng_template_76_div_96_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 72)(98, "select", 121)(99, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, HealthForumComponent_ng_template_76_div_105_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 124)(107, "div", 2)(108, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_76_Template_button_click_108_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r143.HfSaveOrUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.editHFDetails == null ? null : ctx_r10.editHFDetails.healthForumMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r10.createHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r10.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](30, _c0, ctx_r10.c.date.invalid && ctx_r10.c.date.touched, ctx_r10.c.date.valid && (ctx_r10.c.date.dirty || ctx_r10.c.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](33, _c0, ctx_r10.c.staffName.invalid && ctx_r10.c.staffName.touched, ctx_r10.c.staffName.valid && (ctx_r10.c.staffName.dirty || ctx_r10.c.staffName.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.staffList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.staffName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.SSList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("settings", ctx_r10.dropdownSettings)("data", ctx_r10.areaList)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](36, _c0, ctx_r10.c.areaList.invalid && ctx_r10.c.areaList.touched, ctx_r10.c.areaList.valid && (ctx_r10.c.areaList.dirty || ctx_r10.c.areaList.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.areaList.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.lastMonthRefresherTrainingTopic);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.lastMonthRefresherTrainingTopic == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](39, _c0, ctx_r10.c.topic.invalid && ctx_r10.c.topic.touched, ctx_r10.c.topic.valid && (ctx_r10.c.topic.dirty || ctx_r10.c.topic.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.topicList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.topic.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](42, _c0, ctx_r10.c.event.invalid && ctx_r10.c.event.touched, ctx_r10.c.event.valid && (ctx_r10.c.event.dirty || ctx_r10.c.event.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.event.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](45, _c0, ctx_r10.c.hour.invalid && ctx_r10.c.hour.touched, ctx_r10.c.hour.valid && (ctx_r10.c.hour.dirty || ctx_r10.c.hour.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.hour.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](48, _c0, ctx_r10.c.minute.invalid && ctx_r10.c.minute.touched, ctx_r10.c.minute.valid && (ctx_r10.c.minute.dirty || ctx_r10.c.minute.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.minute.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](51, _c0, ctx_r10.c.meridiem.invalid && ctx_r10.c.meridiem.touched, ctx_r10.c.meridiem.valid && (ctx_r10.c.meridiem.dirty || ctx_r10.c.meridiem.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.c.meridiem.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r10.saveIsDisabled());
  }
}
function HealthForumComponent_ng_template_78_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Create Health Forum Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Edit Health Forum Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r158.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r158.hourName, " ");
  }
}
function HealthForumComponent_ng_template_78_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r160.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r160.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_78_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hours_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", hours_r162.hourValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", hours_r162.hourName, " ");
  }
}
function HealthForumComponent_ng_template_78_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const minutes_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", minutes_r164.minuteValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", minutes_r164.minuteName, " ");
  }
}
function HealthForumComponent_ng_template_78_label_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_label_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 148)(1, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_label_86_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r167);
      const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r166.ssPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_option_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Staff ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_option_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " SS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_div_101_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Select event conduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_78_div_101_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r154.e.eventConduction.errors.required);
  }
}
function HealthForumComponent_ng_template_78_tr_119_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_78_tr_119_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r175);
      const i_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r173.removeNewVisitor(i_r170));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_tr_119_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 191)(1, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function HealthForumComponent_ng_template_78_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_78_tr_119_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r176.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function HealthForumComponent_ng_template_78_tr_119_Template_input_keypress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r178.validationService.titleCase($event));
    })("ngModelChange", function HealthForumComponent_ng_template_78_tr_119_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const i_r170 = restoredCtx.index;
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r179.visitorDetails.visitorInfo[i_r170].visitorName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function HealthForumComponent_ng_template_78_tr_119_Template_input_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r180.validationService.onlyAlphabetsAndSpace($event));
    })("keypress", function HealthForumComponent_ng_template_78_tr_119_Template_input_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r181.validationService.titleCase($event));
    })("ngModelChange", function HealthForumComponent_ng_template_78_tr_119_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r177);
      const i_r170 = restoredCtx.index;
      const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r182.visitorDetails.visitorInfo[i_r170].visitorDesignation = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_78_tr_119_button_6_Template, 2, 0, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_78_tr_119_button_7_Template, 3, 0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r170 = ctx.index;
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c1))("ngModel", ctx_r155.visitorDetails.visitorInfo[i_r170].visitorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](7, _c1))("ngModel", ctx_r155.visitorDetails.visitorInfo[i_r170].visitorDesignation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r155.visitorDetails.visitorInfo[i_r170].active_flag != "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r155.visitorDetails.visitorInfo[i_r170].active_flag == "D");
  }
}
function HealthForumComponent_ng_template_78_div_180_tr_15_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_div_180_tr_15_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r190);
      const disease_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r188.selectMultipleDisease($event, disease_r184));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_div_180_tr_15_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_div_180_tr_15_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r193);
      const disease_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r191.selectMultipleDisease($event, disease_r184));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_div_180_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HealthForumComponent_ng_template_78_div_180_tr_15_input_6_Template, 1, 0, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_78_div_180_tr_15_input_7_Template, 1, 0, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const disease_r184 = ctx.$implicit;
    const i_r185 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r185 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](disease_r184.diseaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", disease_r184.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", disease_r184.isChecked == false);
  }
}
function HealthForumComponent_ng_template_78_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "fieldset", 105)(2, "legend", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Seasonal Disease Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 107)(5, "table", 108)(6, "thead", 109)(7, "tr", 80)(8, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "tbody", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HealthForumComponent_ng_template_78_div_180_tr_15_Template, 8, 4, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r156.eventDiseaseList);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", vill_r194.villageName, " ");
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_22_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r209);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r207.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_23_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r214);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r212.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r221);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r219.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r226);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r224.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_2_Template, 1, 1, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_input_3_Template, 1, 1, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck != "N");
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r234);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r232.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r239);
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const vill_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r237.changefamilyHeadPresent($event, fami_r200, vill_r194));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const int_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", int_r201);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_2_Template, 1, 1, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_input_3_Template, 1, 1, "input", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck != "N");
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r252);
      const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r250.selectAdolescent($event, adol_r244, fami_r200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r256);
      const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r254.selectAdolescent($event, adol_r244, fami_r200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_1_Template, 1, 0, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_input_2_Template, 1, 0, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r244.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r244.isChecked != true);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r263);
      const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r261.selectAdolescent($event, adol_r244, fami_r200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r267);
      const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r265.selectAdolescent($event, adol_r244, fami_r200));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_1_Template, 1, 0, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_input_2_Template, 1, 0, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r244.isChecked == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adol_r244.isChecked != true);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_7_Template, 3, 2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_td_8_Template, 3, 2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adol_r244 = ctx.$implicit;
    const ide_r245 = ctx.index;
    const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ide_r245 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", adol_r244.childName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", adol_r244.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck != "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck == "NA");
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "fieldset", 106)(2, "legend", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Adolescent Girl Attended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 107)(5, "table", 108)(6, "thead", 109)(7, "tr", 80)(8, "th", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Sl. No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "tbody", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_tr_17_Template, 9, 5, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const fami_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", fami_r200.adolescentGilrChildren);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 200)(1, "div", 138)(2, "div", 2)(3, "div", 201)(4, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 175)(7, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 202)(10, "i", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r273);
      const fami_r200 = restoredCtx.$implicit;
      const int_r201 = restoredCtx.index;
      const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r272.unselectFamily(fami_r200, int_r201));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 2)(12, "div", 201)(13, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 204)(16, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Family Head Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 205)(21, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_22_Template, 1, 1, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_input_23_Template, 1, 1, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_26_Template, 6, 2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_27_Template, 6, 2, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_div_28_Template, 18, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fami_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Family No. : ", fami_r200.familyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("Name : ", fami_r200.firstName, "", fami_r200.middleName, " ", fami_r200.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Status : ", fami_r200.setStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.radioCheck != "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.adolescentGilrChildren.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.adolescentGilrChildren.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", fami_r200.adolescentGilrChildren.length > 0);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_div_0_Template, 29, 10, "div", 199);
  }
  if (rf & 2) {
    const i_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r197.eventFamList[i_r195]);
  }
}
function HealthForumComponent_ng_template_78_mat_tab_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_1_Template, 1, 1, "ng-template", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HealthForumComponent_ng_template_78_mat_tab_196_ng_template_2_Template, 1, 1, "ng-template", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 127)(1, "div", 71)(2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HealthForumComponent_ng_template_78_h2_3_Template, 2, 0, "h2", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HealthForumComponent_ng_template_78_h2_4_Template, 2, 0, "h2", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_78_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r275.editHFEventModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 128)(9, "form", 16)(10, "div", 2)(11, "div", 72)(12, "div", 2)(13, "div", 129)(14, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Start Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "select", 131)(20, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HealthForumComponent_ng_template_78_option_22_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "select", 132)(24, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HealthForumComponent_ng_template_78_option_26_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "select", 133)(28, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 2)(35, "div", 129)(36, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "\u00A0\u00A0End Time :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "select", 134)(42, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "-- HH --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, HealthForumComponent_ng_template_78_option_44_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "select", 135)(46, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "-- MM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, HealthForumComponent_ng_template_78_option_48_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "select", 136)(50, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "-- AM/PM --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 2)(57, "div", 137)(58, "div", 138)(59, "div", 2)(60, "div", 139)(61, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Staff Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 141)(69, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_input_change_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r277.staffPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 141)(73, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_input_change_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r278.staffPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 139)(77, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, " SS Present :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, HealthForumComponent_ng_template_78_label_85_Template, 3, 0, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, HealthForumComponent_ng_template_78_label_86_Template, 3, 0, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 141)(88, "label", 148)(89, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_input_change_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r279.ssPresentorNot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "div", 139)(92, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "Event Conducted By :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "select", 151)(97, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, HealthForumComponent_ng_template_78_option_99_Template, 2, 0, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](100, HealthForumComponent_ng_template_78_option_100_Template, 2, 0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](101, HealthForumComponent_ng_template_78_div_101_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "div", 40)(103, "div", 154)(104, "div", 155)(105, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Visitor Details :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_78_Template_i_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r280.addMoreVisitor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 107)(109, "table", 158)(110, "thead", 109)(111, "tr", 80)(112, "th", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "th", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "th", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "tbody", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, HealthForumComponent_ng_template_78_tr_119_Template, 8, 8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 2)(121, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](122, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "div", 2)(124, "div", 163)(125, "div", 138)(126, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "Discussion Topic :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 2)(129, "div", 164)(130, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, " Recap Last Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "div", 166)(137, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](138, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](143, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 2)(147, "div", 164)(148, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, " Discussion on This Month's Topic :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "div", 166)(155, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](156, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](161, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "div", 2)(165, "div", 164)(166, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](167, " Any Discussion on Seasonal Diseases :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "div", 166)(171, "div", 141)(172, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_input_change_172_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r281.changeseasonalDiscussion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, " \u00A0\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_input_change_177_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r282.changeseasonalDiscussion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, " \u00A0\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](180, HealthForumComponent_ng_template_78_div_180_Template, 16, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "div", 162)(182, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](183, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "div", 175)(185, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "View Family List By :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "select", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function HealthForumComponent_ng_template_78_Template_select_change_187_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r283.viewFilterByFamilyList($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, "-- All Family --");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "Selected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "option", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "Unselected Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "div", 2)(195, "mat-tab-group", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedTabChange", function HealthForumComponent_ng_template_78_Template_mat_tab_group_selectedTabChange_195_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r284.tabChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](196, HealthForumComponent_ng_template_78_mat_tab_196_Template, 3, 0, "mat-tab", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "div", 124)(198, "div", 2)(199, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_78_Template_button_click_199_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r276);
      const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r285.saveEditHFEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.editHF_eventDetails == null ? null : ctx_r12.editHF_eventDetails.healthForumEventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r12.createEditHFEventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.hourList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.minuteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" (", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffFirstName, " ", ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.staffLastName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName : "No SS Present", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](22, _c0, ctx_r12.e.eventConduction.invalid && ctx_r12.e.eventConduction.touched, ctx_r12.e.eventConduction.valid && (ctx_r12.e.eventConduction.dirty || ctx_r12.e.eventConduction.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.staffPresent == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.ssPresent == "Y" && (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.ssName) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.e.eventConduction.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.visitorDetails.visitorInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.lastMonthHfTopicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", (ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName) ? ctx_r12.HForumEventPrerequisite == null ? null : ctx_r12.HForumEventPrerequisite.topicName : "-", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.createEditHFEventForm.value.seasonalDiscussion == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.eventVillList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r12.saveEditHFEventDisabled());
  }
}
function HealthForumComponent_ng_template_80_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_80_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_80_div_16_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r286.r.date.errors.required);
  }
}
function HealthForumComponent_ng_template_80_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function HealthForumComponent_ng_template_80_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HealthForumComponent_ng_template_80_div_24_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r287.r.comment.errors.required);
  }
}
function HealthForumComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 224)(1, "div", 71)(2, "div", 72)(3, "h3", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Reschedule Health Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 72)(6, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_80_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r291);
      const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r290.rescheduleHFModalDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 226)(9, "form", 16)(10, "div", 40)(11, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Date :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function HealthForumComponent_ng_template_80_Template_input_keydown_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r291);
      const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r292.restrictTypeOfDate());
    })("change", function HealthForumComponent_ng_template_80_Template_input_change_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r291);
      const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r293.changeDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_ng_template_80_div_16_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 40)(18, "label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Comments :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "textarea", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, HealthForumComponent_ng_template_80_div_24_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 124)(26, "div", 2)(27, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HealthForumComponent_ng_template_80_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r291);
      const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r294.saveRescheduled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r14.rescheduleHFForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", ctx_r14.setDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](7, _c0, ctx_r14.r.date.invalid && ctx_r14.r.date.touched, ctx_r14.r.date.valid && (ctx_r14.r.date.dirty || ctx_r14.r.date.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.r.date.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](10, _c0, ctx_r14.r.comment.invalid && ctx_r14.r.comment.touched, ctx_r14.r.comment.valid && (ctx_r14.r.comment.dirty || ctx_r14.r.comment.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.r.comment.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r14.rescheduleSave());
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    staffFirstName: a0,
    staffLastName: a1,
    ssName: a2
  };
};
const _c3 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class HealthForumComponent {
  constructor(fb, sidebarService, http, httpService, healthForumService, modalService, config, router, toaster, validationService, dialog, confirmationDialogService) {
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.http = http;
    this.httpService = httpService;
    this.healthForumService = healthForumService;
    this.modalService = modalService;
    this.router = router;
    this.toaster = toaster;
    this.validationService = validationService;
    this.dialog = dialog;
    this.confirmationDialogService = confirmationDialogService;
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.viewHealthForumsOfBranch = [];
    this.viewEventList = [];
    this.familyDetails = [];
    this.dropdownSettings = {};
    this.areaList = [];
    this.hourList = [];
    this.minuteList = [];
    this.staffList = [];
    this.SSList = [];
    this.topicList = [];
    this.villageList = [];
    this.editHFDetails = {};
    this.editHFDetailsTime = [];
    this.loader = false;
    this.visitorDetails = {
      visitorInfo: []
    };
    this.index = 0;
    this.eventVillList = [];
    this.eventVillListID = [];
    this.eventDiseaseList = [];
    this.eventFamList = [];
    this.setFamList = [];
    this.statusList = [];
    this.diseaseListID = [];
    this.adolGirlListDisable = [];
    this.familyListData = [];
    this.editHF_eventDetails = {};
    this.familyHeadPresentLenChk = [];
    this.lastMonthRefresherTrainingTopic = [];
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.healthForumForms();
    this.loader = false;
    this.sidebarService.checkRoledetailDTO().then(res => {
      this.loader = true;
      this.lowerRankbranchId = res.branchId;
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
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/health-forum']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.approveMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'approve')?.accessType ? true : false;
    this.rescheduleMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'reschedule')?.accessType ? true : false;
    this.eventViewMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event view')?.accessType ? true : false;
    this.eventCreateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event create')?.accessType ? true : false;
    this.eventUpdateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event update')?.accessType ? true : false;
    this.eventDeleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 8)?.subMenuDetailList.find(item => item.subFunctionMasterId == 246 || item.subFunctionMasterId == 247 || item.subFunctionMasterId == 248 || item.subFunctionMasterId == 249)?.accessDetailList.find(accessType => accessType.accessType == 'event delete')?.accessType ? true : false;
  }
  healthForumForms() {
    this.healthForumForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
  }
  get l() {
    return this.healthForumForm.controls;
  }
  changeRegion(regionId) {
    console.log(regionId, 'regionId');
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId
    };
    this.healthForumService.listOfBranchesOfARegion(req).subscribe(res => {
      this.branchList = res?.responseObject;
      console.log(this.branchList, 'this.branchList');
    });
    this.healthForumForm.controls.branch.setValue('');
    this.viewHealthForumsOfBranch = [];
  }
  changeBranch(branchId) {
    console.log(branchId, 'branchId');
    this.branchId = branchId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: branchId
    };
    this.loader = false;
    this.healthForumService.viewHealthForumsOfABranch(req).subscribe(res => {
      this.viewHealthForumsOfBranch = res?.responseObject;
      this.loader = true;
      this.viewHealthForumsOfBranch = this.viewHealthForumsOfBranch?.map(({
        isIndex = 0,
        ...rest
      }) => ({
        isIndex,
        ...rest
      }));
      this.viewHealthForumsOfBranch.forEach((i, index) => {
        i.isIndex = index;
      });
      console.log(this.viewHealthForumsOfBranch, 'this.viewHealthForumsOfBranch');
    });
    this.viewHealthForumsOfBranch = [];
  }
  viewHFEventDetails(HFeventDetails, health) {
    this.viewForumList = health;
    console.log(this.viewForumList, 'viewForumList');
    this.viewEventList = health.eventList;
    console.log(this.viewEventList, 'viewEventList');
    this.modalContent = '';
    this.viewHFEventModal = this.modalService.open(HFeventDetails, {
      windowClass: 'HFeventDetails'
    });
  }
  viewHFEventModalDismiss() {
    this.viewHFEventModal.close();
  }
  viewFamilyAttendedDetails(ViewFamilyDetails, event) {
    console.log(event);
    if (event.forumEventFamilyPresent == 0) {
      this.showError('No family is available');
      return;
    } else {
      let obj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: event.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.healthForumService.viewHealthForumsOfAEvent(obj).subscribe(res => {
        console.log(res.responseObject);
        this.familyDetails = res.responseObject?.villageWiseFamilyList;
        console.log(this.familyDetails, 'this.familyDetails');
      });
      this.modalContent = '';
      this.viewFamilyDetailModal = this.modalService.open(ViewFamilyDetails, {
        windowClass: 'ViewFamilyDetails'
      });
    }
  }
  viewFamilyModalDismiss() {
    this.viewFamilyDetailModal.close();
  }
  hourLists() {
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        this.hourList.push({
          hourName: '0' + i,
          hourValue: '0' + i
        });
      } else {
        this.hourList.push({
          hourName: i,
          hourValue: i
        });
      }
      // console.log(this.hourList);
    }
  }

  minuteLists() {
    for (let i = 0; i <= 59; i++) {
      if (i < 10) {
        this.minuteList.push({
          minuteName: '0' + i,
          minuteValue: '0' + i
        });
      } else {
        this.minuteList.push({
          minuteName: i,
          minuteValue: i
        });
      }
      // console.log(this.minuteList);
    }
  }

  getAllStaffAndTheirSSOfABranch() {
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      branchId: this.branchId
    };
    this.healthForumService.getAllStaffAndTheirSSOfABranch(req).subscribe(res => {
      this.staffList = res.responseObject;
      console.log(this.staffList, 'staffList');
    });
  }
  createHealthForum(createHF) {
    console.log(this.editHFDetails, 'editHFDetails');
    this.hourList = [];
    this.minuteList = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'villageMasterId',
      textField: 'villageName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.createHFForms();
    if (this.editHFDetails.healthForumMasterId) {
      let dateString = new Date();
      this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateString).add(0, "days").format("YYYY-MM-DD");
      setTimeout(() => {
        this.modalContent = '';
        this.createHFModal = this.modalService.open(createHF, {
          windowClass: 'createHF'
        });
        this.loader = true;
      }, 1500);
    } else {
      let dateString = new Date();
      this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(dateString).add(1, "days").format("YYYY-MM-DD");
      this.modalContent = '';
      this.createHFModal = this.modalService.open(createHF, {
        windowClass: 'createHF'
      });
    }
    this.hourLists();
    this.minuteLists();
    this.getAllStaffAndTheirSSOfABranch();
  }
  changeDate() {
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
    if (this.editHFDetails?.scheduleDetails?.date != this.createHFForm.value.date) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
  }
  changeStaff(staffId) {
    console.log(staffId, 'staffId');
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
      this.createHFForm.controls.ssName.setValue('');
    }
    if (this.editHFDetails?.staffDetails?.staffId != this.createHFForm.value.staffName) {
      this.createHFForm.controls.ssName.setValue('');
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
    this.SSList = this.staffList.find(item => item.staffId == staffId)?.ssList;
    console.log(this.SSList, 'ssList');
    this.getTopicListAndAreasOfStaffAndOrSS();
  }
  changeSS(ssId) {
    console.log(ssId, 'ssId');
    this.getTopicListAndAreasOfStaffAndOrSS();
    if (!this.editHFDetails?.healthForumMasterId) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
    if (this.editHFDetails?.ssDetails?.ssId != this.createHFForm.value.ssName) {
      this.createHFForm.controls.areaList.setValue('');
      this.createHFForm.controls.topic.setValue('');
    }
  }
  getTopicListAndAreasOfStaffAndOrSS() {
    this.areaList = [];
    if (!this.createHFForm?.value?.ssName) {
      this.createHFForm?.controls.ssName.setValue('');
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumDate: this.createHFForm?.value.date,
      staffMasterId: this.createHFForm?.value.staffName,
      ssId: this.createHFForm?.value.ssName ? this.createHFForm?.value.ssName : ''
    };
    this.healthForumService.getTopicListAndAreasOfStaffAndOrSS(req).subscribe(res => {
      console.log(res.responseObject);
      this.topicList = res.responseObject?.allTopics;
      this.lastMonthRefresherTrainingTopic = res.responseObject?.lastMonthRefresherTrainingTopic;
      console.log(this.lastMonthRefresherTrainingTopic, 'this.lastMonthRefresherTrainingTopic');
      console.log(this.topicList, ' this.topicList');
      this.areaList = res.responseObject?.villageDetails;
      this.areaList = this.areaList?.map(({
        isChecked = false,
        ...rest
      }) => ({
        isChecked,
        ...rest
      }));
      console.log(this.areaList, 'areaList');
    });
  }
  onItemSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach(x => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }
  onItemDeSelect(areaList) {
    this.areaList.filter(list => list.villageMasterId == areaList?.villageMasterId).forEach(x => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }
  onSelectAll() {
    this.areaList.forEach(x => {
      x.isChecked = true;
    });
    console.log(this.areaList);
  }
  onItemDeSelectAll() {
    this.areaList.forEach(x => {
      x.isChecked = false;
    });
    console.log(this.areaList);
  }
  createHFForms() {
    this.editHFDetailsTime = [];
    if (this.editHFDetails?.healthForumMasterId) {
      var text = this.editHFDetails?.scheduleDetails?.time;
      text.trim().replace(" ", ":").trim().split(":").forEach(e => {
        if (e.length < 2) {
          this.editHFDetailsTime.push("0" + e);
        } else {
          this.editHFDetailsTime.push(e);
        }
        console.log(this.editHFDetailsTime);
      });
      console.log(this.editHFDetails.villageList);
      this.editHFDetails.villageList = this.editHFDetails.villageList.map(({
        villageId: villageMasterId,
        ...rest
      }) => ({
        villageMasterId,
        ...rest
      }));
      console.log(this.editHFDetails.villageList);
      setTimeout(() => {
        this.editHFDetails?.villageList?.forEach(e => {
          this.areaList.find(v => v.villageMasterId == e.villageMasterId).isChecked = true;
        });
      }, 1000);
      this.createHFForm = this.fb.group({
        date: [this.editHFDetails?.rescheduleDetails?.rescheduleToDate ? this.editHFDetails?.rescheduleDetails?.rescheduleToDate : this.editHFDetails.scheduleDetails.date, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffName: [this.editHFDetails.staffDetails.staffId, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssName: [this.editHFDetails.ssDetails.ssId ? this.editHFDetails.ssDetails.ssId : ''],
        areaList: [this.editHFDetails.villageList ? this.editHFDetails.villageList : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        hour: [this.editHFDetailsTime[0], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        minute: [this.editHFDetailsTime[1], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        meridiem: [this.editHFDetailsTime[2], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        topic: [this.editHFDetails.topicDetails.topicId, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        event: [{
          value: this.editHFDetails.noOfEventProposed,
          disabled: this.editHFDetails?.rescheduleDetails?.rescheduleToDate ? true : false
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
      // console.log(this.editHFDetails.topicDetails.topicId);
      this.createHFForm.markAllAsTouched();
      // this.getAllStaffAndTheirSSOfABranch();
      setTimeout(() => {
        this.changeStaff(this.editHFDetails.staffDetails.staffId);
      }, 500);
    } else {
      this.createHFForm = this.fb.group({
        date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssName: [''],
        areaList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        hour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        minute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        meridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
    }
  }
  saveIsDisabled() {
    let flag = true;
    if (this.editHFDetails?.rescheduleDetails?.rescheduleToDate) {
      if (!this.createHFForm.value.date) {
        flag = false;
      } else if (!this.createHFForm.value.staffName) {
        flag = false;
      } else if (!this.createHFForm.value.areaList) {
        flag = false;
      } else if (!this.createHFForm.value.topic) {
        flag = false;
      } else if (!this.createHFForm.value.hour) {
        flag = false;
      } else if (!this.createHFForm.value.minute) {
        flag = false;
      } else if (!this.createHFForm.value.meridiem) {
        flag = false;
      }
      return flag;
    } else {
      if (!this.createHFForm.value.date) {
        flag = false;
      } else if (!this.createHFForm.value.staffName) {
        flag = false;
      } else if (!this.createHFForm.value.areaList) {
        flag = false;
      } else if (!this.createHFForm.value.topic) {
        flag = false;
      } else if (!this.createHFForm.value.event) {
        flag = false;
      } else if (!this.createHFForm.value.hour) {
        flag = false;
      } else if (!this.createHFForm.value.minute) {
        flag = false;
      } else if (!this.createHFForm.value.meridiem) {
        flag = false;
      }
      return flag;
    }
  }
  HfSaveOrUpdate() {
    console.log(this.editHFDetails, 'editHFDetails');
    console.log(this.areaList);
    var tt = [];
    this.villageList = this.areaList.filter(list => list.isChecked == true);
    this.villageList.forEach(x => {
      tt.push({
        villageMasterId: x.villageMasterId
      });
    });
    console.log(this.villageList, 'this.villageList');
    let saveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: this.editHFDetails?.healthForumMasterId ? this.editHFDetails?.healthForumMasterId : 0,
      branchId: this.healthForumForm.value.branch ? this.healthForumForm.value.branch : this.lowerRankbranchId,
      staffId: this.createHFForm.value.staffName,
      ssId: this.createHFForm.value.ssName ? this.createHFForm.value.ssName : null,
      topicId: this.createHFForm.value.topic,
      date: this.createHFForm.value.date,
      scheduleStartHour: this.createHFForm.value.hour,
      scheduleStartMinute: this.createHFForm.value.minute,
      amOrPm: this.createHFForm.value.meridiem,
      noOfEventProposed: this.createHFForm.value.event,
      active_flag: 'A',
      villageList: tt,
      rescheduleDetails: this.editHFDetails?.rescheduleDetails ? {
        comment: this.editHFDetails?.rescheduleDetails.comment,
        rescheduleApprovalStatus: this.editHFDetails?.rescheduleDetails?.rescheduleApprovalStatus,
        rescheduleApprovedOn: this.editHFDetails?.rescheduleDetails?.rescheduleApprovedOn,
        rescheduleApproverFirstName: this.editHFDetails?.rescheduleDetails?.rescheduleApproverFirstName,
        rescheduleApproverId: this.editHFDetails?.rescheduleDetails?.rescheduleApproverId,
        rescheduleApproverLastName: this.editHFDetails?.rescheduleDetails?.rescheduleApproverLastName,
        rescheduleMasterId: this.editHFDetails?.rescheduleDetails?.rescheduleMasterId,
        rescheduleTime: this.editHFDetails?.rescheduleDetails?.rescheduleTime,
        rescheduleToDate: this.createHFForm.value.date
      } : null
    };
    console.log(saveObj, 'savObj');
    console.log(saveObj.villageList);
    if (saveObj.villageList.length == 0) {
      this.showError('Area selection is required');
      return;
    }
    this.loader = false;
    this.healthForumService.HFSaveOrUpdate(saveObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.loader = true;
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
        this.createHFModalDismiss();
      } else {
        this.loader = true;
        this.showError(res.message);
      }
    });
  }
  editHealthForum(createHF, health) {
    console.log(health);
    var currentTime = new Date().toJSON().slice(0, 10);
    if (health?.rescheduleDetails?.rescheduleToDate) {
      if (health?.rescheduleDetails?.rescheduleToDate < currentTime) {
        this.showError('HF of past date can not be edited');
        return;
      } else if (health.eventList.length != 0) {
        this.showError('Not accessible as event is created');
        return;
      } else {
        this.editHFDetails = health;
        this.loader = false;
        this.createHealthForum(createHF);
      }
    } else {
      if (health?.scheduleDetails?.date < currentTime) {
        this.showError('HF of past date can not be edited');
        return;
      } else if (health.eventList.length != 0) {
        this.showError('Not accessible as event is created');
        return;
      } else {
        this.editHFDetails = health;
        this.loader = false;
        this.createHealthForum(createHF);
      }
    }
  }
  get c() {
    return this.createHFForm.controls;
  }
  createHFModalDismiss() {
    var ID = this.editHFDetails?.healthForumMasterId;
    if (ID) {
      this.editHFDetails = '';
      ID = 0;
      this.createHFModal.close();
    } else {
      this.createHFModal.close();
    }
  }
  deleteHealthForum(health) {
    var currentTime = new Date().toJSON().slice(0, 10);
    if (health?.rescheduleDetails?.rescheduleToDate) {
      if (health?.rescheduleDetails?.rescheduleToDate < currentTime) {
        this.showError('HF of past date can not be deleted');
        return;
      } else if (health.eventList.length != 0) {
        this.showError('Not accessible as event is created');
        return;
      } else {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete this forum ?').then(() => this.delete(health)).catch(() => '');
      }
    } else {
      if (health?.scheduleDetails?.date < currentTime) {
        this.showError('HF of past date can not be deleted');
        return;
      } else if (health.eventList.length != 0) {
        this.showError('Not accessible as event is created');
        return;
      } else {
        this.confirmationDialogService.confirm('', 'Are you sure you want to delete this forum ?').then(() => this.delete(health)).catch(() => '');
      }
    }
  }
  delete(health) {
    let delObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumMasterId: health.healthForumMasterId,
      branchId: this.healthForumForm.value.branch,
      staffId: health.staffDetails.staffId,
      ssId: health.ssDetails.ssId,
      topicId: health.topicDetails.topicId,
      date: health.scheduleDetails.date,
      noOfEventProposed: health.noOfEventProposed,
      active_flag: 'D',
      villageList: health.villageList
    };
    console.log(delObj, 'delObj');
    this.healthForumService.HFSaveOrUpdate(delObj).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  approveHealthForum(health) {
    console.log(health);
    var currentTime = new Date().toJSON().slice(0, 10);
    if (health?.rescheduleDetails?.rescheduleToDate) {
      if (health?.rescheduleDetails?.rescheduleToDate < currentTime) {
        this.showError('HF of past date can not be approved');
        return;
      } else if (health?.rescheduleDetails?.rescheduleApprovalStatus == 'A') {
        this.showError('HF is already approved');
        return;
      } else {
        let req = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          healthForumMasterId: health.healthForumMasterId
        };
        this.healthForumService.approveARescheduleHealthForum(req).subscribe(res => {
          console.log(res);
          if (res.status == true) {
            this.showSuccess('Approved Successfully');
            this.changeBranch(this.branchId || this.lowerRankbranchId);
          } else {
            this.showError(res.message);
          }
        });
      }
    } else {
      if (health?.scheduleDetails?.date < currentTime) {
        this.showError('HF of past date can not be approved');
        return;
      } else if (health.approvalStatus == 'A') {
        this.showError('HF is already approved');
        return;
      } else {
        let appObj = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          healthForumMasterId: health.healthForumMasterId,
          isApproved: false
        };
        this.healthForumService.HFApprove(appObj).subscribe(res => {
          console.log(res);
          if (res.status == true) {
            this.showSuccess('Approved Successfully');
            this.changeBranch(this.branchId || this.lowerRankbranchId);
          } else {
            this.showError(res.message);
          }
        });
      }
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Health Forum', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Health Forum', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  openDialog(health) {
    this.dialog.open(_health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_1__.HealthForumAngularMatModalComponent, {
      width: '400px',
      height: '250px',
      data: {
        villLists: health
      }
    });
  }
  createHFEvents(createEditHFEvent) {
    var currentTime = new Date().toJSON().slice(0, 10);
    console.log(this.editHF_eventDetails);
    if (this.editHF_eventDetails?.healthForumEventId) {
      if (this.editHF_eventDetails.createdOn != currentTime) {
        this.showError('Event update is only accessible  on' + ' ' + this.editHF_eventDetails?.createdOn?.split("-").reverse().join("-"));
        this.editHF_eventDetails = [];
        return;
      }
    } else {
      if (this.viewForumList?.rescheduleDetails?.rescheduleToDate) {
        if (this.viewForumList?.rescheduleDetails?.rescheduleToDate != currentTime) {
          this.showError('Event create is only accessible on' + ' ' + this.viewForumList?.rescheduleDetails?.rescheduleToDate.split("-").reverse().join("-"));
          this.editHF_eventDetails = [];
          return;
        }
      } else {
        if (this.viewForumList?.scheduleDetails?.date != currentTime) {
          this.showError('Event create is only accessible on' + ' ' + this.viewForumList?.scheduleDetails?.date.split("-").reverse().join("-"));
          this.editHF_eventDetails = [];
          return;
        }
      }
    }
    this.createEditHFEventForms(this.editHF_eventDetails);
    if (this.editHF_eventDetails?.healthForumEventId) {
      this.visitorDetails.visitorInfo = [];
      this.hourList = [];
      this.minuteList = [];
      this.hourLists();
      this.minuteLists();
      this.visitorDetails.visitorInfo.push({
        visitorName: '',
        visitorDesignation: '',
        health_forum_event_visitor_map_id: 0,
        active_flag: 'A'
      });
      let HFPrerequisite = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.branchId || this.lowerRankbranchId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.loader = false;
      this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe(res => {
        this.HForumEventPrerequisite = res.responseObject;
        // this.loader = true;
        console.log(this.HForumEventPrerequisite, 'HForumEventPrerequisite');
        this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
        this.eventDiseaseList = this.eventDiseaseList?.map(({
          isChecked = false,
          ...rest
        }) => ({
          isChecked,
          ...rest
        }));
        // console.log(this.eventDiseaseList);
        this.eventVillList = res.responseObject.villageList;
        console.log(this.eventDiseaseList, 'eventDiseaseList');
        // console.log(this.eventVillList, 'eventVillList');
        this.eventVillListID = [];
        this.eventVillList.forEach(x => {
          this.eventVillListID.push(x.villageId);
          // console.log(this.eventVillListID, 'eventVillListID');
        });

        let famReq = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          villageId: this.eventVillListID,
          healthForumMasterId: this.viewForumList.healthForumMasterId
        };
        this.loader = false;
        this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe(res => {
          this.eventFamList = res.responseObject;
          this.setFamList = res.responseObject;
          // this.loader = true;
          // console.log(this.eventVillList, 'eventVillList22');
          console.log(this.eventFamList, 'eventFamList');
          this.eventFamList?.forEach(x => {
            x.familyList = x.familyList?.map(({
              setStatus = '',
              radioCheck = 'NA',
              villageId = '',
              adolGirl = [],
              health_forum_event_family_map_id = 0,
              ...rest
            }) => ({
              setStatus,
              radioCheck,
              villageId,
              adolGirl,
              health_forum_event_family_map_id,
              ...rest
            }));
            this.setData(x.familyList);
          });
          this.eventFamList = [];
          this.eventVillList.forEach(item => {
            this.eventFamList.push(res.responseObject?.find(items => items.villageId == item.villageId)?.familyList ? res.responseObject?.find(items => items.villageId == item.villageId)?.familyList : []);
          });
          // console.log(this.eventFamList);
          this.eventFamList.forEach(item => {
            item.forEach(items => {
              items.adolescentGilrChildren = items.adolescentGilrChildren?.map(({
                isChecked = false,
                health_forum_event_child_map_id = 0,
                ...rest
              }) => ({
                isChecked,
                health_forum_event_child_map_id,
                ...rest
              }));
              // console.log(items.adolescentGilrChildren);
            });
          });
        });
      });

      setTimeout(() => {
        this.createEditHFEventForms(this.editHF_eventDetails);
        this.loader = true;
        this.modalContent = '';
        this.editHFEventModal = this.modalService.open(createEditHFEvent, {
          windowClass: 'createEditHFEvent'
        });
      }, 2000);
    }
    if (!this.editHF_eventDetails?.healthForumEventId) {
      if (this.viewForumList.rescheduleDetails) {
        if (this.viewForumList.rescheduleDetails.rescheduleApprovalStatus != 'A') {
          this.showError('Health Forum is not approved');
          return;
        }
      } else {
        if (this.viewForumList.approvalStatus != 'A') {
          this.showError('Health Forum is not approved');
          return;
        }
      }
      this.visitorDetails.visitorInfo = [];
      this.hourList = [];
      this.minuteList = [];
      this.hourLists();
      this.minuteLists();
      this.visitorDetails.visitorInfo.push({
        visitorName: '',
        visitorDesignation: '',
        health_forum_event_visitor_map_id: 0,
        active_flag: 'A'
      });
      let HFPrerequisite = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        branchId: this.branchId || this.lowerRankbranchId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.loader = false;
      this.healthForumService.HForumEventPrerequisite(HFPrerequisite).subscribe(res => {
        this.HForumEventPrerequisite = res.responseObject;
        this.loader = true;
        console.log(this.HForumEventPrerequisite, 'HForumEventPrerequisite');
        this.eventDiseaseList = res.responseObject.seasonalDiseaseList;
        this.eventDiseaseList = this.eventDiseaseList?.map(({
          isChecked = false,
          ...rest
        }) => ({
          isChecked,
          ...rest
        }));
        // console.log(this.eventDiseaseList);
        this.eventVillList = res.responseObject.villageList;
        console.log(this.eventDiseaseList, 'eventDiseaseList');
        // console.log(this.eventVillList, 'eventVillList');
        this.eventVillListID = [];
        this.eventVillList.forEach(x => {
          this.eventVillListID.push(x.villageId);
          // console.log(this.eventVillListID, 'eventVillListID');
        });

        let famReq = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          villageId: this.eventVillListID,
          healthForumMasterId: this.viewForumList.healthForumMasterId
        };
        this.loader = false;
        this.healthForumService.getListOfFamsOfAVillForHFEvent(famReq).subscribe(res => {
          this.eventFamList = res.responseObject;
          this.setFamList = res.responseObject;
          this.loader = true;
          // console.log(this.eventVillList, 'eventVillList22');
          console.log(this.eventFamList, 'eventFamList');
          this.eventFamList?.forEach(x => {
            // console.log(x);
            x.familyList = x.familyList?.map(({
              setStatus = '',
              radioCheck = 'NA',
              villageId = '',
              adolGirl = [],
              health_forum_event_family_map_id = 0,
              ...rest
            }) => ({
              setStatus,
              radioCheck,
              villageId,
              adolGirl,
              health_forum_event_family_map_id,
              ...rest
            }));
            this.setData(x.familyList);
          });
          this.eventFamList = [];
          this.eventVillList.forEach(item => {
            this.eventFamList.push(res.responseObject?.find(items => items.villageId == item.villageId)?.familyList ? res.responseObject?.find(items => items.villageId == item.villageId)?.familyList : []);
          });
          // console.log(this.eventFamList);
          this.eventFamList.forEach(item => {
            item.forEach(items => {
              items.adolescentGilrChildren = items.adolescentGilrChildren?.map(({
                isChecked = false,
                health_forum_event_child_map_id = 0,
                ...rest
              }) => ({
                isChecked,
                health_forum_event_child_map_id,
                ...rest
              }));
              // console.log(items.adolescentGilrChildren);
            });
          });
        });
      });

      this.createEditHFEventForms(this.editHF_eventDetails);
      this.modalContent = '';
      this.editHFEventModal = this.modalService.open(createEditHFEvent, {
        windowClass: 'createEditHFEvent'
      });
    }
  }
  editHFEvents(createEditHFEvent, event) {
    this.editHF_eventDetails = event;
    this.createHFEvents(createEditHFEvent);
  }
  setData(familyList) {
    // console.log(familyList);
    familyList.forEach(x => {
      this.statusList = [];
      this.statusList.push({
        status: x.has2to5yearsoldChildren,
        set: "2-5 yr"
      }, {
        status: x.hasAdolescentGirlChildren,
        set: "14-18 yr"
      }, {
        status: x.hasChildPresentInPem,
        set: "PEM"
      }, {
        status: x.presentInLactatingMother,
        set: "LM"
      }, {
        status: x.presentInPregnantWoman,
        set: "PW"
      });
      // console.log(this.statusList);
      var mainString = "";
      this.statusList.forEach(x => {
        if (x.status == "Y") {
          mainString += x.set;
          mainString += ", ";
        }
      });
      if (mainString.length < 1) {
        // console.log(mainString);
        x.setStatus = "-";
      } else {
        x.setStatus = mainString.substring(0, mainString.length - 2);
        // console.log(x.setStatus);
      }
    });
  }

  saveFamRecordModalDismiss() {
    this.saveFamRecordModal.close();
  }
  addMoreVisitor() {
    this.visitorDetails.visitorInfo.push({
      visitorName: '',
      visitorDesignation: '',
      health_forum_event_visitor_map_id: 0,
      active_flag: 'A'
    });
  }
  removeNewVisitor(i) {
    if (this.moreEventDetails) {
      if (this.moreEventDetails.visitorDetailsList.length != 0) {
        if (this.visitorDetails.visitorInfo[i].health_forum_event_visitor_map_id != 0) {
          this.visitorDetails.visitorInfo[i].active_flag = "D";
        } else {
          this.visitorDetails.visitorInfo.splice(i, 1);
        }
      } else {
        this.visitorDetails.visitorInfo.splice(i, 1);
      }
    } else {
      this.visitorDetails.visitorInfo.splice(i, 1);
    }
    console.log(this.visitorDetails.visitorInfo);
  }
  editHFEventModalDismiss() {
    this.familyHeadPresentLenChk = [];
    var ID = this.editHF_eventDetails?.healthForumEventId;
    if (ID) {
      this.editHF_eventDetails = '';
      ID = 0;
      this.editHFEventModal.close();
      this.visitorDetails.visitorInfo = [];
      this.editStartHour = '';
      this.editStartMin = '';
      this.editEndHour = '';
      this.editEndMin = '';
      this.moreEventDetails = '';
    } else {
      this.editHFEventModal.close();
      this.visitorDetails.visitorInfo = [];
    }
  }
  createEditHFEventForms(editHF_eventDetails) {
    if (this.editHF_eventDetails?.healthForumEventId) {
      let moreEventDetailsobj = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumEventId: this.editHF_eventDetails.healthForumEventId,
        healthForumMasterId: this.viewForumList.healthForumMasterId
      };
      this.healthForumService.viewHealthForumsOfAEvent(moreEventDetailsobj).subscribe(res => {
        this.moreEventDetails = res.responseObject;
        console.log(this.moreEventDetails, 'this.moreEventDetails');
        this.setmoreEventDetails(this.moreEventDetails, editHF_eventDetails);
      });
    } else {
      this.createEditHFEventForm = this.fb.group({
        startHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        startMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        startMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        endMeridiem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        staffPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        ssPresent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        eventConduction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        lastMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        thisMonTopic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        seasonalDiscussion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
      });
      this.createEditHFEventForm.markAllAsTouched();
    }
  }
  unselectFamily(fami, int) {
    fami.radioCheck = 'NA';
    fami.adolescentGilrChildren.forEach(z => {
      console.log(z);
      z.active_flag = "D";
      z.isChecked = false;
    });
    fami.adolGirl = [];
    fami.adolescentGilrChildren.filter(x => x.active_flag == "D").forEach(z => {
      var t = [];
      z.age.split(/[year,month,days]+/).forEach(x => {
        t.push(x);
        this.year = t[0];
        this.month = t[1];
        this.day = t[2];
      });
      console.log(this.year, this.month, this.day);
      fami.adolGirl.push({
        health_forum_event_child_map_id: z.health_forum_event_child_map_id,
        childId: z.childDetailId,
        active_flag: 'D',
        latestMuac: z.latestMuac,
        ageYears: this.year.trim(),
        ageMonths: this.month.trim(),
        ageDays: this.day.trim(),
        latestMuacRegisterId: z.latestMuacRegisterId,
        present_status: z.presentInPem,
        isChecked: z.isChecked
      });
    });
    console.log(fami);
  }
  setmoreEventDetails(data, editHF_eventDetails) {
    console.log(data, 'moreEventDetails');
    console.log(editHF_eventDetails, 'editHF_eventDetails');
    console.log(data?.villageWiseFamilyList, 'data.villageWiseFamilyList');
    setTimeout(() => {
      console.log(this.eventFamList, 'eventFamList2222');
      this.familyHeadPresentLenChk = [];
      data?.villageWiseFamilyList.forEach(x => {
        x.familyList.forEach(t => {
          this.eventFamList.forEach(y => {
            y.forEach(e => {
              e.villageId = x.villageId;
              if (e.familyDetailId == t.familyId) {
                e.health_forum_event_family_map_id = t.health_forum_event_family_map_id;
              }
            });
            y.filter(z => z.familyDetailId == t.familyId).forEach(m => {
              y.health_forum_event_family_map_id = x.health_forum_event_family_map_id;
              m.radioCheck = t.family_head_present;
              this.familyHeadPresentLenChk.push(m);
              console.log(this.familyHeadPresentLenChk, ' this.familyHeadPresentLenChk');
              t.childrenList.forEach(er => {
                m.adolescentGilrChildren.filter(v => v.childDetailId == er.childId).forEach(rr => {
                  rr.isChecked = true;
                  rr.age = er.ageYears + " year " + er.ageMonths + " month " + er.ageDays + " day ";
                  rr.health_forum_event_child_map_id = er.health_forum_event_child_map_id;
                });
              });
              setTimeout(() => {
                m.adolGirl = [];
                m.adolescentGilrChildren.filter(x => x.isChecked).forEach(z => {
                  var t = [];
                  z.age.split(/[year,month,days]+/).forEach(x => {
                    t.push(x);
                    this.year = t[0];
                    this.month = t[1];
                    this.day = t[2];
                  });
                  console.log(this.year, this.month, this.day);
                  m.adolGirl.push({
                    health_forum_event_child_map_id: z.health_forum_event_child_map_id,
                    childId: z.childDetailId,
                    active_flag: 'A',
                    latestMuac: z.latestMuac,
                    ageYears: this.year.trim(),
                    ageMonths: this.month.trim(),
                    ageDays: this.day.trim(),
                    latestMuacRegisterId: z.latestMuacRegisterId,
                    present_status: z.presentInPem,
                    isChecked: z.isChecked
                  });
                });
              }, 500);
            });
          });
        });
      });
    }, 1000);
    this.visitorDetails.visitorInfo = [];
    data?.visitorDetailsList.forEach(x => {
      this.visitorDetails.visitorInfo.push({
        visitorDesignation: x.visitorDesignation,
        visitorName: x.visitorName,
        health_forum_event_visitor_map_id: x.health_forum_event_visitor_map_id,
        active_flag: 'A'
      });
    });
    this.diseaseListID = [];
    data?.seasonalDiseaseDiscussedList.forEach(x => {
      this.eventDiseaseList.filter(v => v.diseaseId == x.diseaseId).forEach(z => {
        z.isChecked = true;
        this.diseaseListID.push({
          health_forum_event_season_diseases_map_id: x.health_forum_event_season_diseases_map_id,
          diseaseId: z.diseaseId,
          active_flag: 'A'
        });
        console.log(this.diseaseListID);
      });
    });
    console.log(this.eventDiseaseList, 'eventDiseaseList');
    this.editStartHour = this.editHF_eventDetails?.startHour;
    this.editStartHour = this.editStartHour.toString();
    this.editStartMin = this.editHF_eventDetails?.startMinute;
    this.editStartMin = this.editStartMin.toString();
    this.editEndHour = this.editHF_eventDetails?.endHour;
    this.editEndHour = this.editEndHour.toString();
    this.editEndMin = this.editHF_eventDetails?.endMinute;
    this.editEndMin = this.editEndMin.toString();
    if (this.editStartHour.length < 2) {
      this.editStartHour = '0' + this.editStartHour;
      // console.log(this.editStartHour, 'this.editStartHour');
    } else {
      this.editStartHour = this.editHF_eventDetails?.startHour;
    }
    if (this.editStartMin.length < 2) {
      this.editStartMin = '0' + this.editStartMin;
      // console.log(this.editStartMin, 'this.editStartMin');
    } else {
      this.editStartMin = this.editHF_eventDetails?.startMinute;
    }
    if (this.editEndHour.length < 2) {
      this.editEndHour = '0' + this.editEndHour;
      // console.log(this.editEndHour, 'this.editEndHour');
    } else {
      this.editEndHour = this.editHF_eventDetails?.endHour;
    }
    if (this.editEndMin.length < 2) {
      this.editEndMin = '0' + this.editEndMin;
      // console.log(this.editEndMin, 'this.editEndMin');
    } else {
      this.editEndMin = this.editHF_eventDetails?.endMinute;
    }
    console.log(data?.wasStaffPresent);
    console.log(data?.wasSsPresent);
    console.log(data?.conductedByStaffOrSS);
    this.createEditHFEventForm = this.fb.group({
      startHour: [this.editStartHour ? this.editStartHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      startMin: [this.editStartMin ? this.editStartMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      startMeridiem: [editHF_eventDetails.startAmOrPm ? editHF_eventDetails.startAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endHour: [this.editEndHour ? this.editEndHour : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endMin: [this.editEndMin ? this.editEndMin : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      endMeridiem: [editHF_eventDetails.endAmOrPm ? editHF_eventDetails.endAmOrPm : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      staffPresent: [data?.wasStaffPresent ? data?.wasStaffPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      ssPresent: [data?.wasSsPresent ? data?.wasSsPresent : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      eventConduction: [data?.conductedByStaffOrSS ? data?.conductedByStaffOrSS : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      lastMonTopic: [data?.recapLastMonthTopic ? data?.recapLastMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      thisMonTopic: [data?.discussionOnThisMonthTopic ? data?.discussionOnThisMonthTopic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      seasonalDiscussion: [data?.discussionOnAnySeasonalDisease ? data?.discussionOnAnySeasonalDisease : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
    this.createEditHFEventForm.markAllAsTouched();
  }
  selectMultipleDisease(e, disease) {
    this.diseaseListID = [];
    console.log(e.target.checked, disease);
    if (e.target.checked == true) {
      disease.isChecked = true;
    } else {
      disease.isChecked = false;
    }
    console.log(this.moreEventDetails);
    if (!this.moreEventDetails) {
      this.eventDiseaseList.forEach(x => {
        if (x.isChecked == true) {
          console.log(x.diseaseId);
          this.diseaseListID.push({
            health_forum_event_season_diseases_map_id: 0,
            diseaseId: x.diseaseId,
            active_flag: 'A'
          });
          console.log(this.diseaseListID);
        }
      });
    } else {
      this.eventDiseaseList.forEach(e => {
        if (this.moreEventDetails.seasonalDiseaseDiscussedList.length != 0) {
          if (this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).length == 0) {
            if (e.isChecked == true) {
              console.log(e.diseaseId);
              this.diseaseListID.push({
                health_forum_event_season_diseases_map_id: 0,
                diseaseId: e.diseaseId,
                active_flag: 'A'
              });
              console.log(this.diseaseListID);
            }
          } else {
            this.moreEventDetails.seasonalDiseaseDiscussedList.filter(v => v.diseaseId == e.diseaseId).forEach(r => {
              if (e.isChecked == true) {
                this.diseaseListID.push({
                  health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id,
                  diseaseId: r.diseaseId,
                  active_flag: 'A'
                });
              } else {
                this.diseaseListID.push({
                  health_forum_event_season_diseases_map_id: r.health_forum_event_season_diseases_map_id,
                  diseaseId: r.diseaseId,
                  active_flag: 'D'
                });
              }
            });
          }
        } else {
          if (e.isChecked == true) {
            console.log(e.diseaseId);
            this.diseaseListID.push({
              health_forum_event_season_diseases_map_id: 0,
              diseaseId: e.diseaseId,
              active_flag: 'A'
            });
            console.log(this.diseaseListID);
          }
        }
      });
    }
    console.log(this.eventDiseaseList);
    console.log(this.diseaseListID);
  }
  selectAdolescent(e, adolescent, fami) {
    console.log(fami);
    if (e.target.checked == true) {
      adolescent.isChecked = true;
      console.log(adolescent);
    } else {
      adolescent.isChecked = false;
      console.log(adolescent);
    }
    console.log(this.eventFamList);
    fami.adolGirl = [];
    fami.adolescentGilrChildren.forEach(z => {
      if (z.health_forum_event_child_map_id != 0) {
        if (z.isChecked) {
          var t = [];
          z.age.split(/[year,month,days]+/).forEach(x => {
            t.push(x);
            this.year = t[0];
            this.month = t[1];
            this.day = t[2];
          });
          console.log(this.year, this.month, this.day);
          fami.adolGirl.push({
            health_forum_event_child_map_id: z.health_forum_event_child_map_id,
            childId: z.childDetailId,
            active_flag: 'A',
            latestMuac: z.latestMuac,
            ageYears: this.year.trim(),
            ageMonths: this.month.trim(),
            ageDays: this.day.trim(),
            latestMuacRegisterId: z.latestMuacRegisterId,
            present_status: z.presentInPem,
            isChecked: z.isChecked
          });
        } else {
          var t = [];
          z.age.split(/[year,month,days]+/).forEach(x => {
            t.push(x);
            this.year = t[0];
            this.month = t[1];
            this.day = t[2];
          });
          console.log(this.year, this.month, this.day);
          fami.adolGirl.push({
            health_forum_event_child_map_id: z.health_forum_event_child_map_id,
            childId: z.childDetailId,
            active_flag: 'D',
            latestMuac: z.latestMuac,
            ageYears: this.year.trim(),
            ageMonths: this.month.trim(),
            ageDays: this.day.trim(),
            latestMuacRegisterId: z.latestMuacRegisterId,
            present_status: z.presentInPem,
            isChecked: z.isChecked
          });
        }
      } else {
        if (z.isChecked) {
          var t = [];
          z.age.split(/[year,month,days]+/).forEach(x => {
            t.push(x);
            this.year = t[0];
            this.month = t[1];
            this.day = t[2];
          });
          console.log(this.year, this.month, this.day);
          fami.adolGirl.push({
            health_forum_event_child_map_id: z.health_forum_event_child_map_id,
            childId: z.childDetailId,
            active_flag: 'A',
            latestMuac: z.latestMuac,
            ageYears: this.year.trim(),
            ageMonths: this.month.trim(),
            ageDays: this.day.trim(),
            latestMuacRegisterId: z.latestMuacRegisterId,
            present_status: z.presentInPem,
            isChecked: z.isChecked
          });
        }
      }
    });
    console.log(fami);
  }
  changefamilyHeadPresent(e, family, vill) {
    console.log(family);
    family.radioCheck = e.target.value;
    family.villageId = vill.villageId;
    this.familyHeadPresentLenChk = [];
    this.eventFamList.forEach(x => {
      x.forEach(y => {
        if (y.radioCheck != 'NA') this.familyHeadPresentLenChk.push(y);
        console.log(this.familyHeadPresentLenChk);
      });
    });
  }
  viewFilterByFamilyList(e) {
    console.log(e);
    if (e == 'selectedFam') {
      var notSel = [];
      this.setFamList.forEach(x => {
        console.log(x);
        notSel.push(x.familyList.filter(x => x.radioCheck != 'NA'));
      });
      this.eventFamList = notSel;
      console.log(this.eventFamList);
    } else if (e == 'unselectedFam') {
      var notSel = [];
      this.setFamList.forEach(x => {
        console.log(x);
        notSel.push(x.familyList.filter(x => x.radioCheck == 'NA'));
      });
      this.eventFamList = notSel;
      console.log(this.eventFamList);
    } else {
      var notSel = [];
      this.setFamList.forEach(x => {
        console.log(x);
        notSel.push(x.familyList);
      });
      this.eventFamList = notSel;
      console.log(this.eventFamList);
    }
  }
  staffPresentorNot(e) {
    this.createEditHFEventForm.controls.eventConduction.setValue('');
    if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.showError('Staff or SS both should not be NO');
      this.createEditHFEventForm.controls.eventConduction.setValue('');
      this.createEditHFEventForm.controls.staffPresent.setValue('');
      this.createEditHFEventForm.controls.ssPresent.setValue('');
      return;
    }
  }
  ssPresentorNot(e) {
    this.createEditHFEventForm.controls.eventConduction.setValue('');
    if (this.createEditHFEventForm.value.staffPresent == 'N' && this.createEditHFEventForm.value.ssPresent == 'N') {
      this.showError('Staff or SS both should not be NO');
      this.createEditHFEventForm.controls.eventConduction.setValue('');
      this.createEditHFEventForm.controls.staffPresent.setValue('');
      this.createEditHFEventForm.controls.ssPresent.setValue('');
      return;
    }
  }
  saveEditHFEvent() {
    this.familyListData = [];
    console.log(this.eventFamList);
    var arr = [];
    var i = 0;
    this.eventFamList.forEach(item => {
      item.forEach(x => {
        arr.push(x);
        if (x.radioCheck != 'NA') {
          if (x.adolescentGilrChildren.length > 0) {
            if (x.adolGirl.filter(e => e.isChecked == true).length == 0) {
              if (x.radioCheck == "N") {
                i++;
                if (i == 1) {
                  this.showError('Minimum one adolescent selection is required as family head present is NO');
                  return;
                } else {
                  return;
                }
              } else {
                this.familyListData.push({
                  health_forum_event_family_map_id: x.health_forum_event_family_map_id,
                  familyId: x.familyDetailId,
                  villageId: x.villageId,
                  presentInPregnantWoman: x.presentInPregnantWoman,
                  presentInLactatingMother: x.presentInLactatingMother,
                  hasChildPresentInPem: x.hasChildPresentInPem,
                  has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                  hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                  family_head_present: x.radioCheck,
                  adolescent_girl_attended: x.adolGirl.filter(x => x.isChecked == true).length > 0 ? 'Y' : 'N',
                  active_flag: 'A',
                  childrenList: x.adolGirl
                });
              }
            } else {
              this.familyListData.push({
                health_forum_event_family_map_id: x.health_forum_event_family_map_id,
                familyId: x.familyDetailId,
                villageId: x.villageId,
                presentInPregnantWoman: x.presentInPregnantWoman,
                presentInLactatingMother: x.presentInLactatingMother,
                hasChildPresentInPem: x.hasChildPresentInPem,
                has2to5yearsOldChildren: x.has2to5yearsoldChildren,
                hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
                family_head_present: x.radioCheck,
                adolescent_girl_attended: x.adolGirl.filter(x => x.isChecked == true).length > 0 ? 'Y' : 'N',
                active_flag: 'A',
                childrenList: x.adolGirl
              });
            }
          } else {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id,
              familyId: x.familyDetailId,
              villageId: x.villageId,
              presentInPregnantWoman: x.presentInPregnantWoman,
              presentInLactatingMother: x.presentInLactatingMother,
              hasChildPresentInPem: x.hasChildPresentInPem,
              has2to5yearsOldChildren: x.has2to5yearsoldChildren,
              hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
              family_head_present: x.radioCheck,
              adolescent_girl_attended: x.adolGirl.filter(x => x.isChecked == true).length > 0 ? 'Y' : 'N',
              active_flag: 'A',
              childrenList: x.adolGirl
            });
          }
        } else {
          if (x.health_forum_event_family_map_id != 0) {
            this.familyListData.push({
              health_forum_event_family_map_id: x.health_forum_event_family_map_id,
              familyId: x.familyDetailId,
              villageId: x.villageId,
              presentInPregnantWoman: x.presentInPregnantWoman,
              presentInLactatingMother: x.presentInLactatingMother,
              hasChildPresentInPem: x.hasChildPresentInPem,
              has2to5yearsOldChildren: x.has2to5yearsoldChildren,
              hasAdolescentGirlChildren: x.hasAdolescentGirlChildren,
              family_head_present: x.radioCheck,
              adolescent_girl_attended: x.adolGirl.filter(x => x.isChecked == true).length > 0 ? 'Y' : 'N',
              active_flag: x.health_forum_event_family_map_id == 0 ? 'A' : 'D',
              childrenList: x.adolGirl
            });
          }
        }
      });
    });
    setTimeout(() => {
      var ch = [];
      var tt = [];
      arr.filter(er => er.radioCheck != "NA").forEach(x => {
        if (x.adolescentGilrChildren.length != 0) {
          if (x.radioCheck == "N") {
            if (x.adolGirl.filter(e => e.isChecked == true).length == 0) {
              ch.push({
                isChecked: false
              });
            } else {
              tt.push(x.adolGirl);
              ch.push({
                isChecked: true
              });
            }
          } else {
            tt.push(x.adolGirl);
            ch.push({
              isChecked: true
            });
          }
        }
      });
      if (ch.length == tt.length) {
        this.saveEvent();
      }
    }, 200);
  }
  saveEvent() {
    var tt = [];
    this.visitorDetails.visitorInfo.forEach(x => {
      if (x.visitorName == "") {
        tt.push();
      } else {
        tt.push(x);
      }
    });
    if (this.moreEventDetails?.seasonalDiseaseDiscussedList) {
      if (this.createEditHFEventForm.value.seasonalDiscussion == 'N') {
        this.diseaseListID.forEach(f => {
          this.moreEventDetails?.seasonalDiseaseDiscussedList.filter(x => x.diseaseId == f.diseaseId).forEach(z => {
            f.active_flag = 'D';
          });
        });
      }
    }
    console.log(tt);
    let savEditReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumEventId: this.moreEventDetails?.healthForumEventId ? this.moreEventDetails?.healthForumEventId : 0,
      active_flag: 'A',
      healthForumMasterId: this.viewForumList.healthForumMasterId,
      startTimeHour: this.createEditHFEventForm.value.startHour,
      startTimeMinute: this.createEditHFEventForm.value.startMin,
      startTimeAmORPm: this.createEditHFEventForm.value.startMeridiem,
      endTimeHour: this.createEditHFEventForm.value.endHour,
      endTimeMinute: this.createEditHFEventForm.value.endMin,
      endTimeAmOrPm: this.createEditHFEventForm.value.endMeridiem,
      wasStaffPresent: this.createEditHFEventForm.value.staffPresent,
      staffId: this.HForumEventPrerequisite.staffId,
      wasSsPresent: this.createEditHFEventForm.value.ssPresent,
      ssId: this.HForumEventPrerequisite.ssId,
      conductedByStaffOrSS: this.createEditHFEventForm.value.eventConduction,
      recapLastMonthTopic: this.createEditHFEventForm.value.lastMonTopic,
      discussionOnThisMonthTopic: this.createEditHFEventForm.value.thisMonTopic,
      discussionOnAnySeasonalDisease: this.createEditHFEventForm.value.seasonalDiscussion,
      seasonalDiseaseDiscussedList: this.diseaseListID,
      visitorDetailsList: tt.length == 0 ? [] : this.visitorDetails.visitorInfo,
      familyList: this.familyListData
    };
    if (savEditReq.familyList.filter(x => x.active_flag == 'A').length == 0) {
      this.showError('Please select at least one family');
      return;
    }
    console.log(savEditReq, 'savEditReq');
    this.healthForumService.saveOrUpdateHealthForumEvent(savEditReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.editHFEventModalDismiss();
        this.viewHFEventModalDismiss();
        this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  saveEditHFEventDisabled() {
    let flag = true;
    if (this.familyHeadPresentLenChk.length < 1) {
      flag = false;
    }
    if (!this.createEditHFEventForm.value.startHour) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.startMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.startMeridiem) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endHour) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMin) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.endMeridiem) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.eventConduction) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.lastMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.thisMonTopic) {
      flag = false;
    } else if (!this.createEditHFEventForm.value.seasonalDiscussion) {
      flag = false;
    } else if (this.createEditHFEventForm.value.seasonalDiscussion == 'Y') {
      if (this.diseaseListID.filter(x => x.active_flag == 'A').length < 1) {
        flag = false;
      }
    }
    if (!this.createEditHFEventForm.value.staffPresent) {
      console.log(this.createEditHFEventForm.value.staffPresent);
      flag = false;
    } else if (!this.createEditHFEventForm.value.ssPresent) {
      flag = false;
    }
    this.visitorDetails.visitorInfo.forEach(y => {
      if (y.visitorName) {
        if (!y.visitorDesignation) {
          flag = false;
        }
      } else if (y.visitorDesignation) {
        if (!y.visitorName) {
          flag = false;
        }
      }
    });
    return flag;
  }
  get e() {
    return this.createEditHFEventForm.controls;
  }
  changeseasonalDiscussion() {
    this.diseaseListID = [];
    var arr = [];
    if (this.editHF_eventDetails?.healthForumEventId) {
      console.log('id');
      this.moreEventDetails.seasonalDiseaseDiscussedList.forEach(a => {
        this.eventDiseaseList.filter(y => y.diseaseId == a.diseaseId).forEach(z => {
          arr.push({
            health_forum_event_season_diseases_map_id: a.health_forum_event_season_diseases_map_id,
            diseaseId: z.diseaseId,
            active_flag: 'A'
          });
          console.log(z);
        });
      });
    }
    console.log(this.eventDiseaseList);
    this.eventDiseaseList.forEach(x => {
      if (x.isChecked == true) {
        console.log(x.isChecked = false);
      }
    });
    console.log(this.eventDiseaseList);
    setTimeout(() => {
      console.log(arr);
      this.diseaseListID = arr;
      console.log(this.diseaseListID);
    }, 500);
  }
  tabChanged(tabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  deleteHFEvent(event, i) {
    console.log(event);
    var currentTime = new Date().toJSON().slice(0, 10);
    if (event?.createdOn != currentTime) {
      this.showError('Event delete is only accessible on' + ' ' + event?.createdOn.split("-").reverse().join("-"));
      return;
    } else {
      this.confirmationDialogService.confirm('', 'Are you sure you want to delete this event ?').then(() => this.delete_event(event, i)).catch(() => '');
    }
  }
  delete_event(event, i) {
    let delReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      healthForumEventId: event.healthForumEventId,
      active_flag: 'D',
      healthForumMasterId: this.viewForumList.healthForumMasterId,
      startTimeHour: event.startHour,
      startTimeMinute: event.startMinute,
      startTimeAmORPm: event.startAmOrPm,
      endTimeHour: event.endHour,
      endTimeMinute: event.endMinute,
      endTimeAmOrPm: event.endAmOrPm
    };
    console.log(delReq, 'delReq');
    this.healthForumService.saveOrUpdateHealthForumEvent(delReq).subscribe(res => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.viewEventList.splice(i, 1);
        // this.editHFEventModalDismiss();
        // this.changeBranch(this.branchId || this.lowerRankbranchId);
      } else {
        this.showError(res.message);
      }
    });
  }
  rescheduleHealthForum(rescheduleHF, health) {
    this.rescheduleData = health;
    console.log(this.rescheduleData);
    var currentTime = new Date().toJSON().slice(0, 10);
    if (this.rescheduleData?.rescheduleDetails?.rescheduleToDate) {
      if (this.rescheduleData?.rescheduleDetails?.rescheduleToDate >= currentTime) {
        this.showError('Reschedule of a HF is only accessible for past date');
        return;
      } else if (this.rescheduleData?.eventList.length < 2) {
        this.setDate = moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD");
        this.modalContent = '';
        this.rescheduleHFModal = this.modalService.open(rescheduleHF, {
          windowClass: 'rescheduleHF'
        });
        this.rescheduleHFForms();
      } else {
        this.showError('HF cannot be rescheduled');
        return;
      }
    } else {
      if (this.rescheduleData?.scheduleDetails?.date >= currentTime) {
        this.showError('Reschedule of a HF is only accessible for past date');
        return;
      } else if (this.rescheduleData.eventList.length < 2) {
        this.setDate = moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYY-MM-DD");
        this.modalContent = '';
        this.rescheduleHFModal = this.modalService.open(rescheduleHF, {
          windowClass: 'rescheduleHF'
        });
        this.rescheduleHFForms();
      } else {
        this.showError('HF cannot be rescheduled');
        return;
      }
    }
  }
  rescheduleHFModalDismiss() {
    this.rescheduleHFModal.close();
  }
  rescheduleHFForms() {
    this.rescheduleHFForm = this.fb.group({
      date: [this.rescheduleData?.rescheduleDetails?.rescheduleToDate ? this.rescheduleData?.rescheduleDetails?.rescheduleToDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      comment: [this.rescheduleData?.rescheduleDetails?.comment ? this.rescheduleData?.rescheduleDetails?.comment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]
    });
    if (this.rescheduleData?.rescheduleDetails?.rescheduleToDate) {
      this.rescheduleHFForm.controls['comment'].disable();
    }
  }
  get r() {
    return this.rescheduleHFForm.controls;
  }
  rescheduleSave() {
    let flag = true;
    if (this.rescheduleData?.rescheduleDetails?.rescheduleToDate) {
      if (!this.rescheduleHFForm.value.date) {
        flag = false;
      }
      return flag;
    } else {
      if (!this.rescheduleHFForm.value.date) {
        flag = false;
      } else if (!this.rescheduleHFForm.value.comment) {
        flag = false;
      }
      return flag;
    }
  }
  saveRescheduled() {
    console.log(this.rescheduleData);
    console.log(this.rescheduleData.scheduleDetails.time);
    var text = this.rescheduleData.scheduleDetails.time;
    var tt = [];
    text.trim().replace(" ", ":").trim().split(":").forEach(e => {
      if (e.length < 2) {
        tt.push("0" + e);
      } else {
        tt.push(e);
      }
      console.log(tt);
    });
    if (!this.rescheduleData.rescheduleDetails) {
      let reschedule_req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumMasterId: this.rescheduleData.healthForumMasterId,
        date: this.rescheduleHFForm.value.date,
        scheduleStartHour: tt[0],
        scheduleStartMinute: tt[1],
        amOrPm: tt[2],
        comment: this.rescheduleHFForm.value.comment
      };
      this.healthForumService.rescheduleHealthForum(reschedule_req).subscribe(res => {
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.rescheduleHFModal.close();
          this.changeBranch(this.branchId || this.lowerRankbranchId);
        } else {
          this.showError(res.message);
        }
      });
    } else {
      let edit_reschedule_req = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        healthForumMasterId: this.rescheduleData.healthForumMasterId,
        rescheduleMasterId: this.rescheduleData.rescheduleDetails.rescheduleMasterId,
        againRescheduledToDate: this.rescheduleHFForm.value.date
      };
      this.healthForumService.editARescheduledHealthForum(edit_reschedule_req).subscribe(res => {
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.rescheduleHFModal.close();
          this.changeBranch(this.branchId || this.lowerRankbranchId);
        } else {
          this.showError(res.message);
        }
      });
    }
  }
}
HealthForumComponent.ɵfac = function HealthForumComponent_Factory(t) {
  return new (t || HealthForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_health_forum_service__WEBPACK_IMPORTED_MODULE_4__.HealthForumService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_6__.ConfirmationDialogService));
};
HealthForumComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HealthForumComponent,
  selectors: [["app-health-forum"]],
  decls: 82,
  vars: 21,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "search by staff or ss name ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "12%"], [2, "width", "19%"], [2, "width", "22%"], [2, "width", "7%"], ["style", "width: 7%;", 4, "ngIf"], [2, "width", "9%"], [2, "width", "6%"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], ["HFeventDetails", ""], ["ViewFamilyDetails", ""], ["createHF", ""], ["createEditHFEvent", ""], ["rescheduleHF", ""], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Health Forum", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], [1, "form-group", "col-md"], ["for", "region"], [1, "text-danger"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "popover__wrapper"], [1, "popover__title", 2, "color", "#0d6efd"], [1, "popover__content"], [2, "word-wrap", "break-word", "text-align", "left"], [1, "btn-link", 2, "width", "7%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", " btn-link", "style", "width: 7%; color:#0d6efd; text-decoration: none; cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "fa fa-circle fa-lg", "title", "HF Approved", "style", "color: #24d524;", 4, "ngIf"], ["class", "fa fa-circle fa-lg", "title", "HF Unapproved", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-check-circle", "title", "Approve Health Forum", 3, "click", 4, "ngIf"], ["class", "fas fa-calendar", "title", "Reschedule Health Forum", 3, "click", 4, "ngIf"], ["title", "HF Approved", 1, "fa", "fa-circle", "fa-lg", 2, "color", "#24d524"], ["title", "HF Unapproved", 1, "fa", "fa-circle", "fa-lg"], ["title", "Edit Health Forum", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum", 1, "fas", "fa-trash", 3, "click"], ["title", "Approve Health Forum", 1, "fas", "fa-check-circle", 3, "click"], ["title", "Reschedule Health Forum", 1, "fas", "fa-calendar", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "col-md"], ["id", "modal-basic-title", 1, "modal-title"], ["class", "fas fa-plus-circle", "style", "cursor: pointer; color: #499; font-size: 25px; margin-top: -39px;margin-left: -239px;", "title", "Create Health Forum Event", 3, "click", 4, "ngIf"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-25px", 3, "click"], [1, "modal-body"], [2, "width", "3%"], [2, "width", "15%"], [2, "width", "8%"], [2, "text-align", "center"], ["title", "Create Health Forum Event", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "25px", "margin-top", "-39px", "margin-left", "-239px", 3, "click"], [1, "btn-link", 2, "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"], ["class", "popover__content", 4, "ngIf"], ["class", "fas fa-edit", "title", "Edit Health Forum Event", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Health Forum Event", 3, "click", 4, "ngIf"], ["style", "word-wrap: break-word; text-align: left;", 4, "ngFor", "ngForOf"], ["title", "Edit Health Forum Event", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Health Forum Event", 1, "fas", "fa-trash", 3, "click"], [2, "width", "13%"], [2, "width", "5%"], ["class", "popover__title", "style", "color:#0d6efd;", 4, "ngIf"], ["class", "popover__title", "style", "color:#8b959f;", 4, "ngIf"], [1, "popover__title", 2, "color", "#8b959f"], [1, "modal-contents"], ["class", "dialog-title", 4, "ngIf"], [1, "modal-body", 2, "height", "40vh", "overflow-y", "auto"], ["for", "date"], ["type", "date", "formControlName", "date", 1, "form-control", 3, "min", "ngClass", "keydown", "change"], ["for", "staffName"], ["formControlName", "staffName", "id", "staffName", 1, "form-select", 3, "ngClass", "change"], ["for", "ssName"], ["formControlName", "ssName", "id", "ssName", 1, "form-select", 3, "change"], ["for", "area"], ["placeholder", "-- Select Area(s) --", "formControlName", "areaList", 1, "form-control", "dropdown-multiselect__caret", 3, "settings", "data", "ngClass", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], [1, "scheduler-border", 2, "height", "190px"], [1, "scheduler-border"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "width", "25%"], ["id", "tbodyDisease", 2, "text-align", "center"], ["for", "topic"], ["formControlName", "topic", "id", "topic", 1, "form-select", 3, "ngClass"], ["for", "event"], ["formControlName", "event", "id", "event", 1, "form-select", 3, "ngClass"], ["value", "1"], ["value", "2"], ["for", "startTime"], ["id", "inputGroup-sizing-sm", "formControlName", "hour", "id", "hour", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "minute", "id", "minute", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["id", "inputGroup-sizing-sm", "formControlName", "meridiem", "id", "meridiem", 1, "form-select", 2, "width", "9rem", 3, "ngClass"], ["value", "AM"], ["value", "PM"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "dialog-title"], [1, "modal-conten"], [1, "modal-body", 2, "height", "62vh", "overflow-y", "auto"], [1, "input-group", "input-group-sm", "mb-3"], ["for", ""], ["id", "inputGroup-sizing-sm", "formControlName", "startHour", "id", "startHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMin", "id", "startMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "startMeridiem", "id", "startMeridiem", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endHour", "id", "endHour", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMin", "id", "endMin", 1, "input-group-text", 2, "width", "24%"], ["id", "inputGroup-sizing-sm", "formControlName", "endMeridiem", "id", "endMeridiem", 1, "input-group-text", 2, "width", "24%"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "150px", "margin-left", "15px"], [1, "card-body"], [1, "form-group", "col-md", 2, "margin-top", "15px"], ["for", "staffPresent"], [1, "form-check-inline"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label"], ["type", "radio", "id", "no", "value", "N", "formControlName", "staffPresent", 1, "form-check-input", 3, "change"], ["for", "ssPresent"], ["class", "radio", "disabled", "", 4, "ngIf"], ["class", "radio", 4, "ngIf"], [1, "radio"], ["type", "radio", "value", "N", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["for", "eventConduction"], ["formControlName", "eventConduction", "id", "eventConduction", 1, "form-select", 3, "ngClass"], ["value", "STAFF", 4, "ngIf"], ["value", "SS", 4, "ngIf"], [1, "card", 2, "width", "690px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "240px", "margin-left", "-75px"], [1, "card-body", 2, "height", "40vh"], [1, "card-title"], ["id", "circle", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "float", "right", "margin-top", "-45px", 3, "click"], ["id", "table_wrapper", 1, "table"], [2, "width", "10rem"], [2, "width", "3rem"], ["id", "tbody", 2, "text-align", "center"], [1, "form-group", "col-md-6"], [1, "card", 2, "width", "540px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-left", "15px"], [1, "form-group", "col-md-8"], ["for", "lastMonTopic"], [1, "form-group", "col-md-4"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "lastMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "lastMonTopic", 1, "form-check-input"], ["for", "thisMonTopic"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "thisMonTopic", 1, "form-check-input"], ["type", "radio", "id", "no", "value", "N", "formControlName", "thisMonTopic", 1, "form-check-input"], ["for", "seasonalDiscussion"], ["type", "radio", "id", "yes", "value", "Y", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], ["type", "radio", "id", "no", "value", "N", "formControlName", "seasonalDiscussion", 1, "form-check-input", 3, "change"], [1, "col-md-6"], [1, "form-select", 3, "change"], ["value", "selectedFam"], ["value", "unselectedFam"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["disabled", "", 1, "radio"], ["type", "radio", "value", "Y", "disabled", "", 1, "form-check-input"], ["type", "radio", "value", "Y", "formControlName", "ssPresent", 1, "form-check-input", 3, "change"], ["value", "STAFF"], ["value", "SS"], ["type", "text", "maxlength", "20", "placeholder", "e.g. xyz", 1, "form-control", 2, "width", "16rem", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "text", "maxlength", "20", "placeholder", "e.g. Engineer", 1, "form-control", 2, "width", "16rem", "margin-left", "75px", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-remove", "style", "width: 2rem;", 4, "ngIf"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem", 3, "click"], [1, "fas", "fa-minus-circle", 2, "color", "red !important", "font-size", "20px", "margin-left", "65px"], ["type", "button", 1, "btn", "btn-remove", 2, "width", "2rem"], [1, "fas", 2, "color", "#f57676 !important", "font-size", "20px", "margin-left", "45px"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], ["mat-tab-label", "", "style", "margin-left: 5px;"], ["matTabContent", ""], ["class", "card", "style", "width: 670px;background: whitesmoke; border: none;border-radius: 14px;height: auto; margin-bottom:10px", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "670px", "background", "whitesmoke", "border", "none", "border-radius", "14px", "height", "auto", "margin-bottom", "10px"], [1, "col-md-5"], [1, "col-md-1"], ["title", "Unselect Family Head Present", 1, "fas", "fa-trash", 3, "click"], [1, "col-md-4"], [1, "col-md-3"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "yes", "value", "Y", 3, "name", "change", 4, "ngIf"], ["class", "form-check-inline", 4, "ngIf"], ["type", "radio", "id", "yes", "value", "Y", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "yes", "value", "Y", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "disabled", "", 1, "form-check-input", 3, "name", "change"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 3, "name", "change", 4, "ngIf"], ["class", "form-check-input", "type", "radio", "id", "famHeadNo", "value", "N", 3, "name", "change", 4, "ngIf"], ["type", "radio", "id", "famHeadNo", "value", "N", "checked", "", 1, "form-check-input", 3, "name", "change"], ["type", "radio", "id", "famHeadNo", "value", "N", 1, "form-check-input", 3, "name", "change"], [2, "width", "2%"], [2, "width", "31%"], ["id", "tbodyy", 2, "text-align", "center"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 3, "change", 4, "ngIf"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "checked", "", "disabled", "", 1, "form-check-input", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input", 3, "change"], [1, "modal-HF"], [1, "close", 2, "cursor", "pointer", "font-size", "35px", "float", "right", "margin-top", "-18px", 3, "click"], [1, "modal-body", 2, "height", "35vh", "overflow-y", "auto"], ["for", "comment"], ["rows", "4", "cols", "50", "formControlName", "comment", 1, "form-control", 2, "resize", "none", "height", "5em", 3, "ngClass"]],
  template: function HealthForumComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Health Forum");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10)(12, "div", 11)(13, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HealthForumComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.registerSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HealthForumComponent_div_16_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HealthForumComponent_div_17_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "form", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HealthForumComponent_div_19_Template, 21, 12, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "table", 21)(24, "thead")(25, "tr")(26, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Scheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Rescheduled");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Staff Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "SS Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Topic");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Village");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "List");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, HealthForumComponent_th_48_Template, 4, 0, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Event");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Apv./ C");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Attended");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Attended");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Apv.");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, HealthForumComponent_tr_68_Template, 35, 18, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](70, "healthForumFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "pagination-controls", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function HealthForumComponent_Template_pagination_controls_pageChange_71_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function HealthForumComponent_Template_pagination_controls_pageBoundsCorrection_71_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, HealthForumComponent_ng_template_72_Template, 62, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, HealthForumComponent_ng_template_74_Template, 35, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, HealthForumComponent_ng_template_76_Template, 110, 54, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, HealthForumComponent_ng_template_78_Template, 201, 25, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, HealthForumComponent_ng_template_80_Template, 29, 13, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.registerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.healthForumForm.value.branch || !ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.healthForumForm.value.branch && ctx.createMode || ctx.lowerRankbranchId && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.healthForumForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.eventViewMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](69, 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](70, 12, ctx.viewHealthForumsOfBranch, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](15, _c2, ctx.registerSearch, ctx.registerSearch, ctx.registerSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c3, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__.MultiSelectComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabContent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe, _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_9__.healthForumFilterPipe],
  styles: [".popover__wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translate(0, -20px);\r\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\r\n}\r\n\r\n.popover__title[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #499;\r\n  text-align: center;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 200px !important;\r\n  transform: translate(0, 15px) !important;\r\n  background-color: white;\r\n  color: #828BB2;\r\n  box-shadow: 3px 4px 5px 3px rgba(117, 111, 117, 1);\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.popover__content[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: \"\";\r\n  left: calc(10% - 10px);\r\n  top: -10px;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #bfbfbf transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  background: #499;\r\n  padding: 12px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  width: 1080px;\r\n  margin-left: -275px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.modal-HF[_ngcontent-%COMP%] {\r\n  height: 360px;\r\n  width: 498px;\r\n}\r\n\r\n.modal-contents[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 550px;\r\n  border: 10px solid white;\r\n  background: white;\r\n  margin-left: -16px;\r\n}\r\n\r\n.modal-conten[_ngcontent-%COMP%] {\r\n  height: 570px;\r\n  width: 1300px;\r\n  margin-left: -400px;\r\n  background: white;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 4px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child) > [_ngcontent-%COMP%]:last-child > *[_ngcontent-%COMP%] {\r\n  border-bottom-color: white;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 390px;\r\n  margin-top: -8px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  margin-left: 600px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 57%;\r\n  margin-left: 770px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 200px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 74px;\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n  margin-left: -15px;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\nng-multiselect-dropdown[_ngcontent-%COMP%] {\r\n  padding: 0px !important;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: 0 0 1.5em 0 !important;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 198px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\r\n\r\n.fa-check-circle[_ngcontent-%COMP%]:hover {\r\n  color: darkgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.fa-calendar[_ngcontent-%COMP%]:hover {\r\n  color: midnightblue !important;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n  margin-left: 2px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]:not(.has-validation) > .dropdown-toggle[_ngcontent-%COMP%]:nth-last-child(n+3), .input-group[_ngcontent-%COMP%]:not(.has-validation) > [_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {\r\n  border-top-right-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n  border-top-left-radius: 7px;\r\n  border-bottom-left-radius: 7px;\r\n}\r\n\r\n#circle[_ngcontent-%COMP%] {\r\n  color: #3e7758 !important;\r\n  font-size: 20px;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #FFFFFF;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  text-align: center;\r\n  overflow-y: auto;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n  position: static;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  height: 8px;\r\n  background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: grey;\r\n}\r\n\r\n#tbody[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 120px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#tbodyy[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 65px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  padding: 4px;\r\n}\r\n\r\n#tbodyDisease[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 116px;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n  .mat-tab-header {\r\n  margin-left: -75px;\r\n}\r\n\r\n  .mat-tab-body-wrapper {\r\n  position: relative;\r\n  overflow-y: auto;\r\n  height: 280px;\r\n  display: flex;\r\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\r\n  margin-left: -75px;\r\n}\r\n\r\nfieldset.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  padding: 0 1.4em 1.4em 1.4em !important;\r\n  margin: -12px 0 1.5em 0 !important;\r\n  height: 140px;\r\n}\r\n\r\nlegend.scheduler-border[_ngcontent-%COMP%] {\r\n  border: 1px groove #ddd !important;\r\n  background-color: gray;\r\n  width: 200px;\r\n  color: #ddd;\r\n  font-size: 1.2em !important;\r\n  font-weight: bold !important;\r\n  font-family: ui-sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9oZWFsdGgtZm9ydW0vaGVhbHRoLWZvcnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlcl9fd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcclxufVxyXG5cclxuLnBvcG92ZXJfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM0OTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzgyOEJCMjtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDVweCAzcHggcmdiYSgxMTcsIDExMSwgMTE3LCAxKTtcclxufVxyXG5cclxuLnBvcG92ZXJfX2NvbnRlbnQgbGkge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGxlZnQ6IGNhbGMoMTAlIC0gMTBweCk7XHJcbiAgdG9wOiAtMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICB3aWR0aDogMTA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjc1cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1IRiB7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICB3aWR0aDogNDk4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50cyB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogNTUwcHg7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbiB7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxuICB3aWR0aDogMTMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5RQV90YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4udGFibGU+Om5vdCg6bGFzdC1jaGlsZCk+Omxhc3QtY2hpbGQ+KiB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM5MHB4O1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBtYXJnaW4tbGVmdDogNjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA1NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDc3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICMwMDAwO1xyXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuXHJcbm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxOThweDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZhLWNoZWNrLWNpcmNsZTpob3ZlciB7XHJcbiAgY29sb3I6IGRhcmtncmVlbiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uZmEtY2FsZW5kYXI6aG92ZXIge1xyXG4gIGNvbG9yOiBtaWRuaWdodGJsdWUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwPjpub3QoOmZpcnN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLW1lbnUpOm5vdCgudmFsaWQtdG9vbHRpcCk6bm90KC52YWxpZC1mZWVkYmFjayk6bm90KC5pbnZhbGlkLXRvb2x0aXApOm5vdCguaW52YWxpZC1mZWVkYmFjaykge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cDpub3QoLmhhcy12YWxpZGF0aW9uKT4uZHJvcGRvd24tdG9nZ2xlOm50aC1sYXN0LWNoaWxkKG4rMyksXHJcbi5pbnB1dC1ncm91cDpub3QoLmhhcy12YWxpZGF0aW9uKT46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSk6bm90KC5kcm9wZG93bi1tZW51KSB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbiNjaXJjbGUge1xyXG4gIGNvbG9yOiAjM2U3NzU4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jaGVhZGVyX2ZpeGVkIHtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4jdGJvZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0Ym9keXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNjVweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbiN0Ym9keURpc2Vhc2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTE2cHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLFxyXG50Ym9keSB0ciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogLTEycHggMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgY29sb3I6ICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 71093:
/*!*************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumModule": () => (/* binding */ HealthForumModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-forum-routing.module */ 3741);
/* harmony import */ var _health_forum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-forum.component */ 91699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/health-forum-search.pipe */ 14357);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-forum-angular-mat-modal/health-forum-angular-mat-modal.component */ 69385);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);














class HealthForumModule {}
HealthForumModule.ɵfac = function HealthForumModule_Factory(t) {
  return new (t || HealthForumModule)();
};
HealthForumModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: HealthForumModule
});
HealthForumModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthForumRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule.forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HealthForumModule, {
    declarations: [_health_forum_component__WEBPACK_IMPORTED_MODULE_1__.HealthForumComponent, _shared_sidebar_health_forum_search_pipe__WEBPACK_IMPORTED_MODULE_3__.healthForumFilterPipe, _health_forum_angular_mat_modal_health_forum_angular_mat_modal_component__WEBPACK_IMPORTED_MODULE_6__.HealthForumAngularMatModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _health_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthForumRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule]
  });
})();

/***/ }),

/***/ 71727:
/*!**************************************************************!*\
  !*** ./src/app/modules/health-forum/health-forum.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthForumService": () => (/* binding */ HealthForumService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class HealthForumService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  viewHealthForumsOfABranch(obj) {
    return this.http.post(`${this.baseURL}healthForum/viewHealthForumsOfABranch`, obj);
  }
  viewHealthForumsOfAEvent(obj) {
    return this.http.post(`${this.baseURL}healthForum/viewHealthForumEventDetails`, obj);
  }
  getAllStaffAndTheirSSOfABranch(obj) {
    return this.http.post(`${this.baseURL}swasthyasahayika/getAllStaffAndTheirSSOfABranch`, obj);
  }
  getTopicListAndAreasOfStaffAndOrSS(obj) {
    return this.http.post(`${this.baseURL}healthForum/getHealthForumTopicListAndAreasOfStaffAndOrSS`, obj);
  }
  HFSaveOrUpdate(obj) {
    return this.http.post(`${this.baseURL}healthForum/saveOrUpdate`, obj);
  }
  HFApprove(obj) {
    return this.http.post(`${this.baseURL}healthForum/approve`, obj);
  }
  HForumEventPrerequisite(obj) {
    return this.http.post(`${this.baseURL}healthForum/healthForumEventPrerequisite`, obj);
  }
  getListOfFamsOfAVillForHFEvent(obj) {
    return this.http.post(`${this.baseURL}healthForum/getListOfFamiliesOfAVillageForHealthForum`, obj);
  }
  saveOrUpdateHealthForumEvent(obj) {
    return this.http.post(`${this.baseURL}healthForum/saveOrUpdateHealthForumEvent`, obj);
  }
  rescheduleHealthForum(obj) {
    return this.http.post(`${this.baseURL}healthForum/rescheduleHealthForum`, obj);
  }
  approveARescheduleHealthForum(obj) {
    return this.http.post(`${this.baseURL}healthForum/approveARescheduleHealthForum`, obj);
  }
  editARescheduledHealthForum(obj) {
    return this.http.post(`${this.baseURL}healthForum/editARescheduledHealthForum`, obj);
  }
}
HealthForumService.ɵfac = function HealthForumService_Factory(t) {
  return new (t || HealthForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
HealthForumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HealthForumService,
  factory: HealthForumService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 14357:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/health-forum-search.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "healthForumFilterPipe": () => (/* binding */ healthForumFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class healthForumFilterPipe {
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
healthForumFilterPipe.ɵfac = function healthForumFilterPipe_Factory(t) {
  return new (t || healthForumFilterPipe)();
};
healthForumFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "healthForumFilter",
  type: healthForumFilterPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_health-forum_health-forum_module_ts.js.map