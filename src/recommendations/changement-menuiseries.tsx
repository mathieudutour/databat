import { Card, Image, Row, Col } from "react-bootstrap"
import type { useAppState } from "../useAppState"
import type { Artisan } from "../modals/artisans-rge"
import type { Aide } from "../modals/aides"

export function ChangementMenuiseries(props: {
  state: ReturnType<typeof useAppState>
  openArtisans: (args: { artisans: Artisan[]; title: string }) => void
  openAides: (args: { aides: Aide[]; title: string }) => void
}) {
  const vitrageState = props.state[9]
  const doubleVitrage = vitrageState[1][0]

  if (doubleVitrage === false) {
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
          <Card.Text>
            En changeant vos fenêtres vous améliorer le confort thermique et
            acoustique de votre habitation et réduisez également la possible
            condensation du logement. Vous améliorez également l’esthétique de
            vos façades et votre maison prend potentiellement de la valeur.
          </Card.Text>
          <Row>
            <Col>💰 Entre 5000 et 10000€</Col>
            <Col>💸 Jusqu'à 20% d'énergie consommée</Col>
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

async function getAides(): Promise<Aide[]> {
  return await [
    {
      upTo: "100€ par équipement",
      name: "MaPrimeRenov'",
      description: "Selon éligibilité, si réalisé par un artisan RGE",
      phone: "0808800700",
      website: "https://www.maprimerenov.gouv.fr",
    },
  ]
}
