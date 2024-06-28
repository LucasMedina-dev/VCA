import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomainService } from './domain.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService, private domainService : DomainService){}
  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (data: any) => {
        this.domainService.saveUserData(data);
      },
    });
  }

}
