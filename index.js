function getComputerChoice() {
  const choices = ["piedra", "papel", "tijera"];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    return "Es un empate!";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "tijera" && computerChoice === "papel") ||
    (playerChoice === "papel" && computerChoice === "piedra")
  ) {
    return "Tu ganas! " + playerChoice + " vence " + computerChoice;
  } else {
    return "Tu pierdes! " + computerChoice + " vence " + playerChoice;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection;

    // Utiliza un bucle while para validar la entrada del usuario.
    while (true) {
      playerSelection = prompt("Ingrese: piedra, papel o tijera");
      playerSelection = playerSelection.toLowerCase();

      if (
        playerSelection === "piedra" ||
        playerSelection === "papel" ||
        playerSelection === "tijera"
      ) {
        break; // Sal del bucle si la entrada es válida.
      } else {
        alert("Elección incorrecta. Por favor ingrese piedra, papel o tijera");
      }
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    // Actualiza las puntuaciones y las rondas jugadas según el resultado.
    if (result.includes("ganas")) {
      playerScore++;
    } else if (result.includes("pierdes")) {
      computerScore++;
    }

    roundsPlayed++;

    // Muestra el resultado de la ronda en la consola.
    console.log(`Rondas ${roundsPlayed}: ${result}`);
  }

  // Muestra el resultado final.
  if (playerScore > computerScore) {
    console.log("Tu ganas el juego!");
  } else if (computerScore > playerScore) {
    console.log("La computadora gana el juego!");
  } else {
    console.log("Es un empate!");
  }
}

game();
