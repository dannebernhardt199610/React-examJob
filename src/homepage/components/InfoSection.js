import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { ImArrowDown } from "react-icons/im";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr:
grid-template-rows: 800px;
margin-top: 5vh;


@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #ff851b;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    color: white;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border: 3px solid white;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSectionRepresentation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ff851b;
  text-shadow: px 5px 20px rgba(0, 0, 0, 4);
  line-height: 1.4;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 3.5rem;
  }

  mark {
    background-color: #000d1a;
    color: white;
    font-size: 0.8rem;
    heght: 10px;
  }

  p {
    max-width: 80%;
    width: 30vw;
    font-size: 14px;
    line-height: 24px;
    margin: 0 0 24px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    mark {
      font-size: 0.6rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 20px;
      width: 100%;
      margin: 0 0 10px;
      padding: 10px;
      margin-bottom: 20px;
    }
  }
`;

const ArrowDown = styled.div`
  margin-top: 20vh;
  font-size: 5rem;

  &:hover {
    color: lightgreen;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-top: 10vh;
  }
`;

const P1 = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
`;

const moveDown = () => {
  let pageHeight = window.innerHeight;
  window.scrollBy(0, pageHeight);
};

const InfoSection = ({ infoData }) => {
  return (
    <>
      <Section>
        <InfoSectionRepresentation>
          <h1>Explore our beautiful websites</h1>
          <br />
          <P1>If you find anything interesting, please contact us.</P1>
          <br />
          <p>
            We sell cheap websites that stands out on the market, we also rent
            for cheap prices. Want to stand out on the market with your new
            clothing brand? Or maybe you are in the restaurant business? Maybe
            your a photographer that wants to have a website where you show your
            awesome photos and market them? Maybe you want something else. We
            have a big variety of options for your business.
          </p>
          Click <mark>View Website</mark> for navigation and practical usage.
          <ArrowDown>
            <ImArrowDown onClick={moveDown} />
          </ArrowDown>
        </InfoSectionRepresentation>
        {infoData.map((Item, index) => (
          <Container key={index}>
            <ColumnLeft>
              <h1>{Item.heading}</h1>
              <p>{Item.paragraphOne}</p>
              <p>
                <small>{Item.paragraphTwo}</small>
              </p>
              <Button to={Item.url} primary="true" >
                {Item.buttonLabel}
              </Button>
            </ColumnLeft>
            <ColumnRight reverse={Item.reverse}>
              <img src={Item.image} alt="fail" />
            </ColumnRight>
          </Container>
        ))}
      </Section>
    </>
  );
};

export default InfoSection;
