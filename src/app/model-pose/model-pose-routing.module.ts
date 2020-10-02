import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModelPoseComponent } from './model-pose.component';

const routes: Routes = [
  {
    path: '',
    component: ModelPoseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModelPoseRoutingModule { }
