import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowPoseComponent } from './follow-pose.component';

describe('FollowPoseComponent', () => {
  let component: FollowPoseComponent;
  let fixture: ComponentFixture<FollowPoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowPoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
