import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { PR } from '../model/pr.class';
import { User } from '../model/user.class';


@Injectable({
  providedIn: 'root'
})
export class PrService {
  url: string = "http://localhost:8080/purchase-requests/";

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  get(prId: string): Observable<JsonResponse> {
    return this.http.get(this.url + prId) as Observable<JsonResponse>;
  }

  create(pr: PR): Observable<JsonResponse> {
    return this.http.post(this.url + "submit-new", pr) as Observable<JsonResponse>;
  }

  edit(pr: PR): Observable<JsonResponse> {
    return this.http.put(this.url, pr) as Observable<JsonResponse>;
  }

  remove(pr: PR): Observable<JsonResponse> {
    return this.http.delete(this.url + pr.id) as Observable<JsonResponse>;
  }

  submitForReview(pr: PR): Observable<JsonResponse> {
    return this.http.put(this.url + "submit-review", pr) as Observable<JsonResponse>;
  }

  listReview(user: User): Observable<JsonResponse> {
    return this.http.post(this.url + "list-review", user) as Observable<JsonResponse>;
  }

  approve(pr: PR): Observable<JsonResponse> {
    return this.http.put(this.url + "approve", pr) as Observable<JsonResponse>;
  }
  
  reject(pr: PR): Observable<JsonResponse> {
    return this.http.put(this.url + "reject", pr) as Observable<JsonResponse>;
  }
} 
