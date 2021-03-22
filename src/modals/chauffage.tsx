import { Modal, Image, Form } from "react-bootstrap"
import type { useChauffageState } from "../useAppState"

export function Chauffage(props: {
  state: ReturnType<typeof useChauffageState>
}) {
  const [
    [chauffage, setChauffage],
    [sameAsChauffage, setSameAsChauffage],
    [ecs, setEcs],
    [chauffageCondensation, setChauffageCondensation],
    [ecsCondensation, setEcsCondensation],
    [chauffageBefore2000, setChauffageBefore2000],
    [ecsBefore2000, setEcsBefore2000],
  ] = props.state

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
      <Modal.Body>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group>
            <Form.Label>
              Quelle est la source d’énergie pour la production de chauffage ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={chauffage}
              onChange={(e) => setChauffage(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="Electrique">Electrique</option>
              <option value="Gaz">Gaz</option>
              <option value="Fioul">Fioul</option>
              <option value="Pompe à Chaleur">Pompe à Chaleur</option>
              <option value="Solaire">Solaire</option>
              <option value="Bois/Granulé">Bois/Granulé</option>
            </Form.Control>
          </Form.Group>
          {chauffage === "Gaz" || chauffage === "Fioul" ? (
            <>
              <Form.Group>
                <Form.Label>La chaudière est-elle à condensation ?</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={chauffageCondensation as any}
                  onChange={(e) =>
                    setChauffageCondensation(e.target.value as any)
                  }
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </Form.Control>
              </Form.Group>
              {typeof chauffageCondensation === "undefined" ? (
                <Form.Group>
                  <Form.Label>
                    La chaudière a elle été installée avant les années 2000 ?
                  </Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    value={chauffageBefore2000 as any}
                    onChange={(e) =>
                      setChauffageBefore2000(e.target.value as any)
                    }
                  >
                    <option value={undefined}>Je ne sais pas</option>
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                  </Form.Control>
                </Form.Group>
              ) : null}
            </>
          ) : null}
          <Form.Group>
            <Form.Label>
              Votre système de chauffage est-il le même que votre système de
              production d’eau chaude ?
            </Form.Label>
            <Form.Control
              as="select"
              custom
              value={sameAsChauffage as any}
              onChange={(e) => setSameAsChauffage(e.target.value as any)}
            >
              <option value={undefined}>Je ne sais pas</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </Form.Control>
          </Form.Group>
          {typeof sameAsChauffage !== "undefined" && !sameAsChauffage ? (
            <>
              <Form.Group>
                <Form.Label>
                  Quelle est la source d’énergie pour la production d’eau
                  chaude ?
                </Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={ecs}
                  onChange={(e) => setEcs(e.target.value as any)}
                >
                  <option value={undefined}>Je ne sais pas</option>
                  <option value="Electrique">Electrique</option>
                  <option value="Gaz">Gaz</option>
                  <option value="Fioul">Fioul</option>
                  <option value="Pompe à Chaleur">Pompe à Chaleur</option>
                  <option value="Solaire">Solaire</option>
                  <option value="Bois/Granulé">Bois/Granulé</option>
                </Form.Control>
              </Form.Group>
              {ecs === "Gaz" || ecs === "Fioul" ? (
                <>
                  <Form.Group>
                    <Form.Label>
                      La chaudière est-elle à condensation ?
                    </Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      value={ecsCondensation as any}
                      onChange={(e) =>
                        setEcsCondensation(e.target.value as any)
                      }
                    >
                      <option value={undefined}>Je ne sais pas</option>
                      <option value="true">Oui</option>
                      <option value="false">Non</option>
                    </Form.Control>
                  </Form.Group>
                  {typeof ecsCondensation === "undefined" ? (
                    <Form.Group>
                      <Form.Label>
                        La chaudière a elle été installée avant les années
                        2000 ?
                      </Form.Label>
                      <Form.Control
                        as="select"
                        custom
                        value={ecsBefore2000 as any}
                        onChange={(e) =>
                          setEcsBefore2000(e.target.value as any)
                        }
                      >
                        <option value={undefined}>Je ne sais pas</option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                      </Form.Control>
                    </Form.Group>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}
        </Form>
      </Modal.Body>
    </>
  )
}
