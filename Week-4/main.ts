import { RailwayTicket } from "./TicketLogic";
import { Traveler } from "./Passenger";

const passengerInfo: Traveler = {
    fullName: "Ravi Kumar",
    age: 30,
    seatChoice: "Upper"
};

const bookedTicket = new RailwayTicket(
    passengerInfo,
    1500,
    12727
);

bookedTicket.displayTicket();