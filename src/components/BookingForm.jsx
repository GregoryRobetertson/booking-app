"use client";
import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const handleChange = async (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    setFormData({
      serviceType: "",
      date: "",
      timeSlot: "",
      notes: "",
    });
  };
  return (
    <>
      <div>
        <h1>Book Appointment</h1>
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
    </>
  );
}
