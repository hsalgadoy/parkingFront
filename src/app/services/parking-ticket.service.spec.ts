import { TestBed, inject } from '@angular/core/testing';
import { ParkingTicketService } from './parking-ticket.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let ticketexpected = {
    "vehicle": {
      "licensePlate": "RQR45A",
      "displacement": 200.0,
      "vehicleType": 1
    },
    "inTimeDate": "2019-07-31T19:31:29.227+0000",
    "outTimeDate": null,
    "displacementCost": 0.0,
    "grossTotal": 0.0,
    "ticketNumber": 2
  };
  let vehicle = {
    "licensePlate": "RQR45A",
    "displacement": 200.0,
    "vehicleType": 1
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParkingTicketService]
    });
  });

  it(
    'should get users',
    inject(
      [HttpTestingController, ParkingTicketService],
      (
        httpMock: HttpTestingController,
        service: ParkingTicketService
      ) => {
        service.entryVehicle(vehicle).subscribe(
          data => {
            expect(data).toEqual(ticketexpected, 'excpected types'), fail
          });
      }
    )
  );
});

