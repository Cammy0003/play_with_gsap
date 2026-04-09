import React, { useState, type FormEvent } from 'react';
import ScanLineAnimator from "./scan_line_animator.tsx"; // PascalCase for React component usage

const scan_line_loader_page: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [displayText, setDisplayText] = useState<string>("");
    const [animKey, setAnimKey] = useState<number>(0);

    const handleTriggerAnimation = (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Update the text and increment key to force a re-mount of the animator
        setDisplayText(inputValue);
        setAnimKey(prev => prev + 1);
    };

    return (
        <div style={styles.pageContainer}>
            <form onSubmit={handleTriggerAnimation} style={styles.inputSection}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter text to scan..."
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Initialize Scan
                </button>
            </form>

            <div style={styles.outputSection}>
                {/* The key prop forces the animator to restart the GSAP timeline
                    every time the button is clicked. */}
                {displayText && (
                    <ScanLineAnimator
                        key={animKey}
                        text={displayText}
                        className="scan-text-output"
                    />
                )}
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'monospace'
    },
    inputSection: {
        marginBottom: '50px',
        display: 'flex',
        gap: '10px'
    },
    input: {
        padding: '10px',
        fontSize: '1rem',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        color: '#fff',
        borderRadius: '4px',
        width: '300px'
    },
    button: {
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#00ff41',
        color: '#000',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px'
    },
    outputSection: {
        fontSize: '2.5rem',
        maxWidth: '800px',
        textAlign: 'center'
    }
};

export default scan_line_loader_page;