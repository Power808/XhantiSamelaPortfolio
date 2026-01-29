"use client";

import React, { useEffect, useState } from 'react';
import styles from './NameAnimation.module.css';

const NameAnimation: React.FC = () => {
    const line1 = "XHANTILOMZI";
    const line2 = "SAMELA";
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpened(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={styles.nameWrapper}>
                <div className={styles.line}>
                    {line1.split("").map((char, i) => (
                        <span
                            key={`l1-${i}`}
                            className={`${styles.letter} ${isOpened ? styles.animate : ''}`}
                            style={{
                                transitionDelay: `${i * 0.1 + 0.5}s`,
                                '--start-y': '200px',
                                '--start-rotate': '15deg'
                            } as React.CSSProperties}
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <div className={styles.line}>
                    {line2.split("").map((char, i) => (
                        <span
                            key={`l2-${i}`}
                            className={`${styles.letter} ${isOpened ? styles.animate : ''}`}
                            style={{
                                transitionDelay: `${(line1.length + i) * 0.1 + 0.6}s`,
                                '--start-y': '300px',
                                '--start-rotate': '-15deg'
                            } as React.CSSProperties}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NameAnimation;
