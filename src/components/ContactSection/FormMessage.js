import React from "react"
import PropTypes from "prop-types"

const FormMessage = ({ children, type }) => {
  const color = type === "error" ? "#9a3f38" : "#6597a7"
  return (
    <div role="alert" style={{ color }}>
      {children}
    </div>
  )
}

FormMessage.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

FormMessage.defaultProps = {
  type: "error",
  children: "",
}

export default FormMessage
