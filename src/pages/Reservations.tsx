import ReservationEntry from "@/components/reservations/ReservationEntry";
import { scooters } from "@/data/Scooters";

const exampleReservations = [
  {
    timeRange: "Today, 23 may",
    reservations: [
      {
        id: 0,
        reservationDate: new Date("July 4 2023 12:30"),
        returnDate: new Date("August 4 2023 18:30"),
        location: "Example",
        total: 29,
        completed: true,
        products: scooters
          .filter((scooter) => scooter.id <= 3)
          .map((element) => {
            return {
              ...element,
              reservedAmount: Math.round(Math.random() * 5),
            };
          }),
      },
    ],
  },
];

const Reservations = () => {
  return (
    <main className="reservations-container">
      <h1 className="text-heading1">Reservation History</h1>
      <div className="reservation-entries-wrapper">
        <h2 className="text-heading2">Active reservations</h2>
        {exampleReservations.map(({ timeRange, reservations }) => (
          <>
            <div className="reservation-entries">
              <h3 className="text-body">{timeRange}</h3>

              {reservations.map((reservation) => (
                <ReservationEntry
                  key={reservation.id}
                  {...reservation}
                  completed={false}
                />
              ))}
            </div>
          </>
        ))}
      </div>

      <div className="reservation-entries-wrapper">
        <h2 className="text-heading2">Old reservations</h2>

        {exampleReservations.map(({ timeRange, reservations }) => (
          <>
            <div className="reservation-entries">
              <h3 className="text-body">{timeRange}</h3>

              {reservations.map((reservation) => (
                <ReservationEntry key={reservation.id} {...reservation} />
              ))}
            </div>
          </>
        ))}
      </div>
    </main>
  );
};

export default Reservations;
