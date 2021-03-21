import { Modal, Form, FormControl } from "react-bootstrap"
import type { useMursState } from "../useAppState"

export function Murs(props: { state: ReturnType<typeof useMursState> }) {
  const [[anneeConstruction, setAnneeConstruction]] = props.state

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Murs</Modal.Title>
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
