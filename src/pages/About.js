import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Button } from "../homepage/components/Button";
import GlobalStyle from "../homepage/components/globalStyles";
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaRegSmileWink } from 'react-icons/fa'

const InfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: lightblue;
height: 500px;
`;

const Info = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 4rem;
  margin: 3rem;
  font-weight: 700;
  color: white;
  line-height: 40px;
  margin: 0 0 24px;
  text-align: justify;
  text-justify: inter-word;
  width: 40vw;
  
  

  @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 20px;
      width: 100%;
      height: 100%;

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
`;

const ArrowDown = styled.div`
padding: 0;
margin: 0;
font-size: 5rem;
color: white;
text-align: center;
`;

const Headline = styled.div`
font-size: 3rem;
text-align: center;
margin-top: 20px;


@media screen and (max-width: 768px) {
  font-size: 2rem;
}
`;



const About = () => {
  useEffect(() => {
    console.log("About page loaded");
  });

  return (
    <Backgrounds>
      <Navbar />
      <GlobalStyle />
      <InfoContainer>
      <Info>
        <Headline>Hey there <FaRegSmileWink /></Headline> <br /> <br />
        Are you looking for a website for your business? We are highly focused
        on small companies and startups. Our websites 
        are built with React js. Giving your customers the fastest
        user experience. <br />
        Please do not hestitate to get in touch with us, we can implement any business into our websites and we can make small adjustments for your company if needed.
    
      </Info>
      </InfoContainer>
      <ArrowDown>
      <AiOutlineArrowDown />
      </ArrowDown>
     
      <br />
      <CustomP>
        We truly hope you enjoyed your visit and wants to get started with us.
        You will find our contact information by
        hitting<CustomButton><Button to="/interested">Contact us</Button></CustomButton>
      </CustomP>
    </Backgrounds>
  );
};

export default About;
