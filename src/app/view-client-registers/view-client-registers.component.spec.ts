import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewClientRegistersComponent } from './view-client-registers.component';

describe('ViewClientRegistersComponent', () => {
  let component: ViewClientRegistersComponent;
  let fixture: ComponentFixture<ViewClientRegistersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
