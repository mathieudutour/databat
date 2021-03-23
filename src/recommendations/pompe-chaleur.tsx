import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"

export function PompeChaleur(props: { state: ReturnType<typeof useAppState> }) {
  const chauffageState = props.state[6]
  const [
    [chauffage],
    [combine],
    [ecs],
    [chauffageCondensation],
  ] = chauffageState

  if (
    ((chauffage === "Fioul" || chauffage === "Gaz") &&
      chauffageCondensation === false &&
      combine) ||
    (combine === false && ecs === "Electrique")
  ) {
    return (
      <Card style={{ marginTop: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <Image
              src={require("../images/heating.png").default}
              style={{
                width: 20,
                marginTop: -3,
                marginRight: "0.5rem",
              }}
            />
            Installation d'une pompe à chaleur
          </Card.Title>
          <Card.Text>TODO: pourquoi c'est trop bien</Card.Text>
          <Row>
            <Col>💰 Entre 5000 et 10000 €</Col>
            <Col>💸 Jusqu'à 20% d'énergie consommée</Col>
          </Row>
          <Card.Link href="#">Aides disponibles</Card.Link>
          <Card.Link href="#">Artisans RGE</Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return null
}
