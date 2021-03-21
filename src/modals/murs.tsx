import { Modal, Form, FormControl, Image } from "react-bootstrap"
import type { useMursState } from "../useAppState"

export function Murs(props: { state: ReturnType<typeof useMursState> }) {
  const [[anneeConstruction, setAnneeConstruction]] = props.state

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
            <Form.Label>Année de construction</Form.Label>
            <FormControl
              type="number"
              value={
                typeof anneeConstruction === "undefined"
                  ? ""
                  : anneeConstruction
              }
              onChange={(e) => setAnneeConstruction(parseInt(e.target.value))}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}
