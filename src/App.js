import React, { useState } from 'react';
import './App.css';
import Data from './data/data'
import Menu from './components/Menu'

function App() {
  const [items, setItems] = useState(Data)


  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
          <h1> Welcome to the shop </h1>
           <div className="underline"></div>
           </div>
           <div className="items">
           <Menu items={items} />
           </div>
           <div className="underline"></div>
          
      </section>
      </main>
    </div>
  );
}

export default App;
