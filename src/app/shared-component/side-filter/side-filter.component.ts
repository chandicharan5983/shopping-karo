import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent {
  fromRange: number = 0;
  toRange: number = 0;

  constructor() {
    this.fromRange = 0;
    this.toRange = 0;
  }
}
