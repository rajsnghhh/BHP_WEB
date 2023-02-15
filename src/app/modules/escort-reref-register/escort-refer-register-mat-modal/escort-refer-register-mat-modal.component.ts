import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-escort-refer-register-mat-modal',
  templateUrl: './escort-refer-register-mat-modal.component.html',
  styleUrls: ['./escort-refer-register-mat-modal.component.css']
})
export class EscortReferRegisterMatModalComponent {
  benData: Array<any> = []
  famNo: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EscortReferRegisterMatModalComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.famNo = this.data.famNo;
    this.benData = this.data.ben;
    console.log(this.famNo, this.benData);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

