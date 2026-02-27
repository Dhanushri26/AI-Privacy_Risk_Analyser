import { Upload, FileText, X, Shield } from "lucide-react";

export default function FileUploadZone({
  dragActive,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  handleFile,
  selectedFile,
  setSelectedFile,
  onRunAnalysis,
  analyzing,
}) {
  const formatSize = (bytes) => {
    return (bytes / 1024).toFixed(1) + " KB";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight">
        Analyze Your{" "}
        <span className="text-teal-600">Document</span>
      </h1>

      <p className="mt-6 text-slate-500 text-center max-w-2xl text-lg">
        Drop a file below and let our AI scan it for privacy vulnerabilities.
      </p>
      {!selectedFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById("fileUpload").click()}
          className={`
            mt-16 w-full max-w-3xl
            border border-dashed rounded-3xl
            px-20 py-24
            text-center
            transition-all duration-300
            cursor-pointer
            ${
              dragActive
                ? "border-teal-500 bg-teal-50"
                : "border-slate-300 bg-white"
            }
          `}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 rounded-2xl p-6 shadow-sm">
              <Upload className="w-10 h-10 text-teal-600" />
            </div>
          </div>

          <p className="text-xl font-semibold text-slate-800">
            Drop your document here
          </p>

          <p className="mt-3 text-slate-500 text-base">
            PDF, DOC, TXT, CSV — up to 20MB
          </p>

          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="hidden"
            id="fileUpload"
          />
        </div>
      )}
      {selectedFile && (
        <>
          <div className="mt-16 w-full max-w-3xl border border-dashed border-teal-300 rounded-3xl px-8 py-10 bg-white">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="bg-slate-100 p-4 rounded-2xl">
                  <FileText className="text-teal-600 w-7 h-7" />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {formatSize(selectedFile.size)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedFile(null)}
                className="text-slate-400 hover:text-red-500 transition"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <button
            onClick={onRunAnalysis}
            disabled={analyzing}
            className="mt-10 w-full max-w-3xl bg-teal-600 hover:bg-teal-700 
            text-white font-semibold py-4 rounded-2xl 
            transition-all duration-300 shadow-md hover:shadow-lg
            flex items-center justify-center gap-3"
          >
            <Shield size={20} />
            Run Privacy Analysis
          </button>
        </>
      )}

      {analyzing && (
        <div className="mt-8 w-full max-w-3xl">
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-teal-600 animate-progress"></div>
          </div>
        </div>
      )}
    </div>
  );
}