import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowUpPoseComponent } from './follow-up-pose.component';

const routes: Routes = [
  {
    path: '',
    component: FollowUpPoseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowUpPoseRoutingModule { }
