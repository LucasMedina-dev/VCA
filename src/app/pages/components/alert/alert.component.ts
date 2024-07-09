import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit, OnDestroy {
  message: string = '';
  private subscription!: Subscription;

  constructor(private alertService: AlertsService) {}

  ngOnInit() {
    this.subscription = this.alertService.alert$.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
