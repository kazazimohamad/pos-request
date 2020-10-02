import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowPoseComponent } from './follow-pose.component';


const routes: Routes = [
  {
    path: '',
    component: FollowPoseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowPoseRoutingModule { }
