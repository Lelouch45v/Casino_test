import React from 'react';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from './components/base/banner/Banner.tsx';
import Categorylist from './components/category-list/CategoryList.tsx'
import Gamelist from './components/games/GameList.tsx'
import GameProviderMenu from './components/category-list/GameProviderMenu/GameProviderMenu.tsx'
import { ContextProvider } from './context/ContextProvider.tsx';

const App = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'var(--font-geist-sans)',
      boxSizing: 'border-box',
    },
    bannerDiv: {
      display: 'flex',
      width: '90%',
      flexDirection: 'column',
      flex: 1,
      paddingTop: '3rem',
      boxSizing: 'border-box',
    },
  };
  

  return (
    <ContextProvider>
      <div style={styles.container}>
        <div style={styles.bannerDiv}>
          <Header />
          <Banner />
          <Categorylist />
          <Gamelist />
        </div>
        <Footer />
        <GameProviderMenu />
      </div>
    </ContextProvider>

  );
};

export default App;
