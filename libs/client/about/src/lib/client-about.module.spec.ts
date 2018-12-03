import { async, TestBed } from '@angular/core/testing';
import { ClientAboutModule } from './client-about.module';

describe('ClientAboutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientAboutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientAboutModule).toBeDefined();
  });
});
