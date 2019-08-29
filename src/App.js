import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header/Header';
import {ShopPage} from "./Components/ShopPage";
import {Footer} from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <ShopPage />
        <Footer />
    </div>
  );
}

export default App;
