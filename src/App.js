import React, { useState } from 'react';
import './App.css';
import Data from './data/data'
import Menu from './components/Menu'
import Categories from './components/Categories'
const allCategories = ['all', ...new Set(Data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(Data)
  const [categories, setCategories] = useState(allCategories)


  const filterItems = (category) => {
    if (category === 'all') {
      setItems(Data)
      return
    }
    const newItems = Data.filter((item) => item.category === category)
    setItems(newItems)
  }


  return (
      <main>
        <section className="menu section">
          <div className="title">
          <h1> Welcome to the shop </h1>
           <div className="underline"></div>
           </div>
           <Categories categories={categories} filterItems={filterItems} />
           <Menu items={items} />
           <div className="underline"></div>
      </section>
      </main>
  );
}

export default App;
