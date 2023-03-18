import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SattuRegisterReportService {
  baseURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProject(obj): any {
    return this.http.post(`${this.baseURL}report/getAllProject`, obj)
  }

  getListOfAllStates(obj): any {
    return this.http.post(`${this.baseURL}state/getListOfAllStates`, obj)
  }

  getListOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  getListOfDistrictAndBlock(obj): any {
    return this.http.post(`${this.baseURL}district/getListOfDistrictAndBlock`, obj)
  }

  getSattuRegisterInfoProjectWise(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoProjectWise`, obj)
  }

  getSattuRegisterInfoStateWise(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoStateWise`, obj)
  }

  getSattuRegisterInfoRegionWise(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/report/getSattuRegisterInfoRegionWise`, obj)
  }

}
