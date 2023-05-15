import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLink2Component } from './my-link2.component';

describe('MyLink2Component', () => {
  let component: MyLink2Component;
  let fixture: ComponentFixture<MyLink2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLink2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
