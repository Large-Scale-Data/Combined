import React, { useState } from 'react';
import {RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { FaBeer} from "react-icons/fa";

import { ItemsContainer} from './style';

export const DropDown = (props) => {
    const {
        text,
        textColor,
        icon,
        iconColor, 
        children,
        items
    } = props

    // console.log('items',props.items)
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((previous) => { return !previous })
    }

    return ( 
        <div className='toggle-wrapper'>
            { clicked ? (
                <div className='children-container'>
                    <div style={{display:'flex', justifyContent:'end', color:textColor}}>
                        {text}
                        <div style={{color:iconColor}}
                            className='UpArrow'
                            onClick={() => handleClick()}
                        >
                            {icon || <RiArrowDropUpLine/>}
                        </div>
                    </div>
                    <ItemsContainer items={items} className='children'>{children}</ItemsContainer>
                </div>
            ) : (
                <div style={{display:'flex', justifyContent:'end', color:textColor}}>
                    {text}
                    <div style={{color:iconColor}}
                        className='DownArrow'
                        onClick={() => handleClick()}
                    >
                        {icon || <RiArrowDropDownLine/>}
                    </div>
                </div>
            )}
        </div>
    )
}