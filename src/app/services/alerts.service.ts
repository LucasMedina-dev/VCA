import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public alert$: Observable<string> = this.alertSubject.asObservable();
  
  constructor() { }
  showAlert(message: string) {
    this.alertSubject.next(message);
  }
}
