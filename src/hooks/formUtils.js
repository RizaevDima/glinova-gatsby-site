const setValue = {
  text: v => v,
  checkbox: v => v,
  email: v => v,
  commentTextarea: v => v,
  password: v => v,
  yourName: v => v,
  yourPhone: v => {
    let value = parseFloat(v)
    value = isNaN(value) || value === 0 ? "" : Math.abs(value)
    return value
  },
}

const setFormObj = (data, fn) => ({ target }) => {
  const value = target.type === "checkbox" ? target.checked : target.value
  return fn({ ...data, [target.name]: setValue[target.name](value) })
}

export default setFormObj
