import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsactivateComponent } from './resultsactivate.component';

describe('ResultsactivateComponent', () => {
  let component: ResultsactivateComponent;
  let fixture: ComponentFixture<ResultsactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
