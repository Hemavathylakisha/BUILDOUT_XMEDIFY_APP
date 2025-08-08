import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings,setBookings] = useState([]);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("bookings")) || [];
  setBookings(saved);
}, []);

  return (
    <div className="container my-4">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? <p>No bookings yet.</p> : bookings.map((b, i) => (
        <div key={i} className="border p-3 mb-3 rounded">
          <h5>{b.center["Hospital Name"]}</h5>
          <p>{b.center.Address}, {b.center.City}, {b.center.State}</p>
          <p><strong>Date:</strong> {b.date}</p>
          <p><strong>Time:</strong> {b.time}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;