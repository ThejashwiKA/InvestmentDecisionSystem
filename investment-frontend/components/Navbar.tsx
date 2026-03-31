import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1 className="font-bold">AI Invest</h1>
      <div>
        <Link href="/dashboard" className="mr-4">
          Dashboard
        </Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}