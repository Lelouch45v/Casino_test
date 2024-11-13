import React, { useCallback } from "react";
import SvgWrapper from "../base/wrapper/SvgWrapper";
import { Favorite } from "../assets/footer";
import NonFavorite from "../assets/NonFavorite";
import { useRootContext } from "../../context/useRootContext";
import { GameDataItem } from "../../context/interface";
import Button from "../base/banner/button/Button";

const GameItem = (props: Partial<GameDataItem & { isLoading?: boolean }>) => {
  const { dispatch } = useRootContext();
  const {
    id = "",
    name = "",
    banner = "",
    isLoading = false,
    isFavorite = false,
  } = props;

  const handleAddFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch({ type: "UPDATE_GAME_DATA", payload: { id, isFavorite: !isFavorite } });
    },
    [id, isFavorite, dispatch]
  );

  // Inline styles object
  const styles: { [key: string]: React.CSSProperties  | any} = {
    gameItem: {
      display: 'grid',
      width: '100%',
      height: 'auto',
      aspectRatio: '1 / 1',
      borderRadius: '0.375rem', 
      overflow: 'hidden',
      backgroundColor: '#e5e7eb', 
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      paddingBottom: '0',
    },
    gameItemLoading: {
      animation: 'pulse 1.5s infinite', 
    },
    gameItemImage: {
      gridColumnStart: 1,
      gridRowStart: 1,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${banner})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    gameItemOverlay: {
      gridColumnStart: 1,
      gridRowStart: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
    favoriteButton: {
      paddingTop: '0.5rem',
      paddingRight: '0.5rem',
      marginRight: '-0.5px',
      backgroundImage: "url('/assets/favorite-mask.svg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    favoriteIcon: {
      width: '12px',
      height: '12px',
      color: '#F59E0B', 
    },
    nonFavoriteIcon: {
      width: '16px',
      height: '16px',
    },
  };

  return (
    <div style={styles.gameItem} className={isLoading ? "animate-pulse" : ""}>
      {isLoading ? null : (
        <>
          <SvgWrapper
            width={512}
            height={512}
            src={banner}
            alt={name}
            loading="lazy"
            style={styles.gameItemImage}
          />

          <div style={styles.gameItemOverlay}>
            <Button
              size="fit"
              rounded="none"
              style={styles.favoriteButton}
              onClick={handleAddFavorite}
            >
              {isFavorite ? (
                <Favorite style={styles.favoriteIcon} />
              ) : (
                <NonFavorite style={styles.nonFavoriteIcon} />
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameItem;
