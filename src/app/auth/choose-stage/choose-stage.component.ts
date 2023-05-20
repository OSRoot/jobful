import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
}
