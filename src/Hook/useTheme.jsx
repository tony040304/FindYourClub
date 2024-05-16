import { useEffect, useState } from 'react';

export const useTheme = (initialTheme) => {
    const [theme, setTheme] = useState(initialTheme);

    const handleChange = () => setTheme((curr)=>(curr === "light" ? "dark" : "light"));

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, handleChange];
};
