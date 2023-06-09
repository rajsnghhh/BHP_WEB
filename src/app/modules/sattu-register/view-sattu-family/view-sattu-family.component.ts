import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public validationService: ValidationService,
    private httpService: HttpService, private sattuService: SattuRegisterService,
    public dialog: MatDialog,
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
      villageId: this.data
    }

    this.loader = false;
    this.sattuService.getListOfFamiliesOfAVillage(famReq).subscribe((res: any) => {
      this.loader = true;
      if (res.status == true) {
        this.familyList = res.responseObject;
        this.familyList = this.familyList?.map(({
          setStatus = '',
          ...rest
        }) => ({
          setStatus,
          ...rest
        }));

        this.setStatusForAll(this.familyList);
        console.log(this.familyList, ' this.familyList');
      } else {
        this.familyList = [];
      }

    })

  }

  createSattu(fami) {
    this.dialog.open(CreateSattuRegisterComponent, {
      width: '800px',
      height: '260px',
      data: { familyDetails: fami, visitDate: this.viewFamilyForm.value.date, villageId: this.data }
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  //Set PW, PEM, LM, 2-5YR
  setStatusForAll(familys: any) {
    familys.forEach(family => {
      if (family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman == "Y" &&
        family.hasChildPresentInPem == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "PEM, LM, PW, 2-5 yr"
      } else if (family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman?.includes("N") &&
        family.hasChildPresentInPem?.includes("N") &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "LM"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.presentInPregnantWoman == "Y" &&
        family.hasChildPresentInPem?.includes("N") &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "PW"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.presentInPregnantWoman?.includes("N") &&
        family.hasChildPresentInPem == "Y" &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "PEM"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.presentInPregnantWoman?.includes("N") &&
        family.has2to5yearsoldChildren == "Y" &&
        family.hasChildPresentInPem?.includes("N")
      ) {
        family.setStatus = "2-5 yr"
      } else if (family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman == "Y" &&
        family.hasChildPresentInPem?.includes("N") &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "LM, PW"
      } else if (family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman?.includes("N") &&
        family.hasChildPresentInPem == "Y" &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "LM, PEM"
      } else if (family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman?.includes("N") &&
        family.has2to5yearsoldChildren == "Y" &&
        family.hasChildPresentInPem?.includes("N")
      ) {
        family.setStatus = "LM, 2-5 yr"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.has2to5yearsoldChildren?.includes("N") &&
        family.presentInPregnantWoman == "Y" &&
        family.hasChildPresentInPem == "Y"
      ) {
        family.setStatus = "PW, PEM"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.hasChildPresentInPem?.includes("N") &&
        family.presentInPregnantWoman == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "PW, 2-5 yr"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.presentInPregnantWoman?.includes("N") &&
        family.hasChildPresentInPem == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "PEM, 2-5 yr"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.hasChildPresentInPem == "Y" &&
        family.presentInPregnantWoman == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "PEM, PW, 2-5 yr"
      } else if (family.hasChildPresentInPem?.includes("N") &&
        family.presentInLactatingMother == "Y" &&
        family.presentInPregnantWoman == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "LM,PW,2-5 yr"
      } else if (family.presentInPregnantWoman?.includes("N") &&
        family.presentInLactatingMother == "Y" &&
        family.hasChildPresentInPem == "Y" &&
        family.has2to5yearsoldChildren == "Y"
      ) {
        family.setStatus = "LM, PEM, 2-5 yr"
      } else if (family.has2to5yearsoldChildren?.includes("N") &&
        family.presentInLactatingMother == "Y" &&
        family.hasChildPresentInPem == "Y" &&
        family.presentInPregnantWoman == "Y"
      ) {
        family.setStatus = "LM, PEM, PW"
      } else if (family.presentInLactatingMother?.includes("N") &&
        family.presentInPregnantWoman?.includes("N") &&
        family.hasChildPresentInPem?.includes("N") &&
        family.has2to5yearsoldChildren?.includes("N")
      ) {
        family.setStatus = "--"
      } else {
        family.setStatus = "--"
      }
    });
  }

}
