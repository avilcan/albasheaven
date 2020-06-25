import React, {Component} from 'react';
import withTrasnlation from 'next-translate/withTranslation';
import ModalVideo from 'react-modal-video';

class EntryArea extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    handleModal = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const { t, lang } = this.props.i18n
        return (
            <section className="entry-area">
                <div className="container">
                    <div className="row entry-static-wrap">
                        <div className="col-lg-3">
                            <div className="entry-static-box entry-static-box1">
                                <div className="section-icon">
                                    <img src="/images/section-icon.png" alt="section-icon" />
                                </div>
                                <h4 className="entry__title">{t('common:our_project')}</h4>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="entry-video-img">
                                            <img src="/images/shelter-cover.jpg" alt="entry-video-img" />
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ywcNsJb2v2U' onClose={this.handleModal} />
                                                <div onClick={this.handleModal} className="mfp-iframe video-play-btn"
                                                   title="Play Video"><i className="fa fa-play"></i>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="entry-video-text">
                                            <h4 className="entry__title">{t('home:mission')}</h4>
                                            <p className="entry__text">{t('common:shelter_ro')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTrasnlation(EntryArea);