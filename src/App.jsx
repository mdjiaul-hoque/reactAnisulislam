import React from 'react';
// import Card1 from './components/Card1';

import Data from '../public/data.json'
import Products from './components/Products';

const App = () => {

  // console.log(Data[0].category);

  return (
    <div>
      {
        Data.map((item)=> <Products category = {item.category} description = {item.description} image = {item.image} price = {item.price} title={item.title} rating = {item.rating.rate} count = {item.rating.count}
        
        />
        
        )
      }
    </div>
  )
};

export default App;