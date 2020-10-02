import { Component, OnInit } from '@angular/core';
import {followUpPose} from '../core/models/follow-up-pose';
import {FollowUpPoseService} from '../follow-up-pose/follow-up-pose.service';

@Component({
  selector: 'app-follow-up-pose',
  templateUrl: './follow-up-pose.component.html',
  styleUrls: ['./follow-up-pose.component.css']
})
export class FollowUpPoseComponent implements OnInit {

  public follwUpPose : followUpPose = new followUpPose();

  selectedValue: string = 'val1';


  constructor(private followUpPoseService: FollowUpPoseService) { }

  followUpPoseList = [];

  ngOnInit(): void {
    this.followUpPoseList = this.followUpPoseService.getfollowUpPose();
  }

}
