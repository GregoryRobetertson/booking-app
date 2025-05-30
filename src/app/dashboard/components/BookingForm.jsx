"use client";
import React, { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token"); // get auth token

      if (!token) {
        setError("You must be logged in to book.");
        return;
      }

      // Send POST request to backend
      const response = await axios.post("/api/bookings", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess("Booking created successfully!");
      setFormData({
        serviceType: "",
        date: "",
        timeSlot: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to create booking");
    }
  };

  return (
    <div>
      <h1>Book Appointment</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Type</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType ?? ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date ?? ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Time Slot</label>
          <input
            type="text"
            name="timeSlot"
            placeholder="e.g. 10:00 AM - 11:00 AM"
            value={formData.timeSlot ?? ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Notes (optional)</label>
          <textarea
            name="notes"
            value={formData.notes ?? ""}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
