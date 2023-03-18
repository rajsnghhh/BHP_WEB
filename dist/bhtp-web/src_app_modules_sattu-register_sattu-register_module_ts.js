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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sattu-register.service */ 18295);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);











function CreateSattuRegisterComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create Sattu Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CreateSattuRegisterComponent_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit Sattu Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CreateSattuRegisterComponent_div_46_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", reason_r5.sattu_non_preparing_reasons_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", reason_r5.reason_name, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function CreateSattuRegisterComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "select", 25)(3, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "-- Select Reason--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateSattuRegisterComponent_div_46_option_5_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx_r2.s.reason.invalid && ctx_r2.s.reason.touched, ctx_r2.s.reason.valid && (ctx_r2.s.reason.dirty || ctx_r2.s.reason.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.prequisiteDetails);
  }
}
function CreateSattuRegisterComponent_div_47_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", reason_r7.sattu_non_preparing_reasons_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", reason_r7.reason_name, " ");
  }
}
function CreateSattuRegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "select", 29)(3, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "-- Select Reason--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateSattuRegisterComponent_div_47_option_5_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ctx_r3.s.reason.invalid && ctx_r3.s.reason.touched, ctx_r3.s.reason.valid && (ctx_r3.s.reason.dirty || ctx_r3.s.reason.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.prequisiteDetails);
  }
}
class CreateSattuRegisterComponent {
  constructor(fb, httpService, sattuService, data, toaster, dialogRef, modalService) {
    this.fb = fb;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.data = data;
    this.toaster = toaster;
    this.dialogRef = dialogRef;
    this.modalService = modalService;
    this.prequisiteDetails = [];
    this.childDetailLists = [];
    this.loader = true;
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data);
    this.famNo = this.data?.familyDetails?.familyNumber;
    this.createSattu_Form();
    if (this.data?.familyDetails?.sattuRegisterMasterId) {
      if (this.data?.familyDetails?.sattuPreparingFrequency == 'Regular') {
        this.setFrequency = 'R';
      } else if (this.data?.familyDetails?.sattuPreparingFrequency == 'Irregular') {
        this.setFrequency = 'I';
      } else {
        this.setFrequency = 'NP';
      }
    }
    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyId: this.data?.familyDetails?.familyDetailId
    };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe(res => {
      this.prequisiteDetails = res.responseObject?.sattuNotPreparingReasons;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  preparingSattu(e) {
    console.log(e);
    if (e == 'Regular') {
      this.setFrequency = 'R';
    } else if (e == 'Irregular') {
      this.setFrequency = 'I';
    } else {
      this.setFrequency = 'NP';
    }
    console.log(this.setFrequency);
  }
  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: [this.data?.familyDetails?.sattuRegisterMasterId ? this.data?.familyDetails?.sattuOrientationDate ? 'Y' : 'N' : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      preparingSattu: [this.data?.familyDetails?.sattuPreparingFrequency ? this.data?.familyDetails?.sattuPreparingFrequency.includes('No') ? "NP" : this.data?.familyDetails?.sattuPreparingFrequency : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      reason: [this.data?.familyDetails?.sattuNonPreparingReasonId ? this.data?.familyDetails?.sattuNonPreparingReasonId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    console.log(this.data?.familyDetails?.sattuOrientationDate);
    if (this.data?.familyDetails?.sattuOrientationDate != null) {
      this.createSattuForm.controls['orientation'].disable();
      this.createSattuForm.controls.orientation.setValue('Y');
    }
    if (this.data?.familyDetails?.sattuRegisterMasterId) {
      this.createSattuForm.controls['orientation'].enable();
    }
    console.log(this.createSattuForm.value.preparingSattu);
  }
  get s() {
    return this.createSattuForm.controls;
  }
  sattuSaveDisabled() {
    let flag = true;
    if (this.data?.familyDetails?.sattuOrientationDate == null) {
      if (!this.createSattuForm.value.orientation) {
        flag = false;
      }
    }
    if (!this.createSattuForm.value.preparingSattu) {
      flag = false;
    }
    if (this.createSattuForm.value.preparingSattu == 'NP') {
      if (!this.createSattuForm.value.reason) {
        flag = false;
      }
    }
    return flag;
  }
  saveSattuRegister() {
    console.log(this.data);
    if (!this.data?.familyDetails?.sattuRegisterMasterId) {
      this.childDetailLists.push(this.data?.familyDetails?.below5YearsChildren.concat(this.data?.familyDetails?.otherChildren).concat(this.data?.familyDetails?.adolescentGilrChildren));
      console.log(this.childDetailLists);
      var childSetArray = [];
      this.childDetailLists[0].forEach(x => {
        childSetArray.push({
          sattuRegisterChildMapId: 0,
          childDetailId: x.childDetailId,
          childName: x.childName,
          dob: x.dob,
          age: x.age,
          sex: x.sex,
          presentInPem: x.presentInPem,
          latestMuacRegisterId: x.latestMuacRegisterId,
          latestMuac: x.latestMuac,
          latestMuacRegisterTag: x.latestMuacRegisterTag,
          latestMuacIndicatorName: x.latestMuacIndicatorName,
          active_flag: 'A'
        });
      });
      console.log(childSetArray);
      console.log(this.childDetailLists);
      let saveReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        sattuRegisterMasterId: 0,
        familyId: this.data?.familyDetails?.familyDetailId,
        sattuOrientationDate: '',
        visitDate: this.data?.visitDate,
        sattuPreparingFrequency: this.setFrequency,
        sattuNonPreparingReasonId: this.setFrequency == 'NP' ? this.createSattuForm.value.reason : null,
        presentInPregnantWoman: this.data?.familyDetails?.presentInPregnantWoman,
        presentInLactatingMother: this.data?.familyDetails?.presentInLactatingMother,
        hasChildPresentInPem: this.data?.familyDetails?.hasChildPresentInPem,
        has2to5yearsOldChildren: this.data?.familyDetails?.has2to5yearsoldChildren,
        hasAdolescentGirlChildren: this.data?.familyDetails?.hasAdolescentGirlChildren,
        active_flag: 'A',
        childDetailList: childSetArray
      };
      if (this.data?.familyDetails?.sattuOrientationDate != null || this.createSattuForm.value.orientation == 'Y') {
        saveReg.sattuOrientationDate = this.data?.familyDetails?.sattuOrientationDate ? this.data?.familyDetails?.sattuOrientationDate : this.data?.visitDate;
      } else if (this.createSattuForm.value.orientation == 'N') {
        saveReg.sattuOrientationDate = null;
      }
      console.log(saveReg);
      this.loader = false;
      this.sattuService.saveOrUpdate(saveReg).subscribe(res => {
        this.loader = true;
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.closeDialog();
        } else {
          this.showError(res.message);
        }
      });
    } else {
      console.log(this.data?.familyDetails);
      let updateReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        sattuRegisterMasterId: this.data?.familyDetails?.sattuRegisterMasterId,
        visitDate: this.data?.familyDetails?.visitDate,
        familyId: this.data?.familyDetails?.familyDetailId,
        active_flag: 'A',
        sattuPreparingFrequency: this.setFrequency,
        sattuNonPreparingReasonId: this.createSattuForm.value.reason ? this.createSattuForm.value.reason : null,
        sattuFamilyOrientationId: this.data?.familyDetails.sattuFamilyOrientationId,
        sattuOrientationDate: ''
      };
      if (this.createSattuForm.value.orientation == 'Y') {
        updateReg.sattuOrientationDate = this.data?.familyDetails?.sattuOrientationDate ? this.data?.familyDetails?.sattuOrientationDate : this.data?.visitDate;
      } else {
        updateReg.sattuOrientationDate = null;
      }
      console.log(updateReg, 'updateReg');
      this.loader = false;
      this.sattuService.saveOrUpdate(updateReg).subscribe(res => {
        this.loader = true;
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.closeDialog();
          let historyObj = {
            dataAccessDTO: this.httpService.dataAccessDTO,
            familyId: this.data.familyDetails.familyDetailId
          };
          this.sattuService.getSattuRegisterHistoryOfAFamily(historyObj).subscribe(res => {
            console.log(res.responseObject);
          });
        } else {
          this.showError(res.message);
        }
      });
    }
  }
  showSuccess(message) {
    this.toaster.success(message, 'Sattu Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Sattu Register', {
      timeOut: 3000
    });
  }
}
CreateSattuRegisterComponent.ɵfac = function CreateSattuRegisterComponent_Factory(t) {
  return new (t || CreateSattuRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_1__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
};
CreateSattuRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateSattuRegisterComponent,
  selectors: [["app-create-sattu-register"]],
  decls: 53,
  vars: 8,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], ["class", "dialog-title", 4, "ngIf"], [2, "margin-left", "-340px", "margin-top", "7px"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "form-signin", 3, "formGroup"], [1, "row"], [1, "form-group", "col-md"], ["for", "orientation"], [1, "text-danger"], [1, "form-check-inline"], ["type", "radio", "name", "orientation", "id", "yes", "value", "Y", "formControlName", "orientation", 1, "form-check-input"], ["for", "orientation", 1, "form-check-label"], ["type", "radio", "name", "orientation", "id", "no", "value", "N", "formControlName", "orientation", 1, "form-check-input"], ["for", "preparing "], ["type", "radio", "name", "preparingSattu", "id", "", "value", "Regular", "formControlName", "preparingSattu", 1, "form-check-input", 2, "margin-top", "33px", 3, "change"], ["for", "preparingSattu", 1, "form-check-label"], ["type", "radio", "name", "preparingSattu", "id", "", "value", "Irregular", "formControlName", "preparingSattu", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "preparingSattu", "id", "", "value", "NP", "formControlName", "preparingSattu", 1, "form-check-input", 3, "change"], ["class", "form-check-inline", 4, "ngIf"], [1, "col-md"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "disabled", "click"], [1, "dialog-title"], ["formControlName", "reason", "id", "reason", 1, "form-select", 2, "visibility", "hidden", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "reason", "id", "reason", 1, "form-select", 3, "ngClass"]],
  template: function CreateSattuRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateSattuRegisterComponent_h3_3_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CreateSattuRegisterComponent_h3_4_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateSattuRegisterComponent_Template_i_click_8_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "form", 7)(12, "div", 8)(13, "div", 9)(14, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Received Orientation For Preparing Sattu?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "*\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " \u00A0\u00A0Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " \u00A0\u00A0No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8)(28, "div", 9)(29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Family preparing Sattu?\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 12)(34, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_34_listener($event) {
        return ctx.preparingSattu($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " \u00A0\u00A0Regularly");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_39_listener($event) {
        return ctx.preparingSattu($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " \u00A0\u00A0Irregularly");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 12)(43, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreateSattuRegisterComponent_Template_input_change_43_listener($event) {
        return ctx.preparingSattu($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " \u00A0\u00A0Not Preparing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CreateSattuRegisterComponent_div_46_Template, 6, 5, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, CreateSattuRegisterComponent_div_47_Template, 6, 5, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 8)(50, "div", 22)(51, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateSattuRegisterComponent_Template_button_click_51_listener() {
        return ctx.saveSattuRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.familyDetails == null ? null : ctx.data.familyDetails.sattuRegisterMasterId));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.familyDetails == null ? null : ctx.data.familyDetails.sattuRegisterMasterId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Family No : ", ctx.famNo, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.createSattuForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.createSattuForm.value.preparingSattu != "NP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.createSattuForm.value.preparingSattu == "NP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.sattuSaveDisabled());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n  background-color: #499;\r\n  display: inline-block;\r\n  padding: 10px;\r\n  position: relative;\r\n  color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -14px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid #277;\r\n  border-right: 7px solid #277;\r\n  border-bottom: 7px solid #0000;\r\n  border-left: 7px solid #0000;\r\n}\r\n\r\n  .mat-dialog-container {\r\n  padding: 12px 17px;\r\n  overflow: hidden;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 0rem;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci9jcmVhdGUtc2F0dHUtcmVnaXN0ZXIvY3JlYXRlLXNhdHR1LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMjc3O1xyXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 13771:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/sattu-register/sattu-record-history/sattu-record-history.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SattuRecordHistoryComponent": () => (/* binding */ SattuRecordHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-sattu-register/create-sattu-register.component */ 62149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sattu-register.service */ 18295);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/confirmation-dialog/confirmation-dialog.service */ 31917);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);











function SattuRecordHistoryComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SattuRecordHistoryComponent_tr_29_td_9_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SattuRecordHistoryComponent_tr_29_td_9_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const history_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.editSattuRecord(history_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SattuRecordHistoryComponent_tr_29_td_9_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SattuRecordHistoryComponent_tr_29_td_9_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const history_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.deleteSattuRecord(history_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SattuRecordHistoryComponent_tr_29_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SattuRecordHistoryComponent_tr_29_td_9_i_1_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SattuRecordHistoryComponent_tr_29_td_9_i_2_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.updateMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.deleteMode);
  }
}
function SattuRecordHistoryComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SattuRecordHistoryComponent_tr_29_td_9_Template, 3, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const history_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r2.visitDate.split("-").reverse().join("-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r2.sattuOrientationDate ? "Y" : "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r2.sattuPreparingFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.updateMode || ctx_r1.deleteMode);
  }
}
class SattuRecordHistoryComponent {
  constructor(data, dialogRef, httpService, sattuService, confirmationDialogService, dialog, toaster, sidebarService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.confirmationDialogService = confirmationDialogService;
    this.dialog = dialog;
    this.toaster = toaster;
    this.sidebarService = sidebarService;
    this.loader = true;
    this.historyRecords = [];
    dialogRef.disableClose = true;
  }
  ngOnInit() {
    console.log(this.data);
    this.showFamNo = this.data.history.familyNumber;
    this.showFamName = this.data.history.familyName;
    this.showGuardianName = this.data.history.husbandOrGuardianName;
    this.history();
    this.updateMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList.find(accessType => accessType.accessType == 'update')?.accessType ? true : false;
    this.deleteMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList.find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }
  history() {
    let historyObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      familyId: this.data.history.familyDetailId
    };
    console.log(historyObj);
    this.loader = false;
    this.sattuService.getSattuRegisterHistoryOfAFamily(historyObj).subscribe(res => {
      this.loader = true;
      this.historyRecords = res.responseObject;
      this.historyRecords.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular';
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')';
        } else {
          x.sattuPreparingFrequency = 'Irregular';
        }
      });
      console.log(this.historyRecords, 'historyRecords');
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
  editSattuRecord(history) {
    console.log(history);
    const dialogRef = this.dialog.open(_create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_0__.CreateSattuRegisterComponent, {
      width: '800px',
      height: '260px',
      data: {
        familyDetails: history,
        visitDate: history.visitDate,
        villageId: this.data.villageId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.history();
    });
  }
  deleteSattuRecord(history) {
    console.log(history);
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this record ?').then(() => this.delete(history)).catch(() => '');
  }
  delete(history) {
    let deleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      sattuRegisterMasterId: history.sattuRegisterMasterId,
      familyId: history.familyDetailId,
      active_flag: 'D'
    };
    this.loader = false;
    this.sattuService.saveOrUpdate(deleteObj).subscribe(res => {
      this.loader = true;
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.history();
      } else {
        this.showError(res.message);
      }
    });
  }
  showSuccess(message) {
    this.toaster.success(message, 'Sattu Register', {
      timeOut: 3000
    });
  }
  showError(message) {
    this.toaster.error(message, 'Sattu Register', {
      timeOut: 3000
    });
  }
}
SattuRecordHistoryComponent.ɵfac = function SattuRecordHistoryComponent_Factory(t) {
  return new (t || SattuRecordHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_2__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService));
};
SattuRecordHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SattuRecordHistoryComponent,
  selectors: [["app-sattu-record-history"]],
  decls: 30,
  vars: 6,
  consts: [[3, "hidden"], ["mat-dialog-title", ""], [1, "dialog-header"], [1, "dialog-title"], [1, "fas", "fa-times", 3, "click"], ["mat-dialog-content", ""], [1, "row"], [1, "col-md-1"], [1, "col-md-10"], ["id", "tbodyrecord"], ["id", "table_wrapper"], ["id", "table_wrapper", 1, "table", "table-striped"], ["id", "header_fixed"], [2, "text-align", "center"], [2, "width", "10%"], [2, "width", "25%"], [2, "width", "40%"], ["style", "width: 15%;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "width", "15%"], ["class", "fas fa-edit", "title", "Edit Sattu Record", 3, "click", 4, "ngIf"], ["class", "fas fa-trash", "title", "Delete Sattu Record", 3, "click", 4, "ngIf"], ["title", "Edit Sattu Record", 1, "fas", "fa-edit", 3, "click"], ["title", "Delete Sattu Record", 1, "fas", "fa-trash", 3, "click"]],
  template: function SattuRecordHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Sattu Record History");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SattuRecordHistoryComponent_Template_i_click_6_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8)(12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "table", 11)(17, "thead", 12)(18, "tr", 13)(19, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Sl. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Last Record Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Received Orientation");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Preparing Sattu");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SattuRecordHistoryComponent_th_27_Template, 2, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tbody", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SattuRecordHistoryComponent_tr_29_Template, 10, 5, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("Family No: ", ctx.showFamNo, " \u00A0\u00A0\u00A0\u00A0\u00A0Family Name: ", ctx.showFamName, "\u00A0\u00A0\u00A0\u00A0\u00A0 Guardian Name: ", ctx.showGuardianName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.updateMode || ctx.deleteMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.historyRecords);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border-bottom: 0 solid transparent;\r\n    background-color: #fff;\r\n    padding: 17px 30px;\r\n    line-height: 16px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n    text-transform: capitalize;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    border: 0;\r\n    background: #499;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 4px;\r\n}\r\n\r\n#tbodyrecord[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 260px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n    background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci9zYXR0dS1yZWNvcmQtaGlzdG9yeS9zYXR0dS1yZWNvcmQtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzI3NztcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyNzc7XHJcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzAwMDA7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMwMDAwO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGhlYWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI3RhYmxlX3dyYXBwZXIgLnRhYmxlIHRib2R5IHRkIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuI3Rib2R5cmVjb3JkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNoZWFkZXJfZml4ZWQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _sattu_record_history_sattu_record_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-record-history/sattu-record-history.component */ 13771);
/* harmony import */ var _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-sattu-family/view-sattu-family.component */ 90812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/sidebar/sidebar.service */ 33542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sattu-register.service */ 18295);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/validation.service */ 12609);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loader/loader.component */ 99996);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/sidebar/sattu-register-search.pipe */ 5891);


















function SattuRegisterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "div", 34)(2, "div", 35)(3, "form", 36)(4, "div", 37)(5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SattuRegisterComponent_div_10_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.sattuSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r0.searchFullscreen ? "search_inner_fullscreen " : " search_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.sattuSearch);
  }
}
function SattuRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SattuRegisterComponent_div_12_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.viewFamilyList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function SattuRegisterComponent_div_14_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const region_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", region_r20.regionMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", region_r20.regionName, " ");
  }
}
function SattuRegisterComponent_div_14_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Region selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SattuRegisterComponent_div_14_div_10_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.m.region.errors.required);
  }
}
function SattuRegisterComponent_div_14_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const branch_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", branch_r22.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", branch_r22.branchName, " ");
  }
}
function SattuRegisterComponent_div_14_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Branch selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_14_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SattuRegisterComponent_div_14_div_20_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r19.m.branch.errors.required);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SattuRegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 6)(2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Region :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SattuRegisterComponent_div_14_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.changeRegion($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "-- Select Region --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SattuRegisterComponent_div_14_option_9_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, SattuRegisterComponent_div_14_div_10_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 6)(12, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Branch :\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SattuRegisterComponent_div_14_Template_select_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.changeBranch($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "-- Select Branch --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, SattuRegisterComponent_div_14_option_19_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, SattuRegisterComponent_div_14_div_20_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](6, _c0, ctx_r3.m.region.invalid && ctx_r3.m.region.touched, ctx_r3.m.region.valid && (ctx_r3.m.region.dirty || ctx_r3.m.region.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.regionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.m.region.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r3.m.branch.invalid && ctx_r3.m.branch.touched, ctx_r3.m.branch.valid && (ctx_r3.m.branch.dirty || ctx_r3.m.branch.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.m.branch.errors);
  }
}
function SattuRegisterComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", block_r27.blockMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", block_r27.blockName, " ");
  }
}
function SattuRegisterComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Block selection is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SattuRegisterComponent_div_25_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.m.block.errors.required);
  }
}
function SattuRegisterComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gp_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", gp_r29.gpMunicipalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", gp_r29.name, " ");
  }
}
function SattuRegisterComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " GP selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SattuRegisterComponent_div_35_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.m.gp.errors.required);
  }
}
function SattuRegisterComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vill_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("value", vill_r31.villageMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", vill_r31.villageName, " ");
  }
}
function SattuRegisterComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Village selection is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function SattuRegisterComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SattuRegisterComponent_div_45_div_1_Template, 2, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.m.gram.errors.required);
  }
}
function SattuRegisterComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" ** Total count of orientation received(", ctx_r10.orientationLength, "), regularly preparing sattu(", ctx_r10.regularLength, "), irregularly preparing sattu(", ctx_r10.irregularLength, ") & not preparing sattu(", ctx_r10.notPreparingLength, ").");
  }
}
function SattuRegisterComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SattuRegisterComponent_tr_80_Template_td_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const sattu_r33 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.familyWiseSattuRecord(sattu_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sattu_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r11.p - 1) * 5 + i_r34 + 1 ? (ctx_r11.p - 1) * 5 + i_r34 + 1 : i_r34 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](sattu_r33.familyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](sattu_r33.familyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](sattu_r33.husbandOrGuardianName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", sattu_r33.visitDate.split("-").reverse().join("-"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](sattu_r33.sattuOrientationDate ? "Y" : "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](sattu_r33.sattuPreparingFrequency);
  }
}
const _c1 = function (a0, a1, a2, a3) {
  return {
    familyNumber: a0,
    familyName: a1,
    husbandOrGuardianName: a2,
    sattuPreparingFrequency: a3
  };
};
const _c2 = function (a1) {
  return {
    itemsPerPage: 5,
    currentPage: a1
  };
};
class SattuRegisterComponent {
  constructor(sidebarService, http, router, fb, httpService, sattuService, modalService, config, validationService, dialog, toaster) {
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
    this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList.find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/sattu-register']) : this.router.navigate(['/error']);
    this.createMode = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList.find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList.find(accessType => accessType.accessType == 'create')?.accessType ? true : false;
  }
  selectVillage_Form() {
    this.selectVillageForm = this.fb.group({
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      block: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      gram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
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
      this.sattuView = [];
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
    this.sattuView = [];
  }
  changeBlock(blockId) {
    console.log(blockId, 'blockId');
    this.gpList = this.villagesOfBranch.find(block => block.blockMasterId == blockId)?.gpDtoList;
    console.log(this.gpList, 'gplist');
    this.selectVillageForm.controls.gp.setValue('');
    this.selectVillageForm.controls.gram.setValue('');
    this.villageList = [];
    this.sattuView = [];
  }
  changeGp(gpId) {
    console.log(gpId, 'GpId');
    this.villageList = this.gpList.find(gp => gp.gpMunicipalId == gpId)?.villageDtoList;
    console.log(this.villageList, 'villageList');
    this.selectVillageForm.controls.gram.setValue('');
    this.sattuView = [];
  }
  changeVillage(villageId) {
    this.sattuView = [];
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
      this.sattuView?.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular';
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')';
        } else {
          x.sattuPreparingFrequency = 'Irregular';
        }
      });
      console.log(this.sattuView, 'sattuView');
      this.orientationLength = this.sattuView?.filter(x => x.sattuOrientationDate != null).length;
      // console.log(this.orientationLength, 'orientationLength');
      this.regularLength = this.sattuView?.filter(x => x.sattuPreparingFrequency == "Regular").length;
      // console.log(this.regularLength, 'regularLength');
      this.irregularLength = this.sattuView?.filter(x => x.sattuPreparingFrequency == "Irregular").length;
      // console.log(this.irregularLength, 'irregularLength');
      this.notPreparingLength = this.sattuView?.filter(x => x.sattuNonPreparingReasonId != null).length;
      // console.log(this.notPreparingLength, 'notPreparingLength');
    });
  }

  viewFamilyList() {
    const dialogRef = this.dialog.open(_view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_1__.ViewSattuFamilyComponent, {
      width: '1100px',
      height: '570px',
      data: this.selectVillageForm.value.gram
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeVillage(this.selectVillageForm.value.gram);
    });
  }
  familyWiseSattuRecord(sattu) {
    console.log(sattu);
    const dialogRef = this.dialog.open(_sattu_record_history_sattu_record_history_component__WEBPACK_IMPORTED_MODULE_0__.SattuRecordHistoryComponent, {
      width: '1000px',
      height: '450px',
      data: {
        history: sattu,
        villageId: this.selectVillageForm.value.gram
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeVillage(this.selectVillageForm.value.gram);
    });
  }
}
SattuRegisterComponent.ɵfac = function SattuRegisterComponent_Factory(t) {
  return new (t || SattuRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_4__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_5__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService));
};
SattuRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: SattuRegisterComponent,
  selectors: [["app-sattu-register"]],
  decls: 84,
  vars: 39,
  consts: [[3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "white_box", "QA_section", "mb_30"], ["id", "header-fixed", 2, "display", "flex"], [1, "form-group", "col-md"], [1, "page-title"], ["class", "form-group col-md", 4, "ngIf"], ["class", "form-group col-md", "style", "display: flex; justify-content:flex-end", 4, "ngIf"], [1, "form-signin", 3, "formGroup"], ["class", "row", 4, "ngIf"], ["for", "block"], [1, "text-danger"], ["formControlName", "block", "id", "block", 1, "form-select", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "gp"], ["formControlName", "gp", "id", "gp", 1, "form-select", 3, "ngClass", "change"], ["for", "gram"], ["formControlName", "gram", "id", "gram", 1, "form-select", 3, "ngClass", "change"], [1, "white_box_tittle", "list_header"], [1, "QA_table"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "no-footer"], ["role", "grid", "aria-describedby", "DataTables_Table_0_info", 1, "table", "lms_table_active", "dataTable", "no-footer", "dtr-inline", "collapsed", "table", "table-striped", 2, "table-layout", "fixed"], [2, "width", "6%"], [2, "width", "10%"], [2, "width", "25%"], [2, "width", "15%"], [2, "width", "30%"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "p-1", "current", "ngx-pagination1", 3, "pageChange", "pageBoundsCorrection"], [1, "serach_field_2"], [3, "ngClass"], ["active", "#"], [1, "search_field"], ["type", "text", "name", "search", "placeholder", "fam, name, guardian, Preparing ...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "form-group", "col-md", 2, "display", "flex", "justify-content", "flex-end"], ["title", "Create Sattu Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#a8d7d7", "font-size", "30px", "margin-top", "5px"], ["title", "Create Sattu Register", 1, "fas", "fa-plus-circle", 2, "cursor", "pointer", "color", "#499", "font-size", "30px", "margin-top", "5px", 3, "click"], ["for", "region"], ["formControlName", "region", "id", "region", 1, "form-select", 3, "ngClass", "change"], ["for", "branch"], ["formControlName", "branch", "id", "branch", 1, "form-select", 3, "ngClass", "change"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-md-1"], [1, "col-md-10"], [2, "width", "8%"], [1, "btn-link", 2, "width", "10%", "color", "#0d6efd", "text-decoration", "none", "cursor", "pointer", 3, "click"]],
  template: function SattuRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Sattu Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, SattuRegisterComponent_div_10_Template, 8, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, SattuRegisterComponent_div_11_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, SattuRegisterComponent_div_12_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, SattuRegisterComponent_div_14_Template, 21, 12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 2)(16, "div", 6)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Block :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_21_listener($event) {
        return ctx.changeBlock($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "-- Select Block --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, SattuRegisterComponent_option_24_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, SattuRegisterComponent_div_25_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 6)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "GP/ Municipality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_31_listener($event) {
        return ctx.changeGp($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "-- Select GP/ Municipality --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, SattuRegisterComponent_option_34_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, SattuRegisterComponent_div_35_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 6)(37, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Village/ Gram Sansad/ Locality :\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "*\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SattuRegisterComponent_Template_select_change_41_listener($event) {
        return ctx.changeVillage($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "-- Select Village --");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, SattuRegisterComponent_option_44_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, SattuRegisterComponent_div_45_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, SattuRegisterComponent_div_46_Template, 5, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 22)(48, "div", 23)(49, "div", 24)(50, "table", 25)(51, "thead")(52, "tr")(53, "th", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Sl.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Fam. No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Guardian Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Last Record");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Received");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Orientation");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Preparing");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](73, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Sattu");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Last");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "tbody", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, SattuRegisterComponent_tr_80_Template, 17, 7, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](81, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](82, "sattuRegisterFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "pagination-controls", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function SattuRegisterComponent_Template_pagination_controls_pageChange_83_listener($event) {
        return ctx.p = $event;
      })("pageBoundsCorrection", function SattuRegisterComponent_Template_pagination_controls_pageBoundsCorrection_83_listener($event) {
        return ctx.p = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.sattuView == null ? null : ctx.sattuView.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.selectVillageForm.value.gram || !ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectVillageForm.value.gram && ctx.createMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.selectVillageForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.regionBranchHide);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](23, _c0, ctx.m.block.invalid && ctx.m.block.touched, ctx.m.block.valid && (ctx.m.block.dirty || ctx.m.block.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villagesOfBranch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.m.block.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](26, _c0, ctx.m.gp.invalid && ctx.m.gp.touched, ctx.m.gp.valid && (ctx.m.gp.dirty || ctx.m.gp.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.gpList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.m.gp.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](29, _c0, ctx.m.gram.invalid && ctx.m.gram.touched, ctx.m.gram.valid && (ctx.m.gram.dirty || ctx.m.gram.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.villageList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.m.gram.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.sattuView == null ? null : ctx.sattuView.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](81, 17, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](82, 20, ctx.sattuView, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](32, _c1, ctx.sattuSearch, ctx.sattuSearch, ctx.sattuSearch, ctx.sattuSearch)), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](37, _c2, ctx.p)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_8__.sattuRegisterSearchFilterPipe],
  styles: [".search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 485px;\r\n  margin-top: -1px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding-right: 1px;\r\n  margin-left: 690px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 90%;\r\n  background: transparent;\r\n  font-size: 12px;\r\n  padding-left: 19px;\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  border: 0;\r\n}\r\n\r\n.search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 62%;\r\n  margin-left: 550px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 74%;\r\n  margin-left: 670px;\r\n  margin-bottom: 5px;\r\n  font-size: 13px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  padding-left: 55px;\r\n  border: 1px solid #2daab8;\r\n  padding-right: 15px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: 58px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.serach_field_2[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #2daab8;\r\n  margin-left: -30px;\r\n  margin-bottom: 11px;\r\n  margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci9zYXR0dS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hfaW5uZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ4NXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tbGVmdDogNjkwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNlYXJjaF9pbm5lciBpbnB1dCB7XHJcbiAgd2lkdGg6IDYyJTtcclxuICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gaW5wdXQge1xyXG4gIHdpZHRoOiA3NCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkYWFiODtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIgLnNlYXJjaF9pbm5lciBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1OHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBidXR0b24gaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMmRhYWI4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sattu-register-routing.module */ 83869);
/* harmony import */ var _sattu_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sattu-register.component */ 92637);
/* harmony import */ var _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.module */ 90510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-sattu-register/create-sattu-register.component */ 62149);
/* harmony import */ var _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-sattu-family/view-sattu-family.component */ 90812);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _sattu_record_history_sattu_record_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sattu-record-history/sattu-record-history.component */ 13771);
/* harmony import */ var _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sidebar/sattu-register-search.pipe */ 5891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);












class SattuRegisterModule {}
SattuRegisterModule.ɵfac = function SattuRegisterModule_Factory(t) {
  return new (t || SattuRegisterModule)();
};
SattuRegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: SattuRegisterModule
});
SattuRegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SattuRegisterModule, {
    declarations: [_sattu_register_component__WEBPACK_IMPORTED_MODULE_1__.SattuRegisterComponent, _create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_3__.CreateSattuRegisterComponent, _view_sattu_family_view_sattu_family_component__WEBPACK_IMPORTED_MODULE_4__.ViewSattuFamilyComponent, _sattu_record_history_sattu_record_history_component__WEBPACK_IMPORTED_MODULE_6__.SattuRecordHistoryComponent, _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_7__.sattuRegisterSearchFilterPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _sattu_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.SattuRegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _shared_loader_loader_module__WEBPACK_IMPORTED_MODULE_2__.LoaderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule]
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
  saveOrUpdate(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/saveOrUpdate`, obj);
  }
  getSattuview(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/view`, obj);
  }
  getSattuRegisterHistoryOfAFamily(obj) {
    return this.http.post(`${this.baseURL}sattuRegister/getSattuRegisterHistoryOfAFamily`, obj);
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
/* harmony import */ var _shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/validation.service */ 12609);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http/http.service */ 73350);
/* harmony import */ var _sattu_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sattu-register.service */ 18295);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 99996);
/* harmony import */ var _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sidebar/sattu-register-search.pipe */ 5891);













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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fami_r3.setStatus);
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
const _c1 = function (a0, a1, a2, a3, a4) {
  return {
    familyNumber: a0,
    firstName: a1,
    middleName: a2,
    lastName: a3,
    husbandOrGuardianName: a4
  };
};
class ViewSattuFamilyComponent {
  constructor(data, fb, validationService, httpService, sattuService, dialog, dialogRef) {
    this.data = data;
    this.fb = fb;
    this.validationService = validationService;
    this.httpService = httpService;
    this.sattuService = sattuService;
    this.dialog = dialog;
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
        this.familyList = this.familyList?.map(({
          setStatus = '',
          ...rest
        }) => ({
          setStatus,
          ...rest
        }));
        this.setStatusForAll(this.familyList);
        console.log(this.familyList, ' this.familyList');
      } else {
        this.familyList = [];
      }
    });
  }
  createSattu(fami) {
    this.dialog.open(_create_sattu_register_create_sattu_register_component__WEBPACK_IMPORTED_MODULE_1__.CreateSattuRegisterComponent, {
      width: '800px',
      height: '260px',
      data: {
        familyDetails: fami,
        visitDate: this.viewFamilyForm.value.date,
        villageId: this.data
      }
    });
  }
  restrictTypeOfDate() {
    return false;
  }
  //Set PW, PEM, LM, 2-5YR, Adol Status
  setStatusForAll(familys) {
    familys.forEach(family => {
      if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman == "Y" && family.hasChildPresentInPem == "Y" && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "PEM, LM, PW, 2-5 yr, Adol";
      } else if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman?.includes("N") && family.hasChildPresentInPem?.includes("N") && family.hasAdolescentGirlChildren?.includes("N") && family.has2to5yearsoldChildren?.includes("N")) {
        family.setStatus = "LM";
      } else if (family?.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman == "Y" && family.hasChildPresentInPem?.includes("N") && family.hasAdolescentGirlChildren?.includes("N") && family.has2to5yearsoldChildren?.includes("N")) {
        family.setStatus = "PW";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.hasChildPresentInPem == "Y" && family.hasAdolescentGirlChildren?.includes("N") && family.has2to5yearsoldChildren?.includes("N")) {
        family.setStatus = "PEM";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren?.includes("N") && family.hasChildPresentInPem?.includes("N")) {
        family.setStatus = "2-5 yr";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.hasAdolescentGirlChildren == "Y" && family.has2to5yearsoldChildren?.includes("N") && family.hasChildPresentInPem?.includes("N")) {
        family.setStatus = "Adol";
      } else if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman == "Y" && family.hasChildPresentInPem?.includes("N") && family.has2to5yearsoldChildren?.includes("N") && family.hasAdolescentGirlChildren?.includes("N")) {
        family.setStatus = "LM, PW";
      } else if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman?.includes("N") && family.hasChildPresentInPem == "Y" && family.has2to5yearsoldChildren?.includes("N") && family.hasAdolescentGirlChildren?.includes("N")) {
        family.setStatus = "LM, PEM";
      } else if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman?.includes("N") && family.has2to5yearsoldChildren == "Y" && family.hasChildPresentInPem?.includes("N") && family.hasAdolescentGirlChildren?.includes("N")) {
        family.setStatus = "LM, 2-5 yr";
      } else if (family.presentInLactatingMother == "Y" && family.presentInPregnantWoman?.includes("N") && family.hasAdolescentGirlChildren == "Y" && family.has2to5yearsoldChildren?.includes("N") && family.hasChildPresentInPem?.includes("N") && family.hasAdolescentGirlChildren?.includes("N")) {
        family.setStatus = "LM, Adol";
      } else if (family.presentInLactatingMother?.includes("N") && family.has2to5yearsoldChildren?.includes("N") && family.hasAdolescentGirlChildren?.includes("N") && family.presentInPregnantWoman == "Y" && family.hasChildPresentInPem == "Y") {
        family.setStatus = "PW, PEM";
      } else if (family.presentInLactatingMother?.includes("N") && family.hasChildPresentInPem?.includes("N") && family.hasAdolescentGirlChildren?.includes("N") && family.presentInPregnantWoman == "Y" && family.has2to5yearsoldChildren == "Y") {
        family.setStatus = "PW, 2-5 yr";
      } else if (family.presentInLactatingMother?.includes("N") && family.hasChildPresentInPem?.includes("N") && family.has2to5yearsoldChildren?.includes("N") && family.presentInPregnantWoman == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "PW, Adol";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.hasAdolescentGirlChildren?.includes("N") && family.hasChildPresentInPem == "Y" && family.has2to5yearsoldChildren == "Y") {
        family.setStatus = "PEM, 2-5 yr";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.has2to5yearsoldChildren?.includes("N") && family.hasChildPresentInPem == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "PEM, Adol";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "2-5 yr, Adol";
      } else if (family.presentInLactatingMother?.includes("N") && family.hasChildPresentInPem == "Y" && family.presentInPregnantWoman == "Y" && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "PEM, PW, 2-5 yr, Adol";
      } else if (family.hasChildPresentInPem?.includes("N") && family.presentInLactatingMother == "Y" && family.presentInPregnantWoman == "Y" && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "LM, PW, 2-5 yr, Adol";
      } else if (family.presentInPregnantWoman?.includes("N") && family.presentInLactatingMother == "Y" && family.hasChildPresentInPem == "Y" && family.has2to5yearsoldChildren == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "LM, PEM, 2-5 yr, Adol";
      } else if (family.has2to5yearsoldChildren?.includes("N") && family.presentInLactatingMother == "Y" && family.hasChildPresentInPem == "Y" && family.presentInPregnantWoman == "Y" && family.hasAdolescentGirlChildren == "Y") {
        family.setStatus = "LM, PEM, PW, Adol";
      } else if (family.hasAdolescentGirlChildren?.includes("N") && family.presentInLactatingMother == "Y" && family.hasChildPresentInPem == "Y" && family.presentInPregnantWoman == "Y" && family.has2to5yearsoldChildren == "Y") {
        family.setStatus = "LM, PEM, PW, 2-5 yr";
      } else if (family.presentInLactatingMother?.includes("N") && family.presentInPregnantWoman?.includes("N") && family.hasChildPresentInPem?.includes("N") && family.has2to5yearsoldChildren?.includes("N") && family.hasAdolescentGirlChildren?.includes("N")) {
        family.setStatus = "--";
      } else {
        family.setStatus = "--";
      }
    });
  }
}
ViewSattuFamilyComponent.ɵfac = function ViewSattuFamilyComponent_Factory(t) {
  return new (t || ViewSattuFamilyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_validation_service__WEBPACK_IMPORTED_MODULE_2__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sattu_register_service__WEBPACK_IMPORTED_MODULE_4__.SattuRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};
ViewSattuFamilyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ViewSattuFamilyComponent,
  selectors: [["app-view-sattu-family"]],
  decls: 47,
  vars: 21,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ViewSattuFamilyComponent_tr_45_Template, 13, 7, "tr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "sattuRegisterFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.viewFamilyForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minDate)("max", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](12, _c0, ctx.r.date.invalid && ctx.r.date.touched, ctx.r.date.valid && (ctx.r.date.dirty || ctx.r.date.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.r.date.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.searchFullscreen ? "search_inner_fullscreen" : " search_inner");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.sattuSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](46, 9, ctx.familyList, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction5"](15, _c1, ctx.sattuSearch, ctx.sattuSearch, ctx.sattuSearch, ctx.sattuSearch, ctx.sattuSearch)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _shared_sidebar_sattu_register_search_pipe__WEBPACK_IMPORTED_MODULE_6__.sattuRegisterSearchFilterPipe],
  styles: [".dialog-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%] {\r\n    background-color: #499;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    position: relative;\r\n    color: #ffffff;\r\n}\r\n\r\n.dialog-title[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -14px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid #277;\r\n    border-right: 7px solid #277;\r\n    border-bottom: 7px solid #0000;\r\n    border-left: 7px solid #0000;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border-bottom: 0 solid transparent;\r\n    background-color: #fff;\r\n    padding: 17px 30px;\r\n    line-height: 16px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n    text-transform: capitalize;\r\n    font-family: \"Rajdhani\", sans-serif;\r\n    border: 0;\r\n    background: #499;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n}\r\n\r\n#table_wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 4px;\r\n}\r\n\r\n#header_fixed[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 999;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n    background: transparent;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: grey;\r\n}\r\n\r\n#tbodyFam[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 331px;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n  .mat-dialog-container {\r\n    padding: 12px 17px;\r\n    overflow: hidden\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    width: 77%;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n    margin-left: 15px;\r\n    margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%] {\r\n    width: 430px;\r\n    position: relative;\r\n    margin-right: 0px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n    color: #7e7172;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    background: transparent;\r\n    font-size: 12px;\r\n    border: 0;\r\n    padding-left: 19px;\r\n    margin-left: 6px;\r\n    margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    margin-top: 6px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 24px;\r\n    content: \"\";\r\n    background: #2daab8;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 0;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: 8px;\r\n    margin-bottom: 5px;\r\n    font-size: 13px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding-left: 55px;\r\n    border: 1px solid #2daab8;\r\n    padding-right: 15px;\r\n    margin-top: 19px;\r\n}\r\n\r\n.serach_field_23[_ngcontent-%COMP%]   .search_inner_fullscreen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2daab8;\r\n    margin-left: -609px;\r\n    margin-top: 21px;\r\n}\r\n\r\n[type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    -webkit-appearance: media-volume-sliderthumb;\r\n    background: #FFFFFF;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zYXR0dS1yZWdpc3Rlci92aWV3LXNhdHR1LWZhbWlseS92aWV3LXNhdHR1LWZhbWlseS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsUUFBUTtJQUlSLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpYWxvZy10aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGlhbG9nLXRpdGxlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMjc3O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzI3NztcclxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDAwMDtcclxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzAwMDA7XHJcbn1cclxuXHJcbiN0YWJsZV93cmFwcGVyIC50YWJsZSB0aGVhZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE3cHggMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICM0OTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVfd3JhcHBlciAudGFibGUgdGJvZHkgdGQge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4jaGVhZGVyX2ZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbn1cclxuXHJcbiN0Ym9keUZhbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzMxcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTdweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGlucHV0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDc3JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIHtcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzdlNzE3MjtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJhY2hfZmllbGRfMjMgLnNlYXJjaF9pbm5lciBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyIGJ1dHRvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMmRhYWI4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXIgYnV0dG9uOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmRhYWI4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2VyYWNoX2ZpZWxkXzIzIC5zZWFyY2hfaW5uZXJfZnVsbHNjcmVlbiBpbnB1dCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZGFhYjg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTlweDtcclxufVxyXG5cclxuLnNlcmFjaF9maWVsZF8yMyAuc2VhcmNoX2lubmVyX2Z1bGxzY3JlZW4gYnV0dG9uIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMyZGFhYjg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTYwOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG5cclxuW3R5cGU9YnV0dG9uXSwgW3R5cGU9cmVzZXRdLCBbdHlwZT1zdWJtaXRdLCBidXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZWRpYS12b2x1bWUtc2xpZGVydGh1bWI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5891:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/sidebar/sattu-register-search.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sattuRegisterSearchFilterPipe": () => (/* binding */ sattuRegisterSearchFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class sattuRegisterSearchFilterPipe {
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
sattuRegisterSearchFilterPipe.ɵfac = function sattuRegisterSearchFilterPipe_Factory(t) {
  return new (t || sattuRegisterSearchFilterPipe)();
};
sattuRegisterSearchFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sattuRegisterFilter",
  type: sattuRegisterSearchFilterPipe,
  pure: false
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_sattu-register_sattu-register_module_ts.js.map