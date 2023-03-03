import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PemRegisterRoutingModule } from './pem-register-routing.module';
import { PemRegisterCreateComponent } from './pem-register-create/pem-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [PemRegisterCreateComponent],
  imports: [
    CommonModule,
    PemRegisterRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule, LoaderModule
  ]
})
export class PemRegisterModule { }
