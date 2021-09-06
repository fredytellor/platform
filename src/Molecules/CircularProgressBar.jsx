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
            // background={true}
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
                    stroke:'#FF7A4F'
                },
                // Customize the text
                text: {
                    // Text color
                    fill:'white',  
                    fontFamily:'gilroy-bold',                  
                    // Text size
                    fontSize: '2.8vh',
                    
                },
                // Customize background - only used when the `background` prop is true
                background: {
                    // fill: '#3e98c7',
                    // fill:'##FF7A4F'
                },

            }}
        />
        // <div className="circularprogressbar-div">
        //     <div className="circular">
        //         <div className="inner"></div>
        //         <div className="number">40%</div>
        //         <div className="circle">
        //             <div className="barleft">
        //                 <div className="progress"></div>
        //             </div>
        //             <div className="barright">
        //                 <div className="progress"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CircularProgressBar;