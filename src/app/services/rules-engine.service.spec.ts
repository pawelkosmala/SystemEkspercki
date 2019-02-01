import { TestBed } from '@angular/core/testing';

import { RulesEngineService } from './rules-engine.service';

describe('RulesEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RulesEngineService = TestBed.get(RulesEngineService);
    expect(service).toBeTruthy();
  });
});
