export default function RiskSummaryCards({ result }) {
  if (!result) return null;

  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      <Card title="Risk Score" value={`${result.risk_score}%`} />
      <Card title="Risk Level" value={result.risk_level} />
      <Card title="Total Flags" value={result.total_flags} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-3xl font-bold text-indigo-600 mt-2">{value}</div>
    </div>
  );
}