import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyActivityRegisterRoutingModule } from './daily-activity-register-routing.module';
import { DailyActivityRegisterComponent } from './daily-activity-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../shared/loader/loader.module';


@NgModule({
  declarations: [DailyActivityRegisterComponent],
  imports: [
    CommonModule,
    DailyActivityRegisterRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule, LoaderModule
  ]
})
export class DailyActivityRegisterModule { }
