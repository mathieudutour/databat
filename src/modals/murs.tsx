import { Modal, Form, Image } from "react-bootstrap"
import type { useMursState } from "../useAppState"

export function Murs(props: { state: ReturnType<typeof useMursState> }) {
  const [
    [materiaux, setMateriaux],
    [isCold, setIsCold],
    [isolated, setIsolated],
    [isolatedSide, setIsolatedSide],
    [isolantWidth, setIsolantWidth],
  ] = props.state

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image
            src={require("../images/wall.png").default}
            style={{ width: 30, marginTop: -5, marginRight: "1rem" }}
          />
          Murs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>
              Avec quels matériaux sont bâtis les murs extérieurs ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={materiaux}
              onChange={(e) => setMateriaux(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="Béton plein">Béton plein</option>
              <option value="Parpaing">Parpaing</option>
              <option value="Briques pleines">Briques pleines</option>
              <option value="Briques creuses">Briques creuses</option>
              <option value="Ossature bois">Ossature bois</option>
              <option value="Pisé/Terre">Pisé/Terre</option>
              <option value="Pierres">Pierres</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Ressentez-vous du froid lorsque vous vous approchez de vos murs
              extérieurs pendant l’hiver ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={isCold as any}
              onChange={(e) => setIsCold(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui, ils sont froids</option>
              <option value="false">Non, ça va</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Vos murs sont-ils isolés ?</Form.Label>
            <Form.Control
              as="select"
              custom
              value={isolated as any}
              onChange={(e) => setIsolated(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
          </Form.Group>
          {isolated ? (
            <>
              <Form.Group>
                <Form.Label>Vos murs sont-ils isolés par :</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={isolatedSide}
                  onChange={(e) => setIsolatedSide(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="exterieur">L’extérieur</option>
                  <option value="interieur">L’intérieur</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Qu’elle est l’épaisseur de l’isolant ?</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={isolantWidth}
                  onChange={(e) => setIsolantWidth(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="0-10">0 à 10 cm</option>
                  <option value="10-30">10 à 30cm</option>
                  <option value="30+">Supérieur à 30cm</option>
                </Form.Control>
              </Form.Group>
            </>
          ) : null}
        </Form>
      </Modal.Body>
    </>
  )
}
