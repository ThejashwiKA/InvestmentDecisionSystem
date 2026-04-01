type Props = {
  prediction: string;
  confidence: number;
};

export default function PredictionBox({ prediction, confidence }: Props) {
  return (
    <div className="text-white">
      <h2 className="mb-2">AI Prediction</h2>

      <p className="text-green-400 text-xl font-bold">
        {prediction}
      </p>

      <p>Confidence: {confidence}%</p>
    </div>
  );
}