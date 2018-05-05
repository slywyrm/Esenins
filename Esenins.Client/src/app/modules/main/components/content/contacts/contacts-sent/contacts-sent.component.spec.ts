import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSentComponent } from './contacts-sent.component';

describe('ContactsSentComponent', () => {
  let component: ContactsSentComponent;
  let fixture: ComponentFixture<ContactsSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
