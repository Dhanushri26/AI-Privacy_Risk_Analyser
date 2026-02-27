import { Lock, Eye, FileSearch, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "PII Detection",
    description: "Automatically identifies personal identifiable information including names, emails, SSNs, and addresses.",
  },
  {
    icon: FileSearch,
    title: "Compliance Check",
    description: "Validates documents against GDPR, CCPA, HIPAA, and other regulatory frameworks.",
  },
  {
    icon: Lock,
    title: "Data Exposure Mapping",
    description: "Maps how sensitive data flows through your documents and highlights exposure points.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Scoring",
    description: "Assigns granular risk scores with actionable remediation steps for each finding.",
  },
];

const HowItWorks = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Advanced AI scans every layer of your document to surface privacy risks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
