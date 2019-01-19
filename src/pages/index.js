import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <>
    <h1>Atomic Gatsby</h1>
    <h2>Home of the Gatsby Solos</h2>
    <ul>
      <li>
        <Link to="/solos/gatsby-solo">gatsby-solo</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-helmet">gatsby-solo-helmet</Link>
      </li>
      <li>
        <Link to="/solos/gatsby-solo-typography">gatsby-solo-typography</Link>
      </li>
    </ul>
  </>
);
