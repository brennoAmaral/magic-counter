import type {  FC, ReactNode } from "react";
import  { useState, createContext } from "react";

interface GameSetupDataStructure {
  initialLife: number;
  numberPlayers: number;
  positionPlayers: string | "default" | "twoPlayers" | "twoPlayersLeteral" | "fourPlayers" | "fourPlayersLateral";
  setInitialLife: (value: number) => void;
  setNumberPlayers: (value: number) => void;
  setPositionPlayers: (value: string) => void;
}

interface GameSetupProps {
  children: ReactNode;
}

const initialGameSetup = {
  initialLife: 0,
  numberPlayers: 0,
  positionPlayers: '',
  setInitialLife: () => undefined,
  setNumberPlayers: () => undefined,
  setPositionPlayers: () => undefined,
};

export const GameSetupContext = createContext<GameSetupDataStructure>(initialGameSetup);

const GameSetup: FC<GameSetupProps> = (props) => {
  const { children } = props;
  const [initialLife, setInitialLife] = useState<number>(initialGameSetup.initialLife);
  const [numberPlayers, setNumberPlayers] = useState<number>(initialGameSetup.numberPlayers);
  const [positionPlayers, setPositionPlayers] = useState<string>(initialGameSetup.positionPlayers);

  return(
    <GameSetupContext.Provider value={{initialLife, setInitialLife, numberPlayers, setNumberPlayers, positionPlayers, setPositionPlayers}}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetup
