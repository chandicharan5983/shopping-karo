import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
// import { BodyModule } from '../body/body.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../body/home/home.component';
import { FashionComponent } from '../body/fashion/fashion.component';
import { BodyContainerComponent } from '../body/body-container/body-container.component';


@NgModule({
  declarations: [
    ShoppingContainerComponent,
    BodyContainerComponent,
    HomeComponent,
    FashionComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    // BodyModule,
    RouterModule.forChild([{path:'', component: ShoppingContainerComponent}]),
    // RouterModule.forChild([{path:'', component: ShoppingContainerComponent}]),
  ]
})
export class ShoppingContainerModule { }
