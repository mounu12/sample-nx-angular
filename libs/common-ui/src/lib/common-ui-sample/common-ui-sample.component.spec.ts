import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiSampleComponent } from './common-ui-sample.component';

describe('CommonUiSampleComponent', () => {
  let component: CommonUiSampleComponent;
  let fixture: ComponentFixture<CommonUiSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonUiSampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
