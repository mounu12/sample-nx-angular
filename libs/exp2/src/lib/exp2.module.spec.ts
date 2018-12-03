import { async, TestBed } from '@angular/core/testing';
import { Exp2Module } from './exp2.module';

describe('Exp2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Exp2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Exp2Module).toBeDefined();
  });
});
