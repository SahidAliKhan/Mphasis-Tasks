import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps9Component } from './ps9.component';

describe('Ps9Component', () => {
  let component: Ps9Component;
  let fixture: ComponentFixture<Ps9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
