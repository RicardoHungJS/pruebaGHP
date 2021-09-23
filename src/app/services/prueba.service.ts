import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
   }

   getInfo():Observable<any>{
    return this._http.get(this.url)
   }

}
