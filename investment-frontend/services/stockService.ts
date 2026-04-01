export async function getStockData(name: string) {
  // Convert to uppercase for consistency
  const stock = name.toUpperCase();

  // TEMP MOCK DATA (later replace with API)
  const dummyData: any = {
    TCS: {
      name: "TCS",
      price: 3500,
      prediction: "BUY",
      confidence: 78,
      trend: [3000, 3200, 3400, 3300, 3600],
    },
    INFOSYS: {
      name: "Infosys",
      price: 1500,
      prediction: "HOLD",
      confidence: 65,
      trend: [1400, 1450, 1500, 1480, 1500],
    },
    RELIANCE: {
      name: "Reliance",
      price: 2800,
      prediction: "BUY",
      confidence: 72,
      trend: [2600, 2700, 2750, 2780, 2800],
    },
  };

  return dummyData[stock] || {
    name: stock,
    price: 1000,
    prediction: "HOLD",
    confidence: 50,
    trend: [900, 950, 1000, 980, 1000],
  };
}