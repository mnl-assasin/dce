import React from 'react'

export default ({ hasIcon = false, renderIcon = null, style = {}, ...props }) => (
  <div style={{ flexDirection: 'row', position: 'relative' }}>
    <input
      type="text"
      style={{
        fontSize: 16,
        color: 'gray',
        backgroundColor: 'white',
        padding: '0.75rem 0.5rem',
        borderRadius: 2,
        borderColor: '#dedede',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        paddingRight: hasIcon ? 40 : '1rem',
      }}
      placeholder=""
      {...props}
    />
    {hasIcon ? (
      <span style={{ position: 'absolute', right: 12, top: 11 }}>
        {renderIcon}
      </span>
    ) : null}
  </div>
)
