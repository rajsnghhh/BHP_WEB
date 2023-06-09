import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyActivityRegisterService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  villagesOfBranch(obj): any {
    return this.http.post(`${this.baseURL}village/getVillagesOfABranch`, obj)
  }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  hcoListOfBranch(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj)
  }

  viewingDAREntryList(obj): any {
    return this.http.post(`${this.baseURL}dailyActivity/viewDailyActivityRegister`, obj)
  }

  ssVillageWiseList(obj): any {
    return this.http.post(`${this.baseURL}swasthyasahayika/villageWiseList`, obj)
  }

  visitPurposeData(obj): any {
    return this.http.post(`${this.baseURL}dailyActivity/viewDailyActivityRegisterVisitPurposeMap`, obj)
  }

  saveEditDAR(obj): any {
    return this.http.post(`${this.baseURL}dailyActivity/saveOrUpdate`, obj)
  }

}

