import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-pw-status',
  templateUrl: './pw-status.component.html',
  styleUrls: ['./pw-status.component.css']
})
export class PwStatusComponent implements OnInit {

  pwStatusForm: UntypedFormGroup;
  pwName: string;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient, private toaster: ToastrService, private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PwStatusComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data.nonPregnantWomenList)

    this.pwStatusForm = this.fb.group({
      pregnantStatus: [null],
    });

    this.pwName = this.data.nonPregnantWomenList.firstName + this.data.nonPregnantWomenList.middleName + this.data.nonPregnantWomenList.lastName;
    this.pwStatusForm.patchValue({
      pregnantStatus: this.data.nonPregnantWomenList.pregnancyStatus
    })
  }

  onSave() {
    if (this.pwStatusForm.get('pregnantStatus').value == 'N' || this.pwStatusForm.get('pregnantStatus').value == 'NA') {
      return;
    } else {
      let Dto = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        familyDetailId: this.data.nonPregnantWomenList.familyDetailId,
        pregnantWomanStatus: this.pwStatusForm.value.pregnantStatus
      }
      console.log(Dto);
      this.http.post(`${this.httpService.baseURL}pwr/updateFamilyPregnantWomanDetail`, Dto).subscribe((res: any) => {
        if (res.status) {
          this.dialogRef.close();
          this.showSuccess('Success');
        } else {
          this.showError(res.message);
        }
      }, error => {
        this.dialogRef.close();
        this.showError('Error')
      });
    }

  }

  /* Show success message toaster */
  showSuccess(message) {
    this.toaster.success(message, 'Status Change', {
      timeOut: 3000,
    });
  }

  /* Show Error message toaster */
  showError(message) {
    this.toaster.error(message, 'Error', {
      timeOut: 3000,
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
