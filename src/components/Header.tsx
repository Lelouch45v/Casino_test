import React from "react";
import Button from "./base/banner/button/Button";
import SvgWrapper from "./base/wrapper/SvgWrapper";

const balance = 55_990.6;

const Header: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      display: 'flex',
      justifyContent: 'space-between'  ,
      padding: '0 1.5rem', 
      height: '50px',
      width: '100%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      backgroundColor: 'white',
      position: "fixed",
      top: '0',
      left:'0',
      zIndex: 10,
    },
    leftSide: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent:'flex-start',
      gap: '0.25rem', 
    },
    rightSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end', 
      paddingRight:'4.375rem'
    },
    wallet: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem', 
    },
    walletText: {
      fontSize: '1.125rem', 
      color: '#1a73e8', 
      maxWidth: 'calc(100% - 40px)',
    },
    icon: {
      height: '20px',
      width: 'auto',
    },
    button: {
      backgroundColor: 'transparent', 
      border: 'none',
      padding: '0', 
      cursor: 'pointer', 
      display: 'inline-flex',
      alignItems: 'center', 
      justifyContent: 'center', 
    },
  };

  return (
    <div style={styles.header}>
      {/* Left side: Menu and Logo */}
      <div style={styles.leftSide}>
        <Button style={styles.button}>
          <SvgWrapper alt="Menu" src="/assets/header/menu.svg" style={styles.icon} />
        </Button>
        <SvgWrapper alt="Fun88" src="/assets/header/fun88.svg" style={{ height: '24px', width: 'auto' }} />
      </div>

      {/* Right side: Wallet balance and Account */}
      <div style={styles.rightSide}>
        {/* Wallet Balance */}
        <div style={styles.wallet}>
          <SvgWrapper
            alt="Wallet"
            src="/assets/header/wallet.svg"
            style={styles.icon}
          />
          <b style={styles.walletText}>
            ${String(balance).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </b>
          <SvgWrapper
            alt="Divider"
            src="/assets/header/divider.svg"
            style={{ height: '34px', width: 'auto' }}  
          />
        </div>

        {/* Account Button */}
        <Button style={styles.button}>
          <SvgWrapper alt="Account" src="/assets/header/user.svg" style={{ height: '24px', width: '24px' }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
