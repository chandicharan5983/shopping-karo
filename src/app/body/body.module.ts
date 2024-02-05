import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyRoutingModule } from './body-routing.module';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { MaterialAngularModule } from '../material-import.module';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    HomeComponent,
    FashionComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MaterialAngularModule,
    NgImageSliderModule
  ],
})
export class BodyModule { }
