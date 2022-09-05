import { Post } from './../modal/post';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class PostService {

    constructor(private httpService: HttpService) { }

    allPost():Observable<Post[]>{
      return this.httpService.get('posts').pipe(
        map(data => data as Post[])
      )
    }
  
}
