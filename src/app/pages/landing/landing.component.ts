import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
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
