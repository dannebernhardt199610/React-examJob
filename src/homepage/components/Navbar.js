import React, { useRef } from "react";
import styled, { css } from "styled-components/macro";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavData } from "../data/NavData";
import { Button } from "./Button";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 768px) {
  
  }
`;



const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffc000;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  ${NavLink}
  font-style: italic;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuBars = styled(AiOutlineMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, 25%);
    color: snow;
  }
`;

const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: : 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = ({ toggle }) => {
 const inputref = useRef();

 const moveDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  

  return (
    <div ref={inputref}>
    <Nav>
      <Logo to="/" onClick= {() => {
        inputref.current.scrollIntoView()
      }}> Cheap web sites </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <Logo onClick={moveDown}>Websites</Logo>
        {NavData.map((item, index) => (
          <NavMenuLinks to={item.path} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/interested" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
    </div>
  );
};
