import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationButtonComponent } from "../navigation-button/navigation-button.component";
import { AuthService } from '@auth0/auth0-angular';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-vca-title',
  standalone: true,
  imports: [RouterModule, NavigationButtonComponent],
  templateUrl: './vca-title.component.html',
  styleUrl: './vca-title.component.css'
})
export class VcaTitleComponent {

  constructor(private auth : AuthService, private alert: AlertsService){}

  logOut() {
    this.auth.logout().subscribe({
      next:(data)=>{
        this.alert.showAlert("Logged out!")
      }
    })
  }
}
