import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";
import { Link } from "react-router-dom";

export function Create() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </header>

          <div className="content">
            <h1>Novo filme</h1>

            <div className="movie-info">
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

            <div>
              <TextArea placeholder="Observações" />
            </div>

            <section>
              <h2>Marcadores</h2>

              <div className="tags-container">
                <NewTag placeholder="React" />

                <NewTag isnew placeholder="Novo marcador" />
              </div>
            </section>

            <div className="buttons">
              <Button ondelete value="Excluir filme" />

              <Button value="Salvar alterações" />
            </div>
          </div>
        </Form>
      </main>
    </Container>
  );
}
