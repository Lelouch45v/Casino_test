import React, { useMemo } from "react";
import GameProviderHeader from "./Header";
import GameProviderList from "./GameProviderList";
import { useRootContext } from "../../../context/useRootContext";

const GameProviderMenu = () => {
  const { state } = useRootContext();

  const showGameProviderMenu = useMemo(() => {
    return state?.gameProvider?.showMenu;
  }, [state?.gameProvider?.showMenu]);

  const style : {[key:string] : React.CSSProperties } = {
    GameMenuProvider: {
      width: '100vw',
      position: 'fixed', 
      top: '0',
      left: '0', 
      overflowY: 'auto',
      overflowX: 'hidden', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      transition: 'all 100ms ease-in', 
      height: showGameProviderMenu ? '100vh' : '0', 
      opacity: showGameProviderMenu ? 1 : 0,
    },
    menuContainer: {
      position: 'relative',
      width: '100%', 
      minHeight: 'calc(100vh - 144px)', 
      backgroundColor: 'white', 
      marginTop: '9rem', 
      paddingBottom: '1.25rem', 
      transition: 'all 300ms ease-in-out', 
      transform: showGameProviderMenu ? 'translateY(0)' : 'translateY(100%)', 
    },
  };

  return (
    <>
      <div style={style.GameMenuProvider}>
        <div style={style.menuContainer}>
          <GameProviderHeader />
          {showGameProviderMenu ? <GameProviderList /> : null}
        </div>
      </div>
    </>
  );
};

export default GameProviderMenu;
