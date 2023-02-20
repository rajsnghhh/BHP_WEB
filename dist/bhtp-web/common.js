"use strict";
(self["webpackChunkbhtp_web"] = self["webpackChunkbhtp_web"] || []).push([["common"],{

/***/ 15273:
/*!****************************************************!*\
  !*** ./src/app/modules/core/models/donor.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Donor": () => (/* binding */ Donor),
/* harmony export */   "DonorMasterViewDTO": () => (/* binding */ DonorMasterViewDTO)
/* harmony export */ });
class Donor {
  constructor(donorMasterId, donorMasterName, status) {
    this.donorMasterId = donorMasterId;
    this.donorMasterName = donorMasterName;
    this.status = status;
  }
}
class DonorMasterViewDTO {
  constructor(activeStatus, dataAccessDTO) {
    this.activeStatus = activeStatus;
    this.dataAccessDTO = dataAccessDTO;
  }
}

/***/ }),

/***/ 952:
/*!*******************************************************************!*\
  !*** ./src/app/modules/core/models/subverticalMasterDTO.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubVerticalMasterSaveDTO": () => (/* binding */ SubVerticalMasterSaveDTO),
/* harmony export */   "SubVerticalMasterViewDTO": () => (/* binding */ SubVerticalMasterViewDTO),
/* harmony export */   "SubVerticalMastersSaveDTO": () => (/* binding */ SubVerticalMastersSaveDTO)
/* harmony export */ });
class SubVerticalMasterSaveDTO {
  constructor(status, subVerticalCode, subVerticalMasterId, subVerticalName, verticalMasterDataDTO) {
    this.status = status;
    this.subVerticalCode = subVerticalCode;
    this.subVerticalMasterId = subVerticalMasterId;
    this.subVerticalName = subVerticalName;
    this.verticalMasterDataDTO = verticalMasterDataDTO;
  }
}
class SubVerticalMastersSaveDTO {
  constructor(status, subVerticalCode, subVerticalMasterId, subVerticalName) {
    this.status = status;
    this.subVerticalCode = subVerticalCode;
    this.subVerticalMasterId = subVerticalMasterId;
    this.subVerticalName = subVerticalName;
  }
}
class SubVerticalMasterViewDTO {
  constructor(activeStatus, dataAccessDTO) {
    this.activeStatus = activeStatus;
    this.dataAccessDTO = dataAccessDTO;
  }
}

/***/ }),

/***/ 38957:
/*!****************************************************************!*\
  !*** ./src/app/modules/core/models/verticalMasterDTO.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMasterSaveDTO": () => (/* binding */ VerticalMasterSaveDTO),
/* harmony export */   "VerticalMasterViewDTO": () => (/* binding */ VerticalMasterViewDTO)
/* harmony export */ });
class VerticalMasterSaveDTO {
  constructor(verticalMasterId, verticalName, verticalCode, status, subVerticalMasterDTOList = [{}]) {
    this.verticalMasterId = verticalMasterId;
    this.verticalName = verticalName;
    this.verticalCode = verticalCode;
    this.status = status;
    this.subVerticalMasterDTOList = subVerticalMasterDTOList;
  }
}
class VerticalMasterViewDTO {
  constructor(activeStatus, dataAccessDTO) {
    this.activeStatus = activeStatus;
    this.dataAccessDTO = dataAccessDTO;
  }
}

/***/ }),

/***/ 10800:
/*!****************************************************************!*\
  !*** ./src/app/modules/muac-register/muac-register.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuacRegisterService": () => (/* binding */ MuacRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class MuacRegisterService {
  constructor(http) {
    this.http = http;
    this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  listOfBranchesOfARegion(obj) {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj);
  }
  muacCampList(obj) {
    return this.http.post(`${this.baseURL}muaccamp/branchWiseList`, obj);
  }
  saveMuac(obj) {
    return this.http.post(`${this.baseURL}muaccamp/saveOrUpdate`, obj);
  }
  deleteMuac(obj) {
    return this.http.post(`${this.baseURL}muaccamp/delete`, obj);
  }
  viewChildrenListOfMuacCamp(obj) {
    return this.http.post(`${this.baseURL}muaccamp/viewChildrenListOfMuacCamp`, obj);
  }
}
MuacRegisterService.ɵfac = function MuacRegisterService_Factory(t) {
  return new (t || MuacRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MuacRegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MuacRegisterService,
  factory: MuacRegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map