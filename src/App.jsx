import React from 'react';
import Card1 from './components/Card1';
import Data from './data.json'

const App = () => {


console.log(Data);

  return (
    <div>
      <h1 className="handlingStyle">Todo App </h1>
     
      <Card1 toTitle = {Data[0].title} toDes = {Data[0].desc} />
      
    </div>
  )
};

export default App;