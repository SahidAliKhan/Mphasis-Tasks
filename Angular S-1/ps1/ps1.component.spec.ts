import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PS1Component } from './ps1.component';

describe('PS1Component', () => {
  let component: PS1Component;
  let fixture: ComponentFixture<PS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
