import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import FactsDetails from "../components/FactsDetails";
import useTranslation from 'next-translate/useTranslation';

const DonatePage = () => {
    const {t} = useTranslation();
    return (
        <Layout pageTitle="Alba's Heaven by Marijke Klein">
            <NavOne currentPage="facts"/>
            <PageHeader title={t('facts:title')} />
            <FactsDetails />
            <Footer />
        </Layout>
    );
};

export default DonatePage;