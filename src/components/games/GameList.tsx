import React, { useEffect, useMemo } from "react";
import GameItem from "./GameItem";
import { DUMMY_GAME_LIST } from "./game-list";
import { useRootContext } from "../../context/useRootContext";
import useFilter from "../../hooks/useFilter";
import { GameData, GameDataItem } from "../../context/interface";

const GameList = () => {
  const { dispatch, state } = useRootContext();
  const { filteredGames } = useFilter();

  const style: {[key: string]: React.CSSProperties} = {
    textNogames: {
      width: "100%",
      padding: "1.25rem",
      textAlign: "center",
      color: "#6b7280",
    },
    gamelistGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      gap: "0.75rem",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_GAME_LIST_LOADING", payload: true });

        const data: GameData = await new Promise((resolve) => {
          setTimeout(() => resolve(DUMMY_GAME_LIST), 3000);
        });
        dispatch({ type: "SET_GAME_LIST", payload: data });
      } catch (error) {
        console.error("Failed to fetch games:", error);
        dispatch({ type: "SET_GAME_LIST_LOADING", payload: false });
      }
    };
    fetchData();
  }, [dispatch]);

  const isEmptyGames = useMemo(() => {
    const result = Object.keys(state?.games?.data ?? {}).length === 0;
    return result;
  }, [state?.games?.data]);

  if (!filteredGames?.length) {
    return (
      <p style={style.textNogames}>
        {isEmptyGames ? "No games available" : "No games found"}
      </p>
    );
  }
  return (
    <div style={style.gamelistGrid}>
      {filteredGames?.map(
        (
          gameData: Partial<GameDataItem & { isLoading?: boolean }>,
          index: number
        ) => {
          const keyName = (gameData?.id ?? "") + index;
          return <GameItem key={keyName} {...gameData} />;
        }
      )}
    </div>
  );
};

export default GameList;
