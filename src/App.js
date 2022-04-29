import Reaact from 'react';
import styles from './App.module.css';
import Header from './components/Layout/Headers/Header';
import DisplaySection from './components/Layout/DisplaySection/Display';
import MealSection from './components/Layout/Meals/Meals';
function App() {
  return (
    <Reaact.Fragment>
      <Header></Header>
      <DisplaySection></DisplaySection>
      <MealSection></MealSection>
    </Reaact.Fragment>
  );
}

export default App;
