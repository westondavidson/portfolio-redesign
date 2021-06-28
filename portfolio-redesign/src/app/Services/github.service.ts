import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin':'*'
      }
    )
  }

  constructor(private http:HttpClient) { }

  GetContributions() : Observable<any>
  {
    return this.http.get("https://github.com/users/westondavidson/contributions", this.httpOptions);
  }

}
