import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events21Component } from './events21.component';

describe('Events21Component', () => {
  let component: Events21Component;
  let fixture: ComponentFixture<Events21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Events21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Events21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
