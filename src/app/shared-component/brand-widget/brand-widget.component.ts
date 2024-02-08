import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-widget',
  templateUrl: './brand-widget.component.html',
  styleUrls: ['./brand-widget.component.scss'],
})
export class BrandWidgetComponent {
  @Input() brands: any;
}
