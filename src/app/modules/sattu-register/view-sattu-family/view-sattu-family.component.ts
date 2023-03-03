import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { CreateSattuRegisterComponent } from '../create-sattu-register/create-sattu-register.component';
import { SattuRegisterService } from '../sattu-register.service';

@Component({
  selector: 'app-view-sattu-family',
  templateUrl: './view-sattu-family.component.html',
  styleUrls: ['./view-sattu-family.component.css']
})
export class ViewSattuFamilyComponent {
  loader: boolean = true;
  viewFamilyForm: FormGroup;
  familyList: Array<any> = [];
  minDate: any;
  maxDate: any;
  searchFullscreen: boolean;
  sattuSearch: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sidebarService: SidebarService, private http: HttpClient,
    private router: Router, private fb: FormBuilder, public validationService: ValidationService,
    private httpService: HttpService, private sattuService: SattuRegisterService,
    public dialog: MatDialog, private toaster: ToastrService,
    public dialogRef: MatDialogRef<ViewSattuFamilyComponent>) { dialogRef.disableClose = true; }

  ngDoCheck(): void {
    this.searchFullscreen = this.validationService.val;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.viewFamily_Form();
    this.minDate = moment(new Date()).subtract(7, "days").format("YYYY-MM-DD");
    this.maxDate = moment(new Date()).add(0, "days").format("YYYY-MM-DD");
  }

  viewFamily_Form() {
    this.viewFamilyForm = this.fb.group({
      date: ['', Validators.required],
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  get r() {
    return this.viewFamilyForm.controls;
  }

  changeDate() {
    let famReq = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      visitDate: this.viewFamilyForm.value.date,
      villageId: this.data,
    }

    this.loader = false;
    this.sattuService.getListOfFamiliesOfAVillage(famReq).subscribe((res: any) => {
      this.loader = true;
      if (res.status == true) {
        this.familyList = res.responseObject;
        console.log(this.familyList, ' this.familyList');
      } else {
        this.familyList = [];
      }

    })

  }

  createSattu(fami) {
    this.dialog.open(CreateSattuRegisterComponent, {
      width: '700px',
      height: '250px',
      data: fami
    });
  }

  restrictTypeOfDate() {
    return false;
  }

}
