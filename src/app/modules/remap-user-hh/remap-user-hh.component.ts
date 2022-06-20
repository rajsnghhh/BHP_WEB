import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../core/http/http.service';
import { RemapUserHhService } from './remap-user-hh.service';

@Component({
  selector: 'app-remap-user-hh',
  templateUrl: './remap-user-hh.component.html',
  styleUrls: ['./remap-user-hh.component.css']
})
export class RemapUserHhComponent implements OnInit {
  remapUserHhForm: FormGroup;
  modalForm: FormGroup;
  regionList: Array<any> = [];
  branchList: Array<any> = [];
  hcoList: Array<any> = [];
  hcoModalList: Array<any> = [];
  hcoHHList: Array<any> = [];
  loader: boolean = true;
  modalContent: any;
  modalReference: any;
  branchId: any;
  hcoUserId: any;
  ssLists: Array<any> = [];
  checkboxData: any;
  remapDto = {
    dataAccessDTO: {},
    selectedUserId: '',
    userHhUnmapRemapDtoList: [],
  };

  constructor(private fb: FormBuilder, private httpService: HttpService, private remapUserHHService: RemapUserHhService,
    private toaster: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.createForm();

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO }
    this.remapUserHHService.listOfRegionsOfUser(obj).subscribe((res) => {
      this.regionList = res.responseObject;
      console.log(this.regionList);
    });
  }

  createForm() {
    this.remapUserHhForm = this.fb.group({
      region: ['', Validators.required],
      branch: ['', Validators.required],
      hco: ['', Validators.required]
    })
  }

  get f() {
    return this.remapUserHhForm.controls;
  }

  changeRegion(regionId) {
    console.log(regionId);

    let req = {
      dataAccessDTO: this.httpService.dataAccessDTO,
      regionId: regionId,
    };
    this.remapUserHHService.listOfBranchesOfARegion(req).subscribe((res) => {
      this.branchList = res.responseObject;
      console.log(this.branchList, 'this.branchList');

    }, (error) => {
      this.branchList = null;
    }
    );
    this.remapUserHhForm.controls.branch.setValue('');
    this.remapUserHhForm.controls.hco.setValue('');
    this.hcoHHList = [];
    this.hcoList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.region == '') {
      this.remapUserHhForm.controls.branch.setValue('');
      this.remapUserHhForm.controls.hco.setValue('');
      this.hcoHHList = [];
      this.hcoList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }
  }

  changeBranch(branchId) {
    this.branchId = branchId;
    console.log(this.branchId, 'branchId');

    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.remapUserHHService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoList = res.responseObject;
      console.log(this.hcoList, 'hcoList');
    });

    this.remapUserHhForm.controls.hco.setValue('');
    this.hcoHHList = [];
    this.hcoList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.branch == '') {
      this.remapUserHhForm.controls.hco.setValue('');
      this.hcoList = [];
      this.hcoHHList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }
  }

  changeHco(hcoUserId) {
    this.hcoUserId = hcoUserId;
    console.log(this.hcoUserId);
    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, userId: this.hcoUserId }
    this.loader = false;

    this.remapUserHHService.viewUsersMappedHHDetails(Dto).subscribe((res: any) => {
      this.hcoHHList = res.responseObject;
      console.log(this.hcoHHList);
      if (this.hcoHHList == null) {
        this.showError('No Data Found');
      }
      this.loader = true;
    }, error => {
      this.showError('Error');
      this.loader = true;
    });

    this.hcoHHList = [];
    this.remapDto.userHhUnmapRemapDtoList = [];
    if (this.remapUserHhForm.value.hco == '') {
      this.hcoHHList = [];
      this.remapDto.userHhUnmapRemapDtoList = [];
    }

  }

  clickCheckbox(e, hhId) {
    this.checkboxData = e.target.checked;
    console.log(this.checkboxData, 'this.checkboxData ', hhId);

    if (this.checkboxData) {
      this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO,
        this.remapDto.selectedUserId = this.hcoUserId,

        this.remapDto.userHhUnmapRemapDtoList.push({ householdDetailId: hhId, remapUserId: null, remapSwasthyaSahayikaId: null });
      console.log(this.checkboxData);

    }
    else {
      var i = this.remapDto.userHhUnmapRemapDtoList.findIndex(list => list.householdDetailId == hhId);
      this.remapDto.userHhUnmapRemapDtoList.splice(i, 1);
    }

    console.log(this.remapDto, 'remapDto.userHhUnmapRemapDtoList');

  }

  remapUserHHModal(remapuser) {
    console.log(this.branchId, 'modalbranchId');

    let Dto = { dataAccessDTO: this.httpService.dataAccessDTO, branchId: this.branchId }

    this.remapUserHHService.hcoListOfBranch(Dto).subscribe((res: any) => {
      this.hcoModalList = res.responseObject;
      console.log(this.hcoModalList, 'hcoModalList');
    });

    this.modalContent = '';
    this.modalReference = this.modalService.open(remapuser, {
      windowClass: 'remapuser',
    });

    this.remapModalForm();

  }

  changeHcouser(hcouserId) {

    let obj = { dataAccessDTO: this.httpService.dataAccessDTO, userId: hcouserId };

    this.remapUserHHService.getActiveSsListOfAnUser(obj).subscribe((res) => {
      this.ssLists = res.responseObject;
      console.log(this.ssLists, 'ssLists');

    })

  }

  saveRemapUserHHFromModal() {

    var remapUser = this.remapDto.userHhUnmapRemapDtoList;

    remapUser.filter(xyz => { xyz.remapUserId = this.modalForm.value.hcouser ? this.modalForm.value.hcouser : null })

    console.log(remapUser);

    this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO,
      this.remapDto.userHhUnmapRemapDtoList = remapUser;

    console.log(this.remapDto);

    var ssId = this.remapDto.userHhUnmapRemapDtoList;

    ssId.filter(xyz => { xyz.remapSwasthyaSahayikaId = this.modalForm.value.ss ? this.modalForm.value.ss : null })

    console.log(ssId);

    this.remapDto.dataAccessDTO = this.httpService.dataAccessDTO,
      this.remapDto.userHhUnmapRemapDtoList = ssId;

    console.log(this.remapDto, 'finalremapdto');

    if (this.remapUserHhForm.value.hco == this.modalForm.value.hcouser) {
      this.showError('Selected User & remapping user should not be same');
      return;
    }

    this.remapUserHHService.remapUserHH(this.remapDto).subscribe((res) => {
      console.log(res);
      if (res.status == true) {
        this.showSuccess(res.message);
        this.modalDismiss();
        this.changeHco(this.hcoUserId);
      }
      else {
        this.showError(res.message);
      }
    })

  }

  remapModalForm() {
    this.modalForm = this.fb.group({
      hcouser: ['', Validators.required],
      ss: ['']
    })
  }

  get s() {
    return this.modalForm.controls;
  }

  modalDismiss() {
    this.modalReference.close();
  }

  showSuccess(message) {
    this.toaster.success(message, 'Remap-User-HH', {
      timeOut: 3000,
    });
  }

  showError(message) {
    this.toaster.error(message, 'Remap-User-HH', {
      timeOut: 3000,
    });
  }

}