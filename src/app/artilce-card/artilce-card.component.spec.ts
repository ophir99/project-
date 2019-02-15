import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilceCardComponent } from './artilce-card.component';

describe('ArtilceCardComponent', () => {
  let component: ArtilceCardComponent;
  let fixture: ComponentFixture<ArtilceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtilceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtilceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
