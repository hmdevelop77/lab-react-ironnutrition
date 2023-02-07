import './App.css';
import React, { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/es/transfer/search';


// function handleAddNewFood(newMovie){
//   setMovies([newFood,...foods]);
 
//   setFilteredMovies([newFood, ...foods])

// }



function App() {
  const [foodsList, setFoodsList] = useState(foods);

  function handleAddNewFood(newFood) {
    setFoodsList((previousFood) => {
      const newFoodList = [newFood, ...previousFood];
      return newFoodList;
    });
  }

  function handleSearch(keyword){
    const filteredFood=foods.filter((food)=>{
        return food.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
    })
    setFoodsList(filteredFood);
    }

  return (
    <div className="App">
    <Search handleSearch={handleSearch} />
    <AddFoodForm handleAddNewFood={handleAddNewFood}></AddFoodForm>
      {foodsList.map((food) => {
        return (
          <div>
            <FoodBox food={food} key={food.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
