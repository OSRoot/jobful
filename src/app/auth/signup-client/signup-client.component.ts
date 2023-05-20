import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent {

  isLoading = false


  constructor(
    private route: Router
  ) { }



  onLogin() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.route.navigate(['login'])
    }, 600);
  }
}
