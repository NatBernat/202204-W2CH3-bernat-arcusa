let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

let visualSeparation = "**************************************************"


function welcome() {
    userName = prompt("¿Cómo te llamas?");
    if (userName !== null) {userName = userName.replace(/\s/g, '')}
    if (userName === null || userName === "") {console.log("¡Bienvenido/a!");
    } else {console.log(`¡Bienvenido/a ${userName}!`)};
  };

welcome();

function showAllFlights() {
    console.log(visualSeparation);
    console.log("Estos son todos los vuelos disponibles:")
    let scale = "";
    flights.forEach((flight) => {
        if (flight.scale) {
            scale = "realiza escalas";
        } else {
            scale = "no realiza ninguna escala";
        }
        console.log(
            `El vuelo ${flight.id} con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} y ${scale}.`
        );
    });
};

showAllFlights();

function averageFlightCost() {
    console.log(visualSeparation);
    let costsSum = 0;
    flights.forEach((flight) => {costsSum += flight.cost});
    let averageCost = (costsSum / flights.length);
    console.log(`El precio medio de los vuelos es: ${averageCost.toFixed(2)}€.`);
};

averageFlightCost();

function flightsWithScales() {
    let scaleFlightsNumber = 0;
    console.log(visualSeparation);
    flights.forEach((flight) => {
        if (flight.scale) {
            scaleFlightsNumber += 1;
        };
    });
    console.log(`Hay ${scaleFlightsNumber} vuelos que realizan escalas:`);
    flights.forEach((flight) => {
        if (flight.scale) {
            console.log(
                `El vuelo ${flight.id} con origen ${flight.from} y destino ${flight.to} (${flight.cost}€).`
                );
        };
    });
};

flightsWithScales();

function lastFiveFlights() {
    console.log(visualSeparation);
    let fifthLastFlight = flights[(flights.length -5)];
    let forthLastFlight = flights[(flights.length -4)];
    let thirdLastFlight = flights[(flights.length -3)];
    let secondLastFlight = flights[(flights.length -2)];
    let firstLastFlight = flights[(flights.length -1)];
    console.log("Los últimos 5 vuelos son:");
    console.log(`1. de ${fifthLastFlight.from} a ${fifthLastFlight.to} (${fifthLastFlight.cost}€).`);
    console.log(`2. de ${forthLastFlight.from} a ${forthLastFlight.to} (${forthLastFlight.cost}€).`);
    console.log(`3. de ${thirdLastFlight.from} a ${thirdLastFlight.to} (${thirdLastFlight.cost}€).`);
    console.log(`4. de ${secondLastFlight.from} a ${secondLastFlight.to} (${secondLastFlight.cost}€).`);
    console.log(`5. de ${firstLastFlight.from} a ${firstLastFlight.to} (${firstLastFlight.cost}€).`);
};

lastFiveFlights();