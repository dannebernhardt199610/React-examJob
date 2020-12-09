import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './data/data'
import Menu from './components/Menu'
import Categories from './components/Categories'
const allCategories = ['all', ...new Set(Data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(Data)
  const [categories, setCategories] = useState(allCategories)


  /* filtrerar items om vi trycker all knappen laddar vi alla produkter */
  const filterItems = (category) => {
    if (category === 'all') {
      setItems(Data)
      return
    }
    /* filtrerar items om vi trycker vald kategori via knappar laddar vi den kategorins kläder */
    const newItems = Data.filter((item) => item.category === category)
    setItems(newItems)
  }

  /* gör at sidan ej laddar om när vi trycker på knapparna*/
  useEffect(()=> {
    console.log('starting')
  }, [])

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
