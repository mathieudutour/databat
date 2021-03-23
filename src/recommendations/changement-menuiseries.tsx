import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"

export function ChangementMenuiseries(props: {
  state: ReturnType<typeof useAppState>
}) {
  const vitrageState = props.state[9]
  const doubleVitrage = vitrageState[1][0]

  if (!doubleVitrage) {
    return (
      <Card style={{ marginTop: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <Image
              src={require("../images/window.png").default}
              style={{
                width: 20,
                marginTop: -3,
                marginRight: "0.5rem",
              }}
            />
            Changement des menuiseries
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
