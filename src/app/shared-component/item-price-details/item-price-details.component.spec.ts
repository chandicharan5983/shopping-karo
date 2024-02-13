import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceDetailsComponent } from './item-price-details.component';

describe('ItemPriceDetailsComponent', () => {
  let component: ItemPriceDetailsComponent;
  let fixture: ComponentFixture<ItemPriceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPriceDetailsComponent]
    });
    fixture = TestBed.createComponent(ItemPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
