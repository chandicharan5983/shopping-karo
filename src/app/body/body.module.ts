import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyContainerComponent } from './body-container/body-container.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { BodyRoutingModule } from './body-routing.module';

@NgModule({
  declarations: [
    // BodyContainerComponent,
    // HomeComponent,
    // FashionComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ],
  // exports: [
  //   BodyContainerComponent,
  // ]
})
export class BodyModule { }
