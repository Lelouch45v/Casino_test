"use client";

import { useContext } from "react";
import { GameContextProps } from "./interface";
import { RootContext } from "./ContextProvider";

export const useRootContext = (): GameContextProps => {
  const { state, dispatch } = useContext(RootContext);
  if (!state) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return {
    state,
    dispatch,
  };
};
