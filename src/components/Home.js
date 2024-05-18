import React from 'react';
import Bio from './Bio'
import Projects from './Projects';

const Home = () => {
    return (
        <div className="home-container">
            <Bio />
            <Projects />
        </div>
    )
}

export default Home;