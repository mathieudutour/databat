import { Modal, Form } from "react-bootstrap"
import type { useVentilationState } from "../useAppState"

export function Ventilation(props: {
  state: ReturnType<typeof useVentilationState>
}) {
  const [
    [ventilation, setVentilation],
    [ventilationWorks, setVentilationWorks],
    [ventilationDouble, setVentilationDouble],
    [entrees, setEntrees],
  ] = props.state

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Ventilation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>
              Existe-t-il un système de ventilation à votre logement ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={ventilation as any}
              onChange={(e) => setVentilation(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Si vous ne savez pas, regardez dans votre salle de bain/WC si vous
              apercevez une bouche de ventilation.
            </Form.Text>
          </Form.Group>
          {ventilation ? (
            <>
              <Form.Group>
                <Form.Label>Ce système fonctionne-t-il ?</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={ventilationWorks as any}
                  onChange={(e) => setVentilationWorks(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  Pour s’en rendre compte, placez une feuille de papier devant
                  la bouche de ventilation de votre salle de bain/WC, si elle se
                  fait aspirer alors le système fonctionne.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Est-ce une ventilation double flux ?</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={ventilationDouble as any}
                  onChange={(e) => setVentilationDouble(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  Si vous ne savez pas, cherchez une bouche de ventilation dans
                  votre salon ou votre chambre, si vous en trouvez une alors
                  c’est une ventilation double flux.
                </Form.Text>
              </Form.Group>
            </>
          ) : null}
          <Form.Group>
            <Form.Label>
              Existe-il des entrées d’air à votre logement ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={entrees as any}
              onChange={(e) => setEntrees(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
            <Form.Text className="text-muted">
              A chercher aux dessus des fenêtres.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}
