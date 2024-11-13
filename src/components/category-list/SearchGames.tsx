import React, { useState } from "react";
import { Search } from "../assets/game-category";
import SearchMenu from "../assets/SearchMenu";
import { useRootContext } from "../../context/useRootContext";
import useFilter from "../../hooks/useFilter";
import debounce from "../../utils/debounce";
import Button from "../base/banner/button/Button";

const SearchGames = () => {
  const { dispatch } = useRootContext();
  const { handleSetFilter } = useFilter();

  const [isFocused, setIsFocused] = useState(false);

  const handleDebounce = debounce((...args: unknown[]) => {
    const e = args[0] as React.ChangeEvent<HTMLInputElement>;
    handleSetFilter({ search: e.target.value });
  }, 500);


  const styles : {[key:string] : React.CSSProperties}= {
    searchContainer: {
      display: "flex",
      gap: "0.75rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      position: "sticky",
      top: "98px",
      backgroundColor: "white",
    },
    searchWrapper: {
      display: "flex",
      gap: "0.25rem",
      paddingLeft: "0.75rem",
      height: "fit-content",
      border: "1px solid #6bcbff",
      borderRadius: "0.375rem",
      alignItems: "center",
      width:'100%'
    },
    searchIcon: {
      flex: "none",
      fontSize: "1.25rem",
      color: "var(--tertiary)",
    },
    searchInput: {
      width: "100%",
      height: "100%",
      flex: "1",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      borderRadius: "0 0.375rem 0.375rem 0",
      outline: "none",
      border: isFocused ? "1px solid var(--primary)" : "1px solid transparent",
      boxShadow: isFocused ? "0 0 0 2px var(--primary)" : "none",
      transition: "border-color 0.3s ease",
    },
    button: {
      flex: "none",
      border: "1px solid ",
      borderRadius: "0.375rem",
      padding: "0.25rem 0.75rem",
      backgroundColor: "transparent",
      cursor:'default'
    },
    searchMenuIcon: {
      fontSize: "1.25rem",
      color: "var(--tertiary)",
    },
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchWrapper}>
        <Search style={styles.searchIcon} />
        <input
          type="search"
          name="search"
          placeholder="Search games"
          style={styles.searchInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleDebounce}
        />
      </div>
      <Button
        size="xs"
        style={styles.button}
        onClick={() =>
          dispatch({ type: "SET_GAME_PROVIDER_MENU", payload: true })
        }
      >
        <SearchMenu style={styles.searchMenuIcon} />
      </Button>
    </div>
  );
};

export default SearchGames;
