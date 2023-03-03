import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SattuRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBranchesOfRegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  getVillagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  getListOfFamiliesOfAVillage(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/getListOfFamiliesOfAVillage`, obj)
  }

  getSattuRegisterPrerequisites(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/getSattuRegisterPrerequisites`, obj)
  }

  getSattuview(obj): any {
    return this.http.post(`${this.baseURL}sattuRegister/view`, obj)
  }
}
