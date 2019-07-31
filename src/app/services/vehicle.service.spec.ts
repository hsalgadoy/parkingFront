import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { Vehicle } from '../domain/vehicle';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('VehicleService', () => {
  let servicevehicle: VehicleService;
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule, 
      Router],
      
      declarations: [ VehicleService ]

  }));


});
