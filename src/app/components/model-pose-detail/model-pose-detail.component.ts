import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-pose-detail',
  templateUrl: './model-pose-detail.component.html',
  styleUrls: ['./model-pose-detail.component.css']
})
export class ModelPoseDetailComponent implements OnInit {
  @Input() item: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
