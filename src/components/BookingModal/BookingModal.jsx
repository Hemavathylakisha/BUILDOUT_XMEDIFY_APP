import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, onHide, center }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    const booking = {
      center,
      date,
      time
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));
    alert("Appointment Booked!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} data-testid="date-input" value={date}/>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select onChange={(e) => setTime(e.target.value)} value={time} data-testid="time-select">
             <option value="">Choose...</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleBook} disabled={!date || !time}
         data-testid="confirm-booking-btn">Book</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;

