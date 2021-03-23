import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"

export function IsolationMurs(props: {
  state: ReturnType<typeof useAppState>
}) {
  const mursState = props.state[7]
  const [, , [isolated]] = mursState

  if (isolated === false) {
    return (
      <Card style={{ marginTop: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <Image
              src={require("../images/wall.png").default}
              style={{
                width: 20,
                marginTop: -3,
                marginRight: "0.5rem",
              }}
            />
            Isolation par l'extérieur
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
