import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyActivityRecordService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listOfBranchesOfARegion(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfBranchesOfARegion`, obj)
  }

  HcoITLListOfBranch(obj): any {
    return this.http.post(`${this.baseURL}branch/getListOfActiveHcoITL`, obj)
  }

  recordViewByStaffId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffId`, obj)
  }

  recordViewByBranchId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchId`, obj)
  }

  recordViewByRegionId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionId`, obj)
  }

  recordDownloadExcelByStaffId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByStaffIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer",
    })
  }

  recordDownloadExcelByBranchId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByBranchIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer",
    })
  }

  recordDownloadExcelByRegionId(obj): any {
    return this.http.post(`${this.baseURL}dailyActivityRecord/viewByRegionIdExcel`, obj, {
      observe: 'response',
      responseType: "arraybuffer",
    })
  }

}
