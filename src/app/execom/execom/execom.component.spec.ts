import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecomComponent } from './execom.component';

describe('ExecomComponent', () => {
  let component: ExecomComponent;
  let fixture: ComponentFixture<ExecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
