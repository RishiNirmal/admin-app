import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './stylesheet/dasboardBlack.css'
import './stylesheet/swicther.scss'
import { keepTheme } from './components/theme';



function App() {
  // state
  const [colorTheme, setColorTheme] = useState('black');

  //effect
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // set theme 
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }

  return (
    <div id={`${colorTheme} `} style={{backgroundColor: colorTheme}}>
      <div className="theme-option" >
        <div id="black" 
        className={`clrbx ${ colorTheme === '#2c323c' ? 'active' : ''} `}
          onClick={() => handleClick('#2c323c')}
        />
        <div id="white" 
        className={`clrbx ${ colorTheme === 'white' ? 'active' : ''} `}
          onClick={() => handleClick('white')}
        />


      </div>
      
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
