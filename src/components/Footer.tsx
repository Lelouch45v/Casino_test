import React, { useCallback, useState } from "react";
import {
  CasinoLive,
  Favorite,
  Invite,
  Sports,
  Cashier,
} from "./assets/footer/";

const FOTTER_MENU = [
  {
    title: "SPORTS",
    Icon: Sports,
  },
  {
    title: "FAVORITES",
    Icon: Favorite,
  },
  {
    title: "INVITE",
    Icon: Invite,
  },
  {
    title: "CASINO LIVE",
    Icon: CasinoLive,
  },
  {
    title: "CASHIER",
    Icon: Cashier,
  },
];

const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("Sports");

  const isActiveTab = useCallback(
    (tabName: string): boolean => {
      return activeTab.toLocaleLowerCase() === tabName.toLocaleLowerCase();
    },
    [activeTab]
  );

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100%",
      minHeight: "60px",
      backgroundColor: "white",
      padding: "0 1rem",
      boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 10,
    },
    iconWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      flex: 1,  
    },
    icon: {
      transition: "color 0.3s ease",
      zIndex: 2,
    },
    iconActive: {
      color: "#ffffff",
    },
    iconInactive: {
      color: "#888888",
    },
    text: {
      fontSize: "0.875rem",
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "color 0.3s ease",
    },
    textActive: {
      color: "#1a73e8",
    },
    textInactive: {
      color: "#888888",
    },
    circle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",  
      height: "40px", 
      borderRadius: "50%",
      transition: "background-color 0.3s ease, border 0.3s ease",
    },
    circleActive: {
      backgroundImage: "url('/assets/footer/active-border.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      zIndex: 1, 
    },
  };

  return (
    <footer style={styles.footer}>
      {FOTTER_MENU.map(({ title, Icon }, index) => {
        const isActive = isActiveTab(title);

        return (
          <div
            key={index}
            onClick={() => setActiveTab(title)}
            style={styles.iconWrapper}
          >
            <div
              style={{
                ...styles.circle,
                ...(isActive ? styles.circleActive : {}),
              }}
            >
              <Icon
                className="h-6 w-6"
                style={{
                  ...styles.icon,
                  ...(isActive ? styles.iconActive : styles.iconInactive),
                }}
              />
            </div>
            <span
              style={{
                ...styles.text,
                ...(isActive ? styles.textActive : styles.textInactive),
              }}
            >
              {title}
            </span>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
