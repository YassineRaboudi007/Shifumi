import { useEffect, useState } from "react";

import chooseRock from "./assets/stone.png";
import chooseSci from "./assets/scissors.png";
import choosePaper from "./assets/file.png";
import "./App.css";
import ItemSelector from "./components/ChoiceButton";
import Scoreboard from "./components/Scoreboard";
import {
  getComputerChoiceIcon,
  getPlayerChoiceIcon,
} from "./utils/ImageGetters";
import { RockPaperScissors } from "./models/RockPaperScissorsEnum";
import computerRock from "./assets/computer-rock.png";
import playerRock from "./assets/player-rock.png";
import { getRoundWinner } from "./services/RockPaperScisors";
import SelectedItem from "./components/SelectedItem";
import { RoundWinner } from "./models/RoundWinnerEnum";

function App() {
  const [playerSelectedItem, setPlayerSelectedItem] =
    useState<RockPaperScissors>();
  const [computerSelectedItem, setComputerSelectedItem] =
    useState<RockPaperScissors>();
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [imgToShow, setImgToShow] = useState<string>(playerRock);
  const [computerimgToShow, setComputerImgToShow] =
    useState<string>(computerRock);
  const [lastRoundWinner, setLastRoundWinner] = useState<RoundWinner>(
    RoundWinner.DRAW
  );
  const [toggleState, setToggleState] = useState<boolean>(false);

  useEffect(() => {
    if (playerSelectedItem == undefined) return;
    const random = Math.floor(Math.random() * 3) + 1;
    setComputerSelectedItem(random);

    const timeout = setTimeout(() => {
      UpdateScore(random);
    }, 550);

    return () => clearTimeout(timeout);
  }, [playerSelectedItem, toggleState]);

  const UpdateScore = (random: number) => {
    if (playerSelectedItem === undefined || random === undefined) return;
    const winner: RoundWinner = getRoundWinner(playerSelectedItem, random);
    setLastRoundWinner(winner);
    if (winner === RoundWinner.PLAYER) setPlayerScore(playerScore + 1);
    else if (winner === RoundWinner.COMPUTER)
      setComputerScore(computerScore + 1);
  };

  useEffect(() => {
    setImgToShow(getPlayerChoiceIcon(playerSelectedItem));
  }, [playerSelectedItem]);

  useEffect(() => {
    setComputerImgToShow(() => getComputerChoiceIcon(computerSelectedItem));
  }, [computerSelectedItem]);

  const selectRock = () => {
    setPlayerSelectedItem(() => RockPaperScissors.ROCK);
    setToggleState((prev) => !prev);
  };

  const selectPaper = () => {
    setPlayerSelectedItem(() => RockPaperScissors.PAPER);
    setToggleState((prev) => !prev);
  };

  const selectSciccors = () => {
    setPlayerSelectedItem(() => RockPaperScissors.SCISSORS);
    setToggleState((prev) => !prev);
  };

  const getBackgroundShadowEffectColor = () => {
    if (lastRoundWinner === RoundWinner.COMPUTER) return "red";
    else if (lastRoundWinner === RoundWinner.PLAYER) return "green";
    else return "black";
  };

  return (
    <div>
      <div
        className="flex flex-col justify-around back bg-[#112d4e]"
        style={{
          height: "98vh",
          width: "99vw",
          boxShadow: `0 0 100rem ${getBackgroundShadowEffectColor()}`,
          transition: "box-shadow 0.5s ease-in-out",
        }}
      >
        <Scoreboard
          userScore={playerScore}
          computerScore={computerScore}
          lastRoundWinner={lastRoundWinner}
        />
        <div className="md:flex block justify-around">
          <SelectedItem imgToShow={imgToShow} />
          <SelectedItem imgToShow={computerimgToShow} />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-around md:w-1/3 w-full md:items-center">
            <ItemSelector img={chooseRock} selectCallback={selectRock} />
            <ItemSelector img={chooseSci} selectCallback={selectSciccors} />
            <ItemSelector img={choosePaper} selectCallback={selectPaper} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
