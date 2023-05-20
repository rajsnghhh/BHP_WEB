import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';
import { EventRegisterService } from '../event-register.service';
import { FocusedGroupDiscussionComponent } from '../focused-group-discussion/focused-group-discussion.component';

@Component({
  selector: 'app-fgd-view',
  templateUrl: './fgd-view.component.html',
  styleUrls: ['./fgd-view.component.css']
})
export class FgdViewComponent {
  loader: boolean = true;
  fgdDetails: Array<any> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FgdViewComponent>,
    private eventService: EventRegisterService, private httpService: HttpService, public dialog: MatDialog,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.fgdLists();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  fgdLists() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: this.data.specialEventID };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.fgdDetails = res.responseObject.fgdDetails
      console.log(this.fgdDetails, 'fgdDetails');
    });
  }

  CreateFGDModal() {
    const dialogRef = this.dialog.open(FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        specialEventID: this.data.specialEventID
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }

  editFGD(fgd) {
    const dialogRef = this.dialog.open(FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        specialEventID: this.data.specialEventID,
        fgdDetails:fgd
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }
}
