import { Col, Container, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Container>
        <Row className="align-middle text-center">
          <Col>
            <PeopleFill size={100} color="white" />
            <h1 className="text-light">Multiple Users</h1>
            <h5 className="text-light">
              This address book enables any number of users to register and save their business contacts.
              You can only see the contacts you have created.
            </h5>
          </Col>

          <Col>
            <FileEarmarkTextFill size={100} color="white" />
            <h1 className="text-light">Contact Details</h1>
            <h5 className="text-light">
              For each contact, you can save their name, address, and phone number.
            </h5>
          </Col>

          <Col>
            <Calendar2CheckFill size={100} color="white" />
            <h1 className="text-light">Timestamped Notes</h1>
            <h5 className="text-light">
              Each time you make contact with a contact, you can write a note that summarizes the conversation.
              This note is saved along with a timestamp with the contact.
            </h5>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
