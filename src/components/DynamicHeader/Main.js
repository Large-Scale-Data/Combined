import { useState } from 'react'
import { BannerPosition } from './BannerPosition'
import { BannerPositionCenter } from './BannerPositionCenter'
import { StyledDynamicHeader } from './style'
import { DropDown } from '../General/DropDown'
import { useViewport } from '../../app/context'

export const DynamicHeader = props => {
  const { viewWidth, viewHeight } = useViewport()
  const {
    backgroundColor,
    color,
    position,
    preText,
    title,
    subText,
    items,
    children,
    type
  } = props

  const bannerType = () => {
    if (position === 'flex-start' || position === 'flex-end') {
      return (
        <BannerPosition
          isMobile={isMobile()}
          items={items}
          preText={preText}
          title={title}
          subText={subText}
          position={position}
        />
      )
    }
    if (position === 'center') {
      return (
        <BannerPositionCenter
          isMobile={isMobile()}
          items={items}
          preText={preText}
          title={title}
          subText={subText}
          position={position}
          textAlign={'center'}
        />
      )
    }
  }

  const isMobile = () => {
    if (viewWidth < 600) return true
    if (viewWidth > 600) return false
  }

  return (
    <StyledDynamicHeader
      backgroundColor={backgroundColor}
      color={color}
      position={position}
      type={type}
      mobile={isMobile()}
    >
      {bannerType()}
      <>
        {isMobile() && items.length > 2 && (
          <DropDown items={items}>
            <div>
              <div style={{ gap: ".3rem", display:'flex',flexDirection: 'row',}}>{items}</div>
              <div style={{ gap: ".3rem", display:'flex',flexDirection: 'row',marginTop:10,}}>{children}</div>
            </div>
          </DropDown>
        )}
        {(!isMobile() || (isMobile() && items.length< 3)) && children && (
          <DropDown items={items}>{children}</DropDown>
        )}
      </>
    </StyledDynamicHeader>
  )
}

DynamicHeader.defaultProps = {
  backgroundColor: 'null',
  color: 'black',
  position: 'center',
  items: []
}