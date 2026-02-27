import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export default function RiskSummaryCards({ result }) {
  if (!result) return null;

  const scoreColor =
    result.risk_score <= 30
      ? "text-green-600"
      : result.risk_score <= 70
      ? "text-amber-500"
      : "text-red-600";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
      
      {/* Privacy Score Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center">
        <div className="text-xs tracking-widest text-slate-400 uppercase">
          Privacy Score
        </div>

        <div className={`text-7xl font-bold mt-6 ${scoreColor}`}>
          {result.risk_score}
        </div>

        <div className="text-slate-400 mt-2">/100</div>
      </div>

      {/* Risk Meta Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-10">
        <div className="space-y-6 text-slate-600 text-lg">
          <div className="flex justify-between">
            <span>Risk Level</span>
            <span className="font-semibold text-amber-500">
              {result.risk_level}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Findings</span>
            <span className="font-semibold text-slate-900">
              {result.total_flags}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Scan Time</span>
            <span className="font-semibold text-slate-900">
              {result.scan_time || "2.4s"}
            </span>
          </div>
        </div>
      </div>

      {/* Compliance Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8">
        <div className="text-xs tracking-widest text-slate-400 uppercase mb-6">
          Compliance
        </div>

        <div className="space-y-4">

          <ComplianceItem
            label="GDPR"
            status="fail"
          />

          <ComplianceItem
            label="CCPA"
            status="warn"
          />

          <ComplianceItem
            label="HIPAA"
            status="fail"
          />

          <ComplianceItem
            label="SOC 2"
            status="pass"
          />

        </div>
      </div>
    </div>
  );
}

function ComplianceItem({ label, status }) {
  const styles = {
    pass: "bg-green-50 border-green-200 text-green-700",
    fail: "bg-red-50 border-red-200 text-red-600",
    warn: "bg-amber-50 border-amber-200 text-amber-600",
  };

  const icons = {
    pass: <CheckCircle className="w-5 h-5" />,
    fail: <XCircle className="w-5 h-5" />,
    warn: <AlertTriangle className="w-5 h-5" />,
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl border ${styles[status]}`}
    >
      <span className="font-medium">{label}</span>
      {icons[status]}
    </div>
  );
}