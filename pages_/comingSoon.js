import React from 'react';
import Layout from "../components/Layout";
import Footer from '../components/Footer';
import CommingSoonComponent from '../components/ComingSoon'

const HomePage = () => {
    return (
        <Layout pageTitle="Alba's Heaven by Marijke Klein">
          <CommingSoonComponent/>
          <Footer />
        </Layout>
    );
};

export default HomePage;
