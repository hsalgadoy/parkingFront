import { Vehicle } from './vehicle';

export class ParkingTicket {

    TicketNumber: number;

    vehicle: Vehicle;

    inTimeDate: Date;

    outTimeDate: Date;

    grossTotal: number;
}
