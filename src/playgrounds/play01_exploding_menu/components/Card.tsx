import React from "react";

interface CardProps {
    title?: string;
    children: React.ReactNode;  // allows nested elements
    className?: string;         // for external styling flexibility
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className, borderColor, backgroundColor, textColor }) => {
    const cardStyle: React.CSSProperties = {
        // Essential Playing Card Geometry
        width: '250px',            // Base width; can be changed to rem or vw
        aspectRatio: '2.5 / 3.5',  // Enforces the 5:7 ratio

        // Styling
        border: `5px solid ${borderColor || '#ddd'}`,
        borderRadius: '12px',      // Slightly higher for card aesthetics
        padding: '16px',
        margin: '16px',
        backgroundColor: backgroundColor || 'white',
        color: textColor || 'black',

        // Ensure content doesn't break the ratio
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',   // Critical: includes border/padding in dimensions
    };

    return (
        <div style={cardStyle} className={`custom-card ${className}`}>
            {title && <h2 style={{ fontSize: '1.2rem' }}>{title}</h2> }
            <div className="card-content" style={{ flex: 1, overflow: 'hidden' }}>
                {children}
            </div>
        </div>
    );
};

export default Card;