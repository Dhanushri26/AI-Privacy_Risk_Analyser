import { useState } from "react";
import { uploadFile, redactText } from "../api";

import AppLayout from "../layout/AppLayout";
import FileUploadZone from "../components/FileUploadZone";
import RiskSummaryCards from "../components/RiskSummaryCards";
import RiskProgressBar from "../components/RiskProgressBar";
import FindingsList from "../components/FindingsList";
import RedactionPanel from "../components/RedactionPanel";

export default function UploadPage() {
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redacted, setRedacted] = useState(null);

  const handleFile = async (file) => {
    if (!file) return;
    setLoading(true);
    try {
      const data = await uploadFile(file);
      setResult(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <AppLayout>
      <FileUploadZone
        dragActive={dragActive}
        handleDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFile(e.dataTransfer.files[0]);
        }}
        handleDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        handleDragLeave={() => setDragActive(false)}
        handleFile={handleFile}
        loading={loading}
      />

      <RiskSummaryCards result={result} />
      <RiskProgressBar score={result?.risk_score} />
      <FindingsList findings={result?.findings} />
      <RedactionPanel
        result={result}
        redactText={redactText}
        setRedacted={setRedacted}
      />

      {redacted && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Redacted Output</h3>
          <div className="text-sm text-slate-600 whitespace-pre-wrap">
            {redacted}
          </div>
        </div>
      )}
    </AppLayout>
  );
}