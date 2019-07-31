import { Component, OnInit } from '@angular/core';
import { ParkingTicketService } from '../services/parking-ticket.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listparking',
  templateUrl: './listparking.component.html',
  styleUrls: ['./listparking.component.scss']
})
export class ListparkingComponent implements OnInit {
  

  parkingcars: [];
  constructor(private parkingservice: ParkingTicketService, private router: Router) { 
    
  }

  ngOnInit() {
    try {
      this.parkingservice.getTickets().toPromise().then((response: any)=>(this.parkingcars=response));
    } catch (error) {
      console.log('> Error is handled: ');
    }

   
  }

  getoutvehicle(plate: string){
    this.router.navigate(['/out',plate]);
  }

}
