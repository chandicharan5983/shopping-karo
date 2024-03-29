import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWidgetComponent } from './banner-widget.component';

describe('BannerWidgetComponent', () => {
  let component: BannerWidgetComponent;
  let fixture: ComponentFixture<BannerWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerWidgetComponent]
    });
    fixture = TestBed.createComponent(BannerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
