import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SattuRegisterReportComponent } from './sattu-register-report.component';

const routes: Routes = [{ path: '', component: SattuRegisterReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SattuRegisterReportRoutingModule { }
