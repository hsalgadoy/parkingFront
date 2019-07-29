import { Component, OnInit } from '@angular/core';
import {TypeserviceService} from './../services/typeservice.service';
import { HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../domain/vehicle';
import { ParkingTicket } from '../domain/parking-ticket';
import { VehicleService } from '../services/vehicle.service';
import { ParkingTicketService } from '../services/parking-ticket.service';


@Component({
  selector: 'app-entryvehicle',
  templateUrl: './entryvehicle.component.html',
  styleUrls: ['./entryvehicle.component.scss']
})
export class EntryvehicleComponent implements OnInit {
vehicle: Vehicle = new Vehicle();
ticket: ParkingTicket = new ParkingTicket();

  vehicletype: [];
  constructor(private typeservice: TypeserviceService,
     private ticketservice: ParkingTicketService, 
     private vehicleservice: VehicleService ) { 
     }

  ngOnInit() {
    this.typeservice.getVehicleType().toPromise().then((response: any)=>(this.vehicletype=response))
  }

  getVehicle(plate: string){
    this.vehicleservice.getVehicle(plate).toPromise().then((response: any)=>(console.log(JSON.parse(response))));
   
  }



  registryVehicle(){
    this.ticketservice.entryVehicle(this.vehicle).subscribe(
      data=>{         
        this.ticket=data;
        alert('Vehiculo ingresado con exito.');     
      });     
    }
    
}
