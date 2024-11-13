import React from "react";
import Main from "./slides/Main";
import SvgWrapper from "../wrapper/SvgWrapper";

const Banner = () => {
  const styles : { [key:string]: React.CSSProperties} ={
    banner: {
      display:'flex',
      flexDirection:'column',
      paddingLeft:'0.75rem',
      paddingRight:'0.75rem',
      paddingBottom:'0.5rem',
      paddingTop:'0.75rem'
    },
    notification: {
      display:'flex',
      alignItems:'center',
      gap:'0.5rem',
      fontSize:'0.875rem',
    }
  }
  return (
    <div style={styles.banner}>
      <Main />
      <p style={styles.notification}>
        <SvgWrapper alt="Notification" src="/assets/bell.svg" className="w-4 h-4" />
        <span className="line-clamp-1">¡FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </p>
    </div>
  );
};

export default Banner;
