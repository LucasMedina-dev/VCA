import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  button!: string;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: (value)=>{
        this.button= value ? 'Dashboard' : 'Get started';
      }
    })
  }
  
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
