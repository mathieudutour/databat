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
} from "react-bootstrap"
import { AddressInput } from "./AddressInput"
import "./App.css"

function App() {
  const [address, setAddress] = useState<
    mapkit.SearchAutocompleteResult | undefined
  >(undefined)

  const [logementType, setLogementType] = useState<
    "maison" | "appartement" | null
  >(null)

  return (
    <div className="App">
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
                    <Form.Label>Surface</Form.Label>
                    <InputGroup>
                      <FormControl type="number" aria-describedby="m2" />
                      <InputGroup.Append>
                        <InputGroup.Text id="m2">m²</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
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
              <div>
                <img
                  src={require("./images/maison.jpg").default}
                  alt="maison"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
