import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loading: boolean = false;
  constructor(private router: Router) { }

  onSignup() {
    this.loading = true
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['choose'])
    }, 800);
  }

  onLogin() {
    this.loading = true
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['login'])
    }, 800);
  }
}
