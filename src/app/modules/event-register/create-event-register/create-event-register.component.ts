import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-event-register',
  templateUrl: './create-event-register.component.html',
  styleUrls: ['./create-event-register.component.css']
})
export class CreateEventRegisterComponent {
  loader: boolean = true;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreateEventRegisterComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
