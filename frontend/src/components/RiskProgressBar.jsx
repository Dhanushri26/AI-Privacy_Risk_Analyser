export default function RiskProgressBar({ score, result }) {
  if (score === null || score === undefined) return null;

  const getRiskLevel = () => {
    if (score <= 30) return { label: "LOW", color: "text-green-600" };
    if (score <= 70) return { label: "MEDIUM", color: "text-amber-600" };
    return { label: "HIGH", color: "text-red-600" };
  };

  const risk = getRiskLevel();

  return (
    <div className="mt-16 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center shadow-sm">
          <p className="text-xs tracking-widest text-slate-500 mb-6">
            PRIVACY SCORE
          </p>

          <div className={`text-7xl font-bold ${
            score <= 30
              ? "text-green-600"
              : score <= 70
              ? "text-amber-500"
              : "text-red-600"
          }`}>
            {score}
          </div>

          <p className="text-slate-500 mt-2">/100</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <div className="space-y-6 text-slate-600">

            <div className="flex justify-between">
              <span>Risk Level</span>
              <span className={`font-semibold ${risk.color}`}>
                {risk.label}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Findings</span>
              <span className="font-semibold text-slate-800">
                {result?.findings?.length || 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Scan Time</span>
              <span className="font-semibold text-slate-800">
                {result?.scan_time || "2.4s"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <p className="text-xs tracking-widest text-slate-500 mb-6">
            COMPLIANCE
          </p>

          <div className="space-y-4">
            <ComplianceBadge label="GDPR" status="fail" />
            <ComplianceBadge label="CCPA" status="warn" />
            <ComplianceBadge label="HIPAA" status="fail" />
            <ComplianceBadge label="SOC 2" status="pass" />
          </div>
        </div>

      </div>
    </div>
  );
}

function ComplianceBadge({ label, status }) {
  const styles = {
    pass: "bg-green-50 border-green-200 text-green-700",
    fail: "bg-red-50 border-red-200 text-red-700",
    warn: "bg-amber-50 border-amber-200 text-amber-700",
  };

  const icons = {
    pass: "✔",
    fail: "✕",
    warn: "⚠",
  };

  return (
    <div
      className={`flex justify-between items-center px-4 py-3 rounded-xl border ${styles[status]}`}
    >
      <span className="font-medium">{label}</span>
      <span>{icons[status]}</span>
    </div>
  );
}