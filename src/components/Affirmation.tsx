import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Affirmation: React.FC = () => {
    const [affirmation, setAffirmation] = useState('');
    async function getAffirmation() {
        await axios
            .get('http://localhost:3000/affirmation')
            .then((res) => {
                const response = JSON.stringify(Object.values(res.data[0])).replace(/[[\]"']+/g, '');
                setAffirmation(response);
            })
            .catch((err) => {
                throw err;
            });
    }
    useEffect(() => {
        getAffirmation();
    }, []);
    return (
        <div className="main">
            {' '}
            <div className="message">{affirmation}</div>
        </div>
    );
};

export default Affirmation;
