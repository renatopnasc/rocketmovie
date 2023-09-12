import { Container } from "./styles";

export function Button({ ondelete = false, value, ...rest }) {
  return <Container $ondelete={ondelete.toString()}>{value}</Container>;
}
