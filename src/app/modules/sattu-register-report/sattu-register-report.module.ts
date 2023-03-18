import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SattuRegisterReportRoutingModule } from './sattu-register-report-routing.module';
import { SattuRegisterReportComponent } from './sattu-register-report.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SattuRegisterReportComponent
  ],
  imports: [
    CommonModule,
    SattuRegisterReportRoutingModule,
    LoaderModule, ReactiveFormsModule
  ]
})
export class SattuRegisterReportModule { }
