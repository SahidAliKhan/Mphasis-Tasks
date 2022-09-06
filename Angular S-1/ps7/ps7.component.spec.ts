import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps7Component } from './ps7.component';

describe('Ps7Component', () => {
  let component: Ps7Component;
  let fixture: ComponentFixture<Ps7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ps7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
