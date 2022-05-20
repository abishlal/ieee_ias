import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom15Component } from './execom15.component';

describe('Execom15Component', () => {
  let component: Execom15Component;
  let fixture: ComponentFixture<Execom15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
