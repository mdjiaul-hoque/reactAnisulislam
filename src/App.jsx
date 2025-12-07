import React from 'react';
// import Card1 from './components/Card1';
import Data from './data.json'

const App = () => {


console.log(Data);


  return (
    <div>
      <h1 className="handlingStyle">Nested mapping </h1>
     
      {
        Data.map((item, index)=> 
        <article key={index}>
          <h3>fullName : {item.fullName}</h3>
          <p>age: { item.age}</p>
           
            {

              item.phones.map((phone,index)=>
            <div key={index}> 
              <p>home:{phone.home}</p> 
              <p>office:{phone.office}</p> 
            </div> 
              )
            }

        </article> 
        )
      }
     
    </div>
  )
};

export default App;