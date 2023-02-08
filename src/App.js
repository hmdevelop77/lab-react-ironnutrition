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
  const [filteredFoodsList, setfilteredFoodsList] = useState(foods);

  function handleAddNewFood(newFood) {
    setFoodsList((previousFood) => {
      const newFoodList = [newFood, ...previousFood];
      return newFoodList;
    });
  }

  function handleSearch(keyword){
    const filteredFood=foodsList.filter((food)=>{
        return food.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
    })
    setfilteredFoodsList(filteredFood);
    }

    function handleDeleteFood(foodName) {
      const updatedFoodsList = filteredFoodsList.filter((food) => {
        return food.name !== foodName;
      });
      setfilteredFoodsList(updatedFoodsList);
    }



  return (
    <div className="App">
    <Search handleSearch={handleSearch} />
    <AddFoodForm handleAddNewFood={handleAddNewFood}></AddFoodForm>
      {filteredFoodsList.map((food) => {
        return (
          <div>
            <FoodBox food={food} key={food.name} handleDeleteFood={handleDeleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
