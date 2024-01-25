import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NewsLetterComponent,
    QuickLinksComponent,
    CopyrightComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
