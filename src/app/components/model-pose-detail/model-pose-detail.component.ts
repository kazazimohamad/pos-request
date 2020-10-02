import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {query} from "@angular/animations";

@Component({
  selector: 'app-model-pose-detail',
  templateUrl: './model-pose-detail.component.html',
  styleUrls: ['./model-pose-detail.component.css']
})
export class ModelPoseDetailComponent implements OnInit {
  @Input() item: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoNextStep(typeSelected){
    this.route.queryParams.subscribe(q => {
      if (q.request_type === 'group'){
        this.router.navigate(['register-group']);
      } else {
        this.router.navigate(['register-single']);

      }

      console.log(q);
    });
    // if(this.route.queryParams)
  }
}
