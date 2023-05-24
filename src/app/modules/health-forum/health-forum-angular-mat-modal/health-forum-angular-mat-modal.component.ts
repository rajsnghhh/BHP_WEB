import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-health-forum-angular-mat-modal',
  templateUrl: './health-forum-angular-mat-modal.component.html',
  styleUrls: ['./health-forum-angular-mat-modal.component.css']
})
export class HealthForumAngularMatModalComponent implements OnInit {

  lists: Array<any> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<HealthForumAngularMatModalComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data.villLists);//village list to show in a dialog
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
