import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom19Component } from './execom19.component';

describe('Execom19Component', () => {
  let component: Execom19Component;
  let fixture: ComponentFixture<Execom19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
