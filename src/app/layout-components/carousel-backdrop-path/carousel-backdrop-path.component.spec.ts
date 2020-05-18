import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBackdropPathComponent } from './carousel-backdrop-path.component';

describe('CarouselBackdropPathComponent', () => {
  let component: CarouselBackdropPathComponent;
  let fixture: ComponentFixture<CarouselBackdropPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBackdropPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBackdropPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
