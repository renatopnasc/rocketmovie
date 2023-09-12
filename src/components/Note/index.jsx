import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Tag } from "../Tag";

export function Note({ data }) {
  return (
    <Container>
      <h2>{data.title}</h2>

      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag} />
          ))}
        </footer>
      )}
    </Container>
  );
}
