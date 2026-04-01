"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [stock, setStock] = useState("");

  const handleSearch = () => {
    if (stock.trim() !== "") {
      router.push(`/stocks/${stock}`);
      setStock("");
    }
  };

  return (
    <nav className="p-4 bg-black text-white flex items-center justify-between">

      {/* Logo */}
      <h1 className="font-bold text-lg">AI Invest</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mx-6">
        <input
          type="text"
          placeholder="Search Stock "
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="px-3 py-1 rounded bg-white text-black placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>

      {/* Links */}
      <div>
        <Link href="/dashboard" className="mr-4 hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </div>

    </nav>
  );
}