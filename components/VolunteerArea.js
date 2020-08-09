import React from 'react';
import useTranslation from 'next-translate/useTranslation';

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
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">{t('adoption:adoption_procedure')}</h2>
                            <div className="section__meta">
                                <span><a href="/adoption/Questionare.docx" download>{t('adoption:questionare')}</a> | </span>
                                <span><a href="/adoption/Adoption_agreement.docx" download>{t('adoption:contract')}</a></span>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <p className="section__desc">{t('adoption:instructions')}</p>
                        <p className="section__desc">{t('adoption:instructions_2')}</p>
                        <p className="section__desc">{t('adoption:instructions_3')}</p>
                        <p className="section__desc">{t('adoption:instructions_4')}</p>
                    </div>
                </div>                   
            </div>
        </section>
    );
};

export default VolunteerArea;
