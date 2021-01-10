import React from 'react';
import './Head.scss';

const Head = () => (
  <section className="category head">
    <h1 className="head__title">Create a new repository</h1>
    <p className="head__intro">
      A repository contains all project files, including the revision history.
      Already have a project repository elsewhere?{' '}
      <a className="head__intro-link" href="/">
        Import a repository.
      </a>
    </p>
  </section>
);

export { Head as default };
