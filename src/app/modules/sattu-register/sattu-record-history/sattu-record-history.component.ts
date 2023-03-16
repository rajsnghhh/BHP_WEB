import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';
import { ConfirmationDialogService } from '../../shared/confirmation-dialog/confirmation-dialog.service';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { CreateSattuRegisterComponent } from '../create-sattu-register/create-sattu-register.component';
import { SattuRegisterService } from '../sattu-register.service';

@Component({
  selector: 'app-sattu-record-history',
  templateUrl: './sattu-record-history.component.html',
  styleUrls: ['./sattu-record-history.component.css']
})
export class SattuRecordHistoryComponent {
  loader: boolean = true;
  showFamNo: any;
  showFamName: any;
  showGuardianName: any;
  historyRecords: Array<any> = [];
  updateMode: boolean;
  deleteMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SattuRecordHistoryComponent>,
    private httpService: HttpService, private sattuService: SattuRegisterService,
    private confirmationDialogService: ConfirmationDialogService,
    public dialog: MatDialog, private toaster: ToastrService, private sidebarService: SidebarService
  ) { dialogRef.disableClose = true }


  ngOnInit(): void {
    console.log(this.data);
    this.showFamNo = this.data.history.familyNumber;
    this.showFamName = this.data.history.familyName;
    this.showGuardianName = this.data.history.husbandOrGuardianName;
    this.history();

    this.updateMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'update')?.accessType ? true : false;

    this.deleteMode = this.sidebarService.subMenuList
      .find(functionShortName => functionShortName.functionMasterId == 5)?.subMenuDetailList
      .find(item => item.subFunctionMasterId == 274 || item.subFunctionMasterId == 275 || item.subFunctionMasterId == 276 || item.subFunctionMasterId == 277)?.accessDetailList
      .find(accessType => accessType.accessType == 'delete')?.accessType ? true : false;
  }

  history() {
    let historyObj = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: this.data.history.familyDetailId };
    console.log(historyObj);

    this.sattuService.getSattuRegisterHistoryOfAFamily(historyObj).subscribe((res: any) => {
      this.historyRecords = res.responseObject;
      this.historyRecords.forEach(x => {
        if (x.sattuPreparingFrequency == 'R') {
          x.sattuPreparingFrequency = 'Regular'
        } else if (x.sattuPreparingFrequency == 'NP') {
          x.sattuPreparingFrequency = 'No' + ' ' + '(' + x.sattuNonPreparingReasonName + ')'
        } else {
          x.sattuPreparingFrequency = 'Irregular'
        }
      })
      console.log(this.historyRecords, 'historyRecords');
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editSattuRecord(history) {
    console.log(history);
    const dialogRef = this.dialog.open(CreateSattuRegisterComponent, {
      width: '800px',
      height: '260px',
      data: { familyDetails: history, visitDate: history.visitDate, villageId: this.data.villageId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.history();
    });

  }

  deleteSattuRecord(history) {
    console.log(history);

    this.confirmationDialogService.confirm('', 'Are you sure you want to delete this record ?')
      .then(() => this.delete(history)).catch(() => '');
  }

  delete(history) {
    let deleteObj = {
      dataAccessDTO: this.httpService.dataAccessDTO, sattuRegisterMasterId: history.sattuRegisterMasterId,
      familyId: history.familyDetailId, active_flag: 'D'
    };

    this.sattuService.saveOrUpdate(deleteObj).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.history();
      } else {
        this.showError(res.message);
      }
    })
  }

  showSuccess(message) {
    this.toaster.success(message, 'Sattu Register', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Sattu Register', {
      timeOut: 3000,
    });
  }

}
