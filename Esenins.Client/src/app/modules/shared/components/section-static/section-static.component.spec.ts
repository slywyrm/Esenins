import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStaticComponent } from './section-static.component';

describe('SectionStaticComponent', () => {
  let component: SectionStaticComponent;
  let fixture: ComponentFixture<SectionStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
