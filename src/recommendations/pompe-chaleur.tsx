import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"
import type { Artisan } from "../modals/artisans-rge"
import type { Aide } from "../modals/aides"

export function PompeChaleur(props: {
  state: ReturnType<typeof useAppState>
  openArtisans: (args: { artisans: Artisan[]; title: string }) => void
  openAides: (args: { aides: Aide[]; title: string }) => void
}) {
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
            <Col>💰 Entre 10000 et 16000€ €</Col>
            <Col>💸 Jusqu'à 45% d'énergie consommée</Col>
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
                  title: "Installation d'une pompe à chaleur",
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
      name: "Sarl Lavigne Philippe",
      qualification:
        "Pose d'appareil de chauffage au bois hydraulique (chaudière bois et poêle), Pose de pompe à chaleur (PAC aérothermique ou géothermique et chauffe-eau thermodynamique), Pose d'appareil de chauffage au bois indépendant (poêle et insert), Pose de chauffe-eau thermodynamique",
      phone: "06 85 12 82 00",
      rating: 4.3,
      website: "http://www.sarlphilippelavigne.com/",
      email: "sarlphilippelavigne@wanadoo.fr",
    },
  ]
}

async function getAides(): Promise<Aide[]> {
  return await [
    {
      upTo: "4000€",
      name: "MaPrimeRenov'",
      description: "Selon éligibilité, si réalisé par un artisan RGE",
      phone: "0808800700",
      website: "https://www.maprimerenov.gouv.fr",
    },
  ]
}
