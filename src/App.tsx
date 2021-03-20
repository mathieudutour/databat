import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Form,
  InputGroup,
  FormControl,
  Spinner,
  Navbar,
  Nav,
  Modal,
  Image,
} from "react-bootstrap"
import { AddressInput } from "./AddressInput"
import { QuiSommesNous } from "./modals/qui-sommes-nous"
import { CommentCaMarche } from "./modals/comment-ca-marche"
import { Toiture } from "./modals/toiture"
import { Dot } from "./Dot"

import "./App.css"

function App() {
  const [address, setAddress] = useState<
    mapkit.SearchAutocompleteResult | undefined
  >(undefined)

  const [logementType, setLogementType] = useState<
    "maison" | "appartement" | null
  >(null)

  const [modal, setModal] = useState<
    | "comment-ca-marche"
    | "qui-sommes-nous"
    | "toiture"
    | "murs"
    | "plancher"
    | "chauffage"
    | null
  >(null)

  const closeModal = () => setModal(null)

  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">FrEnerG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link onClick={() => setModal("comment-ca-marche")}>
                Comment ça marche?
              </Nav.Link>
              <Nav.Link onClick={() => setModal("qui-sommes-nous")}>
                Qui sommes nous?
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>Mon logement</Card.Title>
                <CardDeck>
                  <Card
                    border={logementType === "maison" ? "primary" : undefined}
                    onClick={() => setLogementType("maison")}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={require("./images/maison.png").default}
                      />
                      Maison
                    </Card.Body>
                  </Card>
                  <Card
                    border={
                      logementType === "appartement" ? "primary" : undefined
                    }
                    onClick={() => setLogementType("appartement")}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={require("./images/appartement.png").default}
                      />
                      Appartement
                    </Card.Body>
                  </Card>
                </CardDeck>

                <Form style={{ marginTop: "1rem" }}>
                  {address ? (
                    address.displayLines.join(", ")
                  ) : (
                    <AddressInput onSelect={setAddress} />
                  )}
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Surface habitable</Form.Label>
                      <InputGroup>
                        <FormControl type="number" aria-describedby="m2" />
                        <InputGroup.Append>
                          <InputGroup.Text id="m2">m²</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Année de construction</Form.Label>
                      <InputGroup>
                        <FormControl type="number" />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title>Recommendations</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Plus vous renseignerez d'informations (sur l'illustration à
                  droite), plus les recommendations seront précises et
                  appropriées.
                </Card.Subtitle>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {!logementType ? null : logementType === "appartement" ? (
              "L'algorithme n'est pas encore prêt pour les appartements. Inscrivez vous à la newsletter pour être informé en premier!"
            ) : (
              <div style={{ position: "relative" }}>
                <Image
                  src={require("./images/maison.jpg").default}
                  alt="maison"
                  fluid
                />
                <Dot left="20%" top="21%" onClick={() => setModal("toiture")} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={modal !== null} onHide={closeModal} size="lg">
        {modal === "comment-ca-marche" ? (
          <CommentCaMarche />
        ) : modal === "toiture" ? (
          <Toiture />
        ) : (
          <QuiSommesNous />
        )}
      </Modal>
    </div>
  )
}

export default App
