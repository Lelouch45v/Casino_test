import React, { useMemo } from "react";
import { useRootContext } from "../../../context/useRootContext";
import SearchMenu from "../../assets/SearchMenu";
import Button from "../../base/banner/button/Button";
import SvgWrapper from "../../base/wrapper/SvgWrapper";

const GameProviderHeader: React.FC = () => {
  const { state, dispatch } = useRootContext();

  const providerCount = useMemo(
    (): number => state?.gameProvider?.data?.length ?? 0,
    [state?.gameProvider?.data]
  );

  const isFetching = useMemo(
    (): boolean => state?.gameProvider?.isFetching ?? false,
    [state?.gameProvider?.isFetching]
  );

  const styles: { [key: string]: React.CSSProperties | any } = {
    container: {
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#3B82F6", 
      position: "sticky",
      top: "0",
      color: "white",
    },
    text: {
      fontSize: "1rem", 
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    counter: {
      paddingLeft: "0.75rem", 
      paddingRight: "0.75rem", 
      paddingTop: "auto", 
      paddingBottom: "auto", 
      borderRadius: "9999px", 
      fontSize: "0.875rem", 
      border: "1px solid white",
      color: "white",
    },
    loading: {
      height: "1.25rem", 
      width: "2rem", 
      paddingTop: "auto", 
      paddingBottom: "auto", 
      borderRadius: "9999px", 
      backgroundColor: "#D1D5DB", 
      animation: "pulse 1.5s infinite", 
    },
    button: {
      padding: "0.5rem",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s", 
    },
    buttonHover: {
      backgroundColor: "#6bcbff", 
      transform: "scale(1.1)", 
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <SearchMenu className="size-6" />
        <span>Game Provider</span>
        {isFetching ? (
          <span style={styles.loading} />
        ) : (
          <span style={styles.counter}>
            {providerCount}
          </span>
        )}
      </div>
      <Button
        size="xs"
        onClick={() =>
          dispatch({ type: "SET_GAME_PROVIDER_MENU", payload: false })
        }
        style={styles.button}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor;
          e.currentTarget.style.transform = styles.buttonHover.transform;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "";
          e.currentTarget.style.transform = "";
        }}
      >
        <SvgWrapper alt="Close" src="/assets/close.svg" className="size-4" />
      </Button>

      <h1>hello</h1>
    </div>
  );
};

export default GameProviderHeader;
