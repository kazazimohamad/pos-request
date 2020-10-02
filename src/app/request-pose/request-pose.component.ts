import { Component, OnInit } from '@angular/core';
import {requestPose} from '../core/models/requestPose';

@Component({
  selector: 'app-request-pose',
  templateUrl: './request-pose.component.html',
  styleUrls: ['./request-pose.component.css']
})
export class RequestPoseComponent implements OnInit {
  public Person : requestPose = new requestPose();
  constructor() { }

  ngOnInit(): void {
  }

}
