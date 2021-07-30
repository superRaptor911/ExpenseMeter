import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, setValue, placeholder, className, type, children}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      value={value}
      type={type}
      onChange={e => {
        setValue(e.target.value);
      }}>
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ]),
    ),
  ]),
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.any,
  setValue: PropTypes.func,
};

export default Input;
