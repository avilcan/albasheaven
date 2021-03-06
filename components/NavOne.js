import React, {Component} from 'react';
import withTrasnlation from 'next-translate/withTranslation';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    onLocaleChange = (locale) => {
        console.log(locale)
    }

    render() {
        const { t, lang } = this.props.i18n
        const { currentPage } = this.props;
        return (
            <div>
                <header className="header-area">
                    <div className="header-top-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="top-action-content">
                                        <div className="info-box info-box-1 d-flex align-items-center">
                                            <ul className="d-flex align-items-center" style={{visibility:"hidden"}}>
                                                <li><a href="#"><i
                                                    className="fa fa-envelope"></i>albasheavenmk@gmail.com</a></li>
                                                <li><a href="#"><i className="fa fa-phone-square"></i>0620398116</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="top-action-content info-action-content">
                                        <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                            <ul className="top-action-list d-flex align-items-center">
                                                {/* <li className="action__text"><a href="#">login</a></li>
                                                <li className="action__text"><a href="#">register</a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                                                <li><a href="https://www.facebook.com/marijke.kleinvdstaay"><i className="fa fa-facebook"></i></a></li>
                                                {/* <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/images/logo-initial.jpg" alt="Alba's Heaven" title="Alba's Heaven" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-btn ml-auto">
                                            <Link href="/donate">
                                                <a className="theme-btn">{t('common:donate_now')}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        <li className="active"><Link href="/"><a>Home</a></Link></li>
                                                        <li>
                                                            <a href="/adoption">{t('common:adoption')}</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href={currentPage === 'adoption' ? '': '/adoption'}><a>{t('common:adoption_procedure')}</a></Link></li>
                                                                <li><Link href={currentPage === 'adoption' ? '#adopt-nl': '/adoption#adopt-nl'}><a>{t('common:adopt_from_nl')}</a></Link></li>
                                                                <li><Link href={currentPage === 'adoption' ? '#adopt-ro': '/adoption#adopt-ro'}><a>{t('common:adopt_from_ro')}</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        {/* <li><a href="#">events</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/events"><a>events</a></Link></li>
                                                                <li><Link href="/events-detail"><a>events detail</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">news</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/news"><a>news</a></Link></li>
                                                                <li><Link href="/single-news"><a>news detail</a></Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">pages</a>
                                                            <ul className="dropdown-menu-item">
                                                                <li><Link href="/about"><a>about</a></Link></li>
                                                                <li><Link href="/gallery"><a>gallery</a></Link></li>
                                                                <li><Link href="/volunteer"><a>become a volunteer</a></Link></li>
                                                                <li><Link href="/team"><a>our team</a></Link></li>
                                                                <li><Link href="/sponsor"><a>sponsors</a></Link></li>
                                                            </ul>
                                                        </li> */}
                                                        <li><Link href="/donate"><a>{t('common:donate')}</a></Link></li>
                                                        <li><Link href="/facts"><a>{t('common:facts')}</a></Link></li>
                                                        <li><Link href="/postAdoption"><a>{t('common:postAdoption')}</a></Link></li>
                                                        <li><Link href="/contact"><a>contact</a></Link></li>
                                                    </ul>
                                                    
                                                    {/* <ReactFlagsSelect defaultCountry="NL" countries={["NL", "GB","RO"]} onSelect={this.onLocaleChange} /> */}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                <li className="sidenav__item"><a href="/">home</a></li>
                                <li className="sidenav__item">
                                    <Link href="/adoption">
                                        <a href="#">{t('common:adoption')}</a>
                                    </Link>
                                </li>
                                {/* <li className="sidenav__item"><a href="#">event</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/events"><a>events</a></Link></li>
                                        <li><Link href="/events-detail"><a>events detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">news</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/news"><a>news</a></Link></li>
                                        <li><Link href="/single-news"><a>news detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">pages</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link href="/about"><a>about</a></Link></li>
                                        <li><Link href="/gallery"><a>gallery</a></Link></li>
                                        <li><Link href="/volunteer"><a>become a volunteer</a></Link></li>
                                        <li><Link href="/team"><a>our team</a></Link></li>
                                        <li><Link href="/sponsor"><a>sponsors</a></Link></li>
                                    </ul>
                                </li> */}
                                <li className="sidenav__item"><Link href="/donate"><a>{t('common:donate')}</a></Link></li>
                                <li className="sidenav__item"><Link href="/facts"><a>{t('common:facts')}</a></Link></li>
                                <li className="sidenav__item"><Link href="/postAdoption"><a>{t('common:postAdoption')}</a></Link></li>
                                <li className="sidenav__item"><Link href="/contact"><a>contact</a></Link></li>
                            </ul>
                            <ul className="side-social">
                                <li><a href="https://www.facebook.com/marijke.kleinvdstaay"><i className="fa fa-facebook"></i></a></li>
                                {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li> */}
                            </ul>
                            <div className="side-btn">
                                <Link href="/donate"><a className="theme-btn">{t('common:donate_now')}</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withTrasnlation(NavOne);