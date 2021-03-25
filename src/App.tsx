import { useState, useRef, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Form,
  FormControl,
  Navbar,
  Nav,
  Modal,
  Image,
} from "react-bootstrap"

import { AddressInput } from "./AddressInput"
import { Dot } from "./Dot"
import { useAppState } from "./useAppState"

import { Onboarding } from "./modals/onboarding"
import { QuiSommesNous } from "./modals/qui-sommes-nous"
import { CommentCaMarche } from "./modals/comment-ca-marche"
import { Toiture } from "./modals/toiture"
import { Chauffage } from "./modals/chauffage"
import { Murs } from "./modals/murs"
import { Plancher } from "./modals/plancher"
import { Ventilation } from "./modals/ventilation"
import { Vitrage } from "./modals/vitrage"
import { ArtisansRGE, Artisan } from "./modals/artisans-rge"
import { Aides, Aide } from "./modals/aides"

import { ChangementMenuiseries } from "./recommendations/changement-menuiseries"
import { IsolationToiture } from "./recommendations/isolation-toit"
import { PompeChaleur } from "./recommendations/pompe-chaleur"
import { IsolationMurs } from "./recommendations/isolation-murs"

import "./App.css"

function App() {
  const state = useAppState()
  const [
    [showOnboarding, hideOnboarding],
    [address, setAddress],
    [logementType, setLogementType],
    [nbHabitant, setNbHabitant],
    toitureState,
    ventilationState,
    chauffageState,
    mursState,
    plancherState,
    vitrageState,
  ] = state

  const [modal, setModal] = useState<
    | "onboarding"
    | "comment-ca-marche"
    | "qui-sommes-nous"
    | "toiture"
    | "murs"
    | "plancher"
    | "chauffage"
    | "vitrage"
    | "ventilation"
    | "artisans"
    | "aides"
    | null
  >(showOnboarding ? "onboarding" : null)
  const latestModal = useRef(modal)

  const [modalArgs, setModalArgs] = useState<any>({})

  useEffect(() => {
    if (modal) {
      latestModal.current = modal
    }
  }, [modal])

  const modalToShow = modal || latestModal

  const closeModal = () => {
    if (modal === "onboarding") {
      hideOnboarding()
    }
    setModal(null)
  }

  const openArtisans = (args: { artisans: Artisan[]; title: string }) => {
    setModalArgs(args)
    setModal("artisans")
  }

  const openAides = (args: { aides: Aide[]; title: string }) => {
    setModalArgs(args)
    setModal("aides")
  }

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
                  <Form.Group as={Row}>
                    <Form.Label column>
                      Nombre de personnes dans le logement
                    </Form.Label>
                    <Col sm="3">
                      <FormControl
                        type="number"
                        value={
                          typeof nbHabitant === "undefined" ? "" : nbHabitant
                        }
                        onChange={(e) =>
                          setNbHabitant(parseInt(e.target.value))
                        }
                      />
                    </Col>
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
                <ChangementMenuiseries
                  state={state}
                  openArtisans={openArtisans}
                  openAides={openAides}
                />
                <IsolationToiture
                  state={state}
                  openArtisans={openArtisans}
                  openAides={openAides}
                />
                <PompeChaleur
                  state={state}
                  openArtisans={openArtisans}
                  openAides={openAides}
                />
                <IsolationMurs
                  state={state}
                  openArtisans={openArtisans}
                  openAides={openAides}
                />
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="#"
                  className="text-muted"
                  onClick={() => setModal("comment-ca-marche")}
                >
                  Comment les recommendations sont déterminées?
                </Card.Link>
              </Card.Footer>
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
      <footer
        className="bg-light text-center text-muted"
        style={{ marginTop: "3rem", padding: "2rem" }}
      >
        <p>
          Les recommendations fournies par FrEnerG sont à vertue pédagogique et
          ne remplacent en aucun cas l'expertise des conseillers{" "}
          <a
            href="https://www.faire.gouv.fr/"
            target="_blank"
            rel="noreferrer"
            className="text-muted"
          >
            FAIRE
          </a>
          .
        </p>
        <p>
          Projet FrEnerG ᐧ{" "}
          <a
            href="https://databat.ademe.fr/"
            target="_blank"
            rel="noreferrer"
            className="text-muted"
          >
            Concours DataBat 2021
          </a>
        </p>
        <p>Sources : ADEME, données Tremi ADEME, données Simul’Aid€s</p>
      </footer>
      <Modal show={modal !== null} onHide={closeModal} size="lg">
        {modalToShow === "onboarding" ? (
          <Onboarding onClose={closeModal} />
        ) : modalToShow === "comment-ca-marche" ? (
          <CommentCaMarche />
        ) : modalToShow === "qui-sommes-nous" ? (
          <QuiSommesNous />
        ) : modalToShow === "toiture" ? (
          <Toiture state={toitureState} />
        ) : modalToShow === "chauffage" ? (
          <Chauffage state={chauffageState} />
        ) : modalToShow === "murs" ? (
          <Murs state={mursState} />
        ) : modalToShow === "plancher" ? (
          <Plancher state={plancherState} />
        ) : modalToShow === "ventilation" ? (
          <Ventilation state={ventilationState} />
        ) : modalToShow === "vitrage" ? (
          <Vitrage state={vitrageState} />
        ) : modalToShow === "artisans" ? (
          <ArtisansRGE {...modalArgs} />
        ) : modalToShow === "aides" ? (
          <Aides {...modalArgs} />
        ) : null}
      </Modal>
    </div>
  )
}

export default App
