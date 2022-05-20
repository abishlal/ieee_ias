import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom16Component } from './execom16.component';

describe('Execom16Component', () => {
  let component: Execom16Component;
  let fixture: ComponentFixture<Execom16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
