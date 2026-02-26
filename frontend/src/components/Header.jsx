import { Shield, Zap, Eye } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
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
    </header>
  );
};

export default Header;