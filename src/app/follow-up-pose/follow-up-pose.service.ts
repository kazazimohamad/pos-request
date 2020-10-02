import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowUpPoseService {

  constructor() { }
  public getfollowUpPose(){
    const followUpPose =[
      {
        description:"صندوق کارافرینی امید با پشتیبانی از صدها هزار دستگاه کارتخوان و شبکه گسترده نمایندگی در سراسر کشور، یکی از پیشگامان ارایه خدمات پایانه های فروشگاهی در کشور است. کارتخوان های صندوق، با شرعت ارتباطی بسیار بالا و قبول تمامی کارت های شتاب، گزینه ای مناسب برای فروشگاه های معتبر در سراسر کشور است."
      }
      
    ]
    return followUpPose;
  }
}
