import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentralRegisterService {

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCasteView(obj): any {
    return this.http.post(`${this.baseURL}castemaster/view`, obj)
  }

  getEducationDetails(obj): any {
    return this.http.post(`${this.baseURL}educationalqualificationmaster/view`, obj)
  }

  monthlyIncomeDetails(obj): any {
    return this.http.post(`${this.baseURL}monthlyincomemaster/view`, obj)
  }

  religionDetails(obj): any {
    return this.http.post(`${this.baseURL}religionmaster/view`, obj)
  }

  getIdCardDetails(obj): any {
    return this.http.post(`${this.baseURL}identitycardtypes/view`, obj)
  }

  saveCentralRegister(obj): any {
    return this.http.post(`${this.baseURL}baselinesurvey/saveOrUpdate`, obj)
  }

  viewDetailsCentralRegister(obj): any {
    return this.http.post(`${this.baseURL}familydetail/view`, obj)
  }

  deleteFamily(obj): any {
    return this.http.post(`${this.baseURL}familydetail/saveOrUpdate`, obj)
  }

  listOfRegionsOfUser(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfRegionsOfUser`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  villagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  viewCentralRegisterDetails(obj): any {
    return this.http.post(`${this.baseURL}centralRegister/view`, obj)
  }


}

