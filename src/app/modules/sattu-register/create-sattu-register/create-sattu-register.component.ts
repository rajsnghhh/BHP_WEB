import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  childDetailLists: Array<any> = [];
  famNo: any;
  setFrequency: any;
  loader: boolean = true;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private sattuService: SattuRegisterService, @Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService,
    public dialogRef: MatDialogRef<CreateSattuRegisterComponent>, private modalService: NgbModal,) {
    dialogRef.disableClose = true
  }

  ngOnInit(): void {
    console.log(this.data);
    this.famNo = this.data?.familyDetails?.familyNumber;
    this.createSattu_Form();

    if (this.data?.familyDetails?.sattuRegisterMasterId) {
      if (this.data?.familyDetails?.sattuPreparingFrequency == 'Regular') {
        this.setFrequency = 'R';
      } else if (this.data?.familyDetails?.sattuPreparingFrequency == 'Irregular') {
        this.setFrequency = 'I';
      } else {
        this.setFrequency = 'NP';
      }
    }

    let req = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: this.data?.familyDetails?.familyDetailId };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe((res) => {
      this.prequisiteDetails = res.responseObject?.sattuNotPreparingReasons;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

  preparingSattu(e) {
    console.log(e);
    if (e == 'Regular') {
      this.setFrequency = 'R'
    } else if (e == 'Irregular') {
      this.setFrequency = 'I'
    }
    else {
      this.setFrequency = 'NP'
    }
    console.log(this.setFrequency);
  }

  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: [this.data?.familyDetails?.sattuRegisterMasterId ?
        this.data?.familyDetails?.sattuOrientationDate ? 'Y' : 'N' : '', Validators.required],
      preparingSattu: [this.data?.familyDetails?.sattuPreparingFrequency ?
        this.data?.familyDetails?.sattuPreparingFrequency.includes('No') ? "NP" :
          this.data?.familyDetails?.sattuPreparingFrequency : '', Validators.required],
      reason: [this.data?.familyDetails?.sattuNonPreparingReasonId ?
        this.data?.familyDetails?.sattuNonPreparingReasonId : '', Validators.required],
    })

    console.log(this.data?.familyDetails?.sattuOrientationDate);
    if (this.data?.familyDetails?.sattuOrientationDate != null) {
      this.createSattuForm.controls['orientation'].disable();
      this.createSattuForm.controls.orientation.setValue('Y');
    }

    if (this.data?.familyDetails?.sattuRegisterMasterId) {
      this.createSattuForm.controls['orientation'].enable();
    }
    console.log(this.createSattuForm.value.preparingSattu);

  }

  get s() {
    return this.createSattuForm.controls;
  }

  sattuSaveDisabled() {
    let flag = true;

    if (this.data?.familyDetails?.sattuOrientationDate == null) {
      if (!this.createSattuForm.value.orientation) {
        flag = false;
      }
    }

    if (!this.createSattuForm.value.preparingSattu) {
      flag = false;
    }

    if (this.createSattuForm.value.preparingSattu == 'NP') {
      if (!this.createSattuForm.value.reason) {
        flag = false;
      }
    }

    return flag;
  }

  saveSattuRegister() {
    console.log(this.data);

    if (!this.data?.familyDetails?.sattuRegisterMasterId) {
      this.childDetailLists.push(this.data?.familyDetails?.below5YearsChildren.concat(this.data?.familyDetails?.otherChildren)
        .concat(this.data?.familyDetails?.adolescentGilrChildren));
      console.log(this.childDetailLists);


      var childSetArray: Array<any> = [];
      this.childDetailLists[0].forEach(x => {
        childSetArray.push({
          sattuRegisterChildMapId: 0,
          childDetailId: x.childDetailId,
          childName: x.childName,
          dob: x.dob,
          age: x.age,
          sex: x.sex,
          presentInPem: x.presentInPem,
          latestMuacRegisterId: x.latestMuacRegisterId,
          latestMuac: x.latestMuac,
          latestMuacRegisterTag: x.latestMuacRegisterTag,
          latestMuacIndicatorName: x.latestMuacIndicatorName,
          active_flag: 'A'
        })
      })

      console.log(childSetArray);
      console.log(this.childDetailLists);


      let saveReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        sattuRegisterMasterId: 0,
        familyId: this.data?.familyDetails?.familyDetailId,
        sattuOrientationDate: '',
        visitDate: this.data?.visitDate,
        sattuPreparingFrequency: this.setFrequency,
        sattuNonPreparingReasonId: this.setFrequency == 'NP' ? this.createSattuForm.value.reason : null,
        presentInPregnantWoman: this.data?.familyDetails?.presentInPregnantWoman,
        presentInLactatingMother: this.data?.familyDetails?.presentInLactatingMother,
        hasChildPresentInPem: this.data?.familyDetails?.hasChildPresentInPem,
        has2to5yearsOldChildren: this.data?.familyDetails?.has2to5yearsoldChildren,
        hasAdolescentGirlChildren: this.data?.familyDetails?.hasAdolescentGirlChildren,
        active_flag: 'A',
        childDetailList: childSetArray
      }

      if (this.data?.familyDetails?.sattuOrientationDate != null || this.createSattuForm.value.orientation == 'Y') {
        saveReg.sattuOrientationDate = this.data?.familyDetails?.sattuOrientationDate ? this.data?.familyDetails?.sattuOrientationDate :
          this.data?.visitDate;
      } else if (this.createSattuForm.value.orientation == 'N') {
        saveReg.sattuOrientationDate = null;
      }

      console.log(saveReg);

      this.loader = false;
      this.sattuService.saveOrUpdate(saveReg).subscribe((res: any) => {
        this.loader = true;
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.closeDialog();
        } else {
          this.showError(res.message);
        }
      })
    } else {
      console.log(this.data?.familyDetails);

      let updateReg = {
        dataAccessDTO: this.httpService.dataAccessDTO,
        sattuRegisterMasterId: this.data?.familyDetails?.sattuRegisterMasterId,
        visitDate: this.data?.familyDetails?.visitDate,
        familyId: this.data?.familyDetails?.familyDetailId,
        active_flag: 'A',
        sattuPreparingFrequency: this.setFrequency,
        sattuNonPreparingReasonId: this.createSattuForm.value.reason ? this.createSattuForm.value.reason : null,
        sattuFamilyOrientationId: this.data?.familyDetails.sattuFamilyOrientationId,
        sattuOrientationDate: ''

      }

      if (this.createSattuForm.value.orientation == 'Y') {
        updateReg.sattuOrientationDate = this.data?.familyDetails?.sattuOrientationDate ? this.data?.familyDetails?.sattuOrientationDate :
          this.data?.visitDate;
      } else {
        updateReg.sattuOrientationDate = null;
      }
      console.log(updateReg, 'updateReg');
      this.loader = false;
      this.sattuService.saveOrUpdate(updateReg).subscribe((res: any) => {
        this.loader = true;
        console.log(res);
        if (res.status == true) {
          this.showSuccess(res.message);
          this.closeDialog();
          let historyObj = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: this.data.familyDetails.familyDetailId };
          this.sattuService.getSattuRegisterHistoryOfAFamily(historyObj).subscribe((res: any) => {
            console.log(res.responseObject);
          })


        } else {
          this.showError(res.message);
        }
      })

    }

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

