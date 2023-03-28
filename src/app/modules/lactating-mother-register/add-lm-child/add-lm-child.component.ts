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
  muacRegisterId6A: any;
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
    console.log(this.data.childWiselactatingmotherList);

    let Dto = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      childId: this.data?.childWiselactatingmotherList?.childDetailId
    }
    this.http.post(`${this.httpService.baseURL}lactatingmotherregister/childWiselactatingmotherMUACList`, Dto).subscribe((res: any) => {
      console.log(res);

      this.childMuacList = res?.responseObject;
      this.muacRegisterId6month = this.childMuacList.find(month => month.muacForMonth == "6")?.muacRegisterId;
      this.muacRegisterId6A = this.childMuacList.find(month => month.muacForMonth == "6A")?.muacRegisterId;
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
          firstVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate,
          secondVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate,
          thirdVisitDate: this.data?.childWiselactatingmotherList?.childBasicStatusDto.thirdVisitDate,
          firstVisitAfter6Mon: this.childMuacList.find(month => month.muacForMonth == "6")?.muacRecordDate,
          ebfUpto6Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto6Complete,
          complementaryFoodAfter6: this.data?.childWiselactatingmotherList?.childBasicStatusDto.complementaryFoodStartedAfter6Months,
          firstVisitheight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6")?.height) == 0 ? null :
            this.childMuacList.find(month => month.muacForMonth == "6")?.height,
          firstVisitweight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6")?.weight) == 0 ? null :
            this.childMuacList.find(month => month.muacForMonth == "6")?.weight,
          firstVisitmuac6month: this.childMuacList.find(month => month.muacForMonth == "6")?.muac,
          secondVisitAfter6Mon: this.childMuacList.find(month => month.muacForMonth == "6A")?.muacRecordDate,
          breastfeedafter6mon: this.data?.childWiselactatingmotherList?.childBasicStatusDto.breastFeedingContinuedAfter6Months,
          secondVisitheight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6A")?.height) == 0 ? null :
            this.childMuacList.find(month => month.muacForMonth == "6A")?.height,
          secondVisitweight6month: parseInt(this.childMuacList.find(month => month.muacForMonth == "6A")?.weight) == 0 ? null :
            this.childMuacList.find(month => month.muacForMonth == "6A")?.weight,
          secondVisitmuac6month: this.childMuacList.find(month => month.muacForMonth == "6A")?.muac,
          visitDateAfter12Mon: this.childMuacList.find(month => month.muacForMonth == "12")?.muacRecordDate,
          primaryImmunizationUpto12Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto12Complete,
          complementaryFoodAfter12: this.data?.childWiselactatingmotherList?.childBasicStatusDto.complementaryFoodContinuedAfter12Months,
          height12month: parseInt(this.childMuacList.find(month => month.muacForMonth == "12")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "12")?.height,
          weight12month: parseInt(this.childMuacList.find(month => month.muacForMonth == "12")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "12")?.weight,
          muac12month: this.childMuacList.find(month => month.muacForMonth == "12")?.muac,
          visitDateAfter18: this.childMuacList.find(month => month.muacForMonth == "18")?.muacRecordDate,
          ebfUpto18Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto18Complete,
          complementaryFoodAfter18: this.data?.childWiselactatingmotherList?.childBasicStatusDto.complementaryFoodContinuedUpto18Months,
          height18month: parseInt(this.childMuacList.find(month => month.muacForMonth == "18")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "18")?.height,
          weight18month: parseInt(this.childMuacList.find(month => month.muacForMonth == "18")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "18")?.weight,
          muac18month: this.childMuacList.find(month => month.muacForMonth == "18")?.muac,
          visitDateAfter24Mon: this.childMuacList.find(month => month.muacForMonth == "24")?.muacRecordDate,
          primaryImmunizationUpto24Completed: this.data?.childWiselactatingmotherList?.childBasicStatusDto?.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: this.data?.childWiselactatingmotherList?.childBasicStatusDto.ebfUpto24Complete,
          complementaryFoodAfter24: this.data?.childWiselactatingmotherList?.childBasicStatusDto.complementaryFoodContinuedUpto24Months,
          height24month: parseInt(this.childMuacList.find(month => month.muacForMonth == "24")?.height) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "24")?.height,
          weight24month: parseInt(this.childMuacList.find(month => month.muacForMonth == "24")?.weight) == 0 ? null : this.childMuacList.find(month => month.muacForMonth == "24")?.weight,
          muac24month: this.childMuacList.find(month => month.muacForMonth == "24")?.muac,

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
      this.childBirthForm.get('secondVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('firstVisitAfter6Mon').setValidators(Validators.required);
    }
    else if (year >= 1 && year < 2 && month < 6) {
      this.after6m = false;
      this.after12m = false;
      this.after18m = true;
      this.after24m = true;
      this.childBirthForm.get('firstVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
      this.childBirthForm.get('secondVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
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
      this.childBirthForm.get('secondVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
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
      this.childBirthForm.get('secondVisitmuac6month').setValidators(Validators.compose([Validators.required, this.muacRange]));
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
      firstVisitDate: [this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate ?
        this.data?.childWiselactatingmotherList?.childBasicStatusDto.firstVisitDate : ''],
      secondVisitDate: [this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate ?
        this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate : ''],
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
    // this.childBirthForm.controls.secondVisitDate.setValue(null);
    // this.childBirthForm.controls.thirdVisitDate.setValue(null);

    if (this.childBirthForm.value.firstVisitDate) {
      this.enableSecondVisitDate = true;
    }
    else {
      this.enableSecondVisitDate = false;
      this.enableThirdVisitDate = false;
      this.childBirthForm.controls.secondVisitDate.setValue(null);
      this.childBirthForm.controls.thirdVisitDate.setValue(null);
    }

  }

  restrictthirdDate(date) {
    this.secondVisit = moment(date).add(1, 'days').format('YYYY-MM-DD');
    // this.childBirthForm.controls.thirdVisitDate.setValue(null);

    console.log(this.childBirthForm.value.secondVisitDate)
    console.log(this.data?.childWiselactatingmotherList?.childBasicStatusDto.secondVisitDate);

    if (this.childBirthForm.value.secondVisitDate) {
      this.enableThirdVisitDate = true;
    }
    else {
      this.enableThirdVisitDate = false;
      this.childBirthForm.controls.thirdVisitDate.setValue(null);
    }

  }

  restrictSecondVisitAfter6Mon(date) {
    this.setSecondVisitAfter6Mon = moment(date).add(1, 'days').format('YYYY-MM-DD');
    if (!date) {
      var x = this.childBirthForm.controls;
      x.ebfUpto6Complete.setValue(null);
      x.complementaryFoodAfter6.setValue(null);
      x.firstVisitheight6month.setValue('');
      x.firstVisitweight6month.setValue('');
      x.firstVisitmuac6month.setValue('');
      x.secondVisitAfter6Mon.setValue('');
      x.breastfeedafter6mon.setValue(null);
      x.secondVisitheight6month.setValue('');
      x.secondVisitweight6month.setValue('');
      x.secondVisitmuac6month.setValue('');
    }
  }

  clearSecondDateRecords(date) {
    if (!date) {
      var x = this.childBirthForm.controls;
      x.secondVisitAfter6Mon.setValue('');
      x.breastfeedafter6mon.setValue(null);
      x.secondVisitheight6month.setValue('');
      x.secondVisitweight6month.setValue('');
      x.secondVisitmuac6month.setValue('');
    }
  }

  after12Mon(date) {
    if (!date) {
      var x = this.childBirthForm.controls;
      x.primaryImmunizationUpto12Completed.setValue(null);
      x.ebfUpto12Complete.setValue(null);
      x.complementaryFoodAfter12.setValue('');
      x.height12month.setValue('');
      x.weight12month.setValue('');
      x.muac12month.setValue('');
    }
  }

  after18Mon(date) {
    if (!date) {
      var x = this.childBirthForm.controls;
      x.ebfUpto18Complete.setValue(null);
      x.complementaryFoodAfter18.setValue(null);
      x.height18month.setValue('');
      x.weight18month.setValue('');
      x.muac18month.setValue('');
    }
  }

  after24Mon(date) {
    if (!date) {
      var x = this.childBirthForm.controls;
      x.primaryImmunizationUpto24Completed.setValue(null);
      x.ebfUpto24Complete.setValue(null);
      x.complementaryFoodAfter24.setValue('');
      x.height24month.setValue('');
      x.weight24month.setValue('');
      x.muac24month.setValue('');
    }
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

  formDisabledSave() {
    var x = this.childBirthForm.value;
    let flag = true;
    if ((!x.place) && (!x.birthWeight) && (!x.firstVisitDate) && (!x.firstVisitAfter6Mon)
      && (!x.visitDateAfter12Mon) && (!x.visitDateAfter18) && (!x.visitDateAfter24Mon)) {
      flag = false;
    }

    return flag;

  }
  /* Depending on condition form is Save or Edit */
  onSave() {
    // let muacDate = ['firstVisitAfter6Mon', 'visitDateAfter12Mon', 'visitDateAfter18', 'visitDateAfter24Mon'];
    // let muac = ['firstVisitmuac6month', 'muac12month', 'muac18month', 'muac24month'];
    // let range = (this.after24m == false) ? 3 : (this.after18m == false) ? 2 : (this.after12m == false) ? 1 : (this.after6m == false) ? 0 : -1;
    // if (range >= 0) {
    //   for (let i = 0; i <= range; i++) {
    //     if (!this.childBirthForm.get(muacDate[i]).value) {
    //       let x = muacDate[i].length == 9 ? -1 : -2
    //       this.showError(`Enter record date for after ${muacDate[i].slice(x)} months`);
    //       return;
    //     }
    //     if (!this.childBirthForm.get(muac[i]).value) {
    //       let x = muac[i].length == 10 ? 5 : 6
    //       this.showError(`Enter muac value for after ${muac[i].slice(4, x)} months`);
    //       return;
    //     }
    //   }
    // }
    var val = this.childBirthForm.value;

    if (val.birthWeight) {
      if (this.f.birthWeight.errors?.notInBirthWeightRange) {
        this.showError('Birth Weight range between 0 to 9 kg');
        return;
      }
    }

    if (val.secondVisitDate) {
      if (val.secondVisitDate < val.firstVisitDate || val.secondVisitDate == val.firstVisitDate) {
        this.showError('Second visit date should be after first visit date');
        return;
      }
    }

    if (val.thirdVisitDate) {
      if (val.thirdVisitDate < val.secondVisitDate || val.thirdVisitDate == val.secondVisitDate) {
        this.showError('Third visit date should be after second visit date');
        return;
      }
    }

    if (val.secondVisitAfter6Mon) {
      if (val.secondVisitAfter6Mon < val.firstVisitAfter6Mon || val.secondVisitAfter6Mon == val.firstVisitAfter6Mon) {
        this.showError('Second Visit Date After 6Mon should be after First Visit Date After 6Mon');
        return;
      }
    }

    if (val.firstVisitAfter6Mon) {
      if (!val.ebfUpto6Complete) {
        this.showError('Please select EBF after 6 Months');
        return;
      } else if (!val.complementaryFoodAfter6) {
        this.showError('Please select Complementary Food Started after 6 Months');
        return;
      }
      else if (!val.firstVisitmuac6month) {
        this.showError('Please enter MUAC value of first visit date after 6 Months');
        return;
      } else if (this.f.firstVisitmuac6month.errors?.notInMuacRange) {
        this.showError('MUAC should be 1 to 30 cm');
        return;
      }
    }

    if (val.secondVisitAfter6Mon) {
      if (!val.breastfeedafter6mon) {
        this.showError('Please select Breast Feeding Continued after 6 Months');
        return;
      } else if (!val.secondVisitmuac6month) {
        this.showError('Please enter MUAC value of second visit date after 6 Months');
        return;
      } else if (this.f.secondVisitmuac6month.errors?.notInMuacRange) {
        this.showError('MUAC should be 1 to 30 cm');
        return;
      }
    }

    if (val.visitDateAfter12Mon) {
      if (!val.primaryImmunizationUpto12Completed) {
        this.showError('Please select Primary Immunization Completed after 12 months');
        return;
      } else if (!val.ebfUpto12Complete) {
        this.showError('Please select Breast Feeding Continued up to 12 Months');
        return;
      } else if (!val.complementaryFoodAfter12) {
        this.showError('Please select Complementary Food Continued up to 12 Months');
        return;
      } else if (!val.muac12month) {
        this.showError('Please enter MUAC value after 12 Months');
        return;
      } else if (this.f.muac12month.errors?.notInMuacRange) {
        this.showError('MUAC should be 1 to 30 cm');
        return;
      }
    }

    if (val.visitDateAfter18) {
      if (!val.ebfUpto18Complete) {
        this.showError('Please select Breast Feeding Continued up to 18 Months');
        return;
      } else if (!val.complementaryFoodAfter18) {
        this.showError('Please select Complementary Food Continued up to 18 Months');
        return;
      }
      else if (!val.muac18month) {
        this.showError('Please enter MUAC value after 18 Months');
        return;
      } else if (this.f.muac18month.errors?.notInMuacRange) {
        this.showError('MUAC should be 1 to 30 cm');
        return;
      }
    }

    if (val.visitDateAfter24Mon) {
      if (!val.primaryImmunizationUpto24Completed) {
        this.showError('Please select Primary Immunization Completed after 24 months');
        return;
      } else if (!val.ebfUpto24Complete) {
        this.showError('Please select Breast Feeding Continued up to 24 Months');
        return;
      } else if (!val.complementaryFoodAfter24) {
        this.showError('Please select Complementary Food Continued up to 24 Months');
        return;
      } else if (!val.muac24month) {
        this.showError('Please enter MUAC value after 24 Months');
        return;
      } else if (this.f.muac24month.errors?.notInMuacRange) {
        this.showError('MUAC should be 1 to 30 cm');
        return;
      }
    }

    if (val.firstVisitheight6month) {
      if (this.f.firstVisitheight6month.errors?.notInHeightRange) {
        this.showError('Height range between 10 to 180 cm');
        return;
      }
    }

    if (val.firstVisitweight6month) {
      if (this.f.firstVisitweight6month.errors?.notInWeightRange) {
        this.showError('Weight range between 0 to 25');
        return;
      }
    }

    if (val.secondVisitheight6month) {
      if (this.f.secondVisitheight6month.errors?.notInHeightRange) {
        this.showError('Height range between 10 to 180 cm');
        return;
      }
    }

    if (val.secondVisitweight6month) {
      if (this.f.secondVisitweight6month.errors?.notInWeightRange) {
        this.showError('Weight range between 0 to 25');
        return;
      }
    }

    if (val.height12month) {
      if (this.f.height12month.errors?.notInHeightRange) {
        this.showError('Height range between 10 to 180 cm');
        return;
      }
    }

    if (val.weight12month) {
      if (this.f.weight12month.errors?.notInWeightRange) {
        this.showError('Weight range between 0 to 25');
        return;
      }
    }

    if (val.height18month) {
      if (this.f.height18month.errors?.notInHeightRange) {
        this.showError('Height range between 10 to 180 cm');
        return;
      }
    }

    if (val.weight18month) {
      if (this.f.weight18month.errors?.notInWeightRange) {
        this.showError('Weight range between 0 to 25');
        return;
      }
    }

    if (val.height24month) {
      if (this.f.height24month.errors?.notInHeightRange) {
        this.showError('Height range between 10 to 180 cm');
        return;
      }
    }

    if (val.weight24month) {
      if (this.f.weight24month.errors?.notInWeightRange) {
        this.showError('Weight range between 0 to 25');
        return;
      }
    }

    if (this.childDeath == 'Y') {
      if (!val.deathOfChildDate) {
        this.showError('Please enter date of death');
        return;
      } else if (!val.comment) {
        this.showError('Please enter a comment for child death');
        return;
      }
    }

    // if (this.childBirthForm.valid) {
    console.log(this.childBirthForm)
    if (this.data.editMode == false) {

      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        childBasicStatusDto: {
          childId: this.data.childWiselactatingmotherList.childDetailId,
          placeOfDelivery: this.childBirthForm.value.place,
          birthWeight: this.childBirthForm.value.birthWeight,
          firstVisitDate: this.childBirthForm.value.firstVisitDate ? this.childBirthForm.value.firstVisitDate : null,
          secondVisitDate: this.childBirthForm.value.secondVisitDate ? this.childBirthForm.value.secondVisitDate : null,
          ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
          primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
          ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
          primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,

          thirdVisitDate: this.childBirthForm.value.thirdVisitDate ? this.childBirthForm.value.thirdVisitDate : null,
          firstVisitDateAfter6Months: this.childBirthForm.value.firstVisitAfter6Mon ? this.childBirthForm.value.firstVisitAfter6Mon : null,
          secondVisitDateAfter6Months: this.childBirthForm.value.secondVisitAfter6Mon ? this.childBirthForm.value.secondVisitAfter6Mon : null,
          complementaryFoodStartedAfter6Months: this.childBirthForm.value.complementaryFoodAfter6,
          breastFeedingContinuedAfter6Months: this.childBirthForm.value.breastfeedafter6mon,
          complementaryFoodContinuedAfter12Months: this.childBirthForm.value.complementaryFoodAfter12 ? this.childBirthForm.value.complementaryFoodAfter12 : null,
          complementaryFoodContinuedUpto18Months: this.childBirthForm.value.complementaryFoodAfter18 ? this.childBirthForm.value.complementaryFoodAfter18 : null,
          complementaryFoodContinuedUpto24Months: this.childBirthForm.value.complementaryFoodAfter24 ? this.childBirthForm.value.complementaryFoodAfter24 : null
        },

        muacDataList: [{
          muacRegisterId: 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.firstVisitheight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.firstVisitweight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.firstVisitmuac6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "6",
          muacRecordDate: this.childBirthForm.value.firstVisitAfter6Mon ? this.childBirthForm.value.firstVisitAfter6Mon : null
        },
        {
          muacRegisterId: 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.secondVisitheight6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.secondVisitweight6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.secondVisitmuac6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: 'A',
          muacForMonth: '6A',
          muacRecordDate: this.childBirthForm.value.secondVisitAfter6Mon ? this.childBirthForm.value.secondVisitAfter6Mon : null,
        },
        {
          muacRegisterId: 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "12",
          muacRecordDate: this.childBirthForm.value.visitDateAfter12Mon ? this.childBirthForm.value.visitDateAfter12Mon : null
        },
        {
          muacRegisterId: 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "18",
          muacRecordDate: this.childBirthForm.value.visitDateAfter18 ? this.childBirthForm.value.visitDateAfter18 : null
        },
        {
          muacRegisterId: 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "24",
          muacRecordDate: this.childBirthForm.value.visitDateAfter24Mon ? this.childBirthForm.value.visitDateAfter24Mon : null
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
          firstVisitDate: this.childBirthForm.value.firstVisitDate ? this.childBirthForm.value.firstVisitDate : null,
          secondVisitDate: this.childBirthForm.value.secondVisitDate ? this.childBirthForm.value.secondVisitDate : null,
          ebfUpto6Complete: this.childBirthForm.value.ebfUpto6Complete,
          primaryImmunizationUpto12Completed: this.childBirthForm.value.primaryImmunizationUpto12Completed,
          ebfUpto12Complete: this.childBirthForm.value.ebfUpto12Complete,
          ebfUpto18Complete: this.childBirthForm.value.ebfUpto18Complete,
          primaryImmunizationUpto24Completed: this.childBirthForm.value.primaryImmunizationUpto24Completed,
          ebfUpto24Complete: this.childBirthForm.value.ebfUpto24Complete,

          thirdVisitDate: this.childBirthForm.value.thirdVisitDate ? this.childBirthForm.value.thirdVisitDate : null,
          firstVisitDateAfter6Months: this.childBirthForm.value.firstVisitAfter6Mon ? this.childBirthForm.value.firstVisitAfter6Mon : null,
          secondVisitDateAfter6Months: this.childBirthForm.value.secondVisitAfter6Mon ? this.childBirthForm.value.secondVisitAfter6Mon : null,
          complementaryFoodStartedAfter6Months: this.childBirthForm.value.complementaryFoodAfter6,
          breastFeedingContinuedAfter6Months: this.childBirthForm.value.breastfeedafter6mon,
          complementaryFoodContinuedAfter12Months: this.childBirthForm.value.complementaryFoodAfter12 ? this.childBirthForm.value.complementaryFoodAfter12 : null,
          complementaryFoodContinuedUpto18Months: this.childBirthForm.value.complementaryFoodAfter18 ? this.childBirthForm.value.complementaryFoodAfter18 : null,
          complementaryFoodContinuedUpto24Months: this.childBirthForm.value.complementaryFoodAfter24 ? this.childBirthForm.value.complementaryFoodAfter24 : null
        },

        muacDataList: [{
          muacRegisterId: this.muacRegisterId6month ? this.muacRegisterId6month : 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.firstVisitheight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.firstVisitweight6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.firstVisitmuac6month == null ? "0" : Math.trunc(this.childBirthForm.value.firstVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "6",
          muacRecordDate: this.childBirthForm.value.firstVisitAfter6Mon ? this.childBirthForm.value.firstVisitAfter6Mon : null
        },
        {
          muacRegisterId: this.muacRegisterId6A ? this.muacRegisterId6A : 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.secondVisitheight6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitheight6month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.secondVisitweight6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitweight6month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.secondVisitmuac6month == null ? "0" :
            Math.trunc(this.childBirthForm.value.secondVisitmuac6month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: 'A',
          muacForMonth: '6A',
          muacRecordDate: this.childBirthForm.value.secondVisitAfter6Mon ? this.childBirthForm.value.secondVisitAfter6Mon : null,
        },
        {
          muacRegisterId: this.muacRegisterId12month ? this.muacRegisterId12month : 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height12month == null ? "0" : Math.trunc(this.childBirthForm.value.height12month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight12month == null ? "0" : Math.trunc(this.childBirthForm.value.weight12month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac12month == null ? "0" : Math.trunc(this.childBirthForm.value.muac12month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "12",
          muacRecordDate: this.childBirthForm.value.visitDateAfter12Mon ? this.childBirthForm.value.visitDateAfter12Mon : null
        },
        {
          muacRegisterId: this.muacRegisterId18month ? this.muacRegisterId18month : 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height18month == null ? "0" : Math.trunc(this.childBirthForm.value.height18month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight18month == null ? "0" : Math.trunc(this.childBirthForm.value.weight18month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac18month == null ? "0" : Math.trunc(this.childBirthForm.value.muac18month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "18",
          muacRecordDate: this.childBirthForm.value.visitDateAfter18 ? this.childBirthForm.value.visitDateAfter18 : null
        },
        {
          muacRegisterId: this.muacRegisterId24month ? this.muacRegisterId24month : 0,
          childId: this.data.childWiselactatingmotherList.childDetailId,
          height: this.childBirthForm.value.height24month == null ? "0" : Math.trunc(this.childBirthForm.value.height24month * Math.pow(10, 1)) / Math.pow(10, 1),
          weight: this.childBirthForm.value.weight24month == null ? "0" : Math.trunc(this.childBirthForm.value.weight24month * Math.pow(10, 3)) / Math.pow(10, 3),
          muac: this.childBirthForm.value.muac24month == null ? "0" : Math.trunc(this.childBirthForm.value.muac24month * Math.pow(10, 1)) / Math.pow(10, 1),
          active_flag: "A",
          muacForMonth: "24",
          muacRecordDate: this.childBirthForm.value.visitDateAfter24Mon ? this.childBirthForm.value.visitDateAfter24Mon : null
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
    // }
    // else {
    //   this.showError('Form is invalid');
    // }
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
