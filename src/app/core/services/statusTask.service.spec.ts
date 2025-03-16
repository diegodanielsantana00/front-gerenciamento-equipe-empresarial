import { TestBed } from '@angular/core/testing';

import { StatusTaskService } from './statusTask.service';

describe('StatusTaskService', () => {
  let service: StatusTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
