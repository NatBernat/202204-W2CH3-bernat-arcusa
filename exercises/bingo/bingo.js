function bingo() {
  let card = [];
  let balls = [];
  let line = false;

  welcome();
  gameCore();

  function welcome() {
    userName = prompt("¿Cómo te llamas?");
    if (userName !== null) {
      userName = userName.replace(/\s/g, "");
    }
    if (userName === null || userName === "") {
      alert("¡Bienvenido/a!");
    } else {
      alert(`¡Bienvenido/a ${userName}!`);
    }
  }

  function gameCore() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        card.push({ number: 0, matched: false });
      }
    }
    scoreRanking();
    mainRanking();
    do {
      newCard();
    } while (!chooseCard());
    newRound();
  }

  function scoreRanking(rounds) {
    let score;
    if (rounds <= 20) {
      score = 1000;
    } else if (rounds <= 30) {
      score = 800;
    } else if (rounds <= 40) {
      score = 600;
    } else if (rounds <= 50) {
      score = 400;
    } else if (rounds <= 60) {
      score = 200;
    } else if (rounds <= 70) {
      score = 100;
    }
    return score;
  }

  function mainRanking() {
    let ranking = [
      { name: "Satoru Iwata", points: 1000 },
      { name: "Shigeru Miyamoto", points: 900 },
      { name: "Hironobu Sakaguchi", points: 800 },
      { name: "Notch", points: 600 },
      { name: "Hideo Kojima", points: 400 },
      { name: "Yūji Horii", points: 200 },
    ];
    console.table(ranking);
  }

  function newCard() {
    let randomNumber = randomNumberGenerator();
    for (let i = 0; i < card.length; i++) {
      do {
        randomNumber = randomNumberGenerator();
      } while (checkRepeatedNumbers(randomNumber));
      card[i].number = randomNumber;
    }
    printCard();
  }

  function chooseCard() {
    let start = confirm("¿Quieres jugar con este cartón?");
    return start;
  }

  function newRound() {
    do {
      if (askContinue() && !getBingo()) {
        let ball = newBingoBall();
        for (let i = 0; i < card.length; i++) {
          if (ball === card[i].number) {
            card[i].matched = true;
            if (!line && getLine()) {
              alert(
                "¡Tienes el número " + ball + ", has completado una linea!"
              );
              line = true;
            } else {
              alert("¡Tienes el número " + ball + "!");
            }
            printCard();
          }
        }
      } else {
        alert("El juego ha terminado.");
      }
    } while (!getBingo());
    alert(
      "¡Bingo!\nHas requerido " +
        balls.length +
        " rondas y has conseguido una puntuación de " +
        scoreCount(balls.length) +
        "."
    );
    mainRanking();

    if (confirm("¿Quieres jugar otra vez?")) {
      gameCore();
    } else {
      alert("El juego ha terminado.");
    }
  }

  function scoreCount(turns) {
    let points;
    if (turns <= 15) {
      points = 1000;
    } else if (turns <= 30) {
      points = 800;
    } else if (turns <= 45) {
      points = 600;
    } else if (turns <= 60) {
      points = 400;
    } else if (turns <= 75) {
      points = 200;
    } else if (turns <= 90) {
      points = 100;
    } else if (turns > 90) {
      points = 0;
    }
    return points;
  }

  function newBingoBall() {
    let newBall;
    do {
      newBall = randomNumberGenerator();
    } while (balls.includes(newBall));
    alert("El siguiente número es... el " + newBall + "!");
    balls.push(newBall);
    return newBall;
  }

  function checkRepeatedNumbers(number) {
    for (let i = 0; i < card.length; i++) {
      if (number === card[i].number) {
        return true;
      }
    }
    return false;
  }

  function printCard() {
    let printedCard = new Array(3);
    printedCard[0] = new Array(5);
    printedCard[1] = new Array(5);
    printedCard[2] = new Array(5);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        if (card[i * 5 + j].matched === true) {
          printedCard[i][j] = "X";
        } else {
          printedCard[i][j] = card[i * 5 + j].number;
        }
      }
    }
    console.table(printedCard);
  }

  function askContinue() {
    let continuation = confirm("¿Quieres seguir jugando?");
    if (continuation === true) {
      return true;
    } else {
      return false;
    }
  }

  function randomNumberGenerator() {
    return Math.floor(Math.random() * (99 - 1)) + 1;
  }

  function getLine() {
    if (
      (card[0].matched &&
        card[1].matched &&
        card[2].matched &&
        card[3].matched &&
        card[4].matched) ||
      (card[5].matched &&
        card[6].matched &&
        card[7].matched &&
        card[8].matched &&
        card[9].matched) ||
      (card[10].matched &&
        card[11].matched &&
        card[12].matched &&
        card[13].matched &&
        card[14].matched)
    ) {
      return true;
    }
    return false;
  }

  function getBingo() {
    for (let i = 0; i < card.length; i++) {
      if (!card[i].matched) return false;
    }
    return true;
  }
}

bingo();
