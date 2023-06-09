import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralRegisterRoutingModule } from './central-register-routing.module';
import { CentralRegisterViewComponent } from './central-register-view/central-register-view.component';
import { CentralRegisterCreateComponent } from './central-register-create/central-register-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderModule } from '../shared/loader/loader.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocationModule } from '../baseline-survey/location/location.module';


@NgModule({
  declarations: [CentralRegisterViewComponent, CentralRegisterCreateComponent],
  imports: [
    CommonModule,
    CentralRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule, MatProgressSpinnerModule, LoaderModule,
    NgxPaginationModule, LocationModule
  ],
})
export class CentralRegisterModule { }
