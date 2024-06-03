/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Profile } from "./styles";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

import { useAsyncValue, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onChange, ...rest }) {
  
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSinOut() {
    navigate("/");
    signOut();
  }

  const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input 
        placeholder="Pesquisar pelo título" 
        onChange={onChange}
      />

      <article>
        <span>{user.name}</span>
        <button 
          className="link" 
          onClick={handleSinOut}>
            Sair
          </button>
      </article>

      <Profile to="profile">
        <img
          src={avatarURL}
          alt={user.name}
        />
      </Profile>
    </Container>
  )
}