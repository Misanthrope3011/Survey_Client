import { TestBed } from '@angular/core/testing';

import { FetchSurveyDataService } from './fetch-survey-data.service';

describe('FetchSurveyDataService', () => {
  let service: FetchSurveyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSurveyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
