import { Modal, Row, Col, Image } from "react-bootstrap"

export function CommentCaMarche() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Comment ça marche?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Vous envisagez des travaux mais vous ne savez pas par où commencer?
          Vous souhaitez améliorer le confort de votre habitation?
        </p>
        <p>FrEnerG vous accompagne dans votre prise de décision.</p>
        <p>
          En quelques clics, découvrez les meilleures solutions selon votre
          profil et avancez sereinement dans vos projets de rénovation.
        </p>
        <h3>Les déperditions thermiques</h3>
        <Row>
          <Col>
            <p>
              Le flux thermique se propage dans tous les sens du chaud vers le
              froid.
            </p>
            <p>
              Il est donc nécessaire d’agir sur l’enveloppe du bâti pour limiter
              ces déperditions.
            </p>
          </Col>
          <Col>
            <Image
              src={require("../images/flux.png").default}
              alt="Flux thermiques"
              fluid
            />
          </Col>
        </Row>
        <h3>Une démarche simple en 3 étapes</h3>
        <Row>
          <Col>Je renseigne les caractéristiques de mon logement.</Col>
          <Col>
            Je découvre les meilleures solutions pour améliorer mon logement,
            selon mon budget.
          </Col>
          <Col>Je passe à l'action!</Col>
        </Row>
      </Modal.Body>
    </>
  )
}
