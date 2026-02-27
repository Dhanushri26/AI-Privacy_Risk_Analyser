import { ShieldAlert, XCircle, AlertTriangle, Info } from "lucide-react";

export default function FindingsList({ findings }) {
  if (!findings || findings.length === 0) return null;

  return (
    <div className="mt-14 bg-white rounded-3xl border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 px-8 py-6 border-b border-slate-200">
        <ShieldAlert className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-slate-800">
          Risk Findings
        </h2>
      </div>

      {/* Findings */}
      <div className="divide-y divide-slate-200">
        {findings.map((item, index) => (
          <FindingRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function FindingRow({ item }) {
  const severity = item.severity || "LOW";

  const severityStyles = {
    CRITICAL: "bg-red-100 text-red-600",
    HIGH: "bg-amber-100 text-amber-600",
    MEDIUM: "bg-teal-100 text-teal-600",
    LOW: "bg-slate-100 text-slate-600",
  };

  const icons = {
    CRITICAL: <XCircle className="w-5 h-5 text-red-500" />,
    HIGH: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    MEDIUM: <Info className="w-5 h-5 text-teal-500" />,
    LOW: <Info className="w-5 h-5 text-slate-500" />,
  };

  return (
    <div className="px-8 py-6">
      <div className="flex items-start gap-4">
        
        {/* Icon */}
        <div className="mt-1">
          {icons[severity]}
        </div>

        {/* Content */}
        <div className="flex-1">
          
          {/* Title Row */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-slate-800">
              {item.type}
            </span>

            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${severityStyles[severity]}`}
            >
              {severity}
            </span>

            {item.location && (
              <span className="text-sm text-slate-400">
                {item.location}
              </span>
            )}
          </div>

          {/* Value / Description */}
          <p className="mt-2 text-slate-600 text-sm">
            {item.value}
          </p>

          {/* Recommendation */}
          {item.recommendation && (
            <p className="mt-2 text-teal-600 text-sm font-medium">
              → {item.recommendation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}