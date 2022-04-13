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

function showAllFlights() {
  let scale = "";
  flights.forEach((flight) => {
    if (flight.scale) {
      scale = "realiza escalas";
    } else {
      scale = "no realiza ninguna escala";
    }
    return scale;
  });
}

function averageFlightCost() {
  let costsSum = 0;
  flights.forEach((flight) => {
    costsSum += flight.cost;
  });
  const averageCost = costsSum / flights.length;
  return averageCost;
}

function flightsWithScales() {
  let scaleFlightsNumber = 0;
  flights.forEach((flight) => {
    if (flight.scale) {
      scaleFlightsNumber += 1;
    }
  });
  flights.forEach((flight) => {
    if (flight.scale) {
      return scaleFlightsNumber;
    }
    return scaleFlightsNumber;
  });
  return scaleFlightsNumber;
}

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
function adminContinueCall() {
  const askForContinue = confirm("¿Quieres continuar?");
  if (askForContinue === false) {
    return userLevelChoice();
  }
  return adminActions();
}

function adminActions() {
  const askForAction = "";
  if (askForAction.toUpperCase() === "CREAR") {
    if (flights.length > 14) {
      adminContinueCall();
    } else {
      const newFlight = {};
      newFlight.id = flights.length + 1;
      newFlight.from = prompt("ORIGEN:");
      newFlight.to = prompt("DESTINO:");
      newFlight.cost = +prompt("COSTE:");
      newFlight.scale = confirm("ESCALA:");
      flights.push(newFlight);
      showAllFlights();
      adminContinueCall();
    }
  } else if (askForAction.toUpperCase() === "ELIMINAR") {
    showAllFlights();
    const idToDelete = "";
    flights.splice(idToDelete, 1);
    showAllFlights();
    adminContinueCall();
  } else if (askForAction === null) {
    adminContinueCall();
  } else {
    adminContinueCall();
  }
}

function userActions() {
  const userMaxBudget = "";
  alert(
    `Estos son los vuelos disponibles con un presupuesto máximo de ${userMaxBudget}€:`
  );
  flights.forEach((flight) => {
    if (flight.cost <= userMaxBudget) {
      alert(
        `Vuelo ${flight.id}: de ${flight.from} a ${flight.to} (${flight.cost}€).`
      );
    }
  });
  userBuyFlight();
}

function userLevelChoice() {
  let levelChoice;
  if (levelChoice.toUpperCase() === "ADMIN") {
    adminActions();
  } else if (levelChoice.toUpperCase() === "USER") {
    userActions();
  } else {
    userLevelChoice();
  }
}
function userBuyFlight() {
  const flightToBuy = prompt(
    'Para comprar un pasaje de vuelo, introduce el ID del vuelo deseado, o bien "exit" para salir:'
  );
  if (flightToBuy.toUpperCase() === "EXIT") {
    alert("Has salido del programa con éxito");
  } else {
    alert(`Has comprado un pasaje para el vuelo ${flightToBuy}.`);
    alert("Gracias por tu compra, vuelve pronto.");
  }
  welcome();
  showAllFlights();
  averageFlightCost();
  flightsWithScales();
  lastFiveFlights();
  userLevelChoice();
}
