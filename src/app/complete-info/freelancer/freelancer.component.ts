import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import { SnackbarWelcomeComponent } from 'src/app/shared/snackbar-welcome/snackbar-welcome.component';


@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FreelancerComponent {
  @Input() role = ''


  // ######################################################
  value = 'Clear me';
  durationInSec = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  // ######################################################

  constructor(
    private snackbar: MatSnackBar,

  ) {
    console.log(this.role);
    this.openSnackBar()

  }



  openSnackBar() {
    this.snackbar.openFromComponent(SnackbarWelcomeComponent, {
      duration: this.durationInSec * 1000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ''

    })
  }
}
