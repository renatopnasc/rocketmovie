import { Container, Content, Button } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      {/* Header */}
      <Header />

      <main>
        <Content>
          <header>
            <h2>Meus filmes</h2>
            <Button to="/new">
              <FiPlus /> <span>Adicionar filme</span>
            </Button>
          </header>

          <section>
            <Note
              data={{
                title: "Interestellar",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietrepellendus exercitationem minus commodi molestias rerum, optio corporis ipsam totam consequuntur neque ratione. Nobis ad veritatis esse ut officiis voluptatum aliquam!",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />

            <Note
              data={{
                title: "Shrek",
                description:
                  "Em um pântano distante vive Shrek (Mike Myers), um ogro solitário que vê, sem mais nem menos, sua vida ser invadida por uma série de personagens de contos de fada, como três ratos cegos, um grande e malvado lobo e ainda três porcos que não têm um lugar onde morar. Todos eles foram expulsos de seus lares pelo maligno Lorde Farquaad (John Lithgow). Determinado a recuperar a tranquilidade de antes, Shrek resolve encontrar Farquaad e com ele faz um acordo: todos os personagens poderão retornar aos seus lares se ele e seu amigo Burro (Eddie Murphy) resgatarem uma bela princesa (Cameron Diaz), que é prisioneira de um dragão. Porém, quando Shrek e o Burro enfim conseguem resgatar a princesa logo eles descobrem que seus problemas estão apenas começando.",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />

            <Note
              data={{
                title: "Interestellar",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietrepellendus exercitationem minus commodi molestias rerum, optio corporis ipsam totam consequuntur neque ratione. Nobis ad veritatis esse ut officiis voluptatum aliquam!",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />

            <Note
              data={{
                title: "Interestellar",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietrepellendus exercitationem minus commodi molestias rerum, optio corporis ipsam totam consequuntur neque ratione. Nobis ad veritatis esse ut officiis voluptatum aliquam!",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />

            <Note
              data={{
                title: "Interestellar",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietrepellendus exercitationem minus commodi molestias rerum, optio corporis ipsam totam consequuntur neque ratione. Nobis ad veritatis esse ut officiis voluptatum aliquam!",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />

            <Note
              data={{
                title: "Interestellar",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietrepellendus exercitationem minus commodi molestias rerum, optio corporis ipsam totam consequuntur neque ratione. Nobis ad veritatis esse ut officiis voluptatum aliquam!",
                tags: ["Ficção Científica", "Drama", "Família"],
              }}
            />
          </section>
        </Content>
      </main>
    </Container>
  );
}
