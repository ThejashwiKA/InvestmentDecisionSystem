"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getStockData } from "@/services/stockService";
import StockChart from "@/components/StockChart";
import PredictionBox from "@/components/PredictionBox";

type StockData = {
  name: string;
  price: number;
  prediction: string;
  confidence: number;
  trend: number[];
};

export default function StockPage() {
  const params = useParams();

  const name = Array.isArray(params.name)
    ? params.name[0]
    : params.name || "";

  const [data, setData] = useState<StockData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) return;

    async function fetchData() {
      try {
        const result = await getStockData(name);
        setData(result);
      } catch (err) {
        setError("Failed to load data");
      }
    }

    fetchData();
  }, [name]);

  if (!data && !error) {
    return <p className="p-4">Loading...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>

      <p className="text-green-400 mb-6">₹ {data?.price}</p>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 bg-black p-4 rounded">
          <StockChart trend={data?.trend || []} />
        </div>


        <div className="bg-black p-4 rounded">
          <PredictionBox
            prediction={data?.prediction || ""}
            confidence={data?.confidence || 0}
          />
        </div>

      </div>
    </div>
  );
}