import { TestBed, inject } from '@angular/core/testing';

import { HearthstoneService } from './hearthstone.service';

describe('HearthstoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HearthstoneService]
    });
  });

  it('should be created', inject([HearthstoneService], (service: HearthstoneService) => {
    expect(service).toBeTruthy();
  }));
});
