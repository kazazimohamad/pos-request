import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelPoseComponent } from './model-pose.component';
import { ModelPoseRoutingModule} from './model-pose-routing.module';
import { ModelPoseDetailComponent } from '../components/model-pose-detail/model-pose-detail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    ModelPoseComponent,
    ModelPoseDetailComponent,
  ],
  imports: [
    CommonModule,
    ModelPoseRoutingModule,
    CarouselModule
  ]
})

export class ModelPoseModule { }
