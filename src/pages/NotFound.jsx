import React from 'react';
import { DisplayLg, BodyLg } from '../components/Typography';
import { Link } from '../Link';
import './StaticPages.css';

export const NotFound = () => (
  <article className="static-page-layout">
    <header className="static-header">
      <DisplayLg className="static-title">That page wilted.</DisplayLg>
    </header>
    <div className="static-content">
      <BodyLg>
        There is no page at this address. Every salad still lives on the{' '}
        <Link to="/">recipe index</Link>.
      </BodyLg>
    </div>
  </article>
);
