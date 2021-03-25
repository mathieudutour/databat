import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"
import type { Artisan } from "../modals/artisans-rge"
import type { Aide } from "../modals/aides"

export function IsolationMurs(props: {
  state: ReturnType<typeof useAppState>
  openArtisans: (args: { artisans: Artisan[]; title: string }) => void
  openAides: (args: { aides: Aide[]; title: string }) => void
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
            <Col>💰 Environ 120€/m2</Col>
            <Col>💸 Jusqu'à 25% d'énergie consommée</Col>
          </Row>
          <Card.Link
            href="#"
            onClick={() =>
              getAides().then((aides) =>
                props.openAides({
                  aides,
                  title: "Changement des menuiseries",
                })
              )
            }
          >
            Aides disponibles
          </Card.Link>
          <Card.Link
            href="#"
            onClick={() =>
              getArtisans().then((artisans) =>
                props.openArtisans({
                  artisans,
                  title: "Isolation par l'extérieur",
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
      name: "Nugues",
      qualification:
        "Fabrication et pose de charpente traditionnelle et structure en bois, Couverture en métaux sauf plomb",
      phone: "06 85 12 82 00",
      rating: 4.3,
      website: "http://www.charpentes-nugues.com/",
      email: "charpentesnugues@orange.fr",
    },
    {
      name: "Guillotin Patrick",
      qualification:
        "Plaques de plâtre, Isolation thermique par l'intérieur, Isolation thermique par l'extérieur",
      phone: "0670145589",
      rating: 4.2,
      website: "http://www.guillotinplatreriepeinture71.com/",
      email: "guillotin.pat@orange.fr",
    },
  ]
}

async function getAides(): Promise<Aide[]> {
  return await [
    {
      upTo: "75€/m2",
      name: "MaPrimeRenov'",
      description: "Selon éligibilité, si réalisé par un artisan RGE",
      phone: "0808800700",
      website: "https://www.maprimerenov.gouv.fr",
    },
  ]
}
