import { Users } from './../modal/users';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpService) { }

  getAllUser(): Observable<Users[]>{
    return this.httpService.get('users').pipe(
      map(data => data as Users[])
    )
  }

}
