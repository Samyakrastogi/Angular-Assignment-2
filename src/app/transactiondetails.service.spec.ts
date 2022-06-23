import { TestBed } from '@angular/core/testing';

import { TransactiondetailsService } from './transactiondetails.service';

describe('TransactiondetailsService', () => {
  let service: TransactiondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactiondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
