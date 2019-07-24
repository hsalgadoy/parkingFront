import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TypeserviceService {

  constructor( private http: HttpClient ) { 

  }

  getVehicleType(): Observable<any> {
    return this.http.get('http://localhost:8085/ceibaparking/api/type',httpOptions)
  }
}
