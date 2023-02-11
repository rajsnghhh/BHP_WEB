import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscortRerefRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBranchesOfRegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  getVillagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  getListOfFamiliesOfAVillage(obj): any {
    return this.http.post(`${this.baseURL}escortreferregister/getListOfFamiliesOfAVillage`, obj)
  }

  getEscortReferRegisterPrerequisites(obj): any {
    return this.http.post(`${this.baseURL}escortreferregister/getEscortReferRegisterPrerequisites`, obj)
  }

}
