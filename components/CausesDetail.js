import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const CausesDetail = () => {
    const {t} = useTranslation();
    return (
        <section className="causes-detail-area" id="cause-detail">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/img12.jpg" alt="" />
                                </div>
                                <div className="blog-inner-content-2">
                                    <p className="causes__text">
                                        {t('home:missionFull')}
                                    </p>
    
                                    <div className="inner-causes-img-box row">
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item1">
                                                <img src="/images/shelter_s.jpg" alt="our shelter" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="inner-causes-img-item inner-causes-img-item2">
                                                <img src="/images/rescued_dogs_1_S.jpg" alt="dog rescue" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default CausesDetail;
