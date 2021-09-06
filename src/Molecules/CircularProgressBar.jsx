import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';


import 'react-circular-progressbar/dist/styles.css';

// import "../Styles/Molecules/CircularProgressBar.css";

const CircularProgressBar = () => {
    const percentage = 40;
    return (        
            <CircularProgressbar
                percentage={percentage}
                text={`${percentage}%`}
                value={40}
                strokeWidth={8}               
                styles={{                
                    path: {
                        // Path color
                        stroke: '#FED300',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    trail: {
                        // Trail color                    
                        stroke: '#FF7A4F'
                    },
                    // Customize the text
                    text: {                    
                        fill: 'white',
                        fontFamily: 'gilroy-bold',                      
                        fontSize: '2.8vh',
                    },                             
                }}
            />        
    );
};

export default CircularProgressBar;