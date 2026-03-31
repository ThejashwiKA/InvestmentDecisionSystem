import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        
        <div className="bg-gray-900/50 backdrop-blur-md p-10 rounded-2xl shadow-xl">
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            AI-Based Investment System
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-xl mb-8">
            Analyze stock trends, get AI-powered predictions, and make smarter investment decisions with real-time insights.
          </p>

          {/* Button */}
          <Link href="/dashboard">
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition">
              Go to Dashboard 
            </button>
          </Link>

        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-10">
        
        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">📊 Live Analysis</h2>
          <p className="text-gray-400 text-sm">
            Track stock performance with real-time data visualization.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">🤖 AI Predictions</h2>
          <p className="text-gray-400 text-sm">
            Get smart investment suggestions powered by machine learning.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast Insights</h2>
          <p className="text-gray-400 text-sm">
            Make quick decisions with clear and concise analytics.
          </p>
        </div>

      </div>
    </div>
  );
}