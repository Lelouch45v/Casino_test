import React, { useCallback, useMemo } from "react";
import { GameCategory } from "../../context/interface";
import useFilter from "../../hooks/useFilter";
import Button from "../base/banner/button/Button";

interface CustomCSSProperties extends React.CSSProperties {
  textDecorationThickness?: string | number;
  textDecorationOffset?: string | number;
}

interface CategoryItemProps {
  title: GameCategory;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { handleSetFilter, filters } = useFilter();
  const { title, Icon, isActive } = props;

  const isActiveTab = useMemo(() => {
    const result = filters?.category === title || isActive;
    return result;
  }, [filters?.category, title, isActive]);

  const textColor = useMemo(() => {
    const color = isActiveTab ? "#3498db" : "#888888";
    return color;
  }, [isActiveTab]);

  const handleSelectCategory = useCallback(() => {
    handleSetFilter(
      title === "Search"
        ? { showSearchField: !isActiveTab }
        : { category: title }
    );
  }, [handleSetFilter, title, isActiveTab]);

  const styles: { [key: string]: CustomCSSProperties } = {
    button: {
      display: "flex",
      flexDirection: "column",
      gap: "0",
      alignItems: "center",
      padding: "0",
      cursor: "pointer",
    },
    icon: {
      fontSize: "1.25rem", 
      color: textColor,
    },
    text: {
      display: "flex",
      flex: "1",
      fontSize: "0.875rem", 
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: textColor,
      textDecoration: isActiveTab ? "underline" : "none",
      textDecorationThickness: "1.5px", 
      textDecorationOffset: "2px", 
      textDecorationColor: isActiveTab ? "#3498db" : "transparent", 
    },
  };


  return (
    <Button style={styles.button} onClick={handleSelectCategory}>
      <Icon style={styles.icon} />
      <span style={styles.text}>{title}</span>
    </Button>
  );
};

export default CategoryItem;
