import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"
import type { Artisan } from "../modals/artisans-rge"

export function ChangementMenuiseries(props: {
  state: ReturnType<typeof useAppState>
  openArtisans: (args: { artisans: Artisan[]; title: string }) => void
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
          <Card.Link
            href="#"
            onClick={() =>
              getArtisans().then((artisans) =>
                props.openArtisans({
                  artisans,
                  title: "Changement des menuiseries",
                })
              )
            }
          >
            Artisans RGE
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return null
}

async function getArtisans(): Promise<Artisan[]> {
  return await [
    {
      ads: true,
      name: "Menuiserie Sivignons",
      qualification:
        "Fourniture et pose de menuiseries extérieures en maison individuelle, petit collectif et petit tertiaire",
      phone: "06 85 12 82 00",
      rating: 4.3,
      website: "http://www.menuiseriesivignon.com",
      email: "menuiseriesivignon@orange.fr",
    },
    {
      name: "Menuiserie Litaudon Arnaud",
      qualification:
        "Fourniture et pose de menuiseries extérieures en maison individuelle, petit collectif et petit tertiaire",
      phone: "0670145589",
      rating: 4.2,
      website: "http://www.menuiserie-litaudon.fr/",
      email: "litaudon.arnaud@orange.fr",
    },
  ]
}
