import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-add-lm-child',
  templateUrl: './add-lm-child.component.html',
  styleUrls: ['./add-lm-child.component.css']
})
export class AddLmChildComponent implements OnInit, AfterContentInit {

  panelOpenState: boolean;
  childBirthForm: UntypedFormGroup;
  childDeath: any;
  after6m: boolean;
  after12m: boolean;
  after18m: boolean;
  after24m: boolean;
  childMuacList: Array<any> = [];
  muacRegisterId6month: any;
  muacRegisterId12month: any;
  muacRegisterId18month: any;
  muacRegisterId24month: any;
  editMode: boolean;
  viewMode: boolean;
  today: string = new Date(new Date().setDate(new Date().getDate())).toISOString().substring(0, 10);
  childDob: string;
  firstVisit: string;
  secondVisit: string;
  maxFirstVisit: string;
  muac6MinDate: string;
  muac6MaxDate: string;
  muac12MinDate: string;
  muac12MaxDate: string;
  muac18MinDate: string;
  muac18MaxDate: string;
  muac24MinDate: string;
  muac24MaxDate: string;
  setSecondVisitAfter6Mon: string;
  enableSecondVisitDate: boolean = false;
  enableThirdVisitDate: boolean = false;


  constructor(public validationService: ValidationService, private fb: UntypedFormBuilder, private httpService: HttpService,
    private toaster: ToastrService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddLmChildComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.childDob = this.data?.childWiselactatingmotherList?.dob;

    let after6date = moment(moment(this.childDob).add(6, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
    if (after6date > this.today) {
      this.maxFirstVisit = this.today;
    } else {
      this.maxFirstVisit = after6date;
    }
    this.muacRec6MinmaxDate();
    this.muacRec12MinmaxDate();
    this.muacRec18MinmaxDate();
    this.muacRec24MinmaxDate();

    this.editMode = this.data.editMode;
    this.panelOpenState = false;
    this.lmMuacList();
    this.createForm();
    this.disableForm();
    if (this.data.viewMode == true) {
      this.viewMode = this.data.viewMode;
      this.lmMuacList();
      this.childBirthForm.disable();
    }
  }

  ngAfterContentInit(): void {
    // this.childBirthForm.controls['secondVisitDate'].disable();

  }

  /* get the childWiselactatingmotherMUACList & 
    set the value in form */
  lmMuacList() {
    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data?.childWiselactatingmotherList?.childDetailId
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      this.childMuacList = res?.responseObject;
      this.muacRegisterId6month = this.childMuacList.find(month => month.muacForMonth == "6")?.muacRegisterId;
      this.muacRegisterId12month = this.childMuacList.find(month => month.muacForMonth == "12")?.muacRegisterId;
      this.muacRegisterId18month = this.childMuacList.find(month => month.muacForMonth == "18")?.muacRegisterId;
      this.muacRegisterId24month = this.childMuacList.find(month => month.muacForMonth == "24")?.muacRegisterId;
      if (this.data.editMode == false) {
        this.childBirthForm.reset();
      } else {
        this.restrictSecondDate(this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate);
        this.restrictthirdDate(this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate);
        this.restrictSecondVisitAfter6Mon(this.childMuacList.find(month => month.muacForMonth == "6")?.muacRecordDate);
        this.childBirthForm.patchValue({
          place: this.data?.childWiselactatingmotherList?.childBasicStatusDto.placeOfDelivery,
          birthWeight: this.data?.childWiselactatingmotherList?.childBasicStatusDto.birthWeight,
          primaryImmunizationUpto12Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto12Completed,
          primaryImmunizationUpto24Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto24Completed,
          ebfUpto6Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto6Complete,
          ebfUpto12Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto12Complete,
          ebfUpto18Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto18Complete,
          ebfUpto24Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto24Complete,
          firstVisitAfter6Mon: this.childMuacList.find(month => month.muacForMonth == "6")?.muacRecordDate,
          visitDateAfter12Mon: this.childMuacList.find(month => month.muacForMonth == "12")?.muacRecordDate,
          visitDateAfter18: this.childMuacList.find(month => month.muacForMonth == "18")?.muacRecordDate,
          visitDateAfter24Mon: this.childMuacList.find(month => month.muacForMonth == "24")?.muacRecordDate,
          firstVisitheight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "6")?.height,
          height12month: parseInt(this.childMuacList.find(month => month.muacForMonth == "12")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "12")?.height,
          height18month: parseInt(this.childMuacList.find(month => month.muacForMonth == "18")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "18")?.height,
          height24month: parseInt(this.childMuacList.find(month => month.muacForMonth == "24")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "24")?.height,
          firstVisitweight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "6")?.weight,
          weight12month: parseInt(this.childMuacList.find(month => month.muacForMonth == "12")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "12")?.weight,
          weight18month: parseInt(this.childMuacList.find(month => month.muacForMonth == "18")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "18")?.weight,
          weight24month: parseInt(this.childMuacList.find(month => month.muacForMonth == "24")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "24")?.weight,
          firstVisitmuac6month: this.childMuacList.find(month => month.muacForMonth == "6")?.muac,
          muac12month: this.childMuacList.find(month => month.muacForMonth == "12")?.muac,
          muac18month: this.childMuacList.find(month => month.muacForMonth == "18")?.muac,
          muac24month: this.childMuacList.find(month => month.muacForMonth == "24")?.muac,
          firstVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate,
          secondVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate,
        })
      }
    })
  }

  /* Disable the form field 
  depending on child age */
  disableForm() {
    let dateString = this.data?.childWiselactatingmotherList?.childAge;

    let y = dateString?.indexOf("year");
    let year = parseInt(dateString?.slice(0, y - 1));

    let m = dateString?.indexOf("r");
    let m1 = dateString?.indexOf("month");
    let month = parseInt(dateString?.slice(m + 2, m1 - 1));

    if (year <= 0 && month < 6) {
      this.after6m = true;
      this.after12m = true;
      this.after18m = true;
      this.after24m = true;
    }
    else if (year <= 0 && month >= 6 && month <= 12) {
      this.after6m = false;
      this.after12m = true;
      this.after18m = true;
      this.after24m = true;
      this.childBirthForm.get('firstVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('firstVisitAfter6Mon').setValidators(Validators.required);
    }
    else if (year >= 1 && year < 2 && month < 6) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = true;
      this.after24m = true;
      this.childBirthForm.get('firstVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac12month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('firstVisitAfter6Mon').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter12Mon').setValidators(Validators.required);
    }
    else if (year >= 1 && year < 2 && month >= 6 && month <= 12) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = true;
      this.childBirthForm.get('firstVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac12month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac18month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('firstVisitAfter6Mon').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter12Mon').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter18').setValidators(Validators.required);
    }
    else if (year >= 2) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = false;
      this.after24m = false;
      this.childBirthForm.get('firstVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac12month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac18month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('muac24month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('firstVisitAfter6Mon').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter12Mon').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter18').setValidators(Validators.required);
      this.childBirthForm.get('visitDateAfter24Mon').setValidators(Validators.required);
    }
  }

  createForm() {
    this.childBirthForm = this.fb.group({
      place: [null],
      birthWeight: ['', this.birthWeightRange],
      primaryImmunizationUpto12Completed: [null],
      primaryImmunizationUpto24Completed: [null],
      ebfUpto6Complete: [null],
      breastfeedafter6mon: [null],
      complementaryFoodAfter6: [null],
      complementaryFoodAfter12: [null],
      complementaryFoodAfter18: [null],
      complementaryFoodAfter24: [null],
      ebfUpto12Complete: [null],
      ebfUpto18Complete: [null],
      ebfUpto24Complete: [null],
      firstVisitAfter6Mon: [''],
      secondVisitAfter6Mon: [''],
      visitDateAfter12Mon: [''],
      visitDateAfter18: [''],
      visitDateAfter24Mon: [''],
      firstVisitheight6month: ['', this.heightRange],
      secondVisitheight6month: ['', this.heightRange],
      height12month: ['', this.heightRange],
      height18month: ['', this.heightRange],
      height24month: ['', this.heightRange],
      firstVisitweight6month: ['', this.weightRange],
      secondVisitweight6month: ['', this.weightRange],
      weight12month: ['', this.weightRange],
      weight18month: ['', this.weightRange],
      weight24month: ['', this.weightRange],
      firstVisitmuac6month: [''],
      secondVisitmuac6month: [''],
      muac12month: [''],
      muac18month: [''],
      muac24month: [''],
      firstVisitDate: [''],
      secondVisitDate: [''],
      thirdVisitDate: [''],
      checkChildDeath: [''],
      deathOfChildDate: [null],
      comment: [''],
    });
  }
  get f() {
    return this.childBirthForm.controls;
  }

  /* Restrict the second date depending on First visit date */
  restrictSecondDate(date) {
    this.firstVisit = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.childBirthForm.controls.secondVisitDate.setValue(null);
    this.enableSecondVisitDate = true
  }

  restrictthirdDate(date) {
    this.secondVisit = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.enableThirdVisitDate = true
  }

  restrictSecondVisitAfter6Mon(date) {
    this.setSecondVisitAfter6Mon = moment(date).add(1, 'days').format('YYYY-MM-DD');
  }


  /* make child death comment required 
  depending on checkChildDeath field value */
  checkChildDeath(value) {
    this.childDeath = value;
    if (this.childBirthForm.get('checkChildDeath').value == 'Y') {
      this.childBirthForm.get('comment').setValidators(Validators.required);
    } else {
      this.childBirthForm.get('comment').clearAsyncValidators();
    }
  }
  /* MUAC range between 1 to 30, validation */
  muacRange(controls: AbstractControl): { [key: string]: any } {
    if (controls.value >= 1 && controls.value <= 30) {
      return null;
    }
    return { 'notInMuacRange': true };
  }
  /* weight range between 0 to 25, validation */
  weightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 25 || controls.value == null) {
      return null;
    }
    return { 'notInWeightRange': true };
  }
  /* Birth Weight range between 0 to 9, validation */
  birthWeightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 0 && controls.value <= 9 || controls.value == null) {
      return null;
    }
    return { 'notInBirthWeightRange': true };
  }
  /* Height range between 10 to 180, validation */
  heightRange(controls: AbstractControl): { [key: string]: any } | null {
    if (controls.value >= 10 && controls.value <= 180 || controls.value == null || controls.value == '') {
      return null;
    }
    return { 'notInHeightRange': true };
  }

  /* Muac record for 6 month min max date set */
  muacRec6MinmaxDate() {
    this.muac6MinDate = moment(this.childDob).add(6, 'M').format('YYYY-MM-DD');
    let value = moment(moment(this.childDob).add(12, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
    if (value > this.today) {
      this.muac6MaxDate = this.today;
    } else {
      this.muac6MaxDate = value;
    }
  }

  /* Muac record for 12 month min max date set */
  muacRec12MinmaxDate() {
    this.muac12MinDate = moment(this.childDob).add(12, 'M').format('YYYY-MM-DD');
    let value = moment(moment(this.childDob).add(18, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
    if (value > this.today) {
      this.muac12MaxDate = this.today;
    } else {
      this.muac12MaxDate = value;
    }
  }

  /* Muac record for 18 month min max date set */
  muacRec18MinmaxDate() {
    this.muac18MinDate = moment(this.childDob).add(18, 'M').format('YYYY-MM-DD');
    let value = moment(moment(this.childDob).add(24, 'M').format('YYYY-MM-DD')).add(-1, 'days').format('YYYY-MM-DD');
    if (value > this.today) {
      this.muac18MaxDate = this.today;
    } else {
      this.muac18MaxDate = value;
    }
  }

  /* Muac record for 24 month min max date set */
  muacRec24MinmaxDate() {
    this.muac24MinDate = moment(this.childDob).add(24, 'M').format('YYYY-MM-DD');
    this.muac24MaxDate = this.today;
  }

  /* Depending on condition form is Save or Edit */
  onSave() {
    let muacDate = ['firstVisitAfter6Mon', 'visitDateAfter12Mon', 'visitDateAfter18', 'visitDateAfter24Mon'];
    let muac = ['firstVisitmuac6month', 'muac12month', 'muac18month', 'muac24month'];
    let range = (this.after24m == false) ? 3 : (this.after18m == false) ? 2 : (this.after12m == false) ? 1 : (this.after6m == false) ? 0 : -1;
    if (range >= 0) {
      for (let i = 0; i <= range; i++) {
        if (!this.childBirthForm.get(muacDate[i]).value) {
          let x = muacDate[i].length == 9 ? -1 : -2
          this.showError(`Enter record date for after ${muacDate[i].slice(x)} months`);
          return;
        }
        if (!this.childBirthForm.get(muac[i]).value) {
          let x = muac[i].length == 10 ? 5 : 6
          this.showError(`Enter muac value for after ${muac[i].slice(4, x)} months`);
          return;
        }
      }
    }
    if (this.childBirthForm.valid) {
      console.log(this.childBirthForm)
      if (this.data.editMode == false) {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          childBasicStatusDto: {
            childId: this.data.childWiselactatingmotherList.childDetailId,
            placeOfDelivery: this.childBirthForm.value.place,
            birthWeight: this.childBirthForm.value.birthWeight,
            firstVisitDate: this.childBirthForm.value.firstVisitDate,
            secondVisitDate: this.childBirthForm.value.secondVisitDate,
            ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
            primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
            ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
            ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
            primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
            ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
          },

          muacDataList: [{
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.firstVisitheight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.firstVisitweight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.firstVisitmuac6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "6",
            muacRecordDate: this.childBirthForm.value.firstVisitAfter6Mon
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "12",
            muacRecordDate: this.childBirthForm.value.visitDateAfter12Mon
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "18",
            muacRecordDate: this.childBirthForm.value.visitDateAfter18
          },
          {
            muacRegisterId: 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "24",
            muacRecordDate: this.childBirthForm.value.visitDateAfter24Mon
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
          }
        }
        console.log(Dto, 'reqAdd')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res: any) => {
          console.log(res, 'responseAdd');
          if (res.status) {
            this.showSuccess(res.message);
            this.dialogRef.close();
          }
          else {
            this.showError(res.message);
          }
        });
      } else {
        let Dto = {
          dataAccessDTO: this.httpService.dataAccessDTO,
          childBasicStatusDto: {
            childId: this.data.childWiselactatingmotherList.childDetailId,
            placeOfDelivery: this.childBirthForm.value.place,
            birthWeight: this.childBirthForm.value.birthWeight,
            firstVisitDate: this.childBirthForm.value.firstVisitDate,
            secondVisitDate: this.childBirthForm.value.secondVisitDate,
            ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
            primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
            ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
            ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
            primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
            ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,
          },

          muacDataList: [{
            muacRegisterId: this.muacRegisterId6month ? this.muacRegisterId6month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.firstVisitheight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.firstVisitweight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.firstVisitmuac6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "6",
            muacRecordDate: this.childBirthForm.value.firstVisitAfter6Mon
          },
          {
            muacRegisterId: this.muacRegisterId12month ? this.muacRegisterId12month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "12",
            muacRecordDate: this.childBirthForm.value.visitDateAfter12Mon
          },
          {
            muacRegisterId: this.muacRegisterId18month ? this.muacRegisterId18month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "18",
            muacRecordDate: this.childBirthForm.value.visitDateAfter18
          },
          {
            muacRegisterId: this.muacRegisterId24month ? this.muacRegisterId24month : 0,
            childId: this.data.childWiselactatingmotherList.childDetailId,
            height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
            weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
            muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
            active_flag: "A",
            muacForMonth: "24",
            muacRecordDate: this.childBirthForm.value.visitDateAfter24Mon
          }
          ],
          deadChildRegisterDto: {
            deathOfChildDate: this.childBirthForm.value.deathOfChildDate,
            comment: this.childBirthForm.value.comment ? this.childBirthForm.value.comment : null
          }
        }
        console.log(Dto, 'reqEdit')
        this.http.post(`${this.httpService.baseURL}lactatingmotherregister/saveOrUpdateLactatingMotherData`, Dto).subscribe((res: any) => {
          console.log(res, 'responseedit');

          if (res.status) {
            this.showSuccess(res.message);
            this.dialogRef.close();
          }
          else {
            this.showError(res.message);
          }
        });
      }
    } else {
      this.showError('Form is invalid');
    }
  }

  /* Close the dialog pop-up */
  closeDialog() {
    this.dialogRef.close();
  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Child Information Save', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }

  restrictTypeOfDate() {
    return false;
  }

  heightKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
    console.log(t);
  }

  weightKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 4)) : t;
    console.log(t);
  }

  muacKeyup(e) {
    var t = e.target.value;
    e.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
    console.log(t);
  }
}
