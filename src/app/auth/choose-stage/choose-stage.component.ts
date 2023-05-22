import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-choose-stage',
  templateUrl: './choose-stage.component.html',
  styleUrls: ['./choose-stage.component.scss']
})
export class ChooseStageComponent {


  client!: string
  freelancer!: string
  isHidden!: boolean
  isLoading = false

  constructor(
    private route: Router,
    private alert: AlertController,


  ) {

  }



  set_option(ev: any) {
    this.isHidden = true
    if (ev.target.value === 'client') {
      this.freelancer = ''
      let role = ev.target.value;
      this.client = role;
      console.log(this.client);
    }
    else if (ev.target.value === 'freelancer') {
      this.client = ''
      let role = ev.target.value;
      this.freelancer = role;
      console.log(this.freelancer);
    }
  }


  go_signup_freelancer() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.route.navigate(['signup'])
    }, 700);
  }

  go_signup_client() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.route.navigate(['signup-client'])
    }, 700);
  }

  async on_continue() {
    let alert = await this.alert.create({
      header: 'Confirm',
      message: `continue as freelancer?`,
      buttons: [
        { text: 'Ok', handler: () => { } },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    await alert.present()
  }
}
