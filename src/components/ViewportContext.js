import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useViewport from '../hooks/useViewport';

// Create context for viewport
const ViewportContext = createContext();

// Provider component to wrap around parts of the app that need viewport info
export const ViewportProvider = ({ children }) => {
    const viewport = useViewport();
    return (
        <ViewportContext.Provider value={viewport}>
            {children}
        </ViewportContext.Provider>
    );
};

ViewportProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useViewportContext = () => useContext(ViewportContext);
