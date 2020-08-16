import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Contact = () => {
    const {t} = useTranslation();
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <div className="section-icon">
                                <img src="/images/section-icon.png" alt="section-icon" />
                            </div>
                            <h2 className="section__title">{t('contact:get_in_touch')}</h2>
                            <p className="section__desc">
                                {t('contact:general_info')}
                            </p>
                            <ul className="section__list">
                                {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                                <li><a href="https://www.facebook.com/marijke.kleinvdstaay"><i className="fa fa-facebook"></i></a></li>
                                {/* <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-6">
                        <div className="form-shared">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Full Name" />
                                    </div>

                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input className="form-control" type="email" name="email"
                                               placeholder="Email Address" />
                                    </div>

                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="number" name="phone"
                                               placeholder="Phone Number" />
                                    </div>

                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message"
                                                  placeholder="Write a Message"></textarea>
                                    </div>

                                    <div className="col-lg-12 col-sm-12">
                                        <button className="theme-btn submit__btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
                <div className="row contact-detail-action">
                    <div className="col-lg-4">
                        <div className="contact-item contact-item1">
                            <h3 className="contact__title">MARIJKE KLEIN</h3>
                            <p className="contact__desc">
                                <div>Whatsapp: 06 20 39 81 16</div>
                                <div>albasheavenmk@gmail.com</div>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item2">
                            <h3 className="contact__title">ESTHER - {t('contact:volunteer')}</h3>
                            <p className="contact__desc">
                                <div>Whatsapp: 06 29 30 44 07</div>
                                <div>albasheaveneg@gmail.com</div>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-item contact-item3">
                            <h3 className="contact__title">SASKIA - {t('contact:volunteer')}</h3>
                            <p className="contact__desc">
                                <div>Wahtsapp: 06 83 89 70 02</div>
                                <div>albasheavensl@gmail.com</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
