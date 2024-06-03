/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Container, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { api } from "../../services/api";


export function Home( ) {
  const [search, setSearch] = useState([]);
  const [notes, setNotes] = useState([]);

  const nagigate = useNavigate();

  function handleDetails(id) {
    nagigate(`/details/${id}`);
  }

  console.log(notes)

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}></Header>
      <main>
        <Content>
          <content>
            <Section title="Meus filmes" />
            <NewNote to="/new">
              <FiPlus />
              Adicionar filmes
            </NewNote>
          </content>
          <Section>
            {
              notes.map(note => (
                <Note
                  //icon={<Card key={note.id} data={note} />}
                  icon={note.rating}
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </Section>
        </Content>
      </main>
    </Container>
  )
}