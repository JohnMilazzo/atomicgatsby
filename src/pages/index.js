import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

export default () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Atomic Gatsby</title>
      <meta name="description" content="Home of the Gatsby Solos" />
    </Helmet>
    <h1>Atomic Gatsby</h1>
    <h2>Home of the Gatsby Solos</h2>

    <h3>The Solos</h3>
    <ul>
      <li>
        <Link to="/solos/gatsby-solo">gatsby-solo</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-google-gtag">gatsby-solo-google-gtag</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-helmet">gatsby-solo-helmet</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-manifest">gatsby-solo-manifest</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-offline">gatsby-solo-offline</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-typography">gatsby-solo-typography</Link>
      </li>
    </ul>
    <h3>How To</h3>
    <ul>
      <li>
        <Link to="/how/perfect-lighthouse-audit-with-gatsby">
          How to Score a Perfect Lighthouse Audit with Gatsby
        </Link>
      </li>
    </ul>
  </>
);
