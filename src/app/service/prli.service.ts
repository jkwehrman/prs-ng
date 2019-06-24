import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { Prli } from '../model/prli.class';

@Injectable({
  providedIn: 'root'
})
export class PrliService {
  url: string = "http://localhost:8080/purchase-request-line-items/";
    

constructor(private http: HttpClient) { }

list(): Observable<JsonResponse> {
  return this.http.get(this.url) as Observable<JsonResponse>;
}

get(prliId: string): Observable<JsonResponse> {
  return this.http.get(this.url + prliId) as Observable<JsonResponse>;
}

create(prli: Prli): Observable<JsonResponse> {
  return this.http.post(this.url, prli) as Observable<JsonResponse>;  
}
edit(prli: Prli): Observable<JsonResponse> {
  return this.http.put(this.url, prli) as Observable<JsonResponse>;
} 

  remove(prli: Prli): Observable<JsonResponse> {
    return this.http.delete(this.url+prli.id) as Observable<JsonResponse>;
} 
getLines(prid: string): Observable<JsonResponse> {
  return this.http.get(this.url+"lines-for-pr/"+prid) as Observable<JsonResponse>;
} 


}
