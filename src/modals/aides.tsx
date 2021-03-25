import { Modal } from "react-bootstrap"

export type Aide = {
  upTo?: string
  website?: string
  email?: string
  phone?: string
  name: string
  description: string
}

export function Aides(props: { aides: Aide[]; title: string }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Aides disponibles pour {props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.aides.map(
          ({ upTo, website, email, phone, name, description }) => (
            <div>
              <p style={{ marginBottom: 0, fontSize: 12 }}>
                {website ? (
                  <a href={website} target="__blank" className="text-muted">
                    {website.replace(/^https?:\/\//g, "")}
                  </a>
                ) : null}
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    target="__blank"
                    style={{ marginLeft: "1rem" }}
                  >
                    ✉️
                  </a>
                ) : null}
                {phone ? (
                  <a
                    href={`tel:${phone}`}
                    target="__blank"
                    style={{ marginLeft: "1rem" }}
                  >
                    📞
                  </a>
                ) : null}
              </p>
              <p style={{ marginBottom: 0 }}>
                {website ? (
                  <a href={website} target="__blank">
                    {name}
                  </a>
                ) : (
                  <a href={`#${name}`}>{name}</a>
                )}
              </p>
              <p style={{ marginBottom: 0 }}>{description}</p>
              <p style={{ fontSize: 12 }}>💰 Jusqu'à {upTo}</p>
            </div>
          )
        )}
      </Modal.Body>
    </>
  )
}
