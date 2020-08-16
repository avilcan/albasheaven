import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import useTranslation from 'next-translate/useTranslation';

const DonatePage = () => {
    const {t} = useTranslation();
    return (
        <Layout pageTitle="Alba's Heaven by Marijke Klein">
            <NavOne currentPage="donate"/>
            <PageHeader title={t('common:donate_now')} />
            <Donate />
            <Footer />
        </Layout>
    );
};

export default DonatePage;
