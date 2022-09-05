/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirlinesService } from './airlines.service';

describe('Service: Airlines', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlinesService]
    });
  });

  it('should ...', inject([AirlinesService], (service: AirlinesService) => {
    expect(service).toBeTruthy();
  }));
});
