import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  // ############  STATIC VARIABLES #########################
  user_firstname: string = ''
  user_lastname: string = ''
  user_email: string = ''
  user_password: string = ''
  signup_form!: FormGroup;
  validation_check!: string
  // ################# END ##################################

  constructor() { }

  // ################# END ##################################


  // ################# END ##################################

}
