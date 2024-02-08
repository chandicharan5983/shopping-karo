import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemWidgetComponent } from './item-widget/item-widget.component';
import { PromotionWidgetComponent } from './promotion-widget/promotion-widget.component';
import { BannerWidgetComponent } from './banner-widget/banner-widget.component';
import { PolicyWidgetComponent } from './policy-widget/policy-widget.component';
import { BrandWidgetComponent } from './brand-widget/brand-widget.component';
import { TabWidgetComponent } from './tab-widget/tab-widget.component';
import { MaterialAngularModule } from '../material-import.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    ItemWidgetComponent,
    PromotionWidgetComponent,
    BannerWidgetComponent,
    PolicyWidgetComponent,
    BrandWidgetComponent,
    TabWidgetComponent,
  ],
  imports: [CommonModule, MaterialAngularModule, NgImageSliderModule],
  exports: [
    ItemWidgetComponent,
    PromotionWidgetComponent,
    BannerWidgetComponent,
    PolicyWidgetComponent,
    BrandWidgetComponent,
    TabWidgetComponent,
  ],
})
export class SharedComponentModule {}
