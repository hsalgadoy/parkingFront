import { Component, OnInit } from '@angular/core';
import { ParkingTicketService } from '../services/parking-ticket.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-listparking',
  templateUrl: './listparking.component.html',
  styleUrls: ['./listparking.component.scss']
})
export class ListparkingComponent implements OnInit {
  

  parkingcars: [];
  constructor(private parkingservice: ParkingTicketService) { 
    
  }

  ngOnInit() {
    this.parkingservice.getTickets().toPromise().then((response: any)=>(this.parkingcars=response))
  }


}
