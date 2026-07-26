import { TAX_PERCENT, SERVICE_CHARGE } from "./Constants";
import { Traveler } from "./Passenger";

export class RailwayTicket {

    constructor(
        public traveler: Traveler,
        private ticketPrice: number,
        public trainNo: number
    ) {}

    getTotalFare(): number {
        const taxAmount = this.ticketPrice * TAX_PERCENT;
        return this.ticketPrice + taxAmount + SERVICE_CHARGE;
    }

    displayTicket(): void {
        console.log("=========== Railway Ticket ===========");
        console.log(`Passenger Name : ${this.traveler.fullName}`);
        console.log(`Age            : ${this.traveler.age}`);
        console.log(`Seat Choice    : ${this.traveler.seatChoice ?? "Not Selected"}`);
        console.log(`Train Number   : ${this.trainNo}`);
        console.log(`Base Fare      : ₹${this.ticketPrice}`);
        console.log(`Total Fare     : ₹${this.getTotalFare()}`);
        console.log("======================================");
    }
}