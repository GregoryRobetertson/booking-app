import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Book Easy",
  description: "Built and designed by Gregory Robertson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#1c2431] to-[#0c0f14] text-white`">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
