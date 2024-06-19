import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain-card',
  standalone: true,
  imports: [],
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css',
})
export class DomainCardComponent {

  constructor(private router: Router){}
  cardData: any = { // Create model and modify cardData: DomainModel ...
    idDomain: 1,
    domainName: "My website"
  } 
  
  goToDomain() {
    const domainName : String = this.cardData.domainName.toLowerCase().split(" ").join("-")

    this.router.navigate([`/stats/${domainName}`])
  }
}
