import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Data from './data/data'
import Menu from './components/Menu'
import Categories from './components/Categories'
import Search from './components/Search'
const allCategories = ['all', ...new Set(Data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(Data)
  const [categories, setCategories] = useState(allCategories)
  /* Satt på knappt längst ned för att fokusera på en input längst upp på sidan */
  const inputRef = useRef()


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

  /* sök på en specifik vara */
  const searchItem = (category) => {
    if (category === '') {
      setItems(Data)
      return
    }
    const newItems = Data.filter((item) => item.title.toLowerCase() === category)
    setItems(newItems)
    
  }


  /* gör at sidan ej laddar om när vi trycker på knapparna*/
  useEffect(()=> {
    console.log('starting')
  }, [])


  return (
      <main>
        <section className="menu section">
        <p className='anim-circle'></p>
          <div className="title">
          <h1> Our Clothes </h1>
           <div className="underline"></div>
           <div>
           <Search categories={categories} filterItems={searchItem}/>
           </div>
           </div>
           <Categories categories={categories} filterItems={filterItems} />
           <Menu items={items} />
           <div className="underline"></div>

      </section>
      </main>
  );
}

export default App;
