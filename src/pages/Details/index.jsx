/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import { ButtonBack } from "../../components/ButtonBack";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Details() {
  const [data, setData] = useState(null);

  console.log(data)

  const { user } = useAuth();

  const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate()

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonBack rota={-1} />

            <div className="star" >
              <Section title={data.title} />
              <strong>
                <Star rating={data.rating} />
              </strong>
            </div>
              <span><img src={avatarURL} alt="imagem autor" /> Por {user.name} {data.created_at}</span>
            {
              data.tag &&
              <Section >
                {
                  data.tag.map(tag => (
                    <Tag key={tag.id} title={tag.name} />
                  ))
                }
              </Section>
            }

            <p>
              {data.description}
            </p>

            <Button
              title="Excluir filme"
              onClick={handleRemove}
            />
          </Content>
        </main>
      }
    </Container>
  )
}