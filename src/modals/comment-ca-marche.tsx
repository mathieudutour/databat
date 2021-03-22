import { Modal, Image } from "react-bootstrap"

export function CommentCaMarche() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Comment ça marche?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Prédictions des montants et de la satisfaction</h3>
        <Image
          src={require("../images/prediction.png").default}
          alt="Flux thermiques"
          fluid
        />
        <p>
          Données utilisées : Enquête Tremi. Ménages ayant réalisés des travaux
          entre 2014 et 2016.
        </p>
        <p>
          Modèles prédictifs utilisés : arbres de décisions CART et Random
          Forest.
        </p>
        <h3>Exemple d’arbres CART</h3>
        <p>
          Prédiction du confort obtenu ᐧ Travaux réalisés : rénovation et
          isolation de la toiture
        </p>
        <Image
          src={require("../images/decision-tree.png").default}
          alt="Flux thermiques"
          fluid
        />
        <p className="text-muted">
          Note de lecture : On commence en haut de l'arbre. Si plus de la moitié
          de la toiture est isolée (Oui) on va à gauche, sinon à droite (Non).
          Admettons que plus de la moitié ait été isolée, on regarde alors
          l'épaisseur de l'isolant. Si celle-ci est supérieure à 10 cm on va à
          gauche : un confort de 1 est prédit (« Très satisfait »). Sinon on va
          à droite et on regarde le type d'émission du chauffage, etc.
        </p>
      </Modal.Body>
    </>
  )
}
