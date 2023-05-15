import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLink4Component } from './my-link4.component';

describe('MyLink4Component', () => {
  let component: MyLink4Component;
  let fixture: ComponentFixture<MyLink4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLink4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLink4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
