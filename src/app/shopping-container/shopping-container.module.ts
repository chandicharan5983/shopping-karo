import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';


@NgModule({
  declarations: [
    ShoppingContainerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BodyModule
  ]
})
export class ShoppingContainerModule { }
