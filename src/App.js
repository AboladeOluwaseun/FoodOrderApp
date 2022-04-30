import Reaact from 'react';
import styles from './App.module.css';
import Header from './components/Layout/Headers/Header';
import DisplaySection from './components/Layout/DisplaySection/Display';
import MealSection from './components/Layout/Meals/Meals';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <Reaact.Fragment>
      <Header></Header>
      <DisplaySection></DisplaySection>
      <MealSection></MealSection>
      <Footer></Footer>
    </Reaact.Fragment>
  );
}

export default App;
