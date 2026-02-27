import { Shield } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-white shadow-sm px-8 py-2 flex justify-between">
            <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight">
            Priv<span className="text-primary">Guard</span>
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#analyze" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analyze</a>
        </nav>
      </div>
    </div>
  );
}