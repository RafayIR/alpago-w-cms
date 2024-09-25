import React, { useEffect, useState } from 'react';
import Count from '../components/common/Count';
import { useInView } from 'react-intersection-observer';



const TextAnimation = ({ text }) => {
    const [characters, setCharacters] = useState([]);
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -10% 0px'
    });
    // Trigger animation only once

    useEffect(() => {
        const updatedCharacters = text.split('').map((char, index) => {
            // Determine if the character is a number
            const isNumber = !isNaN(parseInt(char));
            return { id: index, content: char, isNumber };
        });
        setCharacters(updatedCharacters);
    }, [text]);

    return (
        <div ref={ref} className={`text-animation ${inView ? 'animate' : ''}`}>
            {characters.map((item, index) => (
                <span key={item.id} className="char" style={{ '--index': index }}>
                    {item.isNumber ? (
                        parseInt(item.content) // Render Count component for numbers
                    ) : (
                        // Render the actual character or a non-breaking space if it's a space
                        item.content === ' ' ? '\u00A0' : item.content
                    )}
                </span>
            ))}
        </div>
    );
}

export default TextAnimation;