import { Products } from './../modal/products';
import { Observable, map } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private httpService: HttpService) { }

  allProduct():Observable<Products[]>{
    return this.httpService.get('products').pipe(
      map(data => data as Products[])
    )
  }

  getSingleProduct(id:any):Observable<Products>{
    return this.httpService.get('products/'+id).pipe(
      map(data => data as Products)
    )
  }
}
