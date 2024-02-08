import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyWidgetComponent } from './policy-widget.component';

describe('PolicyWidgetComponent', () => {
  let component: PolicyWidgetComponent;
  let fixture: ComponentFixture<PolicyWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyWidgetComponent]
    });
    fixture = TestBed.createComponent(PolicyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
