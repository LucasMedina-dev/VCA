import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent implements OnInit {
  messages: Array<any> = [];

  constructor(private alertService: AlertsService) {}

  ngOnInit() {
    this.alertService.alert$.subscribe((message) => {
      
      if (message != '' && !this.messages.find((msg)=>msg===message)) {
        this.messages.push(message);
        setTimeout(() => {
          let index=this.messages.indexOf(message)
          this.messages.splice(index,1)
        }, 3000);
      }
    });
  }
}
