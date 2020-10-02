import { TestBed } from '@angular/core/testing';

import { FollowPoseService } from './follow-pose.service';

describe('FollowPoseService', () => {
  let service: FollowPoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowPoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
