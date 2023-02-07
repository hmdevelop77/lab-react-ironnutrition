import React, { useState } from "react";
import { Input } from 'antd';
import "./addFoodForm.css"

function AddFoodForm(props){
const [name,setName]=useState("")
const [image,setImage]=useState("")
const [calories,setCalories]=useState(0)
const [servings,setServings]=useState(0)

function handleNameInput (event){
    setName(event.target.value)
}
function handleImageInput (event){
    setImage(event.target.value)
}
function handleCaloriesInput (event){
    setCalories(event.target.value)
}
function handleServingsInput (event){
    setServings(event.target.value)
}

function handleFormSubmit(event){
    event.preventDefault();
    const newFood = {
        name:name,
        image:image,
        calories:calories,
        servings:servings,
    };
    props.handleAddNewFood(newFood)
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
}

    return(
    
      <form onSubmit={handleFormSubmit} className="container" >
      
      <label htmlFor="name">Name</label>
      <Input onChange={handleNameInput} type="text"  value={name} />

      <label htmlFor="image">Image</label>
      <Input onChange={handleImageInput} text="text"  value={image} />

      <label htmlFor="calories">Calories</label>
      <Input onChange={handleCaloriesInput} type="number" min="0" max="10000"  value={calories} />

      <label htmlFor="servings">Servings</label>
      <Input onChange={handleServingsInput} type="number" min="0" max="100"  value={servings} />
  


      <button type="submit" >Add Food</button>
   
    </form>
)
}

export default AddFoodForm;