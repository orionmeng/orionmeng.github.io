import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  external
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (external) {
    return (
      <a
        href={path}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={path}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
