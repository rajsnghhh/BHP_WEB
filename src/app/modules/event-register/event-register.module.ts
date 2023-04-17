import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRegisterRoutingModule } from './event-register-routing.module';
import { EventRegisterComponent } from './event-register.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEventRegisterComponent } from './create-event-register/create-event-register.component';


@NgModule({
  declarations: [
    EventRegisterComponent,
    CreateEventRegisterComponent
  ],
  imports: [
    CommonModule,
    EventRegisterRoutingModule,
    LoaderModule,
    ReactiveFormsModule
  ]
})
export class EventRegisterModule { }
