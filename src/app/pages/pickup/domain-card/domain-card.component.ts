import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import DomainStruct from '../../structures/domainStruct';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-domain-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css',
})
export class DomainCardComponent {
  @Input() domain!: any;
  constructor(private router: Router, private alertsService: AlertsService) {}
  goToDomain() {
    const domainName: String = this.domain.domainName
      .toLowerCase()
      .split(' ')
      .join('-');
    this.router.navigate([`/stats/${domainName}`]);
  }
  clipboard(stringToCopy: string, alert : string) {
    navigator.clipboard.writeText(stringToCopy)
    this.alertsService.showAlert(alert || "Copied!")
  }
}
