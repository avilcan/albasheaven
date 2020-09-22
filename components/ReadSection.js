import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ReadSection = (props) => {
    const {t} = useTranslation();
    const {title, paragraphs, links} = props;
    return (
      <div className="row reading-section">
        <div className="section-heading service-heading">
            <div className="section-icon">
                 <img src="/images/section-icon.png" alt="section-icon" />
            </div>
             <div className="col-lg-8 mx-auto">
                {title &&
                    <h3 className="section__title">{t(title)}</h3>
                }
                {paragraphs && paragraphs.map(p => (
                    <p className="section__desc">{t(p)}</p>
                ))}
                {links && 
                    <div className="section__meta">
                        {links.map(link => (
                            <div>
                                <a href={link.url} download>{t(link.name)}</a>
                            </div>
                        ))}
                    </div>
                }
             </div>
        </div>
    </div> 
    )
}
export default ReadSection;