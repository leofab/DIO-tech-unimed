import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = 'http://localhost:3100/api/bookstore';

  httpOptions = {
    Headers: new HttpHeaders({'content-type:': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getBook() {
    return this.httpClient.get<Book[]>(this.url);
  }
}
