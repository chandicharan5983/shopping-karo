import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyContainerComponent } from './body-container/body-container.component';


@NgModule({
  declarations: [
    BodyContainerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyContainerComponent
  ]
})
export class BodyModule { }
