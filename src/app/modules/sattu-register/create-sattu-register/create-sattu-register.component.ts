import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sattu-register',
  templateUrl: './create-sattu-register.component.html',
  styleUrls: ['./create-sattu-register.component.css']
})
export class CreateSattuRegisterComponent {
  createSattuForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateSattuRegisterComponent>) {
    dialogRef.disableClose = true
  }


  ngOnInit(): void {
    this.createSattu_Form();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: ['', Validators.required],
      preparing: ['', Validators.required],
    })
  }

  orientation(e) { }

  preparing(e) {

  }

}

