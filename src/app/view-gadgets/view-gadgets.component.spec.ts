import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewGadgetsComponent } from './view-gadgets.component';

describe('ViewGadgetsComponent', () => {
  let component: ViewGadgetsComponent;
  let fixture: ComponentFixture<ViewGadgetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGadgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
