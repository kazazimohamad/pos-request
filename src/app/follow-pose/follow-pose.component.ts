import { Component, OnInit } from '@angular/core';
import { followPose } from '../core/models/follow-pose';
import { FollowPoseService } from './follow-pose.service';

@Component({
  selector: 'app-follow-pose',
  templateUrl: './follow-pose.component.html',
  styleUrls: ['./follow-pose.component.css']
})
export class FollowPoseComponent implements OnInit {
  public follwPose: followPose = new followPose();
  isShowDivIf = false;
  
  constructor(private followPoseService: FollowPoseService) { }

  followPoseList = [];

  ngOnInit( ): void {
    this.followPoseList = this.followPoseService.getfollowPose();
    this.isShowDivIf =true;
  }
  statuseShow(){
    this.isShowDivIf = this.isShowDivIf? false : true;
  }

}
