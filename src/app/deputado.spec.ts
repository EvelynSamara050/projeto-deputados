import { TestBed } from '@angular/core/testing';

import { Deputado } from './deputado';

describe('Deputado', () => {
  let service: Deputado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deputado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
