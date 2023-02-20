"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["src_app_modules_shared_privacy-policy_privacy-policy_module_ts"],{

/***/ 14993:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/privacy-policy/privacy-policy-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyRoutingModule": () => (/* binding */ PrivacyPolicyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.component */ 91748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyComponent
}];
class PrivacyPolicyRoutingModule {}
PrivacyPolicyRoutingModule.ɵfac = function PrivacyPolicyRoutingModule_Factory(t) {
  return new (t || PrivacyPolicyRoutingModule)();
};
PrivacyPolicyRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PrivacyPolicyRoutingModule
});
PrivacyPolicyRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrivacyPolicyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91748:
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/privacy-policy/privacy-policy.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PrivacyPolicyComponent {
  constructor() {}
  ngOnInit() {}
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
  return new (t || PrivacyPolicyComponent)();
};
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrivacyPolicyComponent,
  selectors: [["app-privacy-policy"]],
  decls: 2,
  vars: 0,
  consts: [["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]`https://drive.google.com/uc?export=view&id=1feyo5VCFtbCBr7ml7sZMHZLsKpUAWG5R`, "type", "application/pdf", 2, "width", "100%", "height", "600px"]],
  template: function PrivacyPolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "embed", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74114:
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/privacy-policy/privacy-policy.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyModule": () => (/* binding */ PrivacyPolicyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 14993);
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.component */ 91748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class PrivacyPolicyModule {}
PrivacyPolicyModule.ɵfac = function PrivacyPolicyModule_Factory(t) {
  return new (t || PrivacyPolicyModule)();
};
PrivacyPolicyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PrivacyPolicyModule
});
PrivacyPolicyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrivacyPolicyModule, {
    declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_shared_privacy-policy_privacy-policy_module_ts.js.map