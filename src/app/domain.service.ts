import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  user : Object={};
  endpoint : string = "http://localhost:3000/";
  constructor(private auth: AuthService) { }

  postDomain(){
    return this.user
  }
  saveUserData(userData : Object){
    this.user= userData;
  }
}
