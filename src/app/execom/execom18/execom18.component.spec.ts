import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom18Component } from './execom18.component';

describe('Execom18Component', () => {
  let component: Execom18Component;
  let fixture: ComponentFixture<Execom18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
