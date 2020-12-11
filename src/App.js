import React from "react";
import "./styles.css";
import { useState } from "react";

const foodList = {
  INDIA: [
    { name: "Idli ", with: " & Sambar 😋" },
    { name: "Biriyani", with: " &  Raita 😍" },
    { name: "Butter Chicken", with: " & Butter  Naan 😏" },
    { name: "Vada Pau", with: " & Chai 🙂" }
  ],
  LosAngles: [
    { name: "French Dip Sandwich ", with: " & Martini 🙄" },
    { name: "Mediterranean Gem Salad", with: " &  Ray's Mistake 😥" },
    { name: "Green Tea Matcha Latte", with: " & IRISH COFFEE 😏" },
    { name: "Wood Fired Pizzeria", with: " &Barbacoa 😁" }
  ],
  US: [
    { name: "Apple Pie ", with: "Hominy Grits" },
    { name: "Clam Chowder", with: " &  Ray's Mistake 😥" },
    { name: "Bagel ", with: "and Lox 😏" },
    { name: "Drop Biscuits", with: " and Sausage Gravy 😁" }
  ],
  MEXICO: [
    { name: "Tacos al pastor ", with: "Tequila 😍" },
    { name: "Tostadas", with: " & Margarita 🥵" },
    { name: "Chilesen nogada", with: " & Michelada 😝" },
    { name: "Mole", with: " Horchata 😦" }
  ]
};

var food = Object.keys(foodList);

export default function App() {
  const [selectFood, setFood] = useState("INDIA");
  function clickHandler(items) {
    setFood(items);
  }

  return (
    <div className="App">
      <h1>Food Dishes From around the 🌎!</h1>
      <h4>Check it out!!</h4>

      <div>
        {food.map((items) => (
          <button
            onClick={() => clickHandler(items)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  3rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {items}
          </button>
        ))}
      </div>
      <hr />

      <div style={{}}>
        <ul>
          {foodList[selectFood].map((items) => (
            <li
              style={{
                padding: "1rem",
                border: "1px solid black",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "1rem",
                marginLeft: "3rem"
              }}
            >
              {items.name}
              {items.with}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
