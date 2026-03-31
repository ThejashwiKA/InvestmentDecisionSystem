"use client";

import { useRouter } from "next/navigation";

type Props = {
  name: string;
  price: number;
};

export default function StockCard({ name, price }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/stocks/${name}`)}
      className="p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 border border-gray-700 hover:border-green-500 hover:scale-105"
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-green-400 mt-2">₹ {price}</p>
      <p className="text-sm mt-2 text-gray-400">
        Prediction: Uptrend
      </p>
    </div>
  );
}