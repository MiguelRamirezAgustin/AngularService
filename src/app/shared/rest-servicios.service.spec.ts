import { TestBed } from '@angular/core/testing';

import { RestServiciosService } from './rest-servicios.service';

describe('RestServiciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestServiciosService = TestBed.get(RestServiciosService);
    expect(service).toBeTruthy();
  });
});
