import { RockPaperScissors } from "../models/RockPaperScissorsEnum";
import playerRock from "../assets/player-rock.png";
import playerSc from "../assets/player-sicoccrs.png";
import playerPaper from "../assets/player-paper.png";

import computerHand from "../assets/computer-hand.png";
import computerRock from "../assets/computer-rock.png";
import computerSicoccrs from "../assets/computer-sicoccrs.png";

export function getPlayerChoiceIcon(choice: RockPaperScissors | undefined) {
  const imageMap = new Map();
  imageMap.set(RockPaperScissors.PAPER, playerPaper);
  imageMap.set(RockPaperScissors.ROCK, playerRock);
  imageMap.set(RockPaperScissors.SCISSORS, playerSc);

  return imageMap.get(choice);
}

export function getComputerChoiceIcon(choice: RockPaperScissors | undefined) {
  const imageMap = new Map();
  imageMap.set(RockPaperScissors.PAPER, computerHand);
  imageMap.set(RockPaperScissors.ROCK, computerRock);
  imageMap.set(RockPaperScissors.SCISSORS, computerSicoccrs);

  return imageMap.get(choice);
}
