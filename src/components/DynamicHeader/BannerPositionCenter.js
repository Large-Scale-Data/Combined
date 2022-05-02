import React from 'react'
import {
  StyledTitleBox,
  ItemsContainer,
  StyledBanner,
  VerticalLine
} from './style'

export const BannerPositionCenter = props => {
  let length = props.items.length
  const half = Math.ceil(length / 2)
  const firstHalf = props.items.slice(0, half)
  const secondHalf = props.items.slice(half, length)

  return (
    <StyledBanner style={{ flexDirection: 'row' }}>
      {((props.isMobile && props.items.length < 3) || !props.isMobile) && (
        <ItemsContainer
          style={{
            justifyContent: 'space-evenly',
            // flexDirection: 'column',
            flexGrow: '1'
          }}
        >
          {firstHalf}
        </ItemsContainer>
      )}
      <StyledTitleBox style={{ width:(props.isMobile && props.items.length > 2)?'100%':null, textAlign: props.textAlign }}>
        {props.preText && <div> {props.preText} </div>}
        {props.title && <h1> {props.title} </h1>}
        {props.subText && <div> {props.subText} </div>}
      </StyledTitleBox>
      {((props.isMobile && props.items.length < 3) || !props.isMobile) && (
        <ItemsContainer
          style={{ justifyContent: 'space-evenly', flexGrow: '1' }}
        >
          {secondHalf}
        </ItemsContainer>
      )}
      
    </StyledBanner>
  )
}