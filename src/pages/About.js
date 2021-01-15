import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Button } from "../homepage/components/Button";
import GlobalStyle from "../homepage/components/globalStyles";
import { AiOutlineArrowDown } from 'react-icons/ai'

const Info = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding: 4rem;
  margin: 3rem;
  font-weight: 700;
  color: white;


  @media screen and (max-width: 768px) {
      font-size: 1rem;
  }
`;

const CustomP = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: gray;
  padding: 1rem;
  padding-top: 0;
  position: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding-top: 0px;
    margin-top: 0px;
    
}
`;

const Backgrounds = styled.div`
  background-color: #283747;
  position: absolute;
  top: 0; 
  left: 0;
  width:cover;
  height:cover;
  background-position: center;
  min-width: 100%;
  min-height: 100%;
`;

const CustomButton = styled.div`

display: flex;
align-items: center;
justify-content: center;

`

const About = () => {
  useEffect(() => {
    console.log("About page loaded");
  });

  return (
    <Backgrounds>
      <Navbar />
      <GlobalStyle />
      <Info>
        Hey there, <br />
        Are you looking for a website for your business? We are highly focused
        on small companies and startups. Our websites offer the latest
        technologies and are built with React js. That means that the website is
        able to change data without reloading the page. Giving you the fastest
        user experience.
        <br />
        <br />
        <AiOutlineArrowDown />
      </Info>
     
      <br />
      <CustomP>
        If you are interested in getting started with us. Don't hesitate to
        contact us by email or phone. You will find our contact information by
        hitting<CustomButton><Button to="/interested">Contact us</Button></CustomButton>or the link navigated in the top right of the homepage.
      </CustomP>
    </Backgrounds>
  );
};

export default About;
