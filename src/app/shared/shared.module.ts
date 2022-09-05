import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SplicePipe } from './pipe/splice.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent,
    SplicePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    NgbModule,
    HeaderComponent,
    AlertComponent,
    NgxPaginationModule,
    SplicePipe
  ]
})
export class SharedModule { }
