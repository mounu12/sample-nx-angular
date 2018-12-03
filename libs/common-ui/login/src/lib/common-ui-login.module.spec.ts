import { async, TestBed } from '@angular/core/testing';
import { CommonUiLoginModule } from './common-ui-login.module';

describe('CommonUiLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiLoginModule).toBeDefined();
  });
});
