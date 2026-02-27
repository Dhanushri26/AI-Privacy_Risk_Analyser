import { Shield } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="bg-white border-b border-slate-200 px-8">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 border border-teal-200">
            <Shield className="h-5 w-5 text-teal-600" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            Priv<span className="text-teal-600">Guard</span>
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-teal-600"
                  : "text-slate-500 hover:text-slate-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/analyze"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-teal-600"
                  : "text-slate-500 hover:text-slate-800"
              }`
            }
          >
            Analyze
          </NavLink>
        </nav>
      </div>
    </div>
  );
}