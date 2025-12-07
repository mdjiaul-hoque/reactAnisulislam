import React from "react";

function Card1() {
 
  const todoTitle = " call react";
const todoDesc = " allah k jara besece valo dokko ki are trader trakte pare ? dokko ki are tader takte pare?";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


const handlingStyle = {
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px",
};



  return (
    <div>
       {/* inline style
    <h1
      style={{ backgroundColor: "purple", color: "white", textAlign: "center", padding: "15px"}}
    >
      Todo App
    </h1> */}
   {/* <h1
      style={handlingStyle}
    >
      Todo App
    </h1> */}

    
   <h1
      style={handlingStyle}
    >
      Todo App
    </h1>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + " / " + monthName + " / " + currentYear}</p>
    </div>
    
  )
}

export default Card1
