import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  // ############  STATIC VARIABLES #########################
  isLoading = false
  user_firstname: string = ''
  user_lastname: string = ''
  user_email: string = ''
  user_password: string = ''
  signup_form!: FormGroup;
  validation_check!: string
  // ################# END ##################################

  constructor(
    private route: Router
  ) { }

  // ################# END ##################################


  // ################# END ##################################

  onLogin() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false;
      this.route.navigate(['login'])
    }, 600);
  }
}
