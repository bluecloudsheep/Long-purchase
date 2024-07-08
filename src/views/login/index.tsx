import React, { memo, useState } from 'react'
import classnames from 'classnames'
import StyledWrap from './styled'
import { Button } from 'antd'
const login: React.FC = memo(() => {
  const flag = false
  const width = '500px'
  return (
    <StyledWrap flags={flag} width={width}>
      login
      <div className={classnames('right-title', { 'flag-class': flag })}>
        woshi right-title
      </div>
      <Button type="primary">Primary Button</Button>
      <Button type="link">Link Button</Button>
    </StyledWrap>
  )
})

export default login
