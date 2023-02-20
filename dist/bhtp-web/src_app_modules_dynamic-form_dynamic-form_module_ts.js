"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_dynamic-form_dynamic-form_module_ts"],{

/***/ 61788:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form-edit/dynamic-form-edit.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormEditComponent": () => (/* binding */ DynamicFormEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _dynamic_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dynamic-form.service */ 93883);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function DynamicFormEditComponent_div_41_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DynamicFormEditComponent_div_41_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.addmoreAns());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function DynamicFormEditComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicFormEditComponent_div_41_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.createObj.addAnswers[i_r3].title_info = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26)(3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DynamicFormEditComponent_div_41_Template_i_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.removeAns(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DynamicFormEditComponent_div_41_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.createObj.addAnswers[i_r3].title_info)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3 == 0);
  }
}
class DynamicFormEditComponent {
  constructor(httpService, dynamicFormService, router, toastr) {
    this.httpService = httpService;
    this.dynamicFormService = dynamicFormService;
    this.router = router;
    this.toastr = toastr;
    this.createObj = {
      question_master_id: 0,
      quesName: '',
      typeId: '',
      addAnswers: []
    };
  }
  ngOnInit() {
    this.createObj.addAnswers = [];
    this.createObj.addAnswers.push({
      title_info: ''
    });
    this.router.params.subscribe(response => {
      console.log(response);
      if (response.question_master_id) {
        this.editMode = true;
        this.editDataSub = this.dynamicFormService.editFormData.subscribe(data => {
          console.log(data);
          this.receivedUserData = data;
          if (this.receivedUserData) {
            console.log('inside data');
            this.createObj.quesName = this.receivedUserData.title;
            this.createObj.typeId = this.receivedUserData.view_type;
            this.createObj.addAnswers = this.receivedUserData.menu_info;
            this.createObj.question_master_id = this.receivedUserData.question_master_id;
          }
        });
      }
    });
  }
  saveForm(dynamicForm) {
    let obj = {
      questions: [{
        question_master_id: this.createObj.question_master_id,
        view_type: this.createObj.typeId,
        title: this.createObj.quesName,
        description: 'Enabled',
        keyboardOptions: 'Numeric',
        menu_info: this.createObj.addAnswers
      }]
    };
    console.log(obj);
    this.dynamicFormService.saveDynamicForm(obj).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.showSuccess(response.message);
        this.createObj = {
          quesName: '',
          typeId: '',
          question_master_id: 0,
          addAnswers: []
        };
      } else {
        this.showError(response.message);
      }
    });
  }
  addmoreAns() {
    this.createObj.addAnswers.push({
      title_info: ''
    });
    console.log(this.createObj);
  }
  removeAns(i) {
    this.createObj.addAnswers.splice(i, 1);
  }
  ngOnDestroy() {
    console.log('Inside destroy');
    if (this.editMode) this.editDataSub.unsubscribe();
  }
  showSuccess(message) {
    this.toastr.success(message, 'Dynamic Form', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toastr.error(message, 'Dynamic Form', {
      timeOut: 3000
    });
  }
}
DynamicFormEditComponent.ɵfac = function DynamicFormEditComponent_Factory(t) {
  return new (t || DynamicFormEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dynamic_form_service__WEBPACK_IMPORTED_MODULE_1__.DynamicFormService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
DynamicFormEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DynamicFormEditComponent,
  selectors: [["app-dynamic-form-edit"]],
  decls: 46,
  vars: 7,
  consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "white_box", "QA_section", "mb_30"], [1, "page-title"], ["id", "myForm", 3, "submit"], ["dynamicForm", "ngForm"], [1, "row", "mb-3"], ["for", ""], [1, "col-md-7"], ["type", "text", "name", "quesForm", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "typeForm", "id", "", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Text"], ["value", "Edit"], ["value", "Radio"], ["value", "DropDown"], ["value", "CheckBox"], ["value", "Button"], ["type", "hidden", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "col-md-12"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "", 2, "float", "right", "margin-top", "5px"], [1, "fas", "fa-minus-circle", "remove", 3, "click"], ["class", "fas fa-plus-circle", 3, "click", 4, "ngIf"], [1, "fas", "fa-plus-circle", 3, "click"]],
  template: function DynamicFormEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Create/Edit Dynamic Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function DynamicFormEditComponent_Template_form_submit_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.saveForm(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 2)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Question:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicFormEditComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.createObj.quesName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "div", 2)(17, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Type:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicFormEditComponent_Template_select_ngModelChange_20_listener($event) {
        return ctx.createObj.typeId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "-- Please Select a Type --");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "DropDown");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "CheckBox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 8)(36, "div", 2)(37, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Option:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicFormEditComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.createObj.question_master_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DynamicFormEditComponent_div_41_Template, 5, 4, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 1)(43, "div", 22)(44, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.createObj.quesName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.createObj.typeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.createObj.question_master_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createObj.addAnswers);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n    color: #3e7758 !important;\r\n    font-size: 30px;\r\n}\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-size: 30px;\r\n}\r\n\r\n#myForm[_ngcontent-%COMP%] {\r\n    height: 250px; \r\n    overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLWVkaXQvZHluYW1pYy1mb3JtLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXBsdXMtY2lyY2xlIHtcclxuICAgIGNvbG9yOiAjM2U3NzU4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuI215Rm9ybSB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4OyBcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 18778:
/*!*********************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormRoutingModule": () => (/* binding */ DynamicFormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dynamic_form_edit_dynamic_form_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form-edit/dynamic-form-edit.component */ 61788);
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component */ 7356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__.DynamicFormComponent
}, {
  path: 'create',
  component: _dynamic_form_edit_dynamic_form_edit_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormEditComponent
}, {
  path: 'create/:question_master_id',
  component: _dynamic_form_edit_dynamic_form_edit_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormEditComponent
}];
class DynamicFormRoutingModule {}
DynamicFormRoutingModule.ɵfac = function DynamicFormRoutingModule_Factory(t) {
  return new (t || DynamicFormRoutingModule)();
};
DynamicFormRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DynamicFormRoutingModule
});
DynamicFormRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DynamicFormRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 7356:
/*!****************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dynamic_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form.service */ 93883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 9991);






function DynamicFormComponent_tr_37_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const datas_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", datas_r4.title_info, " ");
  }
}
const _c0 = function (a1) {
  return ["create", a1];
};
function DynamicFormComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "table", 22)(9, "tbody")(10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DynamicFormComponent_tr_37_li_12_Template, 2, 1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 23)(14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DynamicFormComponent_tr_37_Template_i_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.setData(data_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.view_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r1.menu_info);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, data_r1.question_master_id));
  }
}
const _c1 = function () {
  return ["create"];
};
class DynamicFormComponent {
  constructor(dynamicFormService) {
    this.dynamicFormService = dynamicFormService;
    this.getFormData = [];
  }
  ngOnInit() {
    let obj = '';
    this.dynamicFormService.getFormUi(obj).subscribe(response => {
      this.getFormData = response.data.contents;
      console.log(response.data);
      console.log(this.getFormData);
    });
  }
  setData(data) {
    this.dynamicFormService.setData(data);
  }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) {
  return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dynamic_form_service__WEBPACK_IMPORTED_MODULE_0__.DynamicFormService));
};
DynamicFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DynamicFormComponent,
  selectors: [["app-dynamic-form"]],
  decls: 39,
  vars: 7,
  consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], [1, "col-md-4"], [1, "page-title"], [1, "col-md-8"], [1, "box_right", "d-flex", "lms_block"], [1, "serach_field_2"], [1, "search_inner"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search questions here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "add_button"], ["data-toggle", "modal", "data-target", "#addcategory", 1, "btn", "btn-primary", 3, "routerLink"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", 2, "width", "705px", "table-layout", "fixed"], [4, "ngFor", "ngForOf"], [2, "width", "705px"], ["data-toggle", "tooltip", "title", "Edit"], [1, "fas", "fa-edit", 3, "routerLink", "click"], [1, "fas", "fa-trash"]],
  template: function DynamicFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 1)(5, "div", 4)(6, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Dynamic Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "form", 10)(13, "div", 11)(14, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.dynamicFormSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Add Questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "table", 20)(24, "thead")(25, "tr")(26, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "SL No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DynamicFormComponent_tr_37_Template, 16, 7, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dynamicFormSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](38, 3, ctx.getFormData, ctx.dynamicFormSearch));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipe],
  styles: [".fa-plus-circle[_ngcontent-%COMP%] {\r\n    color: #3e7758 !important;\r\n    font-size: 30px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    list-style-type: decimal;\r\n    text-align: start;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: 30px;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding-right: 1px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    margin-left: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogIzNlNzc1OCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 87449:
/*!*************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormModule": () => (/* binding */ DynamicFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form-routing.module */ 18778);
/* harmony import */ var _dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component */ 7356);
/* harmony import */ var _dynamic_form_edit_dynamic_form_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-form-edit/dynamic-form-edit.component */ 61788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class DynamicFormModule {}
DynamicFormModule.ɵfac = function DynamicFormModule_Factory(t) {
  return new (t || DynamicFormModule)();
};
DynamicFormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DynamicFormModule
});
DynamicFormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicFormRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DynamicFormModule, {
    declarations: [_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__.DynamicFormComponent, _dynamic_form_edit_dynamic_form_edit_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormEditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicFormRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule]
  });
})();

/***/ }),

/***/ 93883:
/*!**************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormService": () => (/* binding */ DynamicFormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class DynamicFormService {
  constructor(http) {
    this.http = http;
    this.sendData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.editFormData = this.sendData.asObservable();
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getFormUi(obj) {
    return this.http.post(`${this.baseURL}form/getFormUi`, obj);
  }
  saveDynamicForm(obj) {
    return this.http.post(`${this.baseURL}form/saveFormUi`, obj);
  }
  setData(value) {
    this.sendData.next(value);
  }
}
DynamicFormService.ɵfac = function DynamicFormService_Factory(t) {
  return new (t || DynamicFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
DynamicFormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DynamicFormService,
  factory: DynamicFormService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_dynamic-form_dynamic-form_module_ts.js.map