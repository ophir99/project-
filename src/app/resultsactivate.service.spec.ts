import { TestBed } from '@angular/core/testing';

import { ResultsactivateService } from './resultsactivate.service';

describe('ResultsactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultsactivateService = TestBed.get(ResultsactivateService);
    expect(service).toBeTruthy();
  });
});
