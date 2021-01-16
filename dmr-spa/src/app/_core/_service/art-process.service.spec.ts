/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ArtProcessService } from './art-process.service';

describe('Service: ArtProcess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtProcessService]
    });
  });

  it('should ...', inject([ArtProcessService], (service: ArtProcessService) => {
    expect(service).toBeTruthy();
  }));
});
