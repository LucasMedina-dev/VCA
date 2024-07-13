import { AuthService } from '@auth0/auth0-angular';
import DomainStruct from '../pages/structures/domainStruct';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  userId: any;
  endpoint : string = "http://localhost:3000/";
  constructor(private auth: AuthService, private http: HttpClient) { }


  postDomain(domain: DomainStruct):Observable<any>{
    try {
      return this.http.post<any>(`${this.endpoint}domains/create`,domain)
    } catch (error) {
      throw error
    }
  }
  getDomains():Observable<any>{
      return this.auth.user$.pipe(
        switchMap((data)=>{
          if(data?.sub){
            return this.http.get<any>(`${this.endpoint}domains/list`,{
              params:{
                userId: this.getUserId(data.sub)
              },
            })
          }else{
            return of({error: "Can't find user."})
          }
        }),
        catchError((error)=>{
          console.log('acaaa')
          return of({error})
        })
      )
      
  }
  getUserId(user : string){
    const inputString = user
    const parts = inputString.split('|');
    return parts[1];
  }
  saveUserData(userData : Object){
    this.userId= userData;
  }
}
