import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLink3Component } from './my-link3.component';

describe('MyLink3Component', () => {
  let component: MyLink3Component;
  let fixture: ComponentFixture<MyLink3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLink3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLink3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
