import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsSetupRoutingModule } from './ss-setup-routing.module';
import { SsSetupComponent } from './ss-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [SsSetupComponent],
  imports: [
    CommonModule,
    SsSetupRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule, LoaderModule
  ]
})
export class SsSetupModule { }
