import React, { useState } from "react";
import { uploadFile, redactText } from "../api";

function UploadPage() {
    const [result, setResult] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [redacted, setRedacted] = useState(null);

    const handleFile = async (file) => {
        setLoading(true);
        try {
            const data = await uploadFile(file);
            setResult(data);
        } catch (err) {
            console.error("Upload failed:", err);
        }
        setLoading(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const getRiskColor = (level) => {
        if (level === "LOW") return "green";
        if (level === "MEDIUM") return "orange";
        if (level === "HIGH") return "darkorange";
        if (level === "CRITICAL") return "red";
        return "black";
    };

    return (
        <div style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>AI Privacy Risk Analyzer</h1>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                    border: "2px dashed #555",
                    padding: "40px",
                    textAlign: "center",
                    backgroundColor: dragActive ? "#f0f0f0" : "white",
                    marginTop: "20px",
                    cursor: "pointer"
                }}
            >
                Drag & Drop your file here
                <br />
                or
                <br />
                <input
                    type="file"
                    onChange={(e) => handleFile(e.target.files[0])}
                    style={{ marginTop: "10px" }}
                />
            </div>

            {loading && <p>Analyzing file...</p>}

            {result && (
                <div style={{ marginTop: "30px" }}>
                    <h2>Risk Dashboard</h2>
                    <p><strong>Risk Score:</strong> {result.risk_score}</p>
                    <p><strong>Risk Level:</strong> {result.risk_level}</p>
                    <p><strong>Total Flags:</strong> {result.total_flags}</p>

                    <h3 style={{ marginTop: "20px" }}>Detected Sensitive Data:</h3>

                    <div>
                        {result.findings.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    borderRadius: "5px"
                                }}
                            >
                                <strong>Type:</strong> {item.type}
                                <br />
                                <strong>Value:</strong> {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <h2>Risk Dashboard</h2>
            {result && (
                <>
                    <div
                        style={{
                            height: "20px",
                            width: "100%",
                            backgroundColor: "#eee",
                            borderRadius: "10px",
                            marginBottom: "10px"
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${result.risk_score}%`,
                                backgroundColor: getRiskColor(result.risk_level),
                                borderRadius: "10px"
                            }}
                        />
                    </div>

                    <p>
                        <strong>Risk Score:</strong> {result.risk_score}
                    </p>

                    <p style={{ color: getRiskColor(result.risk_level) }}>
                        <strong>Risk Level:</strong> {result.risk_level}
                    </p>

                    <p><strong>Total Flags:</strong> {result.total_flags}</p>

                    <button
                        onClick={async () => {
                            const data = await redactText(result.text_preview);
                            setRedacted(data.redacted_text);
                        }}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            cursor: "pointer"
                        }}
                    >
                        Generate Redacted Version
                    </button>
                </>
            )}
            {redacted && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Redacted Output:</h3>
                    <div
                        style={{
                            backgroundColor: "#f5f5f5",
                            padding: "15px",
                            borderRadius: "5px",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {redacted}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UploadPage;