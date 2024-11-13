import React, { useState, useEffect } from "react";

// Array of image URLs for the carousel
const carouselImages: string[] = [
  "/images/banner-bg.png",
  "/images/inca-jackpot.png",
  "/images/sugar-rush.png",
  "/images/banner-bg.png",
];

const Main: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Inline styles
  const styles : {[key:string] :React.CSSProperties}= {
    mainContainer: {
      width: "100%",
      height: "11.25rem",
      borderRadius: "10px",
      backgroundImage: `url(${carouselImages[currentImageIndex]})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "background-image 0.3s ease-in-out",
      position: "relative",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      justifyItems:'flex-start',
      width: "100%",
      height: "100%",
      textAlign: "center",
      padding: "20px",
    },
    text: {
      fontSize: "1rem",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    rescue: {
      fontSize: "clamp(1.5rem, 5vw, 2.5rem)", 
    },
    bonus: {
      color: "#FF6347", // Secondary color
      fontSize: "clamp(1.25rem, 4vw, 2rem)", 
    },
    description: {
      fontSize: "clamp(0.875rem, 3vw, 1.5rem)", 
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.textContainer}>
        <b style={{ ...styles.text, ...styles.rescue }}>RESCUE</b>
        <b style={{ ...styles.text, ...styles.bonus }}>BONUS</b>
        <b style={{ ...styles.text, ...styles.description }}>WE ARE HERE FOR YOU</b>
      </div>
    </div>
  );
};

export default Main;
