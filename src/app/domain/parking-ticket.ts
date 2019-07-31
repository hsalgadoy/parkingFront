import { Vehicle } from './vehicle';

export class ParkingTicket {

    ticketNumber: number;

    vehicle: Vehicle;

    inTimeDate: Date;

    outTimeDate: Date;

    grossTotal: number;
    displacementCost: number;
}
