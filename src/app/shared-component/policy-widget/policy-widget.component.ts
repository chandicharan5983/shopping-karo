import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy-widget',
  templateUrl: './policy-widget.component.html',
  styleUrls: ['./policy-widget.component.scss'],
})
export class PolicyWidgetComponent {
  @Input() policy: any;
}
