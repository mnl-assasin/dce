import { useState } from 'react'

export default (value = '') => {
  const [state, setState] = useState(value)
  const handelChange = (e) => {
    setState(e.target.value)
  }
  return {
    value: state,
    onChange: handelChange
  }
}
