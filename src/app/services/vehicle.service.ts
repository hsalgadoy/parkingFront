import { Injectable } from '@angular/core';
import { Vehicle } from '../domain/vehicle';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
url="http://localhost:8085/ceibaparking/api/vehicle";
  constructor(private http: HttpClient) { }

  registerVechicle(vehicle: Vehicle){
    return this.http.post<Vehicle>(this.url+'/entry',vehicle);
  }
  getVehicle(plate: String){
    return this.http.get('http://localhost:8085/ceibaparking/api/vehicle'+plate)
  }

}
