import React from 'react';

const RevealText = ({ text }) => {
    const lines = text.split('\n'); // Split text into lines if multiline

    return (
        <span className="reveal-text">
            {lines.map((line, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {line}
                </span>
            ))}
        </span>
    );
};

export default RevealText;
