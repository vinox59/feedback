import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLink1Component } from './my-link1.component';

describe('MyLink1Component', () => {
  let component: MyLink1Component;
  let fixture: ComponentFixture<MyLink1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLink1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
