import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import VolunteerArea from "../components/VolunteerArea";
import useTranslation from 'next-translate/useTranslation';

const AdoptionPage = () => {
    const {t} = useTranslation();
    return (
        <Layout pageTitle="Alba's Heaven by Marijke Klein">
            <NavOne currentPage="adoption"/>
            <PageHeader title={t('adoption:information')} />
            <VolunteerArea />
            <Footer />
        </Layout>
    );
};

export default AdoptionPage;
