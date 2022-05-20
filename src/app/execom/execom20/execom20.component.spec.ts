import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom20Component } from './execom20.component';

describe('Execom20Component', () => {
  let component: Execom20Component;
  let fixture: ComponentFixture<Execom20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
