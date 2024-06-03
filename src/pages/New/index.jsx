import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { TextArea } from "../../components/TextArea";
import { ButtonBack } from "../../components/ButtonBack";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function New() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTags() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Ditete o título do filme");
    }
    if (newTag) {
      return alert("Você deixou uma marcado no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe vazio.")
    }
    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Filme cadastado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonBack rota={-1}>
              <FiArrowLeft />
              Voltar
            </ButtonBack>
            <h1>Novo filme</h1>
          </header>


          <div>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />



          <Section >
            <h2>Marcadores</h2>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />

                ))
              }
              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTags}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button
              className="tb2"
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}