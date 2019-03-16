import { useState } from 'react'

// value true for display
export default (value = true) => {
  const [state, setState] = useState(value)
  const handelChange = () => {
    setState(!value)
  }
  return {
    value: state,
    onChange: handelChange
  }
}
