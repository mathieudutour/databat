import { Modal, Form, FormControl, InputGroup, Image } from "react-bootstrap"
import type { usePlancherState } from "../useAppState"

export function Plancher(props: {
  state: ReturnType<typeof usePlancherState>
}) {
  const [[surface, setSurface]] = props.state

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
        </Form>
      </Modal.Body>
    </>
  )
}
