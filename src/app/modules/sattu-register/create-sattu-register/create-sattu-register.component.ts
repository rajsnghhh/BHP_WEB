import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';
import { SattuRegisterService } from '../sattu-register.service';

@Component({
  selector: 'app-create-sattu-register',
  templateUrl: './create-sattu-register.component.html',
  styleUrls: ['./create-sattu-register.component.css']
})
export class CreateSattuRegisterComponent {
  createSattuForm: FormGroup;
  prequisiteDetails: Array<any> = [];

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private sattuService: SattuRegisterService, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateSattuRegisterComponent>) {
    dialogRef.disableClose = true
  }


  ngOnInit(): void {
    this.createSattu_Form();
    console.log(this.data);


    let req = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: this.data.familyDetailId };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe((res) => {
      this.prequisiteDetails = res.responseObject;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: ['', Validators.required],
      regularly: ['', Validators.required],
      irregularly: ['', Validators.required],
      notPreparing: ['', Validators.required],
      reason: ['', Validators.required],
    })
  }

  get s() {
    return this.createSattuForm.controls;
  }

  orientation(e) { }
  regularly(e) { }

  irregularly(e) {

  }

  notPreparing(e) {

  }


}

