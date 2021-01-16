/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ProjectDetailService } from './projectDetail.service';

describe('Service: ProjectDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDetailService]
    });
  });

  it('should ...', inject([ProjectDetailService], (service: ProjectDetailService) => {
    expect(service).toBeTruthy();
  }));
});
