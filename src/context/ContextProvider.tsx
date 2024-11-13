"use client";

import { createContext, ReactNode, useReducer } from "react";
import { Action, rootReducer } from "./rootReducer";
import { GameContextProps, RootContextProps } from "./interface";

export const initialState: RootContextProps = {
  gameProvider: {
    isFetching: false,
    data: [],
    showMenu: false,
  },
  games: {
    isFetching: false,
    data: {},
  },
  filters: {
    category: "Start", 
    search: "",
    gameProviderID: [],
    isFetching: false,
  },
};

export const RootContext = createContext<GameContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<RootContextProps, Action>>(
    rootReducer,
    initialState
  );

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
