import React from 'react';
import Card1 from './components/Card1';
import Data from './data.json'

const App = () => {


console.log(Data);

let items =[];
for (let i = 0 ; i<Data.length; i++){
  items.push( <Card1 toTitle = {Data[i].title} toDes = {Data[i].desc} />)
}

  return (
    <div>
      <h1 className="handlingStyle">Todo App </h1>
     
      {items}
     
    </div>
  )
};

export default App;