import { Component, OnInit } from '@angular/core';
import {TypeserviceService} from './../services/typeservice.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-entryvehicle',
  templateUrl: './entryvehicle.component.html',
  styleUrls: ['./entryvehicle.component.scss']
})
export class EntryvehicleComponent implements OnInit {
  vehicletype: [];

  constructor(private service: TypeserviceService ) { }

  ngOnInit() {



    this.service.getVehicleType().toPromise().then((response: any)=>(this.vehicletype=response))

  }

}
