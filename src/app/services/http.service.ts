import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENV_CONFIG, EnvironmentConfig } from './envoirment-config';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiUrl:string = ''
  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig, private http: HttpClient) {
    this.apiUrl = `${config.environment.BASE_URL}`;
  }

  get(url:string, params?:any):Observable<any>{
    const data = {params};
    return this.http.get<any>(`${this.apiUrl}/${url}`)
    .pipe(
      catchError(err =>  this.errorHandler(err))
    )
  }

  errorHandler(res: HttpErrorResponse):Observable<never>{
    const err = res.error;
    const key:any = Object.keys(err)
    let msg =  key.length > 0 && err(key[0])
    if(res.status == 401){
      // delet auth token and redirect to login
    }
    if(err[key] instanceof Array){
      msg = err[key[0]]
    }
    if(key == 'isTrusted'){
      // when internet is not connected
    } else{
      msg = key+ ':' + msg
    }
    return throwError({messages: msg, error: err})
  }
}
