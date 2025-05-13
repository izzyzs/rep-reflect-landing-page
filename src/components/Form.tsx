"use client";
import { useState } from "react";

export default function EmailForm() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/early-access", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, email }),
        });

        const data = await res.json();

        if (res.ok) {
            setSubmitted(true);
        } else if (res.status === 409) {
            setError("Looks like you’ve already signed up.");
        } else {
            setError(data.message || "Something went wrong. Please try again.");
        }
    };

    const handleReset = () => {
        setFirstName("");
        setEmail("");
        setSubmitted(false);
        setError("");
    };

    return submitted ? (
        <>
            <p className="text-green-400">You&apos;re on the list! 🎉</p>
            <button onClick={handleReset} className="text-sm underline text-gray-400 hover:text-white transition">
                Submit another email
            </button>
        </>
    ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <input
                type="text"
                placeholder="Your first name or nickname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-4 py-2 bg-neutral-700 rounded-md text-black sm:w-80"
                required
            />
            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 bg-neutral-700 rounded-md text-black sm:w-80" required />
            <button type="submit" className="bg-accent text-black font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
                Get Early Access
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
    );
}
