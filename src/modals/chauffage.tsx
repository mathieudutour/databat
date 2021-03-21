import { Modal, Image } from "react-bootstrap"

export function Chauffage() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image
            src={require("../images/heating.png").default}
            style={{ width: 30, marginTop: -5, marginRight: "1rem" }}
          />
          Chauffage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>TODO:</Modal.Body>
    </>
  )
}
