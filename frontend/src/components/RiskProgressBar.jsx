export default function RiskProgressBar({ score }) {
  if (!score && score !== 0) return null;

  const getColor = () => {
    if (score <= 30) return "bg-green-500";
    if (score <= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-8">
      <div className="text-sm text-slate-500 mb-2">Overall Risk</div>
      <div className="w-full bg-slate-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full ${getColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}