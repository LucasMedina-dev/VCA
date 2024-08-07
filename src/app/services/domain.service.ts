import { AuthService } from '@auth0/auth0-angular';
import DomainStruct from '../pages/structures/domainStruct';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
            return of({error: "Cannot find user."})
          }
        }),
        catchError((error)=>{
          return of({error})
        })
      )
  }
  getDomain(domainName : string):Observable<any>{
    domainName= this.getDomainName(domainName)
    return this.auth.user$.pipe(
      switchMap((data)=>{
        if(data?.sub){
          return this.http.get<any>(`${this.endpoint}domains/domain`,{
            params:{
              userId: this.getUserId(data.sub),
              domainName: domainName
            },
          })
        }else{
          return of({error: "Cannot find user."})
        }
      }),
      catchError((error)=>{
        return of({error})
      })
    )
  }
  switchKeyStatus(keyId: any){
    return this.auth.user$.pipe(
      switchMap((data)=>{
        if(data?.sub){
          return this.http.put<any>(`${this.endpoint}domains/key`,{
            params:{
              keyId: keyId
            },
          })
        }else{
          return of({error: "Cannot find user."})
        }
      }),
      catchError((error)=>{
        return of({error})
      })
    )
  }
  switchDomainStatus(domainId: any){
    return this.auth.user$.pipe(
      switchMap((data)=>{
        if(data?.sub){
          return this.http.put<any>(`${this.endpoint}domains/domain`,{
            params:{
              domainId: domainId
            },
          })
        }else{
          return of({error: "Cannot find user."})
        }
      }),
      catchError((error)=>{
        return of({error})
      })
    )
  }
  resetDomainStats(domainId: any, statId : any){
    return this.auth.user$.pipe(
      switchMap((data)=>{
        if(data?.sub){
          return this.http.put<any>(`${this.endpoint}domains/reset`,{
            params:{
              domainId: domainId,
              statId: statId
            },
          })
        }else{
          return of({error: "Cannot find user."})
        }
      }),
      catchError((error)=>{
        return of({error})
      })
    )
  }
  deleteDomain(domainId: any){
    return this.auth.user$.pipe(
      switchMap((data)=>{
        if(data?.sub){
          return this.http.delete<any>(`${this.endpoint}domains/domain`,{
            params:{
              domainId: domainId
            },
          })
        }else{
          return of({error: "Cannot find user."})
        }
      }),
      catchError((error)=>{
        return of({error})
      })
    )
  }

  getUserId(user : string){
    const inputString = user
    const parts = inputString.split('|');
    return parts[1];
  }
  getDomainName(pathname : string){
    const inputString = pathname
    const parts = inputString.split('/');
    return parts[2];
  }
  saveUserData(userData : Object){
    this.userId= userData;
  }
}
