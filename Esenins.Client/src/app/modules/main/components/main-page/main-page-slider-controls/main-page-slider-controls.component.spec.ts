import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSliderControlsComponent } from './main-page-slider-controls.component';

describe('MainPageSliderControlsComponent', () => {
  let component: MainPageSliderControlsComponent;
  let fixture: ComponentFixture<MainPageSliderControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageSliderControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSliderControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
