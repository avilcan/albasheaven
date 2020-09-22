import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import ReadSection from './ReadSection';

const VolunteerArea = () => {
    const {t} = useTranslation();
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
                    title="common:adoption_procedure"
                    paragraphs={["adoption:instructions","adoption:instructions_2","adoption:instructions_3","adoption:instructions_4"]}
                    links={[{
                        url:"/adoption/Vragenlijst.docx",
                        name:"adoption:questionare"
                    }, {
                        url:"/adoption/Adoptieoveenkomt.docx",
                        name:"adoption:contract"
                    }]}
                />
                <ReadSection
                    title="common:adopt_from_nl"
                    paragraphs={["adoption:adopt_nl_description"]}
                />
                <ReadSection
                    title="common:adopt_from_ro"
                    paragraphs={["adoption:adopt_ro_description_1","adoption:adopt_ro_description_2","adoption:adopt_ro_description_3","adoption:adopt_ro_description_4","adoption:adopt_ro_description_5"]}
                />                      
            </div>
        </section>
    );
};

export default VolunteerArea;
