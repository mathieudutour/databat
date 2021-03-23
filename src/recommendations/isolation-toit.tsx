import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"

export function IsolationToiture(props: {
  state: ReturnType<typeof useAppState>
}) {
  const toitureState = props.state[4]
  const [[combles], [isolated], [isolantWidth], [goodState]] = toitureState

  if (
    combles &&
    (isolated === false || isolantWidth === "0-10" || goodState === false)
  ) {
    return (
      <Card style={{ marginTop: "1rem" }}>
        <Card.Body>
          <Card.Title>
            <Image
              src={require("../images/roof.png").default}
              style={{
                width: 20,
                marginTop: -3,
                marginRight: "0.5rem",
              }}
            />
            Mise en place/ Rénovation de l’isolation
          </Card.Title>
          <Card.Text>
            Laines minérales ou insufflation de ouates de cellulose. TODO:
            pourquoi c'est trop bien
          </Card.Text>
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
