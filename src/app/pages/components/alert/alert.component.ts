import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts.service';
import { NgClass, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  message: string = '';
  show:boolean=false;
  private subscription!: Subscription;

  constructor(private alertService: AlertsService) {}

  ngOnInit() {
    this.subscription = this.alertService.alert$.subscribe(message => {
      this.message = message;
      this.show= message!=''
      setTimeout(() => {
        this.show=false
        setTimeout(() => {
          this.message=""
        }, 1000);
      }, 3000);
      
    });
  }
}
