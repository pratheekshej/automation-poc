import React from 'react'
import PropTypes from 'prop-types'
import './Common.scss'

const InputField = ({ name, type, value, callBack, preLabel, postLabel, disable, accept }) => {
  return (
    <div className="default_input_field_container">
      {preLabel && (
        <span className="input-group-text" id="basic-addon1">
          {preLabel}
        </span>
      )}
      <input
        name={name}
        className="default_input_field"
        type={type}
        value={value}
        disabled={disable}
        onChange={callBack}
        accept={accept}
      />
      {postLabel && (
        <span className="input-group-text" id="basic-addon1">
          {postLabel}
        </span>
      )}
    </div>
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  preLabel: PropTypes.string,
  postLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  accept: PropTypes.string,
}

InputField.defaultProps = {
  type: 'text',
  value: '',
  callBack: () => {},
  disable: false,
  accept: '',
}

export default InputField
