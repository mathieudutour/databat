import { Modal, Form, FormControl, InputGroup, Image } from "react-bootstrap"
import type { usePlancherState } from "../useAppState"

export function Plancher(props: {
  state: ReturnType<typeof usePlancherState>
}) {
  const [
    [surface, setSurface],
    [isolated, setIsolated],
    [isolantWidth, setIsolantWidth],
    [videSanitaire, setVideSanitaire],
  ] = props.state

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image
            src={require("../images/floor.png").default}
            style={{ width: 30, marginTop: -5, marginRight: "1rem" }}
          />
          Plancher
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>Surface habitable</Form.Label>
            <InputGroup>
              <FormControl
                type="number"
                aria-describedby="m2"
                value={typeof surface === "undefined" ? "" : surface}
                onChange={(e) => setSurface(parseFloat(e.target.value))}
              />
              <InputGroup.Append>
                <InputGroup.Text id="m2">m²</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Le plancher bas de votre logement est-il isolé ?
            </Form.Label>
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
          {typeof isolated !== "undefined" ? (
            isolated ? (
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
            ) : (
              <Form.Group>
                <Form.Label>
                  Le plancher bas de votre logement est-il isolé ?
                </Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={videSanitaire as any}
                  onChange={(e) => setVideSanitaire(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </Form.Control>
              </Form.Group>
            )
          ) : null}
        </Form>
      </Modal.Body>
    </>
  )
}
