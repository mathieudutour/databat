import { Modal } from "react-bootstrap"

export type Artisan = {
  ads?: boolean
  website?: string
  email?: string
  phone?: string
  name: string
  qualification: string
  rating: number
}

export function ArtisansRGE(props: { artisans: Artisan[]; title: string }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          Artisans certifiés RGE autours de chez vous : {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.artisans.map(
          ({ ads, website, email, phone, name, rating, qualification }) => (
            <div>
              <p style={{ marginBottom: 0, fontSize: 12 }}>
                {ads ? (
                  <>
                    <strong>Pub </strong>·{" "}
                  </>
                ) : null}
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
              <p style={{ marginBottom: 0 }}>{qualification}</p>
              <p className="text-muted" style={{ fontSize: 12 }}>
                <div className="star-ratings-css">
                  <div
                    className="star-ratings-css-top"
                    style={{ width: `${(rating / 5) * 100}%` }}
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-css-bottom">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                Rating: {rating}
              </p>
            </div>
          )
        )}
      </Modal.Body>
    </>
  )
}
