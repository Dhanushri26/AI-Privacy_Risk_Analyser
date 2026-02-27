import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    const footerStyle = {
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "1rem 1.25rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.9rem",
        gap: "0.5rem",
        background: "transparent",
    };
    const linkStyle = { color: "inherit", textDecoration: "none", marginLeft: "0.75rem" };

    return (
        <footer role="contentinfo" style={footerStyle}>
            <div>
                <strong>AI Privacy Analyzer</strong> © {year}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <nav aria-label="Footer links">
                    {/* <a
                        href="/privacy"
                        style={linkStyle}
                        title="Privacy Policy"
                    >
                        Privacy
                    </a>
                    <a
                        href="/terms"
                        style={linkStyle}
                        title="Terms of Service"
                    >
                        Terms
                    </a> */}
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        title="Project repository"
                    >
                        GitHub
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;