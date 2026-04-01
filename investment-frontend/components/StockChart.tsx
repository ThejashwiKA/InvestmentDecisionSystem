"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

type Props = {
  trend: number[];
};

export default function StockChart({ trend }: Props) {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Stock Price",
        data: trend,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-white mb-2">Stock Trend</h2>
      <Line data={data} />
    </div>
  );
}