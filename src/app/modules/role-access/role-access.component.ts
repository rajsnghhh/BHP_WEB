import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/modules/core/http/http.service';
import { RoleAccessService } from './role-access.service';
import { ValidationService } from '../shared/services/validation.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-role-access',
  templateUrl: './role-access.component.html',
  styleUrls: ['./role-access.component.css']
})
export class RoleAccessComponent implements OnInit {
  roleAccessForm: UntypedFormGroup;
  roleList: Array<any> = [];
  roleFunctionMapView: any;
  mainFunctionList: Array<any> = [];
  subFunctionList: Array<any> = [];
  searchFullscreen: boolean;
  loader: boolean = true;
  viewDisable: any;

  constructor(private httpService: HttpService, private roleService: RoleAccessService, private fb: UntypedFormBuilder,
    private toaster: ToastrService, private validationService: ValidationService, private sidebarService: SidebarService,
    private router: Router, private accountService: LoginService,) { }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {

    var tt = this.sidebarService.subMenuList.find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 5 || item.subFunctionMasterId == 6 || item.subFunctionMasterId == 7 ||
        item.subFunctionMasterId == 8)?.accessDetailList
    console.log(tt);

    if (tt.length == 1) {
      tt.forEach(x => {
        console.log(x);
        if (x.accessType == 'view') {
          console.log(true);
          this.viewDisable = 'view';
        } else {
          console.log(false);
        }

      })
    }


    this.createForm();

    this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionShortName == 'System Administration')?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 5 || item.subFunctionMasterId == 6 || item.subFunctionMasterId == 7 || item.subFunctionMasterId == 8)?.accessDetailList
      .find(accessType => accessType.accessType == 'view')?.accessType ? this.router.navigate(['/role-access']) : this.router.navigate(['/error']);
  }

  createForm() {
    this.roleAccessForm = this.fb.group({
      device: ['', Validators.required],
      mainfunction: ['', Validators.required]
    });
  }

  get f() {
    return this.roleAccessForm.controls;
  }

  changeDevice(deviceId) {
    console.log(deviceId);

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.loader = false;
    this.roleService.rolefunctionmapview(obj).subscribe((res) => {
      this.roleFunctionMapView = res.responseObject;
      console.log(this.roleFunctionMapView, 'roleFunctionMapView');

      if (deviceId == 1) {
        this.mainFunctionList = this.roleFunctionMapView?.webMenu;
        console.log(this.mainFunctionList, ' this.mainFunctionList-web');
      } else {
        this.mainFunctionList = this.roleFunctionMapView?.mobMenus;
        console.log(this.mainFunctionList, ' this.mainFunctionList-mobile');
      }
      this.loader = true;
    });

    this.roleAccessForm.controls.mainfunction.setValue('');
    this.subFunctionList = [];

    if (this.roleAccessForm.value.device == '') {
      this.roleAccessForm.controls.mainfunction.setValue('');
      this.mainFunctionList = [];
      this.subFunctionList = [];
    }

  }

  changeMainFunction(mainFunctionId) {
    console.log(mainFunctionId, 'mainFunctionId');
    this.subFunctionList = this.mainFunctionList.find(item => item.mainMenuId == mainFunctionId)?.subMenuDtoList;
    console.log(this.subFunctionList, ' this.subFunctionList');
  }

  changeSubFunction(subFunctionName) {
    console.log(subFunctionName, 'subFunctionName');

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {

        for (var j = 0; j < coll.length; j++) {
          var con = coll[j].nextElementSibling as HTMLElement
          coll[j].classList.remove("active");
          // coll[j].nextElementSibling.style.maxHeight = null;
          con.style.maxHeight = null;
        }

        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

    // this.accessList=[]
    this.roleList = this.subFunctionList.find((role) => role.subMenuName == subFunctionName)?.roleAccessDtoList;
    console.log(this.roleList, 'roleList');
    //     this.roleList.forEach(x => {
    //       this.accessList.push(x.accessDtoList);
    //     })
    // console.log(  this.accessList);


  }

  assignAccess(accessDtoList, i, e) {
    console.log(accessDtoList, accessDtoList.subMenuId, 'accessDtoList.subMenuId');

    let checked = e.target.checked;
    console.log(checked);
    if (checked == true) {
      accessDtoList.roleActiveFlag = 'Y';
      console.log(accessDtoList, this.roleFunctionMapView);
    } else {
      accessDtoList.roleActiveFlag = 'N';
      console.log(accessDtoList, this.roleFunctionMapView);
    }

  }

  saveRoleMap() {
    let roleAccessSaveObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      roleFunctionMapDTOList: this.roleFunctionMapView
    }
    this.loader = false;
    console.log(roleAccessSaveObj);

    this.roleService.rolesubfunctionmapsave(roleAccessSaveObj).subscribe((res) => {
      console.log(res.responseObject, 'roleFunctionMapsave');
      if (res.status == true) {
        this.loader = true;
        this.showSuccess(res.message);
      }
      else {
        this.showError(res.message);
      }

    });

  }

  showSuccess(message) {
    this.toaster.success(message, 'Role Menu Map', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Role Menu Map', {
      timeOut: 3000,
    });
  }

  disableSave() {
    let flag = true;
    if (!this.roleAccessForm.value.mainfunction) {
      flag = false;
    } else if (this.viewDisable == 'view') {
      flag = false;
    }

    return flag;

  }
}