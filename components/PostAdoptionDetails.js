import React from 'react';
import ReadSection from './ReadSection';

const FactsDetails = () => {
    return (
        <section className="service-area volunteer-area text-center">
            <img src="/images/heart-icon1.png" alt="" className="heart-icon heart-icon-1" />
            <img src="/images/heart-icon2.png" alt="" className="heart-icon heart-icon-2" />
            <img src="/images/heart-icon3.png" alt="" className="heart-icon heart-icon-3" />
            <img src="/images/heart-icon4.png" alt="" className="heart-icon heart-icon-4" />
            <img src="/images/heart-icon5.png" alt="" className="heart-icon heart-icon-5" />
            <img src="/images/heart-icon6.png" alt="" className="heart-icon heart-icon-6" />
            <img src="/images/heart-icon7.png" alt="" className="heart-icon heart-icon-7" />
            <img src="/images/heart-icon8.png" alt="" className="heart-icon heart-icon-8" />
            <img src="/images/heart-icon9.png" alt="" className="heart-icon heart-icon-9" />
            <img src="/images/heart-icon10.png" alt="" className="heart-icon heart-icon-10" />
            <img src="/images/heart-icon11.png" alt="" className="heart-icon heart-icon-11" />
            <div className="container">
                <ReadSection
                    paragraphs={["post-adoption:p1","post-adoption:p2","post-adoption:p3","post-adoption:p4","post-adoption:p5","post-adoption:p6","post-adoption:p7","post-adoption:p8","post-adoption:p9","post-adoption:p10","post-adoption:p11","post-adoption:p12","post-adoption:p13","post-adoption:p14","post-adoption:p15","post-adoption:p16","post-adoption:p17","post-adoption:p18"]}
                />                 
            </div>
        </section>
    );
};

export default FactsDetails;
