import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPoseComponent } from './request-pose.component';

describe('RequestPoseComponent', () => {
  let component: RequestPoseComponent;
  let fixture: ComponentFixture<RequestPoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
