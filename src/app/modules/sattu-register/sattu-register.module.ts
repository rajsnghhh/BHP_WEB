import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SattuRegisterRoutingModule } from './sattu-register-routing.module';
import { SattuRegisterComponent } from './sattu-register.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SattuRegisterComponent
  ],
  imports: [
    CommonModule,
    SattuRegisterRoutingModule, ReactiveFormsModule, FormsModule, LoaderModule
  ]
})
export class SattuRegisterModule { }
