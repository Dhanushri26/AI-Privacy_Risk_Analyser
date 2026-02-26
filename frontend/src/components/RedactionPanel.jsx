export default function RedactionPanel({ result, redactText, setRedacted }) {
  if (!result) return null;

  return (
    <div className="mt-8">
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        onClick={async () => {
          const data = await redactText(result.text_preview);
          setRedacted(data.redacted_text);
        }}
      >
        Generate Redacted Version
      </button>
    </div>
  );
}