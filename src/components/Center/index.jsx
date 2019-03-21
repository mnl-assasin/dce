import React from 'react'

export default props => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
      {props.children}
    </div>
  )
}
