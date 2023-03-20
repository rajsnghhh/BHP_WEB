import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login/login.service';
import { HttpService } from '../../core/http/http.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [NgbModule]
})

export class SidebarComponent implements OnInit, AfterViewInit {

  hide: boolean = true;
  hideSideNav: boolean = false;
  fullscreen: boolean = false;
  panelOpenState = false;
  user: any;
  menuList: any
  subMenuList: any;
  accessList: any;

  @Output() public valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, private httpService: HttpService,
    private router: Router, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.loginService.user.subscribe(res => {
      console.log(res);
      this.sidebarService.loginId = res?.responseObject?.userdetailDTO?.loginId;
      this.sidebarService.userId = res?.responseObject?.userdetailDTO?.userId;
      this.sidebarService.RoleDTOName = res?.responseObject?.RoledetailDTO?.roleShortName;
      this.menuList = res?.responseObject.menuDetailList;
      this.sidebarService.subMenuList = this.menuList;
      console.log(this.menuList, 'menuList');
    });
    this.httpService.setDataAccessDto();
  }

  menuClick(i) {
    // console.log(i);
    this.subMenuList = this.menuList[i].subMenuDetailList;
    console.log(this.sidebarService.subMenuList);
  }

  subMenuClick(submenu) {

    var routeId = submenu.subFunctionMasterId;
    console.log(routeId);
    console.log(submenu.subFunctionShortName);

    if (routeId == 1 || routeId == 2 || routeId == 3 || routeId == 4) {
      this.router.navigate(['/user']);
    }

    if (routeId == 5 || routeId == 6 || routeId == 7 || routeId == 8) {
      this.router.navigate(['/role-access']);
    }

    if (routeId == 9 || routeId == 10 || routeId == 11 || routeId == 12) {
      this.router.navigate(['/vertical']);
    }

    if (routeId == 13 || routeId == 14 || routeId == 15 || routeId == 16) {
      this.router.navigate(['/sub-vertical']);
    }

    if (routeId == 17 || routeId == 18 || routeId == 19 || routeId == 20) {
      this.router.navigate(['/donor']);
    }

    if (routeId == 21 || routeId == 22 || routeId == 23 || routeId == 24) {
      this.router.navigate(['/project']);
    }

    if (routeId == 25 || routeId == 26 || routeId == 27 || routeId == 28) {
      this.router.navigate(['/mou']);
    }

    if (routeId == 29 || routeId == 30 || routeId == 31 || routeId == 32) {
      this.router.navigate(['/region-branch']);
    }

    if (routeId == 37 || routeId == 38 || routeId == 39 || routeId == 40) {
      this.router.navigate(['/block']);
    }

    if (routeId == 41 || routeId == 42 || routeId == 43 || routeId == 44) {
      this.router.navigate(['/gp']);
    }

    if (routeId == 49 || routeId == 50 || routeId == 51 || routeId == 52) {
      this.router.navigate(['/village-setup']);
    }

    if (routeId == 57 || routeId == 58 || routeId == 59 || routeId == 60) {
      this.router.navigate(['/branch-villageMap']);
    }

    if (routeId == 65 || routeId == 66 || routeId == 67 || routeId == 68) {
      this.router.navigate(['/Baseline-Survey/create']);
    }

    if (routeId == 73 || routeId == 74 || routeId == 75 || routeId == 76) {
      this.router.navigate(['/Baseline-Survey/view']);
    }

    if (routeId == 81 || routeId == 82 || routeId == 83 || routeId == 84) {
      this.router.navigate(['/children-register/create']);
    }

    if (routeId == 89 || routeId == 90 || routeId == 91 || routeId == 92) {
      this.router.navigate(['/central-register/view']);
    }

    if (routeId == 97 || routeId == 98 || routeId == 99 || routeId == 100) {
      this.router.navigate(['/muac-register/create']);
    }

    if (routeId == 113 || routeId == 114 || routeId == 115 || routeId == 116) {
      this.router.navigate(['/pem-register/create']);
    }

    if (routeId == 121 || routeId == 122 || routeId == 123 || routeId == 124) {
      this.router.navigate(['/lmr']);
    }

    if (routeId == 105 || routeId == 106 || routeId == 107 || routeId == 108) {
      this.router.navigate(['/acr']);
    }

    if (routeId == 129 || routeId == 130 || routeId == 131 || routeId == 132) {
      this.router.navigate(['/pw-register']);
    }

    if (routeId == 137 || routeId == 138 || routeId == 139 || routeId == 140) {
      this.router.navigate(['/daily-activity-register']);
    }

    if (routeId == 177 || routeId == 178 || routeId == 179 || routeId == 180) {
      this.router.navigate(['/ss-setup']);
    }

    if (routeId == 185 || routeId == 189) {
      this.router.navigate(['/user-hh-ss-remap']);
    }

    if (routeId == 186 || routeId == 187 || routeId == 188 || routeId == 189) {
      this.router.navigate(['/district-setup']);
    }

    if (routeId == 161 || routeId == 162 || routeId == 163 || routeId == 164) {
      this.router.navigate(['/report/geographicalReport']);
    }

    if (routeId == 195 || routeId == 196 || routeId == 197 || routeId == 198) {
      this.router.navigate(['/report/beneficiaryInfo']);
    }

    if (routeId == 194) {
      this.router.navigate(['/ss-unmap']);
    }

    if (routeId == 203) {
      this.router.navigate(['/ss-unmap-remap']);
    }

    // if (routeId == 204) {
    //   this.router.navigate(['/user-hh-ss-remap']);
    // }

    if (routeId == 205) {
      this.router.navigate(['/remap-user-hh']);
    }

    if (routeId == 206) {
      this.router.navigate(['/remap-user-ss']);
    }

    if (routeId == 207) {
      this.router.navigate(['/close-baseline']);
    }

    if (routeId == 208 || routeId == 209 || routeId == 210 || routeId == 211) {
      this.router.navigate(['/app-version']);
    }

    if (routeId == 212 || routeId == 213 || routeId == 214 || routeId == 215) {
      this.router.navigate(['/ss-training']);
    }

    if (routeId == 226 || routeId == 227 || routeId == 228 || routeId == 229) {
      this.router.navigate(['/material-distribution-register']);
    }

    if (routeId == 234) {
      this.router.navigate(['/daily-activity-record']);
    }

    if (routeId == 246 || routeId == 247 || routeId == 248 || routeId == 249) {
      this.router.navigate(['/health-forum']);
    }

    if (routeId == 266 || routeId == 267 || routeId == 268 || routeId == 269) {
      this.router.navigate(['/escort-reref-register']);
    }

    if (routeId == 274 || routeId == 275 || routeId == 276 || routeId == 277) {
      this.router.navigate(['/sattu-register']);
    }

    if (routeId == 282) {
      this.router.navigate(['/sattu-register-report']);
    }

  }

  ngAfterViewInit(): void {
    let a: any = document.querySelectorAll(".card-header");

    for (let i = 0; i < a.length; i++) {
      a[i].style.padding = 0;
    }
  }

  hideSideBar() {
    this.hideSideNav = !this.hideSideNav;
    this.hide = !this.hide;
    this.fullscreen = !this.fullscreen;
    this.valueChange.emit(this.fullscreen);
  }

}
