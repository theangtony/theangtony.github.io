import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major">
          <h2>
            ah... i see what you did
            <br />
            that url does not exist
          </h2>
          <h3>
            <a href="/">want to go back?</a>
          </h3>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
