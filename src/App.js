import React from 'react';
import styles from './App.module.css';
import Header from './components/Layout/Headers/Header';
import DisplaySection from './components/Layout/DisplaySection/Display';
import MealSection from './components/Layout/Meals/Meals';
import Footer from './components/Layout/Footer/Footer';
import CartProvider from './Store/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Header></Header>
      <DisplaySection></DisplaySection>
      <MealSection></MealSection>
      <Footer></Footer>
    </CartProvider>
  );
};

export default App;
