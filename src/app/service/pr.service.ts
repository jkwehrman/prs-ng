import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { PR } from '../model/pr.class';

@Injectable({
  providedIn: 'root'
})
export class PrService {
  url: string = "http://localhost:8080/pr/";

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  get(prId: string): Observable<JsonResponse> {
    return this.http.get(this.url + prId) as Observable<JsonResponse>;
  }

  create(pr: PR): Observable<JsonResponse> {
    return this.http.post(this.url, pr) as Observable<JsonResponse>;  
  }
  edit(pr: PR): Observable<JsonResponse> {
    return this.http.put(this.url, pr) as Observable<JsonResponse>;
  } 
  remove(pr: PR): Observable<JsonResponse> {
    return this.http.delete(this.url+pr.id) as Observable<JsonResponse>;
  } 

}