import React, { useState, useEffect } from "react";
import Data from "../data/PizzaData";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Search from "../components/Search";
import styled from "styled-components";
import pizzaImage from "./images/redpizza.jpg";
import Navbar from "../components/Navbar";



  //Styled components
  const Background = styled.div`
    background-image: url(${pizzaImage});
    position: absolute;
    top: 0;
    left: 0;
    width: cover;
    height: cover;
    min-width: 100%;
    min-height: 100%;
    

    @media screen and (max-width: 480px) {
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: cover;
      height: cover;
      min-width: 100%;
      min-height: 100%;
    }
  `;

  const Title = styled.div`
    font-size: 4rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    justify-content: center;
    padding: 1.5rem;
    font-weight: bold;
    color: #b10dc9;
    text-shadow: 2px 2px #FF0000;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  `;


const PizzaShop = () => {
  const allCategories = ["all", ...new Set(Data.map((item) => item.category))];

  const [items, setItems] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  /* filtrerar items om vi trycker all knappen laddar vi alla produkter */
  const filterItems = (category) => {
    if (category === "all") {
      setItems(Data);
      return;
    }
    /* filtrerar items om vi trycker vald kategori via knappar laddar vi den kategorins items */
    const newItems = Data.filter((item) => item.category === category);
    setItems(newItems);
  };

  /* sök på en specifik vara */
  const searchItem = (category) => {
    if (category === "") {
      setItems(Data);
      return;
    }
    const newItems = Data.filter(
      (item) => item.title.toLowerCase() === category
    );
    setItems(newItems);
  };

  /* gör att sidan ej laddar om när vi trycker på knapparna*/
  useEffect(() => {
    console.log("Pizza webshop opened");
  }, []);



  return (
    <Background>
      <Navbar />
      <section className="menu-section">
        <Title>Pizza</Title>
        <Search categories={categories} filterItems={searchItem} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </Background>
  );
};

export default PizzaShop;
