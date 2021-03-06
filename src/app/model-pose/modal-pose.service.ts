import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPoseService {

  constructor() { }
  public getmodelPose(){
    const modelPose=[
      {
        id:'1',
        brand:"xxx",
        model:"1234",
        poseType:"ثابت",
        Price:"100000",
        status:"موجود",
        count:"3",
        imageUrl:['assets/img/pos11.jpg','assets/img/pos22.jpg','assets/img/pos33.jpg'],
      },
      {
        id:'2',
        brand:"yyy",
        model:"5678",
        poseType:"سیار",
        Price:"200000",
        status:"موجود",
        count:"7",
        imageUrl:['assets/img/pos22.jpg','assets/img/pos11.jpg','assets/img/pos33.jpg'],
      },
      {
        id:'1',
        brand:"zzzz",
        model:"93456",
        poseType:"ثابت",
        Price:"700000",
        status:"ناموجود",
        count:"0",
        imageUrl:['assets/img/pos33.jpg','assets/img/pos11.jpg','assets/img/pos22.jpg'],
      }
    ]
    return modelPose;
  }
}
