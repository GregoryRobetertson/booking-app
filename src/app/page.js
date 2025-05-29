import BookingForm from "@/app/dashboard/components/BookingForm";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1>Welcome</h1>
        <ul>
          <li>
            <Link href="/dashboard/book/booking-form">Book an Appointment</Link>
          </li>
          <li>
            <Link href="/dashboard/book/booking-list">View Your Bookings</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
