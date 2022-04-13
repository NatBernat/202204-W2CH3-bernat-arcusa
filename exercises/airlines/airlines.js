const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function welcome() {
  let userName;
  if (userName !== null) {
    userName = userName.replace(/\s/g, "");
  }
  if (userName === null || userName === "") {
    return userName;
  }
  return userName;
}

welcome();

function showAllFlights() {
  let scale = "";
  flights.forEach((flight) => {
    if (flight.scale) {
      scale = "realiza escalas";
    } else {
      scale = "no realiza ninguna escala";
    }
  });
  return scale;
}

showAllFlights();

function averageFlightCost() {
  let costsSum = 0;
  flights.forEach((flight) => {
    costsSum += flight.cost;
  });
  const averageCost = costsSum / flights.length;
  return averageCost;
}

averageFlightCost();

function flightsWithScales() {
  let scaleFlightsNumber = 0;
  flights.forEach((flight) => {
    if (flight.scale) {
      scaleFlightsNumber += 1;
    }
  });
  flights.forEach((flight) => {
    if (flight.scale) {
      return flight.scale;
    }
    return scaleFlightsNumber;
  });
}

flightsWithScales();

function lastFiveFlights() {
  const fifthLastFlight = flights[flights.length - 5];
  const forthLastFlight = flights[flights.length - 4];
  const thirdLastFlight = flights[flights.length - 3];
  const secondLastFlight = flights[flights.length - 2];
  const firstLastFlight = flights[flights.length - 1];
  const topLastFlights = [
    firstLastFlight,
    secondLastFlight,
    thirdLastFlight,
    forthLastFlight,
    fifthLastFlight,
  ];
  return topLastFlights;
}

lastFiveFlights();
