import React from "react";

//ARRAY DESTRUCTURING
const vehicles = ["Benz", "Toyota", "Lexus"];
const [p, , t] = vehicles;

// OBJECT DESTRUCTURING
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

// old way
/* function myVehicle(vehicle) {
  return (
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    "."
  );
} */

//new way
//For Deeply Nexted Objects

function myVehicle({ color, type, model, brand, registration: { state } }) {
  return `My   ${type}   is a   ${color}    ${brand}  ${model} is registered in ${state}.`;
}

//SPREAD OPs
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//SPREAD OPs & DESTRUCTURING
const nums = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = nums;

//COMBINING TWO OBJECTS
const myVeh = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myU = { ...myVeh, ...updateMyVehicle };

function myVehicle2({ color, type, model, brand }) {
  return `My Vehicle2  ${type}   is a   ${color}    ${brand}  ${model} .`;
}
const App = () => {
  const message = myVehicle(vehicleOne);
  const message2 = myVehicle2(myU);
  return (
    <>
      <p>{}</p>
    </>
  );
};

export default App;
