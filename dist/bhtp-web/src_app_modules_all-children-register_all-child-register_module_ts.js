"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_all-children-register_all-child-register_module_ts"],{

/***/ 1349:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/all-children-register/add-child-muac/add-child-muac.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddChildMuacComponent": () => (/* binding */ AddChildMuacComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _muac_register_muac_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../muac-register/muac-register.service */ 10800);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);













function AddChildMuacComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const muacCamp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", muacCamp_r3.muacCampId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", muacCamp_r3.campNumber, " ");
  }
}
function AddChildMuacComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "MUAC Date selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddChildMuacComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddChildMuacComponent_div_23_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.muacDate.errors.required);
  }
}
function AddChildMuacComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " MUAC is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddChildMuacComponent_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " MUAC should be 1 to 30 cm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddChildMuacComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddChildMuacComponent_div_41_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddChildMuacComponent_div_41_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.muac.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.muac.errors.notInMuacRange);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class AddChildMuacComponent {
  constructor(fb, validationService, httpService, http, toaster, data, dialogRef, sidebarService, muacService) {
    this.fb = fb;
    this.validationService = validationService;
    this.httpService = httpService;
    this.http = http;
    this.toaster = toaster;
    this.data = data;
    this.dialogRef = dialogRef;
    this.sidebarService = sidebarService;
    this.muacService = muacService;
    this.muacCampList = [];
    this.childMuac = [];
    this.today = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    this.editMode = this.data.editMode;
    this.childDob = this.data.childDob;
    this.minMuacRecordDate = this.childDob;
    this.maxMuacRecordDate = this.today;
    this.createForm();
    if (this.data.disableCamp == 'LM') {
      this.muacForm.get('muacCampNo').disable();
    }
    if (this.data.editMode === true) {
      this.muacForm.get('muacCampNo').enable();
      this.muacForm.reset();
    } else {
      // this.muacForm.get('muacCampNo').disable();
      this.muacForm.patchValue({
        muacDate: this.data?.muacRecordDate,
        muacCampNo: this.data?.muacCampNumber,
        height: this.data.height < 1 ? '' : this.data.height,
        weight: this.data.weight < 1 ? '' : this.data.weight,
        muac: this.data.muac
      });
    }
    let obj = {
      activeStatus: 'A',
      dataAccessDTO: this.httpService.dataAccessDTO,
      id: this.sidebarService.branchId
    };
    this.muacService.muacCampList(obj).subscribe(response => {
      this.muacCampList = response.responseObject.muaccampDetailList;
      console.log(this.muacCampList);
    });
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data.childId
    };
    this.http.post(`${this.httpService.baseURL}muaccamp/viewMuacRegistersOfAChild`, Dto).subscribe(res => {
      this.childMuac = res.responseObject;
    });
  }
  createForm() {
    this.muacForm = this.fb.group({
      muacDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      muacCampNo: [''],
      height: [''],
      weight: [''],
      muac: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.muacRange]]
    });
  }
  get f() {
    return this.muacForm.controls;
  }
  campNo(Id) {
    this.muacCampID = Id;
    console.log(this.muacCampID, 'muacCampID');
    this.muacForm.controls.muacDate.setValue('');
    this.muacCampStartDate = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.startDate;
    this.muacCampEndDate = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.endDate;
    this.minMuacRecordDate = this.muacCampStartDate > this.childDob ? this.muacCampStartDate : this.childDob;
    this.maxMuacRecordDate = this.muacCampEndDate > this.today ? this.today : this.muacCampEndDate;
    let campNo = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.campNumber.slice(-4);
    this.campNotPresent = this.childMuac.find(campNumber => campNumber.muacCampDto.muacCampNumber == campNo)?.muacCampDto.muacCampNumber ? false : true;
    this.campDate = this.muacCampList.find(muacCampId => muacCampId.muacCampId == Id)?.startDate > moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format('YYYY-MM-DD') ? false : true;
  }
  muacRange(controls) {
    if (controls.value >= 1 && controls.value <= 30) {
      return null;
    }
    return {
      'notInMuacRange': true
    };
  }
  // weightRange(controls: AbstractControl): { [key: string]: any } | null {
  //   if (controls.value >= 1 && controls.value <= 25 || controls.value == null) {
  //     return null;
  //   }
  //   return { 'notInWeightRange': true };
  // }
  // heightRange(controls: AbstractControl): { [key: string]: any } | null {
  //   if (controls.value >= 10 && controls.value <= 180 || controls.value == null) {
  //     return null;
  //   }
  //   return { 'notInHeightRange': true };
  // }
  onAddEdit() {
    if (this.muacForm.value.height) {
      if (this.muacForm.value.height < 10 || this.muacForm.value.height > 180) {
        this.showError('Height should be between 10cm to 180cm');
        return;
      }
    }
    if (this.muacForm.value.weight) {
      if (this.muacForm.value.weight < 1 || this.muacForm.value.weight > 25) {
        this.showError('Weight should be between 1kg to 25kg');
        return;
      }
    }
    this.muacForm.markAllAsTouched();
    console.log(this.muacForm);
    if (this.data.editMode === true) {
      let addDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: 0,
          muacCampId: this.muacForm.value.muacCampNo ? this.muacForm.value.muacCampNo : null,
          childId: this.data.childId,
          height: this.muacForm.value.height ? Math.trunc(this.muacForm.value.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
          weight: this.muacForm.value.weight ? Math.trunc(this.muacForm.value.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
          muac: Math.trunc(this.muacForm.value.muac * Math.pow(10, 1)) / Math.pow(10, 1),
          muacRecordDate: this.muacForm.value.muacDate,
          active_flag: "A"
        }
      };
      console.log(addDto.muacDataDto.muacCampId);
      console.log(this.muacForm.value.muacCampNo, 'this.muacForm.value.muacCampNo');
      if (this.campDate && this.campNotPresent || this.muacForm.value.muacCampNo == null) {
        this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, addDto).subscribe(res => {
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
      } else {
        this.showError('Data already exist for this MUAC Camp No');
      }
    } else {
      let editDto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        muacDataDto: {
          muacRegisterId: this.data.muacRegisterId,
          muacCampId: this.muacForm.value.muacCampNo ? this.muacForm.value.muacCampNo : null,
          childId: this.data.childId,
          height: this.muacForm.value.height ? Math.trunc(this.muacForm.value.height * Math.pow(10, 1)) / Math.pow(10, 1) : 0,
          weight: this.muacForm.value.weight ? Math.trunc(this.muacForm.value.weight * Math.pow(10, 3)) / Math.pow(10, 3) : 0,
          muac: Math.trunc(this.muacForm.value.muac * Math.pow(10, 1)) / Math.pow(10, 1),
          muacRecordDate: this.muacForm.value.muacDate,
          active_flag: "A"
        }
      };
      console.log(editDto);
      console.log(this.muacForm.value.muacCampNo, 'this.muacForm.value.muacCampNo');
      // if (this.muacForm.valid) {
      this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, editDto).subscribe(res => {
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
      // }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'Child MUAC Save', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  weightKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4) : t;
    console.log(t);
  }
  heightKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2) : t;
    console.log(t);
  }
  muacKeyup(e) {
    var t = e.target.value;
    e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2) : t;
    console.log(t);
  }
}
AddChildMuacComponent.ɵfac = function AddChildMuacComponent_Factory(t) {
  return new (t || AddChildMuacComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_1__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_muac_register_muac_register_service__WEBPACK_IMPORTED_MODULE_4__.MuacRegisterService));
};
AddChildMuacComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddChildMuacComponent,
  selectors: [["app-add-child-muac"]],
  decls: 46,
  vars: 16,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["for", "muacCampNo"], ["formControlName", "muacCampNo", "id", "muacCampNo", 1, "form-select", 3, "change"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "muacDate"], [1, "text-danger"], ["type", "date", "formControlName", "muacDate", 1, "form-control", 3, "min", "max", "ngClass", "keydown"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "height"], ["type", "text", "placeholder", "Enter height", "formControlName", "height", 1, "form-control", 3, "keypress", "keyup"], ["for", "weight"], ["type", "text", "placeholder", "Enter weight", "formControlName", "weight", 1, "form-control", 3, "keypress", "keyup"], ["for", "muac"], ["type", "text", "placeholder", "MUAC", "formControlName", "muac", 1, "form-control", 3, "ngClass", "keypress", "keyup"], [1, "addEditBtn"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"]],
  template: function AddChildMuacComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddChildMuacComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "MUAC Camp No:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddChildMuacComponent_Template_select_change_12_listener($event) {
        return ctx.campNo($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "-- Select MUAC Camp No --");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddChildMuacComponent_option_15_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "MUAC Record Date :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function AddChildMuacComponent_Template_input_keydown_22_listener() {
        return ctx.restrictTypeOfDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddChildMuacComponent_div_23_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6)(25, "div", 7)(26, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Height (cm):");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddChildMuacComponent_Template_input_keypress_28_listener($event) {
        return ctx.validationService.onlyIntegerAndDot($event);
      })("keyup", function AddChildMuacComponent_Template_input_keyup_28_listener($event) {
        return ctx.heightKeyup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 6)(30, "div", 7)(31, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Weight (kg):");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddChildMuacComponent_Template_input_keypress_33_listener($event) {
        return ctx.validationService.onlyIntegerAndDot($event);
      })("keyup", function AddChildMuacComponent_Template_input_keyup_33_listener($event) {
        return ctx.weightKeyup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 6)(35, "div", 7)(36, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "MUAC (cm):\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddChildMuacComponent_Template_input_keypress_40_listener($event) {
        return ctx.validationService.onlyIntegerAndDot($event);
      })("keyup", function AddChildMuacComponent_Template_input_keyup_40_listener($event) {
        return ctx.muacKeyup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AddChildMuacComponent_div_41_Template, 3, 2, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 22)(44, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddChildMuacComponent_Template_button_click_44_listener() {
        return ctx.onAddEdit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.editMode ? "Add" : "Edit", " Child MUAC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.muacForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.muacCampList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.minMuacRecordDate)("max", ctx.maxMuacRecordDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, ctx.f.muacDate.invalid && ctx.f.muacDate.touched, ctx.f.muacDate.valid && (ctx.f.muacDate.dirty || ctx.f.muacDate.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.muacDate.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](13, _c0, ctx.f.muac.invalid && ctx.f.muac.touched, ctx.f.muac.valid && (ctx.f.muac.dirty || ctx.f.muac.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.muac.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.editMode ? "Save" : "Update");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent],
  styles: [".dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n  .mat-dialog-container {\r\n  padding: 10px 17px;\r\n}\r\n\r\n.addEditBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n.dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hbGwtY2hpbGRyZW4tcmVnaXN0ZXIvYWRkLWNoaWxkLW11YWMvYWRkLWNoaWxkLW11YWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMTdweDtcclxufVxyXG5cclxuLmFkZEVkaXRCdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 93599:
/*!************************************************************************************!*\
  !*** ./src/app/modules/all-children-register/all-child-register-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllChildRegisterRoutingModule": () => (/* binding */ AllChildRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _all_child_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-child-register.component */ 65461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _all_child_register_component__WEBPACK_IMPORTED_MODULE_0__.AllChildRegisterComponent
}];
class AllChildRegisterRoutingModule {}
AllChildRegisterRoutingModule.ɵfac = function AllChildRegisterRoutingModule_Factory(t) {
  return new (t || AllChildRegisterRoutingModule)();
};
AllChildRegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AllChildRegisterRoutingModule
});
AllChildRegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllChildRegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 65461:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/all-children-register/all-child-register.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllChildRegisterComponent": () => (/* binding */ AllChildRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_muaclist_view_muaclist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-muaclist/view-muaclist.component */ 6463);
/* harmony import */ var _add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-child-muac/add-child-muac.component */ 1349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baseline-survey/baseline-survey.service */ 66200);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ 9991);


















function AllChildRegisterComponent_div_17_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r17.regionName, " ");
  }
}
function AllChildRegisterComponent_div_17_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_div_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllChildRegisterComponent_div_17_div_10_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.f.region.errors.required);
  }
}
function AllChildRegisterComponent_div_17_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r19.branchName, " ");
  }
}
function AllChildRegisterComponent_div_17_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_div_17_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllChildRegisterComponent_div_17_div_20_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.f.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function AllChildRegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 17)(2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllChildRegisterComponent_div_17_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AllChildRegisterComponent_div_17_option_9_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AllChildRegisterComponent_div_17_div_10_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 17)(12, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllChildRegisterComponent_div_17_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, AllChildRegisterComponent_div_17_option_19_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, AllChildRegisterComponent_div_17_div_20_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, ctx_r0.f.region.invalid && ctx_r0.f.region.touched, ctx_r0.f.region.valid && (ctx_r0.f.region.dirty || ctx_r0.f.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r0.f.branch.invalid && ctx_r0.f.branch.touched, ctx_r0.f.branch.valid && (ctx_r0.f.branch.dirty || ctx_r0.f.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.f.branch.errors);
  }
}
function AllChildRegisterComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r24.blockName, " ");
  }
}
function AllChildRegisterComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllChildRegisterComponent_div_29_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.f.block.errors.required);
  }
}
function AllChildRegisterComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r26.name, " ");
  }
}
function AllChildRegisterComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllChildRegisterComponent_div_39_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.f.gp.errors.required);
  }
}
function AllChildRegisterComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r28.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r28.villageName, " ");
  }
}
function AllChildRegisterComponent_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AllChildRegisterComponent_div_49_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.f.gram.errors.required);
  }
}
function AllChildRegisterComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Children Currently between 6m to 5yr ");
  }
}
function AllChildRegisterComponent_ng_template_53_tr_37_i_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllChildRegisterComponent_ng_template_53_tr_37_i_20_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.openCreateChild(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_ng_template_53_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, AllChildRegisterComponent_ng_template_53_tr_37_i_20_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllChildRegisterComponent_ng_template_53_tr_37_Template_i_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.openViewChild(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r30.p - 1) * 6 + i_r32 + 1 ? (ctx_r30.p - 1) * 6 + i_r32 + 1 : i_r32 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r31.firstName, " ", item_r31.middleName, " ", item_r31.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.latestMuacValue ? item_r31.latestMuacValue : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r31.latestMuacTag == null ? "-" : item_r31.latestMuacTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](item_r31.latestMuacIndicatorName == "RED" ? "danger" : item_r31.latestMuacIndicatorName == "GREEN" ? "success" : item_r31.latestMuacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r30.createMode);
  }
}
const _c1 = function (a1) {
  return {
    itemsPerPage: 6,
    currentPage: a1
  };
};
function AllChildRegisterComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "table", 42)(4, "thead")(5, "tr")(6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Mother Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Last MUAC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Latest");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, AllChildRegisterComponent_ng_template_53_tr_37_Template, 22, 14, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AllChildRegisterComponent_ng_template_53_Template_pagination_controls_pageChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r39.p = $event);
    })("pageBoundsCorrection", function AllChildRegisterComponent_ng_template_53_Template_pagination_controls_pageBoundsCorrection_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](38, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](39, 4, ctx_r8.childrenBetween6And59Months, ctx_r8.acrSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx_r8.p)));
  }
}
function AllChildRegisterComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " All Other Children in ACR ");
  }
}
function AllChildRegisterComponent_ng_template_56_tr_33_i_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllChildRegisterComponent_ng_template_56_tr_33_i_18_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48);
      const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.openCreateChild(item_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function AllChildRegisterComponent_ng_template_56_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, AllChildRegisterComponent_ng_template_56_tr_33_i_18_Template, 1, 0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllChildRegisterComponent_ng_template_56_tr_33_Template_i_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const item_r43 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.openViewChild(item_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r42.p - 1) * 6 + i_r44 + 1 ? (ctx_r42.p - 1) * 6 + i_r44 + 1 : i_r44 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r43.firstName, " ", item_r43.middleName, " ", item_r43.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.latestMuacValue ? item_r43.latestMuacValue : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](item_r43.latestMuacIndicatorName == "RED" ? "danger" : item_r43.latestMuacIndicatorName == "GREEN" ? "success" : item_r43.latestMuacIndicatorName == "YELLOW" ? "warning" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r42.createMode);
  }
}
function AllChildRegisterComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "table", 54)(4, "thead")(5, "tr")(6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Mother Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Last MUAC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, AllChildRegisterComponent_ng_template_56_tr_33_Template, 20, 13, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AllChildRegisterComponent_ng_template_56_Template_pagination_controls_pageChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.p = $event);
    })("pageBoundsCorrection", function AllChildRegisterComponent_ng_template_56_Template_pagination_controls_pageBoundsCorrection_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r53.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](34, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](35, 4, ctx_r10.childrenWRTPsdOrBoD, ctx_r10.acrSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx_r10.p)));
  }
}
function AllChildRegisterComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, " Other Children ");
  }
}
function AllChildRegisterComponent_ng_template_59_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r54.p - 1) * 6 + i_r56 + 1 ? (ctx_r54.p - 1) * 6 + i_r56 + 1 : i_r56 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r55.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("", item_r55.firstName, " ", item_r55.middleName, " ", item_r55.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r55.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r55.childName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r55.childAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r55.latestMuacValue ? item_r55.latestMuacValue : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](item_r55.latestMuacIndicatorName == "RED" ? "danger" : item_r55.latestMuacIndicatorName == "GREEN" ? "success" : item_r55.latestMuacIndicatorName == "YELLOW" ? "warning" : null);
  }
}
function AllChildRegisterComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "table", 54)(4, "thead")(5, "tr")(6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "SL");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Family ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Mother Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Child Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Last MUAC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " collected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AllChildRegisterComponent_ng_template_59_tr_31_Template, 17, 12, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "pagination-controls", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AllChildRegisterComponent_ng_template_59_Template_pagination_controls_pageChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.p = $event);
    })("pageBoundsCorrection", function AllChildRegisterComponent_ng_template_59_Template_pagination_controls_pageBoundsCorrection_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](32, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](33, 4, ctx_r12.ineligibleChildren, ctx_r12.acrSearch), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, ctx_r12.p)));
  }
}
class AllChildRegisterComponent {
  constructor(httpService, http, fb, sidebarService, baselineService, dialog, router, validationService, toaster) {
    this.httpService = httpService;
    this.http = http;
    this.fb = fb;
    this.sidebarService = sidebarService;
    this.baselineService = baselineService;
    this.dialog = dialog;
    this.router = router;
    this.validationService = validationService;
    this.toaster = toaster;
    this.childrenBetween6And59Months = [];
    this.childrenWRTPsdOrBoD = [];
    this.ineligibleChildren = [];
    this.regionList = [];
    this.branchList = [];
    this.villagesOfBranch = [];
    this.gpDtoList = [];
    this.villageDtoList = [];
    this.ssList = [];
    this.swasthyaSahayika = [];
    this.index = 0;
    this.loader = true;
    this.page = 1;
    this.pageSize = 6;
  }
  ngDoCheck() {
    this.searchFullscreen = this.validationService.val;
  }
  ngOnInit() {
    this.createForm();
    // this.getChildrenList();
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
    });
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(item => item.subFunctionMasterId == 105 || item.subFunctionMasterId == 106 || item.subFunctionMasterId == 107 || item.subFunctionMasterId == 108)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/acr']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 105)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }
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
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
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
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
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
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.gpDtoList = [];
      this.villageDtoList = [];
    }
  }
  changeGp(gpName) {
    this.villageDtoList = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == gpName)?.villageDtoList;
    this.selectedGp = this.locationForm.get('gp').value;
    this.locationForm.controls.gram.setValue('');
    if (this.locationForm.value.gp == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
      this.villageDtoList = [];
    }
  }
  changeVillage(villageId) {
    this.villageMasterId = villageId;
    // this.villageMasterId = this.villagesOfBranch.find(block => block.blockName == this.selectedBlock)?.gpDtoList.find(gp => gp.name == this.selectedGp)?.villageDtoList.find(vill => vill.villageName == villagename)?.villageMasterId;
    this.getChildrenList(this.villageMasterId);
    if (this.locationForm.value.gram == '') {
      this.childrenBetween6And59Months = [];
      this.childrenWRTPsdOrBoD = [];
      this.ineligibleChildren = [];
    }
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
  getChildrenList(villageMasterId) {
    this.villageMasterId = villageMasterId;
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      villageMasterId: villageMasterId
    };
    this.loader = false;
    this.httpService.getChildrenRegister(req).subscribe(res => {
      this.childrenBetween6And59Months = res.responseObject?.eligibleChildren?.childrenBetween6And59Months;
      this.childrenWRTPsdOrBoD = res.responseObject?.eligibleChildren?.childrenWRTPsdOrBoD;
      this.ineligibleChildren = res.responseObject?.ineligibleChildren;
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });
  }
  tabChanged(tabChangeEvent) {
    this.index = tabChangeEvent.index;
  }
  openCreateChild(childDetails) {
    const dialogRef = this.dialog.open(_add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_1__.AddChildMuacComponent, {
      width: '500px',
      height: '550px',
      data: {
        editMode: true,
        childId: childDetails.childDetailId,
        childDob: childDetails.dob
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
      //this.viewMuaclistComponent.viewMuacChildList();
    });
  }

  openViewChild(childDetails) {
    const dialogRef = this.dialog.open(_view_muaclist_view_muaclist_component__WEBPACK_IMPORTED_MODULE_0__.ViewMuaclistComponent, {
      width: '950px',
      height: '400px',
      data: {
        childId: childDetails.childDetailId,
        childDob: childDetails.dob
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getChildrenList(this.villageMasterId);
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
AllChildRegisterComponent.ɵfac = function AllChildRegisterComponent_Factory(t) {
  return new (t || AllChildRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_baseline_survey_baseline_survey_service__WEBPACK_IMPORTED_MODULE_4__.BaselineSurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
};
AllChildRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AllChildRegisterComponent,
  selectors: [["app-all-child-register"]],
  decls: 60,
  vars: 23,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "page-title"], [1, "box_right", "d-flex", "lms_block", "col-md-6"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "Search acr info here...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["animationDuration", "500ms", 3, "selectedTabChange"], ["mat-tab-label", ""], ["matTabContent", ""], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", "padd", 2, "table-layout", "fixed"], [2, "width", "4%"], [2, "width", "12%"], [2, "width", "15%"], [2, "width", "6%"], [2, "width", "5%"], [2, "width", "8%"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], [1, "fa", "fa-circle", "fa-lg"], ["class", "fa fa-plus-circle fa-lg", "title", "Add Child MUAC", 3, "click", 4, "ngIf"], ["title", "View Child", 1, "fa", "fa-eye", "fa-lg", 3, "click"], ["title", "Add Child MUAC", 1, "fa", "fa-plus-circle", "fa-lg", 3, "click"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "7%"], ["class", "fa fa-plus-circle fa-lg", "title", "Add Child", 3, "click", 4, "ngIf"], ["title", "Add Child", 1, "fa", "fa-plus-circle", "fa-lg", 3, "click"], [1, "fa", "fa", "fa-circle", "fa-lg"]],
  template: function AllChildRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "All Children Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10)(12, "div", 11)(13, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AllChildRegisterComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.acrSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, AllChildRegisterComponent_div_17_Template, 21, 12, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 2)(20, "div", 17)(21, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllChildRegisterComponent_Template_select_change_25_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AllChildRegisterComponent_option_28_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, AllChildRegisterComponent_div_29_Template, 2, 1, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 17)(31, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllChildRegisterComponent_Template_select_change_35_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, AllChildRegisterComponent_option_38_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, AllChildRegisterComponent_div_39_Template, 2, 1, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 17)(41, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "select", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AllChildRegisterComponent_Template_select_change_45_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, AllChildRegisterComponent_option_48_Template, 2, 2, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, AllChildRegisterComponent_div_49_Template, 2, 1, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "mat-tab-group", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedTabChange", function AllChildRegisterComponent_Template_mat_tab_group_selectedTabChange_50_listener($event) {
        return ctx.tabChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, AllChildRegisterComponent_ng_template_52_Template, 1, 0, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, AllChildRegisterComponent_ng_template_53_Template, 41, 9, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, AllChildRegisterComponent_ng_template_55_Template, 1, 0, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, AllChildRegisterComponent_ng_template_56_Template, 37, 9, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, AllChildRegisterComponent_ng_template_58_Template, 1, 0, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, AllChildRegisterComponent_ng_template_59_Template, 35, 9, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.acrSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.locationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](14, _c0, ctx.f.block.invalid && ctx.f.block.touched, ctx.f.block.valid && (ctx.f.block.dirty || ctx.f.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](17, _c0, ctx.f.gp.invalid && ctx.f.gp.touched, ctx.f.gp.valid && (ctx.f.gp.dirty || ctx.f.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.gpDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](20, _c0, ctx.f.gram.invalid && ctx.f.gram.touched, ctx.f.gram.valid && (ctx.f.gram.dirty || ctx.f.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villageDtoList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.f.gram.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabContent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe],
  styles: [".mat-tab-group.mat-primary .mat-ink-bar {\r\n  background-color: #499 !important;\r\n}\r\n  .mat-tab-label .mat-tab-label-content {\r\n  font-size: medium;\r\n}\r\n\r\n  .mat-tab-header .mat-tab-labels {\r\n  justify-content: start;\r\n}\r\n\r\n.QA_table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 17px 10px;\r\n}\r\n\r\n.fa-eye[_ngcontent-%COMP%]:hover, .fa-plus-circle[_ngcontent-%COMP%]:hover {\r\n  color: lightgreen !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\r\n.fa-eye[_ngcontent-%COMP%]:hover {\r\n  color: #70caf7 !important;\r\n  cursor: pointer;\r\n  font-size: 1.8em;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 374px;\r\n  height: 63%;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 678px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 60%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  margin-left: 525px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 685px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 140px;\r\n}\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\r\n  .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin-left: 344px;\r\n  }\r\n  .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding-right: 1px;\r\n    margin-left: 460px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 60%;\r\n    background: transparent;\r\n    font-size: 12px;\r\n    padding-left: 19px;\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    border: 0;\r\n  }\r\n\r\n  .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 74%;\r\n    margin-left: 460px;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n  }\r\n  \r\n  .serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    margin-left: -40px;\r\n  }\r\n}\r\n\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\r\n  color: #cd0202;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\r\n  color: #24d524;\r\n}\r\n.QA_section[_ngcontent-%COMP%]   .QA_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\r\n  color: #f7cd00;\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hbGwtY2hpbGRyZW4tcmVnaXN0ZXIvYWxsLWNoaWxkLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTkgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWxzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4uUUFfdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBwYWRkaW5nOiAxN3B4IDEwcHg7XHJcbn1cclxuXHJcbi5mYS1leWU6aG92ZXIsXHJcbi5mYS1wbHVzLWNpcmNsZTpob3ZlciB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjb2xvcjogIzcwY2FmNyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNzRweDtcclxuICBoZWlnaHQ6IDYzJTtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2NzhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZGFhYjg7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MjVweDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICB3aWR0aDogNzQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2ODVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5zZWFyY2hfaW5uZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDRweDtcclxuICB9XHJcbiAgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTlweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMmRhYWI4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaF9pbm5lcl9mdWxsc2NyZWVuIGlucHV0IHtcclxuICAgIHdpZHRoOiA3NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDYwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmRhYWI4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXIgYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMyZGFhYjg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLmRhbmdlciB7XHJcbiAgY29sb3I6ICNjZDAyMDI7XHJcbn1cclxuLlFBX3NlY3Rpb24gLlFBX3RhYmxlIHRib2R5IC5zdWNjZXNzIHtcclxuICBjb2xvcjogIzI0ZDUyNDtcclxufVxyXG4uUUFfc2VjdGlvbiAuUUFfdGFibGUgdGJvZHkgLndhcm5pbmcge1xyXG4gIGNvbG9yOiAjZjdjZDAwO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16134:
/*!****************************************************************************!*\
  !*** ./src/app/modules/all-children-register/all-child-register.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllChildRegisterModule": () => (/* binding */ AllChildRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _all_child_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-child-register-routing.module */ 93599);
/* harmony import */ var _all_child_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-child-register.component */ 65461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _view_muaclist_view_muaclist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-muaclist/view-muaclist.component */ 6463);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-child-muac/add-child-muac.component */ 1349);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);













class AllChildRegisterModule {}
AllChildRegisterModule.ɵfac = function AllChildRegisterModule_Factory(t) {
  return new (t || AllChildRegisterModule)();
};
AllChildRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AllChildRegisterModule
});
AllChildRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _all_child_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllChildRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AllChildRegisterModule, {
    declarations: [_all_child_register_component__WEBPACK_IMPORTED_MODULE_1__.AllChildRegisterComponent, _view_muaclist_view_muaclist_component__WEBPACK_IMPORTED_MODULE_2__.ViewMuaclistComponent, _add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_3__.AddChildMuacComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _all_child_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllChildRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_5__.LoaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 6463:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/all-children-register/view-muaclist/view-muaclist.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMuaclistComponent": () => (/* binding */ ViewMuaclistComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-child-muac/add-child-muac.component */ 1349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










function ViewMuaclistComponent_div_7_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewMuaclistComponent_div_7_tr_20_td_13_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewMuaclistComponent_div_7_tr_20_td_13_div_1_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.onEdit(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewMuaclistComponent_div_7_tr_20_td_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ViewMuaclistComponent_div_7_tr_20_td_13_div_1_i_1_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.updateMode);
  }
}
function ViewMuaclistComponent_div_7_tr_20_td_13_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewMuaclistComponent_div_7_tr_20_td_13_div_2_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.onDelete(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewMuaclistComponent_div_7_tr_20_td_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ViewMuaclistComponent_div_7_tr_20_td_13_div_2_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.deleteMode);
  }
}
function ViewMuaclistComponent_div_7_tr_20_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ViewMuaclistComponent_div_7_tr_20_td_13_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ViewMuaclistComponent_div_7_tr_20_td_13_div_2_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.muacRegisterTag == "PEM" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.muacRegisterTag == "PEM" ? false : true);
  }
}
function ViewMuaclistComponent_div_7_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ViewMuaclistComponent_div_7_tr_20_td_13_Template, 3, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.muacRecordDate.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.muacCampDto.muacCampNumber ? item_r5.muacCampDto.muacCampNumber : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.muac);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.muacRegisterTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.disableAction);
  }
}
function ViewMuaclistComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "table", 10)(4, "thead", 11)(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "MUAC Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "MUAC Camp No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "MUAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ViewMuaclistComponent_div_7_th_18_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ViewMuaclistComponent_div_7_tr_20_Template, 14, 7, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.disableAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.childMuac);
  }
}
function ViewMuaclistComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Records Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Add a new record.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ViewMuaclistComponent {
  constructor(dialogRef, dialog, data, httpService, http, toaster, sidebarService, confirmationDialogService) {
    this.dialogRef = dialogRef;
    this.dialog = dialog;
    this.data = data;
    this.httpService = httpService;
    this.http = http;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.confirmationDialogService = confirmationDialogService;
    this.childMuac = [];
  }
  ngOnInit() {
    this.childId = this.data.childId;
    this.viewMuacChildList();
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 105)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'Registers')?.subMenuDetailList.find(subFunctionMasterId => subFunctionMasterId.subFunctionMasterId == 105)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
    this.disableAction = this.updateMode == false && this.deleteMode == false ? false : true;
  }
  viewMuacChildList() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data.childId
    };
    this.http.post(`${this.httpService.baseURL}muaccamp/viewMuacRegistersOfAChild`, Dto).subscribe(res => {
      this.childMuac = res.responseObject;
      console.log(this.childMuac);
    });
  }
  onEdit(index) {
    console.log(this.childMuac[index]);
    const dialogRef = this.dialog.open(_add_child_muac_add_child_muac_component__WEBPACK_IMPORTED_MODULE_0__.AddChildMuacComponent, {
      width: '500px',
      height: '550px',
      data: {
        editMode: false,
        muacRecordDate: this.childMuac[index].muacRecordDate,
        muacRegisterId: this.childMuac[index].muacRegisterId,
        childId: this.childId,
        muacCampNumber: this.childMuac[index].muacCampDto.muacCampId,
        height: this.childMuac[index].height,
        weight: this.childMuac[index].weight,
        muac: this.childMuac[index].muac,
        childDob: this.data.childDob,
        disableCamp: this.childMuac[index].muacRegisterTag
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.viewMuacChildList();
    });
  }
  onDelete(index) {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      muacDataDto: {
        muacRegisterId: this.childMuac[index].muacRegisterId,
        muacCampId: 'null',
        childId: this.data.childId,
        height: this.childMuac[index].height,
        weight: this.childMuac[index].weight,
        muac: this.childMuac[index].muac,
        active_flag: "D"
      }
    };
    this.confirmationDialogService.confirm('', 'Do you want to delete ?').then(() => {
      this.http.post(`${this.httpService.baseURL}acr/muac/saveOrUpdate`, Dto).subscribe(res => {
        if (res.status) {
          this.viewMuacChildList();
          this.showSuccess('Delete');
        } else {
          this.showError(res.message);
        }
      });
    }).catch(() => '');
  }
  closeDialog() {
    this.dialogRef.close();
  }
  showSuccess(message) {
    this.toaster.success(message, 'Child MUAC delete', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000
    });
  }
}
ViewMuaclistComponent.ɵfac = function ViewMuaclistComponent_Factory(t) {
  return new (t || ViewMuaclistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService));
};
ViewMuaclistComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ViewMuaclistComponent,
  selectors: [["app-view-muaclist"]],
  decls: 10,
  vars: 2,
  consts: [["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], ["class", "white_box_tittle list_header", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "white_box_tittle", "list_header"], ["id", "beneficiaryScroll", 1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], ["id", "table_wrapper"], ["style", "width:20%;", 4, "ngIf"], [2, "text-align", "center", "padding", "4px"], [4, "ngFor", "ngForOf"], [2, "width", "20%"], ["style", "display: inline-block;", 4, "ngIf"], [2, "display", "inline-block"], ["class", "fas fa-edit", "title", "Edit MUAC", 3, "click", 4, "ngIf"], ["title", "Edit MUAC", 1, "fas", "fa-edit", 3, "click"], ["class", "fas fa-trash", "title", "Delete MUAC", 3, "click", 4, "ngIf"], ["title", "Delete MUAC", 1, "fas", "fa-trash", 3, "click"], [1, "empty_message_div"], [1, "empty-state_message"], [1, "empty-state_help"]],
  template: function ViewMuaclistComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "All MUAC List");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewMuaclistComponent_Template_i_click_5_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ViewMuaclistComponent_div_7_Template, 21, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ViewMuaclistComponent_ng_template_8_Template, 5, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.childMuac.length !== 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent],
  styles: [".dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n.dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%] {\r\n  border-bottom: 0 solid transparent;\r\n  background-color: #fff;\r\n  padding: 17px 30px;\r\n  line-height: 16px;\r\n  border: 0px solid transparent;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-transform: capitalize;\r\n  font-family: \"Rajdhani\", sans-serif;\r\n  border: 0;\r\n  background: #499;\r\n  padding: 12px;\r\n  text-align: center;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n#beneficiaryScroll[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 42vh;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hbGwtY2hpbGRyZW4tcmVnaXN0ZXIvdmlldy1tdWFjbGlzdC92aWV3LW11YWNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzQ5OTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbiNiZW5lZmljaWFyeVNjcm9sbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWF4LWhlaWdodDogNDJ2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_all-children-register_all-child-register_module_ts.js.map