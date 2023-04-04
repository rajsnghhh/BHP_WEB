import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MuacRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  muacCampList(obj): any {
    return this.http.post(`${this.baseURL}muaccamp/branchWiseList`, obj)
  }

  saveMuac(obj): any {
    return this.http.post(`${this.baseURL}muaccamp/saveOrUpdate`, obj)
  }

  deleteMuac(obj): any {
    return this.http.post(`${this.baseURL}muaccamp/delete`, obj)
  }

  viewChildrenListOfMuacCamp(obj): any {
    return this.http.post(`${this.baseURL}muaccamp/viewChildrenListOfMuacCamp`, obj)
  }

  muacCampLockOrUnlock(obj): any {
    return this.http.post(`${this.baseURL}muaccamp/lockOrUnlock`, obj)
  }

}
