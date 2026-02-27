import Topbar from "./Topbar";

export default function AppLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-100">
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}