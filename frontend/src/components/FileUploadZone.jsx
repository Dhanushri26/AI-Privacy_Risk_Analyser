export default function FileUploadZone({
  dragActive,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  handleFile,
  loading,
}) {
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition 
      ${dragActive ? "border-indigo-500 bg-indigo-50" : "border-slate-300 bg-white"}`}
    >
      <p className="text-slate-600 text-lg font-medium">
        Drag & Drop file here
      </p>

      <p className="text-slate-400 my-2">or</p>

      <input
        type="file"
        onChange={(e) => handleFile(e.target.files[0])}
        className="mt-2"
      />

      {loading && (
        <p className="mt-4 text-indigo-600 animate-pulse">
          Analyzing file...
        </p>
      )}
    </div>
  );
}