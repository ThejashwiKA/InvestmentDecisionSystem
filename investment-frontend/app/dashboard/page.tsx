"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import StockCard from "../../components/StockCard";

export default function Dashboard() {
    const [selectedStock, setSelectedStock] = useState("TCS");

    const stockData: any = {
        TCS: [
            { day: "Mon", price: 3200 },
            { day: "Tue", price: 3300 },
            { day: "Wed", price: 3400 },
            { day: "Thu", price: 3350 },
            { day: "Fri", price: 3500 },
        ],
        Infosys: [
            { day: "Mon", price: 1400 },
            { day: "Tue", price: 1450 },
            { day: "Wed", price: 1500 },
            { day: "Thu", price: 1480 },
            { day: "Fri", price: 1500 },
        ],
        Reliance: [
            { day: "Mon", price: 2700 },
            { day: "Tue", price: 2750 },
            { day: "Wed", price: 2800 },
            { day: "Thu", price: 2780 },
            { day: "Fri", price: 2800 },
        ],
    };

    const predictions: any = {
        TCS: { action: "BUY", confidence: 82 },
        Infosys: { action: "HOLD", confidence: 65 },
        Reliance: { action: "SELL", confidence: 48 },
    };

    return (
        <div>
            <Navbar />

            {/* Cards */}
            <div className="p-10 grid grid-cols-3 gap-4">
                <StockCard name="TCS" price={3500} />
                <StockCard name="Infosys" price={1500} />
                <StockCard name="Reliance" price={2800} />
            </div>
        </div>
    );
}