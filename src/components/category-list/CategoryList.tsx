import React, { useMemo } from "react";
import CATEGORY_LIST from "./categories";
import CategoryItem from "./CategoryItem";
import { Search } from "../assets/game-category";
import SearchGames from "./SearchGames";
import useFilter from "../../hooks/useFilter";

const CategoryList = () => {
  const { filters } = useFilter();

  const isSearchTabActive = useMemo(() => {
    return filters?.showSearchField;
  }, [filters?.showSearchField]);
  

  const styles: { [key: string]: React.CSSProperties | any } = {
    container: {
      height:'auto',
      backgroundColor: 'white',
      paddingLeft: '0.5rem',
      position: 'sticky',
      top: '50px',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    categorySeparator: {
      width: '1px',
      height: '30px',
      backgroundColor: '#88888880',
    },
    categoryItems: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollSnapAlign: 'start',
      scrollbarWidth: 'none',
      '-ms-overflow-style': 'none',
    },
  };

  return (
    <>
      <div style={styles.container}>
      <CategoryItem title="Search" Icon={Search} isActive={isSearchTabActive} />
      <div style={styles.categorySeparator} />
      <div style={styles.categoryItems}>
        {CATEGORY_LIST.map(({ title, Icon }, index) => (
          <CategoryItem key={index} title={title} Icon={Icon} />
        ))}
      </div>
    </div>
    {isSearchTabActive ? <SearchGames /> : null}
    </>
  );
};

export default CategoryList;
