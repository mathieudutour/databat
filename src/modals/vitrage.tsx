import { Modal, Image, Form } from "react-bootstrap"
import type { useVitrageState } from "../useAppState"

export function Vitrage(props: { state: ReturnType<typeof useVitrageState> }) {
  const [
    [goodVitrage, setGoodVitrage],
    [doubleVitrage, setDoubleVitrage],
    [tightVitrage, setTightVitrage],
  ] = props.state

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
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>
              Les vitrages de votre logement sont-ils à première vue en bon
              état ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={goodVitrage as any}
              onChange={(e) => setGoodVitrage(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Les vitrages de votre logement sont-ils en double vitrage ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={doubleVitrage as any}
              onChange={(e) => setDoubleVitrage(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Si vous ne savez pas, prenez un briquet et une allumette et
              approchez la flamme d’une fenêtre, vous apercevrez un ou deux
              reflets : Si un seul reflet c’est un simple vitrage, si deux
              reflets apparaissent c’est un double vitrage.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Les vitrages de votre logement sont-ils étanches à l’air ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={tightVitrage as any}
              onChange={(e) => setTightVitrage(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Approchez votre main des contours de vos fenêtres, si vous ne
              ressentez aucun courant d’air, vos fenêtres sont étanches.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}
