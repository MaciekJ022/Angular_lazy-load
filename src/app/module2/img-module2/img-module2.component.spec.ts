import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgModule2Component } from './img-module2.component';

describe('ImgModule2Component', () => {
  let component: ImgModule2Component;
  let fixture: ComponentFixture<ImgModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgModule2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
