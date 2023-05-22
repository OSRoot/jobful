import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ChooseStageComponent } from './auth/choose-stage/choose-stage.component';
import { SignupClientComponent } from './auth/signup-client/signup-client.component';
import { FreelancerComponent } from './complete-info/freelancer/freelancer.component';
import { ClientComponent } from './complete-info/client/client.component';
import { SearcherComponent } from './shared/searcher/searcher.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'choose', component: ChooseStageComponent },
  { path: 'signup-client', component: SignupClientComponent },
  { path: 'complete-freelancer', component: FreelancerComponent },
  { path: 'complete-client', component: ClientComponent },
  { path: 'search', component: SearcherComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
