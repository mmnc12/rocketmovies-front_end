/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function ButtonBack({rota}) {
  return (
    <Container>
      <Link to={rota}>
        <FiArrowLeft />
        <span>Voltar</span>
      </Link>
    </Container>
  )
}