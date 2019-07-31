import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryvehicleComponent } from './entryvehicle/entryvehicle.component';
import { OutvehicleComponent } from './outvehicle/outvehicle.component';
import { ListparkingComponent } from './listparking/listparking.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import {TypeserviceService} from './services/typeservice.service';
import {VehicleService} from './services/vehicle.service';
import {ParkingTicketService} from './services/parking-ticket.service';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EntryvehicleComponent,
    OutvehicleComponent,
    ListparkingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    HttpClientModule,
    TypeserviceService,
    VehicleService,
    ParkingTicketService
    
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
