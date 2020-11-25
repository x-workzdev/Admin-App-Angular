import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewticketsComponent } from './view-tickets.component';

describe('ViewTicketsComponent', () => {
  let component: ViewticketsComponent;
  let fixture: ComponentFixture<ViewticketsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
