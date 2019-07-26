import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FormsModule
  ],
  providers: [
    TypeserviceService,
    VehicleService,
    ParkingTicketService
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
