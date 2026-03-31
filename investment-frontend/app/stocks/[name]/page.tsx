"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import StockChart from "../../../components/StockChart";
import PredictionBox from "../../../components/PredictionBox";

export default function StockDetail() {
  const params = useParams<{ name: string }>();
  const stockName = params.name;

  const data = [
    { day: "Mon", price: 3000 },
    { day: "Tue", price: 3200 },
    { day: "Wed", price: 3400 },
    { day: "Thu", price: 3300 },
    { day: "Fri", price: 3500 },
  ];

  const prediction = {
    action: "BUY",
    confidence: 78,
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          {stockName} 📊
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <StockChart title={`${stockName} Trend`} data={data} />
          </div>

          <div>
            <PredictionBox
              action={prediction.action}
              confidence={prediction.confidence}
            />
          </div>
        </div>
      </div>
    </div>
  );
}