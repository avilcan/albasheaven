import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import EntryArea from "../components/EntryArea";
import CausesDetail from "../components/CausesDetail";

const HomePage = () => {
    return (
        <Layout pageTitle="Alba's Heaven by Marijke Klein">
          <NavOne />
          <SliderOne />
          <EntryArea />
          <CausesDetail />
          <Footer />
        </Layout>
    );
};

export default HomePage;
