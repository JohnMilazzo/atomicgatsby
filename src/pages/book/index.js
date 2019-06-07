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
    <h1>Atomic Gatsby - The Book</h1>
    <h2>Volume 1</h2>
  </>
);