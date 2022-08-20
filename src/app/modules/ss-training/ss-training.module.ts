import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsTrainingRoutingModule } from './ss-training-routing.module';
import { SsTrainingComponent } from './ss-training.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SsTrainingComponent],
  imports: [
    CommonModule,
    SsTrainingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SsTrainingModule { }