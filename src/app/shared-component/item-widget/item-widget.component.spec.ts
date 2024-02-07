import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWidgetComponent } from './item-widget.component';

describe('ItemWidgetComponent', () => {
  let component: ItemWidgetComponent;
  let fixture: ComponentFixture<ItemWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemWidgetComponent]
    });
    fixture = TestBed.createComponent(ItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
