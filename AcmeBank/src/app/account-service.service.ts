import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/api/accounts"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAccounts(){
    return this.http.get<any[]>(this.url);
  }
}
