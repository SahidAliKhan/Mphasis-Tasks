import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps8Component } from './ps8.component';

describe('Ps8Component', () => {
  let component: Ps8Component;
  let fixture: ComponentFixture<Ps8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
