import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBranchesOfRegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  getEventMasterTypeList(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/getEventMasterTypeList`, obj)
  }

  getVillagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  getAllStaffOfABrancsRegion(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/getAllStaffOfABrancsRegion`, obj)
  }

  getEventPreRequisite(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/getEventPreRequisite`, obj)
  }

  schoolEventSaveOrUpdate(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/schoolEventSaveOrUpdate`, obj)
  }

  viewAllEventsOfABranch(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/viewAllEventsOfABranch`, obj)
  }

  viewSpecificSchoolEventRegister(obj): any {
    return this.http.post(`${this.baseURL}eventRegister/viewSpecificSchoolEventRegister`, obj)
  }

}
