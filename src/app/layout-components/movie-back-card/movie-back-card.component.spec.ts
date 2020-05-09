import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBackCardComponent } from './movie-back-card.component';

describe('MovieBackCardComponent', () => {
  let component: MovieBackCardComponent;
  let fixture: ComponentFixture<MovieBackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
