import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../core/http/http.service';
import { EventRegisterService } from '../event-register.service';
import { FocusedGroupDiscussionComponent } from '../focused-group-discussion/focused-group-discussion.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-fgd-view',
  templateUrl: './fgd-view.component.html',
  styleUrls: ['./fgd-view.component.css']
})
export class FgdViewComponent {
  loader: boolean = true;
  fgdDetails: Array<any> = [];
  createMode: boolean;
  updateMode: boolean;
  deleteMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FgdViewComponent>,
    private eventService: EventRegisterService, private httpService: HttpService,
    public dialog: MatDialog, private toaster: ToastrService,
    private confirmationDialogService: ConfirmationDialogService, private sidebarService: SidebarService,) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.fgdLists();

    //CRUD Access
    this.createMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'create')?.accessType ? true : false;

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 286 || item.subFunctionMasterId == 287 || item.subFunctionMasterId == 288 || item.subFunctionMasterId == 289)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  //view already created FGDs
  fgdLists() {
    let req = { dataAccessDTO: this.httpService.dataAccessDTO, eventRegisterSpecialId: this.data?.special?.eventRegisterSpecialId };
    this.loader = false;
    this.eventService.viewSpecificSpecialEventRegister(req).subscribe((res) => {
      this.loader = true;
      this.fgdDetails = res.responseObject?.fgdDetails
      this.fgdDetails.forEach(x => {
        x.beneficiaryLength = x.familyList?.length + x.childList?.length
      })
      console.log(this.fgdDetails, 'fgdDetails');
    });

  }

  //view specific FGD details
  viewFGDDetails(fgd) {
    fgd.modalType = 'view'
    this.editFGD(fgd)
  }

  //create FGD modal
  CreateFGDModal() {
    const dialogRef = this.dialog.open(FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        special: this.data?.special
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }

  //updateFGD modal
  editFGD(fgd) {
    const dialogRef = this.dialog.open(FocusedGroupDiscussionComponent, {
      width: '1000px',
      height: '550px',
      data: {
        branchID: this.data.branchID,
        special: this.data?.special,
        fgdDetails: fgd
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      this.fgdLists();
    });
  }

  //delete FGD modal confirmation
  deleteFGDEvent(fgd) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this FGD ?')
      .then(() => this.fdgDelete(fgd)
      )
      .catch(() => '');
  }

  //delete FGD modal
  fdgDelete(fgd) {
    let deleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      eventSpecialFgdMapId: fgd.eventSpecialFgdMapId, active_flag: "D"
    }
    this.loader = false;
    this.eventService.saveOrUpdateFgd(deleteObj).subscribe((res: any) => {
      this.loader = true;
      console.log(res);
      if (res.status == true) {
        this.showSuccess('success');
        this.fgdLists();
      } else {
        this.showError(res.message);
      }

    })
  }

  showSuccess(message) {
    this.toaster.success(message, 'FGD Deleted', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'FGD Deleted', {
      timeOut: 3000,
    });
  }
}
