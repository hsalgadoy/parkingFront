

import { TestBed, inject } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TypeserviceService } from './typeservice.service';
import { VehicleType } from '../domain/vehicle-type';


describe('typeservice test', () => {
  let vehicletype: VehicleType[];
  const expectVehicleType: VehicleType[] =
    [
      {
        "idVehicleType": 1, "hourValue": 500.0, "dayValue": 4000.0, "description": "moto",
        "parkingSpace": 10, "spaceAviable": 10, "displacementCost": 2000.0
      },
      {
        "idVehicleType": 2, "hourValue": 1000.0, "dayValue": 8000.0, "description": "carro",
        "parkingSpace": 20, "spaceAviable": 20, "displacementCost": 0.0
      }
    ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TypeserviceService]
    });
  });

  it(
    'should get types',
    inject(
      [HttpTestingController, TypeserviceService],
      (
        httpMock: HttpTestingController,
        dataService: TypeserviceService
      ) => {
        dataService.getVehicleType().toPromise().then((response: any) => {
          vehicletype = response;
          expect(vehicletype).toEqual(expectVehicleType, 'type spected');
        });
      }
    )
  );
});
