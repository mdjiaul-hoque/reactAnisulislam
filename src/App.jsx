import React from 'react';
import Card1 from './components/Card1';

const App = () => {
  return (
    <div>
      <h1 className="handlingStyle">Todo App</h1>
      <Card1 toTitle = " call Vite" toDes = "hasbi allah o niyemal okil niyemal mawla o niyemal nasir" />
      <Card1 toTitle = " call Veu" toDes = "hasbi allah o niyemal okil niyemal mawla o niyemal nasir" />
      <Card1 toTitle = " call Anguler" toDes = "hasbi allah o niyemal okil niyemal mawla o niyemal nasir" />
      <Card1 toTitle = " call Nextjs" toDes = "hasbi allah o niyemal okil niyemal mawla o niyemal nasir" />
      
      
    </div>
  );
};

export default App;