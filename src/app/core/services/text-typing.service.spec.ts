import { TestBed } from '@angular/core/testing';

import { TextTypingService } from './text-typing.service';

describe('TextTypingService', () => {
  let service: TextTypingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextTypingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
