import React from "react";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: cyan;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '1' : '0')};
  top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
position: absolute:
top: 1.5rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline:none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
  position: absolute;
  left: 45%;
  top:15%;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
  align-items: center;

`;




const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <Button to={item.path} key={index}>
              {item.title}
            </Button>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/interested">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
