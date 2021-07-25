import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonAppService {
  appId = "62ee2fab";
  applicationKeys="ed4be25d018c561a68ff19f94216e718	";
  constructor(private httpClient: HttpClient) { }

  public getDataFromAPI(){
    var url = 'https://fakestoreapi.com/products';
    return this.httpClient.get(url).pipe(
      map((res: any) => res)
    )
  }
}
