import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowUpPoseRoutingModule } from './follow-up-pose-routing.module';
import { FollowUpPoseComponent } from './follow-up-pose.component';

import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from "primeng/radiobutton";


@NgModule({
  declarations: [
    FollowUpPoseComponent,
    //AccordionModule
  ],
  imports: [
    CommonModule,
    FollowUpPoseRoutingModule,
    AccordionModule,
    CardModule,
    RadioButtonModule
    ]
})
export class FollowUpPoseModule { }
