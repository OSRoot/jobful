import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarSearchComponent } from '../shared/snackbar-search/snackbar-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isSearch = false;
  durationInSec = 5;
  loading: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,

  ) { }

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

  onSearch() {

  }
  openSnackBar() {
    this.snackbar.openFromComponent(SnackbarSearchComponent, {
      duration: this.durationInSec * 1000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }
}
