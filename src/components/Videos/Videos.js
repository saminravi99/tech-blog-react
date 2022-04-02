import React from 'react';
import "./Videos.css"

const Videos = () => {
    return (
        <div className="video-container">

            <h3 className="text-center mt-5">Introducing iPhone 13 Pro </h3>

            <p className="text-center mt-4">iPhone 13 just got release. Here is what you need to know about the new iPhone.</p>
            
            <div className="d-flex justify-content-center mt-lg-5 mt-2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/m43rh-pI0P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    );
};

export default Videos;