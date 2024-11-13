import {
  GameData,
  GameDataItem,
  GameProvider,
  RootContextProps,
} from "./interface";

export type Action =
  | { type: "SET_GAME_PROVIDER_LOADING"; payload: boolean }
  | { type: "SET_GAME_PROVIDER"; payload: GameProvider[] }
  | { type: "SET_GAME_PROVIDER_MENU"; payload: boolean }
  | { type: "SET_GAME_LIST_LOADING"; payload: boolean }
  | { type: "SET_GAME_LIST"; payload: GameData }
  | { type: "SET_FILTER_LOADING"; payload: boolean }
  | { type: "SET_FILTER"; payload: Partial<RootContextProps["filters"]> }
  | {
      type: "UPDATE_GAME_DATA";
      payload: Partial<GameDataItem> & { id: string };
    };

const setFetchingState = (
  state: RootContextProps,
  key: keyof RootContextProps,
  isFetching: boolean
): RootContextProps => ({
  ...state,
  [key]: {
    ...state[key],
    ...(state?.gameProvider?.data?.length === 0 && { isFetching }),
  },
});

const setDataState = (
  state: RootContextProps,
  key: keyof RootContextProps,
  data: Partial<RootContextProps[keyof RootContextProps]>
): RootContextProps => ({
  ...state,
  [key]: {
    ...state[key],
    isFetching: false,
    ...data,
  },
});

const updateGameData = (
  state: RootContextProps,
  payload: Partial<GameDataItem> & { id: string }
): RootContextProps => {
  const updatedGames = { ...state?.games?.data };
  updatedGames[payload?.id] = {
    ...updatedGames?.[payload?.id],
    ...payload,
  };

  return {
    ...state,
    games: {
      ...state.games,
      data: updatedGames,
    },
  };
};

export const rootReducer = (
  state: RootContextProps,
  action: Action
): RootContextProps => {
  const { type, payload } = action;

  switch (type) {
    case "SET_GAME_PROVIDER_LOADING":
      return setFetchingState(state, "gameProvider", payload);
    case "SET_GAME_PROVIDER":
      return setDataState(state, "gameProvider", { data: payload });
    case "SET_GAME_PROVIDER_MENU":
      return setDataState(state, "gameProvider", { showMenu: payload });
    case "SET_GAME_LIST_LOADING":
      return setFetchingState(state, "games", payload);
    case "SET_GAME_LIST":
      return setDataState(state, "games", { data: payload });
    case "SET_FILTER_LOADING":
      return setFetchingState(state, "filters", payload);
    case "SET_FILTER":
      return setDataState(state, "filters", payload);
    case "UPDATE_GAME_DATA":
      return updateGameData(state, payload);
    default:
      return state;
  }
};
