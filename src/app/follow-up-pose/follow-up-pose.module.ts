import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowUpPoseRoutingModule } from './follow-up-pose-routing.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {FollowUpPoseComponent} from "./follow-up-pose.component";
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    FollowUpPoseComponent
  ],
  imports: [
    CommonModule,
    FollowUpPoseRoutingModule,
    AccordionModule,
    ModalModule.forRoot(),
  ],
  exports: [
    FollowUpPoseComponent
  ]
})
export class FollowUpPoseModule { }


