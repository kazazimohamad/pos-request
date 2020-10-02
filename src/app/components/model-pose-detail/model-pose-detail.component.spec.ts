import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPoseDetailComponent } from './model-pose-detail.component';

describe('ModelPoseDetailComponent', () => {
  let component: ModelPoseDetailComponent;
  let fixture: ComponentFixture<ModelPoseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPoseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
