import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from 'src/app/material-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule, MaterialAngularModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }
  
}
