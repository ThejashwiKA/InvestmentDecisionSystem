type Props = {
  action: string;
  confidence: number;
};

export default function PredictionBox({ action, confidence }: Props) {
  const getColor = () => {
    if (action === "BUY") return "text-green-400";
    if (action === "SELL") return "text-red-400";
    return "text-yellow-400";
  };

  return (
    <div className="p-6 bg-black rounded-xl shadow-lg mt-6">
      <h2 className="text-white text-lg mb-2">AI Prediction</h2>

      <p className={`text-2xl font-bold ${getColor()}`}>
        {action}
      </p>

      <p className="text-gray-400 mt-2">
        Confidence: {confidence}%
      </p>
    </div>
  );
}