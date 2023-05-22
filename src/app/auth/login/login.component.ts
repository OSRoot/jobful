import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user_email!: string
  user_password!: string
  login_form!: FormGroup

  constructor(
    private nav_ctrl: NavController,
    private alert_ctrl: AlertController,
    private data_service: DataService,
    private loading_ctr: LoadingController

  ) { }


  // ########## handle the password visibilty ###############
  password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################

  ngOnInit() {
    this.login_form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  async login() {
    // // ####### Simple Validation on login inputs ################
    let check1 = this.user_email;
    let check2 = this.user_password;

    if (check1.length < 11) {
      this.show_alert_email()
      return
    }

    if (!check1.includes('@')) {
      this.show_alert_email();
      return
    }
    if (check2.length < 5) {
      this.show_alert_pass()
      return
    }

    const user: object = {
      email: this.user_email,
      password: this.user_password
    }

    this.data_service.post_login(user).subscribe(async (res: any) => {
      let user = res;

      let error = res;
      if (error.ERROR == 'User not found') {
        this.show_alert_err1();
        return
      }
      if (error.error == 'wrong email or password') {
        this.show_alert_err2();
        return
      }
      localStorage.setItem('user', user.eligible_user.email)
      localStorage.setItem('token', user.token)
      if (user) {

        // this.nav_ctrl.navigateForward('/home')
        if (localStorage.getItem('token') === user.token) {
          this.nav_ctrl.navigateForward('/home')

        }
        console.log(user.eligible_user);
      }
    })
    // this.data_service.post_login(user).subscribe(res => {
    //   let user = res;
    //   let error = res;


    // })
  }



  // ############# Alert Controllers ###############3

  async show_alert_email() {
    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Email',
      message: 'Bad Email Format',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_pass() {
    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Password',
      message: 'password is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    });
    await alert.present()
  }

  async show_alert_err1() {
    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Failed',
      message: 'User not found',
      buttons: [{ text: 'cancel', role: 'cancel' }, { text: 'register', handler: () => { this.nav_ctrl.navigateForward('/signup') } }]
    });
    await alert.present()
  }

  async show_alert_err2() {
    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Failed',
      message: 'Wrong email or password',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    });
    await alert.present()
  }


  async go_signup() {
    let loader = await this.loading_ctr.create({
      mode: 'ios',
      message: 'redirect to signup',
      duration: 200
    });

    await loader.present();
    this.nav_ctrl.navigateForward('/signup')
  }

}
