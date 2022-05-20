import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom17Component } from './execom17.component';

describe('Execom17Component', () => {
  let component: Execom17Component;
  let fixture: ComponentFixture<Execom17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
