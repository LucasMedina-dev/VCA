import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertsService } from '../../../services/alerts.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.css'
})
export class AskComponent implements OnInit, OnDestroy {
  message!: string;
  private subscription!: Subscription;
  constructor(private alertService : AlertsService){}
  

  ngOnInit(): void {
    this.subscription= this.alertService.askAlert$.subscribe((message)=>{
      this.message=message;
    })
  }
  response(res : boolean){
    this.message=''
    this.alertService.responseAsk(res)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
