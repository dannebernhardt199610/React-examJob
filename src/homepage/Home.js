import React from 'react'
import { Navbar } from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Hero } from "./components/Hero";

function Home() {
    return (
        <>
        <GlobalStyle />
        <Navbar/>
        <Hero />
        </>
    )
}

export default Home;