import { Modal, Image } from "react-bootstrap"

export function Toiture() {
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
      <Modal.Body>TODO:</Modal.Body>
    </>
  )
}
