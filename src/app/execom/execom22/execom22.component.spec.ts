import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom22Component } from './execom22.component';

describe('Execom22Component', () => {
  let component: Execom22Component;
  let fixture: ComponentFixture<Execom22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
