import { Dispatch } from "react";
import { Action } from "./rootReducer";

export type GameCategory =
  | "Bingo"
  | "Jackpots"
  | "Live"
  | "New"
  | "Others"
  | "Search"
  | "Slots"
  | "Start"
  | "Table Games";
  
export interface GameDataItem {
  id: string;
  name: string;
  providerID: string;
  category: GameCategory;
  banner: string; 
  isFavorite?: boolean; 
}
export interface GameData {
  [key: string]: {
    id: string;
    name: string;
    providerID: string;
    category: GameCategory;  
    banner: string;
  };
}


export interface GameProvider {
  id: string;
  logo: string;
  name: string;
}

export interface RootContextProps {
  gameProvider: {
    isFetching: boolean;
    data: GameProvider[];
    showMenu: boolean;
  };
  games: {
    isFetching: boolean;
    data: GameData;
  };
  
  filters: {
    category?: GameCategory;
    search?: string;
    showSearchField?: boolean;
    gameProviderID?: string[];
    isFetching?: boolean;
  };
}


export interface GameContextProps {
  state: RootContextProps | null;
  dispatch: Dispatch<Action>;
}
