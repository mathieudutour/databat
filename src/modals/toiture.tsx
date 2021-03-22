import { Modal, Image, Form } from "react-bootstrap"
import type { useToitureState } from "../useAppState"

export function Toiture(props: { state: ReturnType<typeof useToitureState> }) {
  const [
    [combles, setCombles],
    [isolated, setIsolated],
    [isolantWidth, setIsolantWidth],
    [isolantState, setIsolantState],
  ] = props.state

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image
            src={require("../images/roof.png").default}
            style={{ width: 30, marginTop: -2, marginRight: "1rem" }}
          />
          Toîture
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>
              Existe-t-il des combles accessibles à votre logement ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={combles as any}
              onChange={(e) => setCombles(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              {combles || typeof combles === "undefined"
                ? "La toiture ou les combles"
                : "La toiture"}{" "}
              de votre logement sont-elles isolées ?
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
          {isolated ? (
            <>
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
              <Form.Group>
                <Form.Label>
                  L’isolant est-il en bon état ? (Pas humide, pas tassé)
                </Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={isolantState as any}
                  onChange={(e) => setIsolantState(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  Pas humide, pas tassé
                </Form.Text>
              </Form.Group>
            </>
          ) : null}
        </Form>
      </Modal.Body>
    </>
  )
}
