import styled from 'styled-components'

export const StyledDynamicHeader = styled.section`
    // border: 2px solid blue;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    //sam commented this out
    // height: 10%;
    padding: 10px;
    bottom:0;
    // sam added this v
    justify-content:center;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
`
export const StyledBanner = styled.div`
    // border: 2px solid pink;
    flex-direction: column;
    display: flex;
    padding: 0;
`
export const StyledTitleBox = styled.div`
    // border: 2px solid red;
    font-size: 0.8rem;
`
export const ItemsContainer = styled.div`
    // border: 2px solid green;
    display: flex;
    overflow-x:scroll;
    align-items: center;
    gap: .5rem;
`