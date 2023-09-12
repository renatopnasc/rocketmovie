import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/renatopnasc.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder="Name" type="text" />
        <Input icon={FiMail} placeholder="Email" type="email" />
        <Input icon={FiLock} placeholder="Senha atual" type="password" />
        <Input icon={FiLock} placeholder="Nova senha" type="password" />

        <Button value="Salvar" />
      </Form>
    </Container>
  );
}
