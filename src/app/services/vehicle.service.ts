import { Injectable } from '@angular/core';
import { Vehicle } from '../domain/vehicle';
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
export class VehicleService {
url="http://localhost:8085/ceibaparking/api/vehicle";
  constructor(private http: HttpClient) { }
s
  registerVechicle(vehicle: Vehicle){
    return this.http.post<Vehicle>(this.url+'/entry',vehicle);
  }
  getVehicle(plate: String): any{
      return this.http.get(this.url+'/get/'+plate,httpOptions);
  }

}
