import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ data }) {
  const [show, setShow] = React.useState(false);

  return (
    <Col md={4} sm={6} xs={12} lg={9} className="d-flex">
      <Card className="my-3 flex-fill shadow-sm">
        <Card.Body>
          <Card.Title className="fw-bold">{data["Hospital Name"]}</Card.Title>
          <Card.Text className="text-muted">
            {data.Address}, {data.City}, {data.State}, {data["ZIP Code"]}
          </Card.Text>
          <Card.Text>
            <strong>Rating:</strong> {data["Overall Rating"] || "N/A"}
          </Card.Text>
          <Button variant="primary" onClick={() => setShow(true)}>
            Book FREE Center Visit
          </Button>
        </Card.Body>
      </Card>

      {/* Booking Modal */}
      <BookingModal
        show={show}
        onHide={() => setShow(false)}
        center={data}
      />
    </Col>
  );
}

export default HospitalCard;
