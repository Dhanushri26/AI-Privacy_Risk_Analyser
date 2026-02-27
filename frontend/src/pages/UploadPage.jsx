/* eslint-disable no-unused-vars */
import { useState } from "react";
import { uploadFile, redactText } from "../api";

import FileUploadZone from "../components/FileUploadZone";
import RiskProgressBar from "../components/RiskProgressBar";
import RedactionPanel from "../components/RedactionPanel";
import FindingsList from "../components/FindingsList";
import Footer from "../layout/footer";
export default function UploadPage() {
  return (
    <section id="upload-section">
      <UploadPageContent />
    </section>
  );
}
function UploadPageContent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redacted, setRedacted] = useState(null);

  const handleFileSelect = (file) => {
    if (!file) return;
    setSelectedFile(file);
    setResult(null); 
  };

  const handleRunAnalysis = async () => {
    if (!selectedFile) return;

    setLoading(true);
    try {
      const data = await uploadFile(selectedFile);
      setResult(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

 return (
  <div className="py-10 px-4 mx-auto transition-all duration-500">
    {!result && (
      <FileUploadZone
        dragActive={dragActive}
        handleDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFileSelect(e.dataTransfer.files[0]);
        }}
        handleDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        handleDragLeave={() => setDragActive(false)}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onRunAnalysis={handleRunAnalysis}
        analyzing={loading}
      />
    )}

    {result && (
      <div className="animate-fade-up">

        <div className="mt-6">
          <RiskProgressBar
            score={result?.risk_score}
            result={result}
          />
        </div>
        <div className="text-center mt-16">
          <button
            onClick={() => {
              setResult(null);
              setSelectedFile(null);
              setRedacted(null);
            }}
            className="text-sm text-teal-600 hover:text-teal-700 font-medium transition"
          >
            Analyze another document →
          </button>
        </div>
        <FindingsList findings={result?.findings} />

        {/* <RedactionPanel
          result={result}
          redactText={redactText}
          setRedacted={setRedacted}
        /> */}
        
      </div>
    )}

  </div>
);
}