import {Component, OnInit, TemplateRef} from "@angular/core";
import {followUpPose} from "../core/models/follow-up-pose";
import {FollowUpPoseService} from "../follow-up-pose/follow-up-pose.service";
import {BsModalService, BsModalRef} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";

@Component({
  selector: "app-follow-up-pose",
  templateUrl: "./follow-up-pose.component.html",
  styleUrls: ["./follow-up-pose.component.css"]
})
export class FollowUpPoseComponent implements OnInit {

  public follwUpPose: followUpPose = new followUpPose();

  modalRef: BsModalRef;
  message: string;

  selectedRadioButtonValue = "single";
  count: any;


  constructor(private followUpPoseService: FollowUpPoseService,
              private modalService: BsModalService,
              private router: Router) {
  }

  followUpPoseList = [];

  ngOnInit(): void {
    this.followUpPoseList = this.followUpPoseService.getfollowUpPose();
    this.count = 0;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: "modal-sm"});
  }

  confirm(): void {
    this.message = "Confirmed!";
    this.modalRef.hide();
    this.router.navigate(["model-pose"], {
      queryParams: {
        "request_type": this.selectedRadioButtonValue,
        "count": this.count
      }
    });
  }

  decline(): void {
    this.message = "Declined!";
    this.modalRef.hide();
  }


}
