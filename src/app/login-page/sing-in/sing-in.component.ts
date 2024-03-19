import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from 'src/app/material-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgOtpInputModule } from 'ng-otp-input';
import { Config } from 'ng-otp-input/lib/models/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, MaterialAngularModule, FormsModule, ReactiveFormsModule, NgOtpInputModule],
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
  animations: [
    trigger('animation', [
      state('in', style({
        opacity: 1,
        // transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          // transform: 'translateX(100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(700, style({
          // transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),   
  ]
})
export class SingInComponent implements OnInit{

  showHideLoginForm: boolean = false;
  showHidePhoneNo: boolean = false;
  any_otp!: number | null;

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
  }

  changeLoginPanel() {
    this.showHideLoginForm = !this.showHideLoginForm
  }

  goToSignUp() {
    this.router.navigate(['/sign-up'])
  }

  getOTP() {
    this.showHidePhoneNo = true
  }

  fn_onOtpChange(otp: any) {
    this.any_otp = otp;
  }

  otp_config: Config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '40px',
      'height': '50px'
    }
  };

}
