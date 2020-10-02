import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPoseComponent } from './model-pose.component';

describe('ModelPoseComponent', () => {
  let component: ModelPoseComponent;
  let fixture: ComponentFixture<ModelPoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
