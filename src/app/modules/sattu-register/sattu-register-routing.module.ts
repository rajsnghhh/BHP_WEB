import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SattuRegisterComponent } from './sattu-register.component';

const routes: Routes = [{ path: '', component: SattuRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SattuRegisterRoutingModule { }
