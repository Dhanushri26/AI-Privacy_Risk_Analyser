export default function RiskProgressBar({ score }) {
  if (score === null || score === undefined) return null;

  const getColor = () => {
    if (score <= 30) return "bg-green-500";
    if (score <= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-6">
      <div className="flex justify-between text-sm text-slate-500 mb-3">
        <span>Overall Risk</span>
        <span className="font-semibold text-slate-700">{score}%</span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}