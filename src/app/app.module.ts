import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './auth/signup/signup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SignupClientComponent } from './auth/signup-client/signup-client.component';
import { LoginComponent } from './auth/login/login.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChooseStageComponent } from './auth/choose-stage/choose-stage.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarSearchComponent } from './shared/snackbar-search/snackbar-search.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SignupClientComponent,
    LoginComponent,
    SpinnerComponent,
    ChooseStageComponent,
    SnackbarSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
