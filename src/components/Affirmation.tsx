import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Images from '../images/ImagesDir';
const Affirmation: React.FC = () => {
    const [affirmation, setAffirmation] = useState('');
    async function getAffirmation() {
        await axios
            .get('https://dulce-affirmations-api-39977e6214e6.herokuapp.com/api/affirmation')
            .then((res) => {
                const response = JSON.stringify(Object.values(res.data[0])).replace(/[[\]"']+/g, '');
                console.log(res, response);
                setAffirmation(response);
            })
            .catch((err) => {
                throw err;
            });
    }
    function BackgroundSwitch() {
        const backgrounds = [Images.sky1, Images.sky2, Images.sky3, Images.sky4, Images.sky5];
        const random = Math.floor(Math.random() * backgrounds.length);
        const selectedBackground = backgrounds[random];
        const card = document.getElementById('card');
        if (card) {
            card.style.backgroundImage = `url(${selectedBackground})`;
            card.style.backgroundSize = 'cover';
        }
    }

    useEffect(() => {
        getAffirmation();
        BackgroundSwitch();
    }, []);

    return (
        <div className="max-w-2xl rounded overflow-hidden shadow-2xl m-auto w-2/3" id="card">
            <div className="p-20 text-center text-white shadow-text">
                <div className="font-bold text-xl mb-2">Daily Affirmation:</div>
                <p id="message" className="font-bold text-base capitalize">
                    {affirmation}
                </p>
            </div>
        </div>
    );
};

export default Affirmation;
