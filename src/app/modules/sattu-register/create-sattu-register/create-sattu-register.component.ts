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
  setNP: any;

  constructor(private fb: FormBuilder, private httpService: HttpService,
    private sattuService: SattuRegisterService, @Inject(MAT_DIALOG_DATA) public data: any, private toaster: ToastrService,
    public dialogRef: MatDialogRef<CreateSattuRegisterComponent>, private modalService: NgbModal,) {
    dialogRef.disableClose = true
  }


  ngOnInit(): void {
    console.log(this.data);
    this.famNo = this.data?.familyDetails?.familyNumber;

    // if (this.data?.familyDetails?.sattuPreparingFrequency.includes('No')) {
    //   this.setNP = 'NP'
    // }
    // else if (this.data?.familyDetails?.sattuPreparingFrequency.includes('Regular')) {
    //   this.setNP = 'R'
    // } else if (this.data?.familyDetails?.sattuPreparingFrequency.includes('Irregular')) {
    //   this.setNP = 'I'
    // }

    console.log(this.setNP);
    this.createSattu_Form();


    let req = { dataAccessDTO: this.httpService.dataAccessDTO, familyId: this.data?.familyDetails?.familyDetailId };
    this.sattuService.getSattuRegisterPrerequisites(req).subscribe((res) => {
      this.prequisiteDetails = res.responseObject?.sattuNotPreparingReasons;
      console.log(this.prequisiteDetails, 'prequisiteDetails');
    });

  }

  closeDialog() {
    this.dialogRef.close();

    this.data.modalCls = this.modalService.open(this.data.modalRecord, {
      windowClass: 'record',
    });

    setTimeout(() => {
      this.data.modalCls.dismiss();
    }, 500);
  
  }

  createSattu_Form() {
    this.createSattuForm = this.fb.group({
      orientation: ['', Validators.required],
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
      sattuPreparingFrequency: this.createSattuForm.value.preparingSattu,
      sattuNonPreparingReasonId: this.createSattuForm.value.preparingSattu == 'NP' ? this.createSattuForm.value.reason : null,
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

    this.sattuService.saveOrUpdate(saveReg).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.closeDialog();
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

