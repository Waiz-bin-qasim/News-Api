import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Daba(props) {
  return (
    <Container>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          {props.text}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default Daba;