import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events20Component } from './events20.component';

describe('Events20Component', () => {
  let component: Events20Component;
  let fixture: ComponentFixture<Events20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Events20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Events20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
