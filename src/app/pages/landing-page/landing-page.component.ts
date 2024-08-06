import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.isAuthenticated$.subscribe({
      next: (data)=>{
        if(data){
          this.router.navigate(['pickup'])
        }else{
          this.auth.loginWithRedirect();
        }
        
      }
    })
    
  }
}
