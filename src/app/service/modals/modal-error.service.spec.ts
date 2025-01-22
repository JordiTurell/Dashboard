import { TestBed } from '@angular/core/testing';

import { ModalErrorService } from './modal-error.service';

describe('ModalErrorService', () => {
  let service: ModalErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
