import { ShieldAlert, XCircle, AlertTriangle, Info } from "lucide-react";

export default function FindingsList({ findings }) {
  if (!findings || findings.length === 0) return null;

  const severityRank = (level) => {
  const order = {
    CRITICAL: 4,
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1,
  };
  return order[level] || 0;
};

  return (
    <div className="mt-20 max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      <div className="flex items-center gap-3 px-10 py-7 border-b border-slate-200 bg-slate-50">
        <ShieldAlert className="w-6 h-6 text-teal-600" />
        <h2 className="text-xl font-semibold text-slate-800">
          Risk Findings
        </h2>
      </div>

      <div className="divide-y divide-slate-200">
        {[...findings]
  .sort((a, b) => severityRank(b.severity) - severityRank(a.severity))
  .map((item, index) => (
    <FindingRow key={index} item={item} />
))}
      </div>
    </div>
  );
}

function FindingRow({ item }) {
  const severity = item.severity || "LOW";

  const config = {
    CRITICAL: {
      icon: <XCircle className="w-5 h-5" />,
      pill: "bg-red-100 text-red-700 border border-red-200",
      iconBg: "bg-gradient-to-br from-red-100 to-red-50 text-red-600",
      leftBorder: "border-l-4 border-red-500",
      tint: "bg-red-50/40",
    },
    HIGH: {
      icon: <AlertTriangle className="w-5 h-5" />,
      pill: "bg-amber-100 text-amber-700 border border-amber-200",
      iconBg: "bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600",
      leftBorder: "border-l-4 border-amber-500",
      tint: "bg-amber-50/40",
    },
    MEDIUM: {
      icon: <Info className="w-5 h-5" />,
      pill: "bg-teal-100 text-teal-700 border border-teal-200",
      iconBg: "bg-gradient-to-br from-teal-100 to-teal-50 text-teal-600",
      leftBorder: "border-l-4 border-teal-500",
      tint: "bg-teal-50/40",
    },
    LOW: {
      icon: <Info className="w-5 h-5" />,
      pill: "bg-slate-200 text-slate-700 border border-slate-300",
      iconBg: "bg-slate-100 text-slate-600",
      leftBorder: "border-l-4 border-slate-400",
      tint: "bg-slate-50",
    },
  };

  const styles = config[severity];

  return (
    <div
      className={`px-10 py-8 transition-all duration-300 hover:shadow-sm 
      ${styles.leftBorder} ${styles.tint}`}
    >
      <div className="flex items-start gap-6">

        <div className={`p-3 rounded-xl shadow-sm ${styles.iconBg}`}>
          {styles.icon}
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-lg font-semibold text-slate-800">
              {item.type}
            </span>

            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold tracking-wide ${styles.pill}`}
            >
              {severity}
            </span>

            {item.location && (
              <span className="text-sm text-slate-500 font-mono">
                {item.location}
              </span>
            )}
          </div>

          <p className="mt-3 text-slate-700 text-sm leading-relaxed max-w-3xl">
            {item.value}
          </p>

          {item.recommendation && (
            <p className="mt-4 text-sm font-medium text-teal-600">
              → {item.recommendation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}