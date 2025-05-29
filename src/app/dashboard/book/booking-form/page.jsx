import React from "react";
import Header from "@/components/Header"; // Keep this if Header is in src/components/
import BookingForm from "../../components/BookingForm";

export default function page() {
  return (
    <>
      <Header />
      <BookingForm />
    </>
  );
}
