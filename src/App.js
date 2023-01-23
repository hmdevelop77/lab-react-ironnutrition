import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
function App() {
  return (
    <div className="App">
      {foods.map((food) => {
        return (
          <div>
            <FoodBox food={food} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
