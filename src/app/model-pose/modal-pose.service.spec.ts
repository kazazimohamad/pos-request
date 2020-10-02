import { TestBed } from '@angular/core/testing';

import { ModalPoseService } from './modal-pose.service';

describe('ModalPoseService', () => {
  let service: ModalPoseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPoseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
