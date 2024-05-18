import { useState, useEffect } from "react";

const useViewport = () => {
    // State to store current viewport size
    const [viewportSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Function to update state within the current viewport size
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Clean up event listener on component unmount 
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures effect only runs once.

    // Return current viewport size

    return viewportSize;
};

export default useViewport;