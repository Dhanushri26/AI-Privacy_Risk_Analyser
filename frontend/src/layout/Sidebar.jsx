export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white p-6">
      <h2 className="text-xl font-bold mb-10">Privacy Analyzer</h2>

      <nav className="space-y-4 text-slate-300">
        <div className="hover:text-white cursor-pointer">Dashboard</div>
        <div className="text-indigo-400 font-semibold">Upload</div>
        <div className="hover:text-white cursor-pointer">Reports</div>
        <div className="hover:text-white cursor-pointer">Insights</div>
      </nav>
    </div>
  );
}