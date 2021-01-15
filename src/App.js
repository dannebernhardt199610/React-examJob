import React, { useState, useEffect } from "react";
import ClothesShop from "./pages/ClothesShop";
import PizzaShop from "./pages/PizzaShop";
import WelcomePage from "./pages/WelcomePage";

function App() {
  /* gör att sidan ej laddar om när vi trycker på knapparna
  useEffect(() => {
    console.log("starting");
  }, []);
*/

  return (
    <>
      <WelcomePage />
      <ClothesShop />
      <PizzaShop />
    </>
  );
}

export default App;
