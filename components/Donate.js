import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Donate = () => {
    const {t} = useTranslation();
    return (
        <section className="donate-area2">
            <div className="container">
                <div className="row donate-content-wrap">
                    <div className="col-lg-12">
                        <div className="donate-item">
                            <h3 className="donate__title">{t('donate:help_to_albasheaven')}</h3>
                            <p>{t('donate:cause_description')}</p>
                            <p>{t('donate:remote_adoption')}</p>
                            <p>{t('donate:donation_appreciated')}</p>
                            <p>{t('donate:donation_instructions')}</p>
                            <div className="donate-info-container">
                                <div className="col-lg-6 bank-details donate-info-item">
                                    <div className="sidebar-shared">
                                        <div className="side-widget blog-content">
                                            <div className="blog-item">
                                                <div className="blog-img">
                                                    <img src="/images/img15.jpg" alt="" />
                                                </div>
                                                <div className="blog-inner-content">
                                                    <h3 className="blog__title">Bank
                                                    </h3>
                                                    <ul className="blog__list">
                                                        <li><i className="fa fa-address-card-o"></i> A.M. KLEIN - VAN DER STAAY</li>
                                                        <li>NL06RABO0306955865</li>
                                                        <li>{t('donate:donation_details')}</li>
                                                    </ul>
                                                    <p className="blog__desc">{t('donate:thank_you')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 donate-info-item">
                                    <div className="sidebar-shared">
                                        <div className="side-widget blog-content">
                                            <div className="blog-item">
                                                <div className="blog-img">
                                                    <img src="/images/img15.jpg" alt="" />
                                                </div>
                                                <div className="blog-inner-content">
                                                    <ul className="blog__list">
                                                        <li><i className="fa fa-address-card-o"></i>{t('donate:our_details')}</li>
                                                        <li>{t('donate:kvk')}</li>
                                                        <li>{t('donate:regisstration_number')}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <h3 className="donate__title">Enter Your Donation</h3> */}
                            {/* <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="yellow-form">
                                                <input type="number" className="form-control" />
                                                    <span className="dollar-sign">$</span>
                                                    <span className="number-symble">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                        {/* <div className="donate-item">
                            <h3 className="donate__title">Personal Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Leave a Comment"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="donate-item">
                            <h3 className="donate__title">Payment Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Card Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="MM/YY" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Card Code (CVC)" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Billing Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="theme-btn submit__btn">donate now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget blog-content">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="/images/img15.jpg" alt="" />
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><Link href="/causes-detail"><a>They Want to Study</a></Link>
                                        </h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <p className="blog__desc">Raised by 25 donors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <div className="author-box">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta">created april 11, 2018</span>
                                        <h4 className="author__title">Organizer: <a href="#">Jessica Smith</a></h4>
                                        <ul className="author__list">
                                            <li><i className="fa fa-tag"></i> Education</li>
                                            <li><i className="fa fa-map-marker"></i> Wrightwood, Canada</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Donate;
