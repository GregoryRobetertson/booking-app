"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/bookings/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBookings(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="border p-4 rounded shadow">
              <p>
                <strong>Service:</strong> {booking.serviceType}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(booking.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {booking.timeSlot}
              </p>
              <p>
                <strong>Status:</strong> {booking.status}
              </p>
              {booking.notes && (
                <p>
                  <strong>Notes:</strong> {booking.notes}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
