import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscortRerefRegisterRoutingModule } from './escort-reref-register-routing.module';
import { EscortRerefRegisterComponent } from './escort-reref-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../shared/loader/loader.module';

@NgModule({
  declarations: [EscortRerefRegisterComponent],
  imports: [
    CommonModule,
    EscortRerefRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule, LoaderModule
  ]
})

export class EscortRerefRegisterModule { }
