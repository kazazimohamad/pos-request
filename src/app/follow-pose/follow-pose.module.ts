import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowPoseRoutingModule } from './follow-pose-routing.module';
import { FollowPoseComponent } from './follow-pose.component';


@NgModule({
  declarations: [FollowPoseComponent],
  imports: [
    CommonModule,
    FollowPoseRoutingModule
  ]
})
export class FollowPoseModule { }
