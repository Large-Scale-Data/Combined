import React from 'react'
import {
  StyledTitleBox,
  ItemsContainer,
  StyledBanner,
  VerticalLine
} from './style'

export const BannerPosition = props => {
  const bannerOrder = [
    <StyledTitleBox
      style={{ width: props.isMobile && props.items.length > 2 ? '100%' : null }}
    >
      <div> {props.preText} </div>
      <h1> {props.title} </h1>
      <div> {props.subText} </div>
    </StyledTitleBox>,
    ((props.isMobile && props.items.length < 3) || !props.isMobile) && (
      <ItemsContainer>{props.items}</ItemsContainer>
    )
  ]
  const leftOrRight = () => {
    if (props.position === 'flex-start') {
      return (
        <StyledBanner
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          {bannerOrder[0]}
          {bannerOrder[1]}
        </StyledBanner>
      )
    }
    if (props.position === 'flex-end') {
      return (
        <StyledBanner
          style={{
            flexDirection: 'row',
            textAlign: 'end',
            justifyContent:
              props.items.length > 0 ? 'space-between' : props.position
          }}
        >
          {bannerOrder[1]}
          {bannerOrder[0]}
        </StyledBanner>
      )
    }
  }

  return leftOrRight()
}