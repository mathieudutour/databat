import { Modal, Image } from "react-bootstrap"

export function Vitrage() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image
            src={require("../images/window.png").default}
            style={{ width: 30, marginTop: -5, marginRight: "1rem" }}
          />
          Vitrage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>TODO:</Modal.Body>
    </>
  )
}
