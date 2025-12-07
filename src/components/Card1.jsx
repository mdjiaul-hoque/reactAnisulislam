import React from "react";
// import style from '../../src/stylesheet/style.css';

// const todoTitle = " call react";
//   const todoDesc =
//     " allah k jara besece valo dokko ki are trader trakte pare ? dokko ki are tader takte pare?";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();


function Card1(props) {
      const { toTitle,toDes} = props;

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

      
      {/* <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDes">{todoDesc}</p>
        <p className="cardFooter">{dateName + " / " + monthName + " / " + currentYear}</p>
      </div> */}


      {/* props */}
      <div className="card">
        <h3 className="cardTitle">{toTitle}</h3>
        <p className="cardDes">{toDes}</p>
        <p className="cardFooter">{dateName + " / " + monthName + " / " + currentYear}</p>
      </div>
    </div>
  );
}

export default Card1;
