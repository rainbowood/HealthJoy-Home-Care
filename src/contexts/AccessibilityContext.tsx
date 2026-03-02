import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
    textScale: number;
    enlargeText: () => void;
    shrinkText: () => void;
    resetText: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [textScale, setTextScale] = useState(() => {
        const saved = localStorage.getItem('textScale');
        return saved ? parseFloat(saved) : 100;
    });

    useEffect(() => {
        localStorage.setItem('textScale', textScale.toString());
        document.documentElement.style.setProperty('--text-scale', `${textScale}%`);
        document.documentElement.setAttribute('data-text-scale', textScale.toString());
    }, [textScale]);

    const enlargeText = () => {
        setTextScale(prev => Math.min(prev + 10, 150)); // Max 150%
    };

    const shrinkText = () => {
        setTextScale(prev => Math.max(prev - 10, 80)); // Min 80%
    };

    const resetText = () => {
        setTextScale(100);
    };

    return (
        <AccessibilityContext.Provider value={{ textScale, enlargeText, shrinkText, resetText }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};
