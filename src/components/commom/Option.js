import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ name, value, callBack, options }) => {
  return (
    <div className="default_input_field_container">
      <select
        className="form-select default_option_field"
        name={name}
        value={value}
        onChange={callBack}
      >
        {options?.length > 0 &&
          options?.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.value || 0}
              </option>
            )
          })}
      </select>
    </div>
  )
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
}

Option.defaultProps = {
  value: '',
  callBack: () => { },
}

export default Option
