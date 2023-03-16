import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SattuRegisterRoutingModule } from './sattu-register-routing.module';
import { SattuRegisterComponent } from './sattu-register.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateSattuRegisterComponent } from './create-sattu-register/create-sattu-register.component';
import { ViewSattuFamilyComponent } from './view-sattu-family/view-sattu-family.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SattuRecordHistoryComponent } from './sattu-record-history/sattu-record-history.component';
import { sattuRegisterSearchFilterPipe } from '../shared/sidebar/sattu-register-search.pipe';


@NgModule({
  declarations: [
    SattuRegisterComponent,
    CreateSattuRegisterComponent,
    ViewSattuFamilyComponent,
    SattuRecordHistoryComponent,
    sattuRegisterSearchFilterPipe
  ],
  imports: [
    CommonModule,
    SattuRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule, LoaderModule,
    MatDialogModule, NgxPaginationModule
  ]
})
export class SattuRegisterModule { }
