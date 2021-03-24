import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"
import type { Artisan } from "../modals/artisans-rge"

export function IsolationToiture(props: {
  state: ReturnType<typeof useAppState>
  openArtisans: (args: { artisans: Artisan[]; title: string }) => void
}) {
  const toitureState = props.state[4]
  const [[combles], [isolated], [isolantWidth], [goodState]] = toitureState

  if (
    combles &&
    (isolated === false || isolantWidth === "0-10" || goodState === false)
  ) {
    const title =
      goodState === false
        ? "Rénovation de l’isolation"
        : "Mise en place de l’isolation"

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
            {title}
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
          <Card.Link
            href="#"
            onClick={() =>
              getArtisans().then((artisans) =>
                props.openArtisans({
                  artisans,
                  title,
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
      name: "Bonnet-Desroches Sarl",
      qualification:
        "Tuiles plates, Remplacement de chaudière gaz/fuel en logement individuel, Installation d'appareil de chauffage bois indépendant : poêle et insert, Installation de chauffage avec chaudière bois en habitat individuel, collectif et tertiaire inférieur à 1000 m²",
      phone: "06 85 12 82 00",
      rating: 4.3,
      website: "http://www.bonnetdesroches.fr/",
      email: "bonnetdesroches@orange.fr",
    },
    {
      name: "Auloy Bruno",
      qualification: "Plaques de plâtre, Isolation thermique par l'intérieur",
      phone: "0670145589",
      rating: 4.2,
      website: "http://www.auloy-bruno-salornay71.com/",
      email: "bruno.auloy@orange.fr",
    },
  ]
}
