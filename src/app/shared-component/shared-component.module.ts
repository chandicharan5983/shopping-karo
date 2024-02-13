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
import { SideFilterComponent } from './side-filter/side-filter.component';
import { ItemPriceDetailsComponent } from './item-price-details/item-price-details.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ItemWidgetComponent,
    PromotionWidgetComponent,
    BannerWidgetComponent,
    PolicyWidgetComponent,
    BrandWidgetComponent,
    TabWidgetComponent,
    SideFilterComponent,
    ItemPriceDetailsComponent,
    ItemDescriptionComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule, 
    MaterialAngularModule, 
    NgImageSliderModule,
    FormsModule
  ],
  exports: [
    ItemWidgetComponent,
    PromotionWidgetComponent,
    BannerWidgetComponent,
    PolicyWidgetComponent,
    BrandWidgetComponent,
    TabWidgetComponent,
    SideFilterComponent,
    ItemPriceDetailsComponent,
    ItemDescriptionComponent,
    BreadcrumbsComponent,
  ],
})
export class SharedComponentModule {}
