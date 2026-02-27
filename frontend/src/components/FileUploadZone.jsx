import { Upload } from "lucide-react";

export default function FileUploadZone({
  dragActive,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  handleFile,
  loading,
}) {
  return (
    <div className="w-full py-0 my-0 flex flex-col items-center justify-center px-6">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Analyze Your{" "}
        <span className="text-teal-600">Document</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-slate-500 text-center max-w-xl">
        Drop a file below and let our AI scan it for privacy
        vulnerabilities.
      </p>

      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-12 w-full max-w-2xl border-2 border-dashed rounded-3xl 
        p-16 text-center transition-all duration-300 
        ${
          dragActive
            ? "border-teal-500 bg-teal-50"
            : "border-slate-300 bg-white"
        }`}
      >
        {/* Upload Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-slate-200 rounded-2xl p-6">
            <Upload className="w-8 h-8 text-teal-600" />
          </div>
        </div>

        {/* Main Text */}
        <p className="text-lg font-semibold text-slate-800">
          Drop your document here
        </p>

        {/* File Types */}
        <p className="mt-2 text-slate-500 text-sm">
          PDF, DOC, TXT, CSV — up to 20MB
        </p>

        {/* Hidden File Input */}
        <input
          type="file"
          onChange={(e) => handleFile(e.target.files[0])}
          className="hidden"
          id="fileUpload"
        />

        {/* Click to Upload */}
        <label
          htmlFor="fileUpload"
          className="block mt-6 text-teal-600 font-medium cursor-pointer hover:underline"
        >
          Browse files
        </label>

        {loading && (
          <p className="mt-6 text-teal-600 animate-pulse font-medium">
            Analyzing file...
          </p>
        )}
      </div>
    </div>
  );
}