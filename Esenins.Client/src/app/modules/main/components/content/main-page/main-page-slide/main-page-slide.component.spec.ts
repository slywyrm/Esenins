import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSlideComponent } from './main-page-slide.component';

describe('MainPageSlideComponent', () => {
  let component: MainPageSlideComponent;
  let fixture: ComponentFixture<MainPageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
