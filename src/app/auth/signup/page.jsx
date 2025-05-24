"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle user signups when the form is submitted
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Creates a new user with firebase auth using email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, { displayName: username });
      setUsername("");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle sign up with google
  const handleGoogleSignup = async () => {
    setError("");
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
      <h1>Create Account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <button onClick={handleGoogleSignup} disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
