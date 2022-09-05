import { Airline } from './../modal/airline';
import { map, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

constructor(private httpService: HttpService) { }

getAllAirlines(): Observable<Airline[]>{
  return this.httpService.get('airlines').pipe(
    map(data => data as Airline[])
  )
}

}
