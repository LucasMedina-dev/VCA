import { Component, OnInit } from '@angular/core';
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
    this.auth.loginWithRedirect();
  }
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: ()=>{
        this.router.navigate(['pickup'])
      }
    })
  }
}
