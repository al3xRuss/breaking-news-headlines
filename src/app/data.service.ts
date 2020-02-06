import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = 'https://newsapi.org/v2/top-headlines?country=us';
  private apiKey = '1437be957ba74f9e93cf1688a28a05ac';

  headers = new HttpHeaders().set('TRN-Api-Key', this.apiKey);

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.apiURL}&apiKey=${this.apiKey}`);
  }
}
