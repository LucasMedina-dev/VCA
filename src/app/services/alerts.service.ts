import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alertSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private askSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private responseSubject: Subject<boolean> = new Subject<boolean>();

  public alert$: Observable<string> = this.alertSubject.asObservable();
  public askAlert$: Observable<string> = this.askSubject.asObservable();
  public responseAlert$: Observable<boolean> = this.responseSubject.asObservable();

  constructor() { }
  showAlert(message: string) {
    this.alertSubject.next(message);
  }
  createAsk(message: string) {
    this.askSubject.next(message);
  }
  responseAsk(response : boolean) {
    this.responseSubject.next(response);
  }
}
