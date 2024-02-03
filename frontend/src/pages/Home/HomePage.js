import React from 'react';
import HeroSection from '../../components/HeroSection';
import TeamPage from './TeamPage';
import StoryPage from './StoryPage';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <StoryPage/>
            <TeamPage/>
        </div>
    );
}

export default HomePage;
