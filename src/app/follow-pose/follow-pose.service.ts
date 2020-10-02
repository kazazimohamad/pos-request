import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowPoseService {

  constructor() { }
  public getfollowPose() {
    const followPose = [
      {
        dateRequest: "1399/07/11",
        timeRequest: "10:10",
        statuseRequest: "مشاهده نشده",
      }

    ]
    return followPose;
  }
}
