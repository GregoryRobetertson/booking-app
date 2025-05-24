"use client";

import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle user logins when the form is submitted

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/");

      await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle sign in with google
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign in: success", result.user);
      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loging In..." : "Log In"}
        </button>
      </form>
      <button onClick={handleGoogleSignin} disabled={loading}>
        {loading ? "Loging In..." : "Sign in with google"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
