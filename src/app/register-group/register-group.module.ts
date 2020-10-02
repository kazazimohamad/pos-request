import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterGroupRoutingModule } from './register-group-routing.module';
import  { RegisterGroupComponent } from "./register-group.component";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    RegisterGroupComponent
  ],
  imports: [
    CommonModule,
    RegisterGroupRoutingModule,
    ModalModule.forRoot()
  ]
})
export class RegisterGroupModule { }
