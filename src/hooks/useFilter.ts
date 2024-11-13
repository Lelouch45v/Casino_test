import { GameData, GameDataItem, RootContextProps } from "../context/interface";
import { useRootContext } from "../context/useRootContext";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Check if any of the keys are fetching
 * @param {string[]} keys
 * @returns {boolean} isLoading
 */
const isLoading = (
  keys: (keyof RootContextProps)[],
  state: RootContextProps | null
): boolean => {
  if (!state) return false;

  return keys?.some((key) => state?.[key]?.isFetching);
};

const gamesFilter = (
  game: GameDataItem,
  filters: RootContextProps["filters"]
) => {
  if (!filters) return true;

  const { search, category, gameProviderID } = filters;

  // Filter by search keyword
  if (search) {
    const isSearchMatch = game?.name
      ?.toLocaleLowerCase()
      ?.search(search?.toLocaleLowerCase());
    if (isSearchMatch === -1) return false;
  }

  // Filter by category
  if (category && !["Start", "Search"].includes(category)) {
    if (game?.category !== category) return false;
  }

  // Filter by game provider
  if (gameProviderID?.length && !gameProviderID?.includes(game.providerID))
    return false;
  return true;
};

/**
 * Filter games based on search keyword, category, and game provider
 * @returns {GameData} filteredGames
 */
const handleFilterGames = (
  games: GameData,
  filters: RootContextProps["filters"] | undefined
) => {
  if (games && !Object.values(games)?.length) return [];

  return Object.values(games ?? {})?.filter((game) =>
    gamesFilter(game, filters ?? {})
  );
};

const useFilter = () => {
  const { state, dispatch } = useRootContext();
  const [filteredGames, setFilteredGames] = useState<Partial<GameDataItem>[]>(
    []
  );

  const filters = useMemo(() => state?.filters, [state?.filters]);

  useEffect(() => {
    // Dummy data
    if (filters && isLoading(["games"], state))
      setFilteredGames(
        [...Array(6)].map(() => ({
          isLoading: true,
          id: Math.random().toLocaleString(),
        }))
      );

    if (state?.games?.data && Object.keys(state?.games?.data)?.length)
      setFilteredGames(handleFilterGames(state?.games?.data, state?.filters));
  }, [state, filters]);

  const handleSetFilter = useCallback(
    (payload: RootContextProps["filters"]) => {
      dispatch({
        type: "SET_FILTER",
        payload,
      });
    },
    [dispatch]
  );

  return { filteredGames, isLoading, handleSetFilter, filters };
};
export default useFilter;
