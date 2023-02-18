import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscortRerefRegisterRoutingModule } from './escort-reref-register-routing.module';
import { EscortRerefRegisterComponent } from './escort-reref-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from '../shared/loader/loader.module';
import { EscortReferRegisterMatModalComponent } from './escort-refer-register-mat-modal/escort-refer-register-mat-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { escortRerefFilterPipe } from '../shared/sidebar/escort-reref-search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [EscortRerefRegisterComponent, EscortReferRegisterMatModalComponent, escortRerefFilterPipe],
  imports: [
    CommonModule,
    EscortRerefRegisterRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule, LoaderModule, MatDialogModule
  ]
})

export class EscortRerefRegisterModule { }
