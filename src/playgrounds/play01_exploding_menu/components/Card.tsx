import React, { forwardRef } from "react";

interface CardProps {
    title?: string;
    children: React.ReactNode;  // allows nested elements
    className?: string;         // for external styling flexibility
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    style?: React.CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ title, children, className, borderColor, backgroundColor, textColor, style }, ref) => {
        const cardStyle: React.CSSProperties = {
            // Essential Playing Card Geometry
            alignSelf: 'center',
            width: '250px',            // Base width; can be changed to rem or vw
            aspectRatio: '2.5 / 3.5',  // Enforces the 5:7 ratio

            // Styling
            border: `5px solid ${borderColor || 'blue'}`,
            borderRadius: '12px',      // Slightly higher for card aesthetics
            padding: '16px',
            margin: '16px',
            backgroundColor: backgroundColor || 'white',
            color: textColor || 'black',
            fontSize: '1.2rem',

            // Ensure content doesn't break the ratio
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',   // Critical: includes border/padding in dimensions

            willChange: 'tranform, opacity', // Hint to the browser for GPU optimization
            ...style, // Merge external styles
        };

        return (
            <div
                ref = {ref}
                style={cardStyle}
                className={`custom-card shadow-xl ${className}`}
            >
                {title && <h2 style={cardStyle}>{title}</h2> }
                <div className="card-content" style={{ flex: 1, overflow: 'hidden' }}>
                    {children}
                </div>
            </div>
        );
    }
);

Card.displayName = "Card";  // debug forwardRef

export default Card;