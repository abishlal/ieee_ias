import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Execom21Component } from './execom21.component';

describe('Execom21Component', () => {
  let component: Execom21Component;
  let fixture: ComponentFixture<Execom21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Execom21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Execom21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
