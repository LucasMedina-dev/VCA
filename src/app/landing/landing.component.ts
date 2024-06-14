import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(public auth:AuthService){}
  
  login(){
    this.auth.loginWithRedirect();
    this.auth.logout()
    return
  }
}
