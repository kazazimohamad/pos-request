import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'follow-up-pose',
    loadChildren: () => import('./follow-up-pose/follow-up-pose.module').then(m => m.FollowUpPoseModule)
  },
  {
    path: 'follow-pose',
    loadChildren: () => import('./follow-pose/follow-pose.module').then(m => m.FollowPoseModule)
  },
  {
    path: 'model-pose',
    loadChildren: () => import('./model-pose/model-pose.module').then(m => m.ModelPoseModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
