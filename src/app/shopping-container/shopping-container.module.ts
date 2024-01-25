import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShoppingContainerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BodyModule,
    RouterModule.forChild([{path:'', component: ShoppingContainerComponent}]),
  ]
})
export class ShoppingContainerModule { }
