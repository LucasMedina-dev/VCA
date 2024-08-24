import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationButtonComponent } from "../navigation-button/navigation-button.component";
import { AuthService } from '@auth0/auth0-angular';
import { AlertsService } from '../../../services/alerts.service';
import { Subscription } from 'rxjs';

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
    this.alert.createAsk('You sure to logout?')
    const askSubscription : Subscription = this.alert.responseAlert$.subscribe({
      next:(response)=>{
        if(response){
          const logout : Subscription = this.auth.logout().subscribe({
            next:()=>{
              logout.unsubscribe()
              askSubscription.unsubscribe()
            }
          })
        }else{
          askSubscription.unsubscribe()
        }
       
      }
    })
  }
}
