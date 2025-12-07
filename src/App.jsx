import React from 'react';
import Card1 from './components/Card1';
import Data from './data.json'

const App = () => {


console.log(Data);



 

  return (
    <div>
      <h1 className="handlingStyle">Todo App </h1>
     
      {
        Data.map((item)=> <Card1 toTitle = {item.title} toDes = {item.desc} /> )
      }
     
    </div>
  )
};

export default App;