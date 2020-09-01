import { TestBed } from '@angular/core/testing';

import { CardGroupServiceService } from './card-group-service.service';

describe('CardGroupServiceService', () => {
  let service: CardGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
