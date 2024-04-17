import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextModule2Component } from './text-module2.component';

describe('TextModule2Component', () => {
  let component: TextModule2Component;
  let fixture: ComponentFixture<TextModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextModule2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
