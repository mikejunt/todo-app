import { TestBed } from '@angular/core/testing';

import { TodomgrService } from './todomgr.service';

describe('TodomgrService', () => {
  let service: TodomgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodomgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
