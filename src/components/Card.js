import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContainer, Image, InfoContainer, Name, Status, Location, Origin } from '../styles/CardStyles';

function Card({ character }) {
  const [firstEpisode, setFirstEpisode] = useState(null);

  useEffect(() => {
    const fetchFirstEpisode = async () => {
      try {
        const response = await axios.get(character.episode[0]);
        setFirstEpisode(response.data.name);
      } catch (error) {
        console.error('Error fetching first episode: ', error);
        setFirstEpisode('Unknown episode');
      }
    };

    fetchFirstEpisode();
  }, [character]);

  return (
    <CardContainer>
      <Image src={character.image} alt={character.name} />
      <InfoContainer>
        <Name>{character.name}</Name>
        <Status status={character.status}>{character.status} - {character.species}</Status>
        <Location>Last known location: <p>{character.location.name}</p></Location>
        <Origin>First seen in: <p>{firstEpisode}</p></Origin>
      </InfoContainer>
    </CardContainer>
  );
}

export default Card;
