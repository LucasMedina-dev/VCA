import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import DomainStruct from '../../structures/domainStruct';

@Component({
  selector: 'app-domain-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css',
})
export class DomainCardComponent{
  @Input() domain!: any;
  constructor(private router: Router){}
  goToDomain() {
    const domainName : String = this.domain.domainName.toLowerCase().split(" ").join("-")
    this.router.navigate([`/stats/${domainName}`])
  }
}
