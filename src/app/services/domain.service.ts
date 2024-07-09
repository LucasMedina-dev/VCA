import { AuthService } from '@auth0/auth0-angular';
import DomainStruct from '../pages/structures/domainStruct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  user : Object={};
  endpoint : string = "http://localhost:3000/";
  constructor(private auth: AuthService, private http: HttpClient) { }

  postDomain(domain: DomainStruct):Observable<any>{
    try {
      return this.http.post<any>(`${this.endpoint}domains/create`,domain)
    } catch (error) {
      throw error
    }
  }
  getDomains(userId: string):Observable<any>{
    try {
      return this.http.get<any>(`${this.endpoint}domains/list`,{
        params:{
          userId: userId
        },
      })
    } catch (error) {
      throw error
    }
  }
  saveUserData(userData : Object){
    this.user= userData;
  }
}
