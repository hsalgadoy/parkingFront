import { Component, OnInit } from '@angular/core';
import {TypeserviceService} from './../services/typeservice.service';
import { HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../domain/vehicle';
import { ParkingTicket } from '../domain/parking-ticket';
import { VehicleService } from '../services/vehicle.service';
import { ParkingTicketService } from '../services/parking-ticket.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-outvehicle',
  templateUrl: './outvehicle.component.html',
  styleUrls: ['./outvehicle.component.scss']
})
export class OutvehicleComponent implements OnInit {
  plate: string;
  ticket: ParkingTicket= new ParkingTicket();
  
  constructor(private route: ActivatedRoute, private ticketservice:ParkingTicketService) { 
    this.ticket.vehicle= new Vehicle();
  }

  ngOnInit() {
    this.plate= this.route.snapshot.params['id'];
    this.ticketservice.outvehicle(this.plate).subscribe(
      data=>{
        this.ticket=data;
      }
    );
  }

}
