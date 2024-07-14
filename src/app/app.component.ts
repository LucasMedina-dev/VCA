import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomainService } from './services/domain.service';
import { AuthService } from '@auth0/auth0-angular';
import { AlertComponent } from "./pages/components/alert/alert.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertComponent],
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
