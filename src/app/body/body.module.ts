import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyRoutingModule } from './body-routing.module';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    FashionComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ],
})
export class BodyModule { }
