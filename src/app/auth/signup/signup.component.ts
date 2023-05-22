import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // ############  STATIC VARIABLES #########################
  user_firstname: string = ''
  user_lastname: string = ''
  user_phone!: string
  user_email: string = ''
  user_password: string = ''
  signup_form!: FormGroup;
  validation_check!: string
  // ################# END ##################################

  constructor(
    private alert_ctrl: AlertController,
    private toast_ctrl: ToastController,
    private loader_ctrl: LoadingController,
    private data_service: DataService,
    private nav_ctrl: NavController,

  ) { }


  // ########## handle the password visibilty ###############
  password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################
  ngOnInit() {
    this.signup_form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    })
  }

  // ################# END ##################################

  async signup() {
    // simple validation on signup
    let check1: string = this.user_email
    let check2: string = this.user_password
    let check3: string = this.user_phone
    let check4 = this.user_firstname
    let check5 = this.user_lastname


    if (check1.length < 10) {
      this.show_alert_email()
      return;
    }
    if (!check1.includes('@')) {
      this.show_alert_email2();
      return
    }

    if (check2.length < 6) {
      this.show_alert_password();
      return;
    }

    if (check3) {
      let phone = parseInt(check3)
      if (phone.toString().length < 10 || phone.toString().length > 10) {

        this.show_alert_phone()
        return;
      }
    }

    if (check4.length < 3) {
      this.show_alert_fname()
      return;
    }

    if (check5.length < 3) {
      this.show_alert_lname()
      return;
    }
    // ##################### Start The Signup Process ################


    // ################ POST SIGN UP DATA ##########
    const user: object = {
      first_name: this.user_firstname,
      last_name: this.user_lastname,
      email: this.user_email,
      phone: this.user_phone,
      password: this.user_password
    }

    const loader = await this.loader_ctrl.create({
      message: 'Signing up, please wait ...',
      duration: 2000
    });
    await loader.present();
    this.data_service.post_signup(user).subscribe((res: any) => {
      let user = res;
      console.log(user);

      let error = res;
      if (error.message == 'user already exists') {
        this.show_alert_err1();
        loader.dismiss()
        return
      }



    })
  }

  // ################# END ##################################

  // ############## Alert Controller ######################

  async show_alert_email() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'email is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }


  async show_alert_email2() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Email format invalid',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_password() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'password is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }
  async show_alert_phone() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your phone number correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_fname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your first name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_lname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your last name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }


  async show_alert_err1() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Login instead',
      message: 'user already exists',
      buttons: [{ text: 'cancel', role: 'cancel' }, { text: 'login', handler: () => { this.nav_ctrl.navigateForward('/login') } }]
    })
    await alert.present()
  }


  async onLogin() {
    let loader = await this.loader_ctrl.create({
      mode: 'ios',
      message: 'redirect to login',
      duration: 200
    });

    await loader.present();
    this.nav_ctrl.navigateForward('/login')
  }

  async go_back() {
    let loader = await this.loader_ctrl.create({
      mode: 'ios',
      message: 'loading',
      duration: 200
    });

    await loader.present();
    this.nav_ctrl.navigateForward('/choose-stage')
  }


}
