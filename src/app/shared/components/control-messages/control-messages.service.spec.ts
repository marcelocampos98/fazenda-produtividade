import { TestBed } from '@angular/core/testing';

import { ControlMessagesService } from './control-messages.service';

describe('ControlMessagesService', () => {
  let service: ControlMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
