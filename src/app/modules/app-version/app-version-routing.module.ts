import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppVersionComponent } from './app-version.component';

const routes: Routes = [{ path: '', component: AppVersionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppVersionRoutingModule { }
