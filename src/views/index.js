import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/images/immfly.png";
import Logo2 from "../assets/images/Pokemon.png";

function Home() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect( async() => {
    await axios.get(url).then((response) => {
      setAllPokemons(response.data.results);
    });
  }, []);

  console.log(allPokemons);

  if (allPokemons) {
    return (
      <>
        <TitleWrapper>
          <FirstImage>
            <img src={Logo} alt="Log" />
          </FirstImage>
          <SecondImage>
            <img src={Logo2} alt="Logg" />
          </SecondImage>
          <Container>
            <Cards>
              {allPokemons.map(
                (res, key) => (
                  <Link to={`/${res.name}`} key={key} >
                  <Card >
                    <img
                      src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${res.name}.gif`}
                      alt="poke"
                    />
                    <ServicesBody>
                      <PokeName>{res.name}</PokeName>
                    </ServicesBody>
                  </Card>
                  </Link>
                )

                //
              )}
            </Cards>
          </Container>
        </TitleWrapper>
      </>
    );
  }

  return <div></div>;
}

export default Home;

const TitleWrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FirstImage = styled.div`
  margin-top: 100px;
  img {
    width: 60px;
    height: 60px;
  }
`;
const SecondImage = styled.div`
  img {
    width: 620px;
    height: 220px;
  }
`;

const Container = styled.div`
  margin: 40px 70px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-content: space-between;
  /* padding: 10px; */
  /* margin-top: -150px; */ // for the main page
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #000;
  :hover {
    box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    width: 90px;
    height: 90px;
    margin-top: 50px;
  }
`;

const ServicesBody = styled.div`
  font-size: 1rem;
  text-align: left;
  margin: 5px 30px;
  padding-top: 0px;
`;

const PokeName = styled.h2`
  font-size: 14px;
  color: #1f3c7c;
  margin: 30px 100px;
  text-align: center;
`;
