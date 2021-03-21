import { Spinner, OverlayTrigger, Tooltip } from "react-bootstrap"

export function Dot(props: {
  title: string
  top: number | string
  left: number | string
  onClick: () => void
}) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={`tooltip-${props.title}`}>{props.title}</Tooltip>}
    >
      <div
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <Spinner animation="grow" variant="primary" />
        <div
          className="text-primary"
          style={{
            position: "absolute",
            left: "1rem",
            top: "1rem",
            transform: "translate(-50%, -50%)",
            width: "1rem",
            height: "1rem",
            background: "currentColor",
            borderRadius: "50%",
          }}
        />
      </div>
    </OverlayTrigger>
  )
}
