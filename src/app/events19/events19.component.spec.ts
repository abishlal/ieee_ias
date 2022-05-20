import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events19Component } from './events19.component';

describe('Events19Component', () => {
  let component: Events19Component;
  let fixture: ComponentFixture<Events19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Events19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Events19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
