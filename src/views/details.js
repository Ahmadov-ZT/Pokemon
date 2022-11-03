import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/immfly.png";
import Logo2 from "../assets/images/Pokemon.png";

const Details = ({ match }) => {
  const [pokemonDetails, setPokemonDetails] = useState();
  const params = useParams();
  const { details } = params;

  const getPokemon = async () => {
    const details = await getPokemonData();
    setPokemonDetails(details.data);
  };

  const getPokemonData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${details}`);
    return res;
  };

  useEffect(() => {
    getPokemon();
  }, [details]);

  console.log(pokemonDetails);
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
            <Card>
              <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${details}.gif`} alt="Log" />
              <ServicesBody>
                <PokeName>{pokemonDetails?.name}</PokeName>
                <PokeInfo>
                  <Step>
                    <span>ID:</span> <span> {pokemonDetails?.id}</span>
                  </Step>
                  <Step>
                    <span>Type:</span>
                    <span> {pokemonDetails?.types[1]?.type.name ?? "no types available"}</span>
                  </Step>
                  <Step>
                    <span>Height:</span> <span> {pokemonDetails?.height ?? "no height available"}</span>
                  </Step>
                  <Step>
                    <span>Habilities:</span>
                    <li> {pokemonDetails?.abilities[0]?.ability.name ?? "no ability available"}</li>
                    <li> {pokemonDetails?.abilities[1]?.ability.name ?? "no ability available"}</li>
                  </Step>
                </PokeInfo>
              </ServicesBody>
            </Card>
          </Cards>
        </Container>
      </TitleWrapper>
    </>
  );
};

export default Details;

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
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-content: space-between;
  /* padding: 10px; */
  /* margin-top: -150px; */ // for the main page
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  /* cursor: pointer; */
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
  font-size: 18px;
  color: #1f3c7c;
  margin: 30px 100px;
  text-align: center;
`;
const PokeInfo = styled.h5`
  margin: 20px 1px;
  padding: 10px;

  div {
    margin: 20px 13px;
  }
`;

const Step = styled.div`
  margin: 20px 13px;
`;
