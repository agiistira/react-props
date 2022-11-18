import { Container } from "react-bootstrap";

const HOC = ({ children, HeaderTitle = "Kalpataru" }) => {
  return (
    <>
      <title>{HeaderTitle}</title>
      <Container>{children}</Container>
    </>
  );
};

export default HOC;
