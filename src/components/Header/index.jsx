import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      {/* Input */}
      <Input placeholder="Pesquisar pelo título" />

      {/* Profile */}
      <Profile>
        <div>
          <Link to="/profile">Renato Pessoa</Link>
          <button>sair</button>
        </div>
        <img src="https://github.com/renatopnasc.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
