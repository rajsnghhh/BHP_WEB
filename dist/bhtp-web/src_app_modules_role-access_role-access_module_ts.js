"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_role-access_role-access_module_ts"],{

/***/ 69126:
/*!*******************************************************************!*\
  !*** ./src/app/modules/role-access/role-access-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAccessRoutingModule": () => (/* binding */ RoleAccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _role_access_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-access.component */ 38064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _role_access_component__WEBPACK_IMPORTED_MODULE_0__.RoleAccessComponent
}];
class RoleAccessRoutingModule {}
RoleAccessRoutingModule.ɵfac = function RoleAccessRoutingModule_Factory(t) {
  return new (t || RoleAccessRoutingModule)();
};
RoleAccessRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RoleAccessRoutingModule
});
RoleAccessRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoleAccessRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 38064:
/*!**************************************************************!*\
  !*** ./src/app/modules/role-access/role-access.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAccessComponent": () => (/* binding */ RoleAccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/core/http/http.service */ 73350);
/* harmony import */ var _role_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-access.service */ 32300);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login/login.service */ 23688);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);












function RoleAccessComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Device selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RoleAccessComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleAccessComponent_div_23_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.f.device.errors.required);
  }
}
function RoleAccessComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mainfunction_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", mainfunction_r5.mainMenuId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mainfunction_r5.mainMenuName, " ");
  }
}
function RoleAccessComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Main Function selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RoleAccessComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleAccessComponent_div_33_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f.mainfunction.errors.required);
  }
}
function RoleAccessComponent_div_34_tr_18_td_3_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RoleAccessComponent_div_34_tr_18_td_3_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const itemss_r13 = ctx_r18.$implicit;
      const i_r14 = ctx_r18.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.assignAccess(itemss_r13, i_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RoleAccessComponent_div_34_tr_18_td_3_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RoleAccessComponent_div_34_tr_18_td_3_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const itemss_r13 = ctx_r21.$implicit;
      const i_r14 = ctx_r21.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.assignAccess(itemss_r13, i_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RoleAccessComponent_div_34_tr_18_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RoleAccessComponent_div_34_tr_18_td_3_input_2_Template, 1, 0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RoleAccessComponent_div_34_tr_18_td_3_input_3_Template, 1, 0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const itemss_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", itemss_r13.subMenuAccessType, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", itemss_r13.roleActiveFlag == "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", itemss_r13.roleActiveFlag == "N");
  }
}
function RoleAccessComponent_div_34_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RoleAccessComponent_div_34_tr_18_td_3_Template, 4, 3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](items_r10.roleShortname);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", items_r10.accessDtoList);
  }
}
function RoleAccessComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleAccessComponent_div_34_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.changeSubFunction($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " \u00A0\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 27)(5, "div", 28)(6, "div", 29)(7, "table", 30)(8, "thead", 31)(9, "tr")(10, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Role Function");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Role Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "th", 33)(15, "th", 33)(16, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RoleAccessComponent_div_34_tr_18_Template, 4, 2, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", item_r7.subMenuName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r7.subMenuName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r3.searchFullscreen ? "QA_tableFull" : "QA_tableHalf");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.roleList);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class RoleAccessComponent {
  constructor(httpService, roleService, fb, toaster, validationService, sidebarService, router, accountService) {
    this.httpService = httpService;
    this.roleService = roleService;
    this.fb = fb;
    this.toaster = toaster;
    this.validationService = validationService;
    this.sidebarService = sidebarService;
    this.router = router;
    this.accountService = accountService;
    this.roleList = [];
    this.mainFunctionList = [];
    this.subFunctionList = [];
    this.loader = true;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    var tt = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(item => item.subFunctionMasterId == 5 || item.subFunctionMasterId == 6 || item.subFunctionMasterId == 7 || item.subFunctionMasterId == 8)?.accessDetailList;
    console.log(tt);
    if (tt.length == 1) {
      tt.forEach(x => {
        console.log(x);
        if (x.accessType == 'view') {
          console.log(true);
          this.viewDisable = 'view';
        } else {
          console.log(false);
        }
      });
    }
    this.createForm();
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList.find(item => item.subFunctionMasterId == 5 || item.subFunctionMasterId == 6 || item.subFunctionMasterId == 7 || item.subFunctionMasterId == 8)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/role-access']) : this.router.navigate(['/error']);
  }
  createForm() {
    this.roleAccessForm = this.fb.group({
      device: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      mainfunction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  get f() {
    return this.roleAccessForm.controls;
  }
  changeDevice(deviceId) {
    console.log(deviceId);
    let obj = {
      dataAccessDTO: this.httpService.dataAccessDTO
    };
    this.loader = false;
    this.roleService.rolefunctionmapview(obj).subscribe(res => {
      this.roleFunctionMapView = res.responseObject;
      console.log(this.roleFunctionMapView, 'roleFunctionMapView');
      if (deviceId == 1) {
        this.mainFunctionList = this.roleFunctionMapView?.webMenu;
        console.log(this.mainFunctionList, ' this.mainFunctionList-web');
      } else {
        this.mainFunctionList = this.roleFunctionMapView?.mobMenus;
        console.log(this.mainFunctionList, ' this.mainFunctionList-mobile');
      }
      this.loader = true;
    });
    this.roleAccessForm.controls.mainfunction.setValue('');
    this.subFunctionList = [];
    if (this.roleAccessForm.value.device == '') {
      this.roleAccessForm.controls.mainfunction.setValue('');
      this.mainFunctionList = [];
      this.subFunctionList = [];
    }
  }
  changeMainFunction(mainFunctionId) {
    console.log(mainFunctionId, 'mainFunctionId');
    this.subFunctionList = this.mainFunctionList.find(item => item.mainMenuId == mainFunctionId)?.subMenuDtoList;
    console.log(this.subFunctionList, ' this.subFunctionList');
  }
  changeSubFunction(subFunctionName) {
    console.log(subFunctionName, 'subFunctionName');
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        for (var j = 0; j < coll.length; j++) {
          var con = coll[j].nextElementSibling;
          coll[j].classList.remove("active");
          // coll[j].nextElementSibling.style.maxHeight = null;
          con.style.maxHeight = null;
        }
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    // this.accessList=[]
    this.roleList = this.subFunctionList.find(role => role.subMenuName == subFunctionName)?.roleAccessDtoList;
    console.log(this.roleList, 'roleList');
    //     this.roleList.forEach(x => {
    //       this.accessList.push(x.accessDtoList);
    //     })
    // console.log(  this.accessList);
  }

  assignAccess(accessDtoList, i, e) {
    console.log(accessDtoList, accessDtoList.subMenuId, 'accessDtoList.subMenuId');
    let checked = e.target.checked;
    console.log(checked);
    if (checked == true) {
      accessDtoList.roleActiveFlag = 'Y';
      console.log(accessDtoList, this.roleFunctionMapView);
    } else {
      accessDtoList.roleActiveFlag = 'N';
      console.log(accessDtoList, this.roleFunctionMapView);
    }
  }
  saveRoleMap() {
    let roleAccessSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      roleFunctionMapDTOList: this.roleFunctionMapView
    };
    this.loader = false;
    console.log(roleAccessSaveObj);
    this.roleService.rolesubfunctionmapsave(roleAccessSaveObj).subscribe(res => {
      console.log(res.responseObject, 'roleFunctionMapsave');
      if (res.status == true) {
        this.loader = true;
        this.showSuccess(res.message);
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Role Menu Map', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Role Menu Map', {
      timeOut: 3000
    });
  }
  disableSave() {
    let flag = true;
    if (!this.roleAccessForm.value.mainfunction) {
      flag = false;
    } else if (this.viewDisable == 'view') {
      flag = false;
    }
    return flag;
  }
}
RoleAccessComponent.ɵfac = function RoleAccessComponent_Factory(t) {
  return new (t || RoleAccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_role_access_service__WEBPACK_IMPORTED_MODULE_1__.RoleAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService));
};
RoleAccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RoleAccessComponent,
  selectors: [["app-role-access"]],
  decls: 40,
  vars: 15,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "form-signin", 3, "formGroup"], [1, "form-group", "col-md", 2, "float", "right"], ["for", "device"], [1, "text-danger"], ["formControlName", "device", "id", "device", 1, "form-select", 3, "ngClass", "change"], ["value", ""], ["value", "1"], ["value", "2"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "mainfunction"], ["formControlName", "mainfunction", "id", "mainfunction", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-start"], [1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "collapsible", 2, "padding", "10px", "width", "-webkit-fill-available", 3, "value", "click"], [1, "content", 2, "background", "white", "margin-top", "-14px"], [1, "QA_table", 3, "ngClass"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed", "text-align", "center", "padding", "0px"], ["id", "header_fixed"], [2, "padding", "11px", "width", "10%"], [2, "padding", "11px"], [4, "ngFor", "ngForOf"], ["class", "form-check-input", "type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", "style", "margin-top: 7px", 3, "change", 4, "ngIf"], ["class", "form-check-input", "type", "checkbox", "value", "", "id", "flexCheckDefault", "style", "margin-top: 7px", 3, "change", 4, "ngIf"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 2, "margin-top", "7px", 3, "change"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 2, "margin-top", "7px", 3, "change"]],
  template: function RoleAccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Role Menu Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 7)(9, "div", 2)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Device Type :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RoleAccessComponent_Template_select_change_16_listener($event) {
        return ctx.changeDevice($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "-- Select Device --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RoleAccessComponent_div_23_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16)(25, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Main Function :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RoleAccessComponent_Template_select_change_29_listener($event) {
        return ctx.changeMainFunction($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "-- Select Main Function --");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, RoleAccessComponent_option_32_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, RoleAccessComponent_div_33_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, RoleAccessComponent_div_34_Template, 19, 4, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 2)(37, "div", 21)(38, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleAccessComponent_Template_button_click_38_listener() {
        return ctx.saveRoleMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Save Role Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.roleAccessForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c0, ctx.f.device.invalid && ctx.f.device.touched, ctx.f.device.valid && (ctx.f.device.dirty || ctx.f.device.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.device.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](12, _c0, ctx.f.mainfunction.invalid && ctx.f.mainfunction.touched, ctx.f.mainfunction.valid && (ctx.f.mainfunction.dirty || ctx.f.mainfunction.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.mainFunctionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.mainfunction.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subFunctionList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disableSave());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n  background-color: #686868;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 18px;\r\n  border: none;\r\n  text-align: left;\r\n  outline: none;\r\n  font-size: 15px;\r\n  border-radius: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%]:hover {\r\n  background-color: #686868;\r\n}\r\n\r\n.collapsible[_ngcontent-%COMP%]:after {\r\n  content: '\\002B';\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]:after {\r\n  content: \"\\2212\";\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  color: #7e7172;\r\n  font-size: 15px;\r\n  color: #828bb2;\r\n  font-weight: 400;\r\n  border-bottom: 1px solid rgba(130, 139, 178, 0.1);\r\n  padding: 0;\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #a0a0a0;\r\n}\r\n\r\n.QA_tableFull[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.QA_tableHalf[_ngcontent-%COMP%] {\r\n  width: 995px;\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yb2xlLWFjY2Vzcy9yb2xlLWFjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ODY4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmNvbGxhcHNpYmxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ODY4O1xyXG59XHJcblxyXG4uY29sbGFwc2libGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwMkInO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2ZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDIyMTJcIjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgdGgsXHJcbi5RQV9zZWN0aW9uIC5RQV90YWJsZSB0Ym9keSB0ZCB7XHJcbiAgY29sb3I6ICM3ZTcxNzI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjODI4YmIyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTMwLCAxMzksIDE3OCwgMC4xKTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2EwYTBhMDtcclxufVxyXG5cclxuLlFBX3RhYmxlRnVsbCB7XHJcbiAgd2lkdGg6IDExNzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLlFBX3RhYmxlSGFsZiB7XHJcbiAgd2lkdGg6IDk5NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1993:
/*!***********************************************************!*\
  !*** ./src/app/modules/role-access/role-access.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAccessModule": () => (/* binding */ RoleAccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _role_access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-access-routing.module */ 69126);
/* harmony import */ var _role_access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-access.component */ 38064);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class RoleAccessModule {}
RoleAccessModule.ɵfac = function RoleAccessModule_Factory(t) {
  return new (t || RoleAccessModule)();
};
RoleAccessModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RoleAccessModule
});
RoleAccessModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _role_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleAccessRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RoleAccessModule, {
    declarations: [_role_access_component__WEBPACK_IMPORTED_MODULE_1__.RoleAccessComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _role_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleAccessRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule]
  });
})();

/***/ }),

/***/ 32300:
/*!************************************************************!*\
  !*** ./src/app/modules/role-access/role-access.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleAccessService": () => (/* binding */ RoleAccessService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class RoleAccessService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  rolefunctionmapview(obj) {
    return this.http.post(`${this.baseURL}rolemaster/rolefunctionmap/view`, obj);
  }
  rolesubfunctionmapsave(obj) {
    return this.http.post(`${this.baseURL}rolesubfunctionmap/save`, obj);
  }
}
RoleAccessService.ɵfac = function RoleAccessService_Factory(t) {
  return new (t || RoleAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RoleAccessService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RoleAccessService,
  factory: RoleAccessService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_role-access_role-access_module_ts.js.map