import { RockPaperScissors } from "../models/RockPaperScissorsEnum";
import { RoundWinner } from "../models/RoundWinnerEnum";

export function getRoundWinner(
  playerChoice: RockPaperScissors,
  computerChoice: RockPaperScissors
): RoundWinner {
  if (playerChoice === computerChoice) {
    return RoundWinner.DRAW;
  }

  if (
    (playerChoice === RockPaperScissors.ROCK &&
      computerChoice === RockPaperScissors.SCISSORS) ||
    (playerChoice === RockPaperScissors.PAPER &&
      computerChoice === RockPaperScissors.ROCK) ||
    (playerChoice === RockPaperScissors.SCISSORS &&
      computerChoice === RockPaperScissors.PAPER)
  ) {
    return RoundWinner.PLAYER;
  }

  return RoundWinner.COMPUTER;
}
