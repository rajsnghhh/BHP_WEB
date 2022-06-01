import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/modules/core/http/http.service';
import { DataAccessDTO } from '../core/models/dataAccessDTO.model';
import { MainFunctionDTO } from '../core/models/mainFunctionDTO.model';
import { RoleMasterDTO } from '../core/models/roleMasterDTO.model';
import { RoleFunctionMapDTO } from '../core/models/roleSubFunctionMapDTO.model';
import { SubFunctionMasterDTO } from '../core/models/subFunctionDTO.model';
import { RoleAccessService } from './role-access.service';

@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.css']
})
export class RoleAccessComponent implements OnInit {
  roleAccessForm: FormGroup;
  roleList: Array<any> = [];
  mainFunctionList: Array<any> = [];
  subFunctionList: any = [];
  accessType: any;
  // main_functions: MainFunctionDTO[];
  // mainFunctionId: any = '';
  // subFunctions: SubFunctionMasterDTO[];
  subFunctions: any;
  // subFunctionsDropDown: any = [];
  // selectedSubFunction: string = ''
  // actionTypes: any = [];
  RoleList: RoleMasterDTO[];
  roleAccessData: RoleFunctionMapDTO[];
  // roleAccessSaveObj: {
  //   dataAccessDTO: DataAccessDTO,
  //   roleFunctionMapDTOList: RoleFunctionMapDTO[];
  // }

  // abcd: string;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private roleService: RoleAccessService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

    // Api call for viewing rolefunctionmapview list
    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.roleService.rolefunctionmapview(obj).subscribe((res) => {
      this.roleList = res.responseObject;
      console.log(this.roleList, ' this.roleList');
    });

    // this.route.data.subscribe(data => {
    //   // this.menuData = data;
    //   console.log(data);
      this.roleAccessData =  this.roleList;
    //   console.log(this.roleAccessData);
      this.RoleList =  this.roleList.map(item => item.roleMasterDTO);
      console.log(this.RoleList);
      
    //   this.main_functions = this.roleAccessData[0].mainFunctionDTOList
    // });

  }
  createForm() {
    this.roleAccessForm = this.fb.group({
      role: ['', Validators.required],
      mainfunction: ['', Validators.required],
      subfunction: ['', Validators.required]
    });
  }

  get f() {
    return this.roleAccessForm.controls;
  }

  changeRole(roleId) {
    console.log(roleId);
    this.mainFunctionList = this.roleList.find(item => item.roleMasterDTO.roleMasterId == roleId)?.mainFunctionDTOList;
    console.log(this.mainFunctionList, 'mainFunctionList');
  }

  changeMainFunction(mainFunctionId) {
    console.log(mainFunctionId);
    this.subFunctions = this.mainFunctionList.find(item => item.mainFunctionMasterId == mainFunctionId)?.subFunctionMasterDTOList;

    this.subFunctionList = new Set(this.subFunctions.map(item => item.subFunctionShortName));
    console.log(this.subFunctionList, this.subFunctions, 'subFunctionList');
  }

  changeSubFunction(subFunctionName) {
    console.log(subFunctionName);

    this.accessType = this.subFunctions.filter(item => item.subFunctionShortName == subFunctionName);
    console.log(this.accessType);


    //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
    //   console.log(this.actionTypes);



  }



  // getSubFunctions() {

  //   this.subFunctions = this.roleAccessData[0].mainFunctionDTOList.find(item => item.mainFunctionMasterId === this.mainFunctionId).subFunctionMasterDTOList;

  //   this.subFunctionsDropDown = new Set(this.subFunctions.map(item => item.subFunctionShortName));

  // }

  // createTableRows() {

  //   this.actionTypes = this.subFunctions.filter(item => item.subFunctionShortName === this.selectedSubFunction)
  //   console.log(this.actionTypes);
  // }

  // assignAccess(subFunctionId, roleIndex, event) {
  //   let checked = event.target.checked;
  //   let item = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
  //     item => item.mainFunctionMasterId === this.mainFunctionId
  //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId)

  //   if (checked)
  //     item.roleActiveFlag = 'Y'
  //   else
  //     item.roleActiveFlag = 'N'

  //   // console.log(item);
  //   console.log(this.roleAccessData);

  // }

  // checkStatus(subFunctionId, roleIndex): any {
  //   let flag = this.roleAccessData[roleIndex].mainFunctionDTOList.find(
  //     item => item.mainFunctionMasterId === this.mainFunctionId
  //   ).subFunctionMasterDTOList.find(item => item.subFunctionMasterId === subFunctionId).roleActiveFlag

  //   // console.log(flag);
  //   if (flag === 'Y')
  //     return true

  //   else
  //     return false

  // }

  // save() {
  //   this.roleAccessSaveObj = {
  //     dataAccessDTO: this.httpService.dataAccessDTO,
  //     roleFunctionMapDTOList: this.roleAccessData
  //   };

  //   console.log(this.roleAccessSaveObj);
  //   this.httpService.postRequest(`rolesubfunctionmap/save`, this.roleAccessSaveObj).subscribe((data) => {
  //     console.log(data)
  //   },

  //     (error) => {
  //       console.log(error);
  //     })
  // }

}
