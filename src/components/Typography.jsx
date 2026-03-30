import React from 'react';

export const DisplayLg = ({ children, className = '', ...props }) => (
  <h1 className={`display-lg ${className}`} {...props}>{children}</h1>
);

export const TitleLg = ({ children, className = '', ...props }) => (
  <h2 className={`title-lg ${className}`} {...props}>{children}</h2>
);

export const TitleSm = ({ children, className = '', ...props }) => (
  <h3 className={`title-sm ${className}`} {...props}>{children}</h3>
);

export const BodyLg = ({ children, className = '', ...props }) => (
  <p className={`body-lg ${className}`} {...props}>{children}</p>
);

export const LabelMd = ({ children, className = '', ...props }) => (
  <span className={`label-md ${className}`} {...props}>{children}</span>
);

export const LabelSm = ({ children, className = '', ...props }) => (
  <span className={`label-sm ${className}`} {...props}>{children}</span>
);
