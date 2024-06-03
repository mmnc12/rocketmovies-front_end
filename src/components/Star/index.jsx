/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti'

export function Star({ rating }) {

  const stars = [];

  for ( let i = 0; i < 5; i++) {
    let star = i < rating ? TiStarFullOutline : TiStarOutline;

    stars.push(star);
  }

  return (
    <Container>
      {stars.map((Star, i) => (
        <Star key={i} />
      ))}
    </Container>
  )
}

