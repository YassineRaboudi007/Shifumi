import { RoundWinner } from "../models/RoundWinnerEnum";

interface ScoreboardProps {
  userScore: number;
  computerScore: number;
  lastRoundWinner: RoundWinner;
}

const Scoreboard: React.FC<ScoreboardProps> = ({
  userScore,
  computerScore,
  lastRoundWinner,
}) => {
  return (
    <div className="flex justify-between h-[10vh] w-full">
      <div className="flex items-center md:px-10 py-5 w-fit h-fit rounded-sm px-0">
        <span className="text-3xl text-[#9DB2BF] px-5 py-2 font-bold">
          Player
        </span>
        <span className="text-4xl text-[#9DB2BF] px-5 py-2 font-bold">
          {userScore}
        </span>
      </div>
      <div className="md:flex items-center font-bold text-4xl hidden">
        {lastRoundWinner === RoundWinner.COMPUTER && (
          <p className="text-[#9DB2BF]">You Lost</p>
        )}
        {lastRoundWinner === RoundWinner.PLAYER && (
          <p className="text-[#9DB2BF]">You Won</p>
        )}
        {lastRoundWinner === RoundWinner.DRAW && (
          <p className="text-[#9DB2BF]">Draw</p>
        )}
        {lastRoundWinner === undefined && (
          <p className="text-[#9DB2BF]">Choose a card</p>
        )}
      </div>
      <div className="flex items-center md:px-10 py-5 w-fit h-fit rounded-sm px-0">
        <span className="text-4xl text-[#9DB2BF] px-5 py-2 font-bold">
          {computerScore}
        </span>
        <span className="text-3xl text-[#9DB2BF] px-5 py-2 font-bold">
          Computer
        </span>
      </div>
    </div>
  );
};

export default Scoreboard;
