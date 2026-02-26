export default function FindingsList({ findings }) {
  if (!findings || findings.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-slate-700">
        Detected Sensitive Data
      </h3>

      {findings.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-sm border"
        >
          <div className="font-semibold text-slate-800">
            {item.type}
          </div>
          <div className="text-slate-500 text-sm">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}