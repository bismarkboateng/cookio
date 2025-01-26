"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("email received");
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="bg-rose-50 py-10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Lets Stay In Touch!</h2>
        <p className="text-sm md:text-lg lg:text-2xl text-gray-600 mb-8">
          Join our newsletter, so that we reach out to you with
          <br />
          our news and offers.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
