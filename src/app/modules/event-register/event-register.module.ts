import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRegisterRoutingModule } from './event-register-routing.module';
import { EventRegisterComponent } from './event-register.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventRegisterComponent } from './create-event-register/create-event-register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    EventRegisterComponent,
    CreateEventRegisterComponent
  ],
  imports: [
    CommonModule,
    EventRegisterRoutingModule,
    LoaderModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule, NgxPaginationModule
  ]
})
export class EventRegisterModule { }
