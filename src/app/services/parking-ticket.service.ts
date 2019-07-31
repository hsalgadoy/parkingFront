import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ParkingTicket } from '../domain/parking-ticket';
import { Vehicle } from '../domain/vehicle';

const httpOption={
  headers: new HttpHeaders({
    'Content-Tyipe': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ParkingTicketService {
  url="http://localhost:8085/ceibaparking/api/parking";
  constructor(private http: HttpClient) {   }

  entryVehicle(vehicle: Vehicle): any{
    return this.http.post<Vehicle>(this.url+'/invehicle',vehicle);
  }

  outvehicle(plate:String): any{
    return this.http.patch<ParkingTicket>(this.url+'/outvehicle/'+plate,null);
  }

  getTickets(): Observable<any>{
    return this.http.get(this.url+'/list',httpOption);
  }

  

}
