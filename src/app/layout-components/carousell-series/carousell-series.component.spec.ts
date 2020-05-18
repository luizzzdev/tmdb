import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellSeriesComponent } from './carousell-series.component';

describe('CarousellSeriesComponent', () => {
  let component: CarousellSeriesComponent;
  let fixture: ComponentFixture<CarousellSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousellSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousellSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
