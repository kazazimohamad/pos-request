import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ModalPoseService} from '../model-pose/modal-pose.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-model-pose',
  templateUrl: './model-pose.component.html',
  styleUrls: ['./model-pose.component.css']
})
export class ModelPoseComponent implements OnInit {

  constructor(
    private modalPoseService: ModalPoseService,
    private route: ActivatedRoute) { }
  modelPoseList = [];
  ngOnInit(): void {
    this.modelPoseList = this.modalPoseService.getmodelPose();
  }

}
