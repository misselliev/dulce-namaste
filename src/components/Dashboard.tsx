import React from 'react';
import Affirmation from './Affirmation';
import Footer from './Footer';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto flex flex-col items-center h-screen">
            <Affirmation />
            <Footer />
        </div>
    );
};

export default Dashboard;
