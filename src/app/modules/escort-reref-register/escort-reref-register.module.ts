import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscortRerefRegisterRoutingModule } from './escort-reref-register-routing.module';
import { EscortRerefRegisterComponent } from './escort-reref-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../shared/loader/loader.module';
import { EscortReferRegisterMatModalComponent } from './escort-refer-register-mat-modal/escort-refer-register-mat-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [EscortRerefRegisterComponent, EscortReferRegisterMatModalComponent],
  imports: [
    CommonModule,
    EscortRerefRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule, LoaderModule, MatDialogModule
  ]
})

export class EscortRerefRegisterModule { }
