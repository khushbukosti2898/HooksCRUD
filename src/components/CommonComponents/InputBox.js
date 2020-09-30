import React, { memo, /* useRef */ } from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup } from 'reactstrap';

const InputBox = props => {
  const { title, isRequired, disabled, className, name, type, value, style, placeholder,
    onChange, onBlur, required, error } = props;

  // const componentRerenderedTimes = useRef(0);
  // componentRerenderedTimes.current++;

  return (<FormGroup>
    <b>{title}</b>{isRequired && <span className="error">*</span>}
    <input
      className={className}
      name={name}
      type={type}
      value={value}
      style={style}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      title={title}
      error={error}
    />{error && <span className="error">{` ${error.toLowerCase()}. `}</span>}
    <p>
      {/* Input component was rerendered {componentRerenderedTimes.current} times */}
      </p>
  </FormGroup>
  )
}

InputBox.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "please enter value",
  isRequired: false,
  disabled: false,
  className: 'form-control'
}

InputBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
}

export default memo(InputBox);