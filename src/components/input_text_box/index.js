import React from 'react'
import { TextStyles  } from '../../constants/style'

const styles = {
  input: (hasIcon = false) => ({
    ...TextStyles.style3,
    backgroundColor: 'white',
    padding: '0.75rem 0.5rem',
    borderRadius: 2,
    borderColor: '#dedede',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    paddingRight: hasIcon ? 40 : '1rem',
  })
}

export default ({ hasIcon = false, renderIcon = null, style = {}, ...props }) => (
  <div style={{ flexDirection: 'row', position: 'relative' }}>
    <input
      type="text"
      style={styles.input(hasIcon)}
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

