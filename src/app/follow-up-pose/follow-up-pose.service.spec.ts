import { TestBed } from '@angular/core/testing';

import { FollowUpPoseService } from './follow-up-pose.service';

describe('FollowUpPoseService', () => {
  let service: FollowUpPoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowUpPoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
