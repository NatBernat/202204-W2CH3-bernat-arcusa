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

welcome();
showAllFlights();
averageFlightCost();
flightsWithScales();
lastFiveFlights();
userLevelChoice();

function separation(){
    console.log("**************************************************");
}

function welcome() {
    userName = prompt("¿Cómo te llamas?");
    if (userName !== null) {userName = userName.replace(/\s/g, '')}
    if (userName === null || userName === "") {console.log("¡Bienvenido/a!");
    } else {console.log(`¡Bienvenido/a ${userName}!`)};
};

function showAllFlights() { 
    separation();
    console.log("Estos son todos los vuelos disponibles:")
    let scale = "";
    flights.forEach((flight) => {
        if (flight.scale) {
            scale = "realiza escalas";
        } else {
            scale = "no realiza ninguna escala";
        }
        console.log(
            `El vuelo con ID ${flight.id}, con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost}€ y ${scale}.`
        );
    });
};

function averageFlightCost() {
    separation();
    let costsSum = 0;
    flights.forEach((flight) => {costsSum += flight.cost});
    let averageCost = (costsSum / flights.length);
    console.log(`El precio medio de los vuelos es: ${averageCost.toFixed(2)}€.`);
};

function flightsWithScales() {
    let scaleFlightsNumber = 0;
    separation();
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

function lastFiveFlights() {
    separation();
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

function userLevelChoice() {
    separation();
    let levelChoice = prompt(`${userName}, ¿a qué nivel de usuario quieres acceder? (user/admin)`);
    if (levelChoice.toUpperCase() === "ADMIN") {
        console.log("Accedes a las opciones de administrador.")
        adminActions();
    } else if (levelChoice.toUpperCase() === "USER") {
        console.log("Accedes a las opciones de usuario.")
        userActions();
    } else {
        alert("Nivel de usuario incorrecto.")
        userLevel();
    };
};

function adminActions() {
    const askForAction = prompt('¿Deseas "crear" o "eliminar" un vuelo?')
        if (askForAction.toUpperCase() === "CREAR") {
            if (flights.length > 14) {
                alert("La base de datos está llena y no puedes crear más vuelos. Debes eliminar almenos un vuelo para introducir nuevos vuelos.")
                adminContinueCall();
            } else {
                const newFlight = {};
                newFlight.id = flights.length +1;
                newFlight.from = prompt("ORIGEN:");
                newFlight.to = prompt("DESTINO:");
                newFlight.cost = +prompt("COSTE:");
                newFlight.scale = confirm("ESCALA:")
                flights.push(newFlight);
                separation();
                showAllFlights();
                adminContinueCall();
            };
        } else if (askForAction.toUpperCase() === "ELIMINAR") {
            showAllFlights();
            const idToDelete = prompt("¿Qué vuelo (ID) deseas eliminar?");
            flights.splice(idToDelete, 1);
            showAllFlights();
            adminContinueCall();        
        } else if (askForAction === null) {
            adminContinueCall();
        } else {
            alert("No se ha reconocido ninguna opción.")
            adminContinueCall();
        };
};

function adminContinueCall() {
    const askForContinue = confirm("¿Quieres continuar?")
    if (askForContinue === false) {
        alert("Has salido del programa con éxito.");
        return;
    } else {
        adminActions();
    };
};

function userActions() {
    let userMaxBudget = +prompt(`${userName}, ¿cual es tu presupuesto máximo para el pasaje de vuelo?`);
    console.log(`Estos son los vuelos disponibles con un presupuesto máximo de ${userMaxBudget}€:`)
    flights.forEach((flight) => {
        if (flight.cost <= userMaxBudget) {
            console.log(`Vuelo ${flight.id}: de ${flight.from} a ${flight.to} (${flight.cost}€).`)
        };
    });
    userBuyFlight();
};

function userBuyFlight() {
    let flightToBuy = prompt('Para comprar un pasaje de vuelo, introduce el ID del vuelo deseado, o bien "exit" para salir:');
    if (flightToBuy.toUpperCase() === "EXIT") {
        alert("Has salido del programa con éxito");
    } else {
        separation()
        console.log(`Has comprado un pasaje para el vuelo ${flightToBuy}.`)
        console.log("Gracias por tu compra, vuelve pronto.");
    };
};