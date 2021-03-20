import { Modal, Image } from "react-bootstrap"

export function QuiSommesNous() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>La team FrEnerG</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={require("../images/equipe.jpg").default} fluid />
      </Modal.Body>
    </>
  )
}
