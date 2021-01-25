import React, { useState, useEffect } from "react";
import Data from "../data/PhotoData";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Search from "../components/Search";
import styled from "styled-components";
import pizzaImage from "./images/pizzaa.jpg";
import photoImage from "./photoImages/photo-background.jpg";
import photoImage2 from "./photoImages/photobk2.jpg";
import Navbar from "../components/Navbar";


const Background = styled.div`
  background-image: url(${photoImage});
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
    color: white;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  `;


const PhotoPage = () => {
  const allCategories = ["all", ...new Set(Data.map((item) => item.category))];

  const [items, setItems] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  /* filtrerar items om vi trycker all knappen laddar vi alla produkter */
  const filterItems = (category) => {
    if (category === "all") {
      setItems(Data);
      return;
    }
    /* filtrerar items om vi trycker vald kategori via knappar laddar vi den kategorins kläder */
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
    console.log("Photo webshop opened");
  }, []);

  
  return (
      <Background>
        <Navbar />
        <section className="menu-section">
          <Title>Photos</Title>
          <Search categories={categories} filterItems={searchItem} />
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={items} />
        </section>
      </Background>
  );
};

export default PhotoPage;
