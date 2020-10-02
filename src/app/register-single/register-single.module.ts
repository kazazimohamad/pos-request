import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSingleRoutingModule } from './register-single-routing.module';
import { RegisterSingleComponent} from "./register-single.component";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    RegisterSingleComponent
  ],
  imports: [
    CommonModule,
    RegisterSingleRoutingModule,
    ModalModule.forRoot()
  ]
})
export class RegisterSingleModule { }
