import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

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
  color: #ff851b;
  margin: 2.5rem;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 4);
  line-height: 1.4;
  padding: 2rem 2rem;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  mark {
    background-color: #000d1a;
    color: white;
    font-size: 0.8rem;
    heght: 10px;
  }
`;

const InfoSection = ({ infoData }) => {
  return (
    <>
      <InfoSectionRepresentation>
        <h1>Explore our beautiful websites</h1>
        <p>
          {" "}
          If you find anything interesting, please contact us. Click{" "}
          <mark>View Website</mark> for navigation and practical usage.
        </p>
      </InfoSectionRepresentation>

      <Section>
        {infoData.map((Item) => (
          <Container>
            <ColumnLeft>
              <h1>{Item.heading}</h1>
              <p>{Item.paragraphOne}</p>
              <p><small>{Item.paragraphTwo}</small></p>
              <Button to={Item.url} primary="true">
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
