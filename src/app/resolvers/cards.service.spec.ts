import { TestBed } from '@angular/core/testing';

import { CardsService } from './cards.resolver';

describe('CardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsService = TestBed.get(CardsService);
    expect(service).toBeTruthy();
  });
});
