import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpPoseComponent } from './follow-up-pose.component';

describe('FollowUpPoseComponent', () => {
  let component: FollowUpPoseComponent;
  let fixture: ComponentFixture<FollowUpPoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpPoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
