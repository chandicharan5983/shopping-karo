import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionWidgetComponent } from './promotion-widget.component';

describe('PromotionWidgetComponent', () => {
  let component: PromotionWidgetComponent;
  let fixture: ComponentFixture<PromotionWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionWidgetComponent]
    });
    fixture = TestBed.createComponent(PromotionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
