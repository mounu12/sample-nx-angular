import { async, TestBed } from '@angular/core/testing';
import { ExperimentalExpModule } from './experimental-exp.module';

describe('ExperimentalExpModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExperimentalExpModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExperimentalExpModule).toBeDefined();
  });
});
