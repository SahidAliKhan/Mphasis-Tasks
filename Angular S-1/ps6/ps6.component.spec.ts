import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps6Component } from './ps6.component';

describe('Ps6Component', () => {
  let component: Ps6Component;
  let fixture: ComponentFixture<Ps6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
