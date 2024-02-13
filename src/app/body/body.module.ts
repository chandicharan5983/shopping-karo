import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyRoutingModule } from './body-routing.module';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { MaterialAngularModule } from '../material-import.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { WorkRoomComponent } from './work-room/work-room.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, FashionComponent, WorkRoomComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MaterialAngularModule,
    NgImageSliderModule,
    // FormsModule,
    SharedComponentModule,
  ],
})
export class BodyModule {}
