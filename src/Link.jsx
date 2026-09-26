import React from 'react';
import { navigate } from './router';

export function Link({ to, children, onClick, ...props }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (props.target && props.target !== '_self') return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
