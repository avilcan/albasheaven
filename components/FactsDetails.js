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
                    title="facts:heading_section_1"
                    paragraphs={["facts:section_1_p1","facts:section_1_p2","facts:section_1_p3","facts:section_1_p4"]}
                />   

                <ReadSection
                    title="facts:heading_section_2"
                    paragraphs={["facts:section_2_p1"]}
                />   
                <ReadSection
                    title="facts:heading_section_3"
                    paragraphs={["facts:section_3_p1"]}
                />   
                <ReadSection
                    title="facts:heading_section_4"
                    paragraphs={["facts:section_4_p1","facts:section_4_p2","facts:section_4_p3","facts:section_4_listName","facts:section_4_op1","facts:section_4_op2","facts:section_4_op3","facts:section_4_p4","facts:section_4_p5","facts:section_4_p6"]}
                />
                <ReadSection
                    title="facts:heading_section_5"
                    paragraphs={["facts:section_5_p1","facts:section_5_p2","facts:section_5_p3"]}
                />
                <ReadSection
                    title="facts:heading_section_6"
                    paragraphs={["facts:section_6_p1","facts:section_6_p2","facts:section_6_p3"]}
                /> 
                <ReadSection
                    title="facts:heading_section_7"
                    paragraphs={["facts:section_7_p1","facts:section_7_p2","facts:section_7_p3","facts:section_7_p4"]}
                />
                <ReadSection
                    title="facts:heading_section_8"
                    paragraphs={["facts:section_8_p1","facts:section_8_p2","facts:section_8_p3"]}
                />
                <ReadSection
                    title="facts:heading_section_9"
                    paragraphs={["facts:section_9_p1","facts:section_9_p2","facts:section_9_p3","facts:section_9_p4","facts:section_9_p5","facts:section_9_p6"]}
                />
                <ReadSection
                    title="facts:heading_section_10"
                    paragraphs={["facts:section_10_p1","facts:section_10_p2","facts:section_10_p3","facts:section_10_p4"]}
                />  
                <ReadSection
                    title="facts:heading_section_11"
                    paragraphs={["facts:section_11_p1","facts:section_11_p2","facts:section_11_p3","facts:section_11_p4","facts:section_11_p5","facts:section_11_p6","facts:section_11_p7","facts:section_11_p8","facts:section_11_p9"]}
                /> 
                <ReadSection
                    title="facts:heading_section_12"
                    paragraphs={["facts:section_12_p1","facts:section_12_p2"]}
                />                      
            </div>
        </section>
    );
};

export default FactsDetails;
