import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-guide-page',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './guide-page.component.html',
  styleUrl: './guide-page.component.css'
})
export class GuidePageComponent{
  @Input() domainData : any;
  @Input() show: boolean = false;

  constructor(private alertsService : AlertsService){}
  clipboard(stringToCopy: string, alert : string) {
    navigator.clipboard.writeText(stringToCopy)
    this.alertsService.showAlert(alert || "Copied!")
  }
}
