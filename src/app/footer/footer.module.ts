import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  declarations: [
    NewsLetterComponent,
    QuickLinksComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
