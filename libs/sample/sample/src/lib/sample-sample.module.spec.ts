import { async, TestBed } from '@angular/core/testing';
import { SampleSampleModule } from './sample-sample.module';

describe('SampleSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SampleSampleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SampleSampleModule).toBeDefined();
  });
});
