"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  title: string;
  data: { day: string; price: number }[];
};

export default function StockChart({ title, data }: Props) {
  return (
    <div className="bg-black p-4 rounded-xl">
      <h2 className="text-white mb-4">{title}</h2>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#444" />
        <XAxis dataKey="day" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#00ff00" />
      </LineChart>
    </div>
  );
}