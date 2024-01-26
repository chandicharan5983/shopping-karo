import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialAngularModule } from '../material-import.module';


@NgModule({
  declarations: [
    TopBarComponent,
    SearchBarComponent,
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
