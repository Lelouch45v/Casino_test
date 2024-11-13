import React, { useCallback, useEffect, useMemo } from "react";
import DUMMY_GAME_PROVIDERS from "./game-provider-list";
import { useRootContext } from "../../../context/useRootContext";
import useFilter from "../../../hooks/useFilter";
import { GameProvider } from "../../../context/interface";
import Button from "../../base/banner/button/Button";
import SvgWrapper from "../../base/wrapper/SvgWrapper";

const GameProviderList: React.FC = () => {
  const { state, dispatch } = useRootContext();
  const { handleSetFilter, filters } = useFilter();

  const isLoading = useMemo(() => state?.gameProvider?.isFetching, [state]);
  const providerList = useMemo(() => state?.gameProvider?.data, [state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_GAME_PROVIDER_LOADING", payload: true });
        const data: GameProvider[] = await new Promise((resolve) => {
          setTimeout(() => resolve(DUMMY_GAME_PROVIDERS), 3000);
        });
        dispatch({ type: "SET_GAME_PROVIDER", payload: data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSelectProvider = useCallback(
    (id: string) => {
      const newFilter = new Set(filters?.gameProviderID || []);
      newFilter.has(id) ? newFilter.delete(id) : newFilter.add(id);
      handleSetFilter({
        gameProviderID: newFilter.size ? Array.from(newFilter) : [],
      });
    },
    [handleSetFilter, filters]
  );

  const containerStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
    padding: '0.75rem',
    justifyItems: 'center',
    alignItems: 'center',
  }), []);

  const itemStyle = useMemo(() => ({
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    backgroundColor: '#F2F2FA',
    width: '100%',
  }), []);

  const loadingItemStyle = useMemo(() => ({
    ...itemStyle,
    backgroundColor: '#D1D5DB',
    animation: 'pulse 1.5s infinite',
  }), [itemStyle]);

  return (
    <div style={containerStyle}>
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div key={index} style={loadingItemStyle} />
        ))
      ) : (
        providerList?.map(({ name, id, logo }: GameProvider) => {
          const selected = filters?.gameProviderID?.includes(id);
          return (
            <Button
              key={id}
              size="xs"
              style={{
                ...itemStyle,
                border: selected ? '2px solid #3B82F6' : 'none',
              }}
              onClick={() => handleSelectProvider(id)}
            >
              <SvgWrapper
                src={logo}
                loading="lazy"
                alt={name || "game-provider"}
                style={{ borderRadius: '50%' }}
                width={100}
                height={20}
              />
            </Button>
          );
        })
      )}
    </div>
  );
};

export default GameProviderList;
