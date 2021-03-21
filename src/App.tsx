import { useState, useRef, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Form,
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
import { Chauffage } from "./modals/chauffage"
import { Murs } from "./modals/murs"
import { Plancher } from "./modals/plancher"
import { Ventilation } from "./modals/ventilation"
import { Vitrage } from "./modals/vitrage"
import { Dot } from "./Dot"
import { useAppState } from "./useAppState"

import "./App.css"

function App() {
  const [
    [address, setAddress],
    [logementType, setLogementType],
    [nbHabitant, setNbHabitant],
    mursState,
    plancherState,
  ] = useAppState()

  const [modal, setModal] = useState<
    | "comment-ca-marche"
    | "qui-sommes-nous"
    | "toiture"
    | "murs"
    | "plancher"
    | "chauffage"
    | "vitrage"
    | "ventilation"
    | null
  >(null)
  const latestModal = useRef(modal)

  useEffect(() => {
    if (modal) {
      latestModal.current = modal
    }
  }, [modal])

  const modalToShow = modal || latestModal

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
                  <Form.Group>
                    <Form.Label>
                      Nombre de personnes dans le logement
                    </Form.Label>
                    <FormControl
                      type="number"
                      value={
                        typeof nbHabitant === "undefined" ? "" : nbHabitant
                      }
                      onChange={(e) => setNbHabitant(parseInt(e.target.value))}
                    />
                  </Form.Group>
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
                <Dot
                  title="Toîture"
                  left="20%"
                  top="21%"
                  onClick={() => setModal("toiture")}
                />
                <Dot
                  title="Murs"
                  left="5%"
                  top="80%"
                  onClick={() => setModal("murs")}
                />
                <Dot
                  title="Plancher"
                  left="44%"
                  top="71%"
                  onClick={() => setModal("plancher")}
                />
                <Dot
                  title="Chauffage"
                  left="12.5%"
                  top="68%"
                  onClick={() => setModal("chauffage")}
                />
                <Dot
                  title="Vitrage"
                  left="71%"
                  top="65%"
                  onClick={() => setModal("vitrage")}
                />
                <Dot
                  title="Ventilation"
                  left="61%"
                  top="25%"
                  onClick={() => setModal("ventilation")}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={modal !== null} onHide={closeModal} size="lg">
        {modalToShow === "comment-ca-marche" ? (
          <CommentCaMarche />
        ) : modalToShow === "qui-sommes-nous" ? (
          <QuiSommesNous />
        ) : modalToShow === "toiture" ? (
          <Toiture />
        ) : modalToShow === "chauffage" ? (
          <Chauffage />
        ) : modalToShow === "murs" ? (
          <Murs state={mursState} />
        ) : modalToShow === "plancher" ? (
          <Plancher state={plancherState} />
        ) : modalToShow === "ventilation" ? (
          <Ventilation />
        ) : modalToShow === "vitrage" ? (
          <Vitrage />
        ) : null}
      </Modal>
    </div>
  )
}

export default App
