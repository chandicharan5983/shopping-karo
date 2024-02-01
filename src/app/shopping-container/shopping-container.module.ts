import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { ShoppingContainerRoutingModule } from './shopping-container-routing.module';


@NgModule({
  declarations: [
    ShoppingContainerComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ShoppingContainerRoutingModule,
    BodyModule
  ]
})
export class ShoppingContainerModule { }
