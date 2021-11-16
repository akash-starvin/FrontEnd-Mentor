import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetJsonDataService {

  selectedTimeFrame = new BehaviorSubject('daily');

  constructor(private http: HttpClient) {}

  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
}
